/* ==========================================================================
   js/controllers/catalogCtrl.js — Controlador Principal: Personal Shopping
   Estándar Operativo V2.6 — Frontend MVC
   Compatible con Single-Page y Multi-Page Navigation (index, the-finds, etc.)
   ========================================================================== */

const getProductModel = () => window.productModel;
const getCartModel = () => window.cartModel;

// --- ESTADO LOCAL DEL CONTROLADOR ---
let currentCategory = 'available';
let searchQuery = '';
let currentSort = 'featured';
let isWishlistView = false;
let currentQuickViewProduct = null;
let selectedQuickViewSize = null;
let toastTimeout = null;

// --- ELEMENTOS DOM EN CACHÉ ---
let DOM = {};

function cacheDOMElements() {
    DOM = {
        gridContainer: document.getElementById('products-grid'),
        emptyState: document.getElementById('empty-state'),
        displayedCountEl: document.getElementById('displayed-count'),
        cartCountBadge: document.getElementById('cart-count-badge'),
        wishlistCountBadge: document.getElementById('wishlist-count-badge'),
        cartDrawerContainer: document.getElementById('cart-drawer-container'),
        cartDrawer: document.getElementById('cart-drawer'),
        cartBackdrop: document.getElementById('cart-backdrop'),
        cartItemsList: document.getElementById('cart-items-list'),
        cartSubtotalText: document.getElementById('cart-subtotal-text'),
        cartTotalText: document.getElementById('cart-total-text'),
        cartShippingText: document.getElementById('cart-shipping-text'),
        shippingProgressBar: document.getElementById('shipping-progress-bar'),
        shippingProgressText: document.getElementById('shipping-progress-text'),
        cartItemsQtyLabel: document.getElementById('cart-items-qty-label'),
        checkoutBtn: document.getElementById('checkout-whatsapp-btn'),
        toast: document.getElementById('toast'),
        toastMessage: document.getElementById('toast-message'),
        quickviewModal: document.getElementById('quickview-modal'),
        quickviewBackdrop: document.getElementById('quickview-backdrop'),
        searchInput: document.getElementById('search-input'),
        searchBarContainer: document.getElementById('search-bar-container'),
        sourcingForm: document.getElementById('sourcing-form'),
        sourcingPieceInput: document.getElementById('sourcing-piece'),
        mobileDrawer: document.getElementById('mobile-menu-drawer')
    };
}

// --- FORMATEADOR DE MONEDA ---
function formatMXN(val) {
    return new Intl.NumberFormat('es-MX', {
        style: 'currency',
        currency: 'MXN',
        minimumFractionDigits: 0
    }).format(val) + " MXN";
}

// --- NOTIFICACIONES TOAST ---
function showToast(msg) {
    if (!DOM.toast) DOM.toast = document.getElementById('toast');
    if (!DOM.toastMessage) DOM.toastMessage = document.getElementById('toast-message');
    if (!DOM.toast || !DOM.toastMessage) return;

    clearTimeout(toastTimeout);
    DOM.toastMessage.textContent = msg;
    DOM.toast.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
    DOM.toast.classList.add('translate-y-0', 'opacity-100');

    toastTimeout = setTimeout(() => {
        DOM.toast.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
        DOM.toast.classList.remove('translate-y-0', 'opacity-100');
    }, 3200);
}

// --- CONTROL DEL MENÚ MÓVIL ---
function toggleMobileNav(open) {
    if (!DOM.mobileDrawer) DOM.mobileDrawer = document.getElementById('mobile-menu-drawer');
    if (!DOM.mobileDrawer) return;

    if (open) {
        DOM.mobileDrawer.classList.remove('hidden');
        DOM.mobileDrawer.classList.add('flex');
        setTimeout(() => {
            DOM.mobileDrawer.classList.remove('-translate-x-full');
        }, 10);
        document.body.classList.add('overflow-hidden');
    } else {
        DOM.mobileDrawer.classList.add('-translate-x-full');
        setTimeout(() => {
            DOM.mobileDrawer.classList.remove('flex');
            DOM.mobileDrawer.classList.add('hidden');
        }, 300);
        document.body.classList.remove('overflow-hidden');
    }
}

// --- RENDERIZADO DEL CATÁLOGO "THE FINDS" ---
async function renderCatalog() {
    if (!DOM.gridContainer) DOM.gridContainer = document.getElementById('products-grid');
    if (!DOM.gridContainer) return;

    const pModel = getProductModel();
    const cModel = getCartModel();
    if (!pModel || !cModel) return;

    let products = [];
    if (isWishlistView) {
        const wishlistIds = [...cModel.getWishlist()];
        products = await pModel.getByIds(wishlistIds);
    } else {
        products = await pModel.getAll({
            category: currentCategory,
            searchQuery,
            sortBy: currentSort
        });
    }

    if (DOM.displayedCountEl) {
        DOM.displayedCountEl.textContent = products.length;
    }

    if (products.length === 0) {
        DOM.gridContainer.innerHTML = '';
        if (DOM.emptyState) DOM.emptyState.classList.remove('hidden');
        return;
    }

    if (DOM.emptyState) DOM.emptyState.classList.add('hidden');

    DOM.gridContainer.innerHTML = products.map(product => {
        const isFav = cModel.isWishlisted(product.id);

        let actionBtnHtml = '';
        if (product.category === 'available') {
            actionBtnHtml = `
        <button 
          type="button"
          data-action="quick-add"
          data-id="${product.id}"
          class="text-[11px] uppercase tracking-wider text-olive hover:text-brokenwhite font-medium flex items-center gap-1 group/btn transition-colors px-2 py-1"
        >
          <span>Añadir Bolsa</span>
          <span class="transform group-hover/btn:translate-x-0.5 transition-transform">+</span>
        </button>
      `;
        } else if (product.category === 'on-request') {
            actionBtnHtml = `
        <button 
          type="button"
          data-action="open-quickview"
          data-id="${product.id}"
          class="text-[11px] uppercase tracking-wider text-olive hover:text-brokenwhite font-medium flex items-center gap-1 transition-colors px-2 py-1"
        >
          <span>Encargar</span>
          <span>→</span>
        </button>
      `;
        } else {
            actionBtnHtml = `
        <button 
          type="button"
          data-action="source-similar"
          data-name="${encodeURIComponent(product.name)}"
          class="text-[11px] uppercase tracking-wider text-ash hover:text-olive font-medium flex items-center gap-1 transition-colors px-2 py-1"
        >
          <span>Pedir Similar</span>
          <span>↗</span>
        </button>
      `;
        }

        return `
      <div class="product-card group flex flex-col justify-between bg-carbon/50 p-3 rounded-xl border border-carbon-light/40" data-id="${product.id}">
        <div>
          <!-- Contenedor de Imagen con Efecto Hover Flip y Fondo Gris de Estudio (#8B8B8D) -->
          <div class="product-img-wrapper mb-3 cursor-pointer relative bg-studiogray" data-action="open-quickview" data-id="${product.id}">
            <img 
              src="${product.images[0]}" 
              alt="${product.name}" 
              width="600"
              height="800"
              class="product-img-primary"
              loading="lazy"
              onerror="this.src='https://placehold.co/600x800/8B8B8D/F8FAFC?text=${encodeURIComponent(product.name)}'"
            />
            <img 
              src="${product.images[1]}" 
              alt="${product.name} detalle" 
              width="600"
              height="800"
              class="product-img-secondary"
              loading="lazy"
              onerror="this.src='${product.images[0]}'"
            />

            <!-- Badge Superior Izquierdo -->
            <div class="absolute top-3 left-3 z-10">
              <span class="text-[9px] uppercase tracking-ultra font-semibold px-2.5 py-1 rounded-full bg-carbon-dark/95 text-ash border border-carbon-light/60 backdrop-blur-sm">
                ${product.badge}
              </span>
            </div>

            <!-- Botón Lista de Deseos -->
            <button 
              type="button"
              data-action="toggle-wishlist"
              data-id="${product.id}"
              aria-label="Guardar en favoritos"
              class="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-carbon-dark/85 backdrop-blur-sm flex items-center justify-center text-brokenwhite hover:text-olive transition-colors"
            >
              <svg class="w-4 h-4 pointer-events-none ${isFav ? 'fill-olive text-olive' : 'fill-none stroke-current'}" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="1.5" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"/>
              </svg>
            </button>

            <!-- Pill Flotante de Vista Rápida -->
            <div class="absolute inset-x-3 bottom-3 z-10 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <button 
                type="button"
                data-action="open-quickview"
                data-id="${product.id}"
                class="w-full py-2.5 bg-carbon/95 text-brokenwhite hover:bg-olive hover:text-carbon-dark text-[11px] uppercase tracking-widest font-medium rounded-full transition-colors backdrop-blur-md shadow-lg"
              >
                Detalles & Medidas
              </button>
            </div>
          </div>

          <!-- Detalles del Producto -->
          <div class="space-y-1">
            <div class="flex items-center justify-between text-[10px] uppercase tracking-ultra text-basegray font-mono">
              <span>${product.origin}</span>
              <span class="text-olive font-semibold">${product.categoryLabel}</span>
            </div>
            <h4 
              data-action="open-quickview" 
              data-id="${product.id}"
              class="text-sm font-light tracking-wide text-brokenwhite cursor-pointer hover:text-olive transition-colors leading-snug"
            >
              ${product.name}
            </h4>
            <p class="text-xs text-ash/80 line-clamp-1 font-light">${product.subtitle}</p>
          </div>
        </div>

        <!-- Precio y Botón de Acción -->
        <div class="pt-3 mt-2 flex items-center justify-between border-t border-carbon-light/30">
          <span class="text-xs font-mono text-brokenwhite">${formatMXN(product.price)}</span>
          ${actionBtnHtml}
        </div>
      </div>
    `;
    }).join('');
}

// --- ACTUALIZACIÓN DE INTERFAZ DEL CARRITO ---
function updateCartView() {
    const cModel = getCartModel();
    if (!cModel) return;

    const state = cModel.getState();

    if (DOM.cartCountBadge) {
        DOM.cartCountBadge.textContent = state.totalItems;
    }
    if (DOM.cartItemsQtyLabel) {
        DOM.cartItemsQtyLabel.textContent = `${state.totalItems} ${state.totalItems === 1 ? 'prenda seleccionada' : 'prendas seleccionadas'}`;
    }

    if (DOM.cartSubtotalText) DOM.cartSubtotalText.textContent = formatMXN(state.subtotal);
    if (DOM.cartTotalText) DOM.cartTotalText.textContent = formatMXN(state.subtotal);

    const threshold = 4500;
    if (DOM.shippingProgressBar && DOM.shippingProgressText && DOM.cartShippingText) {
        if (state.subtotal >= threshold) {
            DOM.shippingProgressBar.style.width = '100%';
            DOM.shippingProgressText.innerHTML = `<span class="text-olive font-semibold">¡Felicidades! Calificas para envío gratis asegurado en México</span>`;
            DOM.cartShippingText.textContent = 'Gratis';
        } else if (state.subtotal > 0) {
            const remaining = threshold - state.subtotal;
            const percent = Math.min(100, Math.round((state.subtotal / threshold) * 100));
            DOM.shippingProgressBar.style.width = `${percent}%`;
            DOM.shippingProgressText.innerHTML = `Agrega <strong class="text-brokenwhite">${formatMXN(remaining)}</strong> más para envío de cortesía`;
            DOM.cartShippingText.textContent = '$280 MXN';
        } else {
            DOM.shippingProgressBar.style.width = '0%';
            DOM.shippingProgressText.textContent = 'Envío gratis a partir de $4,500 MXN';
            DOM.cartShippingText.textContent = 'Calculado al pagar';
        }
    }

    if (!DOM.cartItemsList) return;

    if (state.items.length === 0) {
        DOM.cartItemsList.innerHTML = `
      <div class="h-64 flex flex-col items-center justify-center text-center text-ash space-y-3">
        <svg class="w-10 h-10 text-basegray stroke-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 10.5V6a3.75 3.75 0 10-7.5 0v4.5m11.356-1.993l1.263 12c.07.665-.45 1.243-1.119 1.243H4.25c-.67 0-1.19-.578-1.12-1.243l1.264-12A1.125 1.125 0 015.513 7.5h12.974c.576 0 1.059.435 1.119 1.007zM8.625 10.5a.375.375 0 11-.75 0 .375.375 0 01.75 0z"/>
        </svg>
        <p class="text-xs uppercase tracking-widest">Tu bolsa está vacía actualmente</p>
        <a href="./the-finds.html" data-action="close-cart" class="text-xs text-olive underline uppercase tracking-wider">Explorar The Finds</a>
      </div>
    `;
        if (DOM.checkoutBtn) {
            DOM.checkoutBtn.disabled = true;
            DOM.checkoutBtn.classList.add('opacity-50', 'cursor-not-allowed');
        }
    } else {
        if (DOM.checkoutBtn) {
            DOM.checkoutBtn.disabled = false;
            DOM.checkoutBtn.classList.remove('opacity-50', 'cursor-not-allowed');
        }

        DOM.cartItemsList.innerHTML = state.items.map((item, idx) => `
      <div class="flex gap-4 p-3 bg-carbon-dark/50 rounded-lg border border-carbon-light/30">
        <img src="${item.product.images[0]}" alt="${item.product.name}" class="w-20 h-24 object-cover rounded bg-carbon">
        <div class="flex-1 flex flex-col justify-between py-0.5">
          <div class="flex justify-between items-start">
            <div>
              <h5 class="text-xs font-medium text-brokenwhite leading-tight">${item.product.name}</h5>
              <p class="text-[11px] text-basegray">Talla: <span class="text-ash font-mono">${item.size}</span></p>
              <span class="text-[9px] uppercase tracking-wider text-olive font-medium">${item.product.categoryLabel}</span>
            </div>
            <button type="button" data-action="remove-cart-item" data-index="${idx}" class="text-basegray hover:text-red-400 p-1" title="Eliminar" aria-label="Eliminar prenda">
              <svg class="w-3.5 h-3.5 pointer-events-none" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"/></svg>
            </button>
          </div>

          <div class="flex items-center justify-between mt-2">
            <div class="flex items-center border border-carbon-light/60 rounded px-2 py-0.5 bg-carbon">
              <button type="button" data-action="change-qty" data-index="${idx}" data-delta="-1" class="text-ash hover:text-brokenwhite text-xs px-1" aria-label="Disminuir">-</button>
              <span class="text-xs font-mono px-2 text-brokenwhite">${item.qty}</span>
              <button type="button" data-action="change-qty" data-index="${idx}" data-delta="1" class="text-ash hover:text-brokenwhite text-xs px-1" aria-label="Aumentar">+</button>
            </div>
            <span class="text-xs font-mono text-brokenwhite">${formatMXN(item.product.price * item.qty)}</span>
          </div>
        </div>
      </div>
    `).join('');
    }
}

// --- ACTUALIZACIÓN DE WISHLIST BADGE ---
function updateWishlistView() {
    const cModel = getCartModel();
    if (!cModel) return;

    const wishlist = cModel.getWishlist();
    if (DOM.wishlistCountBadge) {
        DOM.wishlistCountBadge.textContent = wishlist.size;
        if (wishlist.size > 0) {
            DOM.wishlistCountBadge.classList.remove('hidden');
            DOM.wishlistCountBadge.classList.add('flex');
        } else {
            DOM.wishlistCountBadge.classList.add('hidden');
            DOM.wishlistCountBadge.classList.remove('flex');
        }
    }
}

// --- VISTA RÁPIDA (QUICK VIEW MODAL) ---
async function openQuickViewModal(productId) {
    const pModel = getProductModel();
    if (!pModel) return;

    const product = await pModel.getById(productId);
    if (!product) return;

    currentQuickViewProduct = product;
    selectedQuickViewSize = product.sizes[0];

    const qvImg = document.getElementById('qv-image');
    if (qvImg) {
        qvImg.src = product.images[0];
        qvImg.alt = product.name;
    }

    const qvBadge = document.getElementById('qv-badge');
    if (qvBadge) qvBadge.textContent = product.badge;

    const qvCat = document.getElementById('qv-category');
    if (qvCat) qvCat.textContent = `Sección: ${product.categoryLabel}`;

    const qvTitle = document.getElementById('qv-title');
    if (qvTitle) qvTitle.textContent = product.name;

    const qvPrice = document.getElementById('qv-price');
    if (qvPrice) qvPrice.textContent = formatMXN(product.price);

    const qvDesc = document.getElementById('qv-description');
    if (qvDesc) qvDesc.textContent = product.description;

    const qvOrigin = document.getElementById('qv-origin');
    if (qvOrigin) qvOrigin.textContent = product.origin;

    const qvComposition = document.getElementById('qv-composition');
    if (qvComposition) qvComposition.textContent = product.composition;

    const qvFit = document.getElementById('qv-fit');
    if (qvFit) qvFit.textContent = product.fit;

    const addBtn = document.getElementById('qv-add-btn');
    if (addBtn) {
        if (product.category === 'available') {
            addBtn.innerHTML = `<span>Añadir a la Bolsa</span>`;
        } else if (product.category === 'on-request') {
            addBtn.innerHTML = `<span>Encargar Pieza (On Request)</span>`;
        } else {
            addBtn.innerHTML = `<span>Solicitar Búsqueda de Pieza Similar</span>`;
        }
    }

    const sizesContainer = document.getElementById('qv-sizes-container');
    if (sizesContainer) {
        sizesContainer.innerHTML = product.sizes.map((sz, idx) => `
      <button 
        type="button"
        data-action="select-qv-size"
        data-size="${sz}"
        class="qv-size-btn px-3 py-1.5 text-xs font-mono uppercase rounded border transition-colors ${idx === 0 ? 'border-olive text-olive bg-olive/10' : 'border-carbon-light text-ash hover:border-brokenwhite'}"
      >
        ${sz}
      </button>
    `).join('');
    }

    if (DOM.quickviewModal) {
        DOM.quickviewModal.classList.remove('hidden');
        DOM.quickviewModal.classList.add('flex');
        document.body.classList.add('overflow-hidden');
    }
}

function closeQuickViewModal() {
    if (DOM.quickviewModal) {
        DOM.quickviewModal.classList.add('hidden');
        DOM.quickviewModal.classList.remove('flex');
        document.body.classList.remove('overflow-hidden');
        currentQuickViewProduct = null;
    }
}

// --- DRAWER DE CARRITO ---
function openCart() {
    if (!DOM.cartDrawerContainer) cacheDOMElements();
    if (DOM.cartDrawerContainer && DOM.cartDrawer) {
        DOM.cartDrawerContainer.classList.remove('hidden', 'pointer-events-none', 'opacity-0');
        DOM.cartDrawerContainer.classList.add('flex', 'pointer-events-auto', 'opacity-100');
        setTimeout(() => {
            DOM.cartDrawer.classList.remove('translate-x-full');
        }, 10);
        document.body.classList.add('overflow-hidden');
    }
}

function closeCart() {
    if (DOM.cartDrawerContainer && DOM.cartDrawer) {
        DOM.cartDrawer.classList.add('translate-x-full');
        DOM.cartDrawerContainer.classList.remove('pointer-events-auto', 'opacity-100');
        DOM.cartDrawerContainer.classList.add('pointer-events-none', 'opacity-0');
        setTimeout(() => {
            if (DOM.cartDrawer && DOM.cartDrawer.classList.contains('translate-x-full')) {
                DOM.cartDrawerContainer.classList.add('hidden');
                DOM.cartDrawerContainer.classList.remove('flex');
            }
        }, 320);
        document.body.classList.remove('overflow-hidden');
    }
}

// --- CHECKOUT & WHATSAPP ORDERS ---
function checkoutWhatsApp() {
    const cModel = getCartModel();
    if (!cModel) return;

    const state = cModel.getState();
    if (state.items.length === 0) return;

    let message = `*ORDEN PERSONAL SHOPPING — FOUND IN ASIA MX*\n`;
    message += `-------------------------------------------\n`;
    state.items.forEach((item, i) => {
        message += `${i + 1}. ${item.product.name} [${item.product.categoryLabel}] (Talla: ${item.size}) x${item.qty} — ${formatMXN(item.product.price * item.qty)}\n`;
    });
    message += `-------------------------------------------\n`;
    message += `*Total estimado:* ${formatMXN(state.subtotal)}\n`;
    message += `*Solicito confirmación de inventario y datos para transferencia/tarjeta.*\n`;
    message += `Ciudad de entrega en México: [Favor de especificar]`;

    window.open(`https://wa.me/525589201204?text=${encodeURIComponent(message)}`, '_blank');
}

function simulateCheckout() {
    const cModel = getCartModel();
    if (!cModel) return;

    const state = cModel.getState();
    if (state.items.length === 0) return;

    closeCart();
    showToast("Conectando con la pasarela bancaria segura...");
    setTimeout(() => {
        showToast("¡Pedido simulado con éxito! Recibirás confirmación por correo.");
        cModel.clear();
        updateCartView();
    }, 1200);
}

// --- FILTRADO DE CATEGORÍAS EN "THE FINDS" ---
function setCategory(cat, shouldScroll = false) {
    currentCategory = (cat && ['available', 'on-request', 'archive'].includes(cat)) ? cat : 'available';
    isWishlistView = false;

    // Actualizar pastillas de filtro
    document.querySelectorAll('.cat-pill').forEach(btn => {
        if (btn.dataset.cat === currentCategory) {
            btn.className = 'cat-pill active px-5 py-2.5 text-xs uppercase tracking-wider rounded-full transition-all whitespace-nowrap bg-olive text-carbon-dark font-semibold shadow-sm';
        } else {
            btn.className = 'cat-pill px-5 py-2.5 text-xs uppercase tracking-wider rounded-full transition-all whitespace-nowrap bg-carbon text-ash hover:text-brokenwhite border border-carbon-light/60';
        }
    });

    // Actualizar bloques grandes de categorías (si existen)
    document.querySelectorAll('.cat-block-card').forEach(card => {
        if (card.dataset.cat === currentCategory) {
            card.classList.add('border-olive', 'bg-carbon', 'ring-2', 'ring-olive/50', 'shadow-lg');
            card.classList.remove('border-carbon-light/60');
            const arrow = card.querySelector('span.transform');
            if (arrow) arrow.textContent = '● Seleccionado';
        } else {
            card.classList.remove('border-olive', 'ring-2', 'ring-olive/50', 'shadow-lg');
            card.classList.add('border-carbon-light/60');
            const arrow = card.querySelector('span.transform');
            if (arrow) arrow.textContent = '→';
        }
    });

    // Actualizar banner indicador de vista activa (si existe)
    const banner = document.getElementById('active-view-indicator');
    if (banner) {
        const labels = {
            'all': 'Todos los Hallazgos de Archivo (12 piezas)',
            'available': 'Available — Entrega Inmediata en México (6 piezas)',
            'on-request': 'Source on Request — Búsqueda en Viajes Activos (3 piezas)',
            'archive': 'Archive — Colección Histórica y Referencia (3 piezas)'
        };
        const titleEl = banner.querySelector('.view-title');
        if (titleEl) {
            titleEl.textContent = labels[currentCategory] || 'Catálogo The Finds';
        }
    }

    // Actualizar estado activo en enlaces de submenús de navegación (Desktop Dropdown y Menú Móvil)
    document.querySelectorAll('a[href*="the-finds.html"]').forEach(link => {
        try {
            const linkHref = link.getAttribute('href') || '';
            let linkCat = 'all';
            if (linkHref.includes('cat=')) {
                const match = linkHref.match(/cat=([a-zA-Z0-9_-]+)/);
                if (match) linkCat = match[1];
            }

            // Submenú móvil (formato de lista vertical)
            if (link.closest('#mobile-the-finds-submenu')) {
                const dot = link.querySelector('.subnav-dot');
                if (linkCat === currentCategory) {
                    link.classList.add('bg-carbon', 'text-olive', 'font-medium', 'shadow-sm');
                    link.classList.remove('text-brokenwhite');
                    if (dot) {
                        dot.classList.add('bg-olive');
                        dot.classList.remove('bg-ash/40');
                    }
                } else {
                    link.classList.remove('bg-carbon', 'text-olive', 'font-medium', 'shadow-sm');
                    if (linkCat !== 'all') {
                        link.classList.add('text-brokenwhite');
                    }
                    if (dot) {
                        dot.classList.remove('bg-olive');
                        dot.classList.add('bg-ash/40');
                    }
                }
            }

            // Dropdown Desktop
            if (link.closest('.group') && link.closest('nav')) {
                if (linkCat === currentCategory && linkHref.includes('cat=')) {
                    link.classList.add('text-olive', 'font-bold');
                } else {
                    link.classList.remove('text-olive', 'font-bold');
                }
            }
        } catch (e) {}
    });

    renderCatalog();

    if (shouldScroll) {
        const targetEl = document.getElementById('active-view-indicator') || document.getElementById('products-grid');
        if (targetEl) {
            targetEl.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
    }
}

function resetFilters() {
    searchQuery = '';
    if (DOM.searchInput) DOM.searchInput.value = '';
    setCategory('available', true);
}

function setGridCols(cols) {
    if (!DOM.gridContainer) DOM.gridContainer = document.getElementById('products-grid');
    if (!DOM.gridContainer) return;

    DOM.gridContainer.classList.remove(
        'grid-cols-1', 'grid-cols-2', 'grid-cols-3',
        'sm:grid-cols-2', 'sm:grid-cols-3',
        'md:grid-cols-2', 'md:grid-cols-3',
        'lg:grid-cols-2', 'lg:grid-cols-3', 'lg:grid-cols-4'
    );

    const btn2 = document.getElementById('grid-btn-2');
    const btn3 = document.getElementById('grid-btn-3');

    [btn2, btn3].forEach(b => {
        if (b) b.className = 'p-1.5 rounded-full text-ash hover:text-brokenwhite transition-colors';
    });

    if (cols === 2) {
        DOM.gridContainer.classList.add('grid-cols-2', 'sm:grid-cols-2', 'md:grid-cols-2', 'lg:grid-cols-2');
        if (btn2) btn2.className = 'p-1.5 rounded-full bg-olive text-carbon-dark transition-colors';
    } else {
        DOM.gridContainer.classList.add('grid-cols-2', 'sm:grid-cols-2', 'md:grid-cols-3', 'lg:grid-cols-3');
        if (btn3) btn3.className = 'p-1.5 rounded-full bg-olive text-carbon-dark transition-colors';
    }
}

// --- DISPATCHER CENTRAL DE EVENTOS (DELEGACIÓN GLOBAL) ---
function handleGlobalClick(e) {
    const target = e.target.closest('[data-action]');
    if (!target) return;

    const action = target.dataset.action;
    const id = target.dataset.id;
    const index = parseInt(target.dataset.index, 10);
    const delta = parseInt(target.dataset.delta, 10);
    const cat = target.dataset.cat;
    const cols = parseInt(target.dataset.cols, 10);

    const pModel = getProductModel();
    const cModel = getCartModel();

    switch (action) {
        case 'open-quickview':
            openQuickViewModal(id);
            break;

        case 'close-quickview':
            closeQuickViewModal();
            break;

        case 'quick-add':
            if (pModel && cModel) {
                pModel.getById(id).then(prod => {
                    if (prod) {
                        cModel.addItem(prod, prod.sizes[0]);
                        updateCartView();
                        showToast(`${prod.name} añadida a tu bolsa`);
                        openCart();
                    }
                });
            }
            break;

        case 'add-qv-to-bag':
            if (currentQuickViewProduct && cModel) {
                if (currentQuickViewProduct.category === 'archive') {
                    closeQuickViewModal();
                    const targetUrl = `./personal-sourcing.html?piece=${encodeURIComponent(currentQuickViewProduct.name)}`;
                    const sourcingSection = document.getElementById('personal-sourcing');
                    if (sourcingSection) {
                        if (DOM.sourcingPieceInput) {
                            DOM.sourcingPieceInput.value = `Pieza similar a: ${currentQuickViewProduct.name} (${currentQuickViewProduct.origin})`;
                        }
                        sourcingSection.scrollIntoView({ behavior: 'smooth' });
                        showToast("Pieza de archivo enviada al formulario de Personal Sourcing");
                    } else {
                        window.location.href = targetUrl;
                    }
                } else {
                    cModel.addItem(currentQuickViewProduct, selectedQuickViewSize || currentQuickViewProduct.sizes[0]);
                    updateCartView();
                    showToast(`${currentQuickViewProduct.name} añadida a tu bolsa`);
                    closeQuickViewModal();
                    openCart();
                }
            }
            break;

        case 'qv-whatsapp-order':
            if (currentQuickViewProduct) {
                const text = `Hola Found in Asia MX, me interesa la pieza "${currentQuickViewProduct.name}" [${currentQuickViewProduct.categoryLabel}] (Talla: ${selectedQuickViewSize || 'Estándar'}) de ${formatMXN(currentQuickViewProduct.price)}. ¿Tienen disponibilidad o fecha de sourcing?`;
                window.open(`https://wa.me/525589201204?text=${encodeURIComponent(text)}`, '_blank');
            }
            break;

        case 'source-similar':
            const pieceName = decodeURIComponent(target.dataset.name || '');
            const sourcingEl = document.getElementById('personal-sourcing');
            if (sourcingEl) {
                if (DOM.sourcingPieceInput && pieceName) {
                    DOM.sourcingPieceInput.value = `Búsqueda de pieza similar: ${pieceName}`;
                }
                sourcingEl.scrollIntoView({ behavior: 'smooth' });
                showToast(`Listo: Solicita "${pieceName}" en Personal Sourcing`);
            } else {
                window.location.href = `./personal-sourcing.html?piece=${encodeURIComponent(pieceName)}`;
            }
            break;

        case 'request-destination-sourcing':
            const tripName = target.dataset.destination || 'Próximo Drop';
            const srcEl = document.getElementById('personal-sourcing');
            if (srcEl) {
                if (DOM.sourcingPieceInput) {
                    DOM.sourcingPieceInput.value = `Encargo especial para el viaje a: ${tripName}`;
                }
                srcEl.scrollIntoView({ behavior: 'smooth' });
                showToast(`Destino "${tripName}" preseleccionado para tu encargo`);
            } else {
                window.location.href = `./personal-sourcing.html?destination=${encodeURIComponent(tripName)}`;
            }
            break;

        case 'toggle-wishlist':
            if (cModel) {
                const res = cModel.toggleWishlist(id);
                updateWishlistView();
                showToast(res.added ? "Guardado en tu lista de deseos" : "Eliminado de tu lista de deseos");
                renderCatalog();
            }
            break;

        case 'open-cart':
            openCart();
            break;

        case 'close-cart':
            closeCart();
            break;

        case 'change-qty':
            if (cModel) {
                cModel.updateQty(index, delta);
                updateCartView();
            }
            break;

        case 'remove-cart-item':
            if (cModel) {
                cModel.removeItem(index);
                updateCartView();
                showToast("Prenda retirada de la bolsa");
            }
            break;

        case 'checkout-whatsapp':
            checkoutWhatsApp();
            break;

        case 'checkout-simulate':
            simulateCheckout();
            break;

        case 'filter-cat':
            setCategory(cat, true);
            if (window.location.pathname.includes('the-finds')) {
                try {
                    const newUrl = cat === 'all' ? './the-finds.html' : `./the-finds.html?cat=${cat}`;
                    window.history.pushState({ cat }, '', newUrl);
                } catch (e) {}
            }
            break;

        case 'reset-filters':
            resetFilters();
            break;

        case 'set-grid-cols':
            setGridCols(cols);
            break;

        case 'select-qv-size':
            selectedQuickViewSize = target.dataset.size;
            document.querySelectorAll('.qv-size-btn').forEach(btn => {
                btn.className = 'qv-size-btn px-3 py-1.5 text-xs font-mono uppercase rounded border transition-colors border-carbon-light text-ash hover:border-brokenwhite';
            });
            target.className = 'qv-size-btn px-3 py-1.5 text-xs font-mono uppercase rounded border transition-colors border-olive text-olive bg-olive/10';
            break;
    }
}

// --- FORMULARIO DE PERSONAL SOURCING ---
function initSourcingForm() {
    const form = document.getElementById('sourcing-form');
    if (!form) return;

    // Verificar si hay parámetros en la URL (?piece=... o ?destination=...)
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const pieceParam = urlParams.get('piece');
        const destParam = urlParams.get('destination');
        const input = document.getElementById('sourcing-piece');
        if (input) {
            if (pieceParam) {
                input.value = `Pieza solicitada: ${decodeURIComponent(pieceParam)}`;
            } else if (destParam) {
                input.value = `Encargo especial para viaje: ${decodeURIComponent(destParam)}`;
            }
        }
    } catch (e) {
        // Fallback
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();

        const name = document.getElementById('sourcing-name')?.value.trim();
        const contact = document.getElementById('sourcing-contact')?.value.trim();
        const piece = document.getElementById('sourcing-piece')?.value.trim();
        const link = document.getElementById('sourcing-link')?.value.trim();
        const photoFile = document.getElementById('sourcing-photo')?.files?.[0];
        const budget = document.getElementById('sourcing-budget')?.value.trim();
        const notes = document.getElementById('sourcing-notes')?.value.trim();

        if (!name || !contact || !piece) {
            showToast("Por favor completa los campos principales de tu solicitud");
            return;
        }

        let msg = `*SOLICITUD DE PERSONAL SOURCING — FOUND IN ASIA MX*\n`;
        msg += `-------------------------------------------------\n`;
        msg += `*Cliente:* ${name}\n`;
        msg += `*Contacto:* ${contact}\n`;
        msg += `*Pieza / Diseñador solicitado:* ${piece}\n`;
        if (link) msg += `*Enlace de Referencia:* ${link}\n`;
        if (photoFile) msg += `*Fotografía adjunta:* ${photoFile.name} (te la envío en este chat)\n`;
        if (budget) msg += `*Presupuesto aproximado:* ${budget}\n`;
        if (notes) msg += `*Detalles / Talla / Referencias:* ${notes}\n`;
        msg += `-------------------------------------------------\n`;
        msg += `*Solicito inicio de búsqueda en su próximo viaje a Asia.*`;

        showToast("¡Solicitud enviada! Conectando con tu personal shopper vía WhatsApp...");

        setTimeout(() => {
            window.open(`https://wa.me/525589201204?text=${encodeURIComponent(msg)}`, '_blank');
            form.reset();
        }, 800);
    });
}

// --- ENLACES DE NAVEGACIÓN SUAVE & CIERRE DE MENÚ ---
function initNavigationScroll() {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (!href || href === '#' || href === '#!') return;
            const targetEl = document.querySelector(href);
            if (targetEl) {
                e.preventDefault();
                toggleMobileNav(false);
                targetEl.scrollIntoView({ behavior: 'smooth' });
                if (history.pushState) {
                    history.pushState(null, null, href);
                }
            }
        });
    });
}

// --- INICIALIZACIÓN DE LISTENERS ---
function initListeners() {
    document.addEventListener('click', handleGlobalClick);

    initNavigationScroll();
    initSourcingForm();

    // Búsqueda interactiva
    const searchToggle = document.getElementById('search-toggle-btn');
    const clearSearch = document.getElementById('clear-search-btn');

    if (searchToggle && DOM.searchBarContainer && DOM.searchInput) {
        searchToggle.addEventListener('click', () => {
            DOM.searchBarContainer.classList.toggle('hidden');
            if (!DOM.searchBarContainer.classList.contains('hidden')) {
                DOM.searchInput.focus();
            }
        });
    }

    if (clearSearch && DOM.searchBarContainer && DOM.searchInput) {
        clearSearch.addEventListener('click', () => {
            DOM.searchBarContainer.classList.add('hidden');
            searchQuery = '';
            DOM.searchInput.value = '';
            renderCatalog();
        });
    }

    if (DOM.searchInput) {
        DOM.searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value.trim();
            if (DOM.gridContainer) {
                renderCatalog();
            }
        });

        DOM.searchInput.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') {
                const q = DOM.searchInput.value.trim();
                if (!DOM.gridContainer && q) {
                    window.location.href = `./the-finds.html?q=${encodeURIComponent(q)}`;
                }
            }
        });
    }

    // Selector de orden
    const sortSelect = document.getElementById('sort-select');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderCatalog();
        });
    }

    // Botón de Wishlist en el header
    const wishlistBtn = document.getElementById('wishlist-btn');
    if (wishlistBtn) {
        wishlistBtn.addEventListener('click', () => {
            const cModel = getCartModel();
            if (!cModel) return;

            const list = cModel.getWishlist();
            if (list.size === 0) {
                showToast("Aún no tienes piezas guardadas en tu lista de deseos");
            } else {
                isWishlistView = true;
                showToast(`Mostrando ${list.size} piezas de tu lista de deseos`);
                const catalogoEl = document.getElementById('the-finds') || document.getElementById('products-grid');
                if (catalogoEl) catalogoEl.scrollIntoView({ behavior: 'smooth' });
                renderCatalog();
            }
        });
    }

    // Menú Móvil
    const mobileBtn = document.getElementById('mobile-menu-btn');
    const closeMobileBtn = document.getElementById('close-mobile-menu-btn');
    const mobileBackdrop = document.getElementById('mobile-menu-backdrop');

    if (mobileBtn) mobileBtn.addEventListener('click', () => toggleMobileNav(true));
    if (closeMobileBtn) closeMobileBtn.addEventListener('click', () => toggleMobileNav(false));
    if (mobileBackdrop) mobileBackdrop.addEventListener('click', () => toggleMobileNav(false));

    // Submenú acordeón The Finds en Menú Móvil
    const mobileFindsToggle = document.getElementById('mobile-the-finds-toggle');
    const mobileFindsSubmenu = document.getElementById('mobile-the-finds-submenu');
    const mobileFindsChevron = document.getElementById('mobile-the-finds-chevron');

    if (mobileFindsToggle && mobileFindsSubmenu) {
        mobileFindsToggle.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = mobileFindsSubmenu.classList.contains('hidden');
            if (isHidden) {
                mobileFindsSubmenu.classList.remove('hidden');
                if (mobileFindsChevron) mobileFindsChevron.classList.add('rotate-180');
                mobileFindsToggle.setAttribute('aria-expanded', 'true');
            } else {
                mobileFindsSubmenu.classList.add('hidden');
                if (mobileFindsChevron) mobileFindsChevron.classList.remove('rotate-180');
                mobileFindsToggle.setAttribute('aria-expanded', 'false');
            }
        });
    }

    const mobileSearchBtn = document.getElementById('mobile-search-trigger-btn');
    if (mobileSearchBtn && DOM.searchBarContainer && DOM.searchInput) {
        mobileSearchBtn.addEventListener('click', () => {
            toggleMobileNav(false);
            DOM.searchBarContainer.classList.remove('hidden');
            DOM.searchInput.focus();
        });
    }

    // Intercepción dinámica de enlaces a subsecciones de The Finds para cambio instantáneo de vista
    document.addEventListener('click', (e) => {
        const link = e.target.closest('a[href*="the-finds.html?cat="], a[href="./the-finds.html"], a[href="the-finds.html"]');
        if (!link) return;

        const isTheFindsPage = window.location.pathname.includes('the-finds.html') || window.location.pathname.endsWith('/the-finds');
        if (isTheFindsPage) {
            try {
                const url = new URL(link.href, window.location.href);
                const cat = url.searchParams.get('cat') || 'available';
                e.preventDefault();
                toggleMobileNav(false);
                setCategory(cat, true);
                window.history.pushState({ cat }, '', url.href);
            } catch (err) {}
        }
    });

    window.addEventListener('popstate', () => {
        const isTheFindsPage = window.location.pathname.includes('the-finds.html') || window.location.pathname.endsWith('/the-finds');
        if (isTheFindsPage) {
            const urlParams = new URLSearchParams(window.location.search);
            const cat = urlParams.get('cat') || 'available';
            setCategory(cat, false);
        }
    });

    // Backdrops
    if (DOM.cartBackdrop) DOM.cartBackdrop.addEventListener('click', closeCart);
    if (DOM.quickviewBackdrop) DOM.quickviewBackdrop.addEventListener('click', closeQuickViewModal);

    // Formulario Newsletter Footer
    const newsletterForm = document.getElementById('newsletter-form');
    if (newsletterForm) {
        newsletterForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const input = document.getElementById('newsletter-email');
            const feedback = document.getElementById('newsletter-feedback');
            if (input && input.value) {
                if (feedback) feedback.classList.remove('hidden');
                input.value = '';
                showToast("Bienvenido al círculo privado de Found in Asia MX");
            }
        });
    }

    // Accesibilidad Teclado (Escape)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeQuickViewModal();
            closeCart();
            toggleMobileNav(false);
        }
    });
}

// --- PUENTE GLOBAL ---
window.setCategoryFilter = setCategory;
window.resetFilters = resetFilters;
window.handleSortChange = (val) => { currentSort = val; renderCatalog(); };
window.setGridColumns = setGridCols;
window.closeQuickView = closeQuickViewModal;
window.openQuickView = openQuickViewModal;
window.openCartDrawer = openCart;
window.closeCartDrawer = closeCart;
window.checkoutViaWhatsApp = checkoutWhatsApp;
window.simulateDirectCheckout = simulateCheckout;
window.toggleMobileNav = toggleMobileNav;

// --- INICIALIZACIÓN ---
async function init() {
    cacheDOMElements();
    initListeners();

    // Espera segura de modelos (tolerante a orden de carga en file:// y HTTP)
    let retries = 0;
    while ((!window.productModel || !window.cartModel) && retries < 25) {
        await new Promise(r => setTimeout(r, 40));
        retries++;
    }

    // Procesar parámetros de URL (categoría y búsqueda desde otras páginas)
    try {
        const urlParams = new URLSearchParams(window.location.search);
        const catParam = urlParams.get('cat') || urlParams.get('category');
        const qParam = urlParams.get('q') || urlParams.get('search');

        if (catParam && ['available', 'on-request', 'archive'].includes(catParam)) {
            setCategory(catParam, false);
        } else {
            setCategory('available', false);
        }

        if (qParam && DOM.searchInput) {
            searchQuery = decodeURIComponent(qParam);
            DOM.searchInput.value = searchQuery;
            if (DOM.searchBarContainer) DOM.searchBarContainer.classList.remove('hidden');
        }
    } catch (e) {
        // Fallback silencioso
    }

    await renderCatalog();
    updateCartView();
    updateWishlistView();
}

if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
} else {
    init();
}

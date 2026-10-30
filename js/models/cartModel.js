/* ==========================================================================
   js/models/cartModel.js — Modelo de Datos Puro: Carrito de Compras & Wishlist
   Estándar Operativo V2.6 — Frontend MVC
   REGLA DE ORO: PROHIBIDO TOCAR EL DOM EN ESTA CAPA
   Compatible tanto con file:// (doble clic) como servidores estáticos
   ========================================================================== */

const CART_STORAGE_KEY = 'fia_cart_v1';
const WISHLIST_STORAGE_KEY = 'fia_wishlist_v1';

// Estado en memoria
let cartItems = [];
let wishlistIds = new Set();

// Carga inicial segura de localStorage
try {
    const savedCart = localStorage.getItem(CART_STORAGE_KEY);
    if (savedCart) {
        cartItems = JSON.parse(savedCart);
    }
} catch (e) {
    cartItems = [];
}

try {
    const savedWishlist = localStorage.getItem(WISHLIST_STORAGE_KEY);
    if (savedWishlist) {
        wishlistIds = new Set(JSON.parse(savedWishlist));
    }
} catch (e) {
    wishlistIds = new Set();
}

function persistCart() {
    try {
        localStorage.setItem(CART_STORAGE_KEY, JSON.stringify(cartItems));
    } catch (e) {
        // Fallback silencioso
    }
}

function persistWishlist() {
    try {
        localStorage.setItem(WISHLIST_STORAGE_KEY, JSON.stringify([...wishlistIds]));
    } catch (e) {
        // Fallback silencioso
    }
}

const cartModel = {
    /**
     * Retorna el estado completo del carrito
     */
    getState() {
        const totalItems = cartItems.reduce((acc, item) => acc + item.qty, 0);
        const subtotal = cartItems.reduce((acc, item) => acc + (item.product.price * item.qty), 0);
        return {
            items: [...cartItems],
            totalItems,
            subtotal
        };
    },

    /**
     * Añade un producto al carrito
     */
    addItem(product, size = 'M') {
        if (!product || !product.id) return this.getState();

        const index = cartItems.findIndex(i => i.product.id === product.id && i.size === size);
        if (index > -1) {
            cartItems[index].qty += 1;
        } else {
            cartItems.push({ product, size, qty: 1 });
        }
        persistCart();
        return this.getState();
    },

    /**
     * Actualiza la cantidad de un ítem por índice
     */
    updateQty(index, change) {
        if (cartItems[index]) {
            cartItems[index].qty += change;
            if (cartItems[index].qty <= 0) {
                cartItems.splice(index, 1);
            }
            persistCart();
        }
        return this.getState();
    },

    /**
     * Elimina un ítem del carrito
     */
    removeItem(index) {
        if (cartItems[index]) {
            cartItems.splice(index, 1);
            persistCart();
        }
        return this.getState();
    },

    /**
     * Vacía el carrito
     */
    clear() {
        cartItems = [];
        persistCart();
        return this.getState();
    },

    // --- MÉTODOS DE WISHLIST ---
    getWishlist() {
        return new Set(wishlistIds);
    },

    isWishlisted(productId) {
        return wishlistIds.has(productId);
    },

    toggleWishlist(productId) {
        let added = false;
        if (wishlistIds.has(productId)) {
            wishlistIds.delete(productId);
            added = false;
        } else {
            wishlistIds.add(productId);
            added = true;
        }
        persistWishlist();
        return {
            added,
            count: wishlistIds.size,
            ids: [...wishlistIds]
        };
    }
};

// Exposición global en window
window.cartModel = cartModel;

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { cartModel };
}

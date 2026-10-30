# PROJECT_CONTEXT.md — Found in Asia MX

Fuente de verdad técnica para desarrolladores y agentes de inteligencia artificial. Cumple rigurosamente con el estándar operativo V2.6 (Perfil Técnico 2: Frontend MVC, Supabase BaaS & Netlify).

---

## 1. Resumen y Propósito del Sistema
- **Objetivo de Negocio**: Plataforma exclusiva de **Personal Shopping de Lujo & Moda de Archivo** en Japón y Corea del Sur para clientes en México. Conexión directa con talleres independientes, tiendas de archivo vintage (Tokio, Seúl, Kioto) y diseñadores asiáticos.
- **Topología Multi-Página de 5 Vistas Exclusivas**:
  1. **Home (`index.html`)**: Presentación de la marca, propuesta de valor del personal shopping, pilares de servicio, vitrina curada con accesos directos y llamada a la acción.
  2. **The Finds (`the-finds.html`)**: Catálogo completo dividido estrictamente en 3 categorías:
     - `available`: Prendas en inventario con entrega inmediata en México.
     - `on-request`: Piezas localizadas durante viajes a Asia, listas para adquisición bajo pedido.
     - `archive`: Archivo histórico y museo visual de hallazgos de colección pasados.
     - Controles interactivos: pastillas de categoría, ordenamiento por precio y nombre, selector de 2, 3 o 4 columnas, y buscador en tiempo real.
  3. **Personal Sourcing (`personal-sourcing.html`)**: Explicación paso a paso del servicio de búsqueda a medida en Tokio y Seúl, esquema transparente de honorarios (15%-20%), y formulario interactivo con soporte de pre-llenado (`?piece=...` o `?destination=...`) conectado directamente a WhatsApp Concierge.
  4. **Destinations (`destinations.html`)**: Itinerario de expediciones y drops con fechas confirmadas (Tokio & Niigata, Seúl Minimalist, Kioto & Osaka Tour), rutas de distritos, enfoque de prendas, reglas de encargo y botones de encargo directo por viaje.
  5. **About (`about.html`)**: Filosofía de la marca, moda de archivo vs fast fashion, cómo funciona la logística express de importación asegurada con DHL Express a México (cero sorpresas arancelarias), y reserva de fitting privado en el Atelier de Roma Norte CDMX.
- **Stack Tecnológico**:
  - **Estructura**: HTML5 Semántico (Regla Inquebrantable: Cero CSS en HTML, cero atributos `style=""`).
  - **Estilos**: Tailwind CSS (Play CDN con configuración previa síncrona `js/config/tailwind.config.js`) + Hojas maestras externas exclusivas (`css/main.css` y `css/components.css`).
  - **Patrón Arquitectónico**: Frontend MVC desacoplado en el navegador con ejecución universal (soporta `file://` directo y servidores estáticos sin bloqueo de CORS).
  - **Persistencia**: Abstracción preparada para Supabase BaaS (`js/config/supabase.js`) con capa local activa (`localStorage`/memoria) sin requerir base de datos para la fase actual.
  - **Despliegue & CDN**: Netlify con URLs limpias (`pretty_urls = true`) y cabeceras de seguridad estrictas en `netlify.toml`.

---

## 2. Mapa de Arquitectura y Árbol de Directorios

```
foundinasiamx/
├── .antigravityrules           # Guardrails y directivas permanentes del agente
├── PROJECT_CONTEXT.md          # Especificación y memoria del sistema
├── netlify.toml                # Enrutamiento de URLs limpias, redirects y cabeceras
├── index.html                  # Portal Principal: Marca y visión general
├── the-finds.html              # Vista 2: Catálogo (Available, On Request, Archive)
├── personal-sourcing.html      # Vista 3: Concierge y Formulario a medida
├── destinations.html           # Vista 4: Itinerario de Viajes y Calendario
├── about.html                  # Vista 5: Filosofía, Logística México & Atelier CDMX
├── css/                        # Hojas de estilo externas exclusivas
│   ├── main.css                # Variables CSS, reset, scrollbars y utilidades globales
│   └── components.css          # Tarjetas de producto, flip de imagen, modales y drawer
└── js/                         # Arquitectura MVC Modular en Navegador
    ├── config/
    │   ├── tailwind.config.js  # Configuración del tema (colores olive, carbon, ash, fonts)
    │   └── supabase.js         # Cliente Supabase BaaS (Mock/Local desacoplado)
    ├── models/
    │   ├── productModel.js     # MODELO: The Finds (Available, On Request, Archive) (PROHIBIDO tocar DOM)
    │   └── cartModel.js        # MODELO: Bolsa de compras y Wishlist (PROHIBIDO tocar DOM)
    └── controllers/
        └── catalogCtrl.js      # CONTROLADOR: Eventos, Sourcing form, render DOM y orquestación
```

---

## 3. Trazado de Flujos Críticos End-to-End

### Flujo 1: Navegación Multi-Página Fluida
1. El usuario navega entre `index.html`, `the-finds.html`, `personal-sourcing.html`, `destinations.html` y `about.html`.
2. La barra de navegación sticky superior y el menú móvil conservan el estado visual activo en cada página (`nav-link-active`).
3. El drawer del carrito, el modal de vista rápida (Quick View), el buscador y los toasts funcionan de manera idéntica y persistente en todas las páginas.

### Flujo 2: Catálogo Interactivo "The Finds"
1. **Filtros de Categoría**: Botones "Todos (12)", "Available (Entrega Inmediata)", "On Request (Bajo Pedido)" y "Archive (Archivo Histórico)".
2. **Controlador (`catalogCtrl.js`)**: Realiza la consulta a `productModel.getAll()`, renderiza los productos e inyecta botones contextuales:
   - `available`: "Añadir Bolsa" directo.
   - `on-request`: "Encargar" que abre el Quick View para seleccionar talla y ordenar vía WhatsApp.
   - `archive`: "Pedir Similar" que transfiere el nombre de la pieza al formulario de Personal Sourcing.
3. **Buscador & Orden**: Búsqueda en tiempo real por texto (ej. "Niigata", "Kioto", "Lana", "Issey") y orden por precio o nombre.

### Flujo 3: Solicitud de Personal Sourcing hacia WhatsApp
1. El usuario llena el formulario `#sourcing-form` o hace clic en "Encargar para este Viaje" desde `destinations.html`.
2. El formulario se pre-llena automáticamente con la pieza o destino elegido.
3. Al enviar, el controlador valida campos obligatorios, formatea un mensaje estructurado de WhatsApp y abre `https://wa.me/525589201204` con el concierge.

### Flujo 4: Bolsa de Compras, Wishlist y Envío de Cortesía
1. Al pulsar "Añadir Bolsa" o "Detalles & Medidas", la prenda se suma a `cartModel` y se persiste en `localStorage`.
2. El drawer lateral `#cart-drawer` se despliega mostrando la lista de prendas, controles de cantidad `+` y `-`, cálculo de subtotal y la barra de progreso hacia el envío gratis ($4,500 MXN).
3. Botón "Pedir Orden vía WhatsApp" genera el ticket de pedido con desglose y abre la conversación con el personal shopper.
4. Botón "Pedir Orden vía WhatsApp" genera el ticket de pedido con desglose y abre la conversación directa con el concierge.
5. El botón de corazón en cada prenda conmuta la lista de deseos (`wishlist`), actualiza el badge en el header y permite ver exclusivamente las prendas guardadas.

---

## 4. Reglas Técnicas y Zonas Críticas
1. **Regla de Oro: Cero CSS en HTML**: Cero atributos `style="..."` y cero bloques `<style>` en todos los archivos HTML.
2. **Aislamiento MVC**: `js/models/` jamás accede al DOM (`document`). Solo entrega estructuras puras.
3. **Compatibilidad Universal**: Código 100% libre de errores CORS, apto para abrir directamente con doble clic (`file:///`) en Finder/Explorador y para despliegue en Netlify.
4. **Botones 100% Funcionales para Demo**: Todos los botones de la interfaz cuentan con listeners delegados activos (`data-action`), feedback visual y toasts sin alertas nativas.

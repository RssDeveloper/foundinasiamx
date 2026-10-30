/* ==========================================================================
   js/models/productModel.js — Modelo de Datos Puro: Catálogo "The Finds"
   Estándar Operativo V2.6 — Frontend MVC
   Piezas Oficiales de Archivo & Colección (12 Hallazgos Reales)
   Categorías:
     1. available: Entrega Inmediata en México
     2. on-request: Encontrado en viajes, listo para compra bajo pedido
     3. archive: Archivo histórico de hallazgos pasados
   ========================================================================== */

const THE_FINDS = [
    // --- 1. FIND 001 — FUKUOKA, JAPÓN (Available) ---
    {
        id: "find-001",
        name: "Arctic Monkeys — Favourite Worst Nightmare",
        subtitle: "Edición Japonesa con OBI Strip Original",
        category: "available",
        categoryLabel: "Available",
        price: 3850,
        badge: "Find 001 • Fukuoka",
        status: "Disponible para entrega inmediata en CDMX",
        origin: "Fukuoka, Japón",
        composition: "Vinilo pesado de 180g con OBI strip exclusivo para el mercado japonés y folleto de letras",
        fit: "Edición Coleccionista • 12\" LP",
        sizes: ["Edición Estándar LP"],
        description: "Prensado japonés para coleccionistas con faja OBI tradicional en caracteres japoneses. Adquirido in situ en tienda de archivo independiente de vinilos en Fukuoka.",
        images: [
            "./find-001-fukoka-japan.jpeg",
            "./find-001-fukoka-japan.jpeg"
        ]
    },

    // --- 2. FIND 002 — TOKIO, JAPÓN (Available) ---
    {
        id: "find-002",
        name: "BAPE Shark Full-Zip Hoodie (Grey Edition)",
        subtitle: "A Bathing Ape • Archivo Urahara",
        category: "available",
        categoryLabel: "Available",
        price: 8900,
        badge: "Find 002 • Tokio",
        status: "Disponible en Atelier CDMX",
        origin: "Tokio, Japón",
        composition: "100% Algodón pesado de alta densidad con cremallera completa hasta la capucha y parche WGM bordado",
        fit: "Boxy fit clásico Urahara",
        sizes: ["M", "L"],
        description: "Pieza de archivo de culto del streetwear japonés con capucha completa de tiburón y camuflaje característico. Verificada bajo luz natural en Shibuya, Tokio.",
        images: [
            "./find-002-tokyo-japan.jpeg",
            "./find-002-tokyo-japan.jpeg"
        ]
    },

    // --- 3. FIND 003 — TAIPÉI, TAIWÁN (On Request) ---
    {
        id: "find-003",
        name: "Godzilla Heisei Toho Peluche de Colección",
        subtitle: "Toho Co. Official • Archive Collectible",
        category: "on-request",
        categoryLabel: "On Request",
        price: 1850,
        badge: "Find 003 • Taipéi",
        status: "Localizado en Taipéi (Adquisición bajo pedido)",
        origin: "Taipéi, Taiwán",
        composition: "Felpa texturizada de colección con etiqueta conmemorativa oficial de Toho",
        fit: "Pieza de Colección (22 cm)",
        sizes: ["Tamaño Único Coleccionable"],
        description: "Peluche conmemorativo del rey de los monstruos con textura de escamas y etiqueta original de Toho. Adquirido en distrito de coleccionistas de Taipéi.",
        images: [
            "./find-003-taipei-taiwan.jpeg",
            "./find-003-taipei-taiwan.jpeg"
        ]
    },

    // --- 4. FIND 004 — SEÚL, COREA DEL SUR (Archive) ---
    {
        id: "find-004",
        name: "Supreme Sacred Heart Skateboard Deck",
        subtitle: "Edición Limitada de Archivo Skate",
        category: "archive",
        categoryLabel: "Archive",
        price: 6200,
        badge: "Find 004 • Seúl",
        status: "Pieza de Archivo / Colección Privada",
        origin: "Seúl, Corea del Sur",
        composition: "Madera de arce canadiense de 7 capas con serigrafía Sacred Heart y logo Supreme translúcido",
        fit: "Deck 8.25\" Profesional",
        sizes: ["Deck 8.25\""],
        description: "Tabla de skate de colección con arte clásico del Sagrado Corazón. Pieza histórica localizada en boutique de archivo en Hannam-dong, Seúl.",
        images: [
            "./find-004-seoul-south-korea.jpeg",
            "./find-004-seoul-south-korea.jpeg"
        ]
    },

    // --- 5. FIND 005 — TOKIO, JAPÓN (Available) ---
    {
        id: "find-005",
        name: "Takashi Murakami x BLACKPINK Flower Plush",
        subtitle: "Kaikai Kiki Co. • Tokyo Limited Edition",
        category: "available",
        categoryLabel: "Available",
        price: 4950,
        badge: "Find 005 • Tokio",
        status: "Disponible para entrega inmediata en CDMX",
        origin: "Tokio, Japón",
        composition: "Felpa de microfibra de alta densidad y bordado artesanal de doble faz",
        fit: "Cojín de Arte 40 cm",
        sizes: ["Diámetro 40 cm"],
        description: "Cojín floral icónico de Takashi Murakami en colaboración especial en paleta azul y negro. Empaque original sellado, verificado en Roppongi, Tokio.",
        images: [
            "./find-005-tokyo-japan.jpeg",
            "./find-005-tokyo-japan.jpeg"
        ]
    },

    // --- 6. FIND 006 — SAPPORO, JAPÓN (Available) ---
    {
        id: "find-006",
        name: "Reloj Vintage Citizen 21 Jewels Waterproof",
        subtitle: "Horología Japonesa Clásica con Correa de Piel",
        category: "available",
        categoryLabel: "Available",
        price: 5400,
        badge: "Find 006 • Sapporo",
        status: "Disponible en Atelier CDMX",
        origin: "Sapporo, Japón",
        composition: "Caja de acero inoxidable, movimiento mecánico japonés de 21 rubíes y correa de piel genuina texturizada",
        fit: "Caja 36mm Unisex",
        sizes: ["Ajuste Universal en Piel"],
        description: "Reloj mecánico vintage de manufactura japonesa con esfera plateada rayos de sol y fechador a las 3. Mecanismo revisado y funcionando con precisión cronométrica en Sapporo.",
        images: [
            "./find-006-sapporo-japan.jpeg",
            "./find-006-sapporo-japan.jpeg"
        ]
    },

    // --- 7. FIND 007 — OSAKA, JAPÓN (On Request) ---
    {
        id: "find-007",
        name: "Stüssy Osaka Chapter T-Shirt",
        subtitle: "Edición Conmemorativa de Tienda Oficial Minami",
        category: "on-request",
        categoryLabel: "On Request",
        price: 2650,
        badge: "Find 007 • Osaka",
        status: "Localizado en Osaka (Adquisición bajo pedido)",
        origin: "Osaka, Japón",
        composition: "100% Algodón peinado de alto gramaje con serigrafía trasera Stüssy Osaka",
        fit: "Relaxed fit tradicional japonés",
        sizes: ["M", "L", "XL"],
        description: "Playera conmemorativa de la tienda oficial Stüssy en Minami Horie, Osaka. Tipografía clásica serigrafiada al reverso en color negro sobre blanco puro.",
        images: [
            "./find-007-osaka-japan.jpeg",
            "./find-007-osaka-japan.jpeg"
        ]
    },

    // --- 8. FIND 008 — NIIGATA, JAPÓN (Archive) ---
    {
        id: "find-008",
        name: "Arctic Monkeys — AM (Edición Japonesa)",
        subtitle: "Vinilo de Archivo 180g Heavyweight con OBI",
        category: "archive",
        categoryLabel: "Archive",
        price: 4200,
        badge: "Find 008 • Niigata",
        status: "Pieza de Archivo / Colección Privada",
        origin: "Niigata, Japón",
        composition: "Vinilo pesado de 180g con OBI strip exclusivo para el mercado japonés y encarte con letras",
        fit: "Edición Coleccionista • 12\" LP",
        sizes: ["Edición Estándar LP"],
        description: "Edición exclusiva para Japón del aclamado álbum AM con su faja OBI blanca en caracteres japoneses. Pieza de colección localizada en tienda independiente de Niigata.",
        images: [
            "./find-008-nigata-japan.jpeg",
            "./find-008-nigata-japan.jpeg"
        ]
    },

    // --- 9. FIND 009 — TOKIO, JAPÓN (Available) ---
    {
        id: "find-009",
        name: "A Bathing Ape — BAPESTA FS-001 (Green Patent)",
        subtitle: "Archivo Urahara • Charol Verde Manzana y Blanco",
        category: "available",
        categoryLabel: "Available",
        price: 9800,
        badge: "Find 009 • Tokio",
        status: "Disponible para entrega inmediata en CDMX",
        origin: "Tokio, Japón",
        composition: "Charol brillante de alta calidad con estrella Bapesta lateral, suela de caucho vulcanizado y forro de camuflaje tradicional",
        fit: "Silueta Low Clásica Urahara",
        sizes: ["27.5 MX (9.5 US)", "28.0 MX (10 US)"],
        description: "Sneaker de culto del archivo japonés Nigo-era en charol verde manzana vibrante y blanco. Estado impecable con empaque original verificado in situ en Shibuya, Tokio.",
        images: [
            "./find-008.jpeg",
            "./find-008.jpeg"
        ]
    },

    // --- 10. FIND 010 — TOKIO, JAPÓN (On Request) ---
    {
        id: "find-010",
        name: "Medicom Toy x BAPE — Be@rbrick Shark Camo Set",
        subtitle: "Figura de Arte Coleccionable 1000% / 400% / 100%",
        category: "on-request",
        categoryLabel: "On Request",
        price: 15400,
        badge: "Find 010 • Tokio",
        status: "Localizado en Tokio (Adquisición bajo pedido)",
        origin: "Tokio, Japón",
        composition: "Vinilo rígido con acabado mate y capucha de felpa gris con cremallera funcional e impresión Camo Shark",
        fit: "Set Trilogía Coleccionista (70cm / 28cm / 7cm)",
        sizes: ["Set Completo con Caja"],
        description: "Colaboración emblemática entre Medicom Toy y A Bathing Ape con sudadera Shark Hoodie en felpa real gris y patrón multicolor. Adquisición garantizada con certificado de autenticidad en Tokio.",
        images: [
            "./find-009.jpeg",
            "./find-009.jpeg"
        ]
    },

    // --- 11. FIND 011 — TOKIO, JAPÓN (Available) ---
    {
        id: "find-011",
        name: "Audio-Technica AT-VMN95SH Replacement Stylus",
        subtitle: "Aguja Fonocaptora Shibata • Made in Japan",
        category: "available",
        categoryLabel: "Available",
        price: 4100,
        badge: "Find 011 • Tokio",
        status: "Disponible en Atelier CDMX",
        origin: "Tokio, Japón",
        composition: "Cuerpo de polímero de baja resonancia con diamante natural de corte Shibata y cantiléver de aluminio cónico",
        fit: "Compatible con Serie VM95",
        sizes: ["Cartucho Nuevo Sellado en Caja"],
        description: "Cápsula fonocaptora de alta precisión para audiófilos fabricada en Japón. Ofrece una reproducción sonora de gama alta con separación de canales impecable para vinilos de archivo.",
        images: [
            "./find-010.jpeg",
            "./find-010.jpeg"
        ]
    },

    // --- 12. FIND 012 — SEÚL, COREA DEL SUR (Archive) ---
    {
        id: "find-012",
        name: "KAWS:HOLIDAY Plush Keychain (Planeta Tierra)",
        subtitle: "Edición Limitada de Colección con Ojos XX",
        category: "archive",
        categoryLabel: "Archive",
        price: 2900,
        badge: "Find 012 • Seúl",
        status: "Pieza de Archivo / Colección Privada",
        origin: "Seúl, Corea del Sur",
        composition: "Felpa bordada azul océano y verde continental con ojos bordados en 'XX' de KAWS y herraje metálico niquelado",
        fit: "Llavero de Colección (15 cm)",
        sizes: ["Tamaño Único"],
        description: "Llavero de felpa conmemorativo de la gira mundial KAWS:HOLIDAY representando el planeta Tierra con los emblemáticos ojos en cruz de Brian Donnelly. Procedente de colección privada en Seúl.",
        images: [
            "./llavero-tierra.jpeg",
            "./llavero-tierra.jpeg"
        ]
    }
];

// --- OBJETO MODELO PURO ---
const productModel = {
    /**
     * Obtiene el listado de "The Finds" filtrado y ordenado.
     * Retorna datos puros.
     */
    async getAll({ category = 'all', searchQuery = '', sortBy = 'featured' } = {}) {
        await new Promise(resolve => setTimeout(resolve, 20));

        let results = [...THE_FINDS];

        // 1. Filtrado por categoría ("available", "on-request", "archive")
        if (category && category !== 'all') {
            results = results.filter(p => p.category === category);
        }

        // 2. Filtrado por texto
        if (searchQuery && searchQuery.trim() !== '') {
            const query = searchQuery.toLowerCase().trim();
            results = results.filter(p =>
                p.name.toLowerCase().includes(query) ||
                p.subtitle.toLowerCase().includes(query) ||
                p.description.toLowerCase().includes(query) ||
                p.origin.toLowerCase().includes(query) ||
                p.categoryLabel.toLowerCase().includes(query)
            );
        }

        // 3. Ordenamiento
        if (sortBy === 'price-asc') {
            results.sort((a, b) => a.price - b.price);
        } else if (sortBy === 'price-desc') {
            results.sort((a, b) => b.price - a.price);
        } else if (sortBy === 'name') {
            results.sort((a, b) => a.name.localeCompare(b.name));
        }

        return results;
    },

    /**
     * Obtiene una pieza por ID
     */
    async getById(id) {
        await new Promise(resolve => setTimeout(resolve, 10));
        return THE_FINDS.find(p => p.id === id) || null;
    },

    /**
     * Obtiene varias prendas por IDs (para Wishlist)
     */
    async getByIds(idsArray) {
        if (!Array.isArray(idsArray) || idsArray.length === 0) return [];
        const set = new Set(idsArray);
        return THE_FINDS.filter(p => set.has(p.id));
    }
};

// Exposición global en window
if (typeof window !== 'undefined') {
    window.productModel = productModel;
}

if (typeof module !== 'undefined' && module.exports) {
    module.exports = { productModel };
}

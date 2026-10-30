/* ==========================================================================
   js/models/productModel.js — Modelo de Datos Puro: Catálogo "The Finds"
   Estándar Operativo V3.0 — Frontend MVC
   Piezas Oficiales de Archivo & Colección (33 Hallazgos Curados: 11 por sección)
   Categorías estrictas:
     1. available: Entrega Inmediata en México (11 piezas)
     2. on-request: Encontrado en viajes, adquisición bajo pedido (11 piezas)
     3. archive: Archivo histórico de hallazgos pasados y referencia (11 piezas)
   ========================================================================== */

const THE_FINDS = [
    {
        "id": "find-001",
        "name": "Arctic Monkeys — Favourite Worst Nightmare",
        "subtitle": "Edición Japonesa con OBI Strip Original",
        "category": "available",
        "categoryLabel": "Available",
        "price": 3850,
        "badge": "Find 001 • Fukuoka",
        "status": "Disponible para entrega inmediata en CDMX",
        "origin": "Fukuoka, Japón",
        "composition": "Vinilo pesado de 180g con OBI strip exclusivo para el mercado japonés y folleto de letras",
        "fit": "Edición Coleccionista • 12\" LP",
        "sizes": [
            "Edición Estándar LP"
        ],
        "description": "Prensado japonés para coleccionistas con faja OBI tradicional en caracteres japoneses. Adquirido in situ en tienda de archivo independiente de vinilos en Fukuoka.",
        "images": [
            "./find-001-fukoka-japan.jpeg",
            "./find-001-fukoka-japan.jpeg"
        ]
    },
    {
        "id": "find-002",
        "name": "BAPE Shark Full-Zip Hoodie (Grey Edition)",
        "subtitle": "A Bathing Ape • Archivo Urahara",
        "category": "available",
        "categoryLabel": "Available",
        "price": 8900,
        "badge": "Find 002 • Tokio",
        "status": "Disponible en Atelier CDMX",
        "origin": "Tokio, Japón",
        "composition": "100% Algodón pesado de alta densidad con cremallera completa hasta la capucha y parche WGM bordado",
        "fit": "Boxy fit clásico Urahara",
        "sizes": [
            "M",
            "L"
        ],
        "description": "Pieza de archivo de culto del streetwear japonés con capucha completa de tiburón y camuflaje característico. Verificada bajo luz natural en Shibuya, Tokio.",
        "images": [
            "./find-002-tokyo-japan.jpeg",
            "./find-002-tokyo-japan.jpeg"
        ]
    },
    {
        "id": "find-005",
        "name": "Takashi Murakami x BLACKPINK Flower Plush",
        "subtitle": "Kaikai Kiki Co. • Tokyo Limited Edition",
        "category": "available",
        "categoryLabel": "Available",
        "price": 4950,
        "badge": "Find 005 • Tokio",
        "status": "Disponible para entrega inmediata en CDMX",
        "origin": "Tokio, Japón",
        "composition": "Felpa de microfibra de alta densidad y bordado artesanal de doble faz",
        "fit": "Cojín de Arte 40 cm",
        "sizes": [
            "Diámetro 40 cm"
        ],
        "description": "Cojín floral icónico de Takashi Murakami en colaboración especial en paleta azul y negro. Empaque original sellado, verificado en Roppongi, Tokio.",
        "images": [
            "./find-005-tokyo-japan.jpeg",
            "./find-005-tokyo-japan.jpeg"
        ]
    },
    {
        "id": "find-006",
        "name": "Reloj Vintage Citizen 21 Jewels Waterproof",
        "subtitle": "Horología Japonesa Clásica con Correa de Piel",
        "category": "available",
        "categoryLabel": "Available",
        "price": 5400,
        "badge": "Find 006 • Sapporo",
        "status": "Disponible en Atelier CDMX",
        "origin": "Sapporo, Japón",
        "composition": "Caja de acero inoxidable, movimiento mecánico japonés de 21 rubíes y correa de piel genuina texturizada",
        "fit": "Caja 36mm Unisex",
        "sizes": [
            "Ajuste Universal en Piel"
        ],
        "description": "Reloj mecánico vintage de manufactura japonesa con esfera plateada rayos de sol y fechador a las 3. Mecanismo revisado y funcionando con precisión cronométrica en Sapporo.",
        "images": [
            "./find-006-sapporo-japan.jpeg",
            "./find-006-sapporo-japan.jpeg"
        ]
    },
    {
        "id": "find-009",
        "name": "A Bathing Ape — BAPESTA FS-001 (Green Patent)",
        "subtitle": "Archivo Urahara • Charol Verde Manzana y Blanco",
        "category": "available",
        "categoryLabel": "Available",
        "price": 9800,
        "badge": "Find 009 • Tokio",
        "status": "Disponible para entrega inmediata en CDMX",
        "origin": "Tokio, Japón",
        "composition": "Charol brillante de alta calidad con estrella Bapesta lateral, suela de caucho vulcanizado y forro de camuflaje tradicional",
        "fit": "Silueta Low Clásica Urahara",
        "sizes": [
            "27.5 MX (9.5 US)",
            "28.0 MX (10 US)"
        ],
        "description": "Sneaker de culto del archivo japonés Nigo-era en charol verde manzana vibrante y blanco. Estado impecable con empaque original verificado in situ en Shibuya, Tokio.",
        "images": [
            "./find-008.jpeg",
            "./find-008.jpeg"
        ]
    },
    {
        "id": "find-011",
        "name": "Audio-Technica AT-VMN95SH Replacement Stylus",
        "subtitle": "Aguja Fonocaptora Shibata • Made in Japan",
        "category": "available",
        "categoryLabel": "Available",
        "price": 4100,
        "badge": "Find 011 • Tokio",
        "status": "Disponible en Atelier CDMX",
        "origin": "Tokio, Japón",
        "composition": "Cuerpo de polímero de baja resonancia con diamante natural de corte Shibata y cantiléver de aluminio cónico",
        "fit": "Compatible con Serie VM95",
        "sizes": [
            "Cartucho Nuevo Sellado en Caja"
        ],
        "description": "Cápsula fonocaptora de alta precisión para audiófilos fabricada en Japón. Ofrece una reproducción sonora de gama alta con separación de canales impecable para vinilos de archivo.",
        "images": [
            "./find-010.jpeg",
            "./find-010.jpeg"
        ]
    },
    {
        "id": "find-013",
        "name": "Comme des Garçons Homme — Cardigan Lana Cocida",
        "subtitle": "Sastrería Desestructurada Rei Kawakubo • A/W 1999",
        "category": "available",
        "categoryLabel": "Available",
        "price": 7600,
        "badge": "Find 013 • Tokio",
        "status": "Disponible en Atelier CDMX",
        "origin": "Tokio, Japón",
        "composition": "100% Lana virgen japonesa tratada al vapor con botones de cuerno natural",
        "fit": "Corte recto relajado",
        "sizes": [
            "S",
            "M"
        ],
        "description": "Cardigan de lana pesada en tono carbón con costuras invertidas artesanales. Adquirido en boutique de archivo de Aoyama, Tokio.",
        "images": [
            "./find-002-tokyo-japan.jpeg",
            "./find-002-tokyo-japan.jpeg"
        ]
    },
    {
        "id": "find-014",
        "name": "Human Made x Nigo — Tiger Heavyweight Cotton Rug",
        "subtitle": "Gears for Futuristic Teenagers • Edición Kioto",
        "category": "available",
        "categoryLabel": "Available",
        "price": 4200,
        "badge": "Find 014 • Kioto",
        "status": "Disponible para entrega inmediata en CDMX",
        "origin": "Kioto, Japón",
        "composition": "Algodón grueso tejido en telar artesanal con tintura índigo y reverso antideslizante",
        "fit": "Tapete de Arte (65 x 45 cm)",
        "sizes": [
            "Tamaño Único"
        ],
        "description": "Tapete coleccionable con la icónica silueta de tigre diseñada por Nigo. Localizado en la tienda insignia de Human Made 1928 en Kioto.",
        "images": [
            "./find-005-tokyo-japan.jpeg",
            "./find-005-tokyo-japan.jpeg"
        ]
    },
    {
        "id": "find-015",
        "name": "Casio G-Shock DW-5600 Vintage Fox Fire JDM",
        "subtitle": "Módulo Original Made in Japan • Pantalla Electroluminiscente",
        "category": "available",
        "categoryLabel": "Available",
        "price": 4800,
        "badge": "Find 015 • Sapporo",
        "status": "Disponible en Atelier CDMX",
        "origin": "Sapporo, Japón",
        "composition": "Caja de resina resistente a impactos y cristal mineral templado con tapa trasera roscada de acero",
        "fit": "Caja Clásica Cuadrada 42mm",
        "sizes": [
            "Correa Ajustable"
        ],
        "description": "Versión original Fox Fire para el mercado interno japonés (JDM) con iluminación ámbar suave. Revisado e impermeabilizado en Sapporo.",
        "images": [
            "./find-006-sapporo-japan.jpeg",
            "./find-006-sapporo-japan.jpeg"
        ]
    },
    {
        "id": "find-016",
        "name": "Radiohead — Kid A (Edición Japonesa Toshiba-EMI)",
        "subtitle": "Prensado Parlophone con OBI Strip y Folleto Bilingüe",
        "category": "available",
        "categoryLabel": "Available",
        "price": 4300,
        "badge": "Find 016 • Fukuoka",
        "status": "Disponible para entrega inmediata en CDMX",
        "origin": "Fukuoka, Japón",
        "composition": "Vinilo doble de 10 pulgadas de 180 gramos con insertos en papel japonés y faja OBI impecable",
        "fit": "Doble 10\" Gatefold",
        "sizes": [
            "Doble LP 10\""
        ],
        "description": "Edición japonesa sumamente buscada de la obra maestra experimental de Radiohead. Conservada en funda plástica de archivo sin desgaste.",
        "images": [
            "./find-001-fukoka-japan.jpeg",
            "./find-001-fukoka-japan.jpeg"
        ]
    },
    {
        "id": "find-017",
        "name": "Porter Yoshida & Co. — Tanker 2-Way Helmet Bag",
        "subtitle": "Nylon Twill Militar Inspirado en MA-1 • Tokio",
        "category": "available",
        "categoryLabel": "Available",
        "price": 7200,
        "badge": "Find 017 • Tokio",
        "status": "Disponible en Atelier CDMX",
        "origin": "Tokio, Japón",
        "composition": "Nylon twill de 3 capas con forro interior naranja de rescate y herrajes de bronce pulido",
        "fit": "Gran Capacidad (48 x 46 cm)",
        "sizes": [
            "Tamaño Único"
        ],
        "description": "El bolso más icónico de la manufactura japonesa Porter. Confeccionado a mano en Japón siguiendo especificaciones militares de aviación.",
        "images": [
            "./find-008.jpeg",
            "./find-008.jpeg"
        ]
    },
    {
        "id": "find-003",
        "name": "Godzilla Heisei Toho Peluche de Colección",
        "subtitle": "Toho Co. Official • Archive Collectible",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 1850,
        "badge": "Find 003 • Taipéi",
        "status": "Localizado en Taipéi (Adquisición bajo pedido)",
        "origin": "Taipéi, Taiwán",
        "composition": "Felpa texturizada de colección con etiqueta conmemorativa oficial de Toho",
        "fit": "Pieza de Colección (22 cm)",
        "sizes": [
            "Tamaño Único Coleccionable"
        ],
        "description": "Peluche conmemorativo del rey de los monstruos con textura de escamas y etiqueta original de Toho. Adquirido en distrito de coleccionistas de Taipéi.",
        "images": [
            "./find-003-taipei-taiwan.jpeg",
            "./find-003-taipei-taiwan.jpeg"
        ]
    },
    {
        "id": "find-007",
        "name": "Stüssy Osaka Chapter T-Shirt",
        "subtitle": "Edición Conmemorativa de Tienda Oficial Minami",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 2650,
        "badge": "Find 007 • Osaka",
        "status": "Localizado en Osaka (Adquisición bajo pedido)",
        "origin": "Osaka, Japón",
        "composition": "100% Algodón peinado de alto gramaje con serigrafía trasera Stüssy Osaka",
        "fit": "Relaxed fit tradicional japonés",
        "sizes": [
            "M",
            "L",
            "XL"
        ],
        "description": "Playera conmemorativa de la tienda oficial Stüssy en Minami Horie, Osaka. Tipografía clásica serigrafiada al reverso en color negro sobre blanco puro.",
        "images": [
            "./find-007-osaka-japan.jpeg",
            "./find-007-osaka-japan.jpeg"
        ]
    },
    {
        "id": "find-010",
        "name": "Medicom Toy x BAPE — Be@rbrick Shark Camo Set",
        "subtitle": "Figura de Arte Coleccionable 1000% / 400% / 100%",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 15400,
        "badge": "Find 010 • Tokio",
        "status": "Localizado en Tokio (Adquisición bajo pedido)",
        "origin": "Tokio, Japón",
        "composition": "Vinilo rígido con acabado mate y capucha de felpa gris con cremallera funcional e impresión Camo Shark",
        "fit": "Set Trilogía Coleccionista (70cm / 28cm / 7cm)",
        "sizes": [
            "Set Completo con Caja"
        ],
        "description": "Colaboración emblemática entre Medicom Toy y A Bathing Ape con sudadera Shark Hoodie en felpa real gris y patrón multicolor. Adquisición garantizada con certificado de autenticidad en Tokio.",
        "images": [
            "./find-009.jpeg",
            "./find-009.jpeg"
        ]
    },
    {
        "id": "find-018",
        "name": "Undercover Jun Takahashi — Chaqueta Táctica Modular",
        "subtitle": "Archivo 'Small Parts' • Tokio S/S 2004",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 14800,
        "badge": "Find 018 • Tokio",
        "status": "Localizado en Tokio (Adquisición bajo pedido)",
        "origin": "Tokio, Japón",
        "composition": "Algodón ripstop militar y cremalleras YKK reversibles para desmontar mangas y capucha",
        "fit": "Modular boxy fit",
        "sizes": [
            "2 (M)",
            "3 (L)"
        ],
        "description": "Una de las colecciones más celebradas del maestro del punk-couture japonés. Pieza convertible localizada en boutique de Harajuku.",
        "images": [
            "./find-002-tokyo-japan.jpeg",
            "./find-002-tokyo-japan.jpeg"
        ]
    },
    {
        "id": "find-019",
        "name": "Visvim FBT Shaman-Folk Suede Moccasin Camel",
        "subtitle": "Calzado de Artesanía Hiroki Nakamura • Kioto",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 19200,
        "badge": "Find 019 • Kioto",
        "status": "Localizado en Kioto (Adquisición bajo pedido)",
        "origin": "Kioto, Japón",
        "composition": "Gamuza de ante de vaca británica teñida al vegetal con suela Vibram personalizada y borlas artesanales",
        "fit": "Construcción mocasín artesanal",
        "sizes": [
            "9.5 US",
            "10 US",
            "10.5 US"
        ],
        "description": "Silueta seminal de Visvim que combina técnicas nativas americanas con tecnología ergonómica japonesa de última generación.",
        "images": [
            "./find-008.jpeg",
            "./find-008.jpeg"
        ]
    },
    {
        "id": "find-020",
        "name": "Gentle Monster — Gafas Bold Collection Polarizadas",
        "subtitle": "Diseño Vanguardista Coreano • Flagship Garosugil",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 6900,
        "badge": "Find 020 • Seúl",
        "status": "Localizado en Seúl (Adquisición bajo pedido)",
        "origin": "Seúl, Corea del Sur",
        "composition": "Acetato negro de alta densidad cortado a láser con lentes Zeiss con protección UV 99.9%",
        "fit": "Estructura geométrica oversized",
        "sizes": [
            "Ajuste Facial Ergonómico"
        ],
        "description": "Montura angular de la serie Bold con herrajes dorados en las patillas y estuche rígido de cuero texturizado.",
        "images": [
            "./find-004-seoul-south-korea.jpeg",
            "./find-004-seoul-south-korea.jpeg"
        ]
    },
    {
        "id": "find-021",
        "name": "Yohji Yamamoto Pour Homme — Pantalón Hakama Plisado",
        "subtitle": "Gabardina de Lana Negra Tradicional • Tokio",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 12400,
        "badge": "Find 021 • Tokio",
        "status": "Localizado en Tokio (Adquisición bajo pedido)",
        "origin": "Tokio, Japón",
        "composition": "100% Gabardina de lana japonesa con caída fluida y cordón de cintura tradicional",
        "fit": "Silueta ancha Hakama dramática",
        "sizes": [
            "2",
            "3"
        ],
        "description": "Pieza emblemática de Yohji Yamamoto inspirada en la vestimenta marcial tradicional japonesa, adaptada a la sastrería urbana moderna.",
        "images": [
            "./find-007-osaka-japan.jpeg",
            "./find-007-osaka-japan.jpeg"
        ]
    },
    {
        "id": "find-022",
        "name": "Fragment Design x Pokémon — Thunderbolt Project Plush",
        "subtitle": "Hiroshi Fujiwara All-Black Edition • Tokio",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 5600,
        "badge": "Find 022 • Tokio",
        "status": "Localizado en Tokio (Adquisición bajo pedido)",
        "origin": "Tokio, Japón",
        "composition": "Felpa de algodón negro azabache con bordado del rayo doble de Fragment en el pecho",
        "fit": "Figura 30 cm de Colección",
        "sizes": [
            "Edición Limitada Sellada"
        ],
        "description": "Colaboración exclusiva de Hiroshi Fujiwara para el Thunderbolt Project. Solo distribuida en pop-ups secretos de Ginza, Tokio.",
        "images": [
            "./find-003-taipei-taiwan.jpeg",
            "./find-003-taipei-taiwan.jpeg"
        ]
    },
    {
        "id": "find-023",
        "name": "Hyein Seo — Bolso Cruzado Utilitario Cobra Buckle",
        "subtitle": "Diseño Técnico de Vanguardia • Hannam-dong Seúl",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 8200,
        "badge": "Find 023 • Seúl",
        "status": "Localizado en Seúl (Adquisición bajo pedido)",
        "origin": "Seúl, Corea del Sur",
        "composition": "Nylon balístico impermeable con correa táctica de liberación rápida AustriAlpin Cobra",
        "fit": "Crossbody ergonómico",
        "sizes": [
            "Tamaño Único"
        ],
        "description": "Bolso técnico de la aclamada diseñadora coreana Hyein Seo, combinando funcionalidad distópica y acabados de lujo.",
        "images": [
            "./find-009.jpeg",
            "./find-009.jpeg"
        ]
    },
    {
        "id": "find-024",
        "name": "Daft Punk — Discovery (Edición Japonesa Toshiba-EMI)",
        "subtitle": "Prensado con OBI Strip e Ilustraciones Leiji Matsumoto",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 4900,
        "badge": "Find 024 • Osaka",
        "status": "Localizado en Osaka (Adquisición bajo pedido)",
        "origin": "Osaka, Japón",
        "composition": "Vinilo de 180 gramos masterizado en Abbey Road con encarte japonés conmemorativo de Interstella 5555",
        "fit": "Gatefold 12\" Edición Colección",
        "sizes": [
            "Edición Japonesa Vinilo"
        ],
        "description": "La edición japonesa más codiciada de Discovery, con arte gráfico original de Toei Animation y faja OBI original en impecable estado.",
        "images": [
            "./find-001-fukoka-japan.jpeg",
            "./find-001-fukoka-japan.jpeg"
        ]
    },
    {
        "id": "find-025",
        "name": "Kapital Kountry — Boro Denim Sashiko Reconstruido",
        "subtitle": "Artesanía Tradicional de Kojima • Kurashiki",
        "category": "on-request",
        "categoryLabel": "On Request",
        "price": 17500,
        "badge": "Find 025 • Kojima",
        "status": "Localizado en Kojima (Adquisición bajo pedido)",
        "origin": "Kojima, Japón",
        "composition": "Denim selvedge de 14oz remendado a mano con hilos sashiko blancos e índigo de tinte vegetal natural",
        "fit": "Straight leg artesanal",
        "sizes": [
            "30",
            "32",
            "34"
        ],
        "description": "Obra cumbre de la división Kountry de Kapital en Okayama. Cada par requiere más de 40 horas de trabajo manual en telares centenarios.",
        "images": [
            "./find-007-osaka-japan.jpeg",
            "./find-007-osaka-japan.jpeg"
        ]
    },
    {
        "id": "find-004",
        "name": "Supreme Sacred Heart Skateboard Deck",
        "subtitle": "Edición Limitada de Archivo Skate",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 6200,
        "badge": "Find 004 • Seúl",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Seúl, Corea del Sur",
        "composition": "Madera de arce canadiense de 7 capas con serigrafía Sacred Heart y logo Supreme translúcido",
        "fit": "Deck 8.25\" Profesional",
        "sizes": [
            "Deck 8.25\""
        ],
        "description": "Tabla de skate de colección con arte clásico del Sagrado Corazón. Pieza histórica localizada en boutique de archivo en Hannam-dong, Seúl.",
        "images": [
            "./find-004-seoul-south-korea.jpeg",
            "./find-004-seoul-south-korea.jpeg"
        ]
    },
    {
        "id": "find-008",
        "name": "Arctic Monkeys — AM (Edición Japonesa)",
        "subtitle": "Vinilo de Archivo 180g Heavyweight con OBI",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 4200,
        "badge": "Find 008 • Niigata",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Niigata, Japón",
        "composition": "Vinilo pesado de 180g con OBI strip exclusivo para el mercado japonés y encarte con letras",
        "fit": "Edición Coleccionista • 12\" LP",
        "sizes": [
            "Edición Estándar LP"
        ],
        "description": "Edición exclusiva para Japón del aclamado álbum AM con su faja OBI blanca en caracteres japoneses. Pieza de colección localizada en tienda independiente de Niigata.",
        "images": [
            "./find-008-nigata-japan.jpeg",
            "./find-008-nigata-japan.jpeg"
        ]
    },
    {
        "id": "find-012",
        "name": "KAWS:HOLIDAY Plush Keychain (Planeta Tierra)",
        "subtitle": "Edición Limitada de Colección con Ojos XX",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 2900,
        "badge": "Find 012 • Seúl",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Seúl, Corea del Sur",
        "composition": "Felpa bordada azul océano y verde continental con ojos bordados en 'XX' de KAWS y herraje metálico niquelado",
        "fit": "Llavero de Colección (15 cm)",
        "sizes": [
            "Tamaño Único"
        ],
        "description": "Llavero de felpa conmemorativo de la gira mundial KAWS:HOLIDAY representando el planeta Tierra con los emblemáticos ojos en cruz de Brian Donnelly. Procedente de colección privada en Seúl.",
        "images": [
            "./llavero-tierra.jpeg",
            "./llavero-tierra.jpeg"
        ]
    },
    {
        "id": "find-026",
        "name": "Number (N)ine — Bomber Patchwork 'Touch Me I'm Sick'",
        "subtitle": "Takahiro Miyashita • Colección Otoño/Invierno 2003",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 28500,
        "badge": "Find 026 • Tokio",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Tokio, Japón",
        "composition": "Algodón y lana desgastada a mano con parches bordados grunge y forro acolchado térmico",
        "fit": "Silueta recortada estilo Kurt Cobain",
        "sizes": [
            "Talla 3 (M-L)"
        ],
        "description": "El Santo Grial del archivo punk japonés de Takahiro Miyashita. Considerada una obra de arte textil de la era de oro de Urahara.",
        "images": [
            "./find-002-tokyo-japan.jpeg",
            "./find-002-tokyo-japan.jpeg"
        ]
    },
    {
        "id": "find-027",
        "name": "Issey Miyake Men — Chaqueta Paracaídas Viento Esculpido",
        "subtitle": "Innovación Textil Japonesa • A/W 1996",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 31000,
        "badge": "Find 027 • Tokio",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Tokio, Japón",
        "composition": "Microfibra de poliéster ultra ligera con estructura de arneses y cinchas elásticas regulables",
        "fit": "Silueta volumétrica escultórica",
        "sizes": [
            "Talla M Japonesa"
        ],
        "description": "Pieza histórica de pasarela de Issey Miyake. Presenta cordones tensores que permiten esculpir la silueta en múltiples geometrías tridimensionales.",
        "images": [
            "./find-007-osaka-japan.jpeg",
            "./find-007-osaka-japan.jpeg"
        ]
    },
    {
        "id": "find-028",
        "name": "Mastermind JAPAN — Cazadora Piel de Cordero con Calavera",
        "subtitle": "Masaaki Honma • Cristales Swarovski Genuinos",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 42000,
        "badge": "Find 028 • Tokio",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Tokio, Japón",
        "composition": "100% Piel de cordero curtida en Japón con forro de seda jacquard y aplique de calavera en cristal",
        "fit": "Biker Jacket Slim Fit",
        "sizes": [
            "Talla L"
        ],
        "description": "Ejemplo cumbre del lujo gótico japonés. Confeccionada con los materiales más selectos de Tokio y numerada individualmente.",
        "images": [
            "./find-009.jpeg",
            "./find-009.jpeg"
        ]
    },
    {
        "id": "find-029",
        "name": "Junya Watanabe MAN x The North Face — Terra Jacket 2008",
        "subtitle": "Reconstrucción Arquitectónica • Tokio",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 25000,
        "badge": "Find 029 • Tokio",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Tokio, Japón",
        "composition": "Gore-Tex Pro de tres capas integrado con una mochila de expedición real cosida al cuerpo de la prenda",
        "fit": "Parka técnica expedición",
        "sizes": [
            "Talla S"
        ],
        "description": "Colaboración mítica que redefinió el gorpcore internacional: Junya Watanabe fusionó un macuto de montaña directamente en una chaqueta impermeable.",
        "images": [
            "./find-008-nigata-japan.jpeg",
            "./find-008-nigata-japan.jpeg"
        ]
    },
    {
        "id": "find-030",
        "name": "Juun.J — Abrigo Militar Oversized Lana y Cupro",
        "subtitle": "Pasarela París/Seúl • Colección Histórica 2014",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 21000,
        "badge": "Find 030 • Seúl",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Seúl, Corea del Sur",
        "composition": "Lana de doble capa de 800 gramos con forro interno de cupro Bemberg y solapas estructuradas",
        "fit": "Oversized dramático sastrero",
        "sizes": [
            "Talla 46 (M-L Oversized)"
        ],
        "description": "El sastre coreano Juun.J deconstruye la trinchera militar clásica en un abrigo arquitectónico de proporciones escultóricas.",
        "images": [
            "./find-004-seoul-south-korea.jpeg",
            "./find-004-seoul-south-korea.jpeg"
        ]
    },
    {
        "id": "find-031",
        "name": "A Bathing Ape — 1st Camo Snowboard Jacket (Nigo Era 1998)",
        "subtitle": "Archivo Histórico NOWHERE Harajuku • Made in Japan",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 27500,
        "badge": "Find 031 • Tokio",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Tokio, Japón",
        "composition": "Gore-Dryloft impermeable en camuflaje verde primera generación con cierres sellados y falda para nieve",
        "fit": "Boxy 90s Harajuku",
        "sizes": [
            "Talla L"
        ],
        "description": "Una de las prendas más influyentes de la cultura del streetwear mundial. Fabricada en cantidades diminutas en Tokio a finales de los años 90.",
        "images": [
            "./find-008.jpeg",
            "./find-008.jpeg"
        ]
    },
    {
        "id": "find-032",
        "name": "Takashi Murakami — Escultura Miniatura Mr. DOB Dobtopus",
        "subtitle": "Kaikai Kiki Gallery • Edición Firmada y Numerada",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 18500,
        "badge": "Find 032 • Tokio",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Tokio, Japón",
        "composition": "Resina fundida pintada a mano con acabado esmaltado multicapa y pedestal de acrílico grabado",
        "fit": "Escultura de Mesa (18 cm)",
        "sizes": [
            "Caja de Madera Kiribako con Certificado"
        ],
        "description": "Pieza de arte de colección privada adquirida en subasta de Tokio. Representa la evolución pulpoide de Mr. DOB en tonos pastel.",
        "images": [
            "./find-005-tokyo-japan.jpeg",
            "./find-005-tokyo-japan.jpeg"
        ]
    },
    {
        "id": "find-033",
        "name": "Pink Floyd — The Dark Side of the Moon (Odeon Pro-Use)",
        "subtitle": "Prensado Audiófilo Japonés Serie Especial EMLF-97002",
        "category": "archive",
        "categoryLabel": "Archive",
        "price": 8900,
        "badge": "Find 033 • Tokio",
        "status": "Pieza de Archivo / Colección Privada",
        "origin": "Tokio, Japón",
        "composition": "Vinilo virgen prensado a media velocidad con OBI strip de lujo y folleto de 12 páginas en japonés",
        "fit": "Edición Audiófila 12\" LP",
        "sizes": [
            "Prensado Pro-Use Series"
        ],
        "description": "Reconocida internacionalmente entre audiófilos como la masterización más limpia y dinámica jamás realizada de The Dark Side of the Moon.",
        "images": [
            "./find-001-fukoka-japan.jpeg",
            "./find-001-fukoka-japan.jpeg"
        ]
    }
];

// --- OBJETO MODELO PURO ---
const productModel = {
    /**
     * Obtiene el listado de "The Finds" filtrado por la categoría elegida y ordenado.
     * Garantiza que solo se muestren las piezas de la sección elegida.
     */
    async getAll({ category = 'available', searchQuery = '', sortBy = 'featured' } = {}) {
        await new Promise(resolve => setTimeout(resolve, 20));

        // Por requerimiento: solo mostrar productos de la sección elegida (default: 'available')
        const activeCategory = (category && ['available', 'on-request', 'archive'].includes(category))
            ? category
            : 'available';

        let results = THE_FINDS.filter(p => p.category === activeCategory);

        // Filtrado por texto (búsqueda dentro de la sección elegida)
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

        // Ordenamiento
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

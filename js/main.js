/* =====================================================
   UnderShoes — Main JavaScript
   ===================================================== */

/* -------------------- PRODUCTOS -------------------- */
const PRODUCTS = [
  {
    id: 16, brand: "Jordan", name: "Retro 4 All Black", price: 280000,
    sizesWomen: [36,37,38,39], sizesMen: [40,41,42,43,44],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Silueta oscura total en el icónico Air Jordan 4. Diseño monocromático que fusiona elegancia y actitud callejera. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/💥RETRO 4 ALL BLACK 💥36-39💥40-44💥/💥RETRO 4 ALL BLACK 💥36-39💥40-44💥.webp",
      "IMG/💥RETRO 4 ALL BLACK 💥36-39💥40-44💥/💥RETRO 4 ALL BLACK 💥36-39💥40-44💥 parte lateral.webp",
      "IMG/💥RETRO 4 ALL BLACK 💥36-39💥40-44💥/💥RETRO 4 ALL BLACK 💥36-39💥40-44💥 parte atras.webp",
    ],
    video: "IMG/💥RETRO 4 ALL BLACK 💥36-39💥40-44💥/video.mp4"
  },
  {
    id: 17, brand: "Jordan", name: "Retro 4 Thunderbolt", price: 280000,
    sizesWomen: [36,37,38,39], sizesMen: [40,41,42,43,44],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Colores eléctricos en la silueta más legendaria del baloncesto. Energía pura en cada paso. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥JORDAN RETRO 4 THUNDERBOLT🔥36-39🔥40-44🔥/🔥JORDAN RETRO 4 THUNDERBOLT🔥36-39🔥40-44🔥.webp",
      "IMG/🔥JORDAN RETRO 4 THUNDERBOLT🔥36-39🔥40-44🔥/🔥JORDAN RETRO 4 THUNDERBOLT🔥36-39🔥40-44🔥 parte lateral.webp",
      "IMG/🔥JORDAN RETRO 4 THUNDERBOLT🔥36-39🔥40-44🔥/🔥JORDAN RETRO 4 THUNDERBOLT🔥36-39🔥40-44🔥 parte atras.webp",
    ],
    video: "IMG/🔥JORDAN RETRO 4 THUNDERBOLT🔥36-39🔥40-44🔥/video.mp4"
  },
  {
    id: 18, brand: "Jordan", name: "Retro 4 Olive", price: 280000,
    sizesWomen: [36,37,38,39], sizesMen: [36,37,38,39],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Paleta militar en el clásico Air Jordan 4. Un colorway atemporal con carácter urbano que nunca pasa de moda. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥JORDAN RETRO 4 🔥36-39🔥/🔥JORDAN RETRO 4 🔥36-39🔥.webp",
      "IMG/🔥JORDAN RETRO 4 🔥36-39🔥/🔥JORDAN RETRO 4 🔥36-39🔥 parte lateral.webp",
      "IMG/🔥JORDAN RETRO 4 🔥36-39🔥/🔥JORDAN RETRO 4 🔥36-39🔥 parte tracera.webp",
    ],
    video: "IMG/🔥JORDAN RETRO 4 🔥36-39🔥/video.mp4"
  },
  {
    id: 19, brand: "Jordan", name: "Retro 4 Military", price: 280000,
    sizesWomen: [40,41,42,43,44], sizesMen: [40,41,42,43,44],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "El Air Jordan 4 en su versión más icónica. Tono military que marcó historia en las canchas y se tomó las calles. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 4 MILITARY 🔥40-44🔥/🔥RETRO 4 MILITARY 🔥40-44🔥.webp",
      "IMG/🔥RETRO 4 MILITARY 🔥40-44🔥/🔥RETRO 4 MILITARY 🔥40-44🔥 parte lateral.webp",
      "IMG/🔥RETRO 4 MILITARY 🔥40-44🔥/🔥RETRO 4 MILITARY 🔥40-44🔥 parte atras.webp",
    ],
    video: "IMG/🔥RETRO 4 MILITARY 🔥40-44🔥/video.mp4"
  },
  {
    id: 20, brand: "Jordan", name: "Retro 4 Panda", price: 280000,
    sizesWomen: [40,41,42,43,44], sizesMen: [40,41,42,43,44],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Blanco y negro perfecto en el Air Jordan 4. Clean, minimalista y siempre vigente. El tenis que combina con todo. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 4 🐼 🔥40-44🔥/🔥RETRO 4 🐼 🔥40-44🔥.webp",
      "IMG/🔥RETRO 4 🐼 🔥40-44🔥/🔥RETRO 4 🐼 🔥40-44🔥 parte lateral.webp",
      "IMG/🔥RETRO 4 🐼 🔥40-44🔥/🔥RETRO 4 🐼 🔥40-44🔥 parte atras.webp",
    ],
    video: "IMG/🔥RETRO 4 🐼 🔥40-44🔥/video.mp4"
  },
  {
    id: 21, brand: "Jordan", name: "Retro 3 El Vuelo", price: 280000,
    sizesWomen: [36,37,38,39], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "El Air Jordan 3 que le dio alas a una leyenda. Icono del juego redefinido para las calles, con la comodidad y el estilo que solo Jordan da. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥JORDAN RETRO 3 EL VUELO 🔥36-39🔥40-45🔥/🔥JORDAN RETRO 3 EL VUELO 🔥36-39🔥40-45🔥.webp",
      "IMG/🔥JORDAN RETRO 3 EL VUELO 🔥36-39🔥40-45🔥/🔥JORDAN RETRO 3 EL VUELO 🔥36-39🔥40-45🔥 PARTE LATERAL.webp",
      "IMG/🔥JORDAN RETRO 3 EL VUELO 🔥36-39🔥40-45🔥/🔥JORDAN RETRO 3 EL VUELO 🔥36-39🔥40-45🔥 PARTE ATRAS.webp",
    ],
    video: "IMG/🔥JORDAN RETRO 3 EL VUELO 🔥36-39🔥40-45🔥/video.mp4"
  },
  {
    id: 22, brand: "Jordan", name: "Retro 3 Medium Olive", price: 280000,
    sizesWomen: [36,37,38,39], sizesMen: [40,41,42,43,44],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Tonos tierra que equilibran lo natural y lo urbano. El AJ3 en su expresión más terrosa, ideal para un look auténtico y versátil. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 MÉDIUM OLIVE 🔥36-39🔥40-44🔥/🔥RETRO 3 MÉDIUM OLIVE 🔥36-39🔥40-44🔥.webp",
      "IMG/🔥RETRO 3 MÉDIUM OLIVE 🔥36-39🔥40-44🔥/🔥RETRO 3 MÉDIUM OLIVE 🔥36-39🔥40-44🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 MÉDIUM OLIVE 🔥36-39🔥40-44🔥/🔥RETRO 3 MÉDIUM OLIVE 🔥36-39🔥40-44🔥 parte atras.webp",
    ],
    video: "IMG/🔥RETRO 3 MÉDIUM OLIVE 🔥36-39🔥40-44🔥/video.mp4"
  },
  {
    id: 23, brand: "Jordan", name: "Retro 3 Vintage Floral", price: 280000,
    sizesWomen: [36,37,38,39], sizesMen: [36,37,38,39],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Feminidad y estilo urbano en un Air Jordan 3. Detalles florales vintage que hacen historia en el streetwear femenino. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 VINTAGE FLORAL 🔥36-39🔥/🔥RETRO 3 VINTAGE FLORAL 🔥36-39🔥.webp",
      "IMG/🔥RETRO 3 VINTAGE FLORAL 🔥36-39🔥/🔥RETRO 3 VINTAGE FLORAL 🔥36-39🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 VINTAGE FLORAL 🔥36-39🔥/🔥RETRO 3 VINTAGE FLORAL 🔥36-39🔥 parte atras.webp",
    ],
    video: "IMG/🔥RETRO 3 VINTAGE FLORAL 🔥36-39🔥/video.mp4"
  },
  {
    id: 24, brand: "Jordan", name: "Retro 3 Sail Rust Pink", price: 280000,
    sizesWomen: [36,37,38,39], sizesMen: [36,37,38,39],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Tonos cálidos de rust y sail que contrastan con la silueta clásica del AJ3. Suavidad y actitud en un solo tenis. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 SAIL RUST PINK 🔥36-39🔥/🔥RETRO 3 SAIL RUST PINK 🔥36-39🔥.webp",
      "IMG/🔥RETRO 3 SAIL RUST PINK 🔥36-39🔥/🔥RETRO 3 SAIL RUST PINK 🔥36-39🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 SAIL RUST PINK 🔥36-39🔥/🔥RETRO 3 SAIL RUST PINK 🔥36-39🔥 parte atras.webp",
    ],
    video: "IMG/🔥RETRO 3 SAIL RUST PINK 🔥36-39🔥/video.mp4"
  },
  {
    id: 25, brand: "Jordan", name: "Retro 3 A Ma Maniére", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "La colaboración de lujo más codiciada del Air Jordan 3. Materiales premium y detalles exclusivos de la boutique A Ma Maniére. Alta costura en las calles. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 AMAMMANIERE 🔥36-40🔥40-45🔥/🔥RETRO 3 AMAMMANIERE 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 AMAMMANIERE 🔥36-40🔥40-45🔥/🔥RETRO 3 AMAMMANIERE 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 AMAMMANIERE 🔥36-40🔥40-45🔥/🔥RETRO 3 AMAMMANIERE 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 26, brand: "Jordan", name: "Retro 3 Rising Sun", price: 280000,
    sizesWomen: [40,41,42,43,44], sizesMen: [40,41,42,43,44],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Inspirado en el sol naciente japonés. Una edición con identidad cultural única que mezcla la estética oriental con el ADN legendario del Jordan 3. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 RISING SUN 🔥40-44🔥/🔥RETRO 3 RISING SUN 🔥40-44🔥.webp",
      "IMG/🔥RETRO 3 RISING SUN 🔥40-44🔥/🔥RETRO 3 RISING SUN 🔥40-44🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 RISING SUN 🔥40-44🔥/🔥RETRO 3 RISING SUN 🔥40-44🔥 parte atras.webp",
    ],
  },
  {
    id: 27, brand: "Jordan", name: "Retro 3 San Valentín Days", price: 280000,
    sizesWomen: [36,37,38,39], sizesMen: [36,37,38,39],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Un Air Jordan 3 dedicado al amor con detalles en rojo y blanco. La edición más romántica del catálogo Jordan, perfecta para regalar o lucir. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 SAN VALENTÍN DAYS 🔥36-39🔥/🔥RETRO 3 SAN VALENTÍN DAYS 🔥36-39🔥.webp",
      "IMG/🔥RETRO 3 SAN VALENTÍN DAYS 🔥36-39🔥/🔥RETRO 3 SAN VALENTÍN DAYS 🔥36-39🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 SAN VALENTÍN DAYS 🔥36-39🔥/🔥RETRO 3 SAN VALENTÍN DAYS 🔥36-39🔥 parte atras.webp",
    ],
  },
  {
    id: 28, brand: "Jordan", name: "Retro 3 Eminem", price: 280000,
    sizesWomen: [36,37,38,39], sizesMen: [40,41,42,43,44],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Una de las colaboraciones más raras en la historia de Jordan Brand. Eminem x AJ3, edición de colección que pocos tienen y todos quieren. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 EMINEM 🔥36-39🔥40-44🔥/🔥RETRO 3 EMINEM 🔥36-39🔥40-44🔥.webp",
      "IMG/🔥RETRO 3 EMINEM 🔥36-39🔥40-44🔥/🔥RETRO 3 EMINEM 🔥36-39🔥40-44🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 EMINEM 🔥36-39🔥40-44🔥/🔥RETRO 3 EMINEM 🔥36-39🔥40-44🔥 parte atras.webp",
    ],
  },
  {
    id: 29, brand: "Jordan", name: "Retro 3 Travis Scott", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "La collab más hyped de Travis Scott con Jordan Brand. El Cactus Jack en la silueta del AJ3, sinónimo de exclusividad máxima y cultura pop. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 TRAVIS SCOTT🔥36-40🔥40-45🔥/🔥RETRO 3 TRAVIS SCOTT🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 TRAVIS SCOTT🔥36-40🔥40-45🔥/🔥RETRO 3 TRAVIS SCOTT🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 TRAVIS SCOTT🔥36-40🔥40-45🔥/🔥RETRO 3 TRAVIS SCOTT🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 30, brand: "Jordan", name: "Retro 3 Muslin", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Colorway crudo y natural en el AJ3. Tonos arena y muslin que hacen de este tenis un must-have atemporal para cualquier guardarropa. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥JORDAN RETRO 3 MUSLIN 🔥36-40🔥40-45🔥/🔥JORDAN RETRO 3 MUSLIN 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥JORDAN RETRO 3 MUSLIN 🔥36-40🔥40-45🔥/🔥JORDAN RETRO 3 MUSLIN 🔥36-40🔥40-45🔥  parte lateral.webp",
      "IMG/🔥JORDAN RETRO 3 MUSLIN 🔥36-40🔥40-45🔥/🔥JORDAN RETRO 3 MUSLIN 🔥36-40🔥40-45🔥  parte atras.webp",
    ],
  },
  {
    id: 31, brand: "Jordan", name: "Retro 3 Año del Tigre", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Edición limitada inspirada en el zodiaco chino. Fusiona la silueta icónica del AJ3 con detalles exclusivos del Año del Tigre. Cultura, identidad y estilo asiático en cada paso. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 AÑO DEL TIGRE 🔥36-40🔥40-45🔥/🔥RETRO 3 AÑO DEL TIGRE 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 AÑO DEL TIGRE 🔥36-40🔥40-45🔥/🔥RETRO 3 AÑO DEL TIGRE 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 AÑO DEL TIGRE 🔥36-40🔥40-45🔥/🔥RETRO 3 AÑO DEL TIGRE 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
    video: "IMG/🔥RETRO 3 AÑO DEL TIGRE 🔥36-40🔥40-45🔥/video.mp4"
  },
  {
    id: 32, brand: "Jordan", name: "Retro 3 Black Cement", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "El colorway original y más legendario del Air Jordan 3. El tenis que revolucionó el juego en 1988 y sigue siendo referencia del sneaker culture. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 BLACK CEMENT🔥36-40🔥40-45🔥/🔥RETRO 3 BLACK CEMENT🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 BLACK CEMENT🔥36-40🔥40-45🔥/🔥RETRO 3 BLACK CEMENT🔥36-40🔥40-45🔥 parte lateral.webp",
    ],
  },
  {
    id: 33, brand: "Jordan", name: "Retro 3 Black History", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Edición especial en honor al Black History Month. El AJ3 con un mensaje cultural profundo y un diseño poderoso que rinde tributo a la herencia afroamericana. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 BLACK HISTORY 🔥36-40🔥40-45🔥/🔥RETRO 3 BLACK HISTORY 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 BLACK HISTORY 🔥36-40🔥40-45🔥/🔥RETRO 3 BLACK HISTORY 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 BLACK HISTORY 🔥36-40🔥40-45🔥/🔥RETRO 3 BLACK HISTORY 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 34, brand: "Jordan", name: "Retro 3 Fear Pack", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Parte del icónico Fear Pack de Jordan Brand. Uno de los sets más codiciados de la historia, con detalles oscuros y una energía que pocos tenis transmiten. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 FEAR PACK 🔥36-40🔥40-45🔥/🔥RETRO 3 FEAR PACK 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 FEAR PACK 🔥36-40🔥40-45🔥/🔥RETRO 3 FEAR PACK 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 FEAR PACK 🔥36-40🔥40-45🔥/🔥RETRO 3 FEAR PACK 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 35, brand: "Jordan", name: "Retro 3 J Balvin", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "La collab de J Balvin con Jordan Brand en el AJ3. Colores vibrantes que fusionan el reggaetón, la cultura latina y el mundo sneaker en un solo tenis. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 J BALVIN 🔥36-40🔥40-45🔥/🔥RETRO 3 J BALVIN 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 J BALVIN 🔥36-40🔥40-45🔥/🔥RETRO 3 J BALVIN 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 J BALVIN 🔥36-40🔥40-45🔥/🔥RETRO 3 J BALVIN 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 36, brand: "Jordan", name: "Retro 3 KAWS", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "El artista urbano más cotizado del mundo se une al AJ3. Una obra de arte que se usa en los pies. KAWS x Jordan, collab que define una generación. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 KAWS 🔥36-40🔥40-45🔥/🔥RETRO 3 KAWS 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 KAWS 🔥36-40🔥40-45🔥/🔥RETRO 3 KAWS 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 KAWS 🔥36-40🔥40-45🔥/🔥RETRO 3 KAWS 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 37, brand: "Jordan", name: "Retro 3 Korea", price: 280000,
    sizesWomen: [40,41,42,43,44,45], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Edición especial inspirada en la cultura coreana. Detalles únicos que mezclan el ADN del AJ3 con la estética del K-Style. Rare y difícil de conseguir. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 KOREA 🔥40-45🔥/🔥RETRO 3 KOREA 🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 KOREA 🔥40-45🔥/🔥RETRO 3 KOREA 🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 KOREA 🔥40-45🔥/🔥RETRO 3 KOREA 🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 38, brand: "Jordan", name: "Retro 3 Lucky Short", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Paleta verde jade que evoca suerte y exclusividad. Un AJ3 diferente a todo lo que has visto, con una energía fresca y única en el street style. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 LUCKY SHORT 🔥36-40🔥40-45🔥/🔥RETRO 3 LUCKY SHORT 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 LUCKY SHORT 🔥36-40🔥40-45🔥/🔥RETRO 3 LUCKY SHORT 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 LUCKY SHORT 🔥36-40🔥40-45🔥/🔥RETRO 3 LUCKY SHORT 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 39, brand: "Jordan", name: "Retro 3 Nina Channel", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Elegancia y moda en el Air Jordan 3. Influenciado por el mundo de la alta costura con detalles sofisticados que elevan la silueta clásica a otro nivel. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 NINA CHANNEL 🔥36-40🔥40-45🔥/🔥RETRO 3 NINA CHANNEL 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 NINA CHANNEL 🔥36-40🔥40-45🔥/🔥RETRO 3 NINA CHANNEL 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 NINA CHANNEL 🔥36-40🔥40-45🔥/🔥RETRO 3 NINA CHANNEL 🔥36-40🔥40-45🔥 parte atres.webp",
    ],
  },
  {
    id: 40, brand: "Jordan", name: "Retro 3 Off Noir", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Tonos oscuros y suaves que definen el lujo urbano. El AJ3 en su versión más misteriosa y sofisticada, para quienes saben que menos es más. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 OFF NOIR 🔥36-40🔥40-45🔥/🔥RETRO 3 OFF NOIR 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 OFF NOIR 🔥36-40🔥40-45🔥/🔥RETRO 3 OFF NOIR 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 OFF NOIR 🔥36-40🔥40-45🔥/🔥RETRO 3 OFF NOIR 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 41, brand: "Jordan", name: "Retro 3 Pine Green", price: 280000,
    sizesWomen: [40,41,42,43,44,45], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Verde bosque profundo en la silueta más icónica de Jordan. Un colorway natural y fresco que conecta con lo auténtico y destaca en cualquier look. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 PINE GREEN 🔥40-45🔥/🔥RETRO 3 PINE GREEN 🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 PINE GREEN 🔥40-45🔥/🔥RETRO 3 PINE GREEN 🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 PINE GREEN 🔥40-45🔥/🔥RETRO 3 PINE GREEN 🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 42, brand: "Jordan", name: "Retro 3 Pure White", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Blanco puro en el Air Jordan 3. Minimalismo total para quienes dejan hablar el silencio con estilo. Limpio, versátil y eterno. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 PURE WHITE 🔥36-40🔥40-45🔥/🔥RETRO 3 PURE WHITE 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 PURE WHITE 🔥36-40🔥40-45🔥/🔥RETRO 3 PURE WHITE 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 PURE WHITE 🔥36-40🔥40-45🔥/🔥RETRO 3 PURE WHITE 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 43, brand: "Jordan", name: "Retro 3 Rare Air", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "El espíritu original del AJ3 en una versión de edición limitada. Rare Air porque lo que llevas en los pies no lo tiene cualquiera. Exclusivo por naturaleza. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 RARE AIR 🔥36-40🔥40-45🔥/🔥RETRO 3 RARE AIR 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 RARE AIR 🔥36-40🔥40-45🔥/🔥RETRO 3 RARE AIR 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 RARE AIR 🔥36-40🔥40-45🔥/🔥RETRO 3 RARE AIR 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 44, brand: "Jordan", name: "Retro 3 Travis Black", price: 280000,
    sizesWomen: [36,37,38,39,40], sizesMen: [40,41,42,43,44,45],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "La versión más oscura de la collab Travis Scott x Jordan. Cactus Jack en negro total. Exclusividad y actitud en su máxima expresión. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 TRAVIS BLACK 🔥36-40🔥40-45🔥/🔥RETRO 3 TRAVIS BLACK 🔥36-40🔥40-45🔥.webp",
      "IMG/🔥RETRO 3 TRAVIS BLACK 🔥36-40🔥40-45🔥/🔥RETRO 3 TRAVIS BLACK 🔥36-40🔥40-45🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 TRAVIS BLACK 🔥36-40🔥40-45🔥/🔥RETRO 3 TRAVIS BLACK 🔥36-40🔥40-45🔥 parte atras.webp",
    ],
  },
  {
    id: 45, brand: "Jordan", name: "Retro 3 Violet Ore", price: 280000,
    sizesWomen: [36,37,38,39], sizesMen: [36,37,38,39],
    tags: ["Lifestyle","Exclusivo","Limited"],
    description: "Tono violeta mineral en la silueta clásica del AJ3. Un colorway único que mezcla feminidad y actitud urbana. Difícil de encontrar y fácil de amar. Envío gratis · Con caja y obsequio incluido · Garantía incluida.",
    imgs: [
      "IMG/🔥RETRO 3 VIOLET ORE 🔥36-39🔥/🔥RETRO 3 VIOLET ORE 🔥36-39🔥.webp",
      "IMG/🔥RETRO 3 VIOLET ORE 🔥36-39🔥/🔥RETRO 3 VIOLET ORE 🔥36-39🔥 parte lateral.webp",
      "IMG/🔥RETRO 3 VIOLET ORE 🔥36-39🔥/🔥RETRO 3 VIOLET ORE 🔥36-39🔥 parte atras.webp",
    ],
  },
];

function formatPrice(p) {
  if (p == null) return 'Consultar precio';
  return '$' + p.toLocaleString('es-CO') + ' COP';
}

/* -------------------- CURSOR — mix-blend-mode:difference (visible en cualquier fondo) ---- */

/* -------------------- NAVBAR -------------------- */
function initNavbar() {
  const nav  = document.getElementById('navbar');
  const hero = document.getElementById('hero');
  if (!nav) return;
  const obs = new IntersectionObserver(entries => {
    if (entries[0].isIntersecting) {
      nav.classList.remove('scrolled');
      document.body.classList.add('hero-active');
    } else {
      nav.classList.add('scrolled');
      document.body.classList.remove('hero-active');
    }
  }, { threshold: 0.1 });
  if (hero) obs.observe(hero); else nav.classList.add('scrolled');

  const burger = document.getElementById('navBurger');
  const menu   = document.getElementById('mobileMenu');
  const close  = document.getElementById('mobileClose');
  if (burger && menu && close) {
    burger.addEventListener('click', () => menu.classList.add('open'));
    close.addEventListener('click',  () => menu.classList.remove('open'));
    menu.querySelectorAll('.m-link').forEach(a => a.addEventListener('click', () => menu.classList.remove('open')));
  }
}

/* -------------------- HERO ANGLE THUMBNAILS -------------------- */
function initHeroAngles() {
  const thumbs = document.querySelectorAll('.h-thumb');
  const bgImg  = document.getElementById('heroBgImg');
  if (!thumbs.length || !bgImg) return;

  function isMobile() { return window.innerWidth <= 768; }
  let autoTimer = null;

  function setHero(btn, animate) {
    const src = (isMobile() && btn.dataset.heroMobile) ? btn.dataset.heroMobile : btn.dataset.hero;
    if (animate) {
      bgImg.style.opacity = '0';
      setTimeout(() => { bgImg.src = src; bgImg.style.opacity = '1'; }, 380);
    } else {
      bgImg.src = src;
    }
    thumbs.forEach(t => t.classList.remove('active'));
    btn.classList.add('active');
  }

  function nextSlide() {
    const list = Array.from(thumbs);
    const currentIdx = list.findIndex(t => t.classList.contains('active'));
    const next = list[(currentIdx + 1) % list.length];
    setHero(next, true);
  }

  function startAuto() {
    clearInterval(autoTimer);
    autoTimer = setInterval(nextSlide, 4500);
  }

  // Actualiza los <img> de cada thumbnail según el dispositivo
  function updateThumbPreviews() {
    const mobile = isMobile();
    thumbs.forEach(btn => {
      const img = btn.querySelector('img');
      if (!img) return;
      const src = (mobile && btn.dataset.heroMobile) ? btn.dataset.heroMobile : btn.dataset.hero;
      img.src = src;
    });
  }

  // Imagen inicial según dispositivo
  const firstActive = document.querySelector('.h-thumb.active') || thumbs[0];
  updateThumbPreviews();
  if (firstActive) setHero(firstActive, false);

  // Click manual reinicia el timer
  thumbs.forEach(btn => {
    btn.addEventListener('click', () => {
      setHero(btn, true);
      startAuto();
    });
  });

  // Al cambiar tamaño de pantalla, actualizar previews y imagen activa
  window.addEventListener('resize', () => {
    updateThumbPreviews();
    const active = document.querySelector('.h-thumb.active');
    if (active) setHero(active, false);
  });

  // Iniciar auto-rotación
  startAuto();
}

/* -------------------- SHOE EXPERIENCE — Estático, sin animación -------------------- */
function initShoe3D() {
  const canvas   = document.getElementById('shoe3dCanvas');
  const wrap     = document.getElementById('shoe3dImgWrap');
  const mainImg  = document.getElementById('shoe3dImg');
  const video    = document.getElementById('shoe3dVideo');
  const videoBtn = document.getElementById('shoe3dVideoBtn');
  const angles   = document.querySelectorAll('.s3d-angle:not(.s3d-angle-vid)');
  if (!wrap || !mainImg) return;

  /* Hover suave — levanta el tenis al pasar el mouse */
  if (canvas) {
    canvas.addEventListener('mouseenter', () => {
      wrap.style.transform = 'scale(1.10) translateY(-8px)';
    });
    canvas.addEventListener('mouseleave', () => {
      wrap.style.transform = '';
    });
  }

  /* Botón de video */
  if (videoBtn && video) {
    videoBtn.addEventListener('click', () => {
      mainImg.style.display = 'none';
      video.style.display = 'block';
      video.play();
      angles.forEach(a => a.classList.remove('active'));
      videoBtn.classList.add('active');
    });
  }

  /* Angle thumbnails — con fallback si la imagen local no existe */
  angles.forEach(btn => {
    btn.addEventListener('click', () => {
      const src      = btn.dataset.img;
      const fallback = btn.dataset.fallback;
      if (!src) return;
      /* ocultar video si estaba activo */
      if (video) { video.pause(); video.style.display = 'none'; }
      if (videoBtn) videoBtn.classList.remove('active');
      mainImg.style.display = '';
      mainImg.classList.add('changing');
      setTimeout(() => {
        mainImg.src = src;
        if (fallback) mainImg.onerror = () => { mainImg.src = fallback; };
        mainImg.classList.remove('changing');
      }, 200);
      angles.forEach(a => a.classList.remove('active'));
      btn.classList.add('active');
    });
  });
}

/* -------------------- SCROLL ANIMATIONS -------------------- */
function initScrollAnimations() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => { if (e.isIntersecting) e.target.classList.add('visible'); });
  }, { threshold: 0.1 });
  document.querySelectorAll('.animate-on-scroll').forEach(el => io.observe(el));
}

/* -------------------- CREAR CARD — Solo imagen + overlay hover -------------------- */
function createCard(product) {
  const card = document.createElement('div');
  card.className = 'product-card';

  const img = product.imgs?.[0] || '';

  card.innerHTML = `
    <div class="pc-img-wrap">
      <img
        src="${img}"
        alt="${product.name}"
        loading="lazy"
        decoding="async"
        onerror="this.style.opacity='0'"
      >
      <div class="pc-hover-overlay">
        <span class="pcr-brand">${product.brand}</span>
        <span class="pcr-name">${product.name}</span>
        <span class="pcr-cta">Ver →</span>
      </div>
    </div>
  `;

  card.addEventListener('click', () => openModal(product));
  return card;
}

function renderGrid(container, products) {
  if (!container) return;
  container.innerHTML = '';
  products.forEach(p => container.appendChild(createCard(p)));
}

/* -------------------- BESTSELLERS -------------------- */
function initBestSellers() {
  const grid = document.getElementById('bestSellersGrid');
  if (!grid) return;
  // Los 4 más exclusivos y codiciados del catálogo
  const topIds = [29, 28, 25, 36]; // Travis Scott, Eminem, A Ma Maniére, KAWS
  const best = topIds.map(id => PRODUCTS.find(p => p.id === id)).filter(Boolean);
  renderGrid(grid, best.length ? best : PRODUCTS.slice(0, 4));
}

/* -------------------- FILTROS V2 + LOAD MORE -------------------- */
function initFiltersV2() {
  const brandsBtn   = document.getElementById('fv2BrandsBtn');
  const sizesBtn    = document.getElementById('fv2SizesBtn');
  const brandsPanel = document.getElementById('fv2BrandsPanel');
  const sizesPanel  = document.getElementById('fv2SizesPanel');
  const activeLbl   = document.getElementById('fv2ActiveLbl');
  const grid        = document.getElementById('productsGrid');
  const loadMoreBtn = document.getElementById('loadMoreBtn');
  if (!brandsBtn || !sizesBtn || !grid) return;

  const PAGE = 60;
  let activeBrand = 'all', activeSize = 'all';
  let currentFiltered = PRODUCTS;
  let visibleCount = PAGE;

  const brands = [...new Set(PRODUCTS.map(p => p.brand))];
  const sizes  = [...new Set(PRODUCTS.flatMap(p => [...(p.sizesWomen||[]), ...(p.sizesMen||[])]))].sort((a,b) => a - b);

  function makePill(label, value, type, isActive) {
    const btn = document.createElement('button');
    btn.className = 'fpill' + (isActive ? ' active' : '');
    btn.textContent = label;
    btn.addEventListener('click', () => {
      if (type === 'brand') activeBrand = value;
      else activeSize = value;
      const parent = type === 'brand' ? brandsPanel : sizesPanel;
      const triggerBtn = type === 'brand' ? brandsBtn : sizesBtn;
      parent.querySelectorAll('.fpill').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
      updateActiveLbl();
      applyFilters();
      /* Auto-cerrar panel después de seleccionar */
      parent.classList.remove('open');
      triggerBtn.classList.remove('active');
    });
    return btn;
  }

  brandsPanel.appendChild(makePill('Todas', 'all', 'brand', true));
  brands.forEach(b => brandsPanel.appendChild(makePill(b, b, 'brand', false)));
  sizesPanel.appendChild(makePill('Todas', 'all', 'size', true));
  sizes.forEach(s => sizesPanel.appendChild(makePill(s, s, 'size', false)));

  function togglePanel(panel, btn, otherPanel, otherBtn) {
    const isOpen = panel.classList.contains('open');
    otherPanel.classList.remove('open'); otherBtn.classList.remove('active');
    if (isOpen) { panel.classList.remove('open'); btn.classList.remove('active'); }
    else         { panel.classList.add('open');    btn.classList.add('active'); }
  }

  brandsBtn.addEventListener('click', () => togglePanel(brandsPanel, brandsBtn, sizesPanel, sizesBtn));
  sizesBtn.addEventListener('click',  () => togglePanel(sizesPanel, sizesBtn, brandsPanel, brandsBtn));

  function updateActiveLbl() {
    const parts = [];
    if (activeBrand !== 'all') parts.push(activeBrand);
    if (activeSize  !== 'all') parts.push('T. ' + activeSize);
    if (activeLbl) activeLbl.textContent = parts.join(' · ');
  }

  function renderPaged() {
    grid.innerHTML = '';
    currentFiltered.slice(0, visibleCount).forEach(p => grid.appendChild(createCard(p)));

    if (!loadMoreBtn) return;
    const allShown = visibleCount >= currentFiltered.length;

    if (currentFiltered.length <= PAGE) {
      /* Si hay pocas referencias, ocultar el botón */
      loadMoreBtn.classList.add('hidden');
    } else if (allShown) {
      /* Ya se muestran todas — mostrar "Recoger" */
      loadMoreBtn.classList.remove('hidden');
      loadMoreBtn.textContent = 'Recoger ↑';
      loadMoreBtn.dataset.mode = 'collapse';
    } else {
      /* Quedan más por mostrar */
      loadMoreBtn.classList.remove('hidden');
      loadMoreBtn.textContent = 'Ver más →';
      loadMoreBtn.dataset.mode = 'expand';
    }
  }

  function applyFilters() {
    currentFiltered = PRODUCTS.filter(p => {
      const brandOk = activeBrand === 'all' || p.brand === activeBrand;
      const sizeOk  = activeSize  === 'all' || (p.sizesWomen||[]).includes(+activeSize) || (p.sizesMen||[]).includes(+activeSize);
      return brandOk && sizeOk;
    });
    visibleCount = PAGE;
    renderPaged();
  }

  if (loadMoreBtn) {
    loadMoreBtn.addEventListener('click', () => {
      if (loadMoreBtn.dataset.mode === 'collapse') {
        /* Recoger — volver a las primeras 6 */
        visibleCount = PAGE;
        renderPaged();
        document.getElementById('coleccion')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
      } else {
        /* Expandir — mostrar todos */
        visibleCount = currentFiltered.length;
        renderPaged();
        setTimeout(() => {
          grid.children[PAGE]?.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
        }, 80);
      }
    });
  }

  renderPaged();
}

/* -------------------- CARRITO — LocalStorage -------------------- */
let currentModalProduct = null;
let currentModalQty = 1;


function getCart() {
  try { return JSON.parse(localStorage.getItem('blvd_cart') || '[]'); }
  catch { return []; }
}
function saveCart(cart) {
  localStorage.setItem('blvd_cart', JSON.stringify(cart));
}

function addToCart(product, size, qty = 1) {
  const cart = getCart();
  const idx = cart.findIndex(i => i.id === product.id && i.size === size);
  if (idx > -1) {
    cart[idx].qty += qty;
  } else {
    cart.push({
      id: product.id, brand: product.brand, name: product.name,
      price: product.price, size: size,
      img: product.imgs?.[0] || '', qty: qty
    });
  }
  saveCart(cart);
  updateCartCount();
  renderCart();
}

function removeFromCart(id, size) {
  saveCart(getCart().filter(i => !(i.id === id && i.size === size)));
  updateCartCount();
  renderCart();
}

function updateCartCount() {
  const total = getCart().reduce((s, i) => s + i.qty, 0);
  const badge = document.getElementById('cartCount');
  if (!badge) return;
  badge.textContent = total;
  if (total > 0) badge.classList.add('visible');
  else badge.classList.remove('visible');
}

function renderCart() {
  const cart     = getCart();
  const itemsEl  = document.getElementById('cartItems');
  const footerEl = document.getElementById('cartFooter');
  const emptyEl  = document.getElementById('cartEmpty');
  const totalEl  = document.getElementById('cartTotal');
  if (!itemsEl) return;

  if (cart.length === 0) {
    itemsEl.innerHTML = '';
    if (footerEl) footerEl.style.display = 'none';
    if (emptyEl)  emptyEl.classList.add('visible');
    return;
  }

  if (footerEl) footerEl.style.display = 'flex';
  if (emptyEl)  emptyEl.classList.remove('visible');

  itemsEl.innerHTML = '';
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    const div = document.createElement('div');
    div.className = 'cart-item';
    div.innerHTML = `
      <img class="ci-img" src="${item.img}" alt="${item.name}"
        loading="lazy" decoding="async" onerror="this.style.display='none'">
      <div class="ci-info">
        <div class="ci-brand">${item.brand}</div>
        <div class="ci-name">${item.name}</div>
        <div class="ci-size">Talla EU ${item.size}${item.qty > 1 ? ' × ' + item.qty : ''}</div>
      </div>
      <div class="cart-item-right">
        <div class="ci-price">${formatPrice(item.price * item.qty)}</div>
        <button class="ci-del" aria-label="Eliminar">✕</button>
      </div>`;
    div.querySelector('.ci-del').addEventListener('click', () => removeFromCart(item.id, item.size));
    itemsEl.appendChild(div);
  });

  if (totalEl) totalEl.textContent = formatPrice(total);
}

function openCart() {
  document.getElementById('cartPanel')?.classList.add('open');
  document.getElementById('cartOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCart() {
  document.getElementById('cartPanel')?.classList.remove('open');
  document.getElementById('cartOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function showToast(msg) {
  let toast = document.getElementById('blvdToast');
  if (!toast) {
    toast = document.createElement('div');
    toast.id = 'blvdToast';
    toast.className = 'blvd-toast';
    document.body.appendChild(toast);
  }
  toast.textContent = msg;
  toast.classList.add('show');
  clearTimeout(toast._t);
  toast._t = setTimeout(() => toast.classList.remove('show'), 2800);
}

function buildWACartMsg() {
  const cart = getCart();
  if (!cart.length) return null;
  let total = 0;
  let msg = `Hola UnderShoes, me gustaria llevarme lo siguiente:\n\n`;
  cart.forEach(item => {
    total += item.price * item.qty;
    msg += `${item.brand} ${item.name}\n`;
    msg += `Talla: ${item.size}`;
    if (item.qty > 1) msg += ` — Cantidad: ${item.qty}`;
    msg += ` — ${formatPrice(item.price * item.qty)}\n\n`;
  });
  msg += `Total: ${formatPrice(total)}\n\n`;
  msg += `Por favor enviarme el link de pago para proceder.`;
  return msg;
}

function trackEvent(data) {
  fetch('/api/track', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(data)
  }).catch(() => {}); // fire and forget — no bloquea la UI
}

function openWA(url) {
  const _a = document.createElement('a');
  _a.href = url;
  _a.target = '_blank';
  _a.rel = 'noopener noreferrer';
  document.body.appendChild(_a);
  _a.click();
  document.body.removeChild(_a);
}

function openWACart() {
  const msg = buildWACartMsg();
  if (!msg) { showToast('Tu carrito está vacío'); return; }
  const cart = getCart();
  trackEvent({
    event_type: 'pagar_carrito',
    cart_items: cart,
    cart_total: cart.reduce((s, i) => s + i.price * i.qty, 0)
  });
  openWA(`https://wa.me/${BLVD_WA}?text=${encodeURIComponent(msg)}`);
}

function initCart() {
  document.getElementById('cartNavBtn')?.addEventListener('click', openCart);
  document.getElementById('cartClose')?.addEventListener('click', closeCart);
  document.getElementById('cartOverlay')?.addEventListener('click', closeCart);
  document.getElementById('cartContinueBtn')?.addEventListener('click', closeCart);
  document.getElementById('cartEmptyExplore')?.addEventListener('click', () => {
    closeCart();
    document.getElementById('coleccion')?.scrollIntoView({ behavior: 'smooth' });
  });
  /* Botón Pagar por WhatsApp */
  document.getElementById('cartCheckoutWA')?.addEventListener('click', openWACart);
  /* Botón flotante WhatsApp */
  document.getElementById('waFloatBtn')?.addEventListener('click', e => {
    e.preventDefault();
    const msg = buildWACartMsg();
    const text = msg || 'Hola UnderShoes, quisiera recibir informacion sobre sus productos.';
    trackEvent({ event_type: 'wapp_flotante' });
    openWA(`https://wa.me/${BLVD_WA}?text=${encodeURIComponent(text)}`);
  });
  /* Link WhatsApp footer */
  document.getElementById('ftWaLink')?.addEventListener('click', e => {
    e.preventDefault();
    trackEvent({ event_type: 'wapp_flotante' });
    openWA(`https://wa.me/${BLVD_WA}?text=${encodeURIComponent('Hola UnderShoes, quisiera ver el catalogo y realizar un pedido.')}`);
  });
  updateCartCount();
  renderCart();
}

/* -------------------- MOBILE PRODUCT LANDING -------------------- */
let currentMobProduct = null;
let currentMobQty = 1;
let currentMobSize = null;

function updateMobCta() {
  const cta = document.getElementById('mobProdCta');
  if (!cta) return;
  if (currentMobSize) {
    cta.textContent = 'Agregar al carrito →';
    cta.classList.add('ready');
  } else {
    cta.textContent = 'Selecciona una talla';
    cta.classList.remove('ready');
  }
}

function openMobProduct(product) {
  currentMobProduct = product;
  currentMobQty = 1;
  currentMobSize = null;

  /* Cabecera */
  const headerBrand = document.getElementById('mobProdHeaderBrand');
  if (headerBrand) headerBrand.textContent = product.brand;

  /* Imagen principal */
  const img = document.getElementById('mobProdImg');
  if (img) { img.src = product.imgs?.[0] || ''; img.alt = product.name; img.style.opacity = '1'; }

  /* Thumbnails */
  const thumbsEl = document.getElementById('mobProdThumbs');
  if (thumbsEl) {
    thumbsEl.innerHTML = '';
    (product.imgs || []).forEach((src, i) => {
      const btn = document.createElement('button');
      btn.className = 'mob-thumb-btn' + (i === 0 ? ' active' : '');
      btn.innerHTML = `<img src="${src}" alt="" onerror="this.style.display='none'">`;
      btn.addEventListener('click', () => {
        if (img) { img.style.opacity = '0'; setTimeout(() => { img.src = src; img.style.opacity = '1'; }, 180); }
        thumbsEl.querySelectorAll('.mob-thumb-btn').forEach(b => b.classList.remove('active'));
        btn.classList.add('active');
      });
      thumbsEl.appendChild(btn);
    });
  }

  /* Info */
  const brandEl = document.getElementById('mobProdBrand');
  const nameEl  = document.getElementById('mobProdName');
  const priceEl = document.getElementById('mobProdPrice');
  if (brandEl) brandEl.textContent = product.brand;
  if (nameEl)  nameEl.textContent  = product.name;
  if (priceEl) priceEl.textContent = formatPrice(product.price);

  /* Qty */
  currentMobQty = 1;
  const qtyVal = document.getElementById('mobQtyVal');
  if (qtyVal) qtyVal.textContent = '1';

  /* Tallas con etiqueta de género mejorada */
  const sizesEl = document.getElementById('mobProdSizes');
  if (sizesEl) {
    sizesEl.innerHTML = '';
    const hasBoth = product.sizesWomen?.length && product.sizesMen?.length;
    const addGroup = (sizes, label, genderClass) => {
      if (!sizes?.length) return;
      if (label) {
        const lbl = document.createElement('div');
        lbl.className = 'mob-size-gender-lbl ' + (genderClass || '');
        lbl.innerHTML = `<span class="mob-size-gender-dot"></span>${label}`;
        sizesEl.appendChild(lbl);
      }
      sizes.forEach(s => {
        const btn = document.createElement('button');
        btn.className = 'mob-size-btn';
        btn.textContent = s;
        btn.addEventListener('click', () => {
          sizesEl.querySelectorAll('.mob-size-btn').forEach(b => b.classList.remove('active'));
          btn.classList.add('active');
          currentMobSize = s;
          updateMobCta();
        });
        sizesEl.appendChild(btn);
      });
    };
    addGroup(product.sizesWomen, hasBoth ? 'Mujer' : null, 'women');
    addGroup(product.sizesMen,   hasBoth ? 'Hombre' : null, 'men');
  }

  updateMobCta();
  /* Reset scroll del wrapper al abrir */
  const scroll = document.getElementById('mobProdScroll');
  if (scroll) scroll.scrollTop = 0;
  const panel = document.getElementById('mobProduct');
  if (panel) {
    panel.classList.add('open');
    panel.setAttribute('aria-hidden', 'false');
  }
  document.body.style.overflow = 'hidden';
  document.body.classList.add('mob-prod-open');
}

function closeMobProduct() {
  const panel = document.getElementById('mobProduct');
  if (panel) { panel.classList.remove('open'); panel.setAttribute('aria-hidden', 'true'); }
  document.body.style.overflow = '';
  document.body.classList.remove('mob-prod-open');
  currentMobProduct = null;
  currentMobSize = null;
}

function initMobProduct() {
  document.getElementById('mobProdBack')?.addEventListener('click', closeMobProduct);
  document.getElementById('mobProdClose')?.addEventListener('click', closeMobProduct);

  document.getElementById('mobQtyMinus')?.addEventListener('click', () => {
    if (currentMobQty > 1) { currentMobQty--; const v = document.getElementById('mobQtyVal'); if (v) v.textContent = currentMobQty; }
  });
  document.getElementById('mobQtyPlus')?.addEventListener('click', () => {
    currentMobQty++; const v = document.getElementById('mobQtyVal'); if (v) v.textContent = currentMobQty;
  });

  document.getElementById('mobProdCta')?.addEventListener('click', () => {
    if (!currentMobSize) { showToast('Selecciona una talla primero'); return; }
    addToCart(currentMobProduct, currentMobSize, currentMobQty);
    showToast(`${currentMobProduct.name} agregado al carrito`);
    closeMobProduct();
  });

  document.getElementById('mobProdContinue')?.addEventListener('click', () => {
    closeMobProduct();
  });

  document.getElementById('mobProdWA')?.addEventListener('click', () => {
    if (!currentMobSize) { showToast('Selecciona una talla primero'); return; }
    addToCart(currentMobProduct, currentMobSize, currentMobQty);
    const cart = getCart();
    trackEvent({
      event_type:    'pagar_producto',
      product_id:    String(currentMobProduct.id),
      product_name:  currentMobProduct.name,
      product_brand: currentMobProduct.brand,
      size:          String(currentMobSize),
      qty:           currentMobQty,
      unit_price:    currentMobProduct.price,
      cart_items:    cart,
      cart_total:    cart.reduce((s, i) => s + i.price * i.qty, 0)
    });
    const msg = buildWACartMsg();
    openWA(`https://wa.me/${BLVD_WA}?text=${encodeURIComponent(msg)}`);
    closeMobProduct();
  });
}

/* -------------------- MODAL OSCURO (imagen 1 reference) -------------------- */
function openModal(product) {
  /* En móvil usar la landing de producto dedicada */
  if (window.innerWidth <= 768) { openMobProduct(product); return; }
  currentModalProduct = product;
  currentModalQty = 1;
  const qtyVal = document.getElementById('mdQtyVal');
  if (qtyVal) qtyVal.textContent = '1';
  const overlay  = document.getElementById('modalOverlay');
  const mainImg  = document.getElementById('modalMainImg');
  const thumbRow = document.getElementById('modalThumbs');
  if (!overlay || !mainImg || !thumbRow) return;

  document.getElementById('mdBrand').textContent = product.brand;
  document.getElementById('mdName').textContent  = product.name;
  document.getElementById('mdPrice').textContent = formatPrice(product.price);
  const descEl = document.getElementById('mdDesc');
  if (descEl) { descEl.textContent = product.description || ''; descEl.style.display = product.description ? 'block' : 'none'; }

  const imgs = product.imgs || [];
  const videoWrap = document.getElementById('modalVideoWrap');
  const videoEl   = document.getElementById('modalVideo');

  /* Resetear estado video */
  if (videoWrap) videoWrap.style.display = 'none';
  if (videoEl)   { videoEl.pause(); videoEl.src = ''; }
  mainImg.style.display = '';

  /* Imagen principal */
  mainImg.src = imgs[0] || '';
  mainImg.alt = product.name;
  mainImg.classList.add('entering');
  setTimeout(() => mainImg.classList.remove('entering'), 600);

  /* Thumbnails */
  thumbRow.innerHTML = '';
  imgs.forEach((src, i) => {
    const btn = document.createElement('button');
    btn.className = 'modal-thumb-btn' + (i === 0 ? ' active' : '');
    btn.innerHTML = `<img src="${src}" alt="">`;
    btn.addEventListener('click', () => {
      /* Volver a imagen — ocultar video */
      if (videoWrap) videoWrap.style.display = 'none';
      if (videoEl)   videoEl.pause();
      mainImg.style.display = '';
      /* Cambio inmediato + restart animación sobre la imagen nueva */
      mainImg.src = src;
      mainImg.classList.remove('entering');
      void mainImg.offsetWidth; // fuerza reflow para reiniciar animación
      mainImg.classList.add('entering');
      setTimeout(() => mainImg.classList.remove('entering'), 500);
      thumbRow.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
      btn.classList.add('active');
    });
    thumbRow.appendChild(btn);
  });

  /* Thumbnail de video (si el producto tiene video) */
  if (product.video && videoWrap && videoEl) {
    const vBtn = document.createElement('button');
    vBtn.className = 'modal-thumb-btn modal-thumb-video-btn';
    vBtn.innerHTML = `<span class="vthumb-icon">▶</span>`;
    vBtn.title = 'Ver video';
    vBtn.addEventListener('click', () => {
      mainImg.style.display = 'none';
      videoEl.src = product.video;
      videoWrap.style.display = 'block';
      videoEl.play();
      thumbRow.querySelectorAll('.modal-thumb-btn').forEach(b => b.classList.remove('active'));
      vBtn.classList.add('active');
    });
    thumbRow.appendChild(vBtn);
  }

  /* Tallas Mujer / Hombre */
  const sizesEl = document.getElementById('mdSizes');
  sizesEl.innerHTML = '';
  const addSizeGroup = (label, sizes) => {
    if (!sizes || sizes.length === 0) return;
    const lbl = document.createElement('div');
    lbl.className = 'md-size-gender-lbl';
    lbl.textContent = label;
    sizesEl.appendChild(lbl);
    sizes.forEach(s => {
      const btn = document.createElement('button');
      btn.className = 'md-size-btn'; btn.textContent = s;
      btn.addEventListener('click', () => {
        sizesEl.querySelectorAll('.md-size-btn').forEach(b => b.classList.remove('selected'));
        btn.classList.add('selected');
      });
      sizesEl.appendChild(btn);
    });
  };
  addSizeGroup('Mujer', product.sizesWomen);
  addSizeGroup('Hombre', product.sizesMen);

  /* Tags */
  document.getElementById('mdTags').innerHTML =
    (product.tags || []).map(t => `<span class="md-tag">${t}</span>`).join('');

  overlay.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeModal() {
  const overlay  = document.getElementById('modalOverlay');
  const videoEl  = document.getElementById('modalVideo');
  const videoWrap = document.getElementById('modalVideoWrap');
  if (overlay) overlay.classList.remove('open');
  if (videoEl)  { videoEl.pause(); videoEl.src = ''; }
  if (videoWrap) videoWrap.style.display = 'none';
  document.body.style.overflow = '';
}

function openProductById(id) {
  const p = PRODUCTS.find(x => x.id === id);
  if (p) openModal(p);
}

function initModal() {
  document.getElementById('modalClose')?.addEventListener('click', closeModal);
  document.getElementById('modalOverlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeModal();
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeModal(); });

  /* Qty buttons */
  document.getElementById('mdQtyMinus')?.addEventListener('click', () => {
    if (currentModalQty > 1) {
      currentModalQty--;
      document.getElementById('mdQtyVal').textContent = currentModalQty;
    }
  });
  document.getElementById('mdQtyPlus')?.addEventListener('click', () => {
    currentModalQty++;
    document.getElementById('mdQtyVal').textContent = currentModalQty;
  });

  /* Agregar al carrito — con validación de talla */
  document.querySelector('.md-cta')?.addEventListener('click', () => {
    if (!currentModalProduct) return;
    const selectedBtn = document.querySelector('.md-size-btn.selected');
    if (!selectedBtn) {
      const sizesEl = document.getElementById('mdSizes');
      sizesEl?.classList.add('shake-anim');
      setTimeout(() => sizesEl?.classList.remove('shake-anim'), 400);
      const lbl = document.querySelector('.md-sizes-lbl');
      if (lbl) {
        const orig = lbl.textContent;
        lbl.textContent = '⚠ Selecciona una talla primero';
        lbl.style.color = '#ff5555';
        setTimeout(() => { lbl.textContent = orig; lbl.style.color = ''; }, 2500);
      }
      return;
    }
    addToCart(currentModalProduct, +selectedBtn.textContent, currentModalQty);
    showToast(`${currentModalProduct.name} — Talla ${selectedBtn.textContent} ×${currentModalQty} agregado`);
    closeModal();
    setTimeout(openCart, 350);
  });

  /* Seguir comprando — cerrar modal */
  document.querySelector('.md-continue')?.addEventListener('click', () => {
    closeModal();
  });

  /* Pagar — agregar al carrito e ir directo a WhatsApp */
  document.querySelector('.md-wa-cta')?.addEventListener('click', () => {
    if (!currentModalProduct) return;
    const selectedBtn = document.querySelector('.md-size-btn.selected');
    if (!selectedBtn) {
      const sizesEl = document.getElementById('mdSizes');
      sizesEl?.classList.add('shake-anim');
      setTimeout(() => sizesEl?.classList.remove('shake-anim'), 400);
      const lbl = document.querySelector('.md-sizes-lbl');
      if (lbl) {
        const orig = lbl.textContent;
        lbl.textContent = '⚠ Selecciona una talla primero';
        lbl.style.color = '#ff5555';
        setTimeout(() => { lbl.textContent = orig; lbl.style.color = ''; }, 2500);
      }
      return;
    }
    addToCart(currentModalProduct, +selectedBtn.textContent, currentModalQty);
    const cart = getCart();
    trackEvent({
      event_type:    'pagar_producto',
      product_id:    String(currentModalProduct.id),
      product_name:  currentModalProduct.name,
      product_brand: currentModalProduct.brand,
      size:          selectedBtn.textContent,
      qty:           currentModalQty,
      unit_price:    currentModalProduct.price,
      cart_items:    cart,
      cart_total:    cart.reduce((s, i) => s + i.price * i.qty, 0)
    });
    const msg = buildWACartMsg();
    openWA(`https://wa.me/${BLVD_WA}?text=${encodeURIComponent(msg)}`);
    closeModal();
  });
}

/* -------------------- COUNTDOWN -------------------- */
/* Cambia esta fecha para el próximo lanzamiento */
const LAUNCH_DATE = new Date('2026-07-08T23:59:59');

function initCountdown() {
  const target = LAUNCH_DATE;
  const wrap = document.getElementById('countdown');
  const lbl  = document.querySelector('.du-timer-lbl');

  function tick() {
    const diff = target - new Date();
    if (diff <= 0) {
      if (wrap) wrap.style.display = 'none';
      if (lbl)  lbl.textContent = '¡Ya disponible!';
      return;
    }
    const d = Math.floor(diff / 86400000);
    const h = Math.floor((diff % 86400000) / 3600000);
    const m = Math.floor((diff % 3600000) / 60000);
    const s = Math.floor((diff % 60000) / 1000);
    const f = n => String(n).padStart(2,'0');
    const cd = document.getElementById('countDays');
    const ch = document.getElementById('countHours');
    const cm = document.getElementById('countMins');
    const cs = document.getElementById('countSecs');
    if (cd) cd.textContent = f(d);
    if (ch) ch.textContent = f(h);
    if (cm) cm.textContent = f(m);
    if (cs) cs.textContent = f(s);
  }
  tick(); setInterval(tick, 1000);
}

/* -------------------- STATS COUNTER -------------------- */
function animateCounter(el, target) {
  const start = Date.now(), dur = 1800;
  const ease  = t => 1 - Math.pow(1 - t, 3);
  (function tick() {
    const prog = Math.min((Date.now() - start) / dur, 1);
    el.textContent = Math.round(ease(prog) * target).toLocaleString('es-CO');
    if (prog < 1) requestAnimationFrame(tick);
  })();
}

function initStats() {
  const io = new IntersectionObserver(entries => {
    entries.forEach(e => {
      if (!e.isIntersecting) return;
      const el = e.target.querySelector('.stat-count');
      const t  = +e.target.dataset.target;
      if (el && t) animateCounter(el, t);
      io.unobserve(e.target);
    });
  }, { threshold: 0.4 });
  document.querySelectorAll('.stat[data-target]').forEach(el => io.observe(el));
}

/* -------------------- CHECKOUT -------------------- */
const BLVD_WA = '573184252314';

function openCheckout() {
  const cart = getCart();
  if (cart.length === 0) return;

  /* Poblar resumen */
  const summary = document.getElementById('checkoutSummary');
  const totalEl = document.getElementById('checkoutTotal');
  if (summary) {
    let total = 0;
    summary.innerHTML = '';
    cart.forEach(item => {
      total += item.price * item.qty;
      const div = document.createElement('div');
      div.className = 'ck-item';
      div.innerHTML = `
        <span class="ck-item-name">${item.brand} ${item.name} — T.${item.size}${item.qty > 1 ? ' ×' + item.qty : ''}</span>
        <span class="ck-item-price">${formatPrice(item.price * item.qty)}</span>`;
      summary.appendChild(div);
    });
    if (totalEl) totalEl.textContent = formatPrice(total);
  }

  /* Reset a step 1 */
  const form = document.getElementById('checkoutForm');
  const succ = document.getElementById('checkoutSuccess');
  if (form) { form.style.display = ''; }
  if (succ) { succ.style.display = 'none'; }
  ['ckName','ckPhone','ckCity','ckAddress'].forEach(id => {
    const el = document.getElementById(id);
    if (el) el.value = '';
  });

  closeCart();
  document.getElementById('checkoutOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
}

function closeCheckout() {
  document.getElementById('checkoutOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function submitCheckout() {
  const name    = document.getElementById('ckName')?.value.trim();
  const phone   = document.getElementById('ckPhone')?.value.trim();
  const city    = document.getElementById('ckCity')?.value.trim();
  const address = document.getElementById('ckAddress')?.value.trim();

  if (!name || !phone || !city || !address) {
    showToast('Por favor completa todos los campos');
    /* Marcar campos vacíos */
    ['ckName','ckPhone','ckCity','ckAddress'].forEach(id => {
      const el = document.getElementById(id);
      if (el && !el.value.trim()) el.style.borderColor = '#ff5555';
      else if (el) el.style.borderColor = '';
    });
    return;
  }

  /* Construir mensaje WhatsApp */
  const cart = getCart();
  let msg = `Hola UnderShoes, quisiera confirmar el siguiente pedido:\n\n`;
  let total = 0;
  cart.forEach(item => {
    total += item.price * item.qty;
    msg += `${item.brand} ${item.name} — Talla ${item.size}${item.qty > 1 ? ' — Cantidad: ' + item.qty : ''} — ${formatPrice(item.price * item.qty)}\n`;
  });
  msg += `\nTotal: ${formatPrice(total)}\n\n`;
  msg += `Datos de entrega:\n`;
  msg += `Nombre: ${name}\n`;
  msg += `Telefono: ${phone}\n`;
  msg += `Ciudad: ${city}\n`;
  msg += `Direccion: ${address}\n\n`;
  msg += `Quedo atento para recibir el link de pago.`;

  trackEvent({
    event_type: 'pagar_checkout',
    cart_items: cart,
    cart_total: total
  });

  const waLink = `https://wa.me/${BLVD_WA}?text=${encodeURIComponent(msg)}`;

  /* Abrir WhatsApp de inmediato — anchor click evita bloqueo de popups en móvil */
  const _a = document.createElement('a');
  _a.href = waLink;
  _a.target = '_blank';
  _a.rel = 'noopener noreferrer';
  document.body.appendChild(_a);
  _a.click();
  document.body.removeChild(_a);

  /* Limpiar carrito y cerrar */
  saveCart([]);
  updateCartCount();
  renderCart();
  closeCheckout();
}

function initCheckout() {
  document.getElementById('checkoutClose')?.addEventListener('click', closeCheckout);
  document.getElementById('checkoutDone')?.addEventListener('click',  closeCheckout);
  document.getElementById('checkoutOverlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeCheckout();
  });
  document.getElementById('checkoutSubmit')?.addEventListener('click', submitCheckout);
  /* "Finalizar Compra" en el panel del carrito */
  document.querySelector('.cart-checkout-btn')?.addEventListener('click', openCheckout);
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeCheckout(); });
}

/* -------------------- NOTIFY MODAL (LANZAMIENTOS) -------------------- */
function openEmailModal() {
  document.getElementById('emailModalOverlay')?.classList.add('open');
  document.body.style.overflow = 'hidden';
  setTimeout(() => document.getElementById('emName')?.focus(), 200);
}

function closeEmailModal() {
  document.getElementById('emailModalOverlay')?.classList.remove('open');
  document.body.style.overflow = '';
}

function initEmailModal() {
  document.getElementById('notifyDropBtn')?.addEventListener('click', openEmailModal);
  document.getElementById('emailModalClose')?.addEventListener('click', closeEmailModal);
  document.getElementById('emailModalOverlay')?.addEventListener('click', e => {
    if (e.target === e.currentTarget) closeEmailModal();
  });
  document.getElementById('emSubmit')?.addEventListener('click', async () => {
    const name  = document.getElementById('emName')?.value.trim();
    const email = document.getElementById('emEmail')?.value.trim();
    const phone = document.getElementById('emPhone')?.value.trim();
    if (!name) {
      showToast('Por favor ingresa tu nombre');
      document.getElementById('emName')?.focus();
      return;
    }
    if (!email || !email.includes('@')) {
      showToast('Por favor ingresa un correo válido');
      document.getElementById('emEmail')?.focus();
      return;
    }
    if (!phone) {
      showToast('Por favor ingresa tu número de WhatsApp');
      document.getElementById('emPhone')?.focus();
      return;
    }

    const btn = document.getElementById('emSubmit');
    const original = btn.textContent;
    btn.textContent = 'Guardando…';
    btn.disabled = true;

    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ name, email, phone }),
      });
      const data = await res.json();
      if (!res.ok) {
        showToast(data.error || 'Error al registrar. Intenta de nuevo.');
      } else {
        showToast('Registrado. Te avisamos en el próximo lanzamiento');
        closeEmailModal();
        ['emName','emEmail','emPhone'].forEach(id => {
          const el = document.getElementById(id);
          if (el) el.value = '';
        });
      }
    } catch {
      showToast('Sin conexión. Intenta de nuevo.');
    } finally {
      btn.textContent = original;
      btn.disabled = false;
    }
  });
  /* Enter en cualquier campo → enviar */
  ['emName','emEmail','emPhone'].forEach(id => {
    document.getElementById(id)?.addEventListener('keydown', e => {
      if (e.key === 'Enter') document.getElementById('emSubmit')?.click();
    });
  });
  document.addEventListener('keydown', e => { if (e.key === 'Escape') closeEmailModal(); });
}

/* -------------------- INIT -------------------- */
document.addEventListener('DOMContentLoaded', () => {
  initNavbar();
  initHeroAngles();
  initShoe3D();
  initScrollAnimations();
  initBestSellers();
  initFiltersV2();
  initModal();
  initCountdown();
  initStats();
  initCart();
  initCheckout();
  initEmailModal();
  initMobProduct();
});

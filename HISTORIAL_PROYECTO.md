# BLVD — Urban Footwear
## Historial completo del proyecto

**Fecha de inicio:** Junio 2026  
**Carpeta del proyecto:** `C:\Users\biqui\OneDrive\Desktop\proyecto zapatos\`  
**Archivos principales:** `index.html` · `css/styles.css` · `js/main.js`

---

## ROUND 1 — Creación inicial de la página

### Lo que el usuario pidió
- Crear una página web **estática** para venta de zapatillas
- Referencias visuales: monastery.com.co · y-out.com · mattelsa.net
- Adoptar las librerías, estilos y diseños de esas páginas
- **Estilo general:** Streetwear + Futurismo + Tecnología + Editorial + Lujo/Premium

### Secciones solicitadas
| Sección | Descripción |
|---|---|
| Navbar | Logo centrado, links a cada lado |
| Hero | Texto masivo + zapatilla flotante + thumbnails de ángulos 360° |
| Filtros de marca y talla | Sin catálogo visible, solo filtros |
| Animaciones de scroll | Activadas con IntersectionObserver |
| Footer animado | Con scanline |
| Zoom de producto | Modal con carrusel y zoom al hacer hover |

### Lo que se implementó
- Tipografías: **Bebas Neue** (headings) + **Space Grotesk** (body)
- Cursor personalizado con seguidor (mix-blend-mode)
- 10 productos iniciales: Nike (2), Jordan (2), Adidas (2), New Balance (2), Vans (1), Converse (1)
- Sistema de filtros por marca + talla con IntersectionObserver
- Modal con zoom + carrusel de thumbnails
- Contador de tiempo para drops
- Animación AUTÉNTICO con marquee scroll
- Footer con scanline

---

## ROUND 2 — Rediseño completo

### Lo que el usuario pidió
- **Modificar el banner** — más llamativo y disruptivo
- Paleta de colores: **70% blanco / 30% negro**
- Eliminar la cintilla (ticker corriendo)
- Cards con **brillo al hover** (shine effect)
- Sección final con letra grande estilo Y/OUT
- Página más creativa y disruptiva **manteniendo la misma línea conceptual**
- Adaptar imagen de la carpeta para la presentación de zapatillas
- Más colores incorporados, predominancia del blanco

### Imágenes de referencia usadas
| Imagen | Descripción |
|---|---|
| `imagenes/1.png` | SneakSpeaks UI — interfaz oscura, zapatilla Air Jordan en ángulo, thumbnails 360°, selector de tallas |
| `imagenes/2.png` | Dos fotos editoriales lifestyle — hombre en chaqueta mostaza, persona saltando con zapatillas azules |
| `imagenes/3.png` | Monastery banner — persona en all-black, fondo oscuro dramático, texto "MONASTERY" de fondo |
| `imagenes/4.png` | Y/OUT banner — dos jóvenes en ropa urbana colorida, fotografía editorial/candid |

### Lo que se implementó
- Paleta CSS: `--cream: #FAFAF8` · `--white: #FFFFFF` · `--black: #000` · `--blue: #1C6FFF`
- Hero completamente rediseñado: tipografía masiva (`clamp(80px, 15vw, 200px)`) + zapatilla flotante a `-14deg`
- Banda de manifesto en negro con cita
- Sección horizontal scroll (drag-to-scroll)
- Cards con **shine sweep** (gradiente que cruza la tarjeta al hover)
- Glow azul en borde de cards al hover
- Sección AUTÉNTICO con texto gigante animado
- Sección lifestyle editorial (dos fotos grandes)
- Countdown timer para drops

---

## ROUND 3 — Cambios visuales y de identidad

### Lo que el usuario pidió
1. **Banner con persona humana con estilo** — referencias imagen 3 (Monastery: dramático, oscuro, persona centrada) e imagen 4 (Y/OUT: editorial, lifestyle)
2. **Adaptar imagen 1** para mostrar las referencias de zapatillas
3. **Cards sin precio ni tallas visible** — solo imagen, todo oculto hasta hacer click
4. **Referencia Monster Energy** (monsterenergy.com/es-co/) — elementos disruptivos, sin copiar el concepto completo
5. **CTAs con formas redondas** — pill-shaped (border-radius: 999px)
6. **Nombre de marca más urbano** — cambiar de STEPR a algo más urbano
7. **Tipografías más urbanas y elegantes** — espaciado discreto (reducir letter-spacing)

### Decisiones de diseño tomadas
| Elemento | Decisión |
|---|---|
| Nuevo nombre de marca | **BLVD** (Boulevard — urbano, conectado al caminar) |
| Logo | BLV en negro + **D** en azul eléctrico |
| Tagline principal | "Muévete diferente." |
| Subtítulo | "Tu identidad. A cada paso." |
| Letter-spacing CTAs | Reducido a `0.06em` (antes `0.18–0.35em`) |
| CTAs | `border-radius: 999px` en todos |

### Lo que se implementó

#### Hero (estilo Monastery + Y/OUT)
- Foto full-screen de persona con estilo usando sneakers
- Texto fantasma "BLVD" en tamaño enorme con opacidad `0.038` (igual que "MONASTERY" en imagen 3)
- Overlay oscuro con gradiente para legibilidad
- Barra inferior con thumbnails de ángulos 360° (referencia imagen 1 — SneakSpeaks)
- CTAs pill: `Explorar colección` + `Ver Drops ↗`

#### Cards — Solo imagen (Monster Energy inspired)
- Las cards muestran **únicamente la foto** de la zapatilla — sin precio, sin tallas, sin texto
- Al hacer **hover**: overlay oscuro desde abajo con nombre + botón pill translúcido
- Al hacer **click**: se abre el modal completo con todos los detalles
- Efecto shine eliminado del estilo previo, reemplazado por glow azul en borde

#### Sección Product Showcase (referencia imagen 1)
- Zapatilla en ángulo `-10deg` sobre fondo oscuro
- Glow azul en la parte inferior (como imagen 1)
- 3 thumbnails de ángulos debajo (click para cambiar)
- Descripción aspiracional + CTA

---

## ROUND 4 — Rediseño completo de cards, experiencia 3D, collage y filtros

### Lo que el usuario pidió
1. **Cards con zapatilla DESBORDADA** — el tenis debe salir/sobresalir del card como en imagen 1, con perspectiva y ángulos
2. **Al hacer click** en el card — diseño exactamente como imagen 1 (SneakSpeaks): modal oscuro, zapatilla angled, thumbnails 360°, info a la derecha
3. **Más marcas:** Nike, Adidas, Puma, Converse, Adio, skate, Jordan, deportivas urbanas
4. **Filtros como DOS botones:** uno de Marcas y uno de Tallas — al hacer click se despliegan horizontalmente
5. **Imágenes horizontales editoriales** (referencia imagen 5 — persona leyendo periódico, cinematic/editorial, full-width)
6. **Sección debajo del banner** — experiencia con el tenis en 3D, con movimiento disruptivo, sin cards, mostrando solo el tenis "en 3D" con descripción del producto de temporada al lado
7. **Quitar el brillo** al pasar por encima de las tarjetas
8. **Segundo banner** con persona aspiracional, urbana, contemporánea y disruptiva
9. **Sección collage** — tarjetas de diferentes tamaños armando una composición conjunta mezclando personas e imágenes de las zapatillas

### Imágenes de referencia adicionales
| Imagen | Descripción |
|---|---|
| `imagenes/5.png` | Banner editorial horizontal — persona leyendo periódico con texto "PREMIUM FABRIC / COMING SOON", muy cinemático y ancho |

### Lo que se implementó

#### Cards — Zapatilla DESBORDADA (overflow design)
```
   [  TENIS FLOTANTE  ]   ← desborda 140px hacia arriba del card
   ┌───────────────────┐
   │  [brand] [nombre] │  ← aparece solo al hover
   │         [Ver →]   │
   └───────────────────┘
```
- `overflow: visible` en el card → permite el desborde real
- `.pc-shoe-float` posicionado por encima del `.pc-base` con `margin-bottom: -24px`
- Zapatilla con `rotate(-14deg) translateX(-4%)` + `drop-shadow`
- Al hover: sube 14px + `scale(1.08)` — efecto de zapatilla volando
- Base: fondo `--off-white` con border + `border-radius: 10px`
- Info (brand + nombre + CTA pill) aparece al hover con `opacity: 0 → 1` + `translateY`
- **Brillo ELIMINADO completamente**

#### Modal oscuro — SneakSpeaks style (imagen 1)
- Fondo `#111110` (--dark)
- Panel galería: `#0A0A08` con radial gradient azul de fondo
- Zapatilla mostrada con `rotate(-14deg) scale(1.15)` — desbordada y en perspectiva
- `drop-shadow(0 24px 48px rgba(0,0,0,0.7)) + drop-shadow azul`
- Al hover la imagen: `scale(1.25)` manteniendo el ángulo
- Animación de entrada: `rotate(-14deg) scale(0.85) → scale(1.15)`
- Row de thumbnails 360° con **badge "360°"** en azul (idéntico a imagen 1)
- Panel de info en negro: brand azul, nombre blanco, precio blanco
- Tamaños: botones pill oscuros `rgba(255,255,255,0.04)` → blanco al seleccionar
- Tags: pills sutiles con borde rgba
- Perks: iconos azules

#### Experiencia 3D del tenis (reemplaza Product Showcase)
- Sección dividida: izquierda = canvas 3D / derecha = info del producto
- **Animación automática CSS 3D:** `rotateY(-22deg) → +18deg → -22deg` (loop 7s)
- **Mouse parallax:** al mover el cursor sobre el canvas, la zapatilla reacciona en X e Y con `rotateY` y `rotateX` en tiempo real
- Al salir el mouse: regresa suavemente a la animación automática
- Row de ángulos 360° debajo del canvas (mismo estilo imagen 1)
- Info panel: nombre en tipografía Bebas Neue grande, descripción aspiracional, specs en tabla, CTA pill

#### Banners editoriales horizontales (ref. imagen 5)
- **Banner 1:** Foto full-width con texto a la izquierda — "PREMIUM / CULTURE."
- **Banner 2:** Foto full-width con texto a la derecha — "COMING / SOON."
- Altura: `55vmax` (máx. 600px, mín. 340px)
- Overlay con gradiente lateral para que el texto sea legible
- `eb-headline` en Bebas Neue con texto sólido + outline intercalado

#### Collage de personas + zapatillas (grid composition)
Grid de 12 columnas × filas de 90px con composición asimétrica:
```
[  persona grande  ] [ shoe  ] [ shoe ]
[  (5 col × 6 fil) ] [4×3   ] [3×3   ]
                     [  lifestyle wide 7×3  ]
[ color ] [ editorial ] [ skate culture ]
```
- 7 imágenes en total: mezcla de personas con estilo + close-ups de zapatillas
- Cada ítem con label sobreimpreso en esquina inferior

#### Filtros V2 — Dos botones expandibles
```
[ ◉ Marcas ▾ ]  [ ▦ Tallas ▾ ]  Nike · T.42
        ↓ (al hacer click)
[ Todas ] [ Nike ] [ Jordan ] [ Adidas ] [ New Balance ] [ Puma ] [ Vans ] ...
```
- Solo 2 triggers: `Marcas` y `Tallas`
- Al hacer click: panel se expande (`max-height: 0 → 200px`) con transición suave
- La flecha `▾` rota 180° cuando está activo
- Botón activo: fondo negro con texto blanco
- Indicador de filtros activos a la derecha de los botones

#### Marcas disponibles (15 productos)
| # | Marca | Productos |
|---|---|---|
| 1 | Nike | Air Max Pulse · Pegasus 41 |
| 2 | Jordan | Jordan 1 Retro High · Jordan 4 Black Cat |
| 3 | Adidas | Ultraboost 24 · Samba OG |
| 4 | New Balance | Fresh Foam 1080v13 · NB 574 |
| 5 | Puma | RS-X Efekt · Suede Classic XXI |
| 6 | Vans | Old Skool Pro · Era 59 Skate |
| 7 | Converse | Chuck Taylor All Star |
| 8 | Etnies | Marana Skate |
| 9 | DC Shoes | Court Graffik |

---

## Estructura de archivos del proyecto

```
proyecto zapatos/
├── index.html              ← Estructura HTML completa
├── css/
│   └── styles.css          ← Todos los estilos, variables CSS, responsive
├── js/
│   └── main.js             ← Interactividad: 3D, filtros, modal, contador
├── imagenes/
│   ├── 1.png               ← SneakSpeaks UI (referencia modal + cards)
│   ├── 2.png               ← Lifestyle editorial (referencia collage/lifestyle)
│   ├── 3.png               ← Monastery banner (referencia hero dark + person)
│   ├── 4.png               ← Y/OUT banner (referencia editorial fashion)
│   └── 5.png               ← Banner horizontal cinemático (referencia editorial bands)
└── HISTORIAL_PROYECTO.md   ← Este archivo
```

---

## Tokens de diseño (CSS Variables)

```css
/* Paleta 70% blanco / 30% negro */
--white:      #FFFFFF
--cream:      #FAFAF8
--off-white:  #F4F3EF
--light-gray: #E8E7E3
--mid-gray:   #B0AFAB
--black:      #000000
--off-black:  #0A0A08
--dark:       #111110
--dark2:      #1A1A18

/* Acento */
--blue:       #1C6FFF
--blue-glow:  rgba(28,111,255,0.25)

/* Tipografías */
--font-head:  'Bebas Neue', sans-serif
--font-body:  'Space Grotesk', sans-serif

/* Radios */
--r-pill:     999px  ← Todos los CTAs son pill-shaped
```

---

## Funcionalidades JavaScript

| Función | Descripción |
|---|---|
| `initCursor()` | Cursor personalizado + seguidor con parallax |
| `initNavbar()` | Navbar transparente en hero, sólida al hacer scroll |
| `initHeroAngles()` | Click en thumbnails cambia la foto de fondo del hero |
| `initShoe3D()` | Experiencia 3D: animación automática + mouse parallax |
| `initScrollAnimations()` | IntersectionObserver para `.animate-on-scroll` |
| `createCard(product)` | Crea tarjeta con zapatilla desbordada (no muestra precio/tallas) |
| `renderGrid(container, products)` | Renderiza un array de productos en un grid |
| `initBestSellers()` | Renderiza productos con tags Bestseller/Limited/Icon |
| `initFiltersV2()` | Filtros con 2 botones expandibles (marcas + tallas) |
| `openModal(product)` | Abre el modal oscuro estilo SneakSpeaks con todos los detalles |
| `closeModal()` | Cierra el modal y restaura el scroll |
| `openProductById(id)` | Abre modal por ID (usado desde HTML inline) |
| `initModal()` | Inicializa listeners del modal (X, overlay, Escape) |
| `initCountdown()` | Contador regresivo de 7 días para el drop |
| `animateCounter(el, target)` | Cuenta animada de 0 al target con easing |
| `initStats()` | Activa `animateCounter` cuando los stats entran al viewport |

---

## Secciones de la página (en orden)

1. **Hero** — Full-screen oscuro, persona con estilo, texto "MUÉVETE / DIFERENTE.", texto fantasma "BLVD" de fondo, barra de ángulos 360°
2. **Manifesto Band** — Banda negra con cita de la marca
3. **Shoe 3D Experience** — Canvas 3D interactivo con mouse parallax + info del producto de temporada
4. **Editorial Band 1** — Banner cinemático horizontal "PREMIUM CULTURE." (ref. imagen 5)
5. **Más Compradas** — Grid de cards con zapatillas desbordadas (4 productos destacados)
6. **La Colección** — Grid completo con filtros V2 (15 productos, fondo crema)
7. **Collage Lifestyle** — Composición de 7 imágenes de diferentes tamaños (personas + zapatillas)
8. **Editorial Band 2** — Segundo banner cinemático "COMING SOON." con texto a la derecha
9. **Por qué BLVD** — 3 pilares en fondo oscuro con iconos
10. **Drops Exclusivos** — Countdown + card del drop con badge azul
11. **Stats** — Contadores animados: +50 marcas · +500 referencias · +10.000 clientes
12. **AUTÉNTICO** — Marquee infinito con tipografía gigante alternando sólido/outline
13. **Footer** — Logo, redes sociales, columnas de navegación, scanline animado
14. **Modal** — Ventana oscura estilo SneakSpeaks con zapatilla desbordada en perspectiva

---

## Preview / Enlace para compartir

### Cómo generar el enlace
Haz doble click en `preview.bat` dentro de la carpeta del proyecto.  
El script inicia el servidor local y genera un enlace público temporal vía Cloudflare Tunnel.

### Última URL generada
```
https://anthropology-gardens-benefit-sacramento.trycloudflare.com
```
> ⚠️ El enlace es temporal: funciona mientras el PC esté encendido y preview.bat esté corriendo.  
> Para una URL permanente usar: **netlify.com/drop** → arrastrar la carpeta del proyecto.

### Imágenes pendientes de agregar a `imagenes/`
| Archivo | Qué es |
|---|---|
| `puma-nitro.png` | Puma FAST-RB NITRO ELITE — vista frontal |
| `puma-nitro-2.png` | Vista lateral |
| `puma-nitro-3.png` | Vista trasera |
| `puma-nitro-4.png` | Vista de la suela |
| `urban-jump.png` | Hombre saltando frente a edificios |
| `lifestyle-man.png` | Hombre con RS-X agachado, chaqueta mostaza |
| `lifestyle-skate.png` | Chica con skateboard y sneakers blancos |

---

## Pendiente / Ideas futuras mencionadas

- [ ] Agregar imágenes propias a carpeta `imagenes/` (ver tabla arriba)
- [ ] Sistema de carrito de compras
- [ ] Página de producto individual
- [ ] Integración con WhatsApp para consultas
- [ ] Versión móvil testeada en dispositivo real
- [ ] URL permanente en Netlify

---

*Última actualización: 21 de junio de 2026*  
*Proyecto: BLVD Urban Footwear*  
*Stack: HTML5 · CSS3 · JavaScript vanilla (sin frameworks)*

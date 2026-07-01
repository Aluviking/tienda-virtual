# UnderShoes

Tienda virtual de zapatillas Jordan — sitio estático con funciones serverless en Vercel y base de datos en Supabase.

## Stack

| Capa | Tecnología |
|---|---|
| Frontend | HTML · CSS · Vanilla JS |
| Hosting | Vercel (static + serverless) |
| Base de datos | Supabase (PostgreSQL) |
| Control de versiones | GitHub (privado) |

## Estructura del proyecto

```
undershoes/
├── api/
│   └── subscribe.js        # Serverless function — guarda suscriptores
├── css/
│   └── styles.css          # Estilos globales
├── js/
│   └── main.js             # Lógica del sitio + catálogo de productos
├── imagenes/               # Imágenes de sección (editorial, hero, etc.)
├── IMG/                    # Imágenes de productos
├── index.html              # Página principal
├── cookies.html            # Política de cookies
├── privacidad.html         # Política de privacidad
├── schema.sql              # Esquema de la base de datos (ejecutar en Supabase)
├── vercel.json             # Configuración de Vercel
├── .env.example            # Plantilla de variables de entorno
└── package.json            # Dependencias y scripts
```

## Variables de entorno

Nunca subir valores reales al repositorio. Copiar `.env.example` como `.env` para desarrollo local.

| Variable | Descripción |
|---|---|
| `SUPABASE_URL` | URL del proyecto en Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Clave service_role (solo servidor, nunca expuesta al cliente) |

En producción estas variables se configuran en **Vercel → Settings → Environment Variables**.

## Desarrollo local

```bash
npm install
npm run dev        # Servidor local en http://localhost:5173
```

> Para que `/api/subscribe` funcione localmente instala el CLI de Vercel y usa `npx vercel dev`.

## Lint y build

```bash
npm run lint       # ESLint sobre js/main.js y api/subscribe.js
npm run build      # Alias de lint (sitio estático, sin compilación)
```

## Deploy

El deploy se hace manualmente desde la CLI:

```bash
npx vercel --prod --token TU_TOKEN --yes
```

O conectando el repo en el dashboard de Vercel para auto-deploy en cada push a `main`.

## Base de datos

Ver [SUPABASE.md](SUPABASE.md) para documentación completa de la base de datos.

## Funcionalidades

- Catálogo de 30 productos Jordan con filtros por talla, marca y género
- Modal de producto (escritorio) con galería, selector de talla/cantidad y checkout WhatsApp
- Vista de producto móvil (panel deslizante full-screen)
- Carrito lateral con persistencia en `localStorage`
- Countdown de lanzamiento con fecha fija configurable (`LAUNCH_DATE` en `main.js`)
- Modal "Mantenerme informado" que guarda suscriptores en Supabase
- Botón flotante de WhatsApp

## Seguridad

- Repositorio privado en GitHub
- Variables sensibles solo en Vercel (nunca en el código fuente)
- API serverless valida los datos antes de escribir en la base de datos
- Row Level Security (RLS) habilitado en Supabase
- `.env` y `.vercel/` en `.gitignore`

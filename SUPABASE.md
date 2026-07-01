# Supabase — Documentación de la base de datos

Proyecto: `undershoes`
URL: `https://offhbwvzhehsaubsnkxo.supabase.co`

## Tabla: `subscribers`

Guarda las personas que se registran en el modal **"Mantenerme informado"**.

### Columnas

| Columna | Tipo | Descripción |
|---|---|---|
| `id` | `uuid` | Identificador único (generado automáticamente) |
| `name` | `text` | Nombre del suscriptor |
| `email` | `text` | Correo electrónico (único — no permite duplicados) |
| `phone` | `text` | Número de WhatsApp |
| `created_at` | `timestamptz` | Fecha y hora del registro (automática) |

### Crear la tabla (schema.sql)

Ejecutar en **Supabase → SQL Editor**:

```sql
create table if not exists subscribers (
  id         uuid        default gen_random_uuid() primary key,
  name       text        not null,
  email      text        not null unique,
  phone      text        not null,
  created_at timestamptz default now()
);

alter table subscribers enable row level security;

create policy "server_insert_only"
  on subscribers
  for insert
  with check (true);
```

## Seguridad (Row Level Security)

RLS está **habilitado**. Esto significa:

- **Nadie** puede leer la tabla desde el cliente (navegador) con la clave `anon`
- Solo la API serverless (`api/subscribe.js`) puede escribir, usando la clave `service_role`
- La clave `service_role` **nunca** está en el código fuente — solo en las variables de entorno de Vercel

## Flujo de una suscripción

```
Usuario llena el modal
        ↓
Frontend (main.js) hace POST /api/subscribe
        ↓
api/subscribe.js valida nombre + email + teléfono
        ↓
Supabase inserta la fila en subscribers
        ↓
Si el email ya existe → error 409 "Este correo ya está registrado"
Si hay error del servidor → error 500
Si todo ok → { ok: true } → toast de confirmación
```

## Ver suscriptores

1. Ir a [supabase.com](https://supabase.com)
2. Seleccionar proyecto `undershoes`
3. **Table Editor → subscribers**

Desde ahí se pueden exportar a CSV, filtrar, borrar registros, etc.

## Cambiar la fecha de lanzamiento (countdown)

En `js/main.js`, línea con `LAUNCH_DATE`:

```js
const LAUNCH_DATE = new Date('2026-07-08T23:59:59');
```

Cambiar la fecha y hacer deploy. Cuando el countdown llega a cero, el contador se oculta y aparece el texto **"¡Ya disponible!"**.

## Variables de entorno requeridas

| Variable | Dónde obtenerla |
|---|---|
| `SUPABASE_URL` | Supabase → Settings → API → Project URL |
| `SUPABASE_SERVICE_ROLE_KEY` | Supabase → Settings → API → service_role (secret) |

Estas variables se configuran en **Vercel → proyecto undershoes → Settings → Environment Variables**.

## Resetear o vaciar suscriptores

```sql
-- Solo borrar todos los registros (mantiene la tabla)
truncate table subscribers;

-- Borrar un registro específico
delete from subscribers where email = 'correo@ejemplo.com';
```

-- =============================================================
--  UnderShoes — Base de datos Supabase
--  Ejecuta este script en el SQL Editor de tu proyecto Supabase
-- =============================================================

-- Tabla de suscriptores del modal "Mantenerme informado"
create table if not exists subscribers (
  id         uuid        default gen_random_uuid() primary key,
  name       text        not null,
  email      text        not null unique,
  phone      text        not null,
  created_at timestamptz default now()
);

-- Row Level Security — solo el servidor puede insertar/leer
alter table subscribers enable row level security;

-- Política: inserción solo desde el service role (API serverless)
create policy "server_insert_only"
  on subscribers
  for insert
  with check (true);

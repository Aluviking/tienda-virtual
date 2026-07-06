// UnderShoes Service Worker — v1
// Para forzar actualización del SW: cambia el número de versión de arriba
const CACHE = 'us-v1';

const SHELL = [
  '/',
  '/index.html',
  '/css/styles.css',
  '/js/main.js',
  '/favicon.svg',
  '/manifest.json',
];

// ── Instalación: precachear el shell de la app ──────────────────────────────
self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE).then(cache => cache.addAll(SHELL))
  );
  // Activar inmediatamente sin esperar que cierren las pestañas abiertas
  self.skipWaiting();
});

// ── Activación: limpiar cachés viejos y tomar control de todos los clientes ─
self.addEventListener('activate', event => {
  event.waitUntil(
    caches.keys()
      .then(keys => Promise.all(
        keys.filter(k => k !== CACHE).map(k => caches.delete(k))
      ))
      .then(() => self.clients.claim())
  );
});

// ── Fetch: estrategia híbrida ───────────────────────────────────────────────
self.addEventListener('fetch', event => {
  const req = event.request;
  const url = new URL(req.url);

  // Solo interceptar GET del mismo origen
  if (req.method !== 'GET' || url.origin !== self.location.origin) return;

  // Nunca interceptar llamadas a la API
  if (url.pathname.startsWith('/api/')) return;

  // Admin: siempre desde la red (datos sensibles, sin caché)
  if (url.pathname.startsWith('/admin')) return;

  // Imágenes: cache-first (archivos grandes, raramente cambian)
  if (/\.(webp|png|jpg|jpeg|gif|svg|ico|woff2?)$/i.test(url.pathname)) {
    event.respondWith(
      caches.match(req).then(cached =>
        cached || fetch(req).then(res => {
          const clone = res.clone();
          caches.open(CACHE).then(c => c.put(req, clone));
          return res;
        })
      )
    );
    return;
  }

  // HTML, JS, CSS, fuentes: network-first → siempre contenido fresco
  // Si no hay red, usa la caché como fallback
  event.respondWith(
    fetch(req)
      .then(res => {
        const clone = res.clone();
        caches.open(CACHE).then(c => c.put(req, clone));
        return res;
      })
      .catch(() => caches.match(req))
  );
});

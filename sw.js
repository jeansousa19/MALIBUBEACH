self.addEventListener('install', (e) => {
  // O app foi instalado
});

self.addEventListener('fetch', (e) => {
  // Código padrão para o app responder às requisições do site
  e.respondWith(fetch(e.request));
});
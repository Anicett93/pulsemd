/**
 * Service worker do Trace-ECG.
 *
 * O app é offline-first por natureza: toda a lógica clínica roda no dispositivo
 * e não há chamada de rede em nenhuma etapa. Basta então cachear o shell na
 * instalação para que ele abra sem conexão.
 *
 * Estratégia: cache-first para os estáticos (o bundle tem hash no nome, então
 * nunca serve versão velha por engano) e network-first para a navegação, com
 * queda para o cache quando não há rede.
 */
const CACHE = 'trace-ecg-v1';
const SHELL = ['./', './index.html', './manifest.json', './icons/icon-192.png'];

self.addEventListener('install', (event) => {
  event.waitUntil(
    caches.open(CACHE).then((c) => c.addAll(SHELL)).then(() => self.skipWaiting()),
  );
});

self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys()
      .then((keys) => Promise.all(keys.filter((k) => k !== CACHE).map((k) => caches.delete(k))))
      .then(() => self.clients.claim()),
  );
});

self.addEventListener('fetch', (event) => {
  const { request } = event;
  if (request.method !== 'GET' || new URL(request.url).origin !== self.location.origin) return;

  // navegação: tenta a rede para pegar atualização, cai no cache se offline
  if (request.mode === 'navigate') {
    event.respondWith(
      fetch(request)
        .then((res) => {
          const copy = res.clone();
          caches.open(CACHE).then((c) => c.put('./index.html', copy));
          return res;
        })
        .catch(() => caches.match('./index.html')),
    );
    return;
  }

  // estáticos: cache primeiro, senão busca e guarda
  event.respondWith(
    caches.match(request).then((hit) => hit || fetch(request).then((res) => {
      if (res.ok && res.type === 'basic') {
        const copy = res.clone();
        caches.open(CACHE).then((c) => c.put(request, copy));
      }
      return res;
    })),
  );
});

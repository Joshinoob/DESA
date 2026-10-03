// Service Worker für Offline-Nutzung. Bewusst "network-first": index.html trägt
// explizite no-cache-Meta-Tags, weil GitHub Pages keine eigenen Cache-Control-Header
// erlaubt und die App sich stattdessen auf ?v=NN-Cache-Busting in den <script>-Tags
// verlässt, um Nutzer zuverlässig auf neue Inhalte zu aktualisieren. Ein klassischer
// "cache-first" Service Worker würde genau dieses Problem wieder einführen (Nutzer
// bleiben auf einer alten Version hängen). Stattdessen: bei Netz IMMER frisch laden
// und nebenbei cachen, bei fehlendem Netz auf die zuletzt erfolgreich geladene Version
// zurückfallen — kein hartcodierter Dateiindex, der bei jedem Content-Update von Hand
// mitgepflegt werden müsste.
const CACHE_NAME = "desa-trainer-v1";

self.addEventListener("install", function (event) {
  self.skipWaiting();
});

self.addEventListener("activate", function (event) {
  event.waitUntil(
    caches.keys().then(function (keys) {
      return Promise.all(keys.filter(function (k) { return k !== CACHE_NAME; }).map(function (k) { return caches.delete(k); }));
    }).then(function () { return self.clients.claim(); })
  );
});

self.addEventListener("fetch", function (event) {
  const req = event.request;
  // Nur eigene GET-Anfragen behandeln (keine POST/PUT, keine fremden Origins) —
  // es gibt ohnehin keine externen Abhängigkeiten (keine CDN-Skripte, keine API-Calls).
  if (req.method !== "GET") return;
  const url = new URL(req.url);
  if (url.origin !== location.origin) return;

  event.respondWith(
    fetch(req).then(function (response) {
      if (response && response.ok) {
        const copy = response.clone();
        caches.open(CACHE_NAME).then(function (cache) { cache.put(req, copy); }).catch(function () {});
      }
      return response;
    }).catch(function () {
      return caches.match(req).then(function (cached) {
        if (cached) return cached;
        // Navigationsanfrage (z.B. direkter Seitenaufruf offline) ohne Treffer:
        // zumindest versuchen, die zuletzt gecachte index.html auszuliefern.
        if (req.mode === "navigate") return caches.match("index.html");
        return Response.error();
      });
    })
  );
});

const CACHE_NAME = "zep-portal-v1";
const ASSETS = [
  "./",
  "./index.html",
  "./profile.html",
  "./interactive_lab.html",
  "./performance.html"
];

self.addEventListener("install", (event) => {
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => cache.addAll(ASSETS)).catch(() => {})
  );
});

self.addEventListener("fetch", (event) => {
  if (event.request.method !== "GET") return;
  event.respondWith(
    fetch(event.request).catch(() => caches.match(event.request))
  );
});
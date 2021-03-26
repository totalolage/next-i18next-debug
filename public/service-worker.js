self.importScripts("https://storage.googleapis.com/workbox-cdn/releases/5.1.2/workbox-sw.js");

const CACHE = "next-i18nex-debug-pwa";
const offlineFallbackPage = "offline.html";

self.addEventListener("message", (event) => {
    if (event.data && event.data.type === "SKIP_WAITING") {
        self.skipWaiting();
    }
});

self.addEventListener("install", async (event) => {
    event.waitUntil(
        caches.open(CACHE)
            .then((cache) => cache.add(offlineFallbackPage))
    );
});

if (self.workbox.navigationPreload.isSupported()) {
    self.workbox.navigationPreload.enable();
}

self.addEventListener("fetch", (event) => {
    if (event.request.mode === "navigate") {
        event.respondWith((async () => {
            try {
                const preloadResponse = await event.preloadResponse;

                if (preloadResponse) {
                    return preloadResponse;
                }

                const networkResponse = await fetch(event.request);
                return networkResponse;
            } catch (error) {
                const cache = await caches.open(CACHE);
                const cachedResponse = await cache.match(offlineFallbackPage);
                return cachedResponse;
            }
        })());
    }
});

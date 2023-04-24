self.addEventListener('install', function (event) {
    console.log('[Service Worker] Installing Service Worker ...', event);
    event.waitUntil(caches.open("static")
        .then(function (cache) {
            console.log("precaching");
            cache.add('/index.html');
            cache.add('/css/style.css');
            cache.add('/css/header.css');
            cache.add('/css/middle.css');
            cache.add('/css/footer.css');
            cache.add('/css/responsive.css');
            cache.add('/images/png/logo.png');
            cache.add('/');
        })
    )
});

self.addEventListener('activate', function (event) {
    console.log('[Service Worker] Activating Service Worker ...', event);
    return self.clients.claim();
});
self.addEventListener('fetch', function (event) {
    console.log('[Service Worker] Fetching something ...', event);
    event.respondWith(
        caches.match(event.request)
            .then(function (response) {
                if (response)
                    return response;
                else
                    return fetch(event.request);
            }
        )
    )
});

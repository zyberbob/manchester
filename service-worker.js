const CACHE='mcr-companion-30-sprint1';
const ASSETS=["./", "./index.html", "./css/style.css", "./js/config.js", "./js/state.js", "./js/utils.js", "./js/map.js", "./js/gps.js", "./js/weather.js", "./js/places.js", "./js/budget.js", "./js/packing.js", "./js/ryanair.js", "./js/journal.js", "./js/routes.js", "./js/assistant.js", "./js/app.js", "./data/config.json", "./data/places.json", "./data/routes.json", "./data/itinerary.json", "./manifest.webmanifest", "./icons/icon-192.png", "./icons/icon-512.png"];
self.addEventListener('install',e=>{self.skipWaiting();e.waitUntil(caches.open(CACHE).then(c=>c.addAll(ASSETS)))});
self.addEventListener('activate',e=>{e.waitUntil(caches.keys().then(keys=>Promise.all(keys.filter(k=>k!==CACHE).map(k=>caches.delete(k))))) });
self.addEventListener('fetch',e=>{e.respondWith(caches.match(e.request).then(r=>r||fetch(e.request).catch(()=>caches.match('./index.html'))))});

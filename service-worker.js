const CACHE_NAME = "arena-vr-cache-v1";
const FILES_TO_CACHE = [
  "./",
  "./index.html",
  "./src/img/ITJj5Joj95z3bZP5SlJBeSNHBfw6pKA_HOxNPmo6Cl8.webp",
  "./src/img/coastercombat.jpg",
  "./src/img/image (4).png",
  "./src/img/Beat Saber.jpeg",
  "./src/img/dropdead.jpg",
  "./src/img/fd16a9a8-1095-4e93-9ac3-0036d81db998.jpg",
  "./src/img/PISTOLWHIP.png",
  "./src/img/resident evil4.jpg",
  "./src/img/hot.avif",
  "./src/img/pequeno.jpg",
  "./src/video/Richie's Plank Experience Oculus Quest Trailer.mp4",
  "./src/video/Coaster Combat Trailer.mp4",
  "./src/video/Angry Birds VR_ Isle of Pigs Launch Trailer(1080P_60FPS).mp4",
  "./src/video/BEATO SABE.mp4",
  "./src/video/DROPDEAD.mp4",
  "./src/video/Fruit Ninja VR - Gameplay Trailer _ PS VR(720P_HD).mp4",
  "./src/video/Pistol Whip - VR Launch Trailer _ Oculus Quest, PC VR.mp4",
  "./src/video/Resident Evil 4 VR - Gameplay Village Fight _ Chainsaw Man (4K 60FPS)(720P_60FPS).mp4",
  "./src/video/SUPERHOT VR Release Trailer.mp4",
  "./src/video/Tiny Archers _ Launch Trailer _ Meta Quest Platform(720P_60FPS).mp4",

  // Bootstrap JS (CDN)
  "https://cdn.jsdelivr.net/npm/bootstrap@5.3.2/dist/js/bootstrap.bundle.min.js"
];

self.addEventListener("install", event => {
  event.waitUntil(
    caches.open(CACHE_NAME).then(cache => {
      return cache.addAll(FILES_TO_CACHE);
    })
  );
  self.skipWaiting();
});

self.addEventListener("activate", event => {
  event.waitUntil(
    caches.keys().then(keys => {
      return Promise.all(
        keys.map(key => {
          if (key !== CACHE_NAME) {
            return caches.delete(key);
          }
        })
      );
    })
  );
  self.clients.claim();
});

self.addEventListener("fetch", event => {
  event.respondWith(
    caches.match(event.request).then(response => {
      return response || fetch(event.request);
    })
  );
});

'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f41d3dd2a6fe1ee32c51ecace03fc4ce",
"index.html": "3fc53df90e95e247f2aa7ac9d20a43cd",
"/": "3fc53df90e95e247f2aa7ac9d20a43cd",
"main.dart.js": "cd37085140ff905e51abc2e7aa500bcb",
"flutter.js": "c71a09214cb6f5f8996a531350400a9a",
"favicon.png": "1196b75df16d0ffad26dd00c202fd1a2",
"icons/Icon-192.png": "5ec22e9205b477f1628a0eca31b91d94",
"icons/Icon-maskable-192.png": "5ec22e9205b477f1628a0eca31b91d94",
"icons/Icon-maskable-512.png": "0285e5bef516029071867d10d3dfbc1b",
"icons/Icon-512.png": "0285e5bef516029071867d10d3dfbc1b",
"manifest.json": "a24e8fdd3e557bc6b6778fbb852481a0",
"assets/AssetManifest.json": "893cf37fef679d82fee6461945b8ce2c",
"assets/NOTICES": "7f0321f3017e184baf0512831b16f5e3",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/AssetManifest.bin.json": "9062188fe3faaa27775b330b59b6d162",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "f36bed8051b371f80bba204bfea25e21",
"assets/fonts/MaterialIcons-Regular.otf": "d6af82106733c337cc955a6514442ea2",
"assets/assets/lotties/pokeball_loading_lottie.json": "69ecab3ea8da4f89d8f4302a532c61de",
"assets/assets/bgs/dark.webp": "eb41ab40e89066919c90708b626e53b2",
"assets/assets/bgs/poison.webp": "f04babb432b05f72ec048126c96121e0",
"assets/assets/bgs/fairy.webp": "5563f123e5bf63a3c5fcf14adeda0a40",
"assets/assets/bgs/ghost.webp": "f558b182409c4cc010f8de30aaf72630",
"assets/assets/bgs/flying.webp": "a7b1dcb9a113d36bc287a72cc27252dc",
"assets/assets/bgs/electric.webp": "5c1890d6d1f12be2dd294b45f6899dae",
"assets/assets/bgs/ice.webp": "ac9b6b4b7b8566be8635643389751df9",
"assets/assets/bgs/psychic.webp": "828f52cc453e0f82e5627fa370f9a923",
"assets/assets/bgs/water.webp": "1482211f203ec3014171885c98294206",
"assets/assets/bgs/rock.webp": "afb1a5922ae652e564cdd32eb78fee3a",
"assets/assets/bgs/steel.webp": "b5eab3e2e151e0838ba3f1bb39c01d1d",
"assets/assets/bgs/grass.webp": "72f718d944335cca1e8334bde6ec8bee",
"assets/assets/bgs/normal.webp": "5f6a6b714e87207d5b80dd32eb7d3203",
"assets/assets/bgs/bug.webp": "430c0bb9923c992528bc2c457ed3c62e",
"assets/assets/bgs/fire.webp": "bd3c060900656aeaab3e0a8f4c75dad0",
"assets/assets/bgs/fighting.webp": "2cccd3e6e080f04890f7b456fab8cafc",
"assets/assets/bgs/ground.webp": "5b96e92de3b29d816308210adcb982fb",
"assets/assets/bgs/dragon.webp": "6e8de7d1732f0d92512afb2e015ead1b",
"assets/assets/icons/dark.webp": "b9eebab580ffa23f20d1150470dc3854",
"assets/assets/icons/status.webp": "0ec025c1aba3f57e2dbedda64dbc892a",
"assets/assets/icons/poison.webp": "0edca6a7d18e9d9cb9f039a2c868f392",
"assets/assets/icons/icon.png": "d4366d1c95f92895c0e306b7e61b9bd1",
"assets/assets/icons/fairy.webp": "da354ca2516035d834b5b96c8a4a4159",
"assets/assets/icons/physical.webp": "7e68f1b0f1dee74dda4df1d1a0ce9c2b",
"assets/assets/icons/ghost.webp": "b36525a5d24491fd7ffad3b0df486ea8",
"assets/assets/icons/flying.webp": "ec7e2213303970b0f6d4ace7e1686443",
"assets/assets/icons/electric.webp": "014bac1e9229d5a4f3383d90957e8f06",
"assets/assets/icons/ice.webp": "6b0e80f1a2816a168d9f117d0a7c075e",
"assets/assets/icons/special.webp": "059649af27808c8de6188f97def13e85",
"assets/assets/icons/psychic.webp": "45e335481f597c3e21a672f9fc624e0d",
"assets/assets/icons/water.webp": "db37dafa90fd6cfc649092f69f3dc2d2",
"assets/assets/icons/rock.webp": "1b57db5aaacf1e43590f21e9b10c33fe",
"assets/assets/icons/substitute.webp": "86a600544c48191ca8cc34aaf4bbbdec",
"assets/assets/icons/steel.webp": "c87f8cc93e9fe5109a76c69b7b2d264c",
"assets/assets/icons/grass.webp": "fba746b711791f81a20df8d286d77c4a",
"assets/assets/icons/normal.webp": "236e19fef0ff555a32972bf34b80f4ce",
"assets/assets/icons/bug.webp": "8e4c27624cf82d4612892d4847dbc203",
"assets/assets/icons/fire.webp": "849e36cd6fa4e2199cce9ba288762c29",
"assets/assets/icons/fighting.webp": "78a76d49e9d11513f5492e00fc92336a",
"assets/assets/icons/ground.webp": "88e6fa28aab1dcca93f7b4c018146320",
"assets/assets/icons/dragon.webp": "c8d24eebef8e52ecdba980867321ecc3",
"canvaskit/skwasm.js": "445e9e400085faead4493be2224d95aa",
"canvaskit/skwasm.js.symbols": "741d50ffba71f89345996b0aa8426af8",
"canvaskit/canvaskit.js.symbols": "38cba9233b92472a36ff011dc21c2c9f",
"canvaskit/skwasm.wasm": "e42815763c5d05bba43f9d0337fa7d84",
"canvaskit/chromium/canvaskit.js.symbols": "4525682ef039faeb11f24f37436dca06",
"canvaskit/chromium/canvaskit.js": "43787ac5098c648979c27c13c6f804c3",
"canvaskit/chromium/canvaskit.wasm": "f5934e694f12929ed56a671617acd254",
"canvaskit/canvaskit.js": "c86fbd9e7b17accae76e5ad116583dc4",
"canvaskit/canvaskit.wasm": "3d2a2d663e8c5111ac61a46367f751ac",
"canvaskit/skwasm.worker.js": "bfb704a6c714a75da9ef320991e88b03"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}

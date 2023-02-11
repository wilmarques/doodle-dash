'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"main.dart.js": "6e29568e511548bd0105bd57c0a6fab5",
"version.json": "5b312dcd131c2accd2109b361b8943d3",
"assets/assets/images/game/dash_center.png": "c9f95e0393b44d7136d8c65aef6eeb94",
"assets/assets/images/game/dash_hat_center.png": "4af075ec04e8c92cb5caead7eeede873",
"assets/assets/images/game/dash_hat_left.png": "16277dd89d4b036264afad09602fc24b",
"assets/assets/images/game/dash_hat_right.png": "1eeb0ccd2225bc928aa5afc0dcb2ebdb",
"assets/assets/images/game/dash_left.png": "b12db400fac474a7e9f74886e33b8626",
"assets/assets/images/game/dash_right.png": "46d6ea742f6e3758feba94f8a846962b",
"assets/assets/images/game/enemy_error.png": "489cb52f3ba66c8e08855e4fe1c6c5d2",
"assets/assets/images/game/enemy_trash_can.png": "5c73d2f7bc5dd80a6483931f179b6f1e",
"assets/assets/images/game/mega_dash.png": "b1f92fc27f43aef83797b67fd2556469",
"assets/assets/images/game/noogler_hat.png": "5402d23fdd56fb7984368b33e98dfb42",
"assets/assets/images/game/platform_cracked_monitor.png": "f6885e644911f69e7ee6f9bf45fa9b8f",
"assets/assets/images/game/platform_laptop.png": "c2517a1256c07d6d09a3f2edd07f4ef0",
"assets/assets/images/game/platform_monitor.png": "92cc7a7a4254c79ed8b33a767d566f2e",
"assets/assets/images/game/platform_monitor_broken.png": "1d5195115088a1883d24f84d30716bed",
"assets/assets/images/game/platform_phone_center.png": "375a61d0499f7a5c8ddca46df4213f96",
"assets/assets/images/game/platform_phone_left.png": "bb6056ec57b503a2603ac3145360374f",
"assets/assets/images/game/platform_phone_right.png": "ee58def6341e5a356f324e5680fc9812",
"assets/assets/images/game/platform_terminal.png": "06cff2e8da2b0ac9c4081cb4218793ee",
"assets/assets/images/game/platform_trampoline_down.png": "f9a4142c96d3b3dc4155efa6c1edc472",
"assets/assets/images/game/platform_trampoline_up.png": "96f86693b1400d5efe27ecdd0fc6a072",
"assets/assets/images/game/rocket_1.png": "80a5671b6374cdbc2b964fa0abe3481b",
"assets/assets/images/game/rocket_2.png": "2b1af0a5c20bb92da6d20a0e9a4068ea",
"assets/assets/images/game/rocket_3.png": "16c6b3ccb17974fc46490a78aae8216f",
"assets/assets/images/game/rocket_4.png": "a29fa8f35885b1e29d6b8b2b2cd844c5",
"assets/assets/images/game/sparky_center.png": "28288fa8ed548fa856dd6c6697064f61",
"assets/assets/images/game/sparky_hat_center.png": "d794c93a2ca38a73281dc30957f32f68",
"assets/assets/images/game/sparky_hat_left.png": "7c4dfdd7ef146e77883a5bb9178e6458",
"assets/assets/images/game/sparky_hat_right.png": "7ddbcd71f58f7d31a4dffc157eb02220",
"assets/assets/images/game/sparky_left.png": "74efd1018eb4b5793bc770d824518549",
"assets/assets/images/game/background/01_Background_Squiggles.png": "b9f3b135ad511b813dd659a9032a871b",
"assets/assets/images/game/background/02_Background_Orbs.png": "2e5e868777faffa0645d232221a45459",
"assets/assets/images/game/background/03_Background_Block_Shapes.png": "a7ac5a232a9623369a92224813a17306",
"assets/assets/images/game/background/04_Background_Big_Stars.png": "5e085155446f84bfa7eae243866736d1",
"assets/assets/images/game/background/05_Background_Small_Stars.png": "bfe98e3458033cd378297414e7711042",
"assets/assets/images/game/background/06_Background_Solid.png": "8deff2b1f4fa31b289f78e265f385902",
"assets/assets/images/game/sparky_right.png": "95b6cf90a722053feb6d25597016660a",
"assets/assets/images/game/dash_logo_transparent.png": "3e3a6dcedfa8a494e5460ffea288995f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/AssetManifest.json": "c437c79fd0bb9247eace29546c5bd089",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/NOTICES": "9628b9715efecce07ef35d84d276b376",
"404.html": "0a27a4163254fc8fce870c8cc3a3f94f",
"icons/apple-icon-180.png": "8295d2a74ef24628730e337428fbf0b4",
"icons/favicon-196.png": "0566b9a213a07b5aff27baa70e2b96d6",
"icons/favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/manifest-icon-192.maskable.png": "3613245749b925bf847a43df39cdc997",
"icons/manifest-icon-512.maskable.png": "ef0e3ffb17bed2cf67e1d9e9f96501d3",
"icons/mstile-icon-128.png": "a597ac18cd3fd72ac4ee749f6f41ac6b",
"icons/mstile-icon-270.png": "68f1e0aa1e12743d640e13a9c8b7e433",
"icons/mstile-icon-558-270.png": "a9faad43ea5ec80a7283a58425321b71",
"icons/mstile-icon-558.png": "c5c21dc327940a4216d632f907d6e004",
"index.html": "df0c15aa0d4cdb0861a9c6f77544535b",
"/": "df0c15aa0d4cdb0861a9c6f77544535b",
"manifest.json": "762b261371645a9a36b6d189e07d9b9e",
"splashes/apple-splash-640-1136.jpg": "5b00ab9676ce403c384c4ea81dd9edac",
"splashes/apple-splash-750-1334.jpg": "6261dc5679830aebe65cc64155233c71",
"splashes/apple-splash-828-1792.jpg": "4bef9632beacebc2b8a2445befab7449",
"splashes/apple-splash-1125-2436.jpg": "e8dc8ef2c23faa015de90d6a6dd1346e",
"splashes/apple-splash-1170-2532.jpg": "14e14fa2a303ea2b2c7f340fde241f28",
"splashes/apple-splash-1179-2556.jpg": "8deb3e37fdae8ab8d7a5fd33f310356a",
"splashes/apple-splash-1242-2208.jpg": "9ee4c904be57026048b87b5c7e4e875f",
"splashes/apple-splash-1242-2688.jpg": "d8c806f432b0e16941b50a1807516545",
"splashes/apple-splash-1284-2778.jpg": "e054e9b6b097b31de78f419b09af7914",
"splashes/apple-splash-1290-2796.jpg": "991f879948b8b22592ddaf5f54d2c1f0",
"splashes/apple-splash-1536-2048.jpg": "bea6962054855acd26754a514e3e456a",
"splashes/apple-splash-1620-2160.jpg": "a6aa106c888da14398dec4709b5ed68b",
"splashes/apple-splash-1668-2224.jpg": "ffeb5932a8b6b92f40cfccb3522b4881",
"splashes/apple-splash-1668-2388.jpg": "1ce6d82ed4d7ae80642d59023a1d19e6",
"splashes/apple-splash-2048-2732.jpg": "93a490c4b89939995706b49c1171990f",
"screenshots/screenshot1.png": "21ce4e8111d06c559a15df32d01e055f"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
"assets/AssetManifest.json",
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

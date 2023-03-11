'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "8685364ec67050bf37ad21485388f99a",
".git/config": "5ed4b84a4c59e298ff7e36d431bdfc01",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "2361b06987bd0896d077ec202b9a027d",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "98abe8adbeb755490b372332e9182456",
".git/logs/refs/heads/master": "2c5da500623e8f3e709106b8534bb05f",
".git/logs/refs/remotes/origin/master": "b2b7346d0a3277356cf46dc420e51a6a",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/0a/d0daeea6725d6024b1dd65b045e857cf8c9ee6": "20dd6672d572e0cc5c4fc971dc206b62",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/76e558efd2022b04c58b780406f748529eb4f2": "33ba533eed671cc5011f68bf2e0fc8eb",
".git/objects/20/bff075fe144df1b3a2843a13060ec91f3a0b97": "1f3efd4e2953ab352838c76e2c7a0f8b",
".git/objects/2e/34c210a706cfedaa6799a05a441aa8edb84f95": "2341eb37755317cd155bff816403a7ed",
".git/objects/2f/50f88a4209be14c30756ae3672dd6d98c1e8d6": "263fa6bb983f3d0e9cceac0552e9bc1a",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/8dd1e17a553c9df7dc05d7744f1e5c0de4efc3": "6c10f0fff3728eeeed57cb496b17e7a1",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/a7c691ebc7f0366e5f904b5b24c40b5b8cfed8": "99afc2a755fd50eb88b2dc36229e2b2a",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/59/119505d3d7b10db844bfcf17efee5cb6c2ee9a": "b48af70c37f42e0543832263006f43de",
".git/objects/5d/161fd41d697968e1ace3f1488fa2eea3a52816": "c7be704f44e8adb74c068a15958cd8cc",
".git/objects/68/b4ba2cf4ecec597d025ce436aee92feb74a844": "7765b4130229cd2461c4dc2bfb86cce8",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/22d57c9eba53319731c8e84a6a694eb7ad4d01": "e2ab495f735292d42170fb82a2867f2c",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/f5ef87c750b6ecde4451427de6f8fccf33e065": "2757b97ae4fdbc2c8bc78f3d713340e8",
".git/objects/77/7f96ab5fa8326576629865e5b5b708d523812b": "593cce2d44ad006d57ee343d41457081",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/624ff58e2a29a786f174bd77504745080b8b66": "2a77bd6d51cf4068da2242bd4bfb108d",
".git/objects/9c/ab7a8b2157f457a1ee85824e5e2e5a9bf8ade5": "b67bb31094f51385b553dd8cf325981c",
".git/objects/9f/34a8cdd116c67e53e873570ad4a396a68e74e0": "be0817a10fcaea3ec037641b1bb0c26f",
".git/objects/a0/c1ea822e833a69fcdb0034491fa4ac1111d808": "5369c1bd34051b167592a1603ac7cb21",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a5/caa57091061561b8f88b82389690bb6fd6b79e": "bdd8414467401ff6730de3f6cc12e73a",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/cc6393159a5fd47edc4587b9ba3c3c76b9a04f": "e63815b73c63ac74fc41b8fbf69d444f",
".git/objects/bf/863c86a2c8d005eff3af51882b4f9170d0e361": "56545ad0426868a3ee776c93249b684f",
".git/objects/c0/ffa183d31ad94374ae8619e7fa1af4155de94e": "15a011fcd101fbb672a67b5298ad1535",
".git/objects/c5/5d9b61808eb79d2adde011f251bf3b7adba78c": "24d909409ee7ad2c2d21ffe3c42e1429",
".git/objects/d0/4ab76a502bdc9374724059651201bad260f894": "6bc9e61d41e2a18a7d6b7fc9d483f28e",
".git/objects/d6/81f135d3dbf3b3126f189720fbbfcee4bb21a2": "f59505737263cebc43bbe34e77d5d4a4",
".git/objects/e0/e6239eecd82aa485881e0d6c784821e773869e": "dcc647e22e41968bbd778c427996ab6b",
".git/objects/e2/e326f6a2e316576329078c36a2b1ae310944c1": "c8e84a4bf2eb678ff1fe6c4a0f898d66",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e7/67601aeec8900dcbd67eba33d0e3b896707d77": "af86e50ad94ec84cb8812fabaa6d0620",
".git/objects/e9/a72d92276990b9967522833cecf388609ff2db": "bd5a448aa916a68361a5c2b2eb6998e0",
".git/objects/eb/18e67d08fc8605054bfbf1202e9c12fba8c8d2": "661657c758dcdbaff1385c365db30233",
".git/objects/f3/71d2aacb0fd3f2e5861f2bbdf8e9c28da0cb62": "3dc33070d80814a1477aa3a3804f72e1",
".git/objects/f9/71e0ffcc6c3b763de01317d897d07e32d253f1": "8467eb9cbcd3877b076c619a983b5a80",
".git/refs/heads/master": "8f935a58102435340b531a684904724e",
".git/refs/remotes/origin/master": "8f935a58102435340b531a684904724e",
"assets/AssetManifest.json": "56ba248bb2cff498ced30f4ee079f3a8",
"assets/assets/8.Outro.mp3": "7f017c003a1ca17938beabcf368193b9",
"assets/assets/Cumae.mp3": "20262e3487410e016492ee0e99ec7195",
"assets/assets/De%2520tunnels%2520van%2520Baia.mp3": "a62c6b45dea76b0901f0c710d8062991",
"assets/assets/De%2520verzonken%2520stad.mp3": "b96a57508611fef5723c96701367b8cf",
"assets/assets/Inleiding%2520+%2520Villa%2520Dell%25E2%2580%2599Ambulatio.mp3": "4f9db37a6b5b46302e7995cbf4bbc18f",
"assets/assets/Pozzuoli.mp3": "c2b313ee5e84643a0857f0d5b158c875",
"assets/assets/Teatre%2520Ninfeo.mp3": "923ae473b3ba2f5b36d458c8fce02fd9",
"assets/assets/Tempel%2520van%2520Mercurius.mp3": "742fd304ea49be90afa2854b1d00a4a7",
"assets/assets/Tracks.txt": "eef9437dd4a1f698ad8105cfcae7e994",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "416e92e080a78d5273c70b837044a821",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"Favicon.png": "eefd96d1ce9cfbb24626ebef9726d260",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "2388462a84a0fcc5b5f6ec5ba521ad22",
"icons/Icon-512.png": "f98cca7960e873b3b094003c2d95f37c",
"icons/Icon-maskable-192.png": "2388462a84a0fcc5b5f6ec5ba521ad22",
"icons/Icon-maskable-512.png": "f98cca7960e873b3b094003c2d95f37c",
"index.html": "4ce827054a9f90b91db838fcfaf24712",
"/": "4ce827054a9f90b91db838fcfaf24712",
"main.dart.js": "184ed0548bbea892bfe3beca442d5c5a",
"manifest.json": "40c57958698b4f4fe70c3bef0bcb2874",
"version.json": "77fa36911cb2b2c80a8ed98aced84647"
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

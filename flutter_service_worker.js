'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "bef96a35cba200370beaa23446831c8a",
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
".git/index": "72bd9ba42d9a89d57c8408c54a223941",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "bd2f1db4da55a688cf7cbf53694822c2",
".git/logs/refs/heads/master": "516837a2b3c95bc622268baadb9c857c",
".git/logs/refs/remotes/origin/master": "4ec9225ff90adf651a76aaf9f35ed5a1",
".git/objects/03/eaddffb9c0e55fb7b5f9b378d9134d8d75dd37": "87850ce0a3dd72f458581004b58ac0d6",
".git/objects/04/87678cba5a9238d8efb59e0c9c2b1378da58fd": "23dee197bf6e1f229cf55fbcaad09391",
".git/objects/06/0b54fc4075aa1e28e554e56d3e6c5bfd27f5d3": "4e2690b93f6b8ad147f2184a580c1ad4",
".git/objects/06/72b0185e31645929820004ee65f3bb04d094a8": "7def99e2b5a60769a72f4f8a6c98174e",
".git/objects/0a/d0daeea6725d6024b1dd65b045e857cf8c9ee6": "20dd6672d572e0cc5c4fc971dc206b62",
".git/objects/0e/0276500d0eea43e1ca7e7d4b08a32473ab2bbf": "e526c603945699dc042d464b0c11f5ff",
".git/objects/11/a389cf8c5ca387b8c8e22280407f20aaf6b8c9": "f87b97532b8c8a7d71ad4c5c8ed13483",
".git/objects/11/d483eae5fc7589427b7d9740589cfb9f1bce57": "7aff813197da7bfbbf120e8c516057fb",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/16/76e558efd2022b04c58b780406f748529eb4f2": "33ba533eed671cc5011f68bf2e0fc8eb",
".git/objects/1b/1c86b5cfcbb3828b682874ed19455113b69468": "aba1f461cfb3029c766dd107d2bdaf4c",
".git/objects/20/bff075fe144df1b3a2843a13060ec91f3a0b97": "1f3efd4e2953ab352838c76e2c7a0f8b",
".git/objects/27/192207348d8ee0bf8e7f6c0fec468b55ddf2aa": "169d86872f5fce2587e408f0572f86f5",
".git/objects/27/b513019db96194e98cd0f65acab00c1788bbcd": "234472b3fc24d5805b778cc2afef73d9",
".git/objects/2e/34c210a706cfedaa6799a05a441aa8edb84f95": "2341eb37755317cd155bff816403a7ed",
".git/objects/2f/305b9e17abc1b6da6be6a1d888c47a84a61584": "733d3c584e91aaf9f2d3109e6b1f53ca",
".git/objects/2f/50f88a4209be14c30756ae3672dd6d98c1e8d6": "263fa6bb983f3d0e9cceac0552e9bc1a",
".git/objects/33/c594e39ddf53e63d024e50046ead8857ea5abb": "71d803c47d8881f5903f27ff41879731",
".git/objects/35/dd5935f461e15996d5c3f0b88018c1067a52a6": "0827a841ce00f97e3b302aff137011c3",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/39/3a9599274f2b11475f1c14affdfbd9f02a8f68": "55f56fb5fdaa111acaf5c62f80cfd3ad",
".git/objects/39/8dd1e17a553c9df7dc05d7744f1e5c0de4efc3": "6c10f0fff3728eeeed57cb496b17e7a1",
".git/objects/39/c8463431ebd20edfa24e369617804aa009421d": "7683b9f9f2c5a54c117696b924fe1834",
".git/objects/3b/d4507e7e1b3a849d89dad88a5a8c0fd28baed6": "1b668d1f776a820a067305971c35c804",
".git/objects/3b/e8599423db531bafb775ad78d63e4a1131e4c7": "9768fa94b9c8794a7d963b1877791383",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/47/a7c691ebc7f0366e5f904b5b24c40b5b8cfed8": "99afc2a755fd50eb88b2dc36229e2b2a",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/4f/d0c4881127b6968602319219626c57a967dfa2": "f8e250f4d77084bd6c6fb4148e4fdb52",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/55/ab9fd6b2dc279601412dc327da937f201a2b43": "1fb89f0e075feeee7b1c53bc4d89d737",
".git/objects/56/cbfee99845b2e5688af6fb016083b03319ce89": "9bfcbe976f68786343444a3dde051ac4",
".git/objects/59/119505d3d7b10db844bfcf17efee5cb6c2ee9a": "b48af70c37f42e0543832263006f43de",
".git/objects/5d/161fd41d697968e1ace3f1488fa2eea3a52816": "c7be704f44e8adb74c068a15958cd8cc",
".git/objects/61/e630e945f72ab769c17518cc258d3f092d575e": "2cf87de30a8ce4b63f285aa7fb34cff4",
".git/objects/66/4e4012803d28b814ae86223bccc80b75c04f61": "097ed72f6270ca79c19d35381b2e00be",
".git/objects/68/b4ba2cf4ecec597d025ce436aee92feb74a844": "7765b4130229cd2461c4dc2bfb86cce8",
".git/objects/69/d3eeb1c76e699cafb104e4ac309ff81d60dd7f": "a07e9aee4cfcdc9ec3a5b8f123d10ce2",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/71/22d57c9eba53319731c8e84a6a694eb7ad4d01": "e2ab495f735292d42170fb82a2867f2c",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/74/f5ef87c750b6ecde4451427de6f8fccf33e065": "2757b97ae4fdbc2c8bc78f3d713340e8",
".git/objects/77/7f96ab5fa8326576629865e5b5b708d523812b": "593cce2d44ad006d57ee343d41457081",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7b/77add9fe4f633f1c5e6366c9fb2f07d2bfb264": "3d4f0a7616b7db04919ca8ff22b8a476",
".git/objects/8b/070ddb6aed79e12ea54ec2a1d2e169898cd881": "d02f1e3f8f1ca1193c78eb25509a7c5a",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/90/624ff58e2a29a786f174bd77504745080b8b66": "2a77bd6d51cf4068da2242bd4bfb108d",
".git/objects/95/7c3c89ae3ecbf33a18eb278da3cb9f2f085e0c": "9151cab8397d91bab853d6bfcce0fd5b",
".git/objects/9b/d82f2d6d1275308fc49165480c84449115265b": "1225b8eaaaab3012713ba3d7ab04e591",
".git/objects/9c/ab7a8b2157f457a1ee85824e5e2e5a9bf8ade5": "b67bb31094f51385b553dd8cf325981c",
".git/objects/9d/e4b540bd40bfd1feced9538d6467fba727da07": "6c3777d3de3e08a1e29e54492957c4f9",
".git/objects/9f/34a8cdd116c67e53e873570ad4a396a68e74e0": "be0817a10fcaea3ec037641b1bb0c26f",
".git/objects/a0/05c5bd1cc93b276f6079267ad11f36d425f3de": "882a72e0fbf3d42be73348bb450d3e2b",
".git/objects/a0/c1ea822e833a69fcdb0034491fa4ac1111d808": "5369c1bd34051b167592a1603ac7cb21",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/18b311248aca019bf1eb973f7fa60acbe60dcc": "0b5009a3e9afe019d4084c87faa4b03d",
".git/objects/a5/caa57091061561b8f88b82389690bb6fd6b79e": "bdd8414467401ff6730de3f6cc12e73a",
".git/objects/a6/e2a962b7ec78dc2515b57cda3bb11e8b6c9e7c": "f66e6f6e0db2013afaa2bfc73be784c9",
".git/objects/a7/38011281d772d59782d5d4f1a28c1dde8eb854": "f007cc72f3e327b94bfdb240c0786700",
".git/objects/a8/ef1d9ff678df3244e56cabc89a41876236ef1d": "b8b5a254665d4673e7d1611ec840f926",
".git/objects/ab/0e98497a51ead7821d1da35a24968ff314e50f": "557c35fe3928eb2af403d1b3926bb9ba",
".git/objects/ac/cc6393159a5fd47edc4587b9ba3c3c76b9a04f": "e63815b73c63ac74fc41b8fbf69d444f",
".git/objects/b5/8738b0460130481fa01ad15730a2b3f5077f35": "cbe60bc29dc55513008a1995f5ae1465",
".git/objects/bf/863c86a2c8d005eff3af51882b4f9170d0e361": "56545ad0426868a3ee776c93249b684f",
".git/objects/c0/ffa183d31ad94374ae8619e7fa1af4155de94e": "15a011fcd101fbb672a67b5298ad1535",
".git/objects/c1/6a450cfdd99051fdcade482af69a780395d7fe": "705d93b12016f44c482e60755958d344",
".git/objects/c5/5d9b61808eb79d2adde011f251bf3b7adba78c": "24d909409ee7ad2c2d21ffe3c42e1429",
".git/objects/c6/8fa9eacaa665fdf2fe163d956c98c8139b40bb": "741ca679852f00f3a7ff787c93c62769",
".git/objects/cd/3eab541a12a409a158c6d3b0c3d9c946723733": "62878437d2b646741a496dc1b1d47d52",
".git/objects/cf/bcd19c0dc7a366d776de206efda6eca3717ad5": "24a208fe34c54624d6ebcc933fff4692",
".git/objects/d0/4ab76a502bdc9374724059651201bad260f894": "6bc9e61d41e2a18a7d6b7fc9d483f28e",
".git/objects/d1/fba08d6a8afa0537e4b2a392c9c305b9e708b8": "b492b3358c7c3cfe9c84e5b065f8d5cd",
".git/objects/d2/adbf3a2abeb49d29144c442855fe190626d730": "1deb7a59bf3d128c25845bd15b969610",
".git/objects/d6/81f135d3dbf3b3126f189720fbbfcee4bb21a2": "f59505737263cebc43bbe34e77d5d4a4",
".git/objects/d6/f7c8487a9b65926c9211a62e8fbd6e412cc4b4": "59a3927a06810171a1f765de458eedf0",
".git/objects/d7/fa6042791f1fc2bf63d8b2b49f10ee905d9112": "318bb415c45fa0064b73b6fc934b8c64",
".git/objects/de/c6369925666638c50c7c57478d0350588bfb5f": "4d282a9509f16632cf569f702bccc714",
".git/objects/e0/e6239eecd82aa485881e0d6c784821e773869e": "dcc647e22e41968bbd778c427996ab6b",
".git/objects/e2/e326f6a2e316576329078c36a2b1ae310944c1": "c8e84a4bf2eb678ff1fe6c4a0f898d66",
".git/objects/e3/3c417969fe2351a03948b9f2ca2b677cb183e1": "864e0390c63516cd88787b2ad724e7e5",
".git/objects/e5/6020becbff6bb5dc6d72d62dec140918948bb9": "f8f6be0bd54c88fdff4f79e8a93d0ced",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e5/a611660e592fac11cc12e054eed39762742fe1": "4dc1c96ab2900b477890c928418ed04d",
".git/objects/e7/67601aeec8900dcbd67eba33d0e3b896707d77": "af86e50ad94ec84cb8812fabaa6d0620",
".git/objects/e9/a72d92276990b9967522833cecf388609ff2db": "bd5a448aa916a68361a5c2b2eb6998e0",
".git/objects/eb/18e67d08fc8605054bfbf1202e9c12fba8c8d2": "661657c758dcdbaff1385c365db30233",
".git/objects/eb/fae01ee063a2fbced659fb36ca7d31af6477c7": "54c131fa601d2509f050ab88a08ca0a2",
".git/objects/f3/71d2aacb0fd3f2e5861f2bbdf8e9c28da0cb62": "3dc33070d80814a1477aa3a3804f72e1",
".git/objects/f3/bd8cb02df522e3f18f24fd88f44208d01676ba": "3bb4163b9533566160042a75916d57a2",
".git/objects/f9/04e020e57ac1c893350ae646df8ab9f5da131d": "49795d6e08b1a58332dbedba7cc015c6",
".git/objects/f9/71e0ffcc6c3b763de01317d897d07e32d253f1": "8467eb9cbcd3877b076c619a983b5a80",
".git/objects/fa/f2a9ec19e83f356df35c761c01646141892f56": "d78f6bd8395a6b4cc46320a0c9b74d2c",
".git/refs/heads/master": "f3257a85f84541e1e8bce28439ea42b0",
".git/refs/remotes/origin/master": "f3257a85f84541e1e8bce28439ea42b0",
"assets/AssetManifest.json": "0f00881e31862dbf440a46a4c5adbd93",
"assets/assets/8.Outro.mp3": "7f017c003a1ca17938beabcf368193b9",
"assets/assets/Catacomben%2520San%2520Genaro.mp3": "f1ac810f4d190aa4202c997eb4dd4fba",
"assets/assets/Cumae.mp3": "41dc457875149ae4d1f113ba3df29f01",
"assets/assets/De%2520eerste%2520tempel%2520van%2520Hera.mp3": "da6b01b9e00fa91a1327df2767b7a47b",
"assets/assets/De%2520grafmonumenten.mp3": "e3b239121bf42444d5bbdb4f9357d8d2",
"assets/assets/De%2520route.mp3": "2b419625150636d9df0b84fc2d25e94e",
"assets/assets/De%2520tunnels%2520van%2520Baia.mp3": "27df6064c84bdf79100c2a15560eecba",
"assets/assets/De%2520verzonken%2520stad.mp3": "21628b03b5441976ae2e0846de0fee62",
"assets/assets/Decumanus%25202.mp3": "b86f0e2623938b3a5bd1495ee619805e",
"assets/assets/Decumanus.mp3": "ebc879c452fbdeaf16476c23137825a8",
"assets/assets/Dom%2520van%2520Napoli.mp3": "38fffe743e526e9df3d62ceda94221b6",
"assets/assets/Galleria%2520Umberto%2520I.mp3": "fd772c17aae7b1b672a36d18b9ce3902",
"assets/assets/Geschiedenis%2520van%2520Paestum.mp3": "7c01c9f874c4f527706b9e08c0a4cea3",
"assets/assets/Gesu%2520Nuovo.mp3": "af7835feaef6812bfc824301f41f61af",
"assets/assets/Inleiding%2520+%2520Villa%2520Dell%25E2%2580%2599Ambulatio.mp3": "04c883f45dac5c8f3f061e617515ec9b",
"assets/assets/Introductie.mp3": "72c5c39539f2b275bdb88e926f11404a",
"assets/assets/Napoli%2520Ondergrond.mp3": "79b15ee2287255c84d58d791c64296c5",
"assets/assets/Palazzo%2520Reale.mp3": "d8990c356bd77fc9d9baf2169c06be38",
"assets/assets/Piazza%2520Bellini.mp3": "7c822032d6bc4cef9b268bff776d4610",
"assets/assets/Piscina%2520Mirabilis.mp3": "03ff75599494af757ee3b7b62e657e49",
"assets/assets/Pozzuoli.mp3": "a0602acec4e5595ee95a926d4d015f05",
"assets/assets/Quartieri%2520Spagnoli%2520en%2520rol%2520camorra.mp3": "0b7d2008be66da124c43ec25485ce2f6",
"assets/assets/San%2520Lorenzo.mp3": "eb2271850e2fa94142ca559d74974611",
"assets/assets/Santa%2520Chiara.mp3": "b6a4e253288af06fb899355afbd9f6a2",
"assets/assets/Teatre%2520Ninfeo.mp3": "9dfa18f2db7e059e6494f0d4d0c1bc3b",
"assets/assets/Tempel%2520van%2520Athena.mp3": "79976bd1adf5287aeabf081ca9b6f2e7",
"assets/assets/Tempel%2520van%2520Mercurius.mp3": "53c1b0ac181cd9456f31e73979d5ea87",
"assets/assets/Tracks.txt": "3551d64cc7405c14ec21fcb397e2e1b4",
"assets/assets/Tweede%2520Complex.mp3": "2697df8c63738b863a81af37f9184d38",
"assets/assets/Tweede%2520tempel%2520van%2520Hera.mp3": "34d6716bc7f309e69646549fb6be9a69",
"assets/assets/Via%2520San%2520Gregorio%2520Armeno.mp3": "30807ed16f9a938a4bb93750f13fb409",
"assets/assets/Villa%2520Arianna.mp3": "e89b4a906df050400c3e49f227cca1f0",
"assets/assets/Villa%2520San%2520Marco.mp3": "4c28eba5cca88fb9623d82e5fddf964f",
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
"index.html": "216f0fc3b0af16de933a7ed6e585250a",
"/": "216f0fc3b0af16de933a7ed6e585250a",
"main.dart.js": "47a9eddc08bda4c04220834299037ec2",
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

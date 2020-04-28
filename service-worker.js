/**
 * Welcome to your Workbox-powered service worker!
 *
 * You'll need to register this file in your web app and you should
 * disable HTTP caching for this file too.
 * See https://goo.gl/nhQhGp
 *
 * The rest of the code is auto-generated. Please don't update this file
 * directly; instead, make changes to your Workbox build configuration
 * and re-run your build process.
 * See https://goo.gl/2aRDsh
 */

importScripts("https://storage.googleapis.com/workbox-cdn/releases/4.3.1/workbox-sw.js");

self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});

/**
 * The workboxSW.precacheAndRoute() method efficiently caches and responds to
 * requests for URLs in the manifest.
 * See https://goo.gl/S9QRab
 */
self.__precacheManifest = [
  {
    "url": "404.html",
    "revision": "22a16add046df7c55ac872ff86327b89"
  },
  {
    "url": "assets/css/0.styles.b35229f0.css",
    "revision": "435f80d19e42e059e4a49373a39080f6"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.127c029c.js",
    "revision": "b34cecb264af49d60aa79594051934ed"
  },
  {
    "url": "assets/js/11.39c92908.js",
    "revision": "bf7926afa92d469dc9c0e9333019e25f"
  },
  {
    "url": "assets/js/12.246197cc.js",
    "revision": "1c33bab5f8498e85e6a66e99b550c77a"
  },
  {
    "url": "assets/js/13.eafb894a.js",
    "revision": "aa6a1930642caea85e4cc86198b269a1"
  },
  {
    "url": "assets/js/14.0623f34f.js",
    "revision": "718186dfdfaad08277172bb233f10c62"
  },
  {
    "url": "assets/js/15.33032fde.js",
    "revision": "d3614b8d1b36eaa576e0e908673524d9"
  },
  {
    "url": "assets/js/16.2ae57bf5.js",
    "revision": "b30e38bab2df0d070682df95a3035007"
  },
  {
    "url": "assets/js/17.ab807dc6.js",
    "revision": "17daff616d542a5f61ee21923459c81c"
  },
  {
    "url": "assets/js/18.21c4a783.js",
    "revision": "0024615babaf28756353ceb746d5bbb7"
  },
  {
    "url": "assets/js/19.af10e759.js",
    "revision": "22e09775779d020bdbb20693f14ecc8e"
  },
  {
    "url": "assets/js/20.00db9ba3.js",
    "revision": "91738d95f20f0e8f6482bed26c6e6fd9"
  },
  {
    "url": "assets/js/21.198a2033.js",
    "revision": "0a5fb9dc79a66947ed72fb43f9c2d527"
  },
  {
    "url": "assets/js/22.9d483da9.js",
    "revision": "2a67c9a86decbd564401104e9aa85d8a"
  },
  {
    "url": "assets/js/23.49bcbb3f.js",
    "revision": "e68bf01c462d228b4a67124f72ec17d6"
  },
  {
    "url": "assets/js/24.c527aff3.js",
    "revision": "07027582a808c87449ff1de1eb83c3e1"
  },
  {
    "url": "assets/js/25.291dff0c.js",
    "revision": "3c81a01dd284c21b56d466ac82d0d8c8"
  },
  {
    "url": "assets/js/26.6ae0364c.js",
    "revision": "76a3cc530c38402399b673c99adca6a0"
  },
  {
    "url": "assets/js/27.8a6e944e.js",
    "revision": "1be0d6fc0432a7b55de046c4928ee8a0"
  },
  {
    "url": "assets/js/28.11206590.js",
    "revision": "67a26417571a66a7de2eb76c68bbb157"
  },
  {
    "url": "assets/js/29.312b6c72.js",
    "revision": "3f4673e116e9077c17540a02a6634868"
  },
  {
    "url": "assets/js/3.b5743774.js",
    "revision": "46c4ee7438534fd1be9a3417ce0c9713"
  },
  {
    "url": "assets/js/30.f098641b.js",
    "revision": "3763e99881e172f7e9b9c0479bf0aa60"
  },
  {
    "url": "assets/js/4.7d38fd43.js",
    "revision": "a1e282d8a6dd8282d2ed841ffc43ef30"
  },
  {
    "url": "assets/js/5.a9f95618.js",
    "revision": "6037c33f7a7cc47c3e1dc811ed3c813c"
  },
  {
    "url": "assets/js/6.0d2c636c.js",
    "revision": "6ba64703cebd846804810caa970e8b50"
  },
  {
    "url": "assets/js/7.53c339ea.js",
    "revision": "96684965052e84ef43e38e2d4de24d73"
  },
  {
    "url": "assets/js/8.19208d6a.js",
    "revision": "45cb2272779ef9de343d3131859c1ce7"
  },
  {
    "url": "assets/js/9.44d2254c.js",
    "revision": "787f5db72e27d5e1d4b83954eca3d6ba"
  },
  {
    "url": "assets/js/app.33e36983.js",
    "revision": "21b38fe442a36e58565c2ac07fcd9e41"
  },
  {
    "url": "assets/js/vendors~notification.1bb266b7.js",
    "revision": "a6de0fb847f92e8ac271e160649cb0e4"
  },
  {
    "url": "ethereum-metamask-chrome.png",
    "revision": "79226bac078ce93a58b74aff1a8a6aa3"
  },
  {
    "url": "faq/index.html",
    "revision": "995740b9519a8d38ee3fc63cc42ad563"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a0196dfa8c9ee344f7201c652b3ea5e8"
  },
  {
    "url": "guide/assets.html",
    "revision": "54094663fe8382d959f408c3a9eefc3e"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "3ee84d6d829e83299899e7970511bb9a"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "59eff65a348ada4d9978524aa1774ce5"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "451c973f9ae33aec483c225c6d9ab57d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7297736517dcddc7294231a635dcf91f"
  },
  {
    "url": "guide/deploy.html",
    "revision": "5f84be4851fcafe7fb9eb56e35334f13"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "0f954e0cb5c3ade4b846d53c0dc7225a"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "cc6e6f8e5a56b19af33669071fd49949"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "f949501bb40489a94b6888bebedd73ec"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ceeb4a5622434a281e90f70f53df4684"
  },
  {
    "url": "guide/index.html",
    "revision": "e680209b369f1f8fe690991cc81c424f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "0bc5276eb66455bc67fad9e7e69bf5ff"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "d225ad2602af4e1ba44c57dfd40ef4de"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "c80695408b9eb2d84ca6df0c8f1681c9"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1de4088b14f21f9419520660c01b2227"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "aeda757a80386d147dfe07765e8270cd"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "17adc2f3737cb8be9bc555dbacc94e4c"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "904afa5a3d5d4aaa59b8f71e57fb0cad"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  }
].concat(self.__precacheManifest || []);
workbox.precaching.precacheAndRoute(self.__precacheManifest, {});
addEventListener('message', event => {
  const replyPort = event.ports[0]
  const message = event.data
  if (replyPort && message && message.type === 'skip-waiting') {
    event.waitUntil(
      self.skipWaiting().then(
        () => replyPort.postMessage({ error: null }),
        error => replyPort.postMessage({ error })
      )
    )
  }
})

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
    "revision": "5821ed058b00711d2c68c7fc1a731a63"
  },
  {
    "url": "assets/css/0.styles.61a9f1de.css",
    "revision": "127d866d457004deb543e4e646fd1648"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.31eb8799.js",
    "revision": "e83db4c61619b3d8b134067b65caa1aa"
  },
  {
    "url": "assets/js/11.d1137ec7.js",
    "revision": "8995bb9edc31860391bc3727c487d13e"
  },
  {
    "url": "assets/js/12.ae2008df.js",
    "revision": "9704f1a2fd0ee0b3be1d297a3b95410a"
  },
  {
    "url": "assets/js/13.71c35727.js",
    "revision": "d44cf15daef5807e8b685591b0f3963f"
  },
  {
    "url": "assets/js/14.e441fa82.js",
    "revision": "a58a728ae781f801227e08eb78a01bd0"
  },
  {
    "url": "assets/js/15.ab3e63f5.js",
    "revision": "08f338fdd131bff9e3effabe9089ce9c"
  },
  {
    "url": "assets/js/16.1e7d0c52.js",
    "revision": "da951b7d3ef91b0c76ee8352c315717a"
  },
  {
    "url": "assets/js/17.1ace2421.js",
    "revision": "5bfd26982fe39482bebabe1a742e1c88"
  },
  {
    "url": "assets/js/18.980d5d67.js",
    "revision": "39efb596e7550c7c5e389e9ff24e6eff"
  },
  {
    "url": "assets/js/19.173251f5.js",
    "revision": "834f5a8fddd4f7f72985fc041b258b62"
  },
  {
    "url": "assets/js/20.b03d41bf.js",
    "revision": "ccf0a52ef145a48b4936d38f9bb81855"
  },
  {
    "url": "assets/js/21.0096cf69.js",
    "revision": "ce3e1a41045d61423b52651c44d5f16e"
  },
  {
    "url": "assets/js/22.8ee729a8.js",
    "revision": "3dcc594b60906d75f11195c85bebc4b3"
  },
  {
    "url": "assets/js/23.415c06bd.js",
    "revision": "617e42c0bf6575b8ced19ce890b748a9"
  },
  {
    "url": "assets/js/24.56f5ec1a.js",
    "revision": "2d1981c14c6f6a8613fcdb8ac0e4f73d"
  },
  {
    "url": "assets/js/25.03ab471b.js",
    "revision": "c535978a7bb5610f4808285c9cebbd00"
  },
  {
    "url": "assets/js/26.055e6e7c.js",
    "revision": "851aecfb551f5a76a04cec388a4f7ae1"
  },
  {
    "url": "assets/js/27.58016777.js",
    "revision": "a97b25d4bb4c52a0a7da6dce16321e8a"
  },
  {
    "url": "assets/js/28.17f97396.js",
    "revision": "133032109cec493a6116258359385bbc"
  },
  {
    "url": "assets/js/29.c6e719ed.js",
    "revision": "3a2b6bf6483a77bbf17ad0ae14de8cc6"
  },
  {
    "url": "assets/js/3.ef2fe70b.js",
    "revision": "37a6a8572560895a6f877e28657b904e"
  },
  {
    "url": "assets/js/30.783ba694.js",
    "revision": "32f9e89816ef2d3de46faf61ff0fde4b"
  },
  {
    "url": "assets/js/31.ad6ac76a.js",
    "revision": "b9b95da67abaf9b97f60136ac7aa934c"
  },
  {
    "url": "assets/js/4.7677e895.js",
    "revision": "b95604128839685b66db2c095128c06f"
  },
  {
    "url": "assets/js/5.d4eb0b47.js",
    "revision": "5da854c5992d858712d1bb1ca7a70c8f"
  },
  {
    "url": "assets/js/6.9e784e7c.js",
    "revision": "2fbcb27b8df5ad8ea687bfacb34cfea7"
  },
  {
    "url": "assets/js/7.1c45f8ca.js",
    "revision": "4eea80b035fce30f525f2d5d1acb09b8"
  },
  {
    "url": "assets/js/8.bd9d2aed.js",
    "revision": "93e7c34f90cac35064dbf1ed358f1666"
  },
  {
    "url": "assets/js/9.6774e0d3.js",
    "revision": "2d212cbde08aaea92f3f83f958960eef"
  },
  {
    "url": "assets/js/app.f12c185b.js",
    "revision": "ad67d13920ca7bcd20b2746eac33e1cd"
  },
  {
    "url": "assets/js/vendors~notification.98447839.js",
    "revision": "a05efde42d5f02fe13dfada85a780b47"
  },
  {
    "url": "ethereum-metamask-chrome.png",
    "revision": "79226bac078ce93a58b74aff1a8a6aa3"
  },
  {
    "url": "faq/index.html",
    "revision": "c9c7160d909260e2c1dc736de564f43f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "113ae347739d7ee2896a5ff04c4c7517"
  },
  {
    "url": "guide/assets.html",
    "revision": "49795ad58d7d0963fa0c3f850b09a0cb"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "da0e7d5ac1e76a0754f8c01db85659a5"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "0c745dc403ef4ea26895630fb1c8099e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "324a81bc65023ffd26df15de56c660c2"
  },
  {
    "url": "guide/deploy.html",
    "revision": "4ff2681c56e4768043d2dc6854f3eff6"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "f44feee0dad058e0ed861dfd629849c7"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "4a53b5018f96ef494b1d5d03a0d2029d"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "8c063e2da8b6d45df9907a9225d76bae"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3227a6b0aa440729984534aefdf38fcd"
  },
  {
    "url": "guide/index.html",
    "revision": "e472ab6abcb9719815b0f3bc3117421a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "64646a4af3f5b922146eb8402c5b3040"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "e31421a53a03046610530ce48d55e548"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3dc100dc1fe65d3826d8bac7c2c1307c"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "333a10649f895f45a885f1ae2a0bc964"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "2a910055e75c944b4d41179722b50817"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "81adb0e9debafa56f4cc0a9e6627ae3a"
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
    "url": "index.html",
    "revision": "b0d068adfa5725cc6d33a63e552c238a"
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

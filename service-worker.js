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
    "revision": "8161eb24ec14cf5ddc898118dc5c5b31"
  },
  {
    "url": "assets/css/0.styles.6048c0de.css",
    "revision": "a6e1d2a2fd33bd6d6dcbc77601aefb45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b97e1d0b.js",
    "revision": "c2348b79f9fe45fb6200e2f24bb2f984"
  },
  {
    "url": "assets/js/11.a09af400.js",
    "revision": "8659da6713adaac7f37507cb88a9d4d6"
  },
  {
    "url": "assets/js/12.720cd971.js",
    "revision": "124179d2e5191766ae4e22b9cf152528"
  },
  {
    "url": "assets/js/13.e54e42dd.js",
    "revision": "672d9adeb3cb4369f26f0a0d31800bc9"
  },
  {
    "url": "assets/js/14.d24bab44.js",
    "revision": "473754ddbe046a4b551875baa01a628d"
  },
  {
    "url": "assets/js/15.252932b0.js",
    "revision": "8924040080fa7c2f61fb68dd8497b5f0"
  },
  {
    "url": "assets/js/16.aff84a08.js",
    "revision": "29733c89575165bafc6fdbd9772c05a2"
  },
  {
    "url": "assets/js/17.3c7c1496.js",
    "revision": "4ed36f1136eb4d078dde3d36e885bfeb"
  },
  {
    "url": "assets/js/18.752854d6.js",
    "revision": "99d91b6b85371cfb4eb9325af7581206"
  },
  {
    "url": "assets/js/19.83fc8c03.js",
    "revision": "edc1d914c4176cb50e8f7fe8296bd175"
  },
  {
    "url": "assets/js/20.eb6de7f6.js",
    "revision": "c50983f710e8f2b87abf052e8f586716"
  },
  {
    "url": "assets/js/21.560b089f.js",
    "revision": "fabe82d5a349331baca139a6d4bf6c84"
  },
  {
    "url": "assets/js/22.3925a6bb.js",
    "revision": "99ba0310d4ebd8ba91715b214eebbfaa"
  },
  {
    "url": "assets/js/23.415c06bd.js",
    "revision": "617e42c0bf6575b8ced19ce890b748a9"
  },
  {
    "url": "assets/js/24.89a8837e.js",
    "revision": "46c0e9cbe950523bb11b5002454b8937"
  },
  {
    "url": "assets/js/25.03ab471b.js",
    "revision": "c535978a7bb5610f4808285c9cebbd00"
  },
  {
    "url": "assets/js/26.a4004f68.js",
    "revision": "3aa5ba85619a4a6ad6ab48a10eb45230"
  },
  {
    "url": "assets/js/27.ae424dd7.js",
    "revision": "bb18d6e5f6fe5d75721d5b64a9d02944"
  },
  {
    "url": "assets/js/28.7db91792.js",
    "revision": "acda3e370a640e7e108adc752cc537aa"
  },
  {
    "url": "assets/js/29.5d1df0fa.js",
    "revision": "49dad29d3676619a10dc234e6ff58e36"
  },
  {
    "url": "assets/js/3.ef2fe70b.js",
    "revision": "37a6a8572560895a6f877e28657b904e"
  },
  {
    "url": "assets/js/30.73779c3e.js",
    "revision": "8e1aa844b8f70bf36253491364dabec1"
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
    "url": "assets/js/8.69792c60.js",
    "revision": "66beb4800b40aeaec391873453d22259"
  },
  {
    "url": "assets/js/9.6774e0d3.js",
    "revision": "2d212cbde08aaea92f3f83f958960eef"
  },
  {
    "url": "assets/js/app.02f25774.js",
    "revision": "041a8e24e404b1ecbefb5cdd272e169c"
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
    "revision": "b7d6202806f82c92dc308a4e2922ffa2"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "c7caa82fe6f56cca1cf2766adb8108e1"
  },
  {
    "url": "guide/assets.html",
    "revision": "7844b547a40d5672c9a177e2efdb3f33"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "889d25a0da4c20c5401456f5c3ee2c32"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "e9eb9f3d4255706bc193cee0a74d560f"
  },
  {
    "url": "guide/deploy.html",
    "revision": "a148ecf13ae0182f259f53bda605a3e6"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "f13c5e4d87b1881a90e59da778dfcbc5"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "097d3d917223d341bad22f717cf1d1c2"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "6259c610a11235db84468726c2f95c66"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f3d00905d43e27c95c35d4c6071cc8b1"
  },
  {
    "url": "guide/index.html",
    "revision": "d37253eba67978187ae889bd443924fa"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "67def2b6da507543c20aca3ee25e1256"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "9bbd2856af8a5082ba8c40b87c081613"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "4d8de97c07a9829ab34175317c6c2208"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "f453297069916feea36a2ea271c47802"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a44699ca21d692b19a7c48677bbdcb7e"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "ba273007ae1e9b7454864077b67c4005"
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
    "revision": "ebe95d10163639b473e2df7a939ad837"
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

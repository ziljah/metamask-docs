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
    "revision": "c9262edeb8fc614339c7b8f87e6156f7"
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
    "url": "assets/js/22.baf1d5e7.js",
    "revision": "8dd0706de24d905baab5df4ff669f38b"
  },
  {
    "url": "assets/js/23.66b2e8d1.js",
    "revision": "8c0eac809115ad8f730a955d1390cf15"
  },
  {
    "url": "assets/js/24.a1e22831.js",
    "revision": "c8ff1d83cf42ad304682b0f59226b173"
  },
  {
    "url": "assets/js/25.6ad6d2c9.js",
    "revision": "b0fa3aa749ef179ac02a1f62e0e2eee6"
  },
  {
    "url": "assets/js/26.ee398d5e.js",
    "revision": "732df7da6771224878de1306caecddfe"
  },
  {
    "url": "assets/js/27.a6033854.js",
    "revision": "2f521ac89eecb08eea8121dbab23e30c"
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
    "url": "assets/js/app.4ac35573.js",
    "revision": "7270aca7f2b5aeb73d769f999b9f99a6"
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
    "revision": "64d4e67464830445f97f319c5a0a8937"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "12b986d9267fa18f00eb9ad50badd285"
  },
  {
    "url": "guide/assets.html",
    "revision": "9cef49844ebe4bd4c9e4e82162783e36"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "75193e07c21f3e295632c1ada6cb8eee"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "d0fbc17fa2ffab6ee6b146ad181a88f8"
  },
  {
    "url": "guide/deploy.html",
    "revision": "9a00f178747d229831b1f03532b4ed52"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "fb517c3f8582dfbb955661a9b2b9cabf"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "1ef8187d9052849b1b28aee3cffdc534"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "b542ae51a5c334d30c6683ec3f395840"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0adcda1371cd516fd400718bf6932b0f"
  },
  {
    "url": "guide/index.html",
    "revision": "35d79eba59b3763feb5dd990c4e606a2"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "7601cf6947757cb7b6a8f8ddd0ba5b36"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "04d18d5670b1c1dc5ad56111b682d3b5"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "7bc576c2441122808340d4df787bf0df"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7691f81c7d5aeb954cea06d35a7373da"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d84ad37f9dacc6fe7842c720fa647a93"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "799102a80d53e5b2ee034f44b94dcd45"
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
    "revision": "2919e8ed97dd27ea14fb3a1f92526ac7"
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

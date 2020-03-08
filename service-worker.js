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
    "revision": "244d41a673ffc873aec47738434c55a7"
  },
  {
    "url": "assets/css/0.styles.36815bcd.css",
    "revision": "856050a4235d535d967105f769fd6a22"
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
    "url": "assets/js/16.7fed620f.js",
    "revision": "696bd9f57dcf3d2aac9c1798a759ed7e"
  },
  {
    "url": "assets/js/17.770421df.js",
    "revision": "a64a71ce60c067b4fa00b293bfc95c9c"
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
    "url": "assets/js/24.a1e22831.js",
    "revision": "c8ff1d83cf42ad304682b0f59226b173"
  },
  {
    "url": "assets/js/25.6ad6d2c9.js",
    "revision": "b0fa3aa749ef179ac02a1f62e0e2eee6"
  },
  {
    "url": "assets/js/26.055e6e7c.js",
    "revision": "851aecfb551f5a76a04cec388a4f7ae1"
  },
  {
    "url": "assets/js/27.7a4b0bd0.js",
    "revision": "6168287ec4e9ff3b14ac0c4b68a62435"
  },
  {
    "url": "assets/js/28.17f97396.js",
    "revision": "133032109cec493a6116258359385bbc"
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
    "url": "assets/js/app.c0015350.js",
    "revision": "db5eaf4e89de56e90e17f665158e1a80"
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
    "revision": "e2cc903d4667ee91bfd6a2ffa136be51"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "4dd39e9b6e7ae4b0f418fdf2a41f19fb"
  },
  {
    "url": "guide/assets.html",
    "revision": "b5b1a0ad5b3d7794cbc907108e8df02c"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "950e863a9aed8715714f0725129beb8b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "fb2a7988dbd261f97056d5fdd5eb621b"
  },
  {
    "url": "guide/deploy.html",
    "revision": "ee03989b068cad36c7f5e9e9b168a836"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "38003685d3a3107fe3371ba003195789"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "eb931f809d8dc758c237b860dff98c0d"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "5ce9fa81e386e9737b0c104fc8389544"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "32b6d2863a7308ebc15b3a7ff49c7ae9"
  },
  {
    "url": "guide/index.html",
    "revision": "e858a71a286aaf02ef3e2a3b7e706ac7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "98193b852c47dc2c3ce8000a272e23d8"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "5f8cc40d7709e552603b7dfcee99973c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "047484bb666b24263b51fd1437ad1348"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "ae470694a671bd14ea47255614f0a686"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "e7bfd06b64983d4ec4be07adbe7fae38"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "3dcbb49d708de94983dd3acd56ef1caf"
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
    "revision": "30c2cd185d0f7e680c86793c28dd21b3"
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

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
    "revision": "66522799debbe2e888da0f2c96b20945"
  },
  {
    "url": "assets/css/0.styles.9127da40.css",
    "revision": "bd5a597c5e56ec08c16d7a3951a19140"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.eb2335a3.js",
    "revision": "73950a08643e872f47ce7ddc79fcb9bb"
  },
  {
    "url": "assets/js/11.ac10f926.js",
    "revision": "3ad5edddbf17810e6d29080db59d46b2"
  },
  {
    "url": "assets/js/12.feb48551.js",
    "revision": "0420f146a7bd316e26ee494705889c9c"
  },
  {
    "url": "assets/js/13.a7732aae.js",
    "revision": "c50937dbc0430136475a09e278fa140e"
  },
  {
    "url": "assets/js/14.52f9ef9d.js",
    "revision": "1a4c848af1e32adce13a493a10ddd95e"
  },
  {
    "url": "assets/js/15.f4246a33.js",
    "revision": "c7cfe43913e6b18d3bae62370a547c2a"
  },
  {
    "url": "assets/js/16.8aca4817.js",
    "revision": "bacde5f90c9cda230634041977a31c39"
  },
  {
    "url": "assets/js/17.bea7e45b.js",
    "revision": "a86c7440dc384d3961bb05ce8bd1b41c"
  },
  {
    "url": "assets/js/18.f2123445.js",
    "revision": "271c2ce0f38303d5982daebdfc0f1fc1"
  },
  {
    "url": "assets/js/19.ad1b5318.js",
    "revision": "7823fa4b2fd2a36c3ca5eafddcfb0373"
  },
  {
    "url": "assets/js/20.8409f3ad.js",
    "revision": "c62cb3bc08f6ca8802971293f4ebe6fe"
  },
  {
    "url": "assets/js/21.3bc5f5b2.js",
    "revision": "65e9c4fd499deb8e260a90ad9fa573bb"
  },
  {
    "url": "assets/js/22.fba9a4fc.js",
    "revision": "2f0475ae5733662790120864c8ad5155"
  },
  {
    "url": "assets/js/23.e7431a97.js",
    "revision": "107691102e2678ebcc40cf3c8400df76"
  },
  {
    "url": "assets/js/24.e4a665ce.js",
    "revision": "763b4236f11b621e78b12dc05971866d"
  },
  {
    "url": "assets/js/25.1a4f53ff.js",
    "revision": "09d7e015704bc317dd18ec82b772e0ff"
  },
  {
    "url": "assets/js/26.a9a68718.js",
    "revision": "06104c35a53b796e6990bd21a474d6af"
  },
  {
    "url": "assets/js/27.d04a9a5f.js",
    "revision": "77228230aa9f064d88b42c7aed9bcc5a"
  },
  {
    "url": "assets/js/28.30d5dd0f.js",
    "revision": "6af890b9cf6833c568402d0c2d39cc60"
  },
  {
    "url": "assets/js/29.18b5e64a.js",
    "revision": "c2699d90b2602b0ea1225ef80ebed09d"
  },
  {
    "url": "assets/js/3.1f75cd28.js",
    "revision": "edeb1bafbc1c550e8851332606549fc2"
  },
  {
    "url": "assets/js/30.ea6d9d7c.js",
    "revision": "d82ed28e0ddd9eb6a36c47b93f1cdd04"
  },
  {
    "url": "assets/js/31.76df6f53.js",
    "revision": "243a5f7ecf59dec6584292d8ee7b743d"
  },
  {
    "url": "assets/js/4.1ea60100.js",
    "revision": "5e24577acda9f7398c39df433dfe1041"
  },
  {
    "url": "assets/js/5.483fa7fb.js",
    "revision": "3e53f7439a86529ccefc29c7eb40ceb6"
  },
  {
    "url": "assets/js/6.4cba1be2.js",
    "revision": "0220c1c6d8a150ff04e830d3dd9cbde0"
  },
  {
    "url": "assets/js/7.068319a8.js",
    "revision": "d144fc002d40dc97b443b547b52942ac"
  },
  {
    "url": "assets/js/8.b0d35114.js",
    "revision": "965e684e885bb19bfc7c32b4767c47dd"
  },
  {
    "url": "assets/js/9.714a8e47.js",
    "revision": "52b3f07316ef172fe708ad069eac1a20"
  },
  {
    "url": "assets/js/app.23a0d319.js",
    "revision": "e33fec93d24e2b7fceb9acf5648dd50d"
  },
  {
    "url": "assets/js/vendors~notification.5502fe6b.js",
    "revision": "53169d66314b76d1f7cfb4327f17746d"
  },
  {
    "url": "ethereum-metamask-chrome.png",
    "revision": "79226bac078ce93a58b74aff1a8a6aa3"
  },
  {
    "url": "faq/index.html",
    "revision": "39265cbe82849e9bdc1fecb2031f0caa"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "5fcc25f6b99c14d20315bc47860cc998"
  },
  {
    "url": "guide/assets.html",
    "revision": "7d560478a531e0d1944a64851cf5bf3d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "0e88ff66a2dbbc0d3c20e1fa4a709283"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "b88676c12e21e383f25c4496825144f6"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "272f10136c1366cbf937d3bef0445a33"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "36a9cf515b04666de35744e7176e06cf"
  },
  {
    "url": "guide/deploy.html",
    "revision": "f7f64647c40a35a7389bb6791a03987f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5a5805f1d21cad78f7b11df8f8cab661"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "887cabae3a4cf377360227e6661637a5"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "de939304e66d9438b37af4b9f0c9c436"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a7b838016e1205282fb80778138e3c96"
  },
  {
    "url": "guide/index.html",
    "revision": "1d34ca570f770670f5b802eff3b64227"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8f903c3555942b76fda48b4e288843da"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "5b092b11c01056496a66b46307669fc9"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "ee7daa53d85a073c8a16cbadb112b5c9"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "28a608ce18e51499ffb5f3da31ab6837"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "98e90f8e8c1dd21f5c0f6d2d481aab13"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ff8edab7961b475ab50c23c820fbf6c9"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "3c9d849dc704a663f0db9ded4836178e"
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
    "revision": "7c0c423ccf376793d588357ea0586a71"
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

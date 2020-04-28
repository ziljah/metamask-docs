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
    "revision": "585df6c4b22c642e6ab6d299bcbff892"
  },
  {
    "url": "assets/css/0.styles.2266dc7b.css",
    "revision": "0d42ac6fbe6d7ff27b2c196ad7d34fac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b5b69f39.js",
    "revision": "19c6ebd841f0966949860a44a97398da"
  },
  {
    "url": "assets/js/11.d33b2baa.js",
    "revision": "0add16ef222c5062a17492e4f2fdcb45"
  },
  {
    "url": "assets/js/12.8c9db7cc.js",
    "revision": "20be22e2935cb232c01222da7e9b3826"
  },
  {
    "url": "assets/js/13.7acfcaec.js",
    "revision": "c9fd26f203533996a6a349dc87babb9e"
  },
  {
    "url": "assets/js/14.964ecae0.js",
    "revision": "b55e7343d191266615a0eec6c6e277ce"
  },
  {
    "url": "assets/js/15.e404cc9a.js",
    "revision": "9fe9bb0dc25622d38ee17449942cce8c"
  },
  {
    "url": "assets/js/16.9ebae792.js",
    "revision": "930ed34422fa36216cef38f478469703"
  },
  {
    "url": "assets/js/17.718e32fa.js",
    "revision": "6bbf079f7e3176f33e498aaff65715a8"
  },
  {
    "url": "assets/js/18.0370dd02.js",
    "revision": "c55c4158ec2bbc4795553eb9f0df1350"
  },
  {
    "url": "assets/js/19.c08115b1.js",
    "revision": "a7d2d0f92b4d4335d5ebb226f19c7161"
  },
  {
    "url": "assets/js/20.b63ec920.js",
    "revision": "edf55a49f71e755d2b884306a6c16749"
  },
  {
    "url": "assets/js/21.f6a01326.js",
    "revision": "3028885d7cd9e6f72d032b8fa586224b"
  },
  {
    "url": "assets/js/22.600a9a8e.js",
    "revision": "b29d610b13977afeb107aa3f62c4e57b"
  },
  {
    "url": "assets/js/23.984af1d2.js",
    "revision": "a5de27505b11e8c5e86c890175f3a2a2"
  },
  {
    "url": "assets/js/24.c527aff3.js",
    "revision": "07027582a808c87449ff1de1eb83c3e1"
  },
  {
    "url": "assets/js/25.c815b6f7.js",
    "revision": "bda51ac6ea732371c338dd3f803c5c46"
  },
  {
    "url": "assets/js/26.c4945654.js",
    "revision": "71541e1fae031390157f070f79c0f9c7"
  },
  {
    "url": "assets/js/27.cc91f66f.js",
    "revision": "c77ad68d6a2b1383144e81be35a8fb25"
  },
  {
    "url": "assets/js/28.d16c9a41.js",
    "revision": "808b67d836366e759ed6858b4096c01e"
  },
  {
    "url": "assets/js/29.a8839e69.js",
    "revision": "0169d147e7fe8d177cfda3f2da3e5208"
  },
  {
    "url": "assets/js/3.244b93ea.js",
    "revision": "9214fcf782f386f5459a3b1641929174"
  },
  {
    "url": "assets/js/4.22d8fae1.js",
    "revision": "f082cabe0d22a4e9fc7b1e1b1f7a292f"
  },
  {
    "url": "assets/js/5.891b9d07.js",
    "revision": "c62eb0a6db56dc6c54b8280b05e47012"
  },
  {
    "url": "assets/js/6.52b89912.js",
    "revision": "780139334fe1573f1616e18fc2fb69de"
  },
  {
    "url": "assets/js/7.267ef5a0.js",
    "revision": "f672bc1259e13ff3169d01677dd035b3"
  },
  {
    "url": "assets/js/8.6d9031fb.js",
    "revision": "1bad8c7bace93600ff68989f75f56577"
  },
  {
    "url": "assets/js/9.4fb0a7bf.js",
    "revision": "9ae389668083f09446b42bb7ffa900e2"
  },
  {
    "url": "assets/js/app.f2658956.js",
    "revision": "ef86f622876bd79d865abee91c6b6dc5"
  },
  {
    "url": "assets/js/vendors~notification.845db04c.js",
    "revision": "a255cb8d877421ce112f3e8e7b7da9cf"
  },
  {
    "url": "ethereum-metamask-chrome.png",
    "revision": "79226bac078ce93a58b74aff1a8a6aa3"
  },
  {
    "url": "faq/index.html",
    "revision": "36f6c21e2189db7c2f472944b36d16c5"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "042ea2fa282f8363d1ddf758b2b34cf2"
  },
  {
    "url": "guide/assets.html",
    "revision": "0f243ed8df9d9f67c386a1aa64a214bb"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "128007c9f75b77b8014154336f9b9246"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "66fea114570c9d4f274375a7e73b84f6"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "cc275d7ec8afef180bb6391e2ea31b8d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "e542276821a93d0c13bb564754667c9c"
  },
  {
    "url": "guide/deploy.html",
    "revision": "e80d3b0bbc9c8d17560d37d4c604f29f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9e5bd26af8f4c970ab42762ba463d8bc"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "10a0daf05edd2bc4a53a91da0afc2a6c"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "c41904f3a4e39a9a7ad95c8f338d0c19"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ef18e1ca775a364735e9d4c0e30c9cfd"
  },
  {
    "url": "guide/index.html",
    "revision": "19cd6f939847670b8981582eb887ae93"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "cfbc476780bd23b1df5a158c99d526a9"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "d2522623eb93a54e8464f86dff9cbbf3"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a02632194a7198b0d465127fc4b388c8"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "7032cb0dd588e99d49190aa569ac62b0"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "853b38fb6f8e74d3ac21dbea36be723b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "fd72c69dda73df70ba0fb2fee40f9f27"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "26426ced1490fe73640ec1e3d1aca0d9"
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

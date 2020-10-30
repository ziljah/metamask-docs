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
    "revision": "e4028506950c95180d29ef2bb68370ad"
  },
  {
    "url": "assets/css/0.styles.8dcb5106.css",
    "revision": "10de1213d2442d0add4f5413c0d7213e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ea876645.js",
    "revision": "4897f6656320e84c1fde0cd25139856e"
  },
  {
    "url": "assets/js/11.c8c32f07.js",
    "revision": "7a218ebf3e877987f7991b2a6907e7fc"
  },
  {
    "url": "assets/js/12.a595b31e.js",
    "revision": "1f90975a77a58f9ef9970211df7bf800"
  },
  {
    "url": "assets/js/13.7f205b2f.js",
    "revision": "eb4dc9b82698788420594ea40e9e59d8"
  },
  {
    "url": "assets/js/14.91a2972a.js",
    "revision": "063c8f1c1533a50154cdeec68829528e"
  },
  {
    "url": "assets/js/15.70c9efb8.js",
    "revision": "fdf26b7c0eeaa72ef7bc858c8cfc2af9"
  },
  {
    "url": "assets/js/16.1e8c9245.js",
    "revision": "4c18b8dda396befe9c982a387b59dc36"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.f52d73e6.js",
    "revision": "d6d7d99e346cf9185bcd1729b3bf1ddc"
  },
  {
    "url": "assets/js/19.6d44b058.js",
    "revision": "513483b62ae907786d465a8c7b5e7dbd"
  },
  {
    "url": "assets/js/20.1234e0ab.js",
    "revision": "01376a1c1b41425847910cfd332b8cd8"
  },
  {
    "url": "assets/js/21.e2000a7e.js",
    "revision": "494cdde99aee4f4fa0173df4b8e4beb7"
  },
  {
    "url": "assets/js/22.1f42f207.js",
    "revision": "03a237f301d87d68b1a8e906f9c1953e"
  },
  {
    "url": "assets/js/23.f12ea3b8.js",
    "revision": "98c7fbdfd8e23c9091902d01cae03f17"
  },
  {
    "url": "assets/js/24.6ad5806e.js",
    "revision": "f5a7067e0c676dea22c62d3869dc3072"
  },
  {
    "url": "assets/js/25.85e43ec5.js",
    "revision": "185a9336f3da1656ae27f1bf2ef86a5c"
  },
  {
    "url": "assets/js/26.047cd97c.js",
    "revision": "f9811124a8761279c895dbc5a40d9be8"
  },
  {
    "url": "assets/js/27.c5e59ec4.js",
    "revision": "e15241c584c0e0a89fec4dfea7f7bc81"
  },
  {
    "url": "assets/js/28.890e5a3b.js",
    "revision": "ee4aa487c698946b650aa928f8ded686"
  },
  {
    "url": "assets/js/29.996852cd.js",
    "revision": "08a513604b22b3312f68f101d7cbc5e5"
  },
  {
    "url": "assets/js/30.b5a94a65.js",
    "revision": "0cb1500848b066f21f8012e1c30a99e7"
  },
  {
    "url": "assets/js/31.2e1e12cc.js",
    "revision": "a7c6ce489404e95f85b4c2b6cf43bf4d"
  },
  {
    "url": "assets/js/32.53667f5f.js",
    "revision": "889f5da3fac04323034839df4b03841c"
  },
  {
    "url": "assets/js/4.2530261f.js",
    "revision": "aee2ba4b11891081e4a2196a90d432e9"
  },
  {
    "url": "assets/js/5.dc3dae0a.js",
    "revision": "761d8df16cb9e2b39cfc5cfcb1473ee5"
  },
  {
    "url": "assets/js/6.d745268e.js",
    "revision": "5a4943dd355341c17e107eed75ffe58e"
  },
  {
    "url": "assets/js/7.1147ee0f.js",
    "revision": "3a872c4bb09ab114453a74ebccbf9919"
  },
  {
    "url": "assets/js/8.97ed842b.js",
    "revision": "bb968352bc4c8900d55bbcba97ef6265"
  },
  {
    "url": "assets/js/9.520a54c4.js",
    "revision": "d32cfadee44033783136b91510fd2dc6"
  },
  {
    "url": "assets/js/app.feda6314.js",
    "revision": "91590ab4b930722873ec63249b2e1183"
  },
  {
    "url": "assets/js/vendors~docsearch.13c21034.js",
    "revision": "99fca4d6c890c7ef2fac9b69a2f31a85"
  },
  {
    "url": "assets/js/vendors~notification.858aa34f.js",
    "revision": "22962219ef3d017a36b7c767df0e9d61"
  },
  {
    "url": "faq/index.html",
    "revision": "3518d86ca603a6ca164e2fa7f97195ba"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d74948a5014df51b759ddd24eb761ad7"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b480d02f960a459d6f3229e176132b26"
  },
  {
    "url": "guide/contributors.html",
    "revision": "25ebe3ce75019fc002de70d517b259ac"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "90e4f7d1d616bb6399c727dad036280a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ae7863fe6be99b04c6bb6699a83b8820"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5c9038bd1e869d8689b5e00aa6406d65"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1e5de2a6228593d3feb2fa123756bafe"
  },
  {
    "url": "guide/index.html",
    "revision": "01392d81efc6542b4d901a1d4774f05d"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "bc3907f15e39616f3ea64a8941b24139"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "d5b13510f7519b7f544067c2172104a9"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "1b3c4f3dd96c64316fd4398b9fae8ae4"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "9a58c0f6b6a19b045258b095effc56af"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0a50f7b7219fe3039812793b661e2e73"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "35797e73ca4088141ac0451ca7afd7a4"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "60b901b45fc03aa70ef7fca00888acc6"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "daafa5d5b40426b57b897b676a221645"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "5a971e658fefea0ab89cf111ce9c5eb7"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d731828af6faacbc4e401870b9666282"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8150f51ac62a5901906d6c1e858472c5"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "ae67a5368bf2d12c383062308c86cdcf"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
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

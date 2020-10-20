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
    "revision": "9ce8d92a8396d91caa2e1f5f2b4c37cd"
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
    "url": "assets/js/14.f3eb3544.js",
    "revision": "622278e584991e6057d2a651e4f8c61b"
  },
  {
    "url": "assets/js/15.70c9efb8.js",
    "revision": "fdf26b7c0eeaa72ef7bc858c8cfc2af9"
  },
  {
    "url": "assets/js/16.a4944b58.js",
    "revision": "7ad7349c15af01813330fd990e13c9de"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.3f419662.js",
    "revision": "e9a9b3d538e7c3562f4a1321413ca562"
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
    "url": "assets/js/21.a6963f8c.js",
    "revision": "cc1fec0d4b6d31f069a28c2b48be84a0"
  },
  {
    "url": "assets/js/22.d899a9b5.js",
    "revision": "ed0efa10756aeb10c70dacae38827fc6"
  },
  {
    "url": "assets/js/23.455c3ec6.js",
    "revision": "23b5e8593c53c89e2a7dc880bc1f5c5b"
  },
  {
    "url": "assets/js/24.51062c30.js",
    "revision": "09d7b502db448e35fb5dad9718788776"
  },
  {
    "url": "assets/js/25.6e71559a.js",
    "revision": "d5d0bf0f185d98e1f1ebe17073721ca2"
  },
  {
    "url": "assets/js/26.966ea95b.js",
    "revision": "0fa6c4a53d358df9ac406fd40da6a280"
  },
  {
    "url": "assets/js/27.a3b94e48.js",
    "revision": "abd2bee45c04aae588c3dabc433080a3"
  },
  {
    "url": "assets/js/28.1016e349.js",
    "revision": "567f02101ea02203b80aa89e6eda93fe"
  },
  {
    "url": "assets/js/29.0e6b3841.js",
    "revision": "bf87e9cf6aad0f3732029fa2f6bd0082"
  },
  {
    "url": "assets/js/30.c0e391d0.js",
    "revision": "9bf10cda83a587cc80885e76f960ac1b"
  },
  {
    "url": "assets/js/31.2a802cf6.js",
    "revision": "c64b492f99722216f9f001564ae89d86"
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
    "url": "assets/js/6.6c14fbb1.js",
    "revision": "173a5d925c17c8c295f5d06344b2bb7e"
  },
  {
    "url": "assets/js/7.bade1c40.js",
    "revision": "e150cec61c4c679486ceb96390e45dc4"
  },
  {
    "url": "assets/js/8.97ed842b.js",
    "revision": "bb968352bc4c8900d55bbcba97ef6265"
  },
  {
    "url": "assets/js/9.777af077.js",
    "revision": "981e5612149945a769f79ddb86401ea4"
  },
  {
    "url": "assets/js/app.9adfebbb.js",
    "revision": "6dc596c413f2bbeb45b05a08eb6821a8"
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
    "revision": "dee633b5844c6170184d3d5881daf09c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "91ba68a3aa4875cc636cbec6afb39e6b"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ad2102f7daacf46e2ee2f850bdc00b85"
  },
  {
    "url": "guide/contributors.html",
    "revision": "2b0565c500eebc4f832882ad875feafa"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "84a65f832cb20f036c2b7e2f5e9ceba2"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "f0228ed37d3daa92d4347755e8091686"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "169133b858a01d410722fe568ee3b3d2"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "30a28d8bbb09146093e3f3ea2a9b3205"
  },
  {
    "url": "guide/index.html",
    "revision": "b45a118bff396250f484cceae8bfcfb9"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b3a5228ee1f22998840c2af9b0f17993"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "3a332fb5fe9ad64661ff010347eceb8d"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "59d71577b5d6704b02b23bf337212ba1"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "028a4e9a1c6e49912e37f4d323d0d79b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "8c6b70bece1f0e9b81bb116ed849f374"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f3c373c1984495b591996535e252ce3f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "70e4f8c8e4a7329d534284510c3f8822"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "ed0e0a1aa5c3537cfcb59c6f7d076d90"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "008b717b63c96b8b0a7c8190c157d5d9"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "261d80e0358c29dafbaee4424f3c2457"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "66e3a0bfa7faed2e14684bf19a142aa7"
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

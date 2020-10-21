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
    "revision": "563943f2f082b00af1befa0fedeae683"
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
    "url": "assets/js/13.1845e232.js",
    "revision": "44f25df4833532d7df664280f60fcd60"
  },
  {
    "url": "assets/js/14.d8af8327.js",
    "revision": "c8451300c3671fffe9f4f4ef22724d1b"
  },
  {
    "url": "assets/js/15.126d4f3f.js",
    "revision": "bd43caf8f64e9fa54a3e809ffa71c2e2"
  },
  {
    "url": "assets/js/16.79f1994e.js",
    "revision": "11f3dfd4e33fe08ba9352c7f7005b004"
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
    "url": "assets/js/21.708b0566.js",
    "revision": "9677d3eaf351436ed2869a55222166f1"
  },
  {
    "url": "assets/js/22.ded762c6.js",
    "revision": "e8885230f47b92a3b77934f3f6982003"
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
    "url": "assets/js/28.aa56dbc3.js",
    "revision": "a7b400e4127103b2a2fe25acd9425c45"
  },
  {
    "url": "assets/js/29.1652d771.js",
    "revision": "db5f171790b4a4b67d73ccf8fb2a15f3"
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
    "url": "assets/js/app.e26e4360.js",
    "revision": "e79ebe7d37cf53e2a8d127b34053e2ee"
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
    "revision": "067e458b04d583ccacfa398d28914745"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b4d451c902c90558d19d409acaa4e261"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "f7f4a8c73825711504d8d27a8b10364e"
  },
  {
    "url": "guide/contributors.html",
    "revision": "03c9ff1f074ce7b996dbe036aa5a62dd"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "de9b3e48ec3242ca44e96b336576c6b0"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7dcf4d2e7c3429be82e63014252e367e"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "fa958494ca0f7141a58ca6925b4a341c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ff73429146567ba130845e597d11614e"
  },
  {
    "url": "guide/index.html",
    "revision": "7a0ba6377ceec45c19ca0c7029eb4fa9"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e6b1aaf5f26c8b4a78b8c8b147fa5fc1"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7f712b576016f8a5b5670dfaf111b1db"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "2b57b7f0b7fb98086905a43faf2e410a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "42060903a54968df94562640238265d6"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "daa82f130e0ce745fe0d8a8a4db7e855"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "6fe59f9c177eb996de7ee57b87900636"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "4ac9a2ad7e5b8438480f743ef218a2d8"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "6b1fb56e8abf33a43a4fa678f979f8ee"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ee60d44954ae8e76cdc7989edfe8ef68"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "dd81c7e7a6435da4cf190c7be20d3fdd"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "b3e832c2f87e24a8a6b6dbe6f65b0fd7"
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

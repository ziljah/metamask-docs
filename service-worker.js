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
    "revision": "d1ed653b722516757dfeb9981058ba2d"
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
    "url": "assets/js/21.e80c4b26.js",
    "revision": "c51f211bbc825e6d3691efe0887052f6"
  },
  {
    "url": "assets/js/22.56fe24ce.js",
    "revision": "30b4e2aee3ecd619f8f935d9c779fcf6"
  },
  {
    "url": "assets/js/23.455c3ec6.js",
    "revision": "23b5e8593c53c89e2a7dc880bc1f5c5b"
  },
  {
    "url": "assets/js/24.8327bc74.js",
    "revision": "4a9b0298027937ebcf61331f50cfbc5b"
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
    "url": "assets/js/27.db5bcb9d.js",
    "revision": "3f29a7594ab8db692102e6f267949878"
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
    "url": "assets/js/30.a051bbee.js",
    "revision": "435809cfc7af53f8c342dcfc74f7dcb5"
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
    "url": "assets/js/app.528330b2.js",
    "revision": "dbc8ef1b4a56aec3f593b718ae41bd77"
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
    "revision": "80d6103b31ba8547d98b106cb2209d21"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b121cb9d68bea8bc7063e5cba264f063"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "322466ec8b4e4c495c392a5848d812dc"
  },
  {
    "url": "guide/contributors.html",
    "revision": "a15c2d79b9bfeeab0aa5e846f50a1729"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "39bafab6e8d12bd2baf3280ebf015cee"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a7a4f5132bde5c9e034cd6a0b87cf402"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "762ceb0ec8b80f50d9f7a0515a6aa02e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3c5a30c23b7cef1a778932f08803aa1e"
  },
  {
    "url": "guide/index.html",
    "revision": "b9f15888e3d004310b9cb06f5398444e"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "9c374d501b25bd299b32b6468cff7b3f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "e2d7af0ce5ecf050b5a1a5281c2ccb33"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "03b4f7f69a8c3664bc2f80eaa84eb0c9"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "d9c22961995c696ffa1efbeeb6035ce4"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "db35446e1bc20680ab57b9957dc7b971"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "fa8089311e279458414eeab447e40a00"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "82cd0de956616334ec8ff789c704b1d5"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "17e577f9e07e7ede94c257da4834cbb4"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "aa1d84f9fd92600b425a074759820568"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "f7affe43976b1c142adb3569db80ba44"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "950a9aea83c372f02852a07fb21930fa"
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

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
    "revision": "8aad58018f7b8cb7f67f09c6189c0d82"
  },
  {
    "url": "assets/css/0.styles.43ab016c.css",
    "revision": "0092aa4cabdf35c66d5fdc293cd2dd12"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.855ad548.js",
    "revision": "ad08c4f500a167770eb3fb3958011674"
  },
  {
    "url": "assets/js/11.71b90564.js",
    "revision": "7f5c8bc345186ccaa2108f486e33d398"
  },
  {
    "url": "assets/js/12.c08b1d2b.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.7dfbcedc.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.7d0b589b.js",
    "revision": "5bc06405d10d434ccd0397fb5d185481"
  },
  {
    "url": "assets/js/15.5bb390dc.js",
    "revision": "c46d38ba85894b2f33fa7afcda4d8f60"
  },
  {
    "url": "assets/js/16.646d68b5.js",
    "revision": "a0f00de59f8b33c8c287227090c2f74b"
  },
  {
    "url": "assets/js/17.7d93e4ad.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.3c1fd809.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.e8af2507.js",
    "revision": "9cbff5bc32514ce5f59140985fd54cc3"
  },
  {
    "url": "assets/js/20.5c8269b0.js",
    "revision": "fde97666c52a0c0c01cd51e10e80ad91"
  },
  {
    "url": "assets/js/21.d99c1b9c.js",
    "revision": "070b56b6fbef09f24cb7bac116a77d12"
  },
  {
    "url": "assets/js/22.e6edf161.js",
    "revision": "94667b900caf8dd04fa0c5c49a6666b1"
  },
  {
    "url": "assets/js/23.f279d74d.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.ec611b21.js",
    "revision": "bb57364211af4cb273a3e8d995c4e907"
  },
  {
    "url": "assets/js/25.3a7d0867.js",
    "revision": "2205d7f5567c1a5f8aed53a83c89f387"
  },
  {
    "url": "assets/js/26.58afd217.js",
    "revision": "a7340d5e921e7bde0fc68f3fff29baaf"
  },
  {
    "url": "assets/js/27.e4fd0c46.js",
    "revision": "124a5db8b3f384d372bfa267aead2cc0"
  },
  {
    "url": "assets/js/28.36d58b82.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.fd9595a5.js",
    "revision": "a353e9eb3c5e6d64d20344f2176c3c17"
  },
  {
    "url": "assets/js/30.d0c9691d.js",
    "revision": "e1ab74b48e9a27a671a4aca708b69364"
  },
  {
    "url": "assets/js/31.d4934d6f.js",
    "revision": "abe66e307d259e9eb5fb4fc00bf73c8c"
  },
  {
    "url": "assets/js/32.4eeba09e.js",
    "revision": "e8e120ffc9279c0e224083b6beda7418"
  },
  {
    "url": "assets/js/33.3566b377.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
  },
  {
    "url": "assets/js/4.45461747.js",
    "revision": "931eedf13ec5d486e74b8df0f4b46236"
  },
  {
    "url": "assets/js/5.eeaab13b.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.90cb7b75.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.f15a05a1.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.40cf1e3f.js",
    "revision": "59b2af53edf17c596dea879e43185f35"
  },
  {
    "url": "assets/js/vendors~docsearch.3591cf1d.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "assets/js/vendors~notification.8ec48a6d.js",
    "revision": "8c5292ddd31a027ce1a72eef945787f5"
  },
  {
    "url": "faq/index.html",
    "revision": "5748beff8a07c82c1f5d3163d417a368"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "3e34d501149b55ea84f369ccf75ba44b"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "3e360da3247f0ff05489f9ff5fc10815"
  },
  {
    "url": "guide/contributors.html",
    "revision": "b71a187897ea9f95ebaa91ef075e512f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8ce61ff0ba3966e4375465fcc1f39bb2"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "33c89cc13d268b983b256d8f95e117b9"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "4975dd03802a59a076dbaee929eb8ade"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6d87e1f425cca241302194ac75d7f97a"
  },
  {
    "url": "guide/index.html",
    "revision": "575b1fda8a67b5c5d83dceb581608497"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8c7d92e7f8400e84fa4a19c47e19b323"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "c39a6670dfb575f5962b51e03c21532d"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "be927abadace79300db1134671ab7a2c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0f52fd06d7fc47e1a58b47c271ce5965"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "cd68adaca1d32439d6663e897e28cdd7"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "cef8db261559e1499dd8215ed7d87b06"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3d691c801449e08c0d771c61b7e63323"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "d2a9b94e28c86fb56c1850c38aad9319"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "b7191ebc08a23a400f753d1ec8c55028"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "8fdbb05724190d5992f11345f22bb489"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "2e86213261704d01890d2e0383382246"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "4c2eedd4d1b494221385d2d36e5fbf43"
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

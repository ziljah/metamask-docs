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
    "revision": "6fa8e98f6bd806a2918ec36048c832b0"
  },
  {
    "url": "assets/css/0.styles.6baf0c5c.css",
    "revision": "9ce6d3c6ecc5a0f4282e13684999f2d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9885c248.js",
    "revision": "ad08c4f500a167770eb3fb3958011674"
  },
  {
    "url": "assets/js/11.4ac16b46.js",
    "revision": "d0ab467681a16154f4604249cdc723b1"
  },
  {
    "url": "assets/js/12.8c4c0727.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.7348b7e7.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.9d91f938.js",
    "revision": "5bc06405d10d434ccd0397fb5d185481"
  },
  {
    "url": "assets/js/15.4536993e.js",
    "revision": "c46d38ba85894b2f33fa7afcda4d8f60"
  },
  {
    "url": "assets/js/16.5c5483c5.js",
    "revision": "a0f00de59f8b33c8c287227090c2f74b"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.8e39995e.js",
    "revision": "3916ab1f0d5160d90c7be9472948d74e"
  },
  {
    "url": "assets/js/19.14fabb39.js",
    "revision": "af214bf9e936a73239f7e347fe0680a1"
  },
  {
    "url": "assets/js/20.f31d7b42.js",
    "revision": "17cf3b2e4993918e1c63fe68f06ce066"
  },
  {
    "url": "assets/js/21.fbb905a0.js",
    "revision": "070b56b6fbef09f24cb7bac116a77d12"
  },
  {
    "url": "assets/js/22.20fc3329.js",
    "revision": "94667b900caf8dd04fa0c5c49a6666b1"
  },
  {
    "url": "assets/js/23.f88fcd4f.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.31ebaf14.js",
    "revision": "bb57364211af4cb273a3e8d995c4e907"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.f3ced236.js",
    "revision": "092ef8939b9ac3c931fd8adfd134e1de"
  },
  {
    "url": "assets/js/27.8ed4b159.js",
    "revision": "124a5db8b3f384d372bfa267aead2cc0"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.902e9e5b.js",
    "revision": "a353e9eb3c5e6d64d20344f2176c3c17"
  },
  {
    "url": "assets/js/30.1d63ab4b.js",
    "revision": "b7a279b15c3a4b75b365126c57582840"
  },
  {
    "url": "assets/js/31.3b898d5d.js",
    "revision": "76310584d63389029a5758dab302c7e7"
  },
  {
    "url": "assets/js/32.20e013a9.js",
    "revision": "2d31ae1958f6a5fae4cb99e2b62eeeb3"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
  },
  {
    "url": "assets/js/4.1099f3bc.js",
    "revision": "8f3ef733572a70f81e397d547d24715d"
  },
  {
    "url": "assets/js/5.d309383e.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.a7bf056a.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.47c30305.js",
    "revision": "d05b7c14908b47828f889eba5ee33d62"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.f82e5d44.js",
    "revision": "e5bd6d5667ef82776fef5ea728e5aeec"
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
    "revision": "a42973329c620e46114c4a321a733479"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "c21388c369e40613910a24017230e078"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "30e0d692c38680ebe950ce6ca66fec6c"
  },
  {
    "url": "guide/contributors.html",
    "revision": "3c351f386ff55f2a37ad78a2ebcaf4c8"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "c3c4497a67c6f7acc8bbc20834adfcf4"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "778dd2c09cbeef55dc4522d2bd9beea5"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "65f6566e466a405c2911030fa6053579"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a243b3e29c1e4968d28c50348c04663e"
  },
  {
    "url": "guide/index.html",
    "revision": "6faff2004ff6d1c8cc115ce7b11989fa"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "4eabe53a45744d50ce0883feed5ec823"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "367c70cceff6c93a288ced855566bb0e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7dddfdd01b8cc45cfea9e6a79134561c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "ba768a291d974de5f0c7177889126f2a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "e5eb771706e336e8789563c1678cad67"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "13998b5ec631176d076c4ba45771b698"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "2f5061d6f9207e8c1ebb6757fb5a793f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "63bd4082c9e03bf209494ac91ce6c245"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "466cffd9ce21c09a25c9e86beae82a96"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ff1969393fca28ff8a89e8f21c518fa8"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "5144b110a3fda0755ad4866d9b2e9eb7"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f46da336776941f3e28229d8c72d90a2"
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

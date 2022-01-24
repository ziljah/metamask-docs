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
    "revision": "bd592f48564d5e5ecdba47ad36084288"
  },
  {
    "url": "assets/css/0.styles.d79a1fb0.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
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
    "url": "assets/js/11.2de1d8f2.js",
    "revision": "30dfba51ec06492cd3dc8c1ba6414d1d"
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
    "url": "assets/js/14.74fe7ed2.js",
    "revision": "eac8243d4a7cc7e3a9596eff0aa8cf6b"
  },
  {
    "url": "assets/js/15.5d58bde3.js",
    "revision": "7e6a50ddf76fbcdb74501ca84d3959bc"
  },
  {
    "url": "assets/js/16.ef574c2c.js",
    "revision": "06f0275bc382aa8d929d7b2fadde9ede"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.3d569f46.js",
    "revision": "09b59bd21092b85b72a96940f310b7ca"
  },
  {
    "url": "assets/js/19.ee4b1e1d.js",
    "revision": "9cbff5bc32514ce5f59140985fd54cc3"
  },
  {
    "url": "assets/js/20.a65dbef6.js",
    "revision": "c538964b90281205331efb9b575a69c5"
  },
  {
    "url": "assets/js/21.7cd19eea.js",
    "revision": "ece2938e363d7e5fcf9fe212e105bc1e"
  },
  {
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.f88fcd4f.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.41893593.js",
    "revision": "a0acc79bb8118fc61a586c713cf4a201"
  },
  {
    "url": "assets/js/25.b81124be.js",
    "revision": "2205d7f5567c1a5f8aed53a83c89f387"
  },
  {
    "url": "assets/js/26.2976bf32.js",
    "revision": "7eccf89be0314994d1db7e7c841941a5"
  },
  {
    "url": "assets/js/27.0397d747.js",
    "revision": "7f72f8a3f8b36a7fe3311fa92eb3ab26"
  },
  {
    "url": "assets/js/28.e08db3a9.js",
    "revision": "88bb8249c204588a79d55064ffc79fec"
  },
  {
    "url": "assets/js/29.a0753606.js",
    "revision": "1183cd80330bea9884fcaf2c7d128d36"
  },
  {
    "url": "assets/js/30.42a1a1e1.js",
    "revision": "b9594b59c22255d6935401b507353b12"
  },
  {
    "url": "assets/js/31.80e09e40.js",
    "revision": "ee529263e3458c20eb884cd89dfaa1aa"
  },
  {
    "url": "assets/js/32.6620dda9.js",
    "revision": "bb7a4c20b6e2aa2fe14f0df04e6806b0"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.c42e60f2.js",
    "revision": "cd0cb4b214ec1d84caa1036d4dc64f8c"
  },
  {
    "url": "assets/js/35.0a6cb011.js",
    "revision": "1b7d369f81c5eb19aaeda67d9806f171"
  },
  {
    "url": "assets/js/36.e56f989b.js",
    "revision": "0d3395475ee9b6eb0cd0173d0631b300"
  },
  {
    "url": "assets/js/37.eb19e0d7.js",
    "revision": "0eb9ead751860bd2469f9b4f9910e87f"
  },
  {
    "url": "assets/js/4.baa1ba71.js",
    "revision": "95efbe7ebc3321184214cb45cd3eca3b"
  },
  {
    "url": "assets/js/5.d309383e.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.a0d1e866.js",
    "revision": "29f718453c76590851211e3db25c8aa6"
  },
  {
    "url": "assets/js/7.50a770b2.js",
    "revision": "5604cecaa689454aa86376434b0c40c9"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.c87edbeb.js",
    "revision": "d517bd47317ad81e6ab16a0e8b3b6124"
  },
  {
    "url": "assets/js/app.161968cc.js",
    "revision": "b35cf898662aa7fd6a74ca4eaf8df5cf"
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
    "revision": "ffc26a403e9aab83e8bb93e902e4594b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "4f6f47f03e496a595075c768d7120cbc"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "054e5edf6d7a810eb5cc1994c419f1fe"
  },
  {
    "url": "guide/contributors.html",
    "revision": "f2c0a413725bf7358fe670838a1845fc"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "bfbdfaac1c21d8682c21cc91ee2ccc1c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "8bb76627f5deeb3426f9e31f4e0bdce5"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "952e6b58407cf0c46e0c3969f478ea4a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "73790c14e5962dc461239620e7f17cef"
  },
  {
    "url": "guide/index.html",
    "revision": "e2ba8b5f93e1137ae51297cb95a92432"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d98dae5fa5f68539f7961a4cb5bda6bc"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "4aeddd1d4679673d78d39e8422e8820c"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "61a66dffcf9718685ca99364c6ce3bfc"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c8d8e421f80c17b9c6f9b7cfd84bf1fd"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "8ae16903cc2e12d2396858da96e5093f"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "316387767ef1e0c118afbc44a65b287b"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ff7a5208e8d130ec0a6e562314198355"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "ad3b0ce49129cd5adf3ae3d565c646e7"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "df3740d9f704d5f304b48a960887dfcc"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "52f67ee262b8e4a74cdeffb8cea52ec0"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "4b27913d2b9d85aa071a554cc874d8a0"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "3f8574afd101cb13b0c8fe296dd5d186"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "1c680c49ed610510b6829fdfd7573c31"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "c5e6cb3fa0bb34b6872b571702be222a"
  },
  {
    "url": "guide/snaps.html",
    "revision": "873690552702fb3de6606f5f5c40a931"
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

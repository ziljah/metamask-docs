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
    "revision": "82a6dc4ff628fe2dbcc0007061392c5a"
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
    "url": "assets/js/18.729eeed4.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.1f6ffc22.js",
    "revision": "0a72c12f2695d763a4d4f99ce45b5fa1"
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
    "url": "assets/js/30.3788356b.js",
    "revision": "6b3fb311e33a88e6f865eb84a11d5957"
  },
  {
    "url": "assets/js/31.bc9a5b98.js",
    "revision": "abe66e307d259e9eb5fb4fc00bf73c8c"
  },
  {
    "url": "assets/js/32.821a0122.js",
    "revision": "e8e120ffc9279c0e224083b6beda7418"
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
    "url": "assets/js/app.c544c946.js",
    "revision": "81ca437d3974e9761fafd46f7ea68452"
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
    "revision": "ec08abe31590df86c24bb37170275d6a"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "cd0feae0d94da844c34f37436fd48a98"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "572c4a60739994056955417a36167204"
  },
  {
    "url": "guide/contributors.html",
    "revision": "7c4f3144b08f1694dcc4f7c634f36921"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "e19a93f6536cde329ffc3bfb78303d26"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7a828f1b42113188f78ee70bba9d1e09"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "51badd6eebeb326ddd115a360aaa4df4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "27356d49fde705d554958c08d2fe346a"
  },
  {
    "url": "guide/index.html",
    "revision": "ff63e758e5b650c1bb0da814db8db29f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ec29460e213b16644a7448ee9bd757dc"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "c341197456e6c1a2cb911b2d4ab5c894"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "22b979e8f48edeb39fe6bfd9ce5d8b88"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "bc507ed6d03d1b889a886acd0809527d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "c2a69deee9545580be67494f9bd2e21b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "226cd61b7b25d137fdb0fc6616d1272b"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "95500fac4f1007c99e1bfed0662eaf74"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "2e46d5ff8bc179d8962c5cabfcff6a18"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "9f679c68ab9da13a26f6afd66d802bc3"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "3ca01b45331236bdfc3c59adf855c564"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "5c2e54f8cba235a64cc23ff5c7b84e88"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "ef0e4c288e654bed7b68816d6577c92e"
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

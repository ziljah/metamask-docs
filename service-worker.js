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
    "revision": "596b5b56131d5536d333f515c1537eb1"
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
    "url": "assets/js/19.1a779be1.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.e4e8c0b4.js",
    "revision": "0a72c12f2695d763a4d4f99ce45b5fa1"
  },
  {
    "url": "assets/js/21.65a492a7.js",
    "revision": "c7d439bbdfe3cdbca11237f20137536a"
  },
  {
    "url": "assets/js/22.9eb28152.js",
    "revision": "ef4c3c1e43ef26aa822f1ad4e9f68ae7"
  },
  {
    "url": "assets/js/23.676075ed.js",
    "revision": "43bbe3e7676874555d726185318b3d8f"
  },
  {
    "url": "assets/js/24.ec611b21.js",
    "revision": "bb57364211af4cb273a3e8d995c4e907"
  },
  {
    "url": "assets/js/25.c251dfd0.js",
    "revision": "7e9824fff74a9d6d22f9b12529a008b1"
  },
  {
    "url": "assets/js/26.58afd217.js",
    "revision": "a7340d5e921e7bde0fc68f3fff29baaf"
  },
  {
    "url": "assets/js/27.698329fd.js",
    "revision": "778c637dc04ebd31c453049f88d20ddd"
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
    "url": "assets/js/30.50af4466.js",
    "revision": "7abc325b08afd6551ac23f8fd9d646a5"
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
    "url": "assets/js/app.7c41a27e.js",
    "revision": "7526cb7e99794aebe162d8aa53f845fb"
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
    "revision": "122e074c289cef2700a35d162dfbcd95"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "9b524658a1076da28559f520ffddc707"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "76dc4aac05ebeba530a19d5c0bc5d7ee"
  },
  {
    "url": "guide/contributors.html",
    "revision": "fdd5404a0145638a3c506f473e3c4e08"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "ff7ee6197ae0212740b06f50994cdebb"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "5bb1b8013ba5b3a8f140ed489049979f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "008dc1ef8fa8e782d3c61932592484b5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "aa96b7398b5d4c118407a6aefc405815"
  },
  {
    "url": "guide/index.html",
    "revision": "18b6724e0239c67d8075fa8f26f93923"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "2e29565d75ea221e9eeba2ede1091cf1"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "c4609424318d2666e2aa65659375cb72"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "e706c7cd4c529310353ae30b9642c523"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "23db8066d45f400071d67c170f7af1ee"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "175001ef0ee9d0d99bc4a5c41c9499b5"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "b8cb0240834d77f8d77fd56379db2c87"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "9fb0468bc63cdce8e27ac993aea40cb0"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "39e70e69b626c809730af7363be09da1"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "31bf84cf4fcd370699f9398fe0daeb26"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "82ee5d37f7a4838abcb84b2c677f9c23"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "6a16fd7b6f6dc8450235eb2ac303e3db"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5cd42a86fe12ad54426a7653c12f069d"
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

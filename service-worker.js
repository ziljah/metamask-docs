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
    "revision": "adc33e98f0d728c4c28f6f4d36cd716f"
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
    "url": "assets/js/14.3ca3efca.js",
    "revision": "af0ffbd2e668b5b005ef91940222783d"
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
    "url": "assets/js/18.729eeed4.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
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
    "url": "assets/js/27.3afd2f44.js",
    "revision": "5ec36f3c8cadea6fcbbbddff13d4ef02"
  },
  {
    "url": "assets/js/28.e08db3a9.js",
    "revision": "88bb8249c204588a79d55064ffc79fec"
  },
  {
    "url": "assets/js/29.5e7b968e.js",
    "revision": "f4f319c1ea11257bda049398c25a2235"
  },
  {
    "url": "assets/js/30.8bc1f253.js",
    "revision": "5a2dfe57ca4ac38ae1668c8bc64e4dae"
  },
  {
    "url": "assets/js/31.74901bf2.js",
    "revision": "c72993434fd58aa88fc8b74f33ed6e96"
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
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
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
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.a7bf056a.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.f6394062.js",
    "revision": "c5a5dfe0e3c0994634613cb797f95eb1"
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
    "revision": "0f89352acb631b0c01f9445e0d8841eb"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "29dbd9dd550723d719bface8509333af"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "a60cdcb3e6e07a81348f020ac1b4c0f3"
  },
  {
    "url": "guide/contributors.html",
    "revision": "1b802d40c89c6ab6166340717329b10c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "5efe06854007e03dffa30cf1eee6d03e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "f78e13e7f65ad46462304b19b085285e"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "d8eea39996fab47db13bbdb27d4ca76b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c83027138d4059b76c74a032cbe1242d"
  },
  {
    "url": "guide/index.html",
    "revision": "90c9aafb7dad19d36c91c8fbb5109721"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "257263f77dd177106f469d22c480d002"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "dcdfe35675b47101a90b151fe33b3b13"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "3dd00bf7b4ab120e29ada23ddc8521ec"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "064e2281eaf23863703101e6989bfb7a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a629be024ffe32d2f16eefaffa4ef06d"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "e468535d77219ba8baf5035c4bfb0e45"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "6e2821ae8c0d60e3e3ae72c26b5543f3"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "1b21f9aaa496e7d86ddc5591d027283f"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "50a80846d279a8edc8d49c96a993ed9b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "3b21c003b3506db9e438495672a51c75"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "e7c94f189707e8b10f6bc18737129095"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "cb3626113bb68415318111c4c7806087"
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

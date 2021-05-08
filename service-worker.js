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
    "revision": "4efa0b066a147f112706574eee4d503d"
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
    "url": "assets/js/25.e031bb6e.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.aa106a67.js",
    "revision": "092ef8939b9ac3c931fd8adfd134e1de"
  },
  {
    "url": "assets/js/27.d1f26815.js",
    "revision": "5ec36f3c8cadea6fcbbbddff13d4ef02"
  },
  {
    "url": "assets/js/28.f4755381.js",
    "revision": "dfb852c1541d7c1dd0f26f8754aa25ac"
  },
  {
    "url": "assets/js/29.1896b030.js",
    "revision": "cc03deef68ebcb992a425f80a7ad9a96"
  },
  {
    "url": "assets/js/30.1dcb3ce2.js",
    "revision": "6dc03aafe7304452841841107fa777b4"
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
    "url": "assets/js/app.806b9b69.js",
    "revision": "d6b773375c42841c047e07e02ea2efcc"
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
    "revision": "3df68f2cfa1cf463420cac1da3d52017"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "827007ac7a0b6fdb08af6e84311fca81"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b5cfe6a436cb35e555bf6fa562d1db93"
  },
  {
    "url": "guide/contributors.html",
    "revision": "5d963b2d9e0a4885fbe96db90583ed5e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "53915e98ca462a68b50ad275c722ca90"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a38e81e0a3ff56eaa294a6b647d2da99"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "80d033901a4a54c2cf0633dcd19fbebd"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "49475d76d9630a8a3007ad1fbf4e992a"
  },
  {
    "url": "guide/index.html",
    "revision": "9cdf1382bff7f7574efc2a2ce86ab0ac"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ff18c6b958f6b38ae4724d63f3a851c6"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "127ebced52c2f183dcc8ce3c01837635"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c0195b8e6f012c3ccd3d3113ca699fd9"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c8ad95bced329268d720f8ed80e2b053"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "e04ca1af65a051aaf718d47faa518e1f"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "ff3ed4920314608a8c9a0af891ee7de7"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "70f62b7d95583804968497bdb36dd97d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "be55105c5539791a06fe13b5c1c98262"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "68e22082ad44513ca276ada4e080ed9f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "cab6af3a1b6ddd6f7732b2d5d0ee852d"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "83992b3da9e5e2e3b35c4ac4ec8c4c80"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "9fc8bc07cf582504d715c00fc81f889c"
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

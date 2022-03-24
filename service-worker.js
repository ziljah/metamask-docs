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
    "revision": "005c20ed9b2fa111b572c338d2c25b2f"
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
    "url": "assets/js/14.dc316dbb.js",
    "revision": "377a7b56efcb576cfaf80e240b99bf7b"
  },
  {
    "url": "assets/js/15.e177e811.js",
    "revision": "0dca5439fe63c8ab3b38d4a279f66964"
  },
  {
    "url": "assets/js/16.fb5c3393.js",
    "revision": "2e3c242c888187dba88c6db4fa270cff"
  },
  {
    "url": "assets/js/17.04568593.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.d33f4300.js",
    "revision": "6cb1e2672385a37ba726a4850f6f32b2"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.aecacabb.js",
    "revision": "271ff1471381a6677f09d3bcf701cb75"
  },
  {
    "url": "assets/js/21.8e2a9427.js",
    "revision": "5a5d982c07625a337e1d89cee65c393b"
  },
  {
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.1c341684.js",
    "revision": "ad147f22e00ea54b78d23b86506a4852"
  },
  {
    "url": "assets/js/24.96057b4a.js",
    "revision": "4024d566eddeb4bb079056a5f5c352ab"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.c728cfe4.js",
    "revision": "e3516b830141ba132740a27a031adc2b"
  },
  {
    "url": "assets/js/27.f68593fe.js",
    "revision": "8a5142151240935c12d93762dec49053"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.f0b649f1.js",
    "revision": "e4715fd369328ddf2483971dde4f5e33"
  },
  {
    "url": "assets/js/30.b625f471.js",
    "revision": "15468bc01fc60d85f15387761dd3017f"
  },
  {
    "url": "assets/js/31.4746cd25.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.f83f1e48.js",
    "revision": "eede7959a7bbd197906b6377a6b22dbd"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.a4fdf002.js",
    "revision": "8e39cfcacef3e690e65c623e54c27464"
  },
  {
    "url": "assets/js/35.11b0d5bc.js",
    "revision": "d58d1e00b04020bcecd1ac6031da091f"
  },
  {
    "url": "assets/js/36.f59cf17e.js",
    "revision": "61583d1c7275eb79facaa5792b8ef8ce"
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
    "url": "assets/js/app.535eabc7.js",
    "revision": "33a562f752b526d6f67604f80ec4e957"
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
    "revision": "dd518f25c9025e70b4c2d03d70dec29e"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "720aae38950f514fd66843189f14965a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "d085bb34228430d701b49c9a4108097a"
  },
  {
    "url": "guide/contributors.html",
    "revision": "863b3646397dcaa75834c8a98026596e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "477f38dbd3a4b93a396521d724b39856"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "89d15624e526d0f922030eab809a1908"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "601122c4568a557b0908ca80119a9425"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f448cdfe9a676d5f945ed9f4615754db"
  },
  {
    "url": "guide/index.html",
    "revision": "9819c4c824f40225b3577c38610c7125"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "0e998aa090794039837ed02759963608"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "1a71ba4fdbe414d34f82b8a5178f0bdb"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "569d26a3b6718da5b13ceb9dad9f22d0"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "62dd379d1d7c89cb681329d4986c3d71"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "732c71225fa6113e07ab9c71f8f6c10b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2cdfcf1064461a5fd88300681047845b"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "74606c6dd6f69b5787446c03bfdb8ced"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "c14c0cb9c70faa201cfeb8bc92af1644"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "52bd9e501904c90cff96cbe56b0b3de8"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "9f8a28572410aa6cbbc9ea18d6d7bc01"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "9b060f3defd58e1f2a3b783fe942892f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5e201b46605775d9d13024d04fce21da"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "e20d65cf26fc9993769f3d47aa21f09d"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "7e0fee414d6be818c26a0b0f845c230e"
  },
  {
    "url": "guide/snaps.html",
    "revision": "196f8aa20c4294f58aaf6f15842fd132"
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

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
    "revision": "c82a59d6937c95c5e493ddf3f0652208"
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
    "url": "assets/js/16.dc649f71.js",
    "revision": "6f46f98759448ca7c7e558cd8e56d0aa"
  },
  {
    "url": "assets/js/17.04568593.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.bd06271d.js",
    "revision": "e1aceae390021d087069235c8cd60a13"
  },
  {
    "url": "assets/js/19.14fabb39.js",
    "revision": "af214bf9e936a73239f7e347fe0680a1"
  },
  {
    "url": "assets/js/20.106be7a1.js",
    "revision": "a5f65ad9192ec042a0db6c66b7fafab9"
  },
  {
    "url": "assets/js/21.845eda05.js",
    "revision": "686cb3c4978bb36d76dd01a8d044f635"
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
    "url": "assets/js/31.00c86cdd.js",
    "revision": "8c2d37049cc9189b2c529c95591be23d"
  },
  {
    "url": "assets/js/32.987f9eb3.js",
    "revision": "eacf9f766abe20722a21024e777da8c3"
  },
  {
    "url": "assets/js/33.a3eb0c35.js",
    "revision": "c022921ae9e2db411307c1eca59ed649"
  },
  {
    "url": "assets/js/34.4dda041f.js",
    "revision": "c17df7fa62283e26b7f92cac99b9ddde"
  },
  {
    "url": "assets/js/35.a1c6f09c.js",
    "revision": "f5f496c391b92000ad1cc2253ead3f8d"
  },
  {
    "url": "assets/js/36.df3bec52.js",
    "revision": "d8a68e2abb1f57d3002a9e91a0178bba"
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
    "url": "assets/js/app.7a1bb6f2.js",
    "revision": "00e50fd6e4ae196d01fafdb5bb2a5bdb"
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
    "revision": "60c175c88abd1f968d9ea2a9f88d8812"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "79704ff2e27fcbd4eeb8a27c88cfd116"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "c45e2ec7fc2c10c6a7257f5a678a54fa"
  },
  {
    "url": "guide/contributors.html",
    "revision": "bca7ff651edbb56dc4d5779c133b479b"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "f763e95acc4f64455f546296c40169cb"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "e1efd6bcdcbe23dbe87facd73729eab9"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "e588527d47dc62e2ac622d9f353f3f1c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9b7ba57bb53191d0b37a555e57d0700f"
  },
  {
    "url": "guide/index.html",
    "revision": "2e1dac035724b1f3845286237032b0a3"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "9345d4be3b1c7b9086c93b480e9a4347"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "d34ad82493c9a19a48d7325cfbf2f355"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "290e3c4683700ade6ac0e75d7ce7b02c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "171cf7a1ec8ffd20f5f69fb3fb855c04"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "c99278c3fbfa01aedc9f7e271fd00ab1"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "cf122ede5f51b8777ee9d217b7426827"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "71e13950a61e3e859b96e7edfea6a2c1"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8f95c735927339bc44d4b29b4ba8b1eb"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "98f9c8b4543ee8dafdf17f08313a3cd8"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "bfb1392c4b66eee924d54964cad7e8d0"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c9e8a126f0c947de00121b07713f5437"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "a3a6ddf0720a4bd7783dfb459ad57d5e"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "d2ae59cbc0e1eaf420db15b6135984f7"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "d6589f364702ba85049a915bdc0b4d07"
  },
  {
    "url": "guide/snaps.html",
    "revision": "c0ed4bb17b120ad55e4f3d01cdb3f677"
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

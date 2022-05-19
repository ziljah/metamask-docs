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
    "revision": "a5bbc0034dbac4b5c45518daf7fa29d8"
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
    "url": "assets/js/18.707dc816.js",
    "revision": "91adfb4f88c236425aca89f9df8e9ba3"
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
    "url": "assets/js/21.91e7ea8b.js",
    "revision": "d614990da924f1e47e4b8ffb09053966"
  },
  {
    "url": "assets/js/22.66905b54.js",
    "revision": "84bba4cb9ec83eb6a2a4bbedf8d9e316"
  },
  {
    "url": "assets/js/23.743792b0.js",
    "revision": "bc5e7b347a113fa5f734f23a4803e36f"
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
    "url": "assets/js/32.436bf087.js",
    "revision": "ce683c3558b3b63a8accc09582aacb4a"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.6cde43cf.js",
    "revision": "5c5c44950bf6f931106bfd3c7cff5444"
  },
  {
    "url": "assets/js/35.6b445c65.js",
    "revision": "8b5b75da972f9b16d94bd5dad33a8894"
  },
  {
    "url": "assets/js/36.630098a7.js",
    "revision": "e2d174ec5779ddb73af4c662782c4100"
  },
  {
    "url": "assets/js/37.606b7264.js",
    "revision": "62c0314bbed5bc3431ac904b7a755b92"
  },
  {
    "url": "assets/js/38.37c589f7.js",
    "revision": "24dd63c597f7153c7cd19375155d8d6c"
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
    "url": "assets/js/6.cfb38f1a.js",
    "revision": "3da70382309dcd99ad46f309bdc0b45a"
  },
  {
    "url": "assets/js/7.e06a715a.js",
    "revision": "8b239d108f078eadbaea5dc084cec7df"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.6ceff5d2.js",
    "revision": "8aea038cb275e5c7b9368e5b008ac929"
  },
  {
    "url": "assets/js/app.a550c99c.js",
    "revision": "d6385a3868a917e320a262e00d1886f4"
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
    "revision": "3dafb5fe0d2c646f75a5bb91a429acfb"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "03f2278dded42b2a41697d22ddd8281a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "8ec596ca75078111401e1683b1add3e4"
  },
  {
    "url": "guide/contributors.html",
    "revision": "2f831325886b20bb7b5535a4b454a0ae"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "e13386f983a3cdb9ab8b24486b3b87a2"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "6bc3d57b67ee3f949e4b758defce56a4"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "808b5eef322168c99d59ddaa9e023397"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8c18cdd640e3f6926325f8e26965c993"
  },
  {
    "url": "guide/index.html",
    "revision": "ca6a417a40fa2d75bf431f020f80e316"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3202ded2cbd2f99aa3125534477e9f7f"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "30e8c0037beded49513c3c22f9806511"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "6ac02e9843464a55f2b0269e81910477"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "25cee33ea9fbe9f5e1b478b48d5c4fae"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "8fb1fa3cf90632572e8da5d7de3ffc2b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "64b0d2701c6d7ce4702adae80ce4cde1"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "cbd777d5165b2e57568e7fea3fc1b95a"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "1e77cf5715997f7515a1fe73bc6e3fd3"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "17f11c14a5e68e7b243c3b0d66f6d297"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c9a9739e0158101bc255a71b311c2b87"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "9e04a8dc8f1a64bdd89122fb0a52679c"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "99729c6a4cb48cd59159f844a6cdc5a0"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "63cfeb43bd9f1e7a00962039ee1840fc"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "fd96d270375b940e24612a1a623815ef"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "054d2ae1b600a2b9684d29f613b6cafe"
  },
  {
    "url": "guide/snaps.html",
    "revision": "bac5daae1bb988fcb07c36c0eedb1c51"
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

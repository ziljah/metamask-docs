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
    "revision": "7edda60124f1254d5f36344849e22b3b"
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
    "url": "assets/js/19.ee4b1e1d.js",
    "revision": "9cbff5bc32514ce5f59140985fd54cc3"
  },
  {
    "url": "assets/js/20.98205ddc.js",
    "revision": "c46371933afc7ff08b4babc8ba37afcb"
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
    "url": "assets/js/34.6cde43cf.js",
    "revision": "5c5c44950bf6f931106bfd3c7cff5444"
  },
  {
    "url": "assets/js/35.a8a51582.js",
    "revision": "8a40cc0869582cecd2f4d4dc80c75dd8"
  },
  {
    "url": "assets/js/36.74b10946.js",
    "revision": "d65c0379cde2835afc41dc5975989000"
  },
  {
    "url": "assets/js/37.56530481.js",
    "revision": "be1568628464935e26ab18631eef56e7"
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
    "url": "assets/js/app.2331afcd.js",
    "revision": "311f584b7a6be047d3d5d7377e7bc22d"
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
    "revision": "8961bfb8bccbfc60370512f4d40b44b7"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "1867f14a7509fc6eabc2f4db37e2d515"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "adb30c2c1e3b2e3c106c596d09575dca"
  },
  {
    "url": "guide/contributors.html",
    "revision": "25a4449d6f61ee979463d0246a7c61b3"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "ba1f0425a5c7a4c638265b855be32142"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "be2946b446d103481e0776b95ad41abb"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "8c4088af4ae65bdb6868e9d2525f4fbc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1f9d8e92b2792b846936f5ec0b728fc8"
  },
  {
    "url": "guide/index.html",
    "revision": "f5c844f425c7dcb4b086a7f1ffb7f415"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "eea89e11faa3f2ef3884af49ea3708c1"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "d34bd929c1b2e8df5d9e44de562ed8da"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "3a738c5c18c25b42c770c5f9c3670afb"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "2f64e98250191316dc90fc89b21eb0b7"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "f3ddb80740ab9f34d900fb3cd58a1608"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "d16e37ae2e335d94ae6de545ecb734f9"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "de18093ee2943e2e6db343deca114b2f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "38f9d49fc50023df481c029c0af6d87a"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "c8b064dcb7dbfbb328cecad447b8300c"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "59ae36c31fc45a04a217fd3647108df9"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a11d6a15e8c3b18eeb06f3e8bfa71134"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "d17e0ee81ba875d728e16690c4c2d7d5"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "b3833c8c4e8a47e2906f76d767aeb6f2"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "4d37ee9a591cf8f677a34cd2f4f26a28"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "df4a58b8f315c85eeaabffd087b63b2d"
  },
  {
    "url": "guide/snaps.html",
    "revision": "59dd90f7a9c5b6d9771d84c4d6380e38"
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

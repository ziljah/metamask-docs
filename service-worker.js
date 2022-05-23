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
    "revision": "3818bd836a704237f533667de089d179"
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
    "url": "assets/js/16.dc649f71.js",
    "revision": "6f46f98759448ca7c7e558cd8e56d0aa"
  },
  {
    "url": "assets/js/17.04568593.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
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
    "url": "assets/js/30.42dc6a87.js",
    "revision": "e4f859b723f1d5721b2a23b01556b39d"
  },
  {
    "url": "assets/js/31.701a4fa0.js",
    "revision": "8264cf96a30434eb897157a6239cbf91"
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
    "url": "assets/js/34.6f834174.js",
    "revision": "bc918cb2764fee6b50f8a98d23a23704"
  },
  {
    "url": "assets/js/35.a8a51582.js",
    "revision": "8a40cc0869582cecd2f4d4dc80c75dd8"
  },
  {
    "url": "assets/js/36.f30bba5b.js",
    "revision": "4a9b8ddbf682f9ff17e6a5411d70a86e"
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
    "url": "assets/js/app.796c6450.js",
    "revision": "5f23ff248fcf02c558a10a353f0c39d8"
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
    "revision": "e5a7602b28da70d1d226ef11c6fd2d43"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "977057c201a3de1f9457545fcaa8bf51"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "276637694ca70f062e1894faf6d290a6"
  },
  {
    "url": "guide/contributors.html",
    "revision": "79266a11c2d9519a945ff47b8122f83e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "fdf3160e0e38d0f3cf1c5f368b975338"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ea65d69f984a47c5190adc8a29992fbd"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "2fce6d5335bab6bd02e07f1a9e57f4c8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "effec5468ad40824d83c210ad648f296"
  },
  {
    "url": "guide/index.html",
    "revision": "8d8d90afa38f978a9de9df1114412f78"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "0b43fd1f9e90c8acb7389c75e9b72cb1"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "e2048792fa51e791ce177b5d51346830"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c1d186a4b106b9aa25e6e7d17336c50b"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "99945fda98efbe22435160de840b4978"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "3949f157c246056c34caf8cf654d8edc"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "ad7d3caec33cf9ba89f97ae2fd40d504"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "653caf18a8485b39b3812c50f9d2a240"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "05b88a32fc15754668b47a1fba53ad50"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "71b448e3590d9dec6f2754fdf5a5c8d6"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "6711590362d55f0e1fb2def06405936d"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "2c911ae2c18c8fdfd70b0e1ad78d85ad"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "e5d1ff0fc8798845153c71469115e8cd"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "04ccba2f45fd52cad708cab59f69f16a"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "621b77e75f691f26fa4c031ec30fd120"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "c8d12b435096d317939cf0e0874a7ea6"
  },
  {
    "url": "guide/snaps.html",
    "revision": "3b2af1ac60f47898f22fc74970f40234"
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

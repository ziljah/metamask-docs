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
    "revision": "44ac3dfb951dc4103e223275b9999dd9"
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
    "url": "assets/js/32.436bf087.js",
    "revision": "ce683c3558b3b63a8accc09582aacb4a"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.e431875f.js",
    "revision": "89c139335b199ad9b92eb4afee678bbb"
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
    "url": "assets/js/app.07382534.js",
    "revision": "f0cea2bad0cac9581e9d8d34d030ed39"
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
    "revision": "55277d2ac968c70c2b28873bf7444b21"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d0292e8e0c19331d42dc9f38a5ba1db2"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "479f2ad8feb3688b37c5676a82a5ff53"
  },
  {
    "url": "guide/contributors.html",
    "revision": "a2dadc27497b6ce2522666e97f22bfd9"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8d9600911ffcd9033ff014da85f4487f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "8296981b57524c3af906c6761e26fa53"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "86a151697223e3d1bf26e8fdace89c80"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c06f702c6d4521b1ec28ea5c6de7a4dc"
  },
  {
    "url": "guide/index.html",
    "revision": "b52d9533b367c0c6acc0e40cf41b6314"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "2d571b14f4ccca54d38cda12ae937c39"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "4bcb1ae028bea932fdee061064e87327"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "f040d4f4a54dd412afebe8b8301756af"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "8ea05684c8a252604229edec249288f5"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "ef941e0a6fedd2eb4a6e969f4661e7dd"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "50c76c5b7d4091236e1e4df7df60be69"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "5f154a449ce95e4ebed78d24c28d168a"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "0dc4a81b052ceabfd1919e6ae711c042"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "ff42fcd37c97e496640fc7edfd097d4e"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "af96684e79c93d30e5d045d5a77b454e"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "cd84bd13a1114e21e4e605c9addb6f48"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "01599c77cd24f2a363775de3442afbe6"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "880e24aba787078bf2194a78c1a2d090"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "4c900bc5b54587d313c7c9d9a5473ba9"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "9748d18f1ea3133d831fa1ecaf00708b"
  },
  {
    "url": "guide/snaps.html",
    "revision": "487d3dd37a487b9e93d1180e6d7949a5"
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

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
    "revision": "38e52378d8bf82abdcc9baec9452ee3f"
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
    "url": "assets/js/24.17f19602.js",
    "revision": "785305ab369c228c0700a39c1eb815c6"
  },
  {
    "url": "assets/js/25.ad74af87.js",
    "revision": "1fbb7be9be75ceed308f03661c510f4f"
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
    "url": "assets/js/30.eb9b7a0e.js",
    "revision": "553ecfa052c990d1c74eb312b832c385"
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
    "url": "assets/js/34.603865e2.js",
    "revision": "17039b54d2aa9a5b3e686d8ae2fd7229"
  },
  {
    "url": "assets/js/35.1e1004a0.js",
    "revision": "825c9fa269562d6c4188f954070b4f70"
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
    "url": "assets/js/app.b2baa0e4.js",
    "revision": "ab1ca8ac35400ec16a582817c80b1b9e"
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
    "revision": "ffa87e4faee1d2036cec50d9a10252ce"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "46d70183ef94dbfba41eeb70d6f54aca"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "d102f9a6acaec2129d7ceb541e92d5cd"
  },
  {
    "url": "guide/contributors.html",
    "revision": "15036bd5254e90516ef260478c46152d"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "e3cea3d84813b56fc11e2b14d4253da1"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "fc6dc5b5a5a457b925aaba86a2d681f5"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "4c9d9e4c6ba965b531a61cabff959b9b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7b01309577f7d2e16d3cf50a6c7ffa78"
  },
  {
    "url": "guide/index.html",
    "revision": "5f85a5d85df071f06fa45824611e3951"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "5ebee2c34283b36752ffdf0cb6e7fc72"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "3d6163a03c6cc1f4c33f82ed9a617a71"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "0614c1f9d1ae164204f58be93e447e2a"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "18b878ad57ed3e524088a6a6784ca6da"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b28f49dbd084c6f18815c748bc477bd1"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "1af32018655b2025d290c1247b3467f2"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0cfd3e2e2029414b1408f757397e0dcd"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "e5c42fee541476d9f3c55896b5dfcf44"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "4147076a42475523825170a34eddf2b9"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "2adcd297287151fa6028cb92ef540813"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "fd20656aeedfe4095b2802c3b0269bca"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "90a737ac4381870778290af7e6b19e53"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "e62d831d1ac1fa521eaba344387a6e61"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "b386b9eb7a38715f6c7f9e6beb584e48"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "5e052d91ff7db5366988db40d45f3560"
  },
  {
    "url": "guide/snaps.html",
    "revision": "b27a86db1568684b30160c32ecb1004a"
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

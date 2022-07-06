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
    "revision": "dbc3bc0294e285d36d3e20a0718a5ba7"
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
    "url": "assets/js/18.91fd6703.js",
    "revision": "062626d1bf1742c6e42c824bc2812d85"
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
    "url": "assets/js/21.7bc4627c.js",
    "revision": "3f07883fb3fbfbf5fc340b6abf9eba43"
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
    "url": "assets/js/26.f8f75767.js",
    "revision": "8bbeb7ca2c6e42ea07d339def5b99ced"
  },
  {
    "url": "assets/js/27.908a9482.js",
    "revision": "2f3254456e1383668040d42278486930"
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
    "url": "assets/js/30.d8c434fc.js",
    "revision": "296c0acdedc5263a97880f1745353572"
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
    "url": "assets/js/34.acac3d73.js",
    "revision": "21fee4647a4aa41213d5a08623774d08"
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
    "url": "assets/js/app.e671fec9.js",
    "revision": "d2f3a027a0e2d5fe18c47802cf7e3fff"
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
    "revision": "ce2bba8b1619229c66916b9469d5e64c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "447e08b45dc348fc742c321d0c14f449"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "11db756de38ac4ded335680ee287a0d2"
  },
  {
    "url": "guide/contributors.html",
    "revision": "2d1274cfe0dbacad6d635a9af211aede"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "70a948ba28491aa5cc9a602bfdf815a7"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "df7122463dff13a0af12bfa982bc6668"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "80d58e81f9df74c77b6418b44befcf39"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4ca34c0770ef3129dbb1c0a7f19e8607"
  },
  {
    "url": "guide/index.html",
    "revision": "6d9f23320d305c2e9f5f97bbae6c44b4"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "05424a330e89ec58ae56efc26cced62b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "411ad2adbe08bab39fc2657cfe24dcfe"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c4f8f419faff324b7b2dbcb1ec755814"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "54af5a5f13a8d74de1225ee965e1ad72"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "ab6afb160eb7eae2faf348ab5bff21da"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "9166962895c6096b0699f40e64921e64"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "2976d7b6c5b86c67fe52a4f3889387f1"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "136d432c48e8c7ce20d23aa72355b4a5"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "f212c8c02ba5904c288bcf74b4d32861"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "fd555c1f55bd37e81d06589af47cbc63"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "eaf44c4569009e1ca954b90e762906be"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "d2b9e16c73d195994e7e36c32369527c"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "bd2ca1e05a3dde36979f992637e34bcb"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "dcd10b39cdc100b891b0928d11635d07"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "cab7bd8316346217e4b6d62b33bd1e67"
  },
  {
    "url": "guide/snaps.html",
    "revision": "7edfacfcdc0d397d255d3c001f60c143"
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

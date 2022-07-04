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
    "revision": "154e0d80a751838afcdbcae2945a80fd"
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
    "url": "assets/js/20.aecacabb.js",
    "revision": "271ff1471381a6677f09d3bcf701cb75"
  },
  {
    "url": "assets/js/21.194b40e4.js",
    "revision": "02fcdf4298a5f7374e3d466873aea57c"
  },
  {
    "url": "assets/js/22.66905b54.js",
    "revision": "84bba4cb9ec83eb6a2a4bbedf8d9e316"
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
    "url": "assets/js/app.1f36febe.js",
    "revision": "911d07046eb821a67e7a0897db14d679"
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
    "revision": "d4f4cb546ac281b2d331cf1a8b98a664"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "215f981fe4216c042066b6390f107cda"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "abf6663c766867f118e3e32e7403d2db"
  },
  {
    "url": "guide/contributors.html",
    "revision": "91e616475d6bda41007c8efe7f5a88e0"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "15a3958ea490b4b07a1ab53d77e5112a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "e62788aab36329970569139673fe375a"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "30e025dbd10b579adc13c494cb33c4d4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1ea1c9aef4138124aa480d498f36c04b"
  },
  {
    "url": "guide/index.html",
    "revision": "363d7372043e04d0e22f027c78cb917a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "7ef93c1d937f27909ced8537ca88e162"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "239e1d032bf2d645ccb490436ec39f4a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "44ca442c7c19bf3d8a5b9be092e605d8"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "8a8d5e18e74438bfc83b2bfd012c604f"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "dba3f909faa409eb3e2a95fca860eda3"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "28a527b8d09174f171538958c6ed7dd0"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "803bb0cbc3e23a85778011917351d74f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "e52b88d3d1c613f2b9332e1b73a3ca99"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "a8caa2f0afb29320ab9d94529a351f9f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "61915ec3608d5cde73fa9a61db8ecd66"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "fd5c94ebd1fed544de619e9ad5cbdde1"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "074f3e9aaea0eaf3aa694b6257645861"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "9d104ebe4bfa9ec51601ae0899f246d6"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "e8376ff8736ba4639322094ef3320aa9"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "df9ea85e377304dc2c954d61ff377e8d"
  },
  {
    "url": "guide/snaps.html",
    "revision": "6cc46632aa65c56d0e81c616c10dba53"
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

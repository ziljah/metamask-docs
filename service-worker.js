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
    "revision": "ef0298a6b6c35c0bd51d84f01ffd0eb8"
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
    "url": "assets/js/16.fb5c3393.js",
    "revision": "2e3c242c888187dba88c6db4fa270cff"
  },
  {
    "url": "assets/js/17.04568593.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.e665c700.js",
    "revision": "ca267f4d40d54e17af311c3dfb19c8d0"
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
    "url": "assets/js/29.93ec1cac.js",
    "revision": "0cb3e2ca638b14aad44596f6237bac85"
  },
  {
    "url": "assets/js/30.d94b0018.js",
    "revision": "29f7cc5892d2aaaeeda90f8ab73f4eba"
  },
  {
    "url": "assets/js/31.4746cd25.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.d41008cc.js",
    "revision": "5635f639b80dcd3d901e247e3a8fa740"
  },
  {
    "url": "assets/js/33.a3eb0c35.js",
    "revision": "c022921ae9e2db411307c1eca59ed649"
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
    "url": "assets/js/app.a708437b.js",
    "revision": "38663458b4d17776feb7e4b9d795a277"
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
    "revision": "8519de2660371f2df7abf92daebab8bf"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "edaec6fc247e7c2085e42b197954902c"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "588c9cb3bc3e5cbb955a49273c8ffe1e"
  },
  {
    "url": "guide/contributors.html",
    "revision": "b56a3d5ae70f7d63d059edd31ec0858e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "da07e0453005ce950f54874fee155f6d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "24fffdb28576ec1b035efbef1e6a4c88"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9a650ab66bae1d6ed1797d45692ad58e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0c4c30710ab4eb0dc23f49e4627dbde4"
  },
  {
    "url": "guide/index.html",
    "revision": "502d95cd95d3aa85b4338d049e551a2d"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "2d21a13a204c032ef965615a084dd006"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "2f9ba1c8a4edc11056fd9136d0c16f9a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "692fa7529131b429ad1b801786fe8d94"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "a0f61a7c1cab56a5f02ee3c0362f54fe"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "421042d27a11d7f1c01b84a3690ca351"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "bc4be24534527b01b63b22333edf0ca5"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "a97fdcff9689b6c8ff22e2de7109799d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "2e604b97880265fbb00ead88466f9e2e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "656f1d1f08ce02f3f58429038175183d"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "91254f114d50edfa127b5e4ea5edac87"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "af4efae6d3cb4e63cd034e92edb7bcc5"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "ebbde20abb1ddfe632df6de419ef9ada"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "3147d1539a7c30019e0c0fcb2acf4442"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "d25b8b4c6020326eb7965d6461e20ff4"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "5b59c5c5daafb34eb035cf05e71107e5"
  },
  {
    "url": "guide/snaps.html",
    "revision": "fdcecf1ffeb3106a4c02abaa97bf7496"
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

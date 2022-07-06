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
    "revision": "b2d8ca8b3445e5530e4ab54f80aa22ed"
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
    "url": "assets/js/17.9a195ba9.js",
    "revision": "61c28ef64b5061e4711613cda0d84bab"
  },
  {
    "url": "assets/js/18.e665c700.js",
    "revision": "ca267f4d40d54e17af311c3dfb19c8d0"
  },
  {
    "url": "assets/js/19.ee4b1e1d.js",
    "revision": "9cbff5bc32514ce5f59140985fd54cc3"
  },
  {
    "url": "assets/js/20.89021c7c.js",
    "revision": "b8236ad7e9851fa1c02c911b3fb1ee48"
  },
  {
    "url": "assets/js/21.daa1b6c2.js",
    "revision": "c2b6478312426c79bfb1b9c95f0b10bc"
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
    "url": "assets/js/30.ac9df538.js",
    "revision": "0b5c2c5b28987357c1f825b9e17ab4b1"
  },
  {
    "url": "assets/js/31.4746cd25.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.56d38a1b.js",
    "revision": "d416257a52e5761c77e6ef1536d8a994"
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
    "url": "assets/js/36.727c09ef.js",
    "revision": "540386d33ad640c6fc26924ff97ad7ae"
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
    "url": "assets/js/app.4bfd7038.js",
    "revision": "34645459bcec4b65f40cd08023d731f5"
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
    "revision": "b40f119966addb4d7d390afc53b769a0"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "4c25eb6bca4fee0dcce25a70ade275bc"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "e5cbb0a4c8536b0bb853e9fd01e1a3f4"
  },
  {
    "url": "guide/contributors.html",
    "revision": "812a5a34170e896604fd37518f57ed3b"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "6a555e49679270da6be2d67dc2819d78"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7b672918cd9de45cf58961803d86c8b5"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "28191242fdaae3886b4fed1ebaf0e4c8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "057f6465e8aa263e501b2b2a97ba2514"
  },
  {
    "url": "guide/index.html",
    "revision": "6d775a1f2c0931391ff805588a5fb55d"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "7f538704367bbdd1fbbf0fff445dac7b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "b9cb9328ab8add8140b162166bb9ecb8"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "aee5f01ad6ea6e5b1bbab2aa9272dedb"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "034ba4f2382d3cb948d7424a2161bea6"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "f669a3806315cd2c7621089f9adf4554"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "ae5bb7aaefd286b68f7b429333b5fb20"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1266f75028569160a85bfded8f56264e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "5878d974899a761ec8610ec1212ff526"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "ac6dd1e25e8eff96807310e29ced4d69"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "b2079a622ca37f28da2c59fe477036c5"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "ccf4ef9322d528d494ae2773978ec448"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "c75342b645c6524bddc398253e06569f"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "d05358fb4d1eaf0db7521e0a46af6701"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "fd8dcd94b4324b0c3a7b5585637c2933"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "63e2bcf50455ee0e67cbd650595469c2"
  },
  {
    "url": "guide/snaps.html",
    "revision": "13ad86de3a792f3b0b35a5ff758d8e44"
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

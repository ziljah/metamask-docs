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
    "revision": "290180522d09e982c1b078f15c30a1cb"
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
    "url": "assets/js/15.53c9cf0e.js",
    "revision": "cbb8cdfbe7ee9fece4312b78e2f6c827"
  },
  {
    "url": "assets/js/16.878c533b.js",
    "revision": "bac455ea6b053a17181176f5fa00f0f4"
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
    "url": "assets/js/app.a10ebb63.js",
    "revision": "b99fcd0ab87fe852a727c8e10546c06d"
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
    "revision": "b60bb1ef5ff6792b6d9e0087c31046ab"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "7b7d263c44c78d66a893261746b92904"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "34f0635d5b54f5d8e0b6c01b99b2209e"
  },
  {
    "url": "guide/contributors.html",
    "revision": "0d7ce2615205b8807a4e23c37b3613bc"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "657d520a9c7ad8fc42578f49edd4cce0"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "39192760c0a175ece90ed4cd07467e89"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5fe1f079e8a3d1d9664000df42a3ab2d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "939d2a289f1a221438842a75db0699fb"
  },
  {
    "url": "guide/index.html",
    "revision": "5604c5b5261c4c931d17b3ab03c4b582"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "7e73cfa5be8485e54e7332a32f2c011d"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "1d8e9faac2b2dac6acedaf3b35ac0a3a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7e62cca95535adda70335b2e2e86245c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "517ebb6e278c405dc999e3c06c1f8133"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "2f9a4014d20873cd05304469c8098db8"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "c5135df9e0d4de26c88c7b96db0fc9e1"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "69393110dfd58e80f0ed343c8a0b4573"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "709a3525dd552b42ac81a3a4f87c4453"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "5a025959d32617dfb85e3c5bf313e6da"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "f069abe32a7dbbdb98f9f54c8c0741ed"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "1cd54dff1b2c4d64ef05cf6deeb551bc"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "23be8c164f17b3631910774cd8d2d2ed"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "9e550baf6d9a609d623fe0200ef32f43"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "ef4a09734f3d2053f8259b16b2261c67"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "23ca767d29e729f75354593dd38571cb"
  },
  {
    "url": "guide/snaps.html",
    "revision": "86fcf3ec287fab07bc1919e62d132f4f"
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

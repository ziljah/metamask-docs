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
    "revision": "0d7eb375bab394d9b214754c9e184433"
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
    "url": "assets/js/20.aecacabb.js",
    "revision": "271ff1471381a6677f09d3bcf701cb75"
  },
  {
    "url": "assets/js/21.293a2abb.js",
    "revision": "54927bcf34908679cb8a5e3000290032"
  },
  {
    "url": "assets/js/22.66905b54.js",
    "revision": "84bba4cb9ec83eb6a2a4bbedf8d9e316"
  },
  {
    "url": "assets/js/23.abf5e998.js",
    "revision": "bd0d1135cef3b7e7ef8ab7eb6cfea92f"
  },
  {
    "url": "assets/js/24.199174d6.js",
    "revision": "fb29e371adee6935dc6134ea3d927913"
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
    "url": "assets/js/35.6b445c65.js",
    "revision": "8b5b75da972f9b16d94bd5dad33a8894"
  },
  {
    "url": "assets/js/36.0b8da2b0.js",
    "revision": "fd0ed92875e7b603af5e98c48d6c53be"
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
    "url": "assets/js/app.9c4b5058.js",
    "revision": "659b33d30593f4aadf39ca7a4a6cfd24"
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
    "revision": "b17b22daaa400519e9f5b04f36e798f2"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d98a5fe4694c1bd4f7214d13e42296ac"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "4cedc0da36cd1e786dcb1b4634c8afe7"
  },
  {
    "url": "guide/contributors.html",
    "revision": "063e7b16c3995e059d02ba0c41a2daf8"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "883a6d8755776f5e18e77cea3c95a31f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "f1d1dced36cd1d75fde2a4c2ed0e9f46"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "d2b996c5fb0eeb30da9db4336088cf2b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ad5403cbc4b7c6c93f494c699d738a0a"
  },
  {
    "url": "guide/index.html",
    "revision": "3e1d46bc03d540a44f6caf9bd5e4b403"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "c7a4dcc83903eaf9610c383a910fc804"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "67febbff6aabd0abd566293fbc7f6fc9"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "fcab1319fbc2619cb13bc84085307ce6"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "347ec0de33d63bb66364153f13ea5521"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "74633101eed74de88d8ca5a0b4f46161"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "78274b466e7f749c7fd779e3357fcc48"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3e45d839dddfcb044b7a399eed3e1468"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "122b8fc1da58fff7bf9c5743c6fc5684"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "bc1fd01d7f6e76b1d8e218e6f71381ad"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "8354fdcbabc0867fd15183668be87a26"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "f2f95305fbbdd4e09e3d6666820079ee"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "3de847a350dfe3bcfc91014114706946"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "12bfd342c9b2542874601fc534a106a2"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "a3a8968868dbe3c96e70bdcd55b2a9f2"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "98614396ea1f0dccf0452ff1e6fc8cf3"
  },
  {
    "url": "guide/snaps.html",
    "revision": "13982c25e91cb748cc99a6fe6e079d36"
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

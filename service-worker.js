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
    "revision": "26a52650f871eab04cc419fd125458fa"
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
    "url": "assets/js/18.042fb45d.js",
    "revision": "d4807641835380db06cd35fd4b755696"
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
    "url": "assets/js/32.f83f1e48.js",
    "revision": "eede7959a7bbd197906b6377a6b22dbd"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.312306a5.js",
    "revision": "e5895489bcbb9203a71314619782e81c"
  },
  {
    "url": "assets/js/35.a1c6f09c.js",
    "revision": "f5f496c391b92000ad1cc2253ead3f8d"
  },
  {
    "url": "assets/js/36.df3bec52.js",
    "revision": "d8a68e2abb1f57d3002a9e91a0178bba"
  },
  {
    "url": "assets/js/37.eb19e0d7.js",
    "revision": "0eb9ead751860bd2469f9b4f9910e87f"
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
    "url": "assets/js/6.a0d1e866.js",
    "revision": "29f718453c76590851211e3db25c8aa6"
  },
  {
    "url": "assets/js/7.50a770b2.js",
    "revision": "5604cecaa689454aa86376434b0c40c9"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.c87edbeb.js",
    "revision": "d517bd47317ad81e6ab16a0e8b3b6124"
  },
  {
    "url": "assets/js/app.66dc1d69.js",
    "revision": "f2d5da9cb972bf21189819cd859840a5"
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
    "revision": "969d09e34b7d830062b98e9399ba4fc9"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "12865a2d562e893193abb638424195bb"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "41b4c7dfb6eab9c35bbceaa87072c564"
  },
  {
    "url": "guide/contributors.html",
    "revision": "db5b66b2b8744420eb718e713c36811c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "b23e0b2e7667d952ef9352ec35a900ec"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "3a748af8f81c0927bd8755b6b700e780"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "e5a86c6cc21c0086c6e8f32b3f4ee2c0"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "99da6e1679bf3e9da3138806713471f3"
  },
  {
    "url": "guide/index.html",
    "revision": "01397f2b781602a730ce1ac8b61e996b"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "fb9b2fd8e8de2f918ffe5fc8990d5de2"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "81b8a0573da4b5a62f8b2644d1ef889d"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "0458ebad3d0877e708acf5f8060af206"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "d6d22dfd596835677b272fea76adad3b"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "9c5c4ab87d1224bf58bbe178d4358bcb"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "e16632f12115cad7375848c1e9a18401"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "107313fe115a2b90816bd97aaf5c6b12"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "89c3b7707ff8fe2f6c5b2443b3a3334a"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "324021f0329697670fe74a6322251627"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d3eea12fe5435611b6fc7932cd2501a0"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "0efaddcc394adad16a571074d58281d9"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "88827d509a7ec0425532e1a23829d50e"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "01808a56d9cf7a629535894f1d561eda"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "fcc88f615984ec02ead6e4c1373ec49a"
  },
  {
    "url": "guide/snaps.html",
    "revision": "35557a5c3e4c1a2a8fbe10b70df057a4"
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

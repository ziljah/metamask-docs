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
    "revision": "b1847750ae69e949f4abffa22b2787ab"
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
    "url": "assets/js/18.3d569f46.js",
    "revision": "09b59bd21092b85b72a96940f310b7ca"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.4b085eef.js",
    "revision": "606350382f1c97299632159e981665db"
  },
  {
    "url": "assets/js/21.7cd19eea.js",
    "revision": "ece2938e363d7e5fcf9fe212e105bc1e"
  },
  {
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.f88fcd4f.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.41489810.js",
    "revision": "91ddb8b48a3175e3538d66575f08702d"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.f3ced236.js",
    "revision": "092ef8939b9ac3c931fd8adfd134e1de"
  },
  {
    "url": "assets/js/27.978bfcab.js",
    "revision": "20c54e1f894a2f3cb869f040678cce12"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.a7dda938.js",
    "revision": "416f220ad55c5d6f1629300a6303249f"
  },
  {
    "url": "assets/js/30.e3449ff3.js",
    "revision": "37e4f0510c2d8c0b924df5e6559ec9d0"
  },
  {
    "url": "assets/js/31.74901bf2.js",
    "revision": "c72993434fd58aa88fc8b74f33ed6e96"
  },
  {
    "url": "assets/js/32.6620dda9.js",
    "revision": "bb7a4c20b6e2aa2fe14f0df04e6806b0"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.c3efec63.js",
    "revision": "664df718ce9247bea90892d9a7e60a8b"
  },
  {
    "url": "assets/js/35.98d3eb8d.js",
    "revision": "a221e7ff60744c1b0adabe2354de95ae"
  },
  {
    "url": "assets/js/36.ea6c87f8.js",
    "revision": "95eb2a68015bcb10e6ea211d46a6d33d"
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
    "url": "assets/js/app.17f2d4f2.js",
    "revision": "e6fa2ddb4e954cfbf1538b057ff2decc"
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
    "revision": "122bb8c0c4fda51346942a872e56e37f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "af9215e3bbbc202614f0cbde70a638d6"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "74adb157173f2ea969fe054498192005"
  },
  {
    "url": "guide/contributors.html",
    "revision": "675c51999a11146f8cda9a306d882f92"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "42d619a746883411f398a625b66252a9"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "01e79be3146d0d1c46446f96cce2b743"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "bce9d275529454f2a931f2f7026879f0"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1e64142594812bbeefb77d85d5344096"
  },
  {
    "url": "guide/index.html",
    "revision": "1287e2a8f87ff391b48254525360c518"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "77652121d2564a02527c2e2845fe9cda"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "9121ba1ade76ed9614cc433465c22e88"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "2548af302de4e6c788f78cdbb12b793d"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "f189cfb32fce473bd9153c5add7fe553"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "7b0a6112c34b0760f9f80cc559bb386d"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "3b65b028327f97fa2d30eefe5414a8be"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "97ee0a7ae97ac46735f1252697bd34d2"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "171111388d5fe1a10ceffa17567aab60"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "c8049d301c116e315a70a1ce61eb8911"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "02542304b79a6fadbce6bae2a07dcbfd"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a533617caf2f08340e5378fac8258cfd"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "611454ee33f66647ee31526a11ebbeb6"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "c6b3c2aa7ee91656ef71f2a5672c00af"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "259d91e160279d148e8d1bdf09b0799d"
  },
  {
    "url": "guide/snaps.html",
    "revision": "dc9cae68a2e099ade9571e2a00e43bfd"
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

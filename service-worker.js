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
    "revision": "1ff153fdd35cc3ead410a1b621f0bb6e"
  },
  {
    "url": "assets/css/0.styles.8dcb5106.css",
    "revision": "10de1213d2442d0add4f5413c0d7213e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ea876645.js",
    "revision": "4897f6656320e84c1fde0cd25139856e"
  },
  {
    "url": "assets/js/11.c8c32f07.js",
    "revision": "7a218ebf3e877987f7991b2a6907e7fc"
  },
  {
    "url": "assets/js/12.a595b31e.js",
    "revision": "1f90975a77a58f9ef9970211df7bf800"
  },
  {
    "url": "assets/js/13.7f205b2f.js",
    "revision": "eb4dc9b82698788420594ea40e9e59d8"
  },
  {
    "url": "assets/js/14.f3eb3544.js",
    "revision": "622278e584991e6057d2a651e4f8c61b"
  },
  {
    "url": "assets/js/15.70c9efb8.js",
    "revision": "fdf26b7c0eeaa72ef7bc858c8cfc2af9"
  },
  {
    "url": "assets/js/16.a4944b58.js",
    "revision": "7ad7349c15af01813330fd990e13c9de"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.3f419662.js",
    "revision": "e9a9b3d538e7c3562f4a1321413ca562"
  },
  {
    "url": "assets/js/19.6d44b058.js",
    "revision": "513483b62ae907786d465a8c7b5e7dbd"
  },
  {
    "url": "assets/js/20.1234e0ab.js",
    "revision": "01376a1c1b41425847910cfd332b8cd8"
  },
  {
    "url": "assets/js/21.708b0566.js",
    "revision": "9677d3eaf351436ed2869a55222166f1"
  },
  {
    "url": "assets/js/22.ded762c6.js",
    "revision": "e8885230f47b92a3b77934f3f6982003"
  },
  {
    "url": "assets/js/23.455c3ec6.js",
    "revision": "23b5e8593c53c89e2a7dc880bc1f5c5b"
  },
  {
    "url": "assets/js/24.6cc07750.js",
    "revision": "ca1320b8f5a8d0df743e05bc3cf693b9"
  },
  {
    "url": "assets/js/25.6e71559a.js",
    "revision": "d5d0bf0f185d98e1f1ebe17073721ca2"
  },
  {
    "url": "assets/js/26.966ea95b.js",
    "revision": "0fa6c4a53d358df9ac406fd40da6a280"
  },
  {
    "url": "assets/js/27.a3b94e48.js",
    "revision": "abd2bee45c04aae588c3dabc433080a3"
  },
  {
    "url": "assets/js/28.aa56dbc3.js",
    "revision": "a7b400e4127103b2a2fe25acd9425c45"
  },
  {
    "url": "assets/js/29.1a95cb8b.js",
    "revision": "7f36d7d76c5a6574f5ad887020d5153d"
  },
  {
    "url": "assets/js/30.90a1153a.js",
    "revision": "b5f4e5b15543d77ad32dca64f8a43d2d"
  },
  {
    "url": "assets/js/31.2a802cf6.js",
    "revision": "c64b492f99722216f9f001564ae89d86"
  },
  {
    "url": "assets/js/4.2530261f.js",
    "revision": "aee2ba4b11891081e4a2196a90d432e9"
  },
  {
    "url": "assets/js/5.dc3dae0a.js",
    "revision": "761d8df16cb9e2b39cfc5cfcb1473ee5"
  },
  {
    "url": "assets/js/6.6c14fbb1.js",
    "revision": "173a5d925c17c8c295f5d06344b2bb7e"
  },
  {
    "url": "assets/js/7.bade1c40.js",
    "revision": "e150cec61c4c679486ceb96390e45dc4"
  },
  {
    "url": "assets/js/8.97ed842b.js",
    "revision": "bb968352bc4c8900d55bbcba97ef6265"
  },
  {
    "url": "assets/js/9.777af077.js",
    "revision": "981e5612149945a769f79ddb86401ea4"
  },
  {
    "url": "assets/js/app.2b0d41d5.js",
    "revision": "bc5b4337164167b7967fe1a833899af2"
  },
  {
    "url": "assets/js/vendors~docsearch.13c21034.js",
    "revision": "99fca4d6c890c7ef2fac9b69a2f31a85"
  },
  {
    "url": "assets/js/vendors~notification.858aa34f.js",
    "revision": "22962219ef3d017a36b7c767df0e9d61"
  },
  {
    "url": "faq/index.html",
    "revision": "862607d07d6144be527daf27d1d936f9"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "3a22a5125eed38b19df973cebad44a07"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "bd081a03ec06d8f6cc9f24f4e63b2af2"
  },
  {
    "url": "guide/contributors.html",
    "revision": "08c4e35a394c4e75664b7505d6829ee0"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "f714e847af31b11fd16791e13e928c6a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "718049e59ae50482b4b53f1bb9aff2d7"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "8a151d49a8ea54a8128971b753d8a3e0"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "57b34d7e33197924a59eaeac63e2df75"
  },
  {
    "url": "guide/index.html",
    "revision": "c9a42b3a231636b294ea8be1458aaa11"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "5cbc072e77e4abc448a3c8c14d82332a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "31b7f887e92467eceae152b0f6508215"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "7ba3c1d0c248baafcab9543eeaea5c25"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "eada59b560d88c6e515ee62918762d29"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "00cac7d5b9a48dada7de4457a5ec589d"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "12c348064a73e3c13610764b3161f2fc"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8eba06107e95f8dda4dea381a87910e6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "57be58a591439c427ea432c5dc4dac79"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "fb6c45e273774cd799c39c26411126f8"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "1d7b42ffd332c9a2420cfba02c4b34d4"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "3b02a0100e650169ee1f35c31df323e0"
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

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
    "revision": "cd28682eee87a2e5dda4516f6948a395"
  },
  {
    "url": "assets/css/0.styles.22a631b2.css",
    "revision": "b088c69cf87b150c226b1a2293d2c162"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.35cd029c.js",
    "revision": "f193270ded295c340705dfdf4a0f7cd7"
  },
  {
    "url": "assets/js/11.852f3b9d.js",
    "revision": "f87a845a6e62189a9db20c0f940f2d82"
  },
  {
    "url": "assets/js/12.c3500b91.js",
    "revision": "3df5a73798289b50a4dc3a69b592f937"
  },
  {
    "url": "assets/js/13.e69e82e7.js",
    "revision": "73d815f76b3efebab1611f78f4faf2be"
  },
  {
    "url": "assets/js/14.4587489b.js",
    "revision": "7a6538deec010991059b3307fec92210"
  },
  {
    "url": "assets/js/15.31cdbe4e.js",
    "revision": "e24de8bb6391c2c0f590be89cfdbccf5"
  },
  {
    "url": "assets/js/16.fa05ac68.js",
    "revision": "60f8b2328f26842fd7fbd6ac3d6bdad2"
  },
  {
    "url": "assets/js/17.4d892ba8.js",
    "revision": "f3597a82e35e23b1705ef51c9dba4452"
  },
  {
    "url": "assets/js/18.7ad8a5cc.js",
    "revision": "f65565cc8c2b2fef1dd166414e539dbb"
  },
  {
    "url": "assets/js/19.466965a1.js",
    "revision": "94a433b16b4b226a7c2047ba1a0c43f2"
  },
  {
    "url": "assets/js/20.f6574fe2.js",
    "revision": "c0486863685abbcc5498649729e69638"
  },
  {
    "url": "assets/js/21.3f3297a9.js",
    "revision": "5b983d75b79ccdadeabe8da46351d050"
  },
  {
    "url": "assets/js/22.dc9d4730.js",
    "revision": "7465699394cd68c78365f6292cb1c8bb"
  },
  {
    "url": "assets/js/23.23be1885.js",
    "revision": "223493fe0c7fffb9c2b9edbe349a40f3"
  },
  {
    "url": "assets/js/24.27f230be.js",
    "revision": "765fc9b83b50abbf1473ec345e10e70e"
  },
  {
    "url": "assets/js/25.7518a99c.js",
    "revision": "6ded00fd0ac33129c438fce7116e2379"
  },
  {
    "url": "assets/js/26.84c9ff20.js",
    "revision": "44b69ea456d3a84bfa04a5c1faa1f9db"
  },
  {
    "url": "assets/js/27.6ae1b18b.js",
    "revision": "58916965d716129c7364973f11121b42"
  },
  {
    "url": "assets/js/28.4e2d61f5.js",
    "revision": "d7e2de99b04923c91449c18e22a410d9"
  },
  {
    "url": "assets/js/3.dee74e01.js",
    "revision": "3f546f51e72c765eed435fac0d69f7cd"
  },
  {
    "url": "assets/js/4.2bc9fef8.js",
    "revision": "a20ce9c526e2188ac94325fe7221dec0"
  },
  {
    "url": "assets/js/5.7b26f254.js",
    "revision": "80260062b16a3ed8e55419d1eb63e110"
  },
  {
    "url": "assets/js/6.ae2e4e3b.js",
    "revision": "3834ed43705cb654d8654f4b0637b168"
  },
  {
    "url": "assets/js/7.f1ec03ea.js",
    "revision": "81f2ab057942c126d43c5790f1883bba"
  },
  {
    "url": "assets/js/8.327be267.js",
    "revision": "f3316b51af8f97b83135a100b41730c6"
  },
  {
    "url": "assets/js/9.87c8da3b.js",
    "revision": "36a1cf3d7fcd4b56e7c33c778f90f64b"
  },
  {
    "url": "assets/js/app.f86dbbcb.js",
    "revision": "b78e4ff65ef9023314d0d3323bebd754"
  },
  {
    "url": "assets/js/vendors~notification.3bb6bca0.js",
    "revision": "e209d4403e85bdd9b36764d1452a7475"
  },
  {
    "url": "faq/index.html",
    "revision": "b091fb4e5ec47c38d32d61ac571f1853"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "65aef86b52e0eb425da9ed39374c6c9d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "549ddc6875bf8454d90476e839e479f1"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "5633a24fced0df37662f90c05e8733f4"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "d9247b7dcf3b1712b9ffbd80aeace6ae"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "e43306df354983a2e54ddd2860c2a22e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "58ac4969b939d3cfbd10f15775e8a36f"
  },
  {
    "url": "guide/index.html",
    "revision": "dbe319aa499948251a8d50b47e1349d1"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "5bdece56838a67434d04cd12f32127da"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "b4f662ab7984a3c41998441450522a03"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "42636986db44a3eec378b86063ffac40"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0681425e20c69bc809ce6c96530acc81"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "29f52c4503e87357b1ec6dfb7fc5aae3"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "8494a9bcbf0daac2e998e52781a73298"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "565589074a7948763875bd8c069c7fd1"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "77f8cd53d9d5ff7eadcf90683b5472c6"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "af7c0fac2d3707d04655dbcfe1619568"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7c23f00efc5fa3e75a422d55e60627ea"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "0baf01ee2785abb5abb7da45ea121ce5"
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

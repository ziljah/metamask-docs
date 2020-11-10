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
    "revision": "d80acc438d65afd4e72ec19a6c187e9c"
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
    "url": "assets/js/12.ae20a8a3.js",
    "revision": "8f27f342dcfaa2e3895c209e1292ecd0"
  },
  {
    "url": "assets/js/13.7f205b2f.js",
    "revision": "eb4dc9b82698788420594ea40e9e59d8"
  },
  {
    "url": "assets/js/14.91a2972a.js",
    "revision": "063c8f1c1533a50154cdeec68829528e"
  },
  {
    "url": "assets/js/15.70c9efb8.js",
    "revision": "fdf26b7c0eeaa72ef7bc858c8cfc2af9"
  },
  {
    "url": "assets/js/16.1e8c9245.js",
    "revision": "4c18b8dda396befe9c982a387b59dc36"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.67e0b8f1.js",
    "revision": "a07329649c903804be39c5a8b06954c9"
  },
  {
    "url": "assets/js/19.e53ca7af.js",
    "revision": "097a2242193b359e31db7d3c904da0d3"
  },
  {
    "url": "assets/js/20.1234e0ab.js",
    "revision": "01376a1c1b41425847910cfd332b8cd8"
  },
  {
    "url": "assets/js/21.d6fce277.js",
    "revision": "123fedd7c7546317aed2e6286ce59329"
  },
  {
    "url": "assets/js/22.30f7e333.js",
    "revision": "3743cb39f4c11274e0dfb0533e5de9a1"
  },
  {
    "url": "assets/js/23.9a7996f0.js",
    "revision": "12c52b13afff3bda40657f94415794ff"
  },
  {
    "url": "assets/js/24.6ad5806e.js",
    "revision": "f5a7067e0c676dea22c62d3869dc3072"
  },
  {
    "url": "assets/js/25.f46a1127.js",
    "revision": "957199a8403c35087ba2a4d7b53d9908"
  },
  {
    "url": "assets/js/26.047cd97c.js",
    "revision": "f9811124a8761279c895dbc5a40d9be8"
  },
  {
    "url": "assets/js/27.c5e59ec4.js",
    "revision": "e15241c584c0e0a89fec4dfea7f7bc81"
  },
  {
    "url": "assets/js/28.890e5a3b.js",
    "revision": "ee4aa487c698946b650aa928f8ded686"
  },
  {
    "url": "assets/js/29.996852cd.js",
    "revision": "08a513604b22b3312f68f101d7cbc5e5"
  },
  {
    "url": "assets/js/30.b5a94a65.js",
    "revision": "0cb1500848b066f21f8012e1c30a99e7"
  },
  {
    "url": "assets/js/31.2e1e12cc.js",
    "revision": "a7c6ce489404e95f85b4c2b6cf43bf4d"
  },
  {
    "url": "assets/js/32.53667f5f.js",
    "revision": "889f5da3fac04323034839df4b03841c"
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
    "url": "assets/js/6.d745268e.js",
    "revision": "5a4943dd355341c17e107eed75ffe58e"
  },
  {
    "url": "assets/js/7.1147ee0f.js",
    "revision": "3a872c4bb09ab114453a74ebccbf9919"
  },
  {
    "url": "assets/js/8.97ed842b.js",
    "revision": "bb968352bc4c8900d55bbcba97ef6265"
  },
  {
    "url": "assets/js/9.520a54c4.js",
    "revision": "d32cfadee44033783136b91510fd2dc6"
  },
  {
    "url": "assets/js/app.896b8243.js",
    "revision": "9d5fc2667731bd125f56d689e6d627a9"
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
    "revision": "57d42017aaaa0e1d2cceac96752d389a"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b76c5d917251ace027298078f83abdb7"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "acd6eaf584ff18705ed4ad072dd35dc6"
  },
  {
    "url": "guide/contributors.html",
    "revision": "3c833a58f049b0873b84d3bc4ab8d27e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d3a1cbb631baed450173be747067a499"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "4983ab292778e048f5b29d041718874b"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "10c36c30ed9e44a57c9d24a346d4aabe"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0b73f7e55f846767ffceb40b1f4f3618"
  },
  {
    "url": "guide/index.html",
    "revision": "a242d97dd9a6e71386c8dfd47bd5f7de"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "fac440d2760872f4afe94d4da98ed86c"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "0c5aeef122a0aff1fe405e9b9325c779"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "e4fb6c26531979f73de6c128b2b0f35a"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "243cf0431da6c3be6070f023dcf2f2c7"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "86e471ff50e1c74750df06d113bf7332"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "45f0c487080d1ac7b834347a59428f1c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1c19625711315754ec6d2f96bf64e08c"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "400e265e726a55be39ddae53c0d6053c"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "b15d446006c7b261c9c878a1a0b967cd"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "35e9a8a282159aad68a61f6972ddaad9"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "d4686c8e4e03c866b08bf67c2615bcbd"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "022a1553ba1f7ae47b6f7d2c2449505d"
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

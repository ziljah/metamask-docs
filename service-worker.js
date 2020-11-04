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
    "revision": "8b28b0f264292f90aab21a860b8574fa"
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
    "url": "assets/js/18.6805b4ee.js",
    "revision": "3641c10cf9e4d7b6d68003e993ceb0c0"
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
    "url": "assets/js/25.d40506f3.js",
    "revision": "182d5a53c7d7ff911dc627730c4c5e5c"
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
    "url": "assets/js/30.e3416d50.js",
    "revision": "9ba0333af283f8ac9c09c07ae788d655"
  },
  {
    "url": "assets/js/31.ca311872.js",
    "revision": "99fa5e5f97839b532955c55e25e31035"
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
    "url": "assets/js/app.e8cc594f.js",
    "revision": "7834318fe9a92c7d2a08f8c0e5a3f6aa"
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
    "revision": "5eb78d1b38b8724b7e2c6480e8e8fa1c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d4f38841cd19f094c301a077dc9fb299"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ae1b24a13f62cbef25846703a6aecae1"
  },
  {
    "url": "guide/contributors.html",
    "revision": "d7141ffd7855e85802b943a4fa71a364"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "88beeebd9ccc14ea42903b8a7713e14f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "f713704c8f4b35e8beeca0c63651f5b3"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "2fc175fe2aa734a25d8231586f8f7819"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "da152cb11413c525d0c7b28af35e5eb6"
  },
  {
    "url": "guide/index.html",
    "revision": "5b0769c318508aad90cb9f0e511c8819"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e52c7e6e247acbc2f1ec22db82b9ce4d"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "22445dbb34ad83fb8dc271a033370777"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "0a221c50071b526f4d580d3805c3c520"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "71668a0f1016634ab82897574fb917e7"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "5529e2ff61e509772b2ec74dab490e26"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "1615707bd1d03232f2f8c6eb73cdd65f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "c8b3e39dd5d9bbf3bca8f2fc51533a2c"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "29f6ce3fbf4802620412f9e9f0ff6410"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "a15dece44d06e5d6e9a6acee3301846f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "13fde88ec31d17b27cd7a4e2614df6b6"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "228f456ae461d0ac239aa71c71564e34"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "05f52642d06d0afe7957ef3a58636825"
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

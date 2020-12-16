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
    "revision": "da8775c38a81159dd645a1226b39f794"
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
    "url": "assets/js/12.15a78987.js",
    "revision": "1c79890120eaec59e8df3f42b6ecf9be"
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
    "url": "assets/js/18.89941576.js",
    "revision": "dd2333eeaba902f337b3aefc26869c7e"
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
    "url": "assets/js/22.a315b43a.js",
    "revision": "85e20464380d33031a5163d851186c9d"
  },
  {
    "url": "assets/js/23.f12ea3b8.js",
    "revision": "98c7fbdfd8e23c9091902d01cae03f17"
  },
  {
    "url": "assets/js/24.6ad5806e.js",
    "revision": "f5a7067e0c676dea22c62d3869dc3072"
  },
  {
    "url": "assets/js/25.63b7f1a2.js",
    "revision": "2b96c6eaf0f54790b1b690408be646d4"
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
    "url": "assets/js/30.5ba22dbb.js",
    "revision": "223589eb23723579e7723aefa999fe4f"
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
    "url": "assets/js/app.9fbb258b.js",
    "revision": "376d4804c483f47bd8551d4b17b4852d"
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
    "revision": "27567b2e4d1827b18aa1c42b01f8c8b4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "25a3dd3dd7c09b580a2c695390e9abfd"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "fe2d08048b0534f51af95b6fc0efda83"
  },
  {
    "url": "guide/contributors.html",
    "revision": "ef0e797ea8e1b4ad606f95a43085ae65"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "ecff7c49ff7357c533d9910efd77d1f5"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7746d7cf35e277e42f45aa8deb317031"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "06bcf922f827dd72274658a13005ae28"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6ba225565d49a2123e299d9254a015bb"
  },
  {
    "url": "guide/index.html",
    "revision": "246094553c85e6be4984c18c1be4d2fe"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "fa387e53c2507251f29da33e33dad4c0"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "3f28bd620aae38cc879ebd419f395b09"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c32b85ba11c8c08e75b9835ac6ca5cb9"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "af92921363b8dc9393ffd30db816ede0"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "de589c6c0849e7860e0b7e823a91fb8c"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "c884c0be01e30bb29025d4f66d77a4bc"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "b39d4cfb41e47dddaa91f6b4117309ab"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "768c1484fb2698cadc673f94a1b44cf3"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "11de758cc475f7c37fc1f9b345f1a742"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "6b9f7e67c558162593e10c87f1d4613e"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "57bb61f974a11d7ed83cedf305fb109c"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "8490816d54396465f3b6c11f2c186f66"
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

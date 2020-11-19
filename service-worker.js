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
    "revision": "82a66ce0a7ddc03c4b140a1cdaa83ee6"
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
    "url": "assets/js/18.17758de8.js",
    "revision": "3525929c3787c4505b400d86dc35d144"
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
    "url": "assets/js/app.e0328372.js",
    "revision": "ae300ca0bc1e2cda4995e88af8809910"
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
    "revision": "01402c0df979f178aeff02ca96b6824b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "82dc3f800ba754bca487c23de8ffa2f1"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "6f97653160bd58e076e8b402c78b7bcb"
  },
  {
    "url": "guide/contributors.html",
    "revision": "ef6d9b6d7a1eb96d909807612d89c0cb"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8bad0d4910d23e125c2f20cdc7c8050a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "fc0692bc063a83e2d38e034459e5dad6"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "4d838b9aa19326d860ebd06ace249205"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3be78f3db5d5b2d1a780c6b8255f164f"
  },
  {
    "url": "guide/index.html",
    "revision": "ed071b73aa123ed444cd8d1acd3565d1"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "5d5a67478a784219bba2541b5b3b025d"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "27d1fb006a37be6f0026dda327ad1f00"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "4f2a862be308df299b69566ec06ee9de"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "3fb65bd1ede491886fefbbc9b7f3e8cf"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "cbf28a1d37cd55fa7cfa681124d26a4b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2a331a2472d3dfc1552ebd10e4d10e5d"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "9954e0ca01c4c96c5a6f3fa627bd40d3"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "bae1ca2d02f81db04f99c08cf9d41a8e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "8ae4c5c289a069b761ee5fd00315e812"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "fda97a1f539e055f645e35ecbe2706e9"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "5535ce9b6d2612c6f74a391a12dd66a0"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "9ca7ce493430ec54106b434accf588f1"
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

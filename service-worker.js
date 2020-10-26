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
    "revision": "eacf3ff475be6cccb6d2682afd8e2ca9"
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
    "url": "assets/js/14.fa495985.js",
    "revision": "a03c6e3f9506ca3029e4c08752320a68"
  },
  {
    "url": "assets/js/15.126d4f3f.js",
    "revision": "bd43caf8f64e9fa54a3e809ffa71c2e2"
  },
  {
    "url": "assets/js/16.45f4c99d.js",
    "revision": "bd41a25568be0e636df08445b178fde9"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.f52d73e6.js",
    "revision": "d6d7d99e346cf9185bcd1729b3bf1ddc"
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
    "url": "assets/js/21.e2000a7e.js",
    "revision": "494cdde99aee4f4fa0173df4b8e4beb7"
  },
  {
    "url": "assets/js/22.1f42f207.js",
    "revision": "03a237f301d87d68b1a8e906f9c1953e"
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
    "url": "assets/js/25.85e43ec5.js",
    "revision": "185a9336f3da1656ae27f1bf2ef86a5c"
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
    "url": "assets/js/30.be609458.js",
    "revision": "e197eb9b957cd370680137288ef9416d"
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
    "url": "assets/js/app.726085ed.js",
    "revision": "2f85d5fd59bbde402b75431e4cc1cecb"
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
    "revision": "68a08fbdba1ccb919e8670884b4c774e"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "bd1e7cfe965d030e7d26ea4772ca3f91"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "7cdc0a894ad18cba4fa36b5c8fa27d15"
  },
  {
    "url": "guide/contributors.html",
    "revision": "be3a0fadfa58898335b078028c4ac239"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "89dc8a81b44ffd08f3cb9d4440388a96"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "51e8a8d9fded307bea930f7af4e04a24"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "08b3dde58ffbcd2a2788c99751caf971"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6b1132d0ed60715ba9ddd7ebf5335b20"
  },
  {
    "url": "guide/index.html",
    "revision": "a92a7a3386e026bbd1ef8459231f55fd"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "c2a768aa8fff16fb7289530af2fc1669"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "9aea724ba63a95dfe4c763638c4b66ac"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c48e633eb9159ac65240e26594c6be6a"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "8878e9cecaa3762fcb24aec2e0c6de0f"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "4cda62cb2c5d3b810691a5c1d7f34524"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "75159b0d9f17de8ec160954b9866c059"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "096fe44b94d5d6ca00ad84715223cd62"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "537996a4fecbf5ad156c1c09b94a4d4e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "5ea522be3b1da00ea0cab717ce218a8e"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a54b7caaa572f9297cd992ea162d1041"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "04c6259978c879bd21f27a2f6c1c9701"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "59ca217b63abaf0793d0ff43a577f870"
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

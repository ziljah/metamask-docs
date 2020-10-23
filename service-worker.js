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
    "revision": "ff55b000da7e57edd13489b681b6e37f"
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
    "url": "assets/js/13.1845e232.js",
    "revision": "44f25df4833532d7df664280f60fcd60"
  },
  {
    "url": "assets/js/14.fa494f6f.js",
    "revision": "abbebc0feaf0b8efe158027cfb2da98e"
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
    "url": "assets/js/18.f52d73e6.js",
    "revision": "d6d7d99e346cf9185bcd1729b3bf1ddc"
  },
  {
    "url": "assets/js/19.6d44b058.js",
    "revision": "513483b62ae907786d465a8c7b5e7dbd"
  },
  {
    "url": "assets/js/20.2b672c5b.js",
    "revision": "48e8150aa8701bc77acdd18f5b56ed65"
  },
  {
    "url": "assets/js/21.023af1e0.js",
    "revision": "9fc0975fdffca47bb91480614ebf808d"
  },
  {
    "url": "assets/js/22.56fe24ce.js",
    "revision": "30b4e2aee3ecd619f8f935d9c779fcf6"
  },
  {
    "url": "assets/js/23.455c3ec6.js",
    "revision": "23b5e8593c53c89e2a7dc880bc1f5c5b"
  },
  {
    "url": "assets/js/24.8327bc74.js",
    "revision": "4a9b0298027937ebcf61331f50cfbc5b"
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
    "url": "assets/js/27.db5bcb9d.js",
    "revision": "3f29a7594ab8db692102e6f267949878"
  },
  {
    "url": "assets/js/28.aa56dbc3.js",
    "revision": "a7b400e4127103b2a2fe25acd9425c45"
  },
  {
    "url": "assets/js/29.ca71c319.js",
    "revision": "6cb5ed717dafba11a2da0d89c84c6c26"
  },
  {
    "url": "assets/js/30.a051bbee.js",
    "revision": "435809cfc7af53f8c342dcfc74f7dcb5"
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
    "url": "assets/js/app.244e0b16.js",
    "revision": "bfac9db173e5efbdc5414d8539e1b367"
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
    "revision": "a5d0d91c9a5d52ea0f8b122a87821d2a"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "155109ac0725f143c11d51aa3461e43f"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "2fdc541585dfcc0de0f39a1b17b7389b"
  },
  {
    "url": "guide/contributors.html",
    "revision": "6af774fa418aec4f2e801a65a19bf25a"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "5b8a8822a4bf67da902922476346347f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ac1a4c347c4e9f82e3e6c5adf84db67d"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6e38b73667d9ede2d15b56dff2d93a67"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ff150c210b29163fa62cf13bfc720d03"
  },
  {
    "url": "guide/index.html",
    "revision": "1d763a9f51af9bc9fcfcb00213efcd76"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "eeb5dfaca8fbabed8ee4bb3f3b3d0789"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "da67bef9d544927855eda15d31fbbbcc"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0f6a712e8577401c969a6d9ba252b4b7"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "c834eeab4fa60838fea7b1171fbfd9e4"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "630781cfc8ba7acc33fd74558f1ae8c7"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "36d33c21a53de14658252c1dbb16e339"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "23c468494dd99d765ca51f103b24c633"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "a98590787126d5c4ed23dc0d550be0ca"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "1ecb440d97e0a3be5bd096c13549d47e"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "866fdd534948fe92a149abbccce8c4df"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "e26c2e465e8dc1349ed4464c1a9cb273"
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

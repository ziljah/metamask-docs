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
    "revision": "9b1b09970464acb8e0124b222f3e1b7b"
  },
  {
    "url": "assets/css/0.styles.136e0e71.css",
    "revision": "cf5a8f9622999aeee52cd1d33da709c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.62f8824a.js",
    "revision": "0c01aa31e378016576e86d9ded0ffbb2"
  },
  {
    "url": "assets/js/11.1d334f84.js",
    "revision": "7269f599fcbe8c7c9bec6c68bd9d4f1f"
  },
  {
    "url": "assets/js/12.134edf91.js",
    "revision": "6831c5b8d341f31f544caad3493b5006"
  },
  {
    "url": "assets/js/13.43435ddc.js",
    "revision": "8f254b9d34fb11a840afd15642c580f7"
  },
  {
    "url": "assets/js/14.b8a0ac1d.js",
    "revision": "f62ea58682faed905d073266e9ef754b"
  },
  {
    "url": "assets/js/15.e4df139a.js",
    "revision": "ad57c05b1e7774d5a62fd791c9fe583f"
  },
  {
    "url": "assets/js/16.9012ef23.js",
    "revision": "b9425e77a79897e81a8063a3d5d21c48"
  },
  {
    "url": "assets/js/17.66309074.js",
    "revision": "cb659f3603482ef662bb33dcfc1e5345"
  },
  {
    "url": "assets/js/18.58338228.js",
    "revision": "b76fb86458c90eddc63af172c1f448e0"
  },
  {
    "url": "assets/js/19.0b26a6c9.js",
    "revision": "4281b5b7e4b425249a99e78082812f5d"
  },
  {
    "url": "assets/js/20.55813330.js",
    "revision": "f29df24c07a8d8b4c331d0976dc1a5c9"
  },
  {
    "url": "assets/js/21.942babb5.js",
    "revision": "5b98b6f0947ec0ad073e3134528ca2a3"
  },
  {
    "url": "assets/js/22.ad70f6d3.js",
    "revision": "51e81ec48ca5a1ad86f0cf6d239762f9"
  },
  {
    "url": "assets/js/23.0b25d410.js",
    "revision": "2d9deddb6690a0c91c77554eeb7853bc"
  },
  {
    "url": "assets/js/24.64a81807.js",
    "revision": "481271af72560e59564046bf49efc1df"
  },
  {
    "url": "assets/js/25.242e02a4.js",
    "revision": "1450d96db1510e8bd90ca226d6a201b0"
  },
  {
    "url": "assets/js/26.124faabc.js",
    "revision": "fcdb6ca3d3e88de3055c73a83fed6567"
  },
  {
    "url": "assets/js/27.0ac95ffb.js",
    "revision": "f7d89a77a8338dcd2ee46902c404331f"
  },
  {
    "url": "assets/js/28.2f8fab71.js",
    "revision": "9c73153433f020b9488e648f86eafaca"
  },
  {
    "url": "assets/js/29.85eb6db7.js",
    "revision": "37097a8006bd87414abfa415751cc644"
  },
  {
    "url": "assets/js/3.706dd5d3.js",
    "revision": "588ca0e5b6a3884b4dfd3c42c7e27194"
  },
  {
    "url": "assets/js/30.e58c5899.js",
    "revision": "7eb22d9a88c9bce3f22b608599091934"
  },
  {
    "url": "assets/js/4.7d38fd43.js",
    "revision": "a1e282d8a6dd8282d2ed841ffc43ef30"
  },
  {
    "url": "assets/js/5.a9f95618.js",
    "revision": "6037c33f7a7cc47c3e1dc811ed3c813c"
  },
  {
    "url": "assets/js/6.df9aa455.js",
    "revision": "394aa6c73de49d83fda7660f9d7a731b"
  },
  {
    "url": "assets/js/7.53c339ea.js",
    "revision": "96684965052e84ef43e38e2d4de24d73"
  },
  {
    "url": "assets/js/8.dfd83fe9.js",
    "revision": "7a2bcf6742375d383cf2d0c83fc2cabf"
  },
  {
    "url": "assets/js/9.f64036f1.js",
    "revision": "424a0dcb1019f027650fc057a4fbd5ac"
  },
  {
    "url": "assets/js/app.505937cd.js",
    "revision": "5367c46cf42872ce0c8fff0515cf33de"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "6a94aafba0ec9be106f956674ec5e01b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "5befe89384dcbb77fa1d405cc52d6142"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ebf2baa7d6f13a87ab05b3fd80b2cfef"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "a25b9c8c37ba60ae0b40c723e4717b32"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "1bb6fed36ba59f0dc5c913cb7a467e35"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "bcd6e73d37f778da94ffd7fe507a1703"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "67051c5b55d751ec6414c3f837ac4921"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b3f1fbf573b93fc6f1468298c5b7efb3"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "181834bed48a166fbbd2273c85e7ba22"
  },
  {
    "url": "guide/index.html",
    "revision": "f7a45502901c6321f12d36c5ac6e61e5"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "1c03e8c73c14a7847eedc744252f9263"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "40f71a7fa1aa18c27eb7b37139c64c3f"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "2adc9ee09b5f2bdc79191b05303f477f"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "1aaa864debd6982542176b03b9ad1917"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "d2d284711bd59405f40a5f2c7e686b32"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "cafd886d395a278617aad0c91a39ead3"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "fcbbbcdcaedbbdf40c59b1ddad03a51c"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "2fb33849e603b47a5db15cc1f8e337bd"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "502ff5072487837afdeaa66246cb84fc"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "f670601fdc0a5c8d149dc8a5aabb2c87"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "4443c949c5a94b7acf3673d38e0a7ea3"
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

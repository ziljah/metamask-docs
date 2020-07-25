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
    "revision": "97b60abeba8d1a97f31c56db1682843f"
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
    "url": "assets/js/app.363222cb.js",
    "revision": "c507f8a7beafbf2d6b2c0b0be133da0b"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "a9d28792a1d1eab3f2251cfebeca717d"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "15b55ab065c2b0536dc20884521e5862"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "150f121c794785dc91c6d322115be63a"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "06fabef25458db29885529018eddc18f"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "fa2c5652b54c3a275d98a4157f487beb"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "083c631ad55e7f42959c9672a5907868"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "efd4671766b6f636ff0acf149aab3a9c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6f0cef31980e81ea6598d76a98b9385c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4bb1d1c2b217e090859101728fb95e79"
  },
  {
    "url": "guide/index.html",
    "revision": "ecf31a2cf6f6ad86fafd785259d13231"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "02e334ff36486a23f270d58ccedfedd3"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "5f3b374c1bd0e449e3468f20258dc7a0"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "ea0bfbc0f7b01ae150b16afcdaab6c5b"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "27d22d0d16a2d871f75eaed567b91e18"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "51668c074b0451b3ca7bd278c5223709"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "6614b598b888278856544c41dab4a1fd"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "071fdb40b35d6619fc8a2b02c30884c9"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "e34964b53c6eb2137ba99d250cb94bde"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "5040ed0d580ce018762aa1d51284e981"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "530bd1f53296a35fa0c3cdb50e584fc7"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "187608e484944cdc02e508ac24b26cbd"
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

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
    "revision": "3b554916cc4c0c582df92ea8312c29b6"
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
    "url": "assets/js/17.0bb98986.js",
    "revision": "4243bbe00855e1a8c9ac4a4d154a5f87"
  },
  {
    "url": "assets/js/18.88519165.js",
    "revision": "8dc06e2e0f37c2c551c75b1c85695861"
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
    "url": "assets/js/23.29ed66e9.js",
    "revision": "6bed47776e3fa009a75699a1b5df4768"
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
    "url": "assets/js/app.cd6fd3db.js",
    "revision": "7207f14591b590d76ea3acf654bd1c2a"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "db43c811261373127a662a90bdf2eb47"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "46850a7507bc7bae0af0fd5775ac8881"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "e08c76db4a75697ab6803d616418e8e7"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8380f785699e371ec27aa5bdc738d4fc"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "86cd0f0e75babef8926bd8857598d628"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "c138aa95a0266b37c39231a4ba9c3981"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a939985d5da851f210f1b1bfe6f5d362"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "cfe8ecb6b466a5186da7b37a9389aa99"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "405c5de00d648823948b3fdb968d489e"
  },
  {
    "url": "guide/index.html",
    "revision": "d2251d8683ac5d103e4de1f022cdb776"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "48697011c247a4ddc9ab53f8d1f2547c"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "9dda7062546c85c4872fcfd728f6d908"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "68459c586ea068d4daa5dd66c1fa6d32"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b5ddae19aa1555742aa545edc1dd78e2"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "3e9e295cb13f6611ba14fc06a93562a5"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "4db92667cf900ab4b5148be48dfc5ecf"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "9e0c2e580154905f0461f8232608a32a"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "eafaeaadbb60dea56517feefb0f50fe2"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a6c66b3b8d921a33a4aedb4742ef48a7"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c28fa778fdf883342f82e61a993f45b4"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "e7942f3531465b10f8a8de33b4579a2b"
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

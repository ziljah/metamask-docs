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
    "revision": "02b66e4cf22e96bda4ad01a74882dd65"
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
    "url": "assets/js/17.15237de2.js",
    "revision": "f35e18f2807c95e57e7209504e1dc6dc"
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
    "url": "assets/js/app.95116947.js",
    "revision": "1af10fe0ba04164cb45ccf4e6b39a0d3"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "ff981a0abdbc2ab8994304c960bd8f7d"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "afd55ab5656b8c001fad0ce885401300"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "f8486b51dd629dfbf1bd01ff7146e8d1"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "5f970b1381192912d2a073b23d8fd1c5"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "099c9bab69741081acffce4db15caaff"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "fcad79e768f82cee212caa8419f76f3b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "257783f235a23af50907e37572f6d5fe"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "0b4dbf01c562d30110298cffe3f3ddeb"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e444104326211c72399d80a83569122a"
  },
  {
    "url": "guide/index.html",
    "revision": "6c6222ed08d3a0d61887793a664d22a1"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a3c44418c2fc7d7e215b4339e0ab456a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "30b5eb9dc1a7a3270f61deb1fe630d7f"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "a8f70fc2816ebed2c327f0e89cb6fa7c"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "d292cff4a6321a0787b14d26ab39a273"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "cc86c938bce0f23d0fa1ea39fe331882"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f0343d7170cebd33f3dfe950b5aaba57"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6454daf6f3a5deaf406a27c36db35616"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "7b6a6d48d114a5b0f60975857204805f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "e10eba13b89631a2459df526fb8ba1a7"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "24bb85da8417164f958a50f19303b18f"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "b11b22d116d02cfe0fc9daa38ddf5f26"
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

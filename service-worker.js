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
    "revision": "f322560ffac6bdf0b5d44cded31682f8"
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
    "url": "assets/js/17.3844de08.js",
    "revision": "69e9f8f5002d668a151b4c2a691099bb"
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
    "url": "assets/js/25.6e5a5f5c.js",
    "revision": "6701314d51afd3bc8e779a538a01a45b"
  },
  {
    "url": "assets/js/26.dd4cb312.js",
    "revision": "6da0069c33690a064e966f6735f0be16"
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
    "url": "assets/js/app.17ecfee0.js",
    "revision": "269eb6727ae8ccba0aedbc0690cc4180"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "60dcc886da8b3a9350d2fd409cf9c7be"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "fa409e0806c61fa115ac8d580718e44a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "5fdc637c1a95a46dbc18f56f562e49ce"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "717cddfe2876e2f3ee515f8aa09bf250"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "eeb21cd796a7237f0ef21382bf5359e1"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "c5673cf482f24014c509cecca590ba29"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "490fb930feda88767ff8280a8c4fb7fe"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5f491be73133fa50d37405ace3ff78ca"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "2da4a3e60c659d70c4c3cb07a943145e"
  },
  {
    "url": "guide/index.html",
    "revision": "587fa839094114acd6a025e11e328471"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "0841101e1cccfb69e791ab9fbd8974de"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "a890c36b37c6a155388c766f54d1228d"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c3e9f7654e90f019b26b61f88ed062e8"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b8c4adfb06e72d37d220ab970fe5f378"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "932bf27c9b7e1fe97ff89ff540be3417"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "8acda86f4a79f378537fa35611fa4362"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "19504ac982731b74454c81b5a2602908"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "1fc94356bcab17829cbff20b5024ee5c"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "fdee14ce52e582b2d3fab4c95e7f7d40"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "4ea0882f3a93961ff8b7c232b71cc290"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "4141260434a3f9faaae142de9cba00dc"
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

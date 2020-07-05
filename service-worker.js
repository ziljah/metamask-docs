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
    "revision": "6b1efceb181c76beeefd37fd0c8dc217"
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
    "url": "assets/js/19.0cdf8d8a.js",
    "revision": "92cafec0156c3c698105af9ddea0decb"
  },
  {
    "url": "assets/js/20.55813330.js",
    "revision": "f29df24c07a8d8b4c331d0976dc1a5c9"
  },
  {
    "url": "assets/js/21.edc56f90.js",
    "revision": "f48555d67a2f7e5640e2679287860a8d"
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
    "url": "assets/js/25.8ae8a4a9.js",
    "revision": "e5638321b99069f5f4f95d8766dd8037"
  },
  {
    "url": "assets/js/26.b98d5475.js",
    "revision": "48dd1815a30e3e116e4362b813df95f2"
  },
  {
    "url": "assets/js/27.fa4e7af4.js",
    "revision": "fcc33341ce1d30f1fe7881fec7d2d101"
  },
  {
    "url": "assets/js/28.febf898c.js",
    "revision": "aea70730b8122abca54b4fef565b699f"
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
    "url": "assets/js/app.59fbd03c.js",
    "revision": "7b016aad8dae7e37d73d9229d3c019ac"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "2b775e4ed0efb63900b134572961faae"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "604e7cec92e79ffc11f7304ad3930c36"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "f3b7446351219c70eb4cc32e271bc434"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "0e8d27d6f2858333990a89f4e1cf3304"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "0e1ab88fdb9a6c881dd100d8994f0502"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "f929ec6350d5434674751c8fd2c3f324"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "6909fb4032fc96eae81cc04d1d97e2e2"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9589ab8ee42da59e988d5793412bb8e6"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d7419026ea2a33714d580e7caf91c62c"
  },
  {
    "url": "guide/index.html",
    "revision": "20b435d6867942baba0a7f24365b2966"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "78c49c99c95efdb3f630d493a1c5d3b0"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "e933428b78ae3bb4686a21706a54ee94"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "e0b94c3707f949f54af2dcbbc204cacd"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "8200bef8b45e7f6f6780350324f4bb62"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "6f6329dce37bc56dd721a03e56c7fe68"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "a2202506dc2febaa2ecf9debddf3234b"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "e3465162a49ba603b86fa291d285201e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "8461716913ae62d310fbdef7e4191087"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d00303b0187955db75cf0e373f81fc66"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "0422867f2c159982cc4106ba5e70b32b"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "187db29d9bad95cc76073688a1dd2560"
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

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
    "revision": "0b09818fb605c6db2cb7d90406d49303"
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
    "url": "assets/js/13.8ddc8182.js",
    "revision": "9c3fe43a9c04040182c59986fa2c8440"
  },
  {
    "url": "assets/js/14.6e41f592.js",
    "revision": "1e3a76fa74b695ce8e0611dc505f53d1"
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
    "url": "assets/js/20.cd37cfcc.js",
    "revision": "118628beeab5f5f2ac6c16bba881a020"
  },
  {
    "url": "assets/js/21.89c98f19.js",
    "revision": "908eaa1d9303f2fa8fd74e95f267495c"
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
    "url": "assets/js/24.29cd539f.js",
    "revision": "ffa47a1ed39154c1cb305e3a6002fe0b"
  },
  {
    "url": "assets/js/25.35fc0525.js",
    "revision": "7d7b08f35388f52f415a1a473aa8ad07"
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
    "url": "assets/js/app.474757b0.js",
    "revision": "5692c2ba7dd8138ab18f5a5e60d673c0"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "a98843a4db18eb0ac0346daab083329f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "0692d46104f25d4ee9c0cdc1886e20c0"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "d19d8a48e827d801ae64a4f580c4811b"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "bdf7417871681a92f0e49c2546f2515e"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "868a9b6979f35c935c9c02e299fc7cae"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "fe8872237886b339560217aa52ae0602"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "2bf5d011c7f7bd6d1f8828a5dcf0d0fb"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "305503d19f40eef3963c357c6ec7ff51"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ff73c89e0c00b3299487c38233318eb6"
  },
  {
    "url": "guide/index.html",
    "revision": "3d5f393c5b2fb8be883c103f0e6a4d87"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "719482e7da02641838e4f077f98da8e4"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "016e05203c8c45f1e5ac2ede053124d6"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "628f2ba57422b821966003bd08aef628"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "6d8eb961c88cb79dd387619da249858d"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "e607e561de5a7d84e1d6625ad750a1be"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "fce03d877c63abd706be4a30cffbc3ee"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "53458c011bd971559b8324f3a48d2415"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "fdac0db0b9916b373f57eb0a47ec45cd"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "9a3b13524375f90c9ac8b055df3968cf"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "5808ec110d19963bac34ebb07af35966"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "3fa34554009a1131e523b813a2608d82"
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

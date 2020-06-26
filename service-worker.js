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
    "revision": "4574268b9b87f1f60a1b9f1215149920"
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
    "url": "assets/js/10.2b5c3295.js",
    "revision": "667a0a2fa26dda73128c3f8374fe6f93"
  },
  {
    "url": "assets/js/11.1d334f84.js",
    "revision": "7269f599fcbe8c7c9bec6c68bd9d4f1f"
  },
  {
    "url": "assets/js/12.f443dc63.js",
    "revision": "f020f4774c5790590af790e02d2dae09"
  },
  {
    "url": "assets/js/13.a5c46735.js",
    "revision": "8b70040f4648d12eb49a6b36a0d93e3e"
  },
  {
    "url": "assets/js/14.57057ee3.js",
    "revision": "0c4cb08bccc1ac5cd4a4c48c45119ff3"
  },
  {
    "url": "assets/js/15.e4fea7f9.js",
    "revision": "d0f52d8c7cc3ca3af4c9591f332b7959"
  },
  {
    "url": "assets/js/16.5f14bcff.js",
    "revision": "9ad02082225423ff8d05ac155200a902"
  },
  {
    "url": "assets/js/17.6dea649b.js",
    "revision": "8a9cc1717e8c79d86b458663daed9f1d"
  },
  {
    "url": "assets/js/18.d2ec4ec2.js",
    "revision": "3fbc253d741ce3a115fc33aaf817927f"
  },
  {
    "url": "assets/js/19.8a7a5bd1.js",
    "revision": "36ce87b849eedf4999d04cf8f5c742cd"
  },
  {
    "url": "assets/js/20.3429844e.js",
    "revision": "e3a6170519c385ec3a825d4fb9a47a55"
  },
  {
    "url": "assets/js/21.57e7aa13.js",
    "revision": "b1484157ab4e593da62a535cfda07fdc"
  },
  {
    "url": "assets/js/22.7477a7ab.js",
    "revision": "046330ef22b6e65cea0276472ee44eb1"
  },
  {
    "url": "assets/js/23.37843c88.js",
    "revision": "bba18a611f77ad5c57d7cacd95fbce46"
  },
  {
    "url": "assets/js/24.41732033.js",
    "revision": "876f207776f1f7d09991d02d753c9f73"
  },
  {
    "url": "assets/js/25.61ba86fe.js",
    "revision": "53cd508a6e69a0ed667693b6459e4f5d"
  },
  {
    "url": "assets/js/26.6503b985.js",
    "revision": "9afb4be0e17179fc3f08c7bee9876ce8"
  },
  {
    "url": "assets/js/27.8ce2f90a.js",
    "revision": "a1f96c5183f49b7cca42ccc786f7ec79"
  },
  {
    "url": "assets/js/28.1eaa53b4.js",
    "revision": "6506e25defeddbf5fe7127b9fe9e7bfa"
  },
  {
    "url": "assets/js/29.df39111e.js",
    "revision": "dd3007e28bbd33731616b308a66f2276"
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
    "url": "assets/js/app.05fcaf4a.js",
    "revision": "9c75da1a24ad7f6c2851529f9ae50a65"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "2b876438a8dc67827598a86e39b4b557"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "66a884d1ae822c7fe0e80b20d4f06d14"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b9b7e235180ed6be05e16bf8abd280e0"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "a7a2e93364c36603484d3c8600939201"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "ad48d74e6c2f5e577e1414a0e84caea1"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "543a92b06f909a084eaaab28f0a048f2"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "63d5d9b3203d30b82de552a517674d14"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "84b03f55252a722fcd134d4e3b0c762a"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "9c095000b449be5b4b6b151413afdb01"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c7b0335ac931863e27aeb62851e7af37"
  },
  {
    "url": "guide/index.html",
    "revision": "9d8284ef3541ba53e48571837942491a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "c813deaf0fe16afba395c3f7cbacaec7"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "dd380fbe323a9455df3668027364b8c3"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "82d902bae3ee33a86e3a5568f74c27a2"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "eec8311e7fb24a393e16999a25c10dcc"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "8e1f855968632a2980a73e9bf2aa69c8"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8564fa3b69b1508970a9409e7386af37"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "1a09957c5f7550c759a7a348e5140ab2"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ad5d95ad4e953ce5b6e53cff1601cd7d"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "51c4e74095ae15465cfa41621ab40f92"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "e557f682c460ef8144574656edc1d370"
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

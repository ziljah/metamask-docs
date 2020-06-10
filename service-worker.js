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
    "revision": "5d31810d5ac6d097a4db962b2448d550"
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
    "url": "assets/js/10.97502985.js",
    "revision": "b52f2fef445fd72c0b5d6abc7366c51c"
  },
  {
    "url": "assets/js/11.1d334f84.js",
    "revision": "7269f599fcbe8c7c9bec6c68bd9d4f1f"
  },
  {
    "url": "assets/js/12.65f4840f.js",
    "revision": "b07ff6f26f5e42b13eba3660f81c6385"
  },
  {
    "url": "assets/js/13.b3354cdc.js",
    "revision": "28d13d0737fa6b32e9e24784178db47d"
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
    "url": "assets/js/17.d00efd8c.js",
    "revision": "6394d499a684206340924bf54c6cf8ca"
  },
  {
    "url": "assets/js/18.9fd821ab.js",
    "revision": "b3df06da98932fa3f5f2957ab98c49b3"
  },
  {
    "url": "assets/js/19.b4594e73.js",
    "revision": "572f51552f88d51acd5b58ee9ac1e6c6"
  },
  {
    "url": "assets/js/20.e6319804.js",
    "revision": "5bd2fe4e0fb351953ed8d8c7ee3f8f11"
  },
  {
    "url": "assets/js/21.c6e357f8.js",
    "revision": "a616fc4bdedc650324e678472120dd6b"
  },
  {
    "url": "assets/js/22.9b502012.js",
    "revision": "4b53bdae092e0bb2a5e524613d3b73e5"
  },
  {
    "url": "assets/js/23.018b6db6.js",
    "revision": "a86202d0662a8dd7aabbed4cff38414a"
  },
  {
    "url": "assets/js/24.ea8787e8.js",
    "revision": "7edb417fc742a106e6ddf141072d316f"
  },
  {
    "url": "assets/js/25.40ec03ac.js",
    "revision": "ae1bfe9849b89d09d36210c45710078e"
  },
  {
    "url": "assets/js/26.e63bab58.js",
    "revision": "1073e81c567398e6e1bf95abd85824de"
  },
  {
    "url": "assets/js/27.9cadead1.js",
    "revision": "20b8a5b850e973509168a983aabcafff"
  },
  {
    "url": "assets/js/28.006843a0.js",
    "revision": "16995b7e2486ab37fd57377494cc5d33"
  },
  {
    "url": "assets/js/29.a24969ca.js",
    "revision": "405c325a9e50d72b09a6aeee2edd41b7"
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
    "url": "assets/js/9.64544878.js",
    "revision": "f4663330dc281279475f14d15d41ca1a"
  },
  {
    "url": "assets/js/app.137d6ec9.js",
    "revision": "764593b301581fc3ed611f10ce715ce3"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "bd68cc54835adeba03b41366e7d5b00c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "69e2257eef5392443ea08dfd508ae15b"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "7d04d1b82d87dd9a0304d521ad777516"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "2b258aeee448159165ad1e78c607c65a"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "9096209362ee5cb23fe0e4bd45a1c16d"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "3814018f781baaedd7d9663e5d651f7c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "73577eecf65dbb1dca3d941d3d9a1264"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b94e50597e1c8ce25550effe2070eb4b"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "b8ef50a6d2d536c0a677f21e646c1749"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "97eb1950a85fc1579e647c3f9bad3a5f"
  },
  {
    "url": "guide/index.html",
    "revision": "4454f3dd79c425bd61d85a5690f49541"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e29b10519a31640fd50e5b326e2f000d"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "980308aea3273cbf756b40f4c0ae8b1d"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "bf6cb3b04360bfa000c573b464b4d6cc"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "564eeeedf6122160e8443e22562b0e04"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "7b3bcb1df5f372268077147fe8e5206d"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "2d0887f259b12fa204824f264df16ad6"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "f5e24f31fc11a64c1adf3b1cb2ea86a1"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "56cb0d0f158660715d5eae783e455ccb"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8bb741c284c3a70aaef737ff1bde8590"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "3a1980d402c08d9fe30039ee5f3b40c1"
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

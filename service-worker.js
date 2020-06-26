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
    "revision": "97ec35207ee344ba6412cc96df015f3e"
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
    "url": "assets/js/10.f562802d.js",
    "revision": "2ec9a987cb56a7d7488dbfaea593356c"
  },
  {
    "url": "assets/js/11.39c92908.js",
    "revision": "bf7926afa92d469dc9c0e9333019e25f"
  },
  {
    "url": "assets/js/12.a881f36b.js",
    "revision": "e6583bc5f8d27528ab0529adbb6ec771"
  },
  {
    "url": "assets/js/13.892091d7.js",
    "revision": "f7ed89c21be0220d78b5340a2a0c987e"
  },
  {
    "url": "assets/js/14.a0f6cf77.js",
    "revision": "c5feb559859b03bbb313f721121f69e3"
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
    "url": "assets/js/24.4a94bb7c.js",
    "revision": "de7d991add387d831d2a2f6caeb38891"
  },
  {
    "url": "assets/js/25.61ba86fe.js",
    "revision": "53cd508a6e69a0ed667693b6459e4f5d"
  },
  {
    "url": "assets/js/26.b0124b90.js",
    "revision": "e5883b5c75e5079612e2de298c677edf"
  },
  {
    "url": "assets/js/27.0c8efd31.js",
    "revision": "01ae7e44345ed7bbdd129148350db3d6"
  },
  {
    "url": "assets/js/28.d32752ca.js",
    "revision": "7c8231c88fe870cdf96dc656dad22025"
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
    "url": "assets/js/app.6ce39d32.js",
    "revision": "0c4963477c5cf53a7cc8812248108c4b"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "7039ad17d1227d272edb6ae0b94a6e68"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a718e05d232823b58b119b06fbd1a95d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ecb77463c20ad178d60185119aedfe68"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "86e7b883831fc58714cb8670ee041d74"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "164bb90e48642ad351f650960aae9293"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "bc28bd8ef5c1c5bd974a4af2cb297bf3"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "c369f32ef8fca020a663801d99b4c48e"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "252201d5a38d25fc2e1b3d5c1a7a4b79"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "1539a9c44dc1837ed558606bb17103e5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a168d22a8102895a64c1227988326f0d"
  },
  {
    "url": "guide/index.html",
    "revision": "f0f3d3bb842a93812aafeb32de2e1a3c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "4ea6801ae19d0b82f8430ccee06d1404"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "e7f41a80f275d32766715b6c081dc5d6"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "b94c8d297655ed457fdd0c1b66cbb823"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "4b7bfdbccb5aee2a4071e7bdd0855ade"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "c5dca0370c0d331db32b3f079c165805"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "56c6d9d030f52d946895567531b4c123"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "08d6e3140129bdf9f3fc9068a43d2f02"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "0d4d78187cab3d2dd48aba9f0764aaeb"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "cd5c183ce8dc3591d6eebc0c143e2bde"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "6968ae4fb63078f99b77685842c9adff"
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

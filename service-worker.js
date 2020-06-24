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
    "revision": "e5e1b117011367f8fd215f5bb6134e58"
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
    "url": "assets/js/10.36f9b6c4.js",
    "revision": "24b304a1a8a56eb83cc0f6491bf5a4f6"
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
    "url": "assets/js/13.63d6ef18.js",
    "revision": "0561f7abfd0835acdf0d9c1471464832"
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
    "url": "assets/js/17.f9b7651f.js",
    "revision": "c3e364efd1b4c0e94c8fb1df7847b0f6"
  },
  {
    "url": "assets/js/18.325325f6.js",
    "revision": "45e49c1cff9efacb7f0620c37d4e6b99"
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
    "url": "assets/js/21.d02291cd.js",
    "revision": "65a3136d4ddd744c7b48e8e0bfc708ca"
  },
  {
    "url": "assets/js/22.7477a7ab.js",
    "revision": "046330ef22b6e65cea0276472ee44eb1"
  },
  {
    "url": "assets/js/23.21bd15c8.js",
    "revision": "42bb0a21cb525bdb3a1abc04fefe1de5"
  },
  {
    "url": "assets/js/24.d1a01ceb.js",
    "revision": "71713331d1e3da8df7563093d944b2f5"
  },
  {
    "url": "assets/js/25.4e65cb43.js",
    "revision": "e2972e39ee2dbd304bd13ba5011f8e12"
  },
  {
    "url": "assets/js/26.6503b985.js",
    "revision": "9afb4be0e17179fc3f08c7bee9876ce8"
  },
  {
    "url": "assets/js/27.a1100231.js",
    "revision": "c5377dccd0a4e1bfa8cf450ce8e9a471"
  },
  {
    "url": "assets/js/28.11206590.js",
    "revision": "67a26417571a66a7de2eb76c68bbb157"
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
    "url": "assets/js/9.64544878.js",
    "revision": "f4663330dc281279475f14d15d41ca1a"
  },
  {
    "url": "assets/js/app.85aac39e.js",
    "revision": "54795b1795857affe72a68af1b4d227b"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "002f8a8983339528787b5491a2939361"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "e68e8b35fb79060167853e6189327a9d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "815f99d96e627b2c3626a8b330b352e5"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d063c3b80e650520107b96cc06bcf4c0"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "71d225348151b5ad3688306e1bfa298d"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "2e76c71b0f1d25a49470c3dd01742a83"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "31fa1208dae1b62ebab347dae2f576af"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "ae409e4f48b7d6c4bdfe9f0e098436f1"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "01650f582f3bce7e88dd2666b5944b5e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "85f4496582c4154dda0cbd5e29b0bf93"
  },
  {
    "url": "guide/index.html",
    "revision": "033ae9eda7fd845dcb41fa33c01ade84"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "dc5544bb466f76a9038b324f6d9b3187"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "042d7c141dfa0c31dabe3e5a44835f50"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "6e8aec3e927db770f349fb1bc2cb0f97"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "28914861d005bb4155dff00ca16e7dcd"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "345431b34d511567b2683160fabcdcde"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "22fd523aa0a09989de4b4f2e89645e6c"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "741bb77ebd47b4ca1eb271ca67f5da1d"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4064c6cd0a0b20692add01760a733e72"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a12aaaaa751d7e440a59eaec1ded6b97"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "8b3543f68212a8f08246ce5b06abdbb3"
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

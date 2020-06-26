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
    "revision": "4da1e30f74cdaabbf1e67e5338eb7c3f"
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
    "url": "assets/js/12.a881f36b.js",
    "revision": "e6583bc5f8d27528ab0529adbb6ec771"
  },
  {
    "url": "assets/js/13.892091d7.js",
    "revision": "f7ed89c21be0220d78b5340a2a0c987e"
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
    "url": "assets/js/21.aa06821b.js",
    "revision": "96f633ae09af3b40a8183fe88e787fbe"
  },
  {
    "url": "assets/js/22.677e952f.js",
    "revision": "90487524da284ddc37baa6cfe23fef75"
  },
  {
    "url": "assets/js/23.3c09a37c.js",
    "revision": "901e79197a8e82fe3712df374afb4b4b"
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
    "url": "assets/js/app.93b2afa6.js",
    "revision": "a7fdb4812a61da178ff214d78dada904"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "d3edeace2120cc6ccc552b3a6b1de3f7"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b631cc5b0779492b81266c39f36b68b2"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "e527b927068c5790be4822b90220f31f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "725351da68b693273ce566e0ba0eddd9"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "83fe98ed35a67fdb0ed7a06cb9f0f549"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "098e35953385aee6945a1a85163ceabd"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "2e0983bf7aa7061d9399a3c3711c370d"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b1da290d65c26486938fa53265f3b2af"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "4a6f7cd36d652bb9f9c34e68f0fbc8d2"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a862b26b4af3252f86e820a75b0e4c42"
  },
  {
    "url": "guide/index.html",
    "revision": "19951b6df4e5287ef6536833d1c3f7c1"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "2d424515b6c952c7a57d2037d235a8a8"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "b269c369abf478e98f00e4e8cc8e55c2"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "a0debcac49a0c5265d447c9c294b8f4b"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "1eb48028298585bad6018f676c534d9e"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "4c266ee41adc046c6df1fe9a1fae2e92"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "2a5182247f23840f38f70c9484dddd2c"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "bced94a74c99e61bb1a42df149b7131f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "268a205d231be3aecdc444824f30c33d"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8391dae2962533941333d0707e3b786d"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "6a3e05193af5d42c25f8603bf6a3e961"
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

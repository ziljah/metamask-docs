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
    "revision": "2717490bd3a2e8f7fc370ecec039327e"
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
    "url": "assets/js/20.f786e3ff.js",
    "revision": "5d1902c026a5f4252f9e5796bc2d055f"
  },
  {
    "url": "assets/js/21.ae0f5d21.js",
    "revision": "2e887f3864c9450cd1e810c36a8e2953"
  },
  {
    "url": "assets/js/22.677e952f.js",
    "revision": "90487524da284ddc37baa6cfe23fef75"
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
    "url": "assets/js/25.9268d248.js",
    "revision": "2d8a088303442430a8a6e377b1b9e19a"
  },
  {
    "url": "assets/js/26.227d2417.js",
    "revision": "24cc922373d868ba75e07ee18cf33ed0"
  },
  {
    "url": "assets/js/27.f2e3d0f3.js",
    "revision": "959a5660414ab64cd5fbb00abe31b83a"
  },
  {
    "url": "assets/js/28.38ce1b1f.js",
    "revision": "043afe2e1a56d8167b1c9f6be60c9c77"
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
    "url": "assets/js/app.12528475.js",
    "revision": "bcb79aca1c8c3b051abd3bb67fceb59f"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "30c69a80df146e52352fc33c47f52fd8"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "0d77a0169c0aedf380a9e00fc4b5b14b"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "cef90c03b71ba9634ab249a30b7cab49"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4a8ec2a28daf67f2e55f510a80e982af"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "13e7cd2a94ed7e248ad3494f7de64bbf"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "6b8a7ca724952fb40941ccb51c4c329d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "991b2f9e6e58d70742555a1b3e87d86c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5204c0e7ceab627b3cdb559d4d39881d"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "0a3502260dda2bbf5756f0ef0a4d6b2b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a69103ffcf329a220f5137369b4067c8"
  },
  {
    "url": "guide/index.html",
    "revision": "91378392ec6f95e64df6f131edf30fa7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "4eee0617c9d6fe8a6804797edb9e2ed9"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "60e3dfe3aaeef8eb62541715ee18fd8d"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c1ffcb843a32387c8681692e3a4f9b2d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "96692d9d58ff50c0cdf2dec566715b01"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "064450277a27bd4c782caa7d560f6261"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "216ec731cb3fb3c71fe3a9dc08c2da20"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "1197360889ff14e47790de34e892304b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d94a12b74d21a1d127712c8c685cf0b4"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "3c5d2c16a718dbf658182cc74d4d5b75"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "29e0d31481adaff47b6a71afe3f6f9e8"
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

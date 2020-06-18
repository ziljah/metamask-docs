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
    "revision": "f219a9101a0257bdf9ab684f597a270f"
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
    "url": "assets/js/12.f443dc63.js",
    "revision": "f020f4774c5790590af790e02d2dae09"
  },
  {
    "url": "assets/js/13.24894e57.js",
    "revision": "ac64c6e95d1bf0562ee201f7b89c2ed7"
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
    "url": "assets/js/17.4c662924.js",
    "revision": "0ca98ffefb548acd4863216528a25d57"
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
    "url": "assets/js/22.969bdc50.js",
    "revision": "57fca4c7f314441084d84584cded0861"
  },
  {
    "url": "assets/js/23.af5cc66a.js",
    "revision": "e844a95ee4915d144ccdb3eb5e66156b"
  },
  {
    "url": "assets/js/24.c527aff3.js",
    "revision": "07027582a808c87449ff1de1eb83c3e1"
  },
  {
    "url": "assets/js/25.291dff0c.js",
    "revision": "3c81a01dd284c21b56d466ac82d0d8c8"
  },
  {
    "url": "assets/js/26.6ae0364c.js",
    "revision": "76a3cc530c38402399b673c99adca6a0"
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
    "url": "assets/js/app.1b2b1c35.js",
    "revision": "f68d54e3119643a10135e63a08f27d51"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "112e736f2fb18b17b999abb68dd7cb96"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "bc75ce413ff7edf52ea421bf2b1fe179"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "09776862186d97a7d9e313d0f93d080d"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "e6a8fa3170e8a3e4773211fe40382b88"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "0a0301bb66f0b937452d6b23b92ddf93"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "abac0a875f60c6ac723efc6095fd5026"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "f9b42fa5c27f147b25196a60acef0462"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "e27b704a68ddd15513c1d78946862cfa"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "1aa0830954019fe1bd80263242e0a019"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e86af5f12f8267393c05afc2eabe6f13"
  },
  {
    "url": "guide/index.html",
    "revision": "1e283f3ba718623e561c50b95dba2f7e"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "465e6a951d63ddb2e16626a5461d492e"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "5c8dec66d0ea60ebabb177c58cb62e6c"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7e6dc3b7ecbbcba69d59a65a53cd5753"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "9da9f3a2d4a934086e2f7c87dc5f066e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "f88b25b67d6354c6bc2a2c6a9e8d9ca4"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3558d535816805d31d0f269e7f9028a9"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "fbefc1b9f3efbafd41f5ede81d8bdd51"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ccc17da20f66a2bb8fb41006bbebe456"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "1a11ba4ee5d351ac87544ccc64216b67"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "c357400760b574bbb27a9ef1deec73e4"
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

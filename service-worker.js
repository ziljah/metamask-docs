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
    "revision": "462a7bc065d38e0d9c9736211870f1e7"
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
    "url": "assets/js/10.4cc8e6e0.js",
    "revision": "10faf040c63d914321ed601f4960f400"
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
    "url": "assets/js/17.a7a8270f.js",
    "revision": "ce541a6de414ec808e4e33c55f12b8e0"
  },
  {
    "url": "assets/js/18.fdb261aa.js",
    "revision": "39af213ff6ebcda2903e9dd0dee6f491"
  },
  {
    "url": "assets/js/19.182fe59c.js",
    "revision": "9827a3c627a9debc5132909d7494e0f9"
  },
  {
    "url": "assets/js/20.6813f397.js",
    "revision": "4fae66aab22a8dee430d00792e26d6a3"
  },
  {
    "url": "assets/js/21.7f2c3709.js",
    "revision": "fc7a5548c42e91210040c6dc40fa9e65"
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
    "url": "assets/js/28.9a65aaf1.js",
    "revision": "712152b85ccb99c8cfd6d4dc3edecc43"
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
    "url": "assets/js/app.b5a199a1.js",
    "revision": "aff4fe33b17b2f683902e3c033d8b65c"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "2f2e2ab06f262e02e02b5e4384042801"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "e3d4bf31d8ed7b734c8581ed3741fad5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "a8d5435e0fa61447a1ed5f013bc15301"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4a6b6cceaff7d23aa974cae0a7f148a3"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "cbde247eeda086abd61df879aa3b6778"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "a51f59087db59f21452552e3bdc4f0b0"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "cc8df5355554157b0b21217d01591bf9"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "d598093555a389e3c4b6416d6b1d5d58"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "3fed197bebab8d521ea28d2c36fb27eb"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8d3f5c035d5e7010ebbf2a6671666529"
  },
  {
    "url": "guide/index.html",
    "revision": "88b78a5a61bec5ae6ed47b93e8b85977"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "0a70556e644796d160c23ae02d7feafb"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "62f0c41f62f71250d904b9ed4df9330f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "19fe1650ca7aef951093b5b1178714e0"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "e68b283470708bbec24bf0ff49d5b424"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "47b9d5f61ed7971b2762ca526eb4ecf8"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "cafc6b2b74075faebf9cfc6b742e681a"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "49f176f9500f8df0a817deaa1a549cc3"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "81cf688504e22607ce4f4193e725526f"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a54f56e760f05ce4277ea3a22b7e2948"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "4e6680897f222f427f5d6da8d044ce9e"
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

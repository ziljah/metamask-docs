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
    "revision": "4346a47fae52c8b18de8616b36b0dec6"
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
    "url": "assets/js/17.f02fde8e.js",
    "revision": "27778a040a346b0e6b4fecdef2ab2ee7"
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
    "url": "assets/js/24.6f4dce68.js",
    "revision": "64d716211e7c22ee53011589db2884bf"
  },
  {
    "url": "assets/js/25.5305a0aa.js",
    "revision": "3dc7b50a2f5ff70bc065136d20193d34"
  },
  {
    "url": "assets/js/26.227d2417.js",
    "revision": "24cc922373d868ba75e07ee18cf33ed0"
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
    "url": "assets/js/app.f58c2035.js",
    "revision": "8af77ff90150ef8b1e8c685693976eba"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "baf727e18f190c0c8284259b1efce892"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a25f47cea68939d05c7e23bc15e76c53"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "060606595fba0e44088dbc8593c6563a"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "fdbe9a4282484681461e19515df39892"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "6615a6cb1dd7c9888e881cd6238e33f2"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "2c64957a30cfddf19a7306e2e681dc6b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "895116507e1679950b86919b60c4756a"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "8874916f7595ae5480906df0629ff5b3"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "fee478983fdd27de9bf2915c09855379"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d114241de4559c4f0da739b25013e4c7"
  },
  {
    "url": "guide/index.html",
    "revision": "7f40265f70342fb22478ec20bd0dd9ea"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "c48cd7d3b4881aa7f9fcd6230995ab0e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "cb717f87ea96b1f9c1d1291f5160a27e"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0c662993608ac71fadc31506eba043b3"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "9a3a50016d04f1975e46068dd180c9d7"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "b83605ce38cb8efd28df2bf2285ff599"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "c0e903645b0432cfa82cbf569d2a024b"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "a827d0c82c4cc815f29fa6eef190b287"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c675a260a0699c47e0b8806807558ff3"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "aa26a77830b623793e67783dc9c92cde"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "f1c1752a8b6c942a0967324e0b830c5e"
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

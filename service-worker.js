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
    "revision": "d56ef8f4f7f68a786f8a8a4879f9d5d5"
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
    "url": "assets/js/18.10f862c7.js",
    "revision": "45e879fd129716fd2a13a44516a01745"
  },
  {
    "url": "assets/js/19.f4c26050.js",
    "revision": "48b50a6ab2d439d52add6eea119cc3a1"
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
    "url": "assets/js/25.8f882a97.js",
    "revision": "0ad692c55339defdfbec2d80984ec66d"
  },
  {
    "url": "assets/js/26.227d2417.js",
    "revision": "24cc922373d868ba75e07ee18cf33ed0"
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
    "url": "assets/js/app.c48efa82.js",
    "revision": "e28106286f57a70c065909cfd47326d8"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "1e27f06296e74c87a448646fd00e1532"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d3826a512bc5f18e582c175d3dd0099c"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "bc18e597cc9ef62aff7a79706ff02033"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4153b07ac33670ac9a9bdf9cf439f30f"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "c296d3ee16317f22d338870643c95bc3"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "5122e072ca35cebd7d202a21162dadb3"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "76e6c83bc0c5ecd7e3d3081f07aa6553"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "347952a5e19aad5b913b8e20ebafd366"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "de0857b3d224bdb42c17922af70a7fcf"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "39116c6ddd5fc113363bfef02aba0198"
  },
  {
    "url": "guide/index.html",
    "revision": "226b97694f49f271305e0a9bee3f686f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "9a6279f6d8c8d70653b1fd30f71cde84"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "5df067671b0b53a9f5d958ce895148ad"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "6c43429ac197e3c7cea83f222fc68aac"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "37a94a6dad891bd30cd74e9c730d5a7d"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "bc7bc645aaca240ff6ce2e561fb98642"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "46bd64b9e81b4f40d97c6fac6cf0b002"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "76ff9250943847c7f57f8c5a9af99452"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "64f89970fe325af9eb5752eef30abac6"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "9c6f3926c58537b8c4b25c5cccdee761"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "2e797cc8a6e6abcb860191fb4a498bc0"
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

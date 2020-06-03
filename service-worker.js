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
    "revision": "5cb2d8a63d2eea0546414ae690acda98"
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
    "url": "assets/js/14.9c1e350f.js",
    "revision": "82a4c445ef628619b9e49c7cedc7a32d"
  },
  {
    "url": "assets/js/15.0266c560.js",
    "revision": "b745a943e1b1c00917b0ba5538b568ff"
  },
  {
    "url": "assets/js/16.9ebae792.js",
    "revision": "930ed34422fa36216cef38f478469703"
  },
  {
    "url": "assets/js/17.d00efd8c.js",
    "revision": "6394d499a684206340924bf54c6cf8ca"
  },
  {
    "url": "assets/js/18.c652db71.js",
    "revision": "9ee9f0bd0eeeb63ea38be5ecff6b61ff"
  },
  {
    "url": "assets/js/19.282c42ef.js",
    "revision": "d62f8bd5ac0b7d43e51ae17b219399d5"
  },
  {
    "url": "assets/js/20.92139fc5.js",
    "revision": "d74aea3f459a09fe30b512a5beb139b9"
  },
  {
    "url": "assets/js/21.e7a750c2.js",
    "revision": "2ab7845a368f75ea17912fb90f89cf3b"
  },
  {
    "url": "assets/js/22.9975517d.js",
    "revision": "50a547da38f3b8fffeff3e135aabad4e"
  },
  {
    "url": "assets/js/23.5c275e27.js",
    "revision": "9b4e13a5afa47d0963846f36e8ffc978"
  },
  {
    "url": "assets/js/24.435f7e7d.js",
    "revision": "808fdabad915dac161a05f10ac83929f"
  },
  {
    "url": "assets/js/25.0d4cb000.js",
    "revision": "90daa0ab6cefb56ba2698da13508afd4"
  },
  {
    "url": "assets/js/26.545d7f3b.js",
    "revision": "6418a9f10b057d20efbc15b33c3fc83d"
  },
  {
    "url": "assets/js/27.6d94c69d.js",
    "revision": "4205bf94e93596c25715293cc195cc15"
  },
  {
    "url": "assets/js/28.d16c9a41.js",
    "revision": "808b67d836366e759ed6858b4096c01e"
  },
  {
    "url": "assets/js/29.5460265d.js",
    "revision": "13b144f1adc8aeba0ebd38a0bcc7450f"
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
    "url": "assets/js/app.ed2437c8.js",
    "revision": "34e5eb61e44ff368690b10d9677ddd12"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "a3a807a6353bd187dd85d5eb94a02fa4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b204d766dd3afd569c859ec66761c16d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "f6c732f3154437de4d79e9153169499c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "1ac6b4937fc83b8c228992defdeb7939"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "d35504c3d87415111b439492d4dbb44c"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "03d188a0707767ac7938629352021435"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "c105402877e43b0ba01487c2551d2f6f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "3609235f3db7164113c5baad99f942da"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "b98b983d841d32b03e1b5b4e8faae004"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "16dccbcf5b94ec5cfa2baef66d6d6c54"
  },
  {
    "url": "guide/index.html",
    "revision": "250c34dfcd5a17713b97823b8e5393fb"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "056cfd0e4d35553feebc57f37dceee60"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "7be4a67cbbe7c90219f96615b2a89c64"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "b7430c43ad0ee8dcfeb6dc8cbcc60804"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "5924f79ff384e2b9ba1a5a522dedbd70"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b7a66f857ff03e3ab452700abee24d63"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "89832a77b679e8e311e8e41020cc063e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8019dfd353fe584d1413980d4d5b7ec3"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "65ad913c10dbf457d593cfb296c36c82"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "0a083eb56e3a5d98d233ba8602bb42c9"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "0ab0f5260f4aea2b30995326d84d7afa"
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

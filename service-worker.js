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
    "revision": "ad2bd737bb3859efe566a4a36adec87f"
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
    "url": "assets/js/10.62f8824a.js",
    "revision": "0c01aa31e378016576e86d9ded0ffbb2"
  },
  {
    "url": "assets/js/11.1d334f84.js",
    "revision": "7269f599fcbe8c7c9bec6c68bd9d4f1f"
  },
  {
    "url": "assets/js/12.134edf91.js",
    "revision": "6831c5b8d341f31f544caad3493b5006"
  },
  {
    "url": "assets/js/13.43435ddc.js",
    "revision": "8f254b9d34fb11a840afd15642c580f7"
  },
  {
    "url": "assets/js/14.2fd6fdd1.js",
    "revision": "9d08ae423f0f845e3d2bd821fda35f1e"
  },
  {
    "url": "assets/js/15.c5b5d6df.js",
    "revision": "a0e8aa403c0608a32b13e38f3a250c64"
  },
  {
    "url": "assets/js/16.e5854d33.js",
    "revision": "ea2cc8d772ddd6bd5204c477af953fa9"
  },
  {
    "url": "assets/js/17.53e1ad57.js",
    "revision": "0a97136781ba73776822b09033e8b40b"
  },
  {
    "url": "assets/js/18.803b30be.js",
    "revision": "cbd28d6e5ae5e2bd772f19a97fd681b7"
  },
  {
    "url": "assets/js/19.6f048922.js",
    "revision": "c79beb610a3a22700a86209b7ebf44e3"
  },
  {
    "url": "assets/js/20.f36f20fa.js",
    "revision": "6e2942401471ed3548c4ace871738997"
  },
  {
    "url": "assets/js/21.156656bc.js",
    "revision": "6d052e41f8416579f628ab4f3193f8e1"
  },
  {
    "url": "assets/js/22.46407816.js",
    "revision": "5912249548a501f3bf389037f5301aa8"
  },
  {
    "url": "assets/js/23.ca5da352.js",
    "revision": "83d4bb3dc99a5e2e6ec2f34c5e2ff87d"
  },
  {
    "url": "assets/js/24.75b0ccd0.js",
    "revision": "73fb76ec32c0662544ac736286db5307"
  },
  {
    "url": "assets/js/25.e23f914c.js",
    "revision": "cbff5363f51ee29e1036830bc89187ad"
  },
  {
    "url": "assets/js/26.cf7e4d14.js",
    "revision": "2251414aba3a46b029863c2ffffdcbf1"
  },
  {
    "url": "assets/js/27.ae7ea9fe.js",
    "revision": "0fdf8083fe3ad9ba3072cf260c62ab81"
  },
  {
    "url": "assets/js/28.683492ef.js",
    "revision": "598b03ca5a35eb756e7c3deec90aebfe"
  },
  {
    "url": "assets/js/3.706dd5d3.js",
    "revision": "588ca0e5b6a3884b4dfd3c42c7e27194"
  },
  {
    "url": "assets/js/4.c915078a.js",
    "revision": "79cb9ea023b40fcfd7d3a4b7fcbfdfbe"
  },
  {
    "url": "assets/js/5.34206b74.js",
    "revision": "d8cb729830102874540ed204c3042740"
  },
  {
    "url": "assets/js/6.df9aa455.js",
    "revision": "394aa6c73de49d83fda7660f9d7a731b"
  },
  {
    "url": "assets/js/7.7bb1de9b.js",
    "revision": "99e5569bff3fb0767c2b93ea2a0afe89"
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
    "url": "assets/js/app.ba07f1b9.js",
    "revision": "8c1e07601a2f7df972988cb759784298"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "9419866ad9a473b9a3d8528de16fb554"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "f55fe32612e3f2e488a8ccde76ff3624"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "acebba520f29fc393d0ee6e61a3942e5"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "3e9a1bab0d234e90ef54f3227bbf4413"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "df6c442586e7c1d574d60fe510f3d0c8"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "06a577d144120311446a0628c0b123d4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "121193a8b7bc0198d0ad4192e45ce6ac"
  },
  {
    "url": "guide/index.html",
    "revision": "59d909fb68f8b3e8ccf282f980294c0f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "64097a3d76e1baed4ccc50db2c4ce962"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "de437c6a99b8bf59d0cc576c217387ae"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c11892b8d074acb9162b5066d61350e6"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "532b4ed8a97c42508ad374064fa6ba47"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "131cc192c8db8f9ebe44a1ae7df6c361"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3d95ce09714d0850c5f01604b170f2ee"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "64cae9291f87f48ff7a6b6e3ae558a21"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "42e93be91715dd295453100b84efd595"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "fd73895eb704e894229ce9eddfa56c37"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c11e6e309307fe90a8dd5e34543c2d34"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "16142e5414cdd67760df41fb68de5b2f"
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

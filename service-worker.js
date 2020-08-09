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
    "revision": "e688c34fcfdbc7d688f08f54b144a570"
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
    "url": "assets/js/14.cdfd95d7.js",
    "revision": "9d927c171e09f07be79e2782541299f4"
  },
  {
    "url": "assets/js/15.0bc3dafa.js",
    "revision": "54de0b5fd28c3aad5af9a88c0c637172"
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
    "url": "assets/js/21.c5820dbc.js",
    "revision": "f99b20d86e2c134f5b8f0d45110d4b54"
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
    "url": "assets/js/24.5bc7d73b.js",
    "revision": "fbe30ae73b2a5b59ad998977af491c3c"
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
    "url": "assets/js/app.85ff20a6.js",
    "revision": "efa586938789d2ee0f29b43724ba53a7"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "87d6d3895a3318e4db251a36c610c9a5"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "84d6c38e7503e3df9c4129537a84438d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "bab3b5771770e7aeab55cee247927b8e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "48f683d9e4ecb759b8cb6fe95e4c3903"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "c810d5e092bf68cbaa361b8d0207c7ab"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "0fd8911bbbcac085552de949bc1b7951"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "fae8e96af95c7d9885d8b0fc62781c92"
  },
  {
    "url": "guide/index.html",
    "revision": "123207392ce5592c406b1ff615e7619b"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "470b5b837421455f018bd1706f1a7d6a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "1b9e41c3e5e682829d85ec2379830354"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "5c0e371671639798bf10ef135d11eb86"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "23ca239f59f8f29e68ea860382bd19d4"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2a8677b7ab8d7a8232ae1b33028218c3"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "75858630647b177da2ab045637077dec"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "83514e330c9854d7cdb3946e4bde43d4"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "9ec29c1b48cb6981d7d69360c5befada"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "22a85d94adc4c11a8d3b40e0cbc89e97"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "9d06c13cfed6351981e65337a28b87f5"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "4fea5a88a611135bac89a0446916d13d"
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

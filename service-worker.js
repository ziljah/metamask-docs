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
    "revision": "2b10cd4c281c1576c79d2ee450d09e3b"
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
    "url": "assets/js/17.812632cd.js",
    "revision": "abf74301cadeee05d246679ac9b3ef8b"
  },
  {
    "url": "assets/js/18.1bb13489.js",
    "revision": "3810768c580c221d183b0711a2298587"
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
    "url": "assets/js/24.75b0ccd0.js",
    "revision": "73fb76ec32c0662544ac736286db5307"
  },
  {
    "url": "assets/js/25.d86c09fd.js",
    "revision": "9a98c8c84bdf9b6e3dca05a987bf754f"
  },
  {
    "url": "assets/js/26.8ac6280b.js",
    "revision": "f65b3c82308d403ed6589d1a5ba82100"
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
    "url": "assets/js/app.92076009.js",
    "revision": "1fbfe27eece402e53ebe48cb87964e18"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "d32be01d66f43e2d6ce38caab4c6e28d"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "665cc08f04b2351f0051a6f704d0570a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "913bace05b2934f02bca12854e01fafc"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "bbad4ec584aec3a33caf0803282d14db"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "007fd1ff32911c7cc5d821f575a1b569"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5061c95e39f7268dac1e3d1d27a8aea5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f2909ada8a2ce93ebc31881a9541e34d"
  },
  {
    "url": "guide/index.html",
    "revision": "e3f2c4803b42769dbea0c7dd5941c7f0"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b449616f59f3a6be9ad7c84e317fe8e6"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "d9b455116d730f21e7cf711e64ec76a1"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "4e230fe6c8d499f1b8e36847603d75d0"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "f1ba6d251b3d19145f82c1865a8c5bd2"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "3f89fef88b7b3e7fec9598aec8fbda42"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0ea268778fbb60db5ce88303e2f18579"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "51d54148b81be8fee8a91b5c3c1811e8"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "d089afdff803d9ead732e2d77a83f22b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c7e15a6597af22fa8c5d2a7651a2e288"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "b308b7ce107268ff1e6420399a9190cb"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "7657695d20e4795bfb1e0abdb3b290c9"
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

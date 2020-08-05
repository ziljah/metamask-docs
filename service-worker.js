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
    "revision": "0c1eaa150d8f08e6634229c23c2c7044"
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
    "url": "assets/js/14.112e9cfd.js",
    "revision": "859d557cc425eb46ed4e23c06db865bb"
  },
  {
    "url": "assets/js/15.468d8c02.js",
    "revision": "aed777a1324d644d3f96d076da6accdf"
  },
  {
    "url": "assets/js/16.35f1555a.js",
    "revision": "2d5a299a0a6d93a2d15a4e5bdbabc4f5"
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
    "url": "assets/js/20.04ee35db.js",
    "revision": "a87e62b0b4b892064b3ef80f93497ed8"
  },
  {
    "url": "assets/js/21.e1debfe1.js",
    "revision": "24f18b1eeb77c4ea7a4fca06d07f22ee"
  },
  {
    "url": "assets/js/22.987424b0.js",
    "revision": "42d0d01386a74266163dfd25e4259973"
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
    "url": "assets/js/25.52271453.js",
    "revision": "62ac09d71a51f5a74f917014a97a58cd"
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
    "url": "assets/js/app.8a1f0db0.js",
    "revision": "7a32602f330e0a2639bbe9e7dccc15ed"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "346242b233c6022bf2a91fe5c7e0755f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a5b823bb178e1ea63a6666043c505bc1"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b59893068ea911ae563ec654bc13d85d"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "32f7b1be24f3fb722d0800c25d6e6fc7"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "5e2124fb7982863659bfe33813205034"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "4f5acbf904a24fbd486afe6062c3dd83"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3faedb8e52e956620f60623b0241046e"
  },
  {
    "url": "guide/index.html",
    "revision": "eaf609d1314e5b9342d22b0ef310ff65"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a9d33c23e5189183c0b56f6475806f0f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "6c3ed062314f1c77cf72f5bfb7b4a2c0"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "15e35ad56d5e96d1e903824bf2477c99"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "bd3af1400cf5eb2a03f880c9d0f92086"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "589c357cbd018d598202ca864a96923f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "df45bd52a7e162ce69cb69343650a3cf"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "c790e7d7c2f976fc44ba1d51bfe9ebce"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "b344f35f2d92444f81505cba324a0cb4"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "7f5f95293f99121131ee5246e53564d4"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "bce8882ed8648c7ce2c165404f3562c8"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "857bb4d67db86eadcceaa9343c5e959b"
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

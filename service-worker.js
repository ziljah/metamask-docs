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
    "revision": "2e16316e61598b213dd072e3ac102ada"
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
    "url": "assets/js/17.f8a259d7.js",
    "revision": "bfbcc09ad584c6ab0d95516d48f17c33"
  },
  {
    "url": "assets/js/18.fdb261aa.js",
    "revision": "39af213ff6ebcda2903e9dd0dee6f491"
  },
  {
    "url": "assets/js/19.907d8325.js",
    "revision": "99632c931e295a59954105bc1e9af805"
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
    "url": "assets/js/25.61ba86fe.js",
    "revision": "53cd508a6e69a0ed667693b6459e4f5d"
  },
  {
    "url": "assets/js/26.6503b985.js",
    "revision": "9afb4be0e17179fc3f08c7bee9876ce8"
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
    "url": "assets/js/9.64544878.js",
    "revision": "f4663330dc281279475f14d15d41ca1a"
  },
  {
    "url": "assets/js/app.c2691a0a.js",
    "revision": "70eb8fa0bed1931480e19eb09a91b9cd"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "b80060a76253100492c762c60cf8dcd8"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "bc171161c9a7c3f854ba6a7ffd540650"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "1ca557db20782c615c6e1799270aafa0"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "adf2656d7f9eaf2dcdaced7359566723"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "491f8324c11238049af338639c965ec3"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "8162880db1ae58695eb03f74d262b5d8"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "284e17babbbceff03d9dfa1a369a4eb0"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b595ec676af4add06fead7e65ec4b6ae"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "72955d01eb619e46e734554ecc4cadc4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "287d42266f1c32f482decfc7179e4566"
  },
  {
    "url": "guide/index.html",
    "revision": "7fb576bdbe7fae4a224266467eeac1b5"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "c7fa522fcdb12f791c1ab6711f4de115"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "82d4b57dac2075777d61d07b58975f1c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "13e06c957ac2d46522e3166c27db14ac"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "55fbd5edde568e6ccd4c3a4e96b153e8"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "63322411b4436e99a0286ad47332a0fe"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "fb1555333d99a31e191a3136d92fee4c"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "0c12431bc82b66661a95039b19b5e3df"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4111efcb564b604df5eac268cd5a1762"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "20041ec030d983fd91a71d56f86d2da8"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "8249f28f6cd203c96701c7124c042841"
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

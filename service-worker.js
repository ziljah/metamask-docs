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
    "revision": "aee66ffde93efb6ea596aa13b80445de"
  },
  {
    "url": "assets/css/0.styles.43ab016c.css",
    "revision": "0092aa4cabdf35c66d5fdc293cd2dd12"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.855ad548.js",
    "revision": "ad08c4f500a167770eb3fb3958011674"
  },
  {
    "url": "assets/js/11.71b90564.js",
    "revision": "7f5c8bc345186ccaa2108f486e33d398"
  },
  {
    "url": "assets/js/12.c08b1d2b.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.7dfbcedc.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.7d0b589b.js",
    "revision": "5bc06405d10d434ccd0397fb5d185481"
  },
  {
    "url": "assets/js/15.5bb390dc.js",
    "revision": "c46d38ba85894b2f33fa7afcda4d8f60"
  },
  {
    "url": "assets/js/16.646d68b5.js",
    "revision": "a0f00de59f8b33c8c287227090c2f74b"
  },
  {
    "url": "assets/js/17.7d93e4ad.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.256e4f8b.js",
    "revision": "1092f9bca9c9f2f3dfd0b9379c5b6d73"
  },
  {
    "url": "assets/js/19.e36ddeed.js",
    "revision": "af214bf9e936a73239f7e347fe0680a1"
  },
  {
    "url": "assets/js/20.b3c0cb6a.js",
    "revision": "d0f081e4673fafc7d484b55b7356afdf"
  },
  {
    "url": "assets/js/21.1f9dbdd0.js",
    "revision": "0a3938835de2ccea1d05f060b8d9d573"
  },
  {
    "url": "assets/js/22.e6edf161.js",
    "revision": "94667b900caf8dd04fa0c5c49a6666b1"
  },
  {
    "url": "assets/js/23.f279d74d.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.e46aa721.js",
    "revision": "b602cf93bd4f8ef5925ce5f05db992ca"
  },
  {
    "url": "assets/js/25.e031bb6e.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.aa106a67.js",
    "revision": "092ef8939b9ac3c931fd8adfd134e1de"
  },
  {
    "url": "assets/js/27.bada8377.js",
    "revision": "77a511de656c108d0d04df0b083bd01b"
  },
  {
    "url": "assets/js/28.36d58b82.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.fd9595a5.js",
    "revision": "a353e9eb3c5e6d64d20344f2176c3c17"
  },
  {
    "url": "assets/js/30.c2b9bbe5.js",
    "revision": "21fc3a5aeffc5d71b9be87347826151d"
  },
  {
    "url": "assets/js/31.d4934d6f.js",
    "revision": "abe66e307d259e9eb5fb4fc00bf73c8c"
  },
  {
    "url": "assets/js/32.4eeba09e.js",
    "revision": "e8e120ffc9279c0e224083b6beda7418"
  },
  {
    "url": "assets/js/33.79686ef6.js",
    "revision": "5e207019af9df153977c16681373b056"
  },
  {
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
  },
  {
    "url": "assets/js/4.45461747.js",
    "revision": "931eedf13ec5d486e74b8df0f4b46236"
  },
  {
    "url": "assets/js/5.eeaab13b.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.90cb7b75.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.f15a05a1.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.2af9a966.js",
    "revision": "c632a6a2140a56c20a929f349d9dc46e"
  },
  {
    "url": "assets/js/vendors~docsearch.3591cf1d.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "assets/js/vendors~notification.8ec48a6d.js",
    "revision": "8c5292ddd31a027ce1a72eef945787f5"
  },
  {
    "url": "faq/index.html",
    "revision": "741c5481e80b682a4f3cc170d1c40237"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "35c3425f16d98dae27a546e518e2cf41"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "131eb8b0bf46700dd71c9efa530a4511"
  },
  {
    "url": "guide/contributors.html",
    "revision": "87c9affe3f210eba5e2efbb8f4132212"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "aee77daebbacadcafa7dde11beab40e7"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "4f0a82f726ffead7e7b3fee34b2186ae"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "455ea8319a47dad66cdb37e74130a3ca"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "45d88b903bebd6af5d27252f81bb5686"
  },
  {
    "url": "guide/index.html",
    "revision": "3f4cb82a828186de7c2574f4d296f58f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d2b8332c1169276cb3798cf5a79ffb40"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "4894008d9e3b4bbf92f16f14ca85e39b"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "5b0886edd622a614b530eb645b6ddc7c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "58fd1d0acf34136a7fd9fe23b630f382"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "f860fc3427bb9b9323eb713b068360ae"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "57ab281a786275fc3df68ea88baf171b"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "2cf7e84f6f5d2a827e0e578f013627ce"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8f269a4ee766b485a364855640287c21"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "a07666bf33f52f8d303db0e652aa8da2"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d1ab6dc71db1aeba9c17f7cdf25efbaa"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "eab7629e7f4b6a95d1a191726aee329f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "4d459b42dc3140b277c6f3e17f718d16"
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

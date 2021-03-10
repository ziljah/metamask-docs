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
    "revision": "7f1b62b3a8991c17f516661c963fecfa"
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
    "url": "assets/js/17.54f77f27.js",
    "revision": "fa7b64ca0ba4feae10b5bf7c3e1a1b75"
  },
  {
    "url": "assets/js/18.b0a1f743.js",
    "revision": "3916ab1f0d5160d90c7be9472948d74e"
  },
  {
    "url": "assets/js/19.f71a5dc6.js",
    "revision": "fcbd3b988a1ad89741b4737a67e9d445"
  },
  {
    "url": "assets/js/20.e4e8c0b4.js",
    "revision": "0a72c12f2695d763a4d4f99ce45b5fa1"
  },
  {
    "url": "assets/js/21.d99c1b9c.js",
    "revision": "070b56b6fbef09f24cb7bac116a77d12"
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
    "url": "assets/js/24.ec611b21.js",
    "revision": "bb57364211af4cb273a3e8d995c4e907"
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
    "url": "assets/js/27.d0674340.js",
    "revision": "e4daef0c98183aa0da539d5c13a8b510"
  },
  {
    "url": "assets/js/28.b47c6a68.js",
    "revision": "88bb8249c204588a79d55064ffc79fec"
  },
  {
    "url": "assets/js/29.7f03beca.js",
    "revision": "5f34a9113f366bb8fe459f4dffd4e53e"
  },
  {
    "url": "assets/js/30.cabba85a.js",
    "revision": "2a079e5003a45e2f0bb177c2d9345ee7"
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
    "url": "assets/js/33.3566b377.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
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
    "url": "assets/js/app.8ad1c35e.js",
    "revision": "dd93ee768dd4374f966542baf52e6e99"
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
    "revision": "99f144dd13010f828f6e9658f535bdc4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "abaa003540ab89ab4df3944d3605d52a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "4f2ddd3242aec00a9199d8fdf106b983"
  },
  {
    "url": "guide/contributors.html",
    "revision": "857f7fd121f298696c2314ef33525006"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "570200fd956f10d79cc2840528abd60d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "0dbd460cdeeea0c19f9d79398523ea71"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "a34f42e1d21eefe635771731f636a4f4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "eab4a5182e0d6be6c30ddf2f854f16aa"
  },
  {
    "url": "guide/index.html",
    "revision": "0633e18b5bb6ccc40721f1ea21026b7e"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "c302ae20236343f033add21b35628e6a"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "af7fd58f4f6b45599572add75a397ca2"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "be10af3790a3be24f36ea99298cd27cf"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "9020abee7e5dee4423bdb3f22ad2c80e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "1757ab518e9a38410184fdfc93d6d90a"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "e94e1609f1f91dd2e0e5abf527adb208"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "797ed82c9bf80a12c437e2d0f9277042"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "53b5c102fe48bcf0a23087e278a70b05"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "6ddb6229cf04614aff49472cf9a25e20"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4617d3dc307084d14340f325fd433074"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "b79376cd2cba7cff0d33898a9eb65ebb"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "c1666e70f6a2afdfd2da5cf188bff11c"
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

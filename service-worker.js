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
    "revision": "d92e6846ae3ee4b40deb71d5832c6750"
  },
  {
    "url": "assets/css/0.styles.036d9def.css",
    "revision": "95480bfedf282e335f878afc9b0bdb86"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.f4f01207.js",
    "revision": "33c86be535ac7501e34bfea90f818fdd"
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
    "url": "assets/js/14.3b78c06c.js",
    "revision": "2cab5d28ec0d7417233ed74e2856f81b"
  },
  {
    "url": "assets/js/15.7db4008c.js",
    "revision": "cc8f2f4e3c4b4acee1fc3d8d0489e61b"
  },
  {
    "url": "assets/js/16.5ba96740.js",
    "revision": "68489ae22192f99ff6009c04f0447caf"
  },
  {
    "url": "assets/js/17.7d93e4ad.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.3c1fd809.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.1a779be1.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
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
    "url": "assets/js/30.1bf00c02.js",
    "revision": "889f016f3565fe1268171d4b3b56f507"
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
    "url": "assets/js/9.f3bfe93a.js",
    "revision": "7bf646f34d617dd915a0d199b53ac762"
  },
  {
    "url": "assets/js/app.ca98b35c.js",
    "revision": "36cb8e49d7e2f43c7721e980c51c0cc5"
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
    "revision": "a2d09d4be1f8168e6d646d571c018740"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "6702766502d30028981ae46d13e21d92"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "d60e9d444dce6b2c16d3b943d8ac9e09"
  },
  {
    "url": "guide/contributors.html",
    "revision": "ba2ad120885d6202fece8e602037acaf"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "a4850823c6c9e673fdc2529354746905"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "6610c0f979205413ebb194acf67f12fd"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9942a6f36ad765242e2c0aebae5272f5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4a59c9a8d4a5abdd0ef5639fdd441525"
  },
  {
    "url": "guide/index.html",
    "revision": "e6034b56322968bf048f3cb8d6542eb3"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "0da4ec9a7150f19789a8ff2fa70e8a00"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "8cc7e1ceb1092ae9ee974020584c2a0e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "b46a453a13f82d0f075d304ba7f610d9"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "101a48576c988dc436d79d19886486ec"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "247604ac66102e4b92eca9cdee967f1e"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "07ba7f5691a7e589ea1a62e43fe419c9"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "41b148fcfc30b6666aea81f346c9e913"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "780ecfafe2581f3f89edb22aa9a87f73"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "08c4a9d54f7da0e7d6847db180d19e40"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "7a5a8e157a1f132ca42375cf987e1978"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "4b269faa9a475a515e9e767ec931a0e2"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5c21a7c63e48b354f2e78b0a26080005"
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

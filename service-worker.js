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
    "revision": "e4aa8f23dfba665a316a322f767efe7e"
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
    "url": "assets/js/16.904c58fe.js",
    "revision": "35bba10d19855d1f10a7dc8c5a08dbe6"
  },
  {
    "url": "assets/js/17.813125f8.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.3c1fd809.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.e8af2507.js",
    "revision": "9cbff5bc32514ce5f59140985fd54cc3"
  },
  {
    "url": "assets/js/20.5c8269b0.js",
    "revision": "fde97666c52a0c0c01cd51e10e80ad91"
  },
  {
    "url": "assets/js/21.d99c1b9c.js",
    "revision": "070b56b6fbef09f24cb7bac116a77d12"
  },
  {
    "url": "assets/js/22.07ade5f8.js",
    "revision": "d2e81a5f8ac38cd7fd4fe1acfa2b7724"
  },
  {
    "url": "assets/js/23.676075ed.js",
    "revision": "43bbe3e7676874555d726185318b3d8f"
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
    "url": "assets/js/30.50af4466.js",
    "revision": "7abc325b08afd6551ac23f8fd9d646a5"
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
    "url": "assets/js/app.5bd23624.js",
    "revision": "de6d72bdc431fd4de6918c718d061248"
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
    "revision": "5a439308380ecc326e9bf4cbafbf209c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "552987be2e01382373a7581a861bd795"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "6576aa29034170a4211d1c1674538214"
  },
  {
    "url": "guide/contributors.html",
    "revision": "8c4a8716ca90267ab5e54a1e813a6617"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8c74c34ba5991acef1e39f213ad9e87a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "44b25292946079a50e6f901931eca097"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c373bd964d4eb30bb476f8cda9d36224"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "2bdf70e1d130345b03ed558affbd87bb"
  },
  {
    "url": "guide/index.html",
    "revision": "cf8b9f59ca1944e88a4ab29eb2854544"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3b6dd9858fd656f5255f3b39cbeaa7f0"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "013af712455980ce99a33401fefed31a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "2765adb883d4b406db0d6d5d44dd8711"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "8636ea6a57b8f14684000c1ac97e3260"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a5acc022eca17695fdf6cc9c352930aa"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "3ebc1dd73df429b405e29e91145da914"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "318c33090379c0a0932cca5288a17a5f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "d79b9189c21f590aff9cf6a9e8dae25c"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "792b50e8ae116dc1913f35b96cf71f83"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "54757921e2c0bee8d031044c679878a8"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "18471234e226abf1632460b0167248fd"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "188c83e41d3c76da7c72b616c01ead9e"
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

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
    "revision": "2cd52af478e1660f0123580dfcfa5a9c"
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
    "url": "assets/js/13.cfae032e.js",
    "revision": "77d25f1f18f9ea13a742a96ecb17659d"
  },
  {
    "url": "assets/js/14.1126cec3.js",
    "revision": "02cad9837ec64aba2e8fd6acfeedd8cb"
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
    "url": "assets/js/18.3c1fd809.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.1a779be1.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.d3482cf0.js",
    "revision": "5b740d58f7692f3208ffb11554a01c86"
  },
  {
    "url": "assets/js/21.c6d5813c.js",
    "revision": "7cb971e9ec0359b71b07a7d3246559c4"
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
    "url": "assets/js/27.e4fd0c46.js",
    "revision": "124a5db8b3f384d372bfa267aead2cc0"
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
    "url": "assets/js/30.8a83acc1.js",
    "revision": "346e4a1cc580f9aa21325090ce063d6d"
  },
  {
    "url": "assets/js/31.a03deb57.js",
    "revision": "952a49f26aa8896724a57f77b07a9ef1"
  },
  {
    "url": "assets/js/32.186b6b3d.js",
    "revision": "8b7b5f08a7858965e7260c17f0c45b3b"
  },
  {
    "url": "assets/js/33.b3018c81.js",
    "revision": "c022921ae9e2db411307c1eca59ed649"
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
    "url": "assets/js/app.c03dcab7.js",
    "revision": "02c3beaabdd48cec18197865dbdc51b6"
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
    "revision": "02bfea92d51f8c4fc87f67e6e0ad4a96"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "26bb5556f0ae4c16b5286b5623044852"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ebab2b28ad3cac43ba097d0305c7d6b3"
  },
  {
    "url": "guide/contributors.html",
    "revision": "b6ba975182b2c6a8d156d36ad9296a93"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "1ce8df0c8f9b2ff221926b51c74fe0aa"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "d33dfacb14c38f8501dff428d8339ee1"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6c05464fdcf80fa8618cf98e684537d4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "593634db4eb88604573749aa4e81c23b"
  },
  {
    "url": "guide/index.html",
    "revision": "9982495dd4a5faca6c0a7901d828da2a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d3acdef4074f517200116f664af17e72"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "f356ecab0217aa193651d12530c0b50b"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "2aed40fa1fa1516c6bb4994ab63da519"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "650fdd1a46b12d11a0acd0e29ae1ee29"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "732f846992ad0d5a5097c3105aaad9ab"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "f6259eabd28b1bff3aeb34f47143016d"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "480ca9826d5f82de9b36062356b8e5d1"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8bd532c26c99ac42867878a219e246ab"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "a10f52d0e8635411bfc9f21db5af09cb"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "150e80024b48d283c582c34b32ea9061"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "850eeae380a2804f0a71e12c54f60d06"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f99c293717b8220849f576cf555301f9"
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

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
    "revision": "00be47d3f9b93f61b1eae34e647e5313"
  },
  {
    "url": "assets/css/0.styles.6baf0c5c.css",
    "revision": "9ce6d3c6ecc5a0f4282e13684999f2d0"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9885c248.js",
    "revision": "ad08c4f500a167770eb3fb3958011674"
  },
  {
    "url": "assets/js/11.4ac16b46.js",
    "revision": "d0ab467681a16154f4604249cdc723b1"
  },
  {
    "url": "assets/js/12.8c4c0727.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.7348b7e7.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.f0fe9c6f.js",
    "revision": "9a0c39ea6538e2deca88c2e03e7c213c"
  },
  {
    "url": "assets/js/15.92c3ceab.js",
    "revision": "cc8f2f4e3c4b4acee1fc3d8d0489e61b"
  },
  {
    "url": "assets/js/16.5c5483c5.js",
    "revision": "a0f00de59f8b33c8c287227090c2f74b"
  },
  {
    "url": "assets/js/17.8fe6e5ea.js",
    "revision": "69d290e6aacfe580c8a180263af726ef"
  },
  {
    "url": "assets/js/18.729eeed4.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.1ad7bb71.js",
    "revision": "71c485bffc8bf22c6b8b89d41990ef53"
  },
  {
    "url": "assets/js/21.fbb905a0.js",
    "revision": "070b56b6fbef09f24cb7bac116a77d12"
  },
  {
    "url": "assets/js/22.20fc3329.js",
    "revision": "94667b900caf8dd04fa0c5c49a6666b1"
  },
  {
    "url": "assets/js/23.f88fcd4f.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.31ebaf14.js",
    "revision": "bb57364211af4cb273a3e8d995c4e907"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.f3ced236.js",
    "revision": "092ef8939b9ac3c931fd8adfd134e1de"
  },
  {
    "url": "assets/js/27.8ed4b159.js",
    "revision": "124a5db8b3f384d372bfa267aead2cc0"
  },
  {
    "url": "assets/js/28.1b55714a.js",
    "revision": "ae76127c9ff96b0270e38ec75c1342d9"
  },
  {
    "url": "assets/js/29.c1989571.js",
    "revision": "b030875706ec965a9fc9238aa6ca294a"
  },
  {
    "url": "assets/js/30.31035b64.js",
    "revision": "5a7fdab980430212486ee52aa8b329a1"
  },
  {
    "url": "assets/js/31.bc9a5b98.js",
    "revision": "abe66e307d259e9eb5fb4fc00bf73c8c"
  },
  {
    "url": "assets/js/32.821a0122.js",
    "revision": "e8e120ffc9279c0e224083b6beda7418"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
  },
  {
    "url": "assets/js/4.1099f3bc.js",
    "revision": "8f3ef733572a70f81e397d547d24715d"
  },
  {
    "url": "assets/js/5.d309383e.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.a7bf056a.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.47c30305.js",
    "revision": "d05b7c14908b47828f889eba5ee33d62"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.846e4c53.js",
    "revision": "817e4654aadf27ee8ac48a7186a59cc6"
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
    "revision": "efd9e89cfb964c2d0d492d93341dcbfa"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "c0f5b9f9e8adca1f9fcfbd704ca49799"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "784770ba3467e34f637f665c1683d61a"
  },
  {
    "url": "guide/contributors.html",
    "revision": "6191170b6ddc67da3331315817af386c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "df0ff6bb186af9a31b685959b2687c81"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "89ea6e32a3f5597d7ac746d40e14f601"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "0abd61e0a7445121a4f4e409f07629c9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d36754716976f05c53ff05fc5777b0b0"
  },
  {
    "url": "guide/index.html",
    "revision": "624eab8650d2fcad122e96636d9104a1"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "c99253344ba2a602ef2b5fcedc429d40"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "b6710b69e70fb9708218f03e392ae4d0"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "d660b6249147089bb7adfac496e2e492"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "aeaebc9f92d99df0ffd6b0acb1834eb4"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a21ac4395f9900288953dfeaf1d201ad"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "ee218c06b5c25e6677ae3069dfc00f8f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "498d13222b9b621b9fe74afaacf9783a"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6a0e399cd486744d9785e8456851de0e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "aaed620fd1e3762e47e62e792aaf9a5b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c022bb96c4b45cad66d9d025e2041ca0"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c7c3009dc9d5aa469cf0e52eea94dd14"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "24e4f6070cbce448473cd60acaa5e7e2"
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

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
    "revision": "0a78fa547cb68f0f12551442b220eeeb"
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
    "url": "assets/js/14.9d91f938.js",
    "revision": "5bc06405d10d434ccd0397fb5d185481"
  },
  {
    "url": "assets/js/15.4536993e.js",
    "revision": "c46d38ba85894b2f33fa7afcda4d8f60"
  },
  {
    "url": "assets/js/16.5c5483c5.js",
    "revision": "a0f00de59f8b33c8c287227090c2f74b"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.729eeed4.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.1da0b570.js",
    "revision": "29de97381ba1b9e1227c9991fe3a2333"
  },
  {
    "url": "assets/js/20.8b24a82e.js",
    "revision": "9c6ff9325b8c0a316326420d41b848ce"
  },
  {
    "url": "assets/js/21.92c3ae83.js",
    "revision": "7cb971e9ec0359b71b07a7d3246559c4"
  },
  {
    "url": "assets/js/22.7d71e45f.js",
    "revision": "ef4c3c1e43ef26aa822f1ad4e9f68ae7"
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
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.902e9e5b.js",
    "revision": "a353e9eb3c5e6d64d20344f2176c3c17"
  },
  {
    "url": "assets/js/30.332d69c6.js",
    "revision": "85e3d88f1a21bff2fc76711e6e47ec1f"
  },
  {
    "url": "assets/js/31.daf08ba1.js",
    "revision": "ae565862382a90e08769a3319bc57ade"
  },
  {
    "url": "assets/js/32.cb9efd68.js",
    "revision": "444f1132b17116e3f791a3f1449f6733"
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
    "url": "assets/js/app.52e032dc.js",
    "revision": "b52cb43a7227eef24c5116932f4e8ad5"
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
    "revision": "211e080fe34f569d58952a3ece1b5def"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "dba6186476a3b3eb22d2980b7c2833d0"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "49b1e283b6c50824d96a69fe759ad0f4"
  },
  {
    "url": "guide/contributors.html",
    "revision": "32299f0c4159130d5754613dd3f3056a"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "aef4a21be888403f5f68cb0cc3a3401c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "563c575023e0696d523eedf65c64b661"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6b5808d8c878ec031ce7f0d23e61b02e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "843626b1d494a00c8a04f1a8683c65c5"
  },
  {
    "url": "guide/index.html",
    "revision": "7aa7b9d8c3a21ad3a70c8cd90d8b66f1"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "6e2bd88f779b395732bcde65ec66f312"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "84a8565ca027ebce484eec888b97d379"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "1e7c842fa9a402f2231cc064263d7b8d"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "32699092f37d994965eb594c3ba7ad7a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "36ea29bd1a520e11e6755c91d4eb163e"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "39da54cd965d5559718ff2dc5071db84"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "73c3c27170630c40d781267a6d03be4f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "f8f2acca1b27925f11c90bf8a9bf2f09"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "64ec28b415242e4d1b3c2e989822b5d8"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "aa65bb4ca39a0c94687059d178a0a28f"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "82d772b0fc94ed9af638da9fd575adf7"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5b8cbfdaed3e543786a13f9abe5b5cd4"
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

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
    "revision": "a797c9f2f74176b385f7990928161917"
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
    "url": "assets/js/14.db4b89af.js",
    "revision": "406457837ec37d28e3a1a73b4f57f5df"
  },
  {
    "url": "assets/js/15.92c3ceab.js",
    "revision": "cc8f2f4e3c4b4acee1fc3d8d0489e61b"
  },
  {
    "url": "assets/js/16.9fdce3a8.js",
    "revision": "908ba7e8f5879a33ba4d3e993f722873"
  },
  {
    "url": "assets/js/17.c2cc9bb7.js",
    "revision": "fa7b64ca0ba4feae10b5bf7c3e1a1b75"
  },
  {
    "url": "assets/js/18.fd81efc1.js",
    "revision": "65b65ea7f85010fa39a0fcdd6d660e50"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.f31d7b42.js",
    "revision": "17cf3b2e4993918e1c63fe68f06ce066"
  },
  {
    "url": "assets/js/21.045acb34.js",
    "revision": "ab6b678d5134fa66ffdfff0ecd4299a3"
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
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.902e9e5b.js",
    "revision": "a353e9eb3c5e6d64d20344f2176c3c17"
  },
  {
    "url": "assets/js/30.1d63ab4b.js",
    "revision": "b7a279b15c3a4b75b365126c57582840"
  },
  {
    "url": "assets/js/31.3b898d5d.js",
    "revision": "76310584d63389029a5758dab302c7e7"
  },
  {
    "url": "assets/js/32.20e013a9.js",
    "revision": "2d31ae1958f6a5fae4cb99e2b62eeeb3"
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
    "url": "assets/js/app.210ef055.js",
    "revision": "a610b4c41d7f964531f186ec6a9400b1"
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
    "revision": "a08e92dab396e405eeacd7896f1b7c0f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "beb50387274a157b3a9805d2af7816b5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "715bb3070060572ff2bc06b576c14210"
  },
  {
    "url": "guide/contributors.html",
    "revision": "baf467b86d0023396c02a18745b80f45"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d68de0487208bf17253a0ad314c59e46"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "17f94be094bca43a186b7839f338b2ab"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "0b49eb87b5441c6fb597a700cc9f9c61"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5c186ca19d6013792992bbf9f165e90d"
  },
  {
    "url": "guide/index.html",
    "revision": "4889c4860f45f07b34ec9017dfd2ece2"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "30e44a50bc65842a3d582aab190d2195"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "9a0c2148cb3deb5226ac3d2d6a43b77a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c8382326fc81ae3663fbfc70d24ace16"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "40bf2d5aa315e75e46a946afc14bfb08"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "fcdeff8cd318494f3d866e69bc6945e6"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "0ba4b6c04058b8460157a03355cf11ac"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "b91a103b4840d3dd247b311363a4b76a"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "33938d9beeed4324c7801c0a1d6f3895"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "169c12c06efc4bfa8b37aa2f75a0e3ab"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a0464d8f57fa54c36d799d6dd1eb397f"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "13742f7e968a2fc9c0b1e93e800eaa88"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "19e18c0047e15730f09d8dd0d25e2fe5"
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

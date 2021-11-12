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
    "revision": "ce3bacf4283e5a4b598c63905445a6e3"
  },
  {
    "url": "assets/css/0.styles.d79a1fb0.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
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
    "url": "assets/js/11.2de1d8f2.js",
    "revision": "30dfba51ec06492cd3dc8c1ba6414d1d"
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
    "url": "assets/js/14.32a9b871.js",
    "revision": "b074b033765e30b0bb0221ee084992bc"
  },
  {
    "url": "assets/js/15.4536993e.js",
    "revision": "c46d38ba85894b2f33fa7afcda4d8f60"
  },
  {
    "url": "assets/js/16.9fdce3a8.js",
    "revision": "908ba7e8f5879a33ba4d3e993f722873"
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
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.4b085eef.js",
    "revision": "606350382f1c97299632159e981665db"
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
    "url": "assets/js/29.a7dda938.js",
    "revision": "416f220ad55c5d6f1629300a6303249f"
  },
  {
    "url": "assets/js/30.362a4ba8.js",
    "revision": "c5eef79392d3afe334c9396da33c2e48"
  },
  {
    "url": "assets/js/31.3b898d5d.js",
    "revision": "76310584d63389029a5758dab302c7e7"
  },
  {
    "url": "assets/js/32.6620dda9.js",
    "revision": "bb7a4c20b6e2aa2fe14f0df04e6806b0"
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
    "url": "assets/js/4.baa1ba71.js",
    "revision": "95efbe7ebc3321184214cb45cd3eca3b"
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
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.8c6f2c51.js",
    "revision": "3d7e52c7114f4472a09ec67a4cb71803"
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
    "revision": "d499cb01113b8786f77506765585edb3"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a65cba9befe77dd12d53269cd8ff197e"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "5d0bc60dbf50174dacac7ecb821a5235"
  },
  {
    "url": "guide/contributors.html",
    "revision": "c40bf54b61e316594b6d9c3c9083d119"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "821b638e16efcfd08ec99fa266600a19"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ee3435733a1a3092f9d69facdd13ce7d"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "3fe93bcb61c6b5a01484ceba6a86f0c5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7d2b05e5d066870ea1c81bb49969a859"
  },
  {
    "url": "guide/index.html",
    "revision": "60f89fcca8ee49ba3fe7ef280d556cae"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "1fa8bfb504a558434877edda377ba6c1"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "7b43e2fb43b14e41e02ff1c62a191051"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "ccbc2488eb0f1217cc75206be57a8ff4"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "860f90bdc765dd798e8b882a43b6a46d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a25362313d241ce17b8077765d9d7915"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "9e8a5f7170b8b2f242702c28b677317f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "cbb6dcf0a158e43c35de0f6d133a1e0a"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "00d2f985c1186e910aa2d1dd42923596"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "8b7886ac146556383593abe93ae9b52e"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "3c3a7244bf207c3142d327924ea3c967"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "e0accecb61f0841a017d369a30dfb880"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "a32a40d4f7c0463b753e620e8cfc4720"
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

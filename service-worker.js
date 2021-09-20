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
    "revision": "537da7c5fa6a078129032d53f1f27922"
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
    "url": "assets/js/14.ff42e3b5.js",
    "revision": "2d6ea4b316d7f6b3757ad74d86abd550"
  },
  {
    "url": "assets/js/15.4536993e.js",
    "revision": "c46d38ba85894b2f33fa7afcda4d8f60"
  },
  {
    "url": "assets/js/16.4251b2d0.js",
    "revision": "c19520c9a2cb796b477b8a313a16fabb"
  },
  {
    "url": "assets/js/17.04568593.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.729eeed4.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.ee4b1e1d.js",
    "revision": "9cbff5bc32514ce5f59140985fd54cc3"
  },
  {
    "url": "assets/js/20.a65dbef6.js",
    "revision": "c538964b90281205331efb9b575a69c5"
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
    "url": "assets/js/32.107bb8df.js",
    "revision": "07013aeaa2884043f4d9f0b4b089077c"
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
    "url": "assets/js/app.d2b4a192.js",
    "revision": "02582800024e952af2afdb6e7d12078b"
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
    "revision": "ab8bb95583ad419d44dacc981287925b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "be7e2663fae33d3d91e6802c3fa93ee5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "8f425f6f8eebe20efad18763f0d506b9"
  },
  {
    "url": "guide/contributors.html",
    "revision": "8948f852f2d9e2c9de93a10a0ed7a739"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "485aa847aa095f45762d9364c697dc86"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "96bc45face0e0a320dd2ccad46566c07"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "d65c7d4cd2c46175fbb587ab372e8dd9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "61e8f2c0a948c8cd95dca32886c4c4a9"
  },
  {
    "url": "guide/index.html",
    "revision": "1bfcbac17009c9bc6988776dc4fbf0e0"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d16c3b32f38c7c1940410d15c86bdd1f"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "e08ca9d3dfc5d747f42588565c652426"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "9e6fb80a329915d58cd2bc8be8eb3e94"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0f6038d05f4a007e93697ace166700b0"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0d9bf2d51a626b7b45c81c22145169f3"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "0212c55c3e50d8a7c638d679077a6297"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f590a909ebd5203199fe1320858f5035"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "5cb8cee69c0f52264a091ae2caa3d286"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "d07594f01a791beb965ab397ae2306d5"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "cea34d231a1dc111dc4a3b2c5c7c8677"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "0e6e274da17b5e1e1aee3de8f037c503"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "a26a81e647aa8a7dce16942a104ebe7f"
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

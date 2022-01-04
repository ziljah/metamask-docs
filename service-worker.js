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
    "revision": "b932c9674cce24abfa8f4769d4a9b385"
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
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.772086ab.js",
    "revision": "2cf0d5a330b2e053a62a214b27421871"
  },
  {
    "url": "assets/js/21.1c392bf5.js",
    "revision": "7b88e28172a5658cc113b0b285584e2e"
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
    "url": "assets/js/30.7d65f3bd.js",
    "revision": "330c90cd9966b59784da68e7593d8717"
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
    "url": "assets/js/app.e2416969.js",
    "revision": "8edbcf7d3786bebc0a84965d29099523"
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
    "revision": "1216b3934c72ba815fc000372738a6a6"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "1e652a64fc054ac02b79604fbd27bb0d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "628b5e82a6834e82e7ac959194e0c356"
  },
  {
    "url": "guide/contributors.html",
    "revision": "47666838a96cd0107880bee25546b44e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d4f3a42065205263510cabfdba3f4793"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "bceafaa01753702d5a9c1f88695f7080"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "3660170ee4d8ba6ce7fbd10e6caebbb4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6b3cc62c66a50c3c07c8bfc79befb59d"
  },
  {
    "url": "guide/index.html",
    "revision": "cff324d7809335ed13d6783f219f3364"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "2e5e2c0daa1bcdced6521d29cc9548e2"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "d27660d54d9ffc967b1edcd9e054287c"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "050aca173674974e19d96a98eb865b9a"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "61f6e91203947dfc6299fbb65009c73e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0047a6bc45a46a57ed3575fadd1615ad"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "a51e237766525d4cb21ff88e900d78a2"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "28913aa4ab3ec190c787e8b9737e717c"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "4acc2497d44446fc3a307cca6c19ae42"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "61715d8ab3e5840ec97947127dcc9493"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ad3d9bbe4480647451597dc109bb218b"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "4e6138086ce1eaf610b3da51fdb0b071"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "e33a30e7ea1ea857f5f7a0db1ce13c9d"
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

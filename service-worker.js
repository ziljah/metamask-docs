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
    "revision": "8e2d60b654a6242524b3d68d3e121b3c"
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
    "url": "assets/js/14.74fe7ed2.js",
    "revision": "eac8243d4a7cc7e3a9596eff0aa8cf6b"
  },
  {
    "url": "assets/js/15.5d58bde3.js",
    "revision": "7e6a50ddf76fbcdb74501ca84d3959bc"
  },
  {
    "url": "assets/js/16.ef574c2c.js",
    "revision": "06f0275bc382aa8d929d7b2fadde9ede"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.9ae1e13a.js",
    "revision": "4ce3ec7e203bd6140cda73c4b4ff9fe2"
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
    "url": "assets/js/21.7cd19eea.js",
    "revision": "ece2938e363d7e5fcf9fe212e105bc1e"
  },
  {
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
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
    "url": "assets/js/30.d01d8a76.js",
    "revision": "8e8481bdf7be12e121975f2b0413e627"
  },
  {
    "url": "assets/js/31.74901bf2.js",
    "revision": "c72993434fd58aa88fc8b74f33ed6e96"
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
    "url": "assets/js/app.46293083.js",
    "revision": "ab0abce242673ba319b42e4b14a8002c"
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
    "revision": "2393b36b3535a604b99646e21da0b5da"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d5fc8e605607e3d1c2e87e8c4b161a61"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "76b3f2fbcdb7f97bfa407c75bf5f6848"
  },
  {
    "url": "guide/contributors.html",
    "revision": "665d1feae02923642f95aa582dc4ab6e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "5c81683a3e912061a92d297080961316"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "74605486d4517945bdc2307795c8b659"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "7e759ac2a3cfd7481f54d887004b63ff"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a60c7808395908dd96e1f2499d06fa10"
  },
  {
    "url": "guide/index.html",
    "revision": "d29ec0c55eea3e4c959d12ff7d58e9f1"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "41e2a7d37077a5f23bb68076dcc76267"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "bc9e61f51195f2a7e455da6ca2a5a6e4"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "39ac8d24c7367cb4de399ea0cbc0b5d0"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "71fbd632e9582921aa270443c289b8c5"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "7a3cbe4b0e65e3f3b5d525be28d1727c"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "796da7e034884f8add56af5c03403237"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "c535f93937594ac54a655483503d731d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7248f61b1c50128885054f6e13bf4c35"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "ea964d656c2019dc46e019abd0e96213"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "cae4a421f944c04551f2ef72921fe1ca"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8e159c20e08e462dd21b47f07935e492"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "3d4c6ab9b3538a87b119bee180cde899"
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

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
    "revision": "9c571f0a658e460ffc7de49479fc50ff"
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
    "url": "assets/js/14.3ca3efca.js",
    "revision": "af0ffbd2e668b5b005ef91940222783d"
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
    "url": "assets/js/18.885c3eac.js",
    "revision": "ff50b47696e74ae2756951050b32861d"
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
    "url": "assets/js/30.3fc68f43.js",
    "revision": "b4d09568b67c6de2d4e789b1461e374f"
  },
  {
    "url": "assets/js/31.80e09e40.js",
    "revision": "ee529263e3458c20eb884cd89dfaa1aa"
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
    "url": "assets/js/app.76bb02db.js",
    "revision": "e7d052ec6def53947bf1c23034eb2cde"
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
    "revision": "ff78a64b2253704c29db933b25a68c3a"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "55f837e20a893323a912edfec2e3fa7c"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "060e2554e99f2032fa30427b49c0a7da"
  },
  {
    "url": "guide/contributors.html",
    "revision": "18e01a7de2f80e95412e0443b0cbe201"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "c577565c30af88afc7409add424f1e50"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "142c550217bc53b2d728bcf674ab3a5b"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "905ea4518efab869ac821cb8c9628069"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d41609819528eeaee9110bb6d03c9e8e"
  },
  {
    "url": "guide/index.html",
    "revision": "96c3d3f7f55bbe32f73f3fb31a83fa9d"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "1686f3c6ff4e224566a42afb5292c514"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "1c7f40baace3f7dc32657b191966647e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c7bbeb46683621b239cee7d76a9e137b"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "ca62d35ce27d5e65eacca0d75491aac9"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "189a8e1597ce374455161eddcf4913cb"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "719c55b8a21e67745f05f870a781a534"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f61a28e5357beff8495a0ec49820a62e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6db0e3fbf3220f92566e3b3dd8eb4140"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "46ceab88eddd9bd9425e096ad1e7e662"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "037938074d6b31b6682d6ec71a686161"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "f4e569fb458a63859209b8573a0cae93"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "bde8faacfd27604abe9acc0d5d3aea12"
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

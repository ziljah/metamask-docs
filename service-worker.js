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
    "revision": "e2c8026af678bc434f078b69cdf1843d"
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
    "url": "assets/js/app.31a3a7bf.js",
    "revision": "8d2872aa5d907aebcf1c787a5d839903"
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
    "revision": "d9ab439b635ab73dd3400b8604901548"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "861984f7d67130cc4c11bb94d2d944ce"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "0990c1ef688e75268d788b2a1e0dfd25"
  },
  {
    "url": "guide/contributors.html",
    "revision": "c054c1e15e4544a6b6837ddd56b0fe5e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "a5002aa9880273d4ddeb2aff2d362247"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "1e2e26379efc0f9121e45d8ef6f557c4"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "49cc6deee7a6dfbda1a4ba533fbf6af1"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "67bada35a6e604569555c5601ed3a7dd"
  },
  {
    "url": "guide/index.html",
    "revision": "c21c7a237f309d3673e886d9d4c3e6ac"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "297eb909524941e9ca95b5a7793650b1"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "32d437e93d5db829bd1d9804bb701f12"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7414235d6d3be2f755de1b6de23057cf"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "b9a5cfe291f67ea0fcb3807d604c108a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "c591f1fb236cb818531357f3e1434b10"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "90de9a7c061e76cc107d8f432f480f42"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0ccf2ee080a75f3751355cf34379285d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6fe7e2a8b6dfb7b8a4a13ca0391acda8"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "3f36ec6af8352de08c82811307f610b1"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "39e868af688074ba7492fa1e32b08efe"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c012723043834fe59a7eaacee5d62d35"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "d290c2e49e987ce8743ab83a8066fdb0"
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

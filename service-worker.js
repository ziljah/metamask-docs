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
    "revision": "3578adfaddda37ff6e0d0395f15cfeeb"
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
    "url": "assets/js/18.3d569f46.js",
    "revision": "09b59bd21092b85b72a96940f310b7ca"
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
    "url": "assets/js/24.41489810.js",
    "revision": "91ddb8b48a3175e3538d66575f08702d"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.61bd266b.js",
    "revision": "9c207e15a72e4f1013190134efe28ebc"
  },
  {
    "url": "assets/js/27.5372edc6.js",
    "revision": "995a413b941b441430185016d8f5c61e"
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
    "url": "assets/js/30.e3449ff3.js",
    "revision": "37e4f0510c2d8c0b924df5e6559ec9d0"
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
    "url": "assets/js/34.4f563ec7.js",
    "revision": "faea1c9b01ead2bb354fc52e8eb4c496"
  },
  {
    "url": "assets/js/35.cb029de6.js",
    "revision": "11dd455b36a0da35ac8b3935a725fff4"
  },
  {
    "url": "assets/js/36.b713b113.js",
    "revision": "8702ad9d119c99af42dd2cccc1147fe0"
  },
  {
    "url": "assets/js/37.eb19e0d7.js",
    "revision": "0eb9ead751860bd2469f9b4f9910e87f"
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
    "url": "assets/js/6.a0d1e866.js",
    "revision": "29f718453c76590851211e3db25c8aa6"
  },
  {
    "url": "assets/js/7.50a770b2.js",
    "revision": "5604cecaa689454aa86376434b0c40c9"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.c87edbeb.js",
    "revision": "d517bd47317ad81e6ab16a0e8b3b6124"
  },
  {
    "url": "assets/js/app.dac76a46.js",
    "revision": "9c7bab796654b34d8ad8d42939b6dcb5"
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
    "revision": "5a71d0141a11a3619ea3dfd55e9416f6"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "027d72ffdeeda6d629a014480856716d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "fe5727355b83aa2215e896844054ab94"
  },
  {
    "url": "guide/contributors.html",
    "revision": "a025d3fd80161c7ba5e719b1669f74f6"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "86b9f2a0a83601ebf496baf59ebeee48"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7e7e33614e57c3376e6984ae0316f07e"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "2db5900e658b61a199512abee6a5dc0d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "557a3d5b4c279485198477d155ef5075"
  },
  {
    "url": "guide/index.html",
    "revision": "d2320079d09b71467b48c2821714aefc"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "58412da9084f77d46e3053163632df77"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "32f7435cdfcd01e7774fedd99b09f024"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "84e6861691ec8aa57633c6d343690072"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "262085809ddf605a181dfeb0175d6976"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b73d14edc906a9f1dc1ff633a71bc67b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "00e94bbe2e0d74846c5c1dbf4bea07a1"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "90c3daa8957c14de7cda651c7b546678"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "ab394beb89ffdbf4f166bab82a9d1048"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "04984b29e09e773e1a31369af14d4c2f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d2c62c69329dcae0461f90feaabeb570"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "bd7b7d257a3b847c80334ed0fd703ade"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "2cea00ae46481367c37e14f103ae90f3"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "84af063e384b8e857177cc927075a2f1"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "16fd29d6ac2d11efcc5986d8199c8c84"
  },
  {
    "url": "guide/snaps.html",
    "revision": "c7e6f0a2444bb82617938a8e97965e13"
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

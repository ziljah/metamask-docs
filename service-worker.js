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
    "revision": "3a44bfd78338d7bc7ae7a089fbaa7bca"
  },
  {
    "url": "assets/css/0.styles.01d83501.css",
    "revision": "9c1ba210052693ad3ae1d14466944cef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.088f5ce8.js",
    "revision": "ffb2a78e9bec93e1ed6b13ff8e9964e2"
  },
  {
    "url": "assets/js/11.237e76e8.js",
    "revision": "40b67c398e11c96a5cc3f22c6c93e48d"
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
    "url": "assets/js/18.402a7fc4.js",
    "revision": "f059367c8e24eca2eda9bccb4f78e1cb"
  },
  {
    "url": "assets/js/19.14fabb39.js",
    "revision": "af214bf9e936a73239f7e347fe0680a1"
  },
  {
    "url": "assets/js/20.772086ab.js",
    "revision": "2cf0d5a330b2e053a62a214b27421871"
  },
  {
    "url": "assets/js/21.180ff64c.js",
    "revision": "4120ad7942f29e511be736af9ed116ea"
  },
  {
    "url": "assets/js/22.184acfe8.js",
    "revision": "addaa4f202a34f952bd7822c305add1c"
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
    "url": "assets/js/26.f3ced236.js",
    "revision": "092ef8939b9ac3c931fd8adfd134e1de"
  },
  {
    "url": "assets/js/27.978bfcab.js",
    "revision": "20c54e1f894a2f3cb869f040678cce12"
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
    "url": "assets/js/30.e7ffd0b9.js",
    "revision": "6dd587457a24e8f3ba4d5d28c89c0656"
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
    "url": "assets/js/34.c3efec63.js",
    "revision": "664df718ce9247bea90892d9a7e60a8b"
  },
  {
    "url": "assets/js/35.cb029de6.js",
    "revision": "11dd455b36a0da35ac8b3935a725fff4"
  },
  {
    "url": "assets/js/36.f59cf17e.js",
    "revision": "61583d1c7275eb79facaa5792b8ef8ce"
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
    "url": "assets/js/app.4d9a1bd7.js",
    "revision": "cb6fa625b48220ad67f577d90b690f6a"
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
    "revision": "7d61c776a30bd570a4e3a5af936bed2b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "ebf0b1cde8c6fd054f35fd525ea4e1c2"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "21dcbab3130c15e3e768dd3b60df5d21"
  },
  {
    "url": "guide/contributors.html",
    "revision": "8f4fd0bf3cf82c2c2c987f0853c96370"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "51ea43b201a9d99bc1b196604622a5f5"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "e876a248b1bd04defeab54fe5915b007"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c33540af00f7a5e5d8ed0f2d22cca013"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "aeedf8165273d0c22f17a77c1e7c994f"
  },
  {
    "url": "guide/index.html",
    "revision": "d5975631e59e0e66a6ff0b4e89efcd40"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "86924ed09be5d4c938aca2f97b311ce3"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "8cf49c93482cd4afdb3688bb728b3c71"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "a9ce78902db08ccdfb30f744ed731b9d"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "affe10a0b041280c2eb43e13f6a1cc57"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "77e3da2744744d229dfcd0504aad24de"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "5c7698e2bb1a3b141b867e2554e3f891"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f471a25dc8559b00a029f32d1b4ebfaf"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "a9c1d81d4917e8c392cc59d1f8bd831e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "5b0c47649773a9080ec4a46f54a8d080"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a0c8821417797f2b0a83547bc22f89de"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "86199de0f1f8d26b10e4f561c53c50a5"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "7ef57bf393a9dcca88a60339714c7ec0"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "028e61db454ad3bd6deaa8871067c59e"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "4576393a9cefb903022cc6fcc18eda42"
  },
  {
    "url": "guide/snaps.html",
    "revision": "50a717768ba059e43aa62af3ca0586b0"
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

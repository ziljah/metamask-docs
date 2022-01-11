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
    "revision": "d07e3ac8f9ebd881ee3fb2a40ec83a85"
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
    "url": "assets/js/15.53c9cf0e.js",
    "revision": "cbb8cdfbe7ee9fece4312b78e2f6c827"
  },
  {
    "url": "assets/js/16.878c533b.js",
    "revision": "bac455ea6b053a17181176f5fa00f0f4"
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
    "url": "assets/js/30.169692e3.js",
    "revision": "a4d91659bd547215c52328fdadffe206"
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
    "url": "assets/js/34.19ed6bdb.js",
    "revision": "bf1f34d913cf64fdc76153d8b3c21cff"
  },
  {
    "url": "assets/js/35.eeafc70a.js",
    "revision": "add1c8a85287682c0a4857d55514e1b7"
  },
  {
    "url": "assets/js/36.307a03f6.js",
    "revision": "60749c354223084b7399cbadf63998cc"
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
    "url": "assets/js/app.464eacd2.js",
    "revision": "db64b7698434998454f1fae6537bc68a"
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
    "revision": "b5a36aa12d6dbdbddc6fed1e9b74b34f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "8bda37aae15d8e8ebb9887e3fdbbb131"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b46d41c254ab6f3359c98c64ee0d369b"
  },
  {
    "url": "guide/contributors.html",
    "revision": "8d40a653c3034adf1bf3a19673ae1dcb"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "c75dca9f10cf4e2cfb26a2b7d1cc8c7f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "95f9f7b57d13004530e6894487d2239a"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "882ad6590f2c7a154d8804178825b2f7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d5f66e63fcba49c6c534aafe0db1b64f"
  },
  {
    "url": "guide/index.html",
    "revision": "7a6aeead570c14312f36c90cae72b30f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "5d1af72080a197e584fb59bfd8e73f08"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "3c80dfb42a1a6e276d3e9e6087b2320e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "319e3b87d5ce3925e3eeea710c8143ec"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "7e2410a2b41690271d0da97657ef4285"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "6b6d98eecd22f112cbda025c0ec7b94b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "c27f1c2845c7c41f8c16d3a98675b71a"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "24f33f82b1e56701660e3843c88ac6cd"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "0405c983e2c397e526386b63a0414ed0"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "d80fa0b541ece20afa252a29ed1a1bc3"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "fe915714c42b8d95cf3d08fc2877cff4"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "bbd76acf23cfae82eee23ee3bad4f4a3"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "9156b98318b28b55f36f96ccbe603e82"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "7c0e492ce74475b70c75e123f37c50d9"
  },
  {
    "url": "guide/snaps-introduction.html",
    "revision": "f01562319d47f1ffec37b2ab6d8eb60c"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "5a2d31fb87165d47c9cc0c97596d267b"
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

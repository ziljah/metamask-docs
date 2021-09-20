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
    "revision": "b38fcc4eb572b551d9939098637ee2c1"
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
    "url": "assets/js/28.1b55714a.js",
    "revision": "ae76127c9ff96b0270e38ec75c1342d9"
  },
  {
    "url": "assets/js/29.c3eb3581.js",
    "revision": "60105214c318f7eab25b74502d8ef095"
  },
  {
    "url": "assets/js/30.8cc869f2.js",
    "revision": "8ce3e0509366fba9bd167095bf8d402b"
  },
  {
    "url": "assets/js/31.3b898d5d.js",
    "revision": "76310584d63389029a5758dab302c7e7"
  },
  {
    "url": "assets/js/32.d28fe494.js",
    "revision": "9330f11a691c1ba9c2c2f3ee41221067"
  },
  {
    "url": "assets/js/33.a3eb0c35.js",
    "revision": "c022921ae9e2db411307c1eca59ed649"
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
    "url": "assets/js/app.0f8ec1a3.js",
    "revision": "958f66824c3e92ad96f1e04047aff9e5"
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
    "revision": "5e7a105904a78d41024c940238d4850b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "67328dd5718f3c11b55941faf377e9d1"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "6d5699121fb27bd35d6a53e0fb8ae2ff"
  },
  {
    "url": "guide/contributors.html",
    "revision": "ee11b1505fa7a8baa84fd6f700bcde80"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "34753f3e5e6aa622c5560fe774f6ea8e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "fa039bba855c1835caae9e804aa5c9cd"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "eae79928c4914b35ac2b481ca8a4e905"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "76013e11e5081af7860c2d3e7478ded8"
  },
  {
    "url": "guide/index.html",
    "revision": "75f981591297af929795fedb6d30becc"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "0127b90d055e6d11f031789702eb0d8d"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "780f9cfb204b4db29bfead7770acfdee"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "5f98c07fde051e5429e4f9b022136908"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "ba614518d199069e1a74da6c80782d64"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b326d773768ddfd31b8b465d1adb7e2a"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "3180461ed9c687faf10cd9c35b0c0aa0"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "37e3c603ea7f2b5a43f4a1e2e3d7360d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "4d08aced082d04f9b64a18b40f0900f6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "a822c44504ec41b35a54e28fb9c99d39"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c421643862e5aa90d262b35bf883299d"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "dbf0e9b54cb0f7a6c9b8c8d54494f7ef"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "4b836d70c7a8c190c57b2accd349bf43"
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

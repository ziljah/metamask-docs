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
    "revision": "1c302002689b4bf5845d4ae51debf3d3"
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
    "url": "assets/js/13.17e38f4f.js",
    "revision": "314ed5aef99c87eaba4ea3b43190ac53"
  },
  {
    "url": "assets/js/14.2e865865.js",
    "revision": "96eec4b718a3c0d613aac863cb27ab5f"
  },
  {
    "url": "assets/js/15.e177e811.js",
    "revision": "0dca5439fe63c8ab3b38d4a279f66964"
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
    "url": "assets/js/18.91fd6703.js",
    "revision": "062626d1bf1742c6e42c824bc2812d85"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.aecacabb.js",
    "revision": "271ff1471381a6677f09d3bcf701cb75"
  },
  {
    "url": "assets/js/21.daa1b6c2.js",
    "revision": "c2b6478312426c79bfb1b9c95f0b10bc"
  },
  {
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.abf5e998.js",
    "revision": "bd0d1135cef3b7e7ef8ab7eb6cfea92f"
  },
  {
    "url": "assets/js/24.17f19602.js",
    "revision": "785305ab369c228c0700a39c1eb815c6"
  },
  {
    "url": "assets/js/25.ab761306.js",
    "revision": "6d3167f19413cbb40c6802e497903258"
  },
  {
    "url": "assets/js/26.f8f75767.js",
    "revision": "8bbeb7ca2c6e42ea07d339def5b99ced"
  },
  {
    "url": "assets/js/27.f68593fe.js",
    "revision": "8a5142151240935c12d93762dec49053"
  },
  {
    "url": "assets/js/28.01812e92.js",
    "revision": "dfb852c1541d7c1dd0f26f8754aa25ac"
  },
  {
    "url": "assets/js/29.316518b4.js",
    "revision": "e51e365ea46773d4f277e0e63af3df46"
  },
  {
    "url": "assets/js/30.eb9b7a0e.js",
    "revision": "553ecfa052c990d1c74eb312b832c385"
  },
  {
    "url": "assets/js/31.4746cd25.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.436bf087.js",
    "revision": "ce683c3558b3b63a8accc09582aacb4a"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.603865e2.js",
    "revision": "17039b54d2aa9a5b3e686d8ae2fd7229"
  },
  {
    "url": "assets/js/35.1e1004a0.js",
    "revision": "825c9fa269562d6c4188f954070b4f70"
  },
  {
    "url": "assets/js/36.f30bba5b.js",
    "revision": "4a9b8ddbf682f9ff17e6a5411d70a86e"
  },
  {
    "url": "assets/js/37.606b7264.js",
    "revision": "62c0314bbed5bc3431ac904b7a755b92"
  },
  {
    "url": "assets/js/38.37c589f7.js",
    "revision": "24dd63c597f7153c7cd19375155d8d6c"
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
    "url": "assets/js/6.cfb38f1a.js",
    "revision": "3da70382309dcd99ad46f309bdc0b45a"
  },
  {
    "url": "assets/js/7.e06a715a.js",
    "revision": "8b239d108f078eadbaea5dc084cec7df"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.6ceff5d2.js",
    "revision": "8aea038cb275e5c7b9368e5b008ac929"
  },
  {
    "url": "assets/js/app.533927c0.js",
    "revision": "e4a25b9b7be0ad2c3d053e53a48f1096"
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
    "revision": "847d09e39f71b7188e47aa42fb6cdd09"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "713d8acb2a8fa0343d54b886aa05c933"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "f6b985ece0f2a6803da92fcde3a5c5fc"
  },
  {
    "url": "guide/contributors.html",
    "revision": "98964ae5c46daca1dc739ca5af9aeb70"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "ab5fac085a33005c084928b9cbe9515c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "9b90d6e0fc1288e441bf57e04c61b0e1"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c68aebb982213711b6e05bb5faa4cd7a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0752c808054c10e5be6b62afffce4fb4"
  },
  {
    "url": "guide/index.html",
    "revision": "4bb23bd65ee31a7359cdff4e71fb48fa"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "87d122380badea60f00db532addc4961"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "13d9bd522d209cdb3d049e8c4e60874e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "e7b9cebbfb8ae3e5aea1c7b0160baf5a"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "a9618816d7509a5b60a635d37af86944"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "edbf91366e9edb46db3fe890618b6568"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "9c788736ce3d73ff233420481260e52c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "087d17a80382dd868e377bb25568fa3b"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "caa08829b8b380e74317d05f8ed80e0c"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "b58860b14e84c931cbd4a3509c3cc121"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "1ae1a0c9c581ea3924c9866bff03c938"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "d3e9655f5f05c3b7c279b915b210d327"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "b66cea5ad6204466bc0c8ac6a59e136e"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "97c24908029f99304aa4a7155e2b39fa"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "9f51f24915b5dd70e1d6edc6e032c314"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "232f79039a47c512aaac8430476280b9"
  },
  {
    "url": "guide/snaps.html",
    "revision": "e4e173dc0695c33a883d91f5a280e657"
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

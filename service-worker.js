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
    "revision": "5d46b5d097e60fdb433bb1025b9734f3"
  },
  {
    "url": "assets/css/0.styles.8dcb5106.css",
    "revision": "10de1213d2442d0add4f5413c0d7213e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ea876645.js",
    "revision": "4897f6656320e84c1fde0cd25139856e"
  },
  {
    "url": "assets/js/11.c8c32f07.js",
    "revision": "7a218ebf3e877987f7991b2a6907e7fc"
  },
  {
    "url": "assets/js/12.a85f1404.js",
    "revision": "73f90591bc7cf3cc9e3e7325a7ede95c"
  },
  {
    "url": "assets/js/13.97552405.js",
    "revision": "6b0164e6ac23ab20f2ebd211a8dc67f8"
  },
  {
    "url": "assets/js/14.fa495985.js",
    "revision": "a03c6e3f9506ca3029e4c08752320a68"
  },
  {
    "url": "assets/js/15.075647e1.js",
    "revision": "9f231a217f40929b57efbcfda64a01e1"
  },
  {
    "url": "assets/js/16.24317299.js",
    "revision": "52c8c7b071348d92717e121b943dffa9"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.11d8884e.js",
    "revision": "2aa99ccd3a16297409c7efaabd20eadc"
  },
  {
    "url": "assets/js/19.c3c75ea4.js",
    "revision": "c49f55a9e418841b4b2435f349f4a366"
  },
  {
    "url": "assets/js/20.1234e0ab.js",
    "revision": "01376a1c1b41425847910cfd332b8cd8"
  },
  {
    "url": "assets/js/21.d6fce277.js",
    "revision": "123fedd7c7546317aed2e6286ce59329"
  },
  {
    "url": "assets/js/22.ae8100fc.js",
    "revision": "6ee0473c8ae65faba0cddad5d640a870"
  },
  {
    "url": "assets/js/23.f12ea3b8.js",
    "revision": "98c7fbdfd8e23c9091902d01cae03f17"
  },
  {
    "url": "assets/js/24.6ad5806e.js",
    "revision": "f5a7067e0c676dea22c62d3869dc3072"
  },
  {
    "url": "assets/js/25.52046f63.js",
    "revision": "a8874c13dbedbe407bba1cc7445a4056"
  },
  {
    "url": "assets/js/26.8eb055c8.js",
    "revision": "2ed2ee455424114e689c7af3ee3c9985"
  },
  {
    "url": "assets/js/27.7c2cd23f.js",
    "revision": "d3b9d58f4933eaf48cea56eb4e28eabb"
  },
  {
    "url": "assets/js/28.ee19db3b.js",
    "revision": "d04077526bdb96b79b4a6f310dc00e27"
  },
  {
    "url": "assets/js/29.13b67826.js",
    "revision": "4a56d193c552f396222308647a047a54"
  },
  {
    "url": "assets/js/30.5ba22dbb.js",
    "revision": "223589eb23723579e7723aefa999fe4f"
  },
  {
    "url": "assets/js/31.2e1e12cc.js",
    "revision": "a7c6ce489404e95f85b4c2b6cf43bf4d"
  },
  {
    "url": "assets/js/32.53667f5f.js",
    "revision": "889f5da3fac04323034839df4b03841c"
  },
  {
    "url": "assets/js/4.2530261f.js",
    "revision": "aee2ba4b11891081e4a2196a90d432e9"
  },
  {
    "url": "assets/js/5.dc3dae0a.js",
    "revision": "761d8df16cb9e2b39cfc5cfcb1473ee5"
  },
  {
    "url": "assets/js/6.d745268e.js",
    "revision": "5a4943dd355341c17e107eed75ffe58e"
  },
  {
    "url": "assets/js/7.1147ee0f.js",
    "revision": "3a872c4bb09ab114453a74ebccbf9919"
  },
  {
    "url": "assets/js/8.97ed842b.js",
    "revision": "bb968352bc4c8900d55bbcba97ef6265"
  },
  {
    "url": "assets/js/9.520a54c4.js",
    "revision": "d32cfadee44033783136b91510fd2dc6"
  },
  {
    "url": "assets/js/app.38763415.js",
    "revision": "10c7ec275d04a37c9f6df56f3d35e17b"
  },
  {
    "url": "assets/js/vendors~docsearch.13c21034.js",
    "revision": "99fca4d6c890c7ef2fac9b69a2f31a85"
  },
  {
    "url": "assets/js/vendors~notification.858aa34f.js",
    "revision": "22962219ef3d017a36b7c767df0e9d61"
  },
  {
    "url": "faq/index.html",
    "revision": "d82005ff2ddcd67fc601b002f580c7b4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "050325c7868d8071ed7179a284e5936d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "258cbf9b0f82e626baa1b842bd21bc69"
  },
  {
    "url": "guide/contributors.html",
    "revision": "a3062c61ba34a7fb4593f52ffdc12937"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "5014ba15d2026de4272cf68a3ab94d5f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "820b138204edfc364699fa35978d20e7"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "23ae3a1de2eecbd0b78b98b90584bf3f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e2a74e1d8503639b71ed41116cc28832"
  },
  {
    "url": "guide/index.html",
    "revision": "fb13a73d5aaad8941a575f6c90d675d4"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8a35427db677eaee613f8a670dbadf07"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "682753da7dcdae6b0666a8ffc4d8fe38"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "d0c623190928224f30fe41e1451ed0e1"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "5f63ca5e811d01d7b44179993f80655b"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "9eed70692fd012eb01a6d8758e1fa895"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "b356b6b7d963df01fd0ba80c81d21ad7"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "64b7b85ecaff483ba4948509a2932421"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "461c87a5676a8df4303d1b872c734cae"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "e18d786399dafb378da8583b6116935e"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "6aea216c6029ed0c913262fc4dbb9e57"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c8d69fa49b0b07b7f461fb003ae6957a"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "9e8b74ca5ed5aa01821940077b0471c6"
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

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
    "revision": "06c0ceb85e2a3cf008f2bf644cee850c"
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
    "url": "assets/js/12.f7864246.js",
    "revision": "31ba04cad3fd3301387e8975aeedd22b"
  },
  {
    "url": "assets/js/13.97552405.js",
    "revision": "6b0164e6ac23ab20f2ebd211a8dc67f8"
  },
  {
    "url": "assets/js/14.3e68a825.js",
    "revision": "7bcd13e14f35846d94106496398c8f9a"
  },
  {
    "url": "assets/js/15.075647e1.js",
    "revision": "9f231a217f40929b57efbcfda64a01e1"
  },
  {
    "url": "assets/js/16.a4944b58.js",
    "revision": "7ad7349c15af01813330fd990e13c9de"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.3f419662.js",
    "revision": "e9a9b3d538e7c3562f4a1321413ca562"
  },
  {
    "url": "assets/js/19.6d44b058.js",
    "revision": "513483b62ae907786d465a8c7b5e7dbd"
  },
  {
    "url": "assets/js/20.2b672c5b.js",
    "revision": "48e8150aa8701bc77acdd18f5b56ed65"
  },
  {
    "url": "assets/js/21.67d03c1c.js",
    "revision": "e63b664117220be48d58689cd44ae804"
  },
  {
    "url": "assets/js/22.d899a9b5.js",
    "revision": "ed0efa10756aeb10c70dacae38827fc6"
  },
  {
    "url": "assets/js/23.455c3ec6.js",
    "revision": "23b5e8593c53c89e2a7dc880bc1f5c5b"
  },
  {
    "url": "assets/js/24.6cc07750.js",
    "revision": "ca1320b8f5a8d0df743e05bc3cf693b9"
  },
  {
    "url": "assets/js/25.6e71559a.js",
    "revision": "d5d0bf0f185d98e1f1ebe17073721ca2"
  },
  {
    "url": "assets/js/26.966ea95b.js",
    "revision": "0fa6c4a53d358df9ac406fd40da6a280"
  },
  {
    "url": "assets/js/27.a3b94e48.js",
    "revision": "abd2bee45c04aae588c3dabc433080a3"
  },
  {
    "url": "assets/js/28.aa56dbc3.js",
    "revision": "a7b400e4127103b2a2fe25acd9425c45"
  },
  {
    "url": "assets/js/29.1a95cb8b.js",
    "revision": "7f36d7d76c5a6574f5ad887020d5153d"
  },
  {
    "url": "assets/js/30.c0e391d0.js",
    "revision": "9bf10cda83a587cc80885e76f960ac1b"
  },
  {
    "url": "assets/js/31.2a802cf6.js",
    "revision": "c64b492f99722216f9f001564ae89d86"
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
    "url": "assets/js/6.6c14fbb1.js",
    "revision": "173a5d925c17c8c295f5d06344b2bb7e"
  },
  {
    "url": "assets/js/7.bade1c40.js",
    "revision": "e150cec61c4c679486ceb96390e45dc4"
  },
  {
    "url": "assets/js/8.97ed842b.js",
    "revision": "bb968352bc4c8900d55bbcba97ef6265"
  },
  {
    "url": "assets/js/9.777af077.js",
    "revision": "981e5612149945a769f79ddb86401ea4"
  },
  {
    "url": "assets/js/app.2604fd09.js",
    "revision": "1ac4d087e85c7b7deb1ad5d3ae31a14b"
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
    "revision": "2c719960f530805d934e07cfa73611e7"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "aad41a85f6f8d4fcbb82ccf8d50d9a4e"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "09b2ab6595430e42c08093b4f06898ed"
  },
  {
    "url": "guide/contributors.html",
    "revision": "39328280ee28f4e4eb7842edfcb47244"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "0dc1c68991d86d2321a13389809ffa48"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "20a04450b5c24120c4a476d78ffc4f70"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6a1ec30fe070b6534d0c8278ad41c641"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8b15fd4583b30a4ff3c9919241230548"
  },
  {
    "url": "guide/index.html",
    "revision": "b47668ca1a81851eb141486a565f72a0"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "68e1d9a7d02a85fc2475480b39411c5e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "387ed59637147355f9aa4a57c5995d02"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "637dee4a5d71b8b2c310f243e70b0fe1"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "6325063436e72277a9d96ca573f8b887"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "5946f9ab0cdfefa418fb389afa750597"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "2710f8e43fc52986a26b3e29087fc69d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "15e6ed031097aa207ca0b250a9863b00"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "974df079190ce70e7ee0b2ca021bbb61"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "00e2d378edd053be667533b4f6402d10"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "47be4755d589448723508dd5be051f77"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "41aa5a1f20ff043d6d5db11bff16e459"
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

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
    "revision": "f5d678e4f003a887dd837ee7de191adb"
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
    "url": "assets/js/12.15a78987.js",
    "revision": "1c79890120eaec59e8df3f42b6ecf9be"
  },
  {
    "url": "assets/js/13.80d064f8.js",
    "revision": "1fd0339e8a0076f75bba037fc308f980"
  },
  {
    "url": "assets/js/14.fa494f6f.js",
    "revision": "abbebc0feaf0b8efe158027cfb2da98e"
  },
  {
    "url": "assets/js/15.075647e1.js",
    "revision": "9f231a217f40929b57efbcfda64a01e1"
  },
  {
    "url": "assets/js/16.1e8c9245.js",
    "revision": "4c18b8dda396befe9c982a387b59dc36"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.89941576.js",
    "revision": "dd2333eeaba902f337b3aefc26869c7e"
  },
  {
    "url": "assets/js/19.17e43b13.js",
    "revision": "87de976a3d3e12b81a13c213bbadcf31"
  },
  {
    "url": "assets/js/20.ed497452.js",
    "revision": "1ba117156ecacb6206c3364b6caa77af"
  },
  {
    "url": "assets/js/21.d6fce277.js",
    "revision": "123fedd7c7546317aed2e6286ce59329"
  },
  {
    "url": "assets/js/22.44a34fef.js",
    "revision": "3fdc55b95aa83056c82275545acbbd34"
  },
  {
    "url": "assets/js/23.9a7996f0.js",
    "revision": "12c52b13afff3bda40657f94415794ff"
  },
  {
    "url": "assets/js/24.6ad5806e.js",
    "revision": "f5a7067e0c676dea22c62d3869dc3072"
  },
  {
    "url": "assets/js/25.63b7f1a2.js",
    "revision": "2b96c6eaf0f54790b1b690408be646d4"
  },
  {
    "url": "assets/js/26.047cd97c.js",
    "revision": "f9811124a8761279c895dbc5a40d9be8"
  },
  {
    "url": "assets/js/27.c5e59ec4.js",
    "revision": "e15241c584c0e0a89fec4dfea7f7bc81"
  },
  {
    "url": "assets/js/28.890e5a3b.js",
    "revision": "ee4aa487c698946b650aa928f8ded686"
  },
  {
    "url": "assets/js/29.996852cd.js",
    "revision": "08a513604b22b3312f68f101d7cbc5e5"
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
    "url": "assets/js/app.2d35c134.js",
    "revision": "2d513ccaea9f8a247cf28a305b0de651"
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
    "revision": "6a98cf164594460615d8bf2e0b35347c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "0177dfe17bd6050c37216c3e06ecb800"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "3a75ec5c6873f10ddf2db8cc552e95e4"
  },
  {
    "url": "guide/contributors.html",
    "revision": "fd7520662a18a8d49b70dafc36cd3182"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "a08af35f7abe4a01bc5ad0a53d73634f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "8ac1662966aecae93e93a3a57846434e"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "15f08d9ad29c1de7bf6d422aba42d0c7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a42c315fbefb4a0c0eccd79bd88fd767"
  },
  {
    "url": "guide/index.html",
    "revision": "48b663d03d59e9a82f1391bb79372316"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "adc94b1755474163e09d50d46ff4e414"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "d35315a65677ecce612d3b505df150c8"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "a9cf8cbf0177d7bad9a1dff9cc5a48da"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "934d96351e0bb9d36f3624d2a6cfaf0d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "8b4b251259f41c0d4e4939221a34d52e"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "e9ae8d5ae43dd139362a736c3eb1fbde"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1668d1b1dedb3794ed0b04af824124fd"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "ddb262304cf8082f86bc558013311f92"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "6ae5297aedf5f0e3ce31beb9b41570df"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "e1abb019c573710a27ebeb30e6ae9d60"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "49075d4ebb1b115f2093c20333e0f83f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5def02b1f1e2b333393be26505fa992a"
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

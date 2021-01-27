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
    "revision": "8e4ebbcae00cae545b53511af90403a6"
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
    "url": "assets/js/12.08e374d8.js",
    "revision": "bab0640c5c42acc55e68bc8ca6abb0dd"
  },
  {
    "url": "assets/js/13.97552405.js",
    "revision": "6b0164e6ac23ab20f2ebd211a8dc67f8"
  },
  {
    "url": "assets/js/14.463e000f.js",
    "revision": "18b7de48417e8c9e6ce98400c970dedf"
  },
  {
    "url": "assets/js/15.70c9efb8.js",
    "revision": "fdf26b7c0eeaa72ef7bc858c8cfc2af9"
  },
  {
    "url": "assets/js/16.fbb2cbcc.js",
    "revision": "98307a42bc90bd82a576a1f9f1d1f1d5"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.85a04573.js",
    "revision": "101d61721a1579ca607089d93bdb4149"
  },
  {
    "url": "assets/js/19.8aef5e48.js",
    "revision": "8806c05cfa816de61f1fdf88891bd545"
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
    "url": "assets/js/22.cffc4617.js",
    "revision": "deafe280afcb531a4e02ac885b8146ef"
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
    "url": "assets/js/25.e8e28d49.js",
    "revision": "a485178af5752b23f45d5e65174489a5"
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
    "url": "assets/js/28.bf3408c6.js",
    "revision": "7022b1e537ee806582c50f921ffc373c"
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
    "url": "assets/js/31.38f00854.js",
    "revision": "27bcc5f04f6671d7da07d1da771a2da0"
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
    "url": "assets/js/app.e0e15e59.js",
    "revision": "6215dac246e28459f969f6040a411e23"
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
    "revision": "cb9d8080b29e5268b7c0e014d7278f42"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "5c48bcd4e4d5104f5a813100cb2e1c80"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ff4967f6006c9bd0b0e83ef247e90896"
  },
  {
    "url": "guide/contributors.html",
    "revision": "ef4d0dfa297ac254f58c0bbe7c89b629"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "26906dbbfd9c9068d1722f1014ef5431"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "e7456eebd85ff69b3934e771e0448d7c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "327a7451a9092b79d294112fd972e6c1"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8be9a0aa3edcbd0b4d44acc911f5f32a"
  },
  {
    "url": "guide/index.html",
    "revision": "b1438f24b5ada4701b761ec86236d722"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b4b7d3cc7793687c3e2ce531acb01fee"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "68fe084961a526147f4cd70c87df7b23"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "2200f6828d8624f51a45a98bb72c5e14"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "2f31d94f43165693e73ec765238f2cdb"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "29da08058be61cd9d6fe43bd772b1d77"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "65b147683674659736f768fc2b3beee9"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "9a230bdd6da9585740cee0826fc7cb76"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6609848f373e771ff473dafdb17d9706"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "d2a68e8e6c151f044e1fa5e78716545d"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "6fd28378cd433341326ddf765bdad180"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "061e916d08e71f40b976afdd6f689e71"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "c9fdddcb19714b80a91dd05dc827ecdb"
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

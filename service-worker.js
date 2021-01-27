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
    "revision": "625465b44f46eb64290adf6a86481631"
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
    "url": "assets/js/12.57ff84bb.js",
    "revision": "ecb198c06022f8dc420d117d009eb119"
  },
  {
    "url": "assets/js/13.1845e232.js",
    "revision": "44f25df4833532d7df664280f60fcd60"
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
    "url": "assets/js/16.1e53a9a8.js",
    "revision": "25454da300d71043e62d1d145abafcf3"
  },
  {
    "url": "assets/js/17.f7d76990.js",
    "revision": "54d7bba5f4bb8cecff34599b3e406050"
  },
  {
    "url": "assets/js/18.bf58b118.js",
    "revision": "66b51c77e18e4da285be7d9d3ec8a37e"
  },
  {
    "url": "assets/js/19.8aef5e48.js",
    "revision": "8806c05cfa816de61f1fdf88891bd545"
  },
  {
    "url": "assets/js/20.d74fbd84.js",
    "revision": "f55d73400e76638b7bcdaaff2dc63324"
  },
  {
    "url": "assets/js/21.a2f4d78d.js",
    "revision": "73a8273ad04cc475c1b41ecdf120a16a"
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
    "url": "assets/js/app.9f418769.js",
    "revision": "82cb3049ebb5347059fe85339afb6246"
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
    "revision": "e8326dc3606b5deef2500ba3b4411cdc"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "8dd26a68d8eebe481f0c176062db03c5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "29a60c7cb4d5b3748cacb84cc76af0ae"
  },
  {
    "url": "guide/contributors.html",
    "revision": "8eaaafcbe88fbc708820ef4c69a13853"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d00c9d3bd05f21e52c3a02844369c94d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "786fba57b912d84d8ae3c233ffb273d8"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "d79326433d7f12fd0a55ce2cb3233b88"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "bc5e8cf2a91a1387061468e02d71140e"
  },
  {
    "url": "guide/index.html",
    "revision": "18969b91f59e52eece7a308469da5169"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "25dccd2be43346561d456b499469d6f6"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "666f95b245b28c05ba42be3fc3e9df39"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "1a2db2ace468b0d80625ed2af8d44a06"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "19f81bf8e8db984b822cad57ebfc0601"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "751e061fd3c7d294b08fc1d27fa64862"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "e464ad2143eb915c0f987bb095278f01"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "8e928ff564c83d076a72d13dea6e39d2"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "a5c78cb93633d9c75ac35e7a3d8537dd"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "dc94df0aea7632f8d7f388aabfe99392"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "5ab1c1461bdf91efb4240908391e544f"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "4227844298d11dccec07db0c42259b0c"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5c2f53b1ba079fcf0c3e9b66b991b043"
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

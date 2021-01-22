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
    "revision": "ea0544013ea5d23d53e9960c93b33b50"
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
    "url": "assets/js/12.e7534a16.js",
    "revision": "10efeacf7e78151c0d32d15c9b195856"
  },
  {
    "url": "assets/js/13.7f205b2f.js",
    "revision": "eb4dc9b82698788420594ea40e9e59d8"
  },
  {
    "url": "assets/js/14.91a2972a.js",
    "revision": "063c8f1c1533a50154cdeec68829528e"
  },
  {
    "url": "assets/js/15.70c9efb8.js",
    "revision": "fdf26b7c0eeaa72ef7bc858c8cfc2af9"
  },
  {
    "url": "assets/js/16.50c7c1d4.js",
    "revision": "5234de9db1ecddb7c19cfcb05140b72d"
  },
  {
    "url": "assets/js/17.3e568fd4.js",
    "revision": "97da1a7fd64d6e4135afd285f897ab23"
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
    "url": "assets/js/25.1cea2735.js",
    "revision": "17c5b69ee8c1223a318a4b2190846815"
  },
  {
    "url": "assets/js/26.047cd97c.js",
    "revision": "f9811124a8761279c895dbc5a40d9be8"
  },
  {
    "url": "assets/js/27.c34a6da5.js",
    "revision": "1389deb08852b73e6d862e9f0b3cbeab"
  },
  {
    "url": "assets/js/28.e0deeb03.js",
    "revision": "dea45063fae74f4e192f36a4e1da42a9"
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
    "url": "assets/js/app.c664510e.js",
    "revision": "a3d0807f89c25a956310be1f3e29130f"
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
    "revision": "0f4df7c5b1e3f3acc445acb538dd7d54"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "ca027e3e2e4308267eced31c7c05bbb7"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b155ae1d622f2d25267cfe13fe31887a"
  },
  {
    "url": "guide/contributors.html",
    "revision": "3a63e79e725912bc09f7a54fc367a4a2"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "f7b1d009980262bab7fc7e2605c7528c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "461f06d3226224850a7c5a23a264e0a3"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "ee0fb42f7ade73c66b47232da1ea1623"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "fb6568d0870c81e7e1605f4539a424cd"
  },
  {
    "url": "guide/index.html",
    "revision": "17dd08e69db9b0a7165bac03877c64db"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "065ae3ae28093b1d778df77a21f24ef5"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "8e4c74e2fa17f86e97c6b6f58297876e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "23bf5ad00ec4c8ece6b2cfd4fb74bc62"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "2b865ca30f8d7f7889e858db9d59b9af"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "f5a02e28ebceb127ab9636392ec1af62"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "1911539a5fb20e42e783f1d09f521aff"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "635424eaf168589719dfe688c2d472ab"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "26bbebacb16a7bf06de640d3a0875d1e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "4d458336b19d400536f1b78cce9f54be"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "81f347005c6ee8fdaf72aecd648a0cbc"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "84adf0f612e7e317d0a3b08d8e92ef4f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "bfe31205f82ed4e3894296b41e938f1c"
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

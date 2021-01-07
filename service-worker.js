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
    "revision": "15d939fb473f57008c6fc445931e0374"
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
    "url": "assets/js/11.4c852998.js",
    "revision": "a7afd95189f6dcdcd5d990a1b01c75ba"
  },
  {
    "url": "assets/js/12.ccf88ba2.js",
    "revision": "bfa3f61755e54af360453abd2a3fbd86"
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
    "url": "assets/js/16.24317299.js",
    "revision": "52c8c7b071348d92717e121b943dffa9"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.d76e37a8.js",
    "revision": "83fe196f9ba5570fca49aeef35b98af6"
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
    "url": "assets/js/22.a315b43a.js",
    "revision": "85e20464380d33031a5163d851186c9d"
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
    "url": "assets/js/25.80c3cbb2.js",
    "revision": "7d0254b1e03830991c5894023016b8bd"
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
    "url": "assets/js/28.ee19db3b.js",
    "revision": "d04077526bdb96b79b4a6f310dc00e27"
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
    "url": "assets/js/app.8040da74.js",
    "revision": "440dea11fccd7f673605b7fddf299a53"
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
    "revision": "33596277b56c69ef9b5bad023ba13e29"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "6fb0b80b741394833c857c654dadd34d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "e92a9fc024781107b61fd3c6837d158a"
  },
  {
    "url": "guide/contributors.html",
    "revision": "9ec16effcc1c354f2c92ca952735d5b2"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "a447553569b17760c9c8addca6af7d5e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "0c0175b33b9a5f73590cdf7213185db5"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c55d95af3e1fca780f1a8b8174f1cec6"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "cefcba0ac29ee4e11f78777f13cb73a8"
  },
  {
    "url": "guide/index.html",
    "revision": "63e408eb8e1b8ca66aa57ce5c8d43bd9"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "532ac18d73de4335a1bfac03e8a705ca"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "30f7c8eadbf1fc27523b27e4562dc548"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "23ddee8b55c1e969fbe6c46091628319"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "b5bbe3f8861b31bfb748f7adc889a70d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0c6980a4f26047ee07d41ce0c0834634"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "1ddd8845b9643d9083ca416311db086e"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "26eab77a0c2bf87387b327e2aa15cdb0"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "fbec3ac76106ef82802f2351a2e24b2c"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "4fcf2ba55fdeb42698514fe25e7a4b26"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a22554dce479ec5bd71753326db27108"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "4711c2973c2e4be846236c375af30960"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "2d9483162ddadbf6894e9f40be42548f"
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

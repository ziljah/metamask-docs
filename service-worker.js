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
    "revision": "49ca37872057bcc8b87ccc2db85f1d29"
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
    "url": "assets/js/14.ecd2ecf0.js",
    "revision": "2f1e9ce0dd4bd318d335cbd50e9552e8"
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
    "url": "assets/js/app.76c258f4.js",
    "revision": "713cd161eec4b6e6c9a7e940e9f6aff3"
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
    "revision": "d64e96d006784af6f8af6a2701b49c5c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "cb4ac0e827d49fc482d2586343020a01"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "20ed2ab931a02938ffc5928d97af83d5"
  },
  {
    "url": "guide/contributors.html",
    "revision": "b489c7d1a247a19912b03ac46ea96916"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d008a3d3c3df3462d7783addd239e74f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "5c5e041dfed887f9f9dc7c70db548e5f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "09493b9bbdd441904f27c632d06989dc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9fe8a22bc1f1d424f50e72c9e47c4d29"
  },
  {
    "url": "guide/index.html",
    "revision": "70161b21346edfc192e9480a6e5e371c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "9bcc3a2113bff24909f0fd8a2ae93873"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "e49e0d4082c40b88aa98b8ab0528d39a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "2381850cc6763c223cd4e22f07cbfb3f"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c1cbba2b3318da73d892cfaa19ae94ca"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "5d8e9dd27de60571f3d5cb3449675972"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "154e29f21e219bff00d3d3d4e657a9db"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "14e4d14bc1742115b211c68aab8c94b4"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "170c0da4ead291e02f3c9845aae781ab"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "976ae1abd695bfc8a3a1ef8a4d4ac3fa"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "9f56bcdb6f8389b1f2a15361d85f2162"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8c36129b4cb59c349194fa40cafe16c1"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "900e5cf35afa254c1f2184e82cf848bb"
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

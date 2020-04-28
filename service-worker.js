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
    "revision": "1e800e1a1378990407412f9a57e85244"
  },
  {
    "url": "assets/css/0.styles.be617bac.css",
    "revision": "67f64fab310fb30060c1e190fe482145"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.88fb86f1.js",
    "revision": "d977023ef2208131aed08ee3b434f96f"
  },
  {
    "url": "assets/js/11.52262a20.js",
    "revision": "cabab3454146152f48ce8e30e53fce83"
  },
  {
    "url": "assets/js/12.10c094d2.js",
    "revision": "79a7083aaec6b204f017a0273ef1b3c8"
  },
  {
    "url": "assets/js/13.0b6951d8.js",
    "revision": "ad77d96bc3bd19b206ac635919fa9dfe"
  },
  {
    "url": "assets/js/14.c0110bd4.js",
    "revision": "9e835f3286253be62abe302f2233591c"
  },
  {
    "url": "assets/js/15.2e062e78.js",
    "revision": "69ce8a01c0233ea04a3f7bfe8152f50d"
  },
  {
    "url": "assets/js/16.b2cb8263.js",
    "revision": "e418babb1be10ed415fb3e39c59730dd"
  },
  {
    "url": "assets/js/17.c7caf2f7.js",
    "revision": "d4ca9a47c05a9ab7ffa514e0866663a3"
  },
  {
    "url": "assets/js/18.16d2d927.js",
    "revision": "a4c759d3cb4a51709d66d9a446ee7df3"
  },
  {
    "url": "assets/js/19.ab59f43e.js",
    "revision": "b889cce66adab523071744c5b8d38de3"
  },
  {
    "url": "assets/js/20.7ede29c3.js",
    "revision": "d64807722c5e4eb5d012ac4468aece74"
  },
  {
    "url": "assets/js/21.266691fe.js",
    "revision": "41769863b76b7afd1944f6cc640ac297"
  },
  {
    "url": "assets/js/22.3b4828d4.js",
    "revision": "4eddda937b83a108cd609a5b18175df3"
  },
  {
    "url": "assets/js/23.c0e7300d.js",
    "revision": "eba50d73a042be82b90cf2d9ed7c24a8"
  },
  {
    "url": "assets/js/24.e9abd440.js",
    "revision": "e106a72caf7178f5128dba24e7a1ccda"
  },
  {
    "url": "assets/js/25.c7f1f32c.js",
    "revision": "f4399aad1efc386f8e80f1591b31ce23"
  },
  {
    "url": "assets/js/26.75b9a4d9.js",
    "revision": "4f63b8f65ae77e9887a47e24dc9f2c7d"
  },
  {
    "url": "assets/js/27.d89b79e0.js",
    "revision": "710071f6d3e39c6b014bca8577483f3c"
  },
  {
    "url": "assets/js/28.b31589f8.js",
    "revision": "e0972d88975278c173818b90130e4ac2"
  },
  {
    "url": "assets/js/29.d1b79273.js",
    "revision": "5ae54c02a42090ac546a8787838f85d6"
  },
  {
    "url": "assets/js/3.0a8a9c47.js",
    "revision": "2e4d6b8833ef59a434df89a2be023ff6"
  },
  {
    "url": "assets/js/4.5ba3031a.js",
    "revision": "335b83bcc4ede77075c894cbe6e8e1f1"
  },
  {
    "url": "assets/js/5.212710a3.js",
    "revision": "000b346b4c92f7eb01470d311069dfdd"
  },
  {
    "url": "assets/js/6.800c6b65.js",
    "revision": "7769f08b5c9500078aac96f84cabde6c"
  },
  {
    "url": "assets/js/7.e0b12fd3.js",
    "revision": "6936ab8f6cedbe9fa153f671f23afa7b"
  },
  {
    "url": "assets/js/8.a69a945d.js",
    "revision": "8ad748d81372477b35cc52acd1711b7d"
  },
  {
    "url": "assets/js/9.a7a37d18.js",
    "revision": "a33591bafcf585a1bd021bc886d687d2"
  },
  {
    "url": "assets/js/app.865afa4d.js",
    "revision": "86d686205143bd1f5192641f0dd50007"
  },
  {
    "url": "assets/js/vendors~notification.d2702915.js",
    "revision": "4d8e6c4c070f3d5530af9c73dd953fdb"
  },
  {
    "url": "ethereum-metamask-chrome.png",
    "revision": "79226bac078ce93a58b74aff1a8a6aa3"
  },
  {
    "url": "faq/index.html",
    "revision": "9fe93a19c0852f4caea19eb3c379f263"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "1f8e03ffb033546c567195e095ac8a08"
  },
  {
    "url": "guide/assets.html",
    "revision": "438b8a9c7e29541b3d342e534cb62a32"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "31b19035d71a9821de0ed0a74e5bcd9e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4c798765a0a3c515c1b36c29b4a8ed88"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "2772130d27dcc4226feba256b97b0747"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "193c675708b38dfe4bd963affca88191"
  },
  {
    "url": "guide/deploy.html",
    "revision": "2feaf80b89489daeb8fa209462c6ca70"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "0b0f2e3af22362a0cb9c785877d91542"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "132b868d6d3d64fef279ab7c561dfef1"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "234f264d7f28197f654465a83711e247"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9e147cd4b7088b829616ac3d30b4d473"
  },
  {
    "url": "guide/index.html",
    "revision": "bce9813f98edcefd5e70f3b12cf7acc9"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "1bd73b1393e445f42303ee77393ced31"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "bafe3d015db5887a88be8eaa123f347c"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "648617995969a1ae74317ab80ea95eb4"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "91a5a6f23c51c477825edbfc46a7efa1"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "a29bc3f23a5ef6a0a8e4b28ea4a229b0"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "20edf0c2d6e228e270aaace66d1dc354"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "b9c22e8bd51611ec08cc436edea58024"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
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

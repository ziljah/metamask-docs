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
    "revision": "32eec2d4a8b30da1b0dd5df72c52a843"
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
    "url": "assets/js/24.4be72047.js",
    "revision": "1b114368e0ab602f81591eee9badb725"
  },
  {
    "url": "assets/js/25.d12a5aa6.js",
    "revision": "5d4837ab7a1654a81d606dc653b9bb73"
  },
  {
    "url": "assets/js/26.2b016fb9.js",
    "revision": "72ff7bfe14c4d09d8d100726191d4af9"
  },
  {
    "url": "assets/js/27.8216f237.js",
    "revision": "bdc86b39a7c610ca33f27e22d11e7710"
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
    "url": "assets/js/app.b4a25899.js",
    "revision": "7a24b2270a820e428ffcc0d3d953f857"
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
    "revision": "ba8baf54a6290473e07ddd2165dc3e7f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "7e3e537a746ec326c954d4130712fbb1"
  },
  {
    "url": "guide/assets.html",
    "revision": "fa4b0d932cf64a735ff361ace8f7e3b6"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ab1e1dede6a042c6f4d07fe5832f3dba"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "3c3310d61cbe280c670488c1f47da01e"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "93f64b4ec917cf3206b413c52231a16b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "54738bc8999576aff31d83724d82baa7"
  },
  {
    "url": "guide/deploy.html",
    "revision": "6a09a34aa0de5c90987f57ad26b22f21"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "56c9aedddabe2c108d27a2b25b9823ef"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "516d849263cd5e1f68340a2f77191c7f"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "b74660503ba21598f80c5f6be2627672"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "95efdea5ae5b26ee4734e4205362460e"
  },
  {
    "url": "guide/index.html",
    "revision": "2fab24c1d6490721214145282e2e1435"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "1b68c77afaa00dd97392378a3cf6b23c"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "322e06d9de2dd7d5fd92f9d9b731cfa1"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "949b71fd794a2b2ff692d4f97e564d77"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "8c42643a45dd34cb14812b179757e009"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "1faa47832fa1f8b0cf4fea36ef796e4a"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "b154be4bb5f59e858b1cadd2186dd985"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "bcfb4de8c5de3a8988f44ddf8549e4af"
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

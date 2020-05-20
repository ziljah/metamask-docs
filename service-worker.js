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
    "revision": "457d11c3a570d6ff8aa4481764bba7b4"
  },
  {
    "url": "assets/css/0.styles.2266dc7b.css",
    "revision": "0d42ac6fbe6d7ff27b2c196ad7d34fac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.97502985.js",
    "revision": "b52f2fef445fd72c0b5d6abc7366c51c"
  },
  {
    "url": "assets/js/11.8341b876.js",
    "revision": "eba546fefbe015a5c7db8e46f82b8add"
  },
  {
    "url": "assets/js/12.8c9db7cc.js",
    "revision": "20be22e2935cb232c01222da7e9b3826"
  },
  {
    "url": "assets/js/13.4f82c197.js",
    "revision": "80c1bae1df2ff1bee828c6fb71692c00"
  },
  {
    "url": "assets/js/14.967bd9fb.js",
    "revision": "f6c0404d575a22b79d6b2c2d4df50f25"
  },
  {
    "url": "assets/js/15.5f68c08e.js",
    "revision": "17c6b374d7e821ade88ea20cc4d31cdc"
  },
  {
    "url": "assets/js/16.713d124b.js",
    "revision": "5954239c7a847843a543ce119f4622b4"
  },
  {
    "url": "assets/js/17.1dae40aa.js",
    "revision": "7c51bf848002fd47c6b86b1499b0c6c4"
  },
  {
    "url": "assets/js/18.545d582b.js",
    "revision": "5598214c644592198f148012a3453851"
  },
  {
    "url": "assets/js/19.7678dc82.js",
    "revision": "afeb20897f9d705d8d421c39b2860139"
  },
  {
    "url": "assets/js/20.a4a5da52.js",
    "revision": "628952baad6bb43dcb89a40c0bf45b48"
  },
  {
    "url": "assets/js/21.9e7ad1fd.js",
    "revision": "2e382716f80a6705c1e386a3435fcb92"
  },
  {
    "url": "assets/js/22.01b2878c.js",
    "revision": "04a2d1c4c7e879bb445b0ab7d1331891"
  },
  {
    "url": "assets/js/23.ab81709b.js",
    "revision": "fb378ba6ab4f8b964a81a83f47aea413"
  },
  {
    "url": "assets/js/24.b360b81f.js",
    "revision": "c3b533aea8147032cd7352e89e1019e4"
  },
  {
    "url": "assets/js/25.b39f5f33.js",
    "revision": "9ab5d8a5a694ee67b390fa4989c0985d"
  },
  {
    "url": "assets/js/26.9689decc.js",
    "revision": "73d049ba469eaac16ec8136a572892c2"
  },
  {
    "url": "assets/js/27.bf31bfa8.js",
    "revision": "8f7634f9d39273d491b0e605e5ab461b"
  },
  {
    "url": "assets/js/28.adcdeadc.js",
    "revision": "d0e923fad3504db2b0b5038dcdec10c9"
  },
  {
    "url": "assets/js/29.137f94a4.js",
    "revision": "a78efd3098151f56f544ec0b40e2fbd0"
  },
  {
    "url": "assets/js/3.244b93ea.js",
    "revision": "9214fcf782f386f5459a3b1641929174"
  },
  {
    "url": "assets/js/30.eef992d4.js",
    "revision": "3cb1978342059e09c976a2b1fe9cec51"
  },
  {
    "url": "assets/js/31.988a7d67.js",
    "revision": "43f77d9e26d5709df9c66510c8d42f38"
  },
  {
    "url": "assets/js/32.a7f0df84.js",
    "revision": "758df66e3c0fa5b75df74cdece61b7d5"
  },
  {
    "url": "assets/js/33.849bcad8.js",
    "revision": "f9c87f39423413454391dd441485c622"
  },
  {
    "url": "assets/js/4.26ec4cfe.js",
    "revision": "176d9e63622233bbe50266b8cd48a409"
  },
  {
    "url": "assets/js/5.76d62b17.js",
    "revision": "fb7f39c4340051d41acaa12a3762afde"
  },
  {
    "url": "assets/js/6.52b89912.js",
    "revision": "780139334fe1573f1616e18fc2fb69de"
  },
  {
    "url": "assets/js/7.6cbf5b70.js",
    "revision": "597ddd1f29f812f868feb25c8d24a349"
  },
  {
    "url": "assets/js/8.6d9031fb.js",
    "revision": "1bad8c7bace93600ff68989f75f56577"
  },
  {
    "url": "assets/js/9.4fb0a7bf.js",
    "revision": "9ae389668083f09446b42bb7ffa900e2"
  },
  {
    "url": "assets/js/app.066b259b.js",
    "revision": "b1fcf5c63b4abdf1cfccc107b96a633e"
  },
  {
    "url": "assets/js/vendors~notification.845db04c.js",
    "revision": "a255cb8d877421ce112f3e8e7b7da9cf"
  },
  {
    "url": "faq/index.html",
    "revision": "60156ff58e663c39ed150bb00a17d869"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "63de5617182e85c73633a25832c70ccf"
  },
  {
    "url": "guide/assets.html",
    "revision": "f8187850df0ea2358612bb1db09de606"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "05ebe5738db09179e1d3ee5f3c782dbc"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "a59f0c11613de272ef67a403bf15d3fe"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "f20292b2c20fd177424a061a965b1a51"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "8928319f85b5d36817e64a3426d897a6"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a9df5ab32801ef8b9217d1e9d99fc2c8"
  },
  {
    "url": "guide/deploy.html",
    "revision": "2b6a700d27b306fd4ebd59017ac71e04"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "08aa1bae5aa6ae98950f508a94985b47"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "b0a41db881dc9041615d20a8b383173b"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "a268457bc8f8c345b0fa59e879b3626f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "15e618ce29bec26b34d2301d987077eb"
  },
  {
    "url": "guide/index.html",
    "revision": "66404b90f9d4a416b36015b0e9849ca7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b8f2bcbcee2eed9a54d1a773fb0cc6fd"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "8041c2c62a964aa6366532161509b5c0"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "644ec58739e2054fe2f2ea8bbe067e12"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "5d97eab566a00ad5116ceb541cb7093e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "dd3d8ebf5daccbe4886415bbd05c8bd3"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ab090773eb5949d7ee81de45e854dedd"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "4248ec9897d4ea2228d6e349933bcea8"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "975aafefcd8196dde02b30ccc612214c"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8a06c2a3dbac1a6cd5c7d9e8564766d4"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "618ad388e0f7d13015d56586bf0ebe5a"
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

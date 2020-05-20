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
    "revision": "345a16d791c12dfcfe676e977be6d0d4"
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
    "url": "assets/js/10.b5b69f39.js",
    "revision": "19c6ebd841f0966949860a44a97398da"
  },
  {
    "url": "assets/js/11.d33b2baa.js",
    "revision": "0add16ef222c5062a17492e4f2fdcb45"
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
    "url": "assets/js/15.e404cc9a.js",
    "revision": "9fe9bb0dc25622d38ee17449942cce8c"
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
    "url": "assets/js/21.e985d920.js",
    "revision": "3790879d74451e125f3f83f1881a7537"
  },
  {
    "url": "assets/js/22.f871464b.js",
    "revision": "f68f8c3b4c8ce9afaa5bf94b93282534"
  },
  {
    "url": "assets/js/23.6cb76009.js",
    "revision": "801f04f0d359ed1c3e5675b91d2f4e77"
  },
  {
    "url": "assets/js/24.04f4c9ec.js",
    "revision": "a19ca3b9cd9dea7791fc110baa6a4a9f"
  },
  {
    "url": "assets/js/25.b39f5f33.js",
    "revision": "9ab5d8a5a694ee67b390fa4989c0985d"
  },
  {
    "url": "assets/js/26.4c36ba09.js",
    "revision": "32c9052277e19825bf39ef17aac681e7"
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
    "url": "assets/js/app.97dc0804.js",
    "revision": "2ef55340ba93fde1f99d7caafe8671aa"
  },
  {
    "url": "assets/js/vendors~notification.845db04c.js",
    "revision": "a255cb8d877421ce112f3e8e7b7da9cf"
  },
  {
    "url": "faq/index.html",
    "revision": "8a96f2782342b483efed50d0625e7157"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "7725efdb657adb6c262ea3fe5ec44a3e"
  },
  {
    "url": "guide/assets.html",
    "revision": "c1ba9a450b503d64beb1961400d19487"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "3ccbf2a482343eb3163399eff1476c54"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "0074c122c85f3903c1993a29809c3b08"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "8c064ea501a3c36dae59ef6e705383bf"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "f33d0e41dd5aa9cbf6e2dc9f75abf3b7"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "021221b1cc5f54037ef9f802323a4b73"
  },
  {
    "url": "guide/deploy.html",
    "revision": "baa3925828916e0171f6945eca5cd7f3"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "78fa6cdcc237b6dcce19afa4a6046021"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "b0e7238c688483cfa77a7562236611dd"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "0911538677f8b8d2307906c452118950"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6a068ee8832f1bb11b49d431a698a3b7"
  },
  {
    "url": "guide/index.html",
    "revision": "f1c3b9d46a3cc2028fdbf02116c23462"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8f7a118e107e3db562a7639839de944f"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "ac50066c169c168c6c57748dc08fae2b"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "841100ee7489754b1010e21cb5419448"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c86d245e306930e37f361e8e97efbd4d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "146512cf7c1652fc05e68d83f34386c1"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ccef42cb7436b9382d9cd0d45f2b7b09"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "db7ae85ce1b39fc2bba81f92ee3fca35"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4462f093c04453e3291f02d7a45c7855"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7727263ed4ddd9dfa34b3d782df2d905"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "a9aeb7d0aa0da8859c41df3a4ba22a01"
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

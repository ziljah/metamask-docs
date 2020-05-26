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
    "revision": "026b46547f2a7133c588550dd3995764"
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
    "url": "assets/js/12.f036df89.js",
    "revision": "a311c31b90fc0a8ef69894782cd09cf9"
  },
  {
    "url": "assets/js/13.1246f4ff.js",
    "revision": "efc428be630dacd6d253a6aae957ea47"
  },
  {
    "url": "assets/js/14.ea64190d.js",
    "revision": "024d2953d20bb63fdb036a7096ebcf19"
  },
  {
    "url": "assets/js/15.0266c560.js",
    "revision": "b745a943e1b1c00917b0ba5538b568ff"
  },
  {
    "url": "assets/js/16.9ebae792.js",
    "revision": "930ed34422fa36216cef38f478469703"
  },
  {
    "url": "assets/js/17.8b8f9618.js",
    "revision": "34164eff4daa3f4b07e88d3e787a831f"
  },
  {
    "url": "assets/js/18.c652db71.js",
    "revision": "9ee9f0bd0eeeb63ea38be5ecff6b61ff"
  },
  {
    "url": "assets/js/19.7c737074.js",
    "revision": "2ec48714270db72977c69c25427db850"
  },
  {
    "url": "assets/js/20.92139fc5.js",
    "revision": "d74aea3f459a09fe30b512a5beb139b9"
  },
  {
    "url": "assets/js/21.e7a750c2.js",
    "revision": "2ab7845a368f75ea17912fb90f89cf3b"
  },
  {
    "url": "assets/js/22.9975517d.js",
    "revision": "50a547da38f3b8fffeff3e135aabad4e"
  },
  {
    "url": "assets/js/23.5c275e27.js",
    "revision": "9b4e13a5afa47d0963846f36e8ffc978"
  },
  {
    "url": "assets/js/24.435f7e7d.js",
    "revision": "808fdabad915dac161a05f10ac83929f"
  },
  {
    "url": "assets/js/25.0d4cb000.js",
    "revision": "90daa0ab6cefb56ba2698da13508afd4"
  },
  {
    "url": "assets/js/26.545d7f3b.js",
    "revision": "6418a9f10b057d20efbc15b33c3fc83d"
  },
  {
    "url": "assets/js/27.cc91f66f.js",
    "revision": "c77ad68d6a2b1383144e81be35a8fb25"
  },
  {
    "url": "assets/js/28.d16c9a41.js",
    "revision": "808b67d836366e759ed6858b4096c01e"
  },
  {
    "url": "assets/js/29.5460265d.js",
    "revision": "13b144f1adc8aeba0ebd38a0bcc7450f"
  },
  {
    "url": "assets/js/3.244b93ea.js",
    "revision": "9214fcf782f386f5459a3b1641929174"
  },
  {
    "url": "assets/js/30.0950604a.js",
    "revision": "7c8e5429236d89e5d015744f497ecc04"
  },
  {
    "url": "assets/js/4.101f14ac.js",
    "revision": "55f0a24ffe80f82fbdf6edc916903a40"
  },
  {
    "url": "assets/js/5.bcdc8312.js",
    "revision": "cc10e684c8222d6675720ddf4266101c"
  },
  {
    "url": "assets/js/6.52b89912.js",
    "revision": "780139334fe1573f1616e18fc2fb69de"
  },
  {
    "url": "assets/js/7.892fc733.js",
    "revision": "f3516e351fd18034b755127f87b4bf6a"
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
    "url": "assets/js/app.73b25a5e.js",
    "revision": "d957a7db6c5585d4584252cc395e874f"
  },
  {
    "url": "assets/js/vendors~notification.845db04c.js",
    "revision": "a255cb8d877421ce112f3e8e7b7da9cf"
  },
  {
    "url": "faq/index.html",
    "revision": "1c87bb09fec9faf880632838e8c76e63"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "fd0cb90be29a52e402ad4b608c6aa66e"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b6010c9463f11833d0aa790d2008dcf1"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "204a94d9d5d7a33e4e7b170c6072b3fc"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "9bdeb1c27c554bce9589535d1b272838"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "e38a38634678425e415614c3cbf81ea9"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "0268c7d76d514afc975587c0559d6caf"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "eef4fba0a8b6087463e2b0f68dd437fa"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "f76ad32e66f6c9d948fdb62f7ed4bb5b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a5d76ecbc1fe4b2929dc3eca0153f41c"
  },
  {
    "url": "guide/index.html",
    "revision": "441ec28996726754446f6394ae1c4efe"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8acfef3e0cbfbba1a1f0ad8804495817"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "eaa84697a1c137c2b1f56dbd993a9558"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "8612d4875ac2d6113c81b51f521b3d16"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "44292d5a3e2a9ee198659521140e1a78"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0c0eac1f290f26b11ea1eeee86dc8a55"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "d2486c2b7bba5588e0156e39ffe769ff"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6550a4f507ebc0b418fba6870a65f946"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "748237bc93e321feb77f6c3616700fee"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "950955c6b654ff393d8f1d8212e48934"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "0c14d2d07300de5c51a85dd4a484a7d9"
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

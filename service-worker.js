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
    "revision": "090ddee1f4b2abe2cefcb3e5ee9f2ec0"
  },
  {
    "url": "assets/css/0.styles.f3b6e9f3.css",
    "revision": "9769e2fb0e0854fb4620381249f9c5d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7379bd90.js",
    "revision": "57c2f0cf98c1b04aace2eba18dfca623"
  },
  {
    "url": "assets/js/11.41b7363d.js",
    "revision": "30b66706e724d065c9ca1caeae15d3d4"
  },
  {
    "url": "assets/js/12.8cdb27cf.js",
    "revision": "2b23e174b6fcf99ee50ec0e2ea27612f"
  },
  {
    "url": "assets/js/13.33ec82fc.js",
    "revision": "51fa9b9b713bb29a3e98c14ad10aa488"
  },
  {
    "url": "assets/js/14.a30ce4aa.js",
    "revision": "3ca84094c49a48eb7f2daba1f8f04598"
  },
  {
    "url": "assets/js/15.02882e4a.js",
    "revision": "be173af036cc0121c6df801542f4832f"
  },
  {
    "url": "assets/js/16.6007188a.js",
    "revision": "0a1b7aedb614d7ff88505c987b503d91"
  },
  {
    "url": "assets/js/17.de902261.js",
    "revision": "4c695b633e8fc36607ad4e10e200f44e"
  },
  {
    "url": "assets/js/18.28c28bcf.js",
    "revision": "7bcbfd3d1dda70b6a5d42d6c614ba182"
  },
  {
    "url": "assets/js/19.4d9f605f.js",
    "revision": "37f80a8e48bfbc2ab12f15cdaf92e368"
  },
  {
    "url": "assets/js/20.f1cafd09.js",
    "revision": "2ed0173ac3d73a50eb8d3e52f677f300"
  },
  {
    "url": "assets/js/21.20071e0d.js",
    "revision": "66c415cd67e5ea6a76347edbc6f8eb58"
  },
  {
    "url": "assets/js/22.d711248f.js",
    "revision": "f9bd6e8016dfe50af91ad7d9f58774c7"
  },
  {
    "url": "assets/js/23.11de0a85.js",
    "revision": "512fb0571d13e7033053751292fb260b"
  },
  {
    "url": "assets/js/24.bc70c52b.js",
    "revision": "c5efb6700ab070760aa669ff9cd9e25d"
  },
  {
    "url": "assets/js/25.3cc22b07.js",
    "revision": "947e785edc08c532de7ba31f8e98af44"
  },
  {
    "url": "assets/js/26.6c43c100.js",
    "revision": "37e737b5537d0e4c55fa2f6ff7dff1f6"
  },
  {
    "url": "assets/js/27.7eb16e65.js",
    "revision": "08e74525988d92c3f4284cb982da1fc9"
  },
  {
    "url": "assets/js/28.2ffd9e90.js",
    "revision": "68adc030bcd0160248fc98b2e8bdf65d"
  },
  {
    "url": "assets/js/29.a7f8c7ef.js",
    "revision": "16cbba8095efc9431ebbb1b473d606e3"
  },
  {
    "url": "assets/js/4.585ebdb9.js",
    "revision": "2101f31f3696194c88efe7d81438a13b"
  },
  {
    "url": "assets/js/5.6356bcb2.js",
    "revision": "3c377d978de2f462554c3010cd7bb662"
  },
  {
    "url": "assets/js/6.3c3e6efb.js",
    "revision": "92b862eda8c60cc467f23e26a74ca484"
  },
  {
    "url": "assets/js/7.b213a769.js",
    "revision": "b76135d413fdea4e298b8476744373f1"
  },
  {
    "url": "assets/js/8.5f80aca0.js",
    "revision": "c00a56a200faa232a7f646e257f4cd0b"
  },
  {
    "url": "assets/js/9.eb4bbf3b.js",
    "revision": "aa36ef7cd5c8f0e5a8caba996c3a7745"
  },
  {
    "url": "assets/js/app.4c8b5f50.js",
    "revision": "50b99bdaf6d7a424453755bd01bd941a"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "assets/js/vendors~notification.e64ff089.js",
    "revision": "60f80241bc1086602f2721767abc0a52"
  },
  {
    "url": "faq/index.html",
    "revision": "74d17714af0f0f720487f45b4781d17a"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d46684dd5244dc82a560a10fac28600a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "0f9f04e73536cef50f66c0e10da98f3c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "63d43fb3577fb79a9e8f4de119b8ce5a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "763fd40fac5ab7430c5607eb962f8d3f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "533364b4071d881bcbbec675728a3f79"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "09a37c09889516f84c4b8854949f4b2f"
  },
  {
    "url": "guide/index.html",
    "revision": "b4f784d41a213b825fd7fe8c88346fdd"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b77dd0f2a1bf85a6b34a692254be57a6"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "25bbbde0c0bd27693a80d54f56fc6877"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "5f1be6c0766a32212c594ae8b2d7d521"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "41799bf9aa117556ac3415735dc5affc"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "3592ff3f9a08a4a7acf20b06cd9182ac"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "706eda7496367c2b8329dc095acdb117"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "fd447c2289c17df7ae0b740fdeaa9e09"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "65687f28773f8e07de82f79ca289b203"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d19ba17ccb90609cc03cd545b002444b"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "0c7a3d09e96d603e2da81b81683841af"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f2376b11a0a30b6fe55e24957a024b5a"
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

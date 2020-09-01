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
    "revision": "98cab02d8c4947a4f3ca83d46bb37df1"
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
    "url": "assets/js/16.710ccd0a.js",
    "revision": "c23f93e2f511da9e7cdfa245575b3ad6"
  },
  {
    "url": "assets/js/17.de902261.js",
    "revision": "4c695b633e8fc36607ad4e10e200f44e"
  },
  {
    "url": "assets/js/18.63285ccd.js",
    "revision": "c15894d06164e16dc88e3d659b3fc819"
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
    "url": "assets/js/21.995a53ce.js",
    "revision": "aa931249585092077367af50b535b12e"
  },
  {
    "url": "assets/js/22.addaf659.js",
    "revision": "8b5413a24e512d79823929222643e854"
  },
  {
    "url": "assets/js/23.a26b6527.js",
    "revision": "40d7bd73ed1cc750fee9be134e57c5b8"
  },
  {
    "url": "assets/js/24.d14dc645.js",
    "revision": "d749a610dedf3a482f6cb4bd48152bf1"
  },
  {
    "url": "assets/js/25.8442cd55.js",
    "revision": "572bbd69a51a2d752c9dd79fc1200f61"
  },
  {
    "url": "assets/js/26.a00bf328.js",
    "revision": "dee8bd52cd7f76281f642b5ae553313a"
  },
  {
    "url": "assets/js/27.393605ec.js",
    "revision": "e170130f64382c86d53b2b713ed64d7d"
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
    "url": "assets/js/app.1fab7526.js",
    "revision": "d4efe7951c540da05b78af4d3468e9d7"
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
    "revision": "05ebd0b0dd44bda3c0729973c98a8e98"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "37db2a62d228577f292655b2974ad0a1"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "9701ae8c8593e37572ab7bf622c42c1c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "b8fd7859dbdb15571411055f062f1da9"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "6effa44469667f9e40a704d2e9db09a3"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "21252179192c0dab293564dd8a537942"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f5ad8e33f24053e7812716be4ba3fa8c"
  },
  {
    "url": "guide/index.html",
    "revision": "456b3f0d798414967e36aa246e704b6e"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ef7d50227308eaa43cadb8d864822483"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "9887689e5f8bbf648131b0e7b22e0fb2"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "adcd5e935dec0e2e32d028253bbd38ab"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "100fcac3484ea2b62e660cdcf2dc21ee"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "6f2ea992e74a9334e265bb4909ba2f47"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1bf8d915919119b20f198eb34616c4dd"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "a8c76ed1f61a31569aa7b39d5e5664df"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "7e1ccc2ba45761aaa2845b7cb04ea3d4"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "9d6f7d7ef9cff470a76c8dcb7062b365"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "0a7507f4721bc20b391f8807b389fa30"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "1076ce5b265f8eb665d0ad088e52b8a1"
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

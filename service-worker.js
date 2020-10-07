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
    "revision": "d10946123678988b15f59154672550da"
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
    "url": "assets/js/21.20071e0d.js",
    "revision": "66c415cd67e5ea6a76347edbc6f8eb58"
  },
  {
    "url": "assets/js/22.d711248f.js",
    "revision": "f9bd6e8016dfe50af91ad7d9f58774c7"
  },
  {
    "url": "assets/js/23.a26b6527.js",
    "revision": "40d7bd73ed1cc750fee9be134e57c5b8"
  },
  {
    "url": "assets/js/24.d048d164.js",
    "revision": "7ebeae1c20fb518fab52a010ad9f8d4c"
  },
  {
    "url": "assets/js/25.e01d7f82.js",
    "revision": "fb3911c82cdc884e44833d88eb4faab1"
  },
  {
    "url": "assets/js/26.39e58241.js",
    "revision": "ec2540904307301978cc601f59dba758"
  },
  {
    "url": "assets/js/27.ab3e10b9.js",
    "revision": "626597e12c904cb0cb1068d9e303e262"
  },
  {
    "url": "assets/js/28.d2e2946c.js",
    "revision": "f2a023217560b53dd3c3fe5ff4fa5269"
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
    "url": "assets/js/app.c6daf919.js",
    "revision": "31aee6f5703006bc4b7b7d3f047e6166"
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
    "revision": "a8c263d06ce044400e7c47a146a69b35"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "c7d7b017d4ab5de3dc0ea2848c601f35"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "d017c471736ca8b208b4b65dfd139590"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "5f983e677951faed1edf5920ee25bcbc"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "89a8a80de2720f893a8caff77a7375db"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9377432cb5208155b00427708833d6dd"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7457587425e9d26ee9a852af24dec38a"
  },
  {
    "url": "guide/index.html",
    "revision": "98fd89c7b336ef549d616fd6dabb094a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "29b827dea25a479a318edadbaf98cb82"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "5da4f82660120034e6f5cc8923e4528b"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "fc967294e78022fbec6694f532de0d9d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0106e4a9f3abe12747a6d0dac07078ef"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "9cf95baf546db7262c686958c9753736"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "dd5477be2f3fac9c1821b5f3020d1ebe"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "05d2ea848c898995b8c6d01137801e57"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "454ad96b59bf08c897f5149933bbbce7"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "8aa32cc758e5c3d9e12d6b5a9720681c"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "78f20c5e151509e07b4effd36789d58d"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "c56c027cc8e2d8dd0b6053c3e3043c88"
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

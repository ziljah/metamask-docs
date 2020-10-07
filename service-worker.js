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
    "revision": "f5f68263b185c5da6ca7082f740a4b14"
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
    "url": "assets/js/app.4d2941e8.js",
    "revision": "7aa104cd7f3ad32c7b231417eec3a001"
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
    "revision": "4d396b614f359b822065f9d37747764e"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "3166a67dd6aaa68aaf801821c96abc89"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b4ed4a6ff6ff31961e75c4344cc08da0"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "a5dd2e8290ff2808e9051ba09989ab46"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "364c69d9b8aa7d71e7ccecd5bd275065"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "cf359e1d339a5497471a98e0a1bb5a93"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a7d6f919377739299d3e6a64a0e934ff"
  },
  {
    "url": "guide/index.html",
    "revision": "eab869a12b89370f7035f06d964fc75c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a71c3ef6b7a51fd124fa4e47af806c16"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "dc2520079e7096ad4a814daea506aef6"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "b217931028b5b8440cc3213c18159cf8"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "1a20887c998f591d91d915901736da4c"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "e65affef25a9d27a791c93252415d324"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "440a779bdf8b18ef1cff2e525f5e33e3"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "24a7dc8db7d4eeb802ea87410b8fe6a6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "ce08bd2dc4f90979f98bcc262629b8fe"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "22c9db90120fcafc42600ac9d55d81cd"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "29a73bb4d5458be41295e1a2a51b3ad5"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "2b683dad3fcaa3b35bca6f55873645fd"
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

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
    "revision": "7c2862504de80de854e19493a7d334a3"
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
    "url": "assets/js/11.184de65d.js",
    "revision": "9c76ffeea9235b096bcaaf8685b4b038"
  },
  {
    "url": "assets/js/12.90a36edf.js",
    "revision": "fb1c13cc5e0f2b90d3c8c035ca3e37b2"
  },
  {
    "url": "assets/js/13.33ec82fc.js",
    "revision": "51fa9b9b713bb29a3e98c14ad10aa488"
  },
  {
    "url": "assets/js/14.5e67a781.js",
    "revision": "6131542398f25eca2db5ffb0a4d8f3ae"
  },
  {
    "url": "assets/js/15.4b5faf5c.js",
    "revision": "a9770802522c06289279bf0b832af8b2"
  },
  {
    "url": "assets/js/16.710ccd0a.js",
    "revision": "c23f93e2f511da9e7cdfa245575b3ad6"
  },
  {
    "url": "assets/js/17.329c1695.js",
    "revision": "393859903c12a4656c6c7479094ddf2c"
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
    "url": "assets/js/20.2341baa7.js",
    "revision": "134157d2051fa5bcdd2d7f25f6049ddd"
  },
  {
    "url": "assets/js/21.7a43a2a5.js",
    "revision": "9d96a09c44e4eeb186a243b683113331"
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
    "url": "assets/js/26.f70379ad.js",
    "revision": "ce1076348839dcceea34b99aa1c2cad7"
  },
  {
    "url": "assets/js/27.759f3624.js",
    "revision": "a78c6dda70c5996bc4255ff2e1aa6cb6"
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
    "url": "assets/js/app.7ed4c987.js",
    "revision": "34f69b8892a0c228ed05b1e76dc39f6a"
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
    "revision": "050ebdd9de35cf16ff03cd245dad180c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "55ef39d00be861a54d6a0e54f883d75b"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "a74276923784cc9fc1f23c6b7fe6c904"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "269a6474560b1fe8eae49e01f0881aeb"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "2061ee1a7d4573ca8d7eed924641c2f5"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "64b45a09664b92bf504e9fdfb988a596"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1e569e38f425dffec61ea50f785b3168"
  },
  {
    "url": "guide/index.html",
    "revision": "0f9b5bd73b3d6daebd6a0a8d3b1c6355"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "63996c3a3ee3251499097b6df19c5cb7"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "896f7fd50b04e6ab6a2c791e63640998"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "851aa6da9cf5244fac88ad263df65ac0"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "9253ac00c14f49de676f0c4949af1214"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "67838e66d14e95400d0787514e092338"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "5d8f84add61cdd74d8e0d63e5c854686"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8a8dd6a5bbc750ae95851084729331f2"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "f7ba8ccfb5d2eb52aab8494fe09b9f1a"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "680c4e7bded98236451b5c37099a0d18"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "9707e845b787e49acc583ab5236021af"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "a7ac48c9bf84d8afa16d5186b44be02e"
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

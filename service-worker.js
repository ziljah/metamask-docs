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
    "revision": "2f43aa7f52857616f111c12da3e5d62b"
  },
  {
    "url": "assets/css/0.styles.d79a1fb0.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9885c248.js",
    "revision": "ad08c4f500a167770eb3fb3958011674"
  },
  {
    "url": "assets/js/11.2de1d8f2.js",
    "revision": "30dfba51ec06492cd3dc8c1ba6414d1d"
  },
  {
    "url": "assets/js/12.8c4c0727.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.7348b7e7.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.74fe7ed2.js",
    "revision": "eac8243d4a7cc7e3a9596eff0aa8cf6b"
  },
  {
    "url": "assets/js/15.5d58bde3.js",
    "revision": "7e6a50ddf76fbcdb74501ca84d3959bc"
  },
  {
    "url": "assets/js/16.dc649f71.js",
    "revision": "6f46f98759448ca7c7e558cd8e56d0aa"
  },
  {
    "url": "assets/js/17.04568593.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.707dc816.js",
    "revision": "91adfb4f88c236425aca89f9df8e9ba3"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.aecacabb.js",
    "revision": "271ff1471381a6677f09d3bcf701cb75"
  },
  {
    "url": "assets/js/21.8e2a9427.js",
    "revision": "5a5d982c07625a337e1d89cee65c393b"
  },
  {
    "url": "assets/js/22.388e7a56.js",
    "revision": "fda8d50ed5f8686162698af027c8e34a"
  },
  {
    "url": "assets/js/23.743792b0.js",
    "revision": "bc5e7b347a113fa5f734f23a4803e36f"
  },
  {
    "url": "assets/js/24.199174d6.js",
    "revision": "fb29e371adee6935dc6134ea3d927913"
  },
  {
    "url": "assets/js/25.ad74af87.js",
    "revision": "1fbb7be9be75ceed308f03661c510f4f"
  },
  {
    "url": "assets/js/26.c728cfe4.js",
    "revision": "e3516b830141ba132740a27a031adc2b"
  },
  {
    "url": "assets/js/27.f68593fe.js",
    "revision": "8a5142151240935c12d93762dec49053"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.f0b649f1.js",
    "revision": "e4715fd369328ddf2483971dde4f5e33"
  },
  {
    "url": "assets/js/30.b625f471.js",
    "revision": "15468bc01fc60d85f15387761dd3017f"
  },
  {
    "url": "assets/js/31.4746cd25.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.436bf087.js",
    "revision": "ce683c3558b3b63a8accc09582aacb4a"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.6cde43cf.js",
    "revision": "5c5c44950bf6f931106bfd3c7cff5444"
  },
  {
    "url": "assets/js/35.a8a51582.js",
    "revision": "8a40cc0869582cecd2f4d4dc80c75dd8"
  },
  {
    "url": "assets/js/36.f30bba5b.js",
    "revision": "4a9b8ddbf682f9ff17e6a5411d70a86e"
  },
  {
    "url": "assets/js/37.56530481.js",
    "revision": "be1568628464935e26ab18631eef56e7"
  },
  {
    "url": "assets/js/38.37c589f7.js",
    "revision": "24dd63c597f7153c7cd19375155d8d6c"
  },
  {
    "url": "assets/js/4.baa1ba71.js",
    "revision": "95efbe7ebc3321184214cb45cd3eca3b"
  },
  {
    "url": "assets/js/5.d309383e.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.cfb38f1a.js",
    "revision": "3da70382309dcd99ad46f309bdc0b45a"
  },
  {
    "url": "assets/js/7.e06a715a.js",
    "revision": "8b239d108f078eadbaea5dc084cec7df"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.6ceff5d2.js",
    "revision": "8aea038cb275e5c7b9368e5b008ac929"
  },
  {
    "url": "assets/js/app.d0e2896c.js",
    "revision": "f75efdba1253b52cc9169d7aed497460"
  },
  {
    "url": "assets/js/vendors~docsearch.3591cf1d.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "assets/js/vendors~notification.8ec48a6d.js",
    "revision": "8c5292ddd31a027ce1a72eef945787f5"
  },
  {
    "url": "faq/index.html",
    "revision": "d47f3ac58905ca06b190e39e45eea3b3"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "ae4bb0c59f3ba3b3e87d1f4b3db914d5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "89025666a3e21b833e24a3138d7cb751"
  },
  {
    "url": "guide/contributors.html",
    "revision": "a2581f2a50df3d8aa6205b3553fa377c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d5a2b7f32d69eccbf7018ec1ac78ded2"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a86dea65c337dfd539af613ea9752a4c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "66d76bf4176ca4f6fe208229204a2f8b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "03086050a30b328cd7ff796554dfd392"
  },
  {
    "url": "guide/index.html",
    "revision": "a24576343db748a9e514eda83df883cb"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ca73ecd415d947c2a2fa4f4ddded8b9c"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "67bcbb5336c576d6468e07225980baea"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "af6ff7c782a3dab720f9234b5631fd63"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "4754a4ab5e1ef57b6a4812c0109755dc"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "91be7a1ce6ac4d87533b10197d2f5246"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "eba35e5ea02ff8f10d127ff79562ec45"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f31f102383e392d73f667d8eb211e5d7"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "ffe2d1a4e71699d8ffbef347f526eaf0"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "48f4ad80413016af3eb040ca4f40a914"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "6705bd0fc784dc0a9a1e03545d20fccf"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "e9093a27b0da8c74cc2336baa227b5bb"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "020d20cd978f27547c7ae8c48270acd8"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "eb0cee68a65e65b89238bb61795b847c"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "cdce730a75ba43ba2a3d8384b790d9b1"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "5b5f682d2295d1cab59c87bced03c5db"
  },
  {
    "url": "guide/snaps.html",
    "revision": "415dbe394c832a8dc943de14e337407b"
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

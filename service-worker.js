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
    "revision": "a6a35321931f3f008aa0a235494e8c5a"
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
    "url": "assets/js/16.ef574c2c.js",
    "revision": "06f0275bc382aa8d929d7b2fadde9ede"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
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
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.1c341684.js",
    "revision": "ad147f22e00ea54b78d23b86506a4852"
  },
  {
    "url": "assets/js/24.96057b4a.js",
    "revision": "4024d566eddeb4bb079056a5f5c352ab"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
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
    "url": "assets/js/32.f83f1e48.js",
    "revision": "eede7959a7bbd197906b6377a6b22dbd"
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
    "url": "assets/js/36.2303d926.js",
    "revision": "5c7f2eaecbc63bc4f2baa41f537019c4"
  },
  {
    "url": "assets/js/37.194ea1da.js",
    "revision": "b51226e62ba5a05c1874430a299b3d92"
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
    "url": "assets/js/app.56958505.js",
    "revision": "c74fc4f8b2ae9a5ff714b9f068104639"
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
    "revision": "2349cfcd198de925f7ddaf80e746e9f3"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "4cbdc45b55e6bb90d3c07681130c614a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "415e116776c4ae398ae5364dcba7884f"
  },
  {
    "url": "guide/contributors.html",
    "revision": "c0891d8847fb2c741a8288d22a4b4b4e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "7c0f36658366a680a2c1fae79fb292d3"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "fa666625c667b5d5f4dc854b5415fd36"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "014ce124a26ce8fbf5e00da72596c528"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "694a97489cfc23db51dd21405a82435a"
  },
  {
    "url": "guide/index.html",
    "revision": "b30d5313691c87b6191ec08bbdfc8e79"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d76234499cd13a9239df1d46fee8a52b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "a3a94276bffa881a5afdc1b149ef4747"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "a9b617e4d16d736218860ea9a716eb39"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "26ab84cdf49f56c628e87c503fed1e4b"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0b34b5fb68139bdc05abf46a81980afb"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "f2fc4cf1ba3f9faa73c392b3188bd7dc"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0b4479471bf36484d3e18fcb54da67a7"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "58edae66dc82a36a12e9dbb4698defca"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "5ee80dc37ddfd6e07980c401082491c5"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "5e35536383a88ede9d1e0dd02de889b1"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "44591343341a69ea1d12c558a23c475f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "4a2b273ac859fc3e2bef9b25b913adb7"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "67a9c00ff3424e8a12101e68f590ef93"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "b144429cbef5337a2b806743499a74d9"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "a1d46bdb17cd81323e351c5cc90d9378"
  },
  {
    "url": "guide/snaps.html",
    "revision": "64d00b85800502163264190a4ae18b43"
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

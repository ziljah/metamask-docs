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
    "revision": "aa58b963a5e1a45b68c21b6636b1dfc5"
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
    "url": "assets/js/18.de42c61a.js",
    "revision": "ceeee2108567d8e8f8c9b7fb3c09cde5"
  },
  {
    "url": "assets/js/19.14fabb39.js",
    "revision": "af214bf9e936a73239f7e347fe0680a1"
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
    "url": "assets/js/app.162dd778.js",
    "revision": "adc2a6b1eeb150c5aedf02122cafeaaf"
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
    "revision": "4649ed16ea222e3902b233f1ac123732"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "0895ff9ebf0c8141935a67a95ca11145"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "a54e9025c1d6523f38d7a3773c4d38fd"
  },
  {
    "url": "guide/contributors.html",
    "revision": "60f0fab257fe2404f2befdbbc1999ac7"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "0c0bb55fce9cc305df98188b9052f2b1"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "6700ade0139c1fbd143802b99a97e5cd"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "f04c5af61f995d1107f67c044f0ae354"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b745f7397aa0776d7425f5a7319d8362"
  },
  {
    "url": "guide/index.html",
    "revision": "3b8e7f800ceae8292a8d0c0eac4c6c5c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "2398c418c3c09714e001a493499db27f"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "d3449b19455aa83d6bd00da7a7e8983c"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "f365dad28eee66f5ae82fb7a48842602"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "1926abae34d698bfe2364821ac2cb827"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "c40423952075b444257115c9184e4897"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "d3ad4095970726cbdb8237545b04528b"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "8030cd8af47a7aa98da51916c5f26ff7"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "3c8f5f653bb2957b252c6f7a05aa8f39"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "1242b4e05d3e2609b50c59b686d21066"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "45552f88270ace704e77e808b12ff77c"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "9d5ec9a1daaa1322a937b45e9ceeba65"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "d888f3e4372758f117b4651c5353447b"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "f6d99fa100edb18ae3feb0df88ea03f1"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "ccacc57e78076e73b696bb6943f3b1a0"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "3b52897ea0e553c9db32f6ec9640b442"
  },
  {
    "url": "guide/snaps.html",
    "revision": "63ee23c55b1ac8284e52ec8aa7867cad"
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

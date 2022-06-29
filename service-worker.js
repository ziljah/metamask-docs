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
    "revision": "b6e9e58db440d7b189e8af78c542f326"
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
    "url": "assets/js/18.91fd6703.js",
    "revision": "062626d1bf1742c6e42c824bc2812d85"
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
    "url": "assets/js/30.eb9b7a0e.js",
    "revision": "553ecfa052c990d1c74eb312b832c385"
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
    "url": "assets/js/34.acac3d73.js",
    "revision": "21fee4647a4aa41213d5a08623774d08"
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
    "url": "assets/js/37.606b7264.js",
    "revision": "62c0314bbed5bc3431ac904b7a755b92"
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
    "url": "assets/js/app.e77a77ff.js",
    "revision": "963b078fcbb91ce976cc841e3d92f32c"
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
    "revision": "afd8d39d971e02a084a2e172c44b46f2"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "58257368c946e3dee937cc561a453df1"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "429968b97c929ee708d6450b86db4dd2"
  },
  {
    "url": "guide/contributors.html",
    "revision": "bbd8fea38fe486f971f7ceb749b2c3ee"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "3090ee6b08a9f5239dcf76f534720b5e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "c90805c0b58324cd80cd92823d5e9fd9"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "bfe528f44797aa4aaa1ca275d16349f0"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "74321a964e2b86ae036f42a7100bf2de"
  },
  {
    "url": "guide/index.html",
    "revision": "b9663b27c5813620d557f2545ac21a21"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e394b76057628ebdbdee86eb3fe063be"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "159de1f7f752dcf66540a87db3510101"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "69277e69b64aa24f1ac1fafa3381406c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "32d00fc8851c762956c6ad1619701806"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "3569fe82c638ca2b528bed895efbe3fe"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "6d47f1d8a64f05da43ce1b07c40b283b"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "883e2087de663c92d5ff2adfbafc93b1"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "d6d05bdc5d6f815b33aadb7beddd2b30"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "63549e1f9dd15f611f3f6ba573b3af43"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4775fe0560dd8de8565b33d894f9f5c3"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "ca1dab079706f88887370ee31e34dcbe"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "0448c6d77174ac6f620b0f51cfe8cc94"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "4a6d1cb870a5a6f0713aa65ffe44a310"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "f422fef833baad8d16df6f0d7e6af36e"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "e94b9ffcaa2a3b5250f5e2059ab13843"
  },
  {
    "url": "guide/snaps.html",
    "revision": "c6c28d9167f39ff50ae6c3a449ee73b1"
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

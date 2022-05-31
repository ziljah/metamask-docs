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
    "revision": "258a29b648da1ae391bf8953b7222eab"
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
    "url": "assets/js/18.689cece9.js",
    "revision": "85779238591901387a7dda658752d179"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.89021c7c.js",
    "revision": "b8236ad7e9851fa1c02c911b3fb1ee48"
  },
  {
    "url": "assets/js/21.845eda05.js",
    "revision": "686cb3c4978bb36d76dd01a8d044f635"
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
    "url": "assets/js/34.6e29b4ee.js",
    "revision": "9bdf2fcc824c050102d70e0461bc3c01"
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
    "url": "assets/js/app.6171c39f.js",
    "revision": "2997a665972cc556324749c8de1c2946"
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
    "revision": "ae5b7a232adad39a28a10ceae7718018"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "ed9e98e1498d60b68513cfbb2701bb47"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "6b985266a4b1a938886954bd334c4f46"
  },
  {
    "url": "guide/contributors.html",
    "revision": "11b240a6aa9b9c14aac2e7bd8c5c77b0"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "fc5fc2c1178373b4101686011f50253e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "4abdb1e1ed55f3ec08f9a959f636b599"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5eb62f05c157151f714fdee98bacb12d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "31dd3e833ce0267dba43f087615f8256"
  },
  {
    "url": "guide/index.html",
    "revision": "5f62af36cbc4e33e81eb71240312b32f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3e365f50788738cf974b9b32c28837d4"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "02a0a4b282c3ca2d75aa0a0ca342650f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "8ca216cde64c44a6b9a191696840cf7d"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "aaeac7b181c7cb39afd567e1a6b69557"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0ccb4ddbad3b74ec272c09570e98284f"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "5e3ec5d4376f654a61613ccdbdf38b2a"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "33167f22d5e6de2792bc640c7d8dfddd"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "f6f3af1a21181d6c56b45cd59ac30924"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "45bd276a2e785d1270076fa7d52cae74"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "bd0d1312cd30e3c8fc765837f9b4efe7"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "73e768b5091466c0bfca12db408f51d7"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "1dd5728e918677c25b9f36f65ae956cb"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "18ec12c6051480a4dece23bbd9398746"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "a7c348cba42026141c6c80a96a480f91"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "eeb75e39fed8929ce6d6595800d6aced"
  },
  {
    "url": "guide/snaps.html",
    "revision": "4066b5de7877ae82f832495d14b3f876"
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

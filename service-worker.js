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
    "revision": "fbd48de5e4fc117cb4bebebb87d145d5"
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
    "url": "assets/js/14.dc316dbb.js",
    "revision": "377a7b56efcb576cfaf80e240b99bf7b"
  },
  {
    "url": "assets/js/15.e177e811.js",
    "revision": "0dca5439fe63c8ab3b38d4a279f66964"
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
    "url": "assets/js/18.bd06271d.js",
    "revision": "e1aceae390021d087069235c8cd60a13"
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
    "url": "assets/js/36.74b10946.js",
    "revision": "d65c0379cde2835afc41dc5975989000"
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
    "url": "assets/js/app.65c891f9.js",
    "revision": "30c64dd119b98e418ca87982d3b37374"
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
    "revision": "2be5f4bc6a03d710eb85c53627b643fb"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "8693778a8fdabbfc2c30ea1c16e20a12"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "811f453e764bd161578ebf86325f8b0b"
  },
  {
    "url": "guide/contributors.html",
    "revision": "fe12022014d1ff6392ddcb2c9857d865"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "7b464461c088c68fd0193e0739d3c70a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "02a15c151ba3d0713a2e7c71acba1943"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "cc987750575964385c441ae9d154d558"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "694e646b74620487082c7a5e591d27db"
  },
  {
    "url": "guide/index.html",
    "revision": "acd47e2fb296d05aed3cca0079f665e0"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "98d24cd1746c5a5c6f1eceeff8a78e6a"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "45daf204fc78178a3da3a197d5635b51"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "a0f13161c22ccb6cd688e53aa0f102e0"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0182f18750f7f458a5c611c43e0bf465"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "88883778888d3d0aa7dedf2f009caa71"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2a34d68f2a5696d0c1e1ed63a2dbb6a6"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0ca03c198906f94a24a152718251baaf"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7a136c34e924f80a42d6d4d7a8105f64"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "d710f075ede3d2bc4566bf3190a9f662"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4e0319224b4e7cf182165c8561f508a1"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a14dfb6c912f4750b385e09fcd0389f1"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "b5e42a6df8b553eb15d7b0a656e6692a"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "d14909f8e0f003feed75e63a5230e9f0"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "26eeb7c8ec9a7ee6f449afa036e2cda2"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "cea319fa161b386e283120769a55d9ce"
  },
  {
    "url": "guide/snaps.html",
    "revision": "2f49e608c182b9a5119c5e8bd35b24d8"
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

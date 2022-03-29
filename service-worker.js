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
    "revision": "1c81a7b2ccad3edd96b0d2e47b64028b"
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
    "url": "assets/js/18.042fb45d.js",
    "revision": "d4807641835380db06cd35fd4b755696"
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
    "url": "assets/js/34.c95b474b.js",
    "revision": "c56b0bc7a2a02eb2abdf7d9738adb631"
  },
  {
    "url": "assets/js/35.a1c6f09c.js",
    "revision": "f5f496c391b92000ad1cc2253ead3f8d"
  },
  {
    "url": "assets/js/36.df3bec52.js",
    "revision": "d8a68e2abb1f57d3002a9e91a0178bba"
  },
  {
    "url": "assets/js/37.eb19e0d7.js",
    "revision": "0eb9ead751860bd2469f9b4f9910e87f"
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
    "url": "assets/js/6.a0d1e866.js",
    "revision": "29f718453c76590851211e3db25c8aa6"
  },
  {
    "url": "assets/js/7.50a770b2.js",
    "revision": "5604cecaa689454aa86376434b0c40c9"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.c87edbeb.js",
    "revision": "d517bd47317ad81e6ab16a0e8b3b6124"
  },
  {
    "url": "assets/js/app.52bad5f8.js",
    "revision": "e77a15f608b0bdb6d7c5ecfcffcd3600"
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
    "revision": "7ee85e14d20d2af4b293035431e037f3"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a5f3a2228fd59a1e3a9457af418ca9ab"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ee83f17ef158ef65ac4c6f1ff4f03cec"
  },
  {
    "url": "guide/contributors.html",
    "revision": "78f2f2fcdde3d5b320ea9e0fb7306ff9"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "e0637efd2575f92b8ab6756b66f6d02f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "8234b7c284d579e38606a4968270d3fe"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "ba3ba060622eb1ef6f6bf4466202b7be"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d1cbe61f30a4d68e9be4b0b6a4076693"
  },
  {
    "url": "guide/index.html",
    "revision": "a49f060d564dd69af2ac638ffab160a1"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d1fcc248bd23691a69e9bc023a120f50"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "4a7bb2162ce0a7b4bbfb0f4dfe69b896"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "fbc54b92bb7df51503f2fd15c6952174"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "e8dabbb61fb9c677fc2e9a8d5e8bb3d6"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "7dc9777642eade332a2a9ce9dbbe7131"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "3c7b16490bf8264587dff2cf73803d8b"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3efb5ad2723118e19ecb143feec7507e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "403a6045cd736699dd4b3b2fbe635f15"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "b379792e49abd9821c82f7e711ebeae1"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ffd561aa8f19c672995c3209814570c5"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "0b3787ceaf0f606c3feb7df5eb2f83e8"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "d7ff5329c8f10e52f1c3f712d670bfab"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "7cacee5db1c76a592b78a90f3e96e22e"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "a3cf5a1ffa76712aecb7c0d440f08049"
  },
  {
    "url": "guide/snaps.html",
    "revision": "d4b5df4e7799cfdaba1d1c4894bb47ef"
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

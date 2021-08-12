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
    "revision": "88bf1ea8055ea76c1ccbc0c666651216"
  },
  {
    "url": "assets/css/0.styles.6baf0c5c.css",
    "revision": "9ce6d3c6ecc5a0f4282e13684999f2d0"
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
    "url": "assets/js/11.4ac16b46.js",
    "revision": "d0ab467681a16154f4604249cdc723b1"
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
    "url": "assets/js/14.9d91f938.js",
    "revision": "5bc06405d10d434ccd0397fb5d185481"
  },
  {
    "url": "assets/js/15.f9dcc7fb.js",
    "revision": "4a497f65f7e031ef4a8f960a5708d19f"
  },
  {
    "url": "assets/js/16.35ba166e.js",
    "revision": "68489ae22192f99ff6009c04f0447caf"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.729eeed4.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.3e48e459.js",
    "revision": "76dd3fa53fd1f5e57448adc32f8673d0"
  },
  {
    "url": "assets/js/21.92c3ae83.js",
    "revision": "7cb971e9ec0359b71b07a7d3246559c4"
  },
  {
    "url": "assets/js/22.6570b10f.js",
    "revision": "1b2f9be1cb20dc6961fbcdff006afee8"
  },
  {
    "url": "assets/js/23.d19e42b4.js",
    "revision": "43bbe3e7676874555d726185318b3d8f"
  },
  {
    "url": "assets/js/24.f7c521e7.js",
    "revision": "186921b291402bac7b1f86935c65baf1"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.f3ced236.js",
    "revision": "092ef8939b9ac3c931fd8adfd134e1de"
  },
  {
    "url": "assets/js/27.8ed4b159.js",
    "revision": "124a5db8b3f384d372bfa267aead2cc0"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.902e9e5b.js",
    "revision": "a353e9eb3c5e6d64d20344f2176c3c17"
  },
  {
    "url": "assets/js/30.1d63ab4b.js",
    "revision": "b7a279b15c3a4b75b365126c57582840"
  },
  {
    "url": "assets/js/31.3b898d5d.js",
    "revision": "76310584d63389029a5758dab302c7e7"
  },
  {
    "url": "assets/js/32.20e013a9.js",
    "revision": "2d31ae1958f6a5fae4cb99e2b62eeeb3"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
  },
  {
    "url": "assets/js/4.1099f3bc.js",
    "revision": "8f3ef733572a70f81e397d547d24715d"
  },
  {
    "url": "assets/js/5.d309383e.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.a7bf056a.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.47c30305.js",
    "revision": "d05b7c14908b47828f889eba5ee33d62"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.fa97e3af.js",
    "revision": "970d2b91343a279410dffbe8ba3e039a"
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
    "revision": "bcd44da15063ceef29aa7e71b23a979d"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "2535885636d7c70b5f83d6d39f86ef39"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "f098875abaa24f3c69e37e7eff93824c"
  },
  {
    "url": "guide/contributors.html",
    "revision": "2a7c629e03c475fa8fd675a2cb722f01"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "958528e86a34fe78bf6291b59817631b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "fd680864377a70e3b5c22be70e2bec53"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "a0daefd02aa9b65e5975023a11a82af9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "44268f225152b01abe306a58bfebbd63"
  },
  {
    "url": "guide/index.html",
    "revision": "7757e5a649e049ecd1887d724eeb405c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "63d4c1bfa398a1f8d06be5aa651792e7"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "c5fa2972f3bec53b9f037fd9432d7f49"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "d09547f2bf6b4f49aa2f5732d846b322"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "836b2247f8b2b41d96beca0e5298b16a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "d276e973d88bbea013968e0d283611da"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "bd9934c2637627d8f8db955bd06d4776"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0b2b230a22836e99b451c1249f347b15"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "08f89b71cd8dba2d4c3abadbee2e1c6f"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "f9957a45c8981155785aac6cef7e7101"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "60ad5f4fc2d8e9197f30d44735256827"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "fca13141b7c7cf465a72410f597b46b6"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "c16f232a275be7a32e3303cb4494c327"
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

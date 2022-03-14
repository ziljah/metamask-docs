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
    "revision": "c3789de81a54d70f4aa5d8538f18901a"
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
    "url": "assets/js/18.3d569f46.js",
    "revision": "09b59bd21092b85b72a96940f310b7ca"
  },
  {
    "url": "assets/js/19.ee4b1e1d.js",
    "revision": "9cbff5bc32514ce5f59140985fd54cc3"
  },
  {
    "url": "assets/js/20.a65dbef6.js",
    "revision": "c538964b90281205331efb9b575a69c5"
  },
  {
    "url": "assets/js/21.7cd19eea.js",
    "revision": "ece2938e363d7e5fcf9fe212e105bc1e"
  },
  {
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.f88fcd4f.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.41489810.js",
    "revision": "91ddb8b48a3175e3538d66575f08702d"
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
    "url": "assets/js/27.978bfcab.js",
    "revision": "20c54e1f894a2f3cb869f040678cce12"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.a7dda938.js",
    "revision": "416f220ad55c5d6f1629300a6303249f"
  },
  {
    "url": "assets/js/30.e3449ff3.js",
    "revision": "37e4f0510c2d8c0b924df5e6559ec9d0"
  },
  {
    "url": "assets/js/31.74901bf2.js",
    "revision": "c72993434fd58aa88fc8b74f33ed6e96"
  },
  {
    "url": "assets/js/32.6620dda9.js",
    "revision": "bb7a4c20b6e2aa2fe14f0df04e6806b0"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.57ef738d.js",
    "revision": "3ee5da55cb6d13442d82b27ce958fe55"
  },
  {
    "url": "assets/js/35.ff867924.js",
    "revision": "9700852e641124190ba0c453b8be0c0e"
  },
  {
    "url": "assets/js/36.b713b113.js",
    "revision": "8702ad9d119c99af42dd2cccc1147fe0"
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
    "url": "assets/js/app.47eef6df.js",
    "revision": "95887c0a37470d0e401e2ddfa7c6e1ab"
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
    "revision": "e5f8d58dde658e7f24be8e991b53c8de"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "9b273dad12360518ee22eb990fdd61e4"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "0cf1220d8fb6b83be50ea2926c5f7378"
  },
  {
    "url": "guide/contributors.html",
    "revision": "2d0c236c9e46d94650dce0f74a505c1b"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "57ced3d5ef2c1d83bcaae2c713b553fe"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "d07e28f42d2094767d1e04a5ee24d689"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5e70eb08f38eb0e895987887efb7bbe7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a8b52b2125e8297f7c36f66914a48921"
  },
  {
    "url": "guide/index.html",
    "revision": "9978f06981698c80b26c4a1f4e81a80a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "0824fe38d58d7faf421a3eb5f52ec219"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "f177d1ea90df93ffd02b2005109f88b1"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "b3aac014cbb9fb7847336a7bf909d9cf"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "d506824e87cee58cc5025c5b6a489bda"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "5cb0071176360e31098dfb079762b742"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "c847da883a70ded0100a53c4d927e38f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "290d34d045f039dec80b23e09f5e9cc6"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "26e1a21b4dfb1fb0ae342fdd29cfd352"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "873c523f984035d87702c751832cd1e5"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "f886f8626549172e9ed9cb6c5ff680bd"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "4e10ee3785a2e0596661b175b02757d1"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "40327a5cd3fb8b9c2e2a6c00d12dc465"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "4284a89ff5a14a9166ad3abfb498d7ca"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "4e0fc7c3d5eba2e752c9c12da8f9df57"
  },
  {
    "url": "guide/snaps.html",
    "revision": "90c5ed73ecca5cb156700a187037b3b6"
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

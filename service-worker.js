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
    "revision": "7a5514c71ca60c4be9a4101d617927a5"
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
    "url": "assets/js/18.a596dbd5.js",
    "revision": "2ce04cb55a82a5823f7d8b6ef209e4bf"
  },
  {
    "url": "assets/js/19.14fabb39.js",
    "revision": "af214bf9e936a73239f7e347fe0680a1"
  },
  {
    "url": "assets/js/20.4b085eef.js",
    "revision": "606350382f1c97299632159e981665db"
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
    "url": "assets/js/30.106c32cc.js",
    "revision": "f5382108ab4c2a2614ddee9a96ab29b1"
  },
  {
    "url": "assets/js/31.74901bf2.js",
    "revision": "c72993434fd58aa88fc8b74f33ed6e96"
  },
  {
    "url": "assets/js/32.8cf93b32.js",
    "revision": "871515275fbdd526af0a704c4e477db5"
  },
  {
    "url": "assets/js/33.a3eb0c35.js",
    "revision": "c022921ae9e2db411307c1eca59ed649"
  },
  {
    "url": "assets/js/34.c3efec63.js",
    "revision": "664df718ce9247bea90892d9a7e60a8b"
  },
  {
    "url": "assets/js/35.cb029de6.js",
    "revision": "11dd455b36a0da35ac8b3935a725fff4"
  },
  {
    "url": "assets/js/36.f59cf17e.js",
    "revision": "61583d1c7275eb79facaa5792b8ef8ce"
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
    "url": "assets/js/app.7b01a75f.js",
    "revision": "d03a878c74e1cd532936dd16a92957e2"
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
    "revision": "b831870f6bcfb4aaa844c57b594e6ff6"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "ddff4cb8255359e22845c8af2654c4c5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "6cc7ed5b51dee2d61f2dc242bdceda8b"
  },
  {
    "url": "guide/contributors.html",
    "revision": "3a5be1bbdec5327ba283a178b69ecc29"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "3b6f27942d76771397adeb998d29d015"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "be00d3daf87af2d4ea0e8a5732073596"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "917a19b98078b6f90cde8e7e7d7ed51d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "35fcdeb66f39270d2b5bf25f86dbbbb6"
  },
  {
    "url": "guide/index.html",
    "revision": "504d288574074c8a63fa754c893ead43"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "28767fae47e4095f562f4cc727320c67"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "6cdeb42805a051b9ed1d63274c72e38f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "fb9b5ee1636f3f171dd7a71a4a2674dc"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "e468a3ca5d0b8e8a2593202b4d7e8d86"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "6dec9b648449a19b394d0868edaf6fd9"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "e369ea8058dad22cba1bc39f4941ede6"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "b53737fdd138992eb44e71ab015d82db"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "596e27ac23e186f1ea8ad5d2353fb68f"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "a085faa7bcabfb20de5fc8d702608d3b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c84a20b4fe78b0fdc3e652e911582e99"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "32f53400e4af67e09c146bc3ead25442"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "c90d80529220bf2755084568e9d9e575"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "2800cfeca408faf618d2c66bdc3f275b"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "9c9ede5e86f8c8a176cd05a7d25e4754"
  },
  {
    "url": "guide/snaps.html",
    "revision": "d1acb358d967e3fc7b60a2db7e778e23"
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

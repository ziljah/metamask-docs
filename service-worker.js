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
    "revision": "e3e2e4c46318181a1ab72ba578de6d41"
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
    "url": "assets/js/17.9a195ba9.js",
    "revision": "61c28ef64b5061e4711613cda0d84bab"
  },
  {
    "url": "assets/js/18.700d9e8b.js",
    "revision": "d13f9ca2157b9fc7876d830287b48335"
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
    "url": "assets/js/27.0397d747.js",
    "revision": "7f72f8a3f8b36a7fe3311fa92eb3ab26"
  },
  {
    "url": "assets/js/28.e08db3a9.js",
    "revision": "88bb8249c204588a79d55064ffc79fec"
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
    "url": "assets/js/34.571f7db7.js",
    "revision": "f61126ca2c568a654db016160fc7af93"
  },
  {
    "url": "assets/js/35.cb029de6.js",
    "revision": "11dd455b36a0da35ac8b3935a725fff4"
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
    "url": "assets/js/app.586f7278.js",
    "revision": "046ae8429933049f1d489a3dd6d8d0d4"
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
    "revision": "f9a173873b979962368822aaca180371"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "8a2809181f8406d2f99c2abbdeed4416"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "5cdd0bdfac177fbfc0849d7842dddfdf"
  },
  {
    "url": "guide/contributors.html",
    "revision": "f1f2c9e7e7bf2626c9b43ccaf1185b49"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "381e69f2ecd86a180ddc1c996cafb23d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "94af731210e3c8babbb76b1ffe739c7e"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "cbff4a9af6d534c6663136d95c78466e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f6c8d81d2cff47873f722a0b93dc63a8"
  },
  {
    "url": "guide/index.html",
    "revision": "b1fc08096f470cb571f00e7b1e56b707"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d2fbbce95de3a9dd31900062a785bb30"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "eea6b77c750fdd8feec1485f20615d5a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "b697d07edf3cebe321467185a7165170"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "b3e88607fd780296d4757ae9947698f6"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "224cf06ed913246fe725b0651aeed57c"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "eff7105f0e6de4e76acd23199b733c0f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "99aa9bc992d4a6d2c44118716fc8ed55"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6c5d4edde91ca53fd6630bbde4a2adcf"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "0dca06f801f5932f6d2f54ac15750253"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "94744d78455364fded37f9ec4dc6b312"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "bde2472ea28b1fa5cb6a25792a8e6ae5"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "8c5ae5fc708df17fe71d0c5e28b1243a"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "54c2aeb3f5c072e71517ccb306a50554"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "867280b635cbd2557e9dd1d7b24bec0f"
  },
  {
    "url": "guide/snaps.html",
    "revision": "be7f133ddca04a6b98f92bb729ed6e8c"
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

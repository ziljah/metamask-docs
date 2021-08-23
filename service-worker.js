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
    "revision": "22e4117bf48307ad0f61486cf81ed640"
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
    "url": "assets/js/14.ff42e3b5.js",
    "revision": "2d6ea4b316d7f6b3757ad74d86abd550"
  },
  {
    "url": "assets/js/15.4536993e.js",
    "revision": "c46d38ba85894b2f33fa7afcda4d8f60"
  },
  {
    "url": "assets/js/16.ec6201e9.js",
    "revision": "35bba10d19855d1f10a7dc8c5a08dbe6"
  },
  {
    "url": "assets/js/17.04568593.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
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
    "url": "assets/js/20.f31d7b42.js",
    "revision": "17cf3b2e4993918e1c63fe68f06ce066"
  },
  {
    "url": "assets/js/21.045acb34.js",
    "revision": "ab6b678d5134fa66ffdfff0ecd4299a3"
  },
  {
    "url": "assets/js/22.20fc3329.js",
    "revision": "94667b900caf8dd04fa0c5c49a6666b1"
  },
  {
    "url": "assets/js/23.f88fcd4f.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.31ebaf14.js",
    "revision": "bb57364211af4cb273a3e8d995c4e907"
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
    "url": "assets/js/app.924099b8.js",
    "revision": "35c9b370db9329c0273e3e9d49477036"
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
    "revision": "73cf1e4e8eb2cee89f42168e1b00d9c6"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "7b641831de84732a9c0de89eee9a797e"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "3e58823b986b2797a5c1672e11b1b161"
  },
  {
    "url": "guide/contributors.html",
    "revision": "cbcd3ad564d35c32cadfd7364e191ca8"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "40d469b3d86b18c5362252c989588db0"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "18800b619ac671d589912010094cb54c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6f93bb90264daef901fad7968d501314"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f85a636028ebe2b91605f659cf33f9d1"
  },
  {
    "url": "guide/index.html",
    "revision": "b65cd79a4352ce600869e67f9dd9e66d"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "72718021369dfd970523ffecef02c187"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "9bfa58b03ee25b635e7e9c5904f53bf0"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "22d2a881f3fb2c9372ac23a285b13910"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c7845e07e36691cde23662431a5f2808"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "8b860b57855d14912efff0402defe6a4"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "a9341bbc04ce95498f0daf475e3dc5cd"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "8541a4476c8876fc40cc3de68e098388"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "c73a6df33d4648245dbea7cf2251e314"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "e3df206d4f474400db227cae2a07dfdb"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "8fc3e220fedbeb1f22de72176585bdfa"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a69dc8066bdf73fdd49039b34fd6d9a2"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "3299d52347146439f229ac560313dd56"
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

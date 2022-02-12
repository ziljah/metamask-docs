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
    "revision": "65bd9b8991c79bbe6a6ebcae82601a06"
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
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
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
    "url": "assets/js/34.75142449.js",
    "revision": "7453a270c8308987db7f09e5a39e66f2"
  },
  {
    "url": "assets/js/35.cb029de6.js",
    "revision": "11dd455b36a0da35ac8b3935a725fff4"
  },
  {
    "url": "assets/js/36.03998be0.js",
    "revision": "6dc6d5341821cb79bb32d3b736a338d9"
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
    "url": "assets/js/app.452e2cc2.js",
    "revision": "e5a934959af45c584aa5e4012af27953"
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
    "revision": "7953b57146405720f878835597d09d39"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b1616b252eee2efc8e0e4b044469d779"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "0589b43e440ed8a1f6f440fc1a99212b"
  },
  {
    "url": "guide/contributors.html",
    "revision": "86443bc8dc5f932efdd33e542d0f6453"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "787206e6b7acc796d5b6b4383943631b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "167898a7493be13a2d6d9698c909622b"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "eebf764811445e63b38a6edaf946a2d4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3bff55d41def50110b7eedead773b0e5"
  },
  {
    "url": "guide/index.html",
    "revision": "6bd38ac83c58e93a9e119630d5cf9dd6"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "23b25c3232756efda19d9df0af7e669b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "27e3de4f362d4179e2d185d3861fcec6"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "bf63751d16ef7fc495ff465e4c282f38"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "98241690379cfdd363aa9aff1f94c0be"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "822cb854efe1c69d29b007ba68ca3c88"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "1184e9a3a5a20f465b2a59cb6d04dda6"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "e855b3d943390b5e2af580278dc3c1d7"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8886332017a48dc610205cdeb5f52d73"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "0be43fcf81a463d7c701a3bc4b96ac44"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a5d7e76dbf81064277aa39dfbd2373b3"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "bc35b7fb313ef5c3b10958bd64cf88d1"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f8d3c7b59722f8df5c52ca26767511f5"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "a1436c306dfdabb60290410af0c4bfa4"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "b6c073f86c4571eeac74f80b50999a91"
  },
  {
    "url": "guide/snaps.html",
    "revision": "86ff8b15619fcd10f2a7fa09bd4200ed"
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

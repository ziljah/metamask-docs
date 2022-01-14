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
    "revision": "beae7037e39a6d53d317814fa5a91bd5"
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
    "url": "assets/js/14.3ca3efca.js",
    "revision": "af0ffbd2e668b5b005ef91940222783d"
  },
  {
    "url": "assets/js/15.289e7cb9.js",
    "revision": "d24f6eeb72147a52d76ffb342d79ab33"
  },
  {
    "url": "assets/js/16.878c533b.js",
    "revision": "bac455ea6b053a17181176f5fa00f0f4"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.3dbf3427.js",
    "revision": "7a2e75ee246b07459c33d8524d5eff37"
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
    "url": "assets/js/27.8ed4b159.js",
    "revision": "124a5db8b3f384d372bfa267aead2cc0"
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
    "url": "assets/js/30.d01d8a76.js",
    "revision": "8e8481bdf7be12e121975f2b0413e627"
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
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
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
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.a7bf056a.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.26c4a388.js",
    "revision": "91f59ca2ab98ad31f07886303b553ccf"
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
    "revision": "0c1b5f67d396311d4842369eb8eaad54"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "33407cc212647a4acb9ccfeba563747b"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "8d2c87422d60e17db540f328546bda5f"
  },
  {
    "url": "guide/contributors.html",
    "revision": "53471adca0aff0574ef5f8379f387db6"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "7da16fc7360bdc22ef10b12d903172fc"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "072b8ceac433fd7b44fb571f36effaa2"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9daca963f7a7cfba6cb5d92bc8d368a7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "e56fd0ab078a64fa4f3e70e2a5faab1e"
  },
  {
    "url": "guide/index.html",
    "revision": "c955ba7b7568ef2d3a57748fbd14896a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a4e9f898d35f1335e3242092addab79b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "736a030efed6c648e2a1ea1455412f13"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "64e9fb544cad713f9d9a043059b34cb7"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "b39c899aacffcb6f185289a5c136bbd6"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "4873d29ad06c527c8b0461aad8e28806"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2c9f0deecc4c02252092696328820a6c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1fcf300b676e080d9c009e7fde7c9a33"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8a433550896af39a889d379e0e626331"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "7a8c705096a3fe260e0abcb3e8b8e034"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "60e39fd6082bf55f170f8b460db3dd73"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "88b55131eb67028cf77258fda90b267f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "c6ad9591c3b20d22fdbcd2eeff85cb45"
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

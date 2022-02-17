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
    "revision": "40d673f5b51ed471cd71bf5b03604598"
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
    "url": "assets/js/15.53c9cf0e.js",
    "revision": "cbb8cdfbe7ee9fece4312b78e2f6c827"
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
    "url": "assets/js/23.f130225c.js",
    "revision": "6e50e76dbc2b13586218ae94719d1d33"
  },
  {
    "url": "assets/js/24.74c05429.js",
    "revision": "292234268fdb117ef3db62195402ac1e"
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
    "url": "assets/js/34.7a69e048.js",
    "revision": "a8739eb3ac9714e19a468193da8a1b76"
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
    "url": "assets/js/app.02fe30a9.js",
    "revision": "7e73227b2fa037f115839f00b923024a"
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
    "revision": "cb3a2f33ac4389ae9ca099681cffabee"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "badeb46b81aad596a9dfea670cbc8257"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "98874cf2a936ac96d31de5850180b962"
  },
  {
    "url": "guide/contributors.html",
    "revision": "a6e9cd28e6439cf791afd7e96da0f772"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4415707c264a22f719d2595c640d1044"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "35677e8837c00b67d488b050d7cc4ba0"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "e2e485a76d70046d27aba977bca7c3c8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c1b85835e1b1432b5d5d07830fb2a97e"
  },
  {
    "url": "guide/index.html",
    "revision": "92a395942a30183e5a038d65d7373a34"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a095635abcaa0a6eaa065fd027f982c0"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "14a40d2dd9f9db0ace096e6f2acc07ee"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "003be334770d73c7d4dbb0874ce615be"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "6ffa134c01fc8ef43b379ce161b8fc76"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a11559c4508bfb89dc10100f2e43a75e"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2cbe7a7d2df388e9a3239986481a7bdf"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "7025ac5f72b3b2c962a91cbeed957698"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7a0e8f9bbcfaafa74d32ea683c866639"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "3967795a21f262ef4ecef4584200bd22"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "0835b0f1a24331f72d09ecc282b6caec"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "1628de23ad13eefc48deb7269d34df1d"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "79057542cdc15a40ec753b0a30b587a7"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "95d1ea85b04614fec996fd9eaac81a6c"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "82b1ed8ca0a00bcd7ca1eeeadd3adaf6"
  },
  {
    "url": "guide/snaps.html",
    "revision": "06e7ab57549a8684aaa45e2a82b1fd4d"
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

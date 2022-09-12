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
    "revision": "336c01faf8d5811c9a2cef52af552a74"
  },
  {
    "url": "assets/css/0.styles.12c93c8c.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4b9056bc.js",
    "revision": "ad08c4f500a167770eb3fb3958011674"
  },
  {
    "url": "assets/js/11.3b6010c7.js",
    "revision": "30dfba51ec06492cd3dc8c1ba6414d1d"
  },
  {
    "url": "assets/js/12.cf53c375.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.0624a0bd.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.0049aa5d.js",
    "revision": "eac8243d4a7cc7e3a9596eff0aa8cf6b"
  },
  {
    "url": "assets/js/15.bebe5d53.js",
    "revision": "89ea9174c055f4a47e54c7ea5f0fcc45"
  },
  {
    "url": "assets/js/16.32a14945.js",
    "revision": "bac455ea6b053a17181176f5fa00f0f4"
  },
  {
    "url": "assets/js/17.9c37a0e4.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.9f8d6a15.js",
    "revision": "35b597ce6cbbc06123cdd6d063533a7c"
  },
  {
    "url": "assets/js/19.ef61ef04.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.26279094.js",
    "revision": "271ff1471381a6677f09d3bcf701cb75"
  },
  {
    "url": "assets/js/21.6e5f8b4c.js",
    "revision": "c2b6478312426c79bfb1b9c95f0b10bc"
  },
  {
    "url": "assets/js/22.f78520dd.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.75d59452.js",
    "revision": "ad147f22e00ea54b78d23b86506a4852"
  },
  {
    "url": "assets/js/24.5d990e3f.js",
    "revision": "4024d566eddeb4bb079056a5f5c352ab"
  },
  {
    "url": "assets/js/25.1a913d34.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.92a9d938.js",
    "revision": "8bbeb7ca2c6e42ea07d339def5b99ced"
  },
  {
    "url": "assets/js/27.35b6a478.js",
    "revision": "2f3254456e1383668040d42278486930"
  },
  {
    "url": "assets/js/28.1140dca8.js",
    "revision": "dfb852c1541d7c1dd0f26f8754aa25ac"
  },
  {
    "url": "assets/js/29.baa6ec7a.js",
    "revision": "e51e365ea46773d4f277e0e63af3df46"
  },
  {
    "url": "assets/js/30.9520a642.js",
    "revision": "bdea70812e398c5a4fe702af1dc1a0dc"
  },
  {
    "url": "assets/js/31.a3e3a668.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.bbd6c609.js",
    "revision": "9965d4b9d99249a69d8da8676391f646"
  },
  {
    "url": "assets/js/33.a0909b3e.js",
    "revision": "f56f7a047555f4142bff6c06f43bc711"
  },
  {
    "url": "assets/js/34.ed7c3cd2.js",
    "revision": "071851b6ad8f1c96357c2ffdeda749bd"
  },
  {
    "url": "assets/js/35.dc86a520.js",
    "revision": "8b5b75da972f9b16d94bd5dad33a8894"
  },
  {
    "url": "assets/js/36.53f41a6d.js",
    "revision": "8c1e62296888387ef60d88c11886c02e"
  },
  {
    "url": "assets/js/37.7453d955.js",
    "revision": "372466d63c77df83e610d66adfe83400"
  },
  {
    "url": "assets/js/38.4a3d8782.js",
    "revision": "bce7e451274ad207e47a0aa037668cf7"
  },
  {
    "url": "assets/js/39.5bb58909.js",
    "revision": "75bcebabd87d16c7a2f53292ef3c49bb"
  },
  {
    "url": "assets/js/4.dcf10488.js",
    "revision": "95efbe7ebc3321184214cb45cd3eca3b"
  },
  {
    "url": "assets/js/5.b6bf2fa6.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.b06d2227.js",
    "revision": "522d59cf549844ea05278011e181899d"
  },
  {
    "url": "assets/js/7.4a4e875a.js",
    "revision": "9be91a163d672687fe542aa288b4d22e"
  },
  {
    "url": "assets/js/8.df4b2a85.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.44d3d9c4.js",
    "revision": "379b1c03990d9982f8d38722a21dd2b5"
  },
  {
    "url": "assets/js/app.7170b7c1.js",
    "revision": "5d4af57eea2f43bf6d3688765f9f375d"
  },
  {
    "url": "assets/js/vendors~docsearch.4871985a.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "assets/js/vendors~notification.fdd6e850.js",
    "revision": "8c5292ddd31a027ce1a72eef945787f5"
  },
  {
    "url": "faq/index.html",
    "revision": "6d4e2e5615e336eb546670ff24212d55"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "f6d5a0eabb071e53f21f64c63aa4b2ad"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "c050e8a69f9cb6a79d3424db30f72b00"
  },
  {
    "url": "guide/contributors.html",
    "revision": "1cbf8385988b35ac3c221c9a14a1ef68"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "b0013c57c1250266be686d468b91ee71"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "8631f340effaffd02b7b9063e37f1bfc"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "013fef6bb121b148486a6a29daaf2378"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "240dab36815cca31f93c90b4cdafade8"
  },
  {
    "url": "guide/index.html",
    "revision": "ca7a1b42d75878db9df2efaad1bbc46f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "447aa6f160775c6f01b8c514532c22f1"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "4c4ca51f59fa3d5f85022a2093569af8"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "5a69f72797dda75b7c7c08d5002acf47"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "5d98199fa8a600cbf1af0002c8e6c992"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "48aaa52919f3879ffaeb962ee7133fa8"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "cca9885bb48851df4ddcf6abd28fbdd7"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "d6e1f8939f303053f94bd26c06622029"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "9363840acfa159ed4dd53b9234bbe8f3"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "9f65f16a84889736a3eeb9a3adeb7418"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ae5e0141986cfb406cf0e89696dae714"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8ce8e821fc8542ef52d27fbfc7cfab4d"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "55697e1f730f2328bcfaa142a861dec1"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "629628efca3adaec5e11b61ffb59cf57"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "9ba38545bd00394fd6d659b1157efc5a"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "3352e1e177659f002aa7f732ab697f12"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "3e09e0eb06eef51506404f98637b17c8"
  },
  {
    "url": "guide/snaps.html",
    "revision": "d94f2de2f73dadcbcbfca5e8e07258a7"
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

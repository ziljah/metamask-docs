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
    "revision": "bf7aebe0681735f9bfed4051a722c5d6"
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
    "url": "assets/js/15.b1d381f1.js",
    "revision": "8ec24f0eb88d8774198adce47e270372"
  },
  {
    "url": "assets/js/16.96de34ce.js",
    "revision": "06f0275bc382aa8d929d7b2fadde9ede"
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
    "url": "assets/js/28.13c08488.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.f29058fc.js",
    "revision": "e4715fd369328ddf2483971dde4f5e33"
  },
  {
    "url": "assets/js/30.9520a642.js",
    "revision": "bdea70812e398c5a4fe702af1dc1a0dc"
  },
  {
    "url": "assets/js/31.cbb48599.js",
    "revision": "bd7a6ffd5c635487db37892100f21e5f"
  },
  {
    "url": "assets/js/32.2ceab8c0.js",
    "revision": "2de88ca98d399767588206fdb4f573a5"
  },
  {
    "url": "assets/js/33.9abc38a5.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.bcf953ff.js",
    "revision": "9384a766cd61fe580674e3d37a6a4ed6"
  },
  {
    "url": "assets/js/35.a652579e.js",
    "revision": "8a40cc0869582cecd2f4d4dc80c75dd8"
  },
  {
    "url": "assets/js/36.809d48c6.js",
    "revision": "e7933869fe719f0129d5a4d7ea6aba30"
  },
  {
    "url": "assets/js/37.1e7099c8.js",
    "revision": "12253d6d01670f01d3ac00e4b4cd2b2e"
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
    "url": "assets/js/app.2089ec5d.js",
    "revision": "512f4e3ad5de4b862b3d1fa2ecf969e8"
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
    "revision": "6a8c1916b98a41a5b6d1636ce653d193"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b7cdeef6a6cc01b499938370791b344a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "8bdd692036c293dd83aa87fae4ca6f5f"
  },
  {
    "url": "guide/contributors.html",
    "revision": "12ecb79014929cac5728daf0fc5516d0"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "fa9c1b79a8a09360a4f3c20372fcafe3"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ce3033e5f371189ff34d0aba355cd9e4"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c5528510d50d14a6b799fe8c29a3b0f4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1510454adc7181a6b309a459ef636bcc"
  },
  {
    "url": "guide/index.html",
    "revision": "89485ed0592958284e5d4f2ba60c30ba"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "f31c6cce69873bb95a0d211c98f64fef"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "c4ef0466a2e8f05d4f60e31674ff8626"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "47313c611ea5b0332c026d37064bf6f4"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "f2e65b2d819404516aa7e5178ac92c93"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "ff4f862d02aa8d450ad5c569e51cb1bc"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "ebad85c785bcfce180461efbb1989490"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "207c5fae3e91d504d76b10bce7c86839"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8d4124af29bf230fb9a64c7cb32faf95"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "22b592ff6775ebee0b02c5421ba27822"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "975a74ca1b9695b328c2f6f7a4d9bbee"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "76ae85aeed2f4998f6ba3bb464d40f8d"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "d7fae3795dde883e5e708b819d1c964a"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "874b314beef33e4a6f1176eecfe08cd3"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "3faf58756b1a6f5a2d6c03b5a2c1ebbd"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "0ecbcc0eebb72778921b6c2d43558a26"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "a6698e75f62e493c4b3cfe55d94e8e79"
  },
  {
    "url": "guide/snaps.html",
    "revision": "742f6e9fbf84a2e4a7494ecc3c3470db"
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

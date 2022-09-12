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
    "revision": "eb6ac9d57500ad92821e2c28da1e4677"
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
    "url": "assets/js/31.a3e3a668.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.bbd6c609.js",
    "revision": "9965d4b9d99249a69d8da8676391f646"
  },
  {
    "url": "assets/js/33.9abc38a5.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.1840da37.js",
    "revision": "7ddc88ba3b23c4c32ef49668c090ae45"
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
    "url": "assets/js/app.6e2b087d.js",
    "revision": "2400e4449d6aac35156a5360bc5419e1"
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
    "revision": "0e5bbe081ad66ec94492be7dbedf870d"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "90355f5f4ef3cb6523e9ff238c80b514"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "022b416f492b7d5626f6024031b3b50c"
  },
  {
    "url": "guide/contributors.html",
    "revision": "fcf7a952bf45b9c985886781f2e348d8"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "59bd4ddb73db86a85f2b81811b308eee"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "3cce7e475e0e7d80936ec6e818914d79"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "32c696176ba2320ae61438ffa46b16fc"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7e114d96dcfeaa5ddeed0ca2de62c9d8"
  },
  {
    "url": "guide/index.html",
    "revision": "bd6f5f287b08e0dc4f57056fae940aaf"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "2a9db4eafce7f66baec4167c267a1dbb"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "71b1743612cc35690c5ca87ab87f9001"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "3af7d78c967756c3c2b3a7d2e56b0c9f"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "21e82815a85d6048f350603ad3663ca8"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "7b25d67e3f9835d32284c717f7bd073a"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "472aec51415f0a551c55ad74907c055c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3ff3a80fbffac7a7e1d9c776d6e31bf4"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "0a81272d6b41895df928dc6855d70dc3"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "feac73a964c61dea01d8ca7cf0cd4b8b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "eeb936084eaf5079da5316ea36d3ebd9"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a7987beec91747b86984376d2e3b9c11"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "da89d37a0918fa19cfe1c997609f66b8"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "cb7e72c8dcca4934640867a85c53d71a"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "8c8ef6ce04bec4f1588ec26e58bcb30a"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "cab83421f299be129c5405ba3684f580"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "10c3ed8b9c20741ddab6ceb7e60c0ba1"
  },
  {
    "url": "guide/snaps.html",
    "revision": "97524b33b9982ca5202b73596150f869"
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

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
    "revision": "2c7d2cc1ba9fe0b9b4559af33afa9542"
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
    "url": "assets/js/16.dc649f71.js",
    "revision": "6f46f98759448ca7c7e558cd8e56d0aa"
  },
  {
    "url": "assets/js/17.04568593.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.042fb45d.js",
    "revision": "d4807641835380db06cd35fd4b755696"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.aecacabb.js",
    "revision": "271ff1471381a6677f09d3bcf701cb75"
  },
  {
    "url": "assets/js/21.8e2a9427.js",
    "revision": "5a5d982c07625a337e1d89cee65c393b"
  },
  {
    "url": "assets/js/22.a4f7a7e2.js",
    "revision": "21d2035a2dd8fb6176bc4af4fdc25120"
  },
  {
    "url": "assets/js/23.743792b0.js",
    "revision": "bc5e7b347a113fa5f734f23a4803e36f"
  },
  {
    "url": "assets/js/24.199174d6.js",
    "revision": "fb29e371adee6935dc6134ea3d927913"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.c728cfe4.js",
    "revision": "e3516b830141ba132740a27a031adc2b"
  },
  {
    "url": "assets/js/27.f68593fe.js",
    "revision": "8a5142151240935c12d93762dec49053"
  },
  {
    "url": "assets/js/28.01812e92.js",
    "revision": "dfb852c1541d7c1dd0f26f8754aa25ac"
  },
  {
    "url": "assets/js/29.316518b4.js",
    "revision": "e51e365ea46773d4f277e0e63af3df46"
  },
  {
    "url": "assets/js/30.b625f471.js",
    "revision": "15468bc01fc60d85f15387761dd3017f"
  },
  {
    "url": "assets/js/31.4746cd25.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.f83f1e48.js",
    "revision": "eede7959a7bbd197906b6377a6b22dbd"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.a4fdf002.js",
    "revision": "8e39cfcacef3e690e65c623e54c27464"
  },
  {
    "url": "assets/js/35.11b0d5bc.js",
    "revision": "d58d1e00b04020bcecd1ac6031da091f"
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
    "url": "assets/js/app.1d4678f2.js",
    "revision": "ca4b7a2cee8eefd66da6ce3769b50c3a"
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
    "revision": "5cb86a95abbc02f12c46863e52c49a10"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "aef44f0086d39a88469409f921c1d84a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "366216fe0bec5bf15880592b248fb5a1"
  },
  {
    "url": "guide/contributors.html",
    "revision": "10d304a17604899d010d7ff6029c058c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "63924207fa8b8f8e81821b05b2b7d83f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "57bf9735e82e5425376b4bcf739010cc"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "e034f7a8c653c164fdb5e626ba6b28a1"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f47d6453c3d2498c759125d2e762af12"
  },
  {
    "url": "guide/index.html",
    "revision": "301749a7dd8a9bb241acdd34f1bad654"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b76b58f217b44c2777fb785d489601e1"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "af3cf7813ba3435b87e647fcbee4616f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "40d84688cab16c3b39432ade04d57867"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c4e508fcf68742c1e01b9b430c9dd4e5"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "243f4cbc8cfd3261ba917ea342ba87ad"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "4c2b21e5f1b586a54fd83333ceedbaa5"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "66953f5dc3f0e18a4148c79cac1a67d5"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7b4e94514ba338270de92cdb2b0b7cfd"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "7822141dd7cbee8abb8885dd620edf55"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ea160d8a0c9e81a6e768db36b72a6489"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8da66febe479e901015138f409d81297"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "beb275d9226834e5f44c23e1a128a219"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "b3d431023228ecd0717d8b4a6cdbd2fd"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "c41ed72a471ceb7fe3fc013f5d7202e9"
  },
  {
    "url": "guide/snaps.html",
    "revision": "a8adfb33d714bcd2a76ea522902b2eb1"
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

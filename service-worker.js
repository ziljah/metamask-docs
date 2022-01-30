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
    "revision": "451b40123e21ab40dd6b4537e7ddcd39"
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
    "url": "assets/js/22.67174d41.js",
    "revision": "959c51c11242c65a60f578139f1d0bad"
  },
  {
    "url": "assets/js/23.d19e42b4.js",
    "revision": "43bbe3e7676874555d726185318b3d8f"
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
    "url": "assets/js/26.61bd266b.js",
    "revision": "9c207e15a72e4f1013190134efe28ebc"
  },
  {
    "url": "assets/js/27.5372edc6.js",
    "revision": "995a413b941b441430185016d8f5c61e"
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
    "url": "assets/js/32.3fdffd3c.js",
    "revision": "8f4569f74603a67676de58ccbe96175b"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.e6cc8f33.js",
    "revision": "5d7b8c4d9b174dafacd1a39d9b6fdd86"
  },
  {
    "url": "assets/js/35.31762f80.js",
    "revision": "a1a445a764f08c8cadcafea15bc57a9d"
  },
  {
    "url": "assets/js/36.b32edff0.js",
    "revision": "e503dbb1c0b2b671958226cd943ddc62"
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
    "url": "assets/js/app.afc4d38f.js",
    "revision": "ef09a7a37159e692c96ec741ef37afd0"
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
    "revision": "4c8b5b1b0376a240cd86ed66eab84ca5"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "4e78644453e443035f02035a7df1348b"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "1e8b32bc55f4d6eeb923a757255dbc63"
  },
  {
    "url": "guide/contributors.html",
    "revision": "814dd3b0b4470dd896e69cd49dc6c44d"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "bae581cd21b42a2760405c9b51bb725f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "156fdffb7f321a7c681e1405d4947ef8"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "897088c1544b5b8950819799c9959baa"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c1c47704894a66385a94e04045b962d9"
  },
  {
    "url": "guide/index.html",
    "revision": "c15dd25a3133dabe23865e8454797bae"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "1b0a37139ea609e1a6b52bdee3e80869"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "a6025707553fb2c3d5e5bcfaa4f96252"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "f903e78cd45828efe6aa2464941bf8fc"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "51384b7cdeccacc253c27e90862cc748"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "84fd591b6cde05479cb93b6312b58451"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "dac81d8239e4566aeaa6406f8028fe05"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "a3b0d05af40bbd876c4edd65aaaaa54f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "e2fc400f41f321deeec5aea7cc7786f6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "cb83dca8c6b1cabdb170bda2d6e607ab"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "52c4304ef00ffe1be85df1a7843ee3d6"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "5b1d529590b34a1576b11ea898bcaaf4"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "55fc75f94e8c0f481a60262acda92890"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "125b333885ced71d00b631c7f54bca5f"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "50ad9fde6d6861c787deac796574841e"
  },
  {
    "url": "guide/snaps.html",
    "revision": "4c77c17d0f2ca924561c1f948ea4b563"
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

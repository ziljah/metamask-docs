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
    "revision": "daa5371a237a01046a5bf9a6cfd03985"
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
    "url": "assets/js/18.9ae1e13a.js",
    "revision": "4ce3ec7e203bd6140cda73c4b4ff9fe2"
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
    "url": "assets/js/30.eb78b99a.js",
    "revision": "51426c37586a14b433adad1b1d970267"
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
    "url": "assets/js/34.c42e60f2.js",
    "revision": "cd0cb4b214ec1d84caa1036d4dc64f8c"
  },
  {
    "url": "assets/js/35.e40e115d.js",
    "revision": "ca1bc8c0b4ba7374698d55f5c7016cfe"
  },
  {
    "url": "assets/js/36.71ca29af.js",
    "revision": "b5ef04a4002bba6e3c9bdd617369e021"
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
    "url": "assets/js/app.30bae5aa.js",
    "revision": "ef19149c1efdb765fe49b3dbf44b4966"
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
    "revision": "af7556ac995b29b19297458140d430ab"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "31ee201de98becaab1e1d52514bb3cb4"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "a8ffef0af27fdf931d70b5a1197efab4"
  },
  {
    "url": "guide/contributors.html",
    "revision": "a57a0e9d68ef7240288576243da43ae3"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "1d7aef48a7029645c18a847857a52377"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "88aca673d52095978ce9a79dd589e8d2"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5aeed88db2894090c6824d547c62423b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8f6c282c23d9b6322e74be925a25509c"
  },
  {
    "url": "guide/index.html",
    "revision": "79c5037aeb326ad946470575b3654958"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8e99e110cd1c3a3d58ceb3ac094e5e0f"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "a07b36b6eb2918d6eca97ef71716c8ac"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "6c17a73d733e44b8aab4543e3b8e9c67"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "07458107f16ac061ded2a63677cccd5a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "744b67967e74119cf17dc7bd4a63cae2"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "aa92875828789d80ede963133c342f6b"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "06c278c89ff7c82a42248b338d3b2d2e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "91b4af7a039a3ac1d412c1b5ed329285"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "8a1a098aa385eb7dc4c95ee0679c9d04"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c911e038e6cfe07c5efab329ff10da1d"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "4ba7c47602fc3e997b51e98b5f81cf5d"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "8c3f0f1ef13934e1e95fb45d4c7c65d9"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "9f87a4e4576d354399c78287749c2161"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "bef5d7e9d38fccedcd91851112d9fa1b"
  },
  {
    "url": "guide/snaps.html",
    "revision": "a896b8952ef25038ba9b70d037197338"
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

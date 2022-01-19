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
    "revision": "353f490acc56231148f870708577e158"
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
    "url": "assets/js/17.c2cc9bb7.js",
    "revision": "fa7b64ca0ba4feae10b5bf7c3e1a1b75"
  },
  {
    "url": "assets/js/18.1832128f.js",
    "revision": "d67a15f073348d022ed37f4e36affdd9"
  },
  {
    "url": "assets/js/19.1da0b570.js",
    "revision": "29de97381ba1b9e1227c9991fe3a2333"
  },
  {
    "url": "assets/js/20.a65dbef6.js",
    "revision": "c538964b90281205331efb9b575a69c5"
  },
  {
    "url": "assets/js/21.01a03f78.js",
    "revision": "6afc41029cee3ef9bb40d09524b5c113"
  },
  {
    "url": "assets/js/22.66905b54.js",
    "revision": "84bba4cb9ec83eb6a2a4bbedf8d9e316"
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
    "url": "assets/js/25.b81124be.js",
    "revision": "2205d7f5567c1a5f8aed53a83c89f387"
  },
  {
    "url": "assets/js/26.30816a5b.js",
    "revision": "a7340d5e921e7bde0fc68f3fff29baaf"
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
    "url": "assets/js/30.becd9c50.js",
    "revision": "e9f3b05c3447b8139603b8239f688caf"
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
    "url": "assets/js/35.0a6cb011.js",
    "revision": "1b7d369f81c5eb19aaeda67d9806f171"
  },
  {
    "url": "assets/js/36.c143efee.js",
    "revision": "3750ec8ce22bc784a331f5917b1b0a5a"
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
    "url": "assets/js/app.f9e1aff0.js",
    "revision": "48026f6107e100eef89ee8e504a1dd2a"
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
    "revision": "16dcfd8a61cf61e07c1c48be8d8ec5fb"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d74a631b655b764843fface827fbbb88"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "90680028faf02b16da35700f83c56a15"
  },
  {
    "url": "guide/contributors.html",
    "revision": "39ae758cbcd566aa189bbdff60460488"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d97fbd5cc1411780d9c649069bb2ccd0"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "8b766b037b1c52b400f77a45b4a98fc3"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "e56e1019a2723da2fd9b8b89eef49a80"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c08e761c8ff672802126ad1f693ff6f6"
  },
  {
    "url": "guide/index.html",
    "revision": "4519e7741814c8af49365227ad2d3cf7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8a22f45f179541e27fc9f1bfc542e2d4"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "23c425c54e66fd842c2b977c7ec65a18"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "723e36245aa2246e42aecae97c9e3f83"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "ae4a22f34bf9a256b78f1007a1adbc39"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0550fc04f97d3c6865cc5d8cb1c3557e"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "fc3979cf0709ed976434731096971e56"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "cf4ae89cf56de12ba238dc3c0ee30e97"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "811450e675319e610e3b192523f47303"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "92488b1b0cd967400e58c4a1fa87d00f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "376cb4e51ddcfa3331d9469aa41fcd18"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "2dd1211ed64ea5eb843ba46d9676a5f2"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "0454e4476a1663cdadd7062ae6e35cde"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "bec7898012b1832b38e25c85f0872b11"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "f44960e7692c839f3426f84a49b5796d"
  },
  {
    "url": "guide/snaps.html",
    "revision": "8785ac6a49cfc82d3cf4d5fd7555669d"
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

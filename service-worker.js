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
    "revision": "433451cbc5fdf31d7d6a612122549167"
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
    "url": "assets/js/16.fb5c3393.js",
    "revision": "2e3c242c888187dba88c6db4fa270cff"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.90b1f245.js",
    "revision": "046a833dd9a9921342dd9f117fdcefd0"
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
    "url": "assets/js/24.41489810.js",
    "revision": "91ddb8b48a3175e3538d66575f08702d"
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
    "url": "assets/js/31.166826d5.js",
    "revision": "6dca66d18d7b79f51470dd76a40aeed3"
  },
  {
    "url": "assets/js/32.8cf93b32.js",
    "revision": "871515275fbdd526af0a704c4e477db5"
  },
  {
    "url": "assets/js/33.4696cd88.js",
    "revision": "30a03055df3a62fbb76a3aea1dc96129"
  },
  {
    "url": "assets/js/34.75142449.js",
    "revision": "7453a270c8308987db7f09e5a39e66f2"
  },
  {
    "url": "assets/js/35.98d3eb8d.js",
    "revision": "a221e7ff60744c1b0adabe2354de95ae"
  },
  {
    "url": "assets/js/36.142368dc.js",
    "revision": "c2a7cab1ee2959cdf5e522a0d0e9789d"
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
    "url": "assets/js/app.b1d7a1a5.js",
    "revision": "2d79514a0547dab0c961cb10ab400ab9"
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
    "revision": "713f973d79d55c17bc38dbc9cf735375"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "8e5cb6761cb0379f4b2a675e704ed3eb"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "fd1fad5b2f0e14265762db58b3a5cf43"
  },
  {
    "url": "guide/contributors.html",
    "revision": "f9b05a4f4dd18bc253d2594264319f4d"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "f88b676cc57dcc9a6dd2273bb9d12dab"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "46f27ac70a4a20217df47305abef028c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "e63df476c3d820e5d51153cd4baadc3c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0c53b9c0d24dcef7ba43db1951cf64e3"
  },
  {
    "url": "guide/index.html",
    "revision": "de4b46d6a07ef9a6979ce44ceaac248a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "dc81d63fadc8a83f92e9e88abfc8d201"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "1850635cc95ecf9af245f73744e83a9a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "52b6139750a0530d290f8abfb93d16d7"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "25d4f9d6fa0b9f5550b98921cb102197"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "4d84ff53944a4def1929ac16b2f090bc"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "6d66ef97e05971e8686066d4fb94f67c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "a0176a4b862662c6343d4c5c7225bcfe"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "0975bfe142a4ef0c694842aefb96a846"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "16fdeab217098aa01187b55759a458a2"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "39d4b03a63595d9fb26a57eb20df3c31"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "746531f3e937d52e59a711d7766affc8"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "561a7bfa36c3b4ec0331cbf5ad26d907"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "22a2fda3fb315b3a9f44785b58404ff7"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "058192b0d758315c141d828ca35949be"
  },
  {
    "url": "guide/snaps.html",
    "revision": "a05b6c60e576bd1094fbbeb333425c3a"
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

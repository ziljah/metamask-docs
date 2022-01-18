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
    "revision": "fe90b0c81d14d121a2b580cafb17d2b7"
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
    "url": "assets/js/14.4c0bd9f7.js",
    "revision": "c1a65b427dec1fb8071cf201528d0715"
  },
  {
    "url": "assets/js/15.53c9cf0e.js",
    "revision": "cbb8cdfbe7ee9fece4312b78e2f6c827"
  },
  {
    "url": "assets/js/16.9386e194.js",
    "revision": "6ac07b34dcee53049463a49ce8343f07"
  },
  {
    "url": "assets/js/17.8fe6e5ea.js",
    "revision": "69d290e6aacfe580c8a180263af726ef"
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
    "url": "assets/js/22.a4f7a7e2.js",
    "revision": "21d2035a2dd8fb6176bc4af4fdc25120"
  },
  {
    "url": "assets/js/23.d19e42b4.js",
    "revision": "43bbe3e7676874555d726185318b3d8f"
  },
  {
    "url": "assets/js/24.f7c521e7.js",
    "revision": "186921b291402bac7b1f86935c65baf1"
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
    "url": "assets/js/30.340f694d.js",
    "revision": "b8f68094f99520304c042191a2097e13"
  },
  {
    "url": "assets/js/31.74901bf2.js",
    "revision": "c72993434fd58aa88fc8b74f33ed6e96"
  },
  {
    "url": "assets/js/32.fdd97225.js",
    "revision": "2c60e8f73e5b93878f0bea7427f2e85b"
  },
  {
    "url": "assets/js/33.7708681f.js",
    "revision": "f567137b64732d4253b36e10d35206cf"
  },
  {
    "url": "assets/js/34.7f11b491.js",
    "revision": "519790f9e65ae3d4a01d4e4f15d286ef"
  },
  {
    "url": "assets/js/35.0a6cb011.js",
    "revision": "1b7d369f81c5eb19aaeda67d9806f171"
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
    "url": "assets/js/app.139b4345.js",
    "revision": "19a6aa80951237f90d8f599ab6ad3b3c"
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
    "revision": "26bd88f7583a7176af3eb544eae06dcd"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "3e907029c315bfb40838f110c51818e0"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "c6f6aceb92d0b5bfa2e4156e20560d12"
  },
  {
    "url": "guide/contributors.html",
    "revision": "4ef22ef7b4e0737be8c5891abc7b705a"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "2a5e8c33607b08faf83e7cb4e6daa4e3"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7a09739295bf7ff8e7a927f1e6e90b50"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b3d1acaace1aa52de60fe7e652c8f0d3"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ca6cbe9567c275d0ba3a5ae749f22c61"
  },
  {
    "url": "guide/index.html",
    "revision": "857249a80fea7f8c4a5afc44884b66b5"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "69d2308e863b705c05ec1a507ecee624"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "cc3fcd09843ba10a84a9eee3d17cecf7"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "297a3575dccd435b0ce0da05679f63b3"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "bb109ae10c964877549b28e4a7d5dd2e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b1ad5a60b319caf60449a73a72930621"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2a1c3dfac89f92886a0bed53fb08ceae"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "e9d0be3fa79ac9b8a6d033fa5007616e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7534e35c232afd029d7e64b85e9ea97d"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "077dd0db625575f6d9cf1d33e5b0632e"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "9fcae2394fd93f4662e415dc42fcb17d"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "aced6587d6980f51e867fa5dd7beb075"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "312cb030e7ceac6317e448f0fc6a6853"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "24bdbc7c83e6450e06fac08f4740531d"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "4fdea20f49fe6c615ac357abd7f9f542"
  },
  {
    "url": "guide/snaps.html",
    "revision": "981c1a98a20f16ecb8c6012c81fe7b3b"
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

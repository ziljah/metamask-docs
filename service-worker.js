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
    "revision": "8c9fba7d9ff86e1cc1ee834519b0b531"
  },
  {
    "url": "assets/css/0.styles.43ab016c.css",
    "revision": "0092aa4cabdf35c66d5fdc293cd2dd12"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.855ad548.js",
    "revision": "ad08c4f500a167770eb3fb3958011674"
  },
  {
    "url": "assets/js/11.71b90564.js",
    "revision": "7f5c8bc345186ccaa2108f486e33d398"
  },
  {
    "url": "assets/js/12.c08b1d2b.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.7dfbcedc.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.3b78c06c.js",
    "revision": "2cab5d28ec0d7417233ed74e2856f81b"
  },
  {
    "url": "assets/js/15.7db4008c.js",
    "revision": "cc8f2f4e3c4b4acee1fc3d8d0489e61b"
  },
  {
    "url": "assets/js/16.5ba96740.js",
    "revision": "68489ae22192f99ff6009c04f0447caf"
  },
  {
    "url": "assets/js/17.54f77f27.js",
    "revision": "fa7b64ca0ba4feae10b5bf7c3e1a1b75"
  },
  {
    "url": "assets/js/18.6a903352.js",
    "revision": "65b65ea7f85010fa39a0fcdd6d660e50"
  },
  {
    "url": "assets/js/19.1a779be1.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.e4e8c0b4.js",
    "revision": "0a72c12f2695d763a4d4f99ce45b5fa1"
  },
  {
    "url": "assets/js/21.d99c1b9c.js",
    "revision": "070b56b6fbef09f24cb7bac116a77d12"
  },
  {
    "url": "assets/js/22.07ade5f8.js",
    "revision": "d2e81a5f8ac38cd7fd4fe1acfa2b7724"
  },
  {
    "url": "assets/js/23.676075ed.js",
    "revision": "43bbe3e7676874555d726185318b3d8f"
  },
  {
    "url": "assets/js/24.ec611b21.js",
    "revision": "bb57364211af4cb273a3e8d995c4e907"
  },
  {
    "url": "assets/js/25.e031bb6e.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.aa106a67.js",
    "revision": "092ef8939b9ac3c931fd8adfd134e1de"
  },
  {
    "url": "assets/js/27.e4fd0c46.js",
    "revision": "124a5db8b3f384d372bfa267aead2cc0"
  },
  {
    "url": "assets/js/28.36d58b82.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.fd9595a5.js",
    "revision": "a353e9eb3c5e6d64d20344f2176c3c17"
  },
  {
    "url": "assets/js/30.1dcb3ce2.js",
    "revision": "6dc03aafe7304452841841107fa777b4"
  },
  {
    "url": "assets/js/31.d4934d6f.js",
    "revision": "abe66e307d259e9eb5fb4fc00bf73c8c"
  },
  {
    "url": "assets/js/32.4eeba09e.js",
    "revision": "e8e120ffc9279c0e224083b6beda7418"
  },
  {
    "url": "assets/js/33.3566b377.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
  },
  {
    "url": "assets/js/4.45461747.js",
    "revision": "931eedf13ec5d486e74b8df0f4b46236"
  },
  {
    "url": "assets/js/5.eeaab13b.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.90cb7b75.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.f15a05a1.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.e6057d1b.js",
    "revision": "dbf2d8b1d80f96220413a5e70bb01c0d"
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
    "revision": "bc76eb785670641fbd1f164b0b4bf660"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d0d8285a973e1d70ccea8445f66a751e"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ced4228ee9a1da854a0aad9427a59b50"
  },
  {
    "url": "guide/contributors.html",
    "revision": "7b40c5af99f34a25d79e058e0da44c66"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "ea174948bca577860b07653d05be37de"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "279618d0d7115d1a2ce66c57b2258b92"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "fdb26268172ca097a30fe84ffb96c515"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "adb3a29b4ea9f135cc92aa3b7a534b15"
  },
  {
    "url": "guide/index.html",
    "revision": "b0eda1cb426683c616afd5c6a5ccbbea"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "054aba4297e657e324c3ede835d40c21"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "47c326e3f9cbc2b10d835581232a80fd"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "10f6f418bdd0d3bce4fad9dc4ff14ba4"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0a8dc216f231bf109490c4078df49db6"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a115806c827574446fc9beb380ccffc0"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "cc46e6cd1d786d661f7f6a49eb7effe7"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "d6c2b960037b4f7a933e56393dc5a5aa"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7a2e6b112d318aa3dfe317e2ea6a26b3"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "b87ab1b9b0f51968edd6588cfe524aa5"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4d66c88e96fe5b628185ae7b85220442"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "6b631681de5bd3cad334d3567ecb56ae"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f0182a638ce474cd276c80bace7b3387"
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

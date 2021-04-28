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
    "revision": "f188c535016aa0ba507cfdd14c36c3c6"
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
    "url": "assets/js/14.7d0b589b.js",
    "revision": "5bc06405d10d434ccd0397fb5d185481"
  },
  {
    "url": "assets/js/15.5bb390dc.js",
    "revision": "c46d38ba85894b2f33fa7afcda4d8f60"
  },
  {
    "url": "assets/js/16.646d68b5.js",
    "revision": "a0f00de59f8b33c8c287227090c2f74b"
  },
  {
    "url": "assets/js/17.7d93e4ad.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.3c1fd809.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
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
    "url": "assets/js/22.e6edf161.js",
    "revision": "94667b900caf8dd04fa0c5c49a6666b1"
  },
  {
    "url": "assets/js/23.f279d74d.js",
    "revision": "ab60c128f294525163446692e76efeba"
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
    "url": "assets/js/app.a882fe69.js",
    "revision": "fb5006b0054525d6993bfd5e86fd7ce3"
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
    "revision": "b19c2b858a77e9935489927cc7b39117"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "e8f9a38d4dbd6076923c0641bbcb7ac7"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "dac0f450c192b04e6c34145066ffd949"
  },
  {
    "url": "guide/contributors.html",
    "revision": "3867e74c97d84b9207186a0053ccc93c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8950c79b8fae26168236901bd60d6db4"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "26aa3e6628fe1ab810dab8c513228bd7"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "71d17be7a31705dc6022b66877abd39c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "409b4209df147d1920a3df63554d7cc5"
  },
  {
    "url": "guide/index.html",
    "revision": "9e6c3414950ce308eab264f8702c0612"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8f6e8aef44e2f508f17126111323f674"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "52193bcdb9b3ba7658c52c330ffd9171"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "594bcb9b8d45b82ea6309946f97df337"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "710bff2192b9b83ed22dfa5c632c87bf"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b6b8f48218f856a102fc7aaa23fbb89d"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "9aee1b102913af76e928a2f57a200b56"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "536273a5dafb26130ae45a4a31f57421"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "bafa4d0b11f7fc95665c77d18a938fee"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "ae54112c8d919ab94c83c1c35b24c10a"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "10152bf3af1e0dd3641a366ac462c657"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "b1db536ff1014f4e7e3f856ef5af5214"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "980a2834cb7b03a698194c083ef46d76"
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

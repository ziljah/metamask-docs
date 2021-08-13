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
    "revision": "068ea5d41da12ab6b3209857b45b5f48"
  },
  {
    "url": "assets/css/0.styles.6baf0c5c.css",
    "revision": "9ce6d3c6ecc5a0f4282e13684999f2d0"
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
    "url": "assets/js/11.4ac16b46.js",
    "revision": "d0ab467681a16154f4604249cdc723b1"
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
    "url": "assets/js/14.ff42e3b5.js",
    "revision": "2d6ea4b316d7f6b3757ad74d86abd550"
  },
  {
    "url": "assets/js/15.4536993e.js",
    "revision": "c46d38ba85894b2f33fa7afcda4d8f60"
  },
  {
    "url": "assets/js/16.5c5483c5.js",
    "revision": "a0f00de59f8b33c8c287227090c2f74b"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.729eeed4.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.f31d7b42.js",
    "revision": "17cf3b2e4993918e1c63fe68f06ce066"
  },
  {
    "url": "assets/js/21.fbb905a0.js",
    "revision": "070b56b6fbef09f24cb7bac116a77d12"
  },
  {
    "url": "assets/js/22.20fc3329.js",
    "revision": "94667b900caf8dd04fa0c5c49a6666b1"
  },
  {
    "url": "assets/js/23.f130225c.js",
    "revision": "6e50e76dbc2b13586218ae94719d1d33"
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
    "url": "assets/js/27.8ed4b159.js",
    "revision": "124a5db8b3f384d372bfa267aead2cc0"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.902e9e5b.js",
    "revision": "a353e9eb3c5e6d64d20344f2176c3c17"
  },
  {
    "url": "assets/js/30.1d63ab4b.js",
    "revision": "b7a279b15c3a4b75b365126c57582840"
  },
  {
    "url": "assets/js/31.3b898d5d.js",
    "revision": "76310584d63389029a5758dab302c7e7"
  },
  {
    "url": "assets/js/32.fd2d2621.js",
    "revision": "d71b18cbe4f426419523a2bf310be8ae"
  },
  {
    "url": "assets/js/33.a3eb0c35.js",
    "revision": "c022921ae9e2db411307c1eca59ed649"
  },
  {
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
  },
  {
    "url": "assets/js/4.1099f3bc.js",
    "revision": "8f3ef733572a70f81e397d547d24715d"
  },
  {
    "url": "assets/js/5.d309383e.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.a7bf056a.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.47c30305.js",
    "revision": "d05b7c14908b47828f889eba5ee33d62"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.e88ffa01.js",
    "revision": "af6437609be688f103a817943cc800e3"
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
    "revision": "b638c9af8b26ab65091dcf568bb11f29"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "e44d0f03e49c9e7c91076784dd5b71e0"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "e712b866e369ed3f150c176f24dc44b4"
  },
  {
    "url": "guide/contributors.html",
    "revision": "38703736ca754a4fa45683e481cdf778"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "60e54673f423c2e4ae5934ef420220be"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "4774d514553ed6de6a68ee3cc172c545"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "29f1ee5a30f1ebfb078a95d9c3a08241"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9489369c43df6a396b1f101c2781c7ae"
  },
  {
    "url": "guide/index.html",
    "revision": "11afaf0925a1583341fb83d94cef5bab"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "6aed2f78e0fbdf81e6685f8a8e593fa8"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "96c54101ddb4d2adb0ba002a96b4c5ca"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "1f8c84434416d08fd6cf5a396c2e60f1"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "f7a634923613ffe3ca54524fe693e3e1"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "39098e3f7e0447aa5a2d87439d951d1e"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "c7529170446d3946e48199297281240a"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "92fae99412e91e163d74ab9d45d64f4c"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "805383915efde1891a8046804d9781de"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "12fdb2dc61266964d366c79e987754a7"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "644118f3b32dbf2b3a1834cf228c5c5b"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "54abb519311045ba4b18ae9ae31bf3d6"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "dda07426ec34199b279f9c96b4722eb0"
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

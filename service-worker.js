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
    "revision": "ce69f76ae867772ccf745a4e01adfdaa"
  },
  {
    "url": "assets/css/0.styles.5a77af59.css",
    "revision": "936808074577c46ef509b29a646c4a52"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.203d6c5f.js",
    "revision": "33c86be535ac7501e34bfea90f818fdd"
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
    "url": "assets/js/14.9d91f938.js",
    "revision": "5bc06405d10d434ccd0397fb5d185481"
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
    "url": "assets/js/30.03a13d18.js",
    "revision": "92172852431e57ac6f2f11a1360ffaf4"
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
    "url": "assets/js/9.f3bfe93a.js",
    "revision": "7bf646f34d617dd915a0d199b53ac762"
  },
  {
    "url": "assets/js/app.e7a945fc.js",
    "revision": "76d4c3f190dc2e8acb124ef2664f6ef9"
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
    "revision": "2198f4471fa6b9dda99789fbd40acdef"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "4782874662b4907d4775cb47c4643ffc"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "9e60f8843e9ad019ed075f7f05f3f8ad"
  },
  {
    "url": "guide/contributors.html",
    "revision": "6961cb807939ca2415634597b1f9c258"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4c79d824bd8fb7ffb91718cf18fef354"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "31e9aed0055a27a6c5a5d621759cc3bc"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "2f5a15b3b758eafc9d8ae3030686e466"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a8c34b92c983d6dcf8d30e6a993623e7"
  },
  {
    "url": "guide/index.html",
    "revision": "40e165fd3b55a63bfe320c346c368ae0"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "9b1bd6d62497d32243b8388bb7a15951"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "7d7832e3bcbe2f464fead6ae8960465c"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "602c2bed8a398cf111cfdc54b64f56b7"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "3a7639837d95e858a46aa4c8c4c12cd5"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "4a532b81e6015984a2ce5dfa18c69da3"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "077ca87cb3396585f2428dc6d7d05106"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "388d208488a10e0b8822591076436818"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8314a3220421a31761865356a00b65ce"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "82a78bfd919ee90a02b7720e9eeb59f8"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "9c7169e7b013286014c668bbb07e8050"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7f6af690c32b7da9f5e63ae823fed7a3"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "c8adf240071e9a4f4641610f85c82381"
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

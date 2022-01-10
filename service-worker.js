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
    "revision": "48f093a23515f5a528977dc953813b4f"
  },
  {
    "url": "assets/css/0.styles.196e21d4.css",
    "revision": "f3a4ddc7c9ff72e8a778ed719aefcc31"
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
    "url": "assets/js/14.fef3ca97.js",
    "revision": "eaee31d8d252f34e1f75c934dbec8c4d"
  },
  {
    "url": "assets/js/15.e177e811.js",
    "revision": "0dca5439fe63c8ab3b38d4a279f66964"
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
    "url": "assets/js/18.8e39995e.js",
    "revision": "3916ab1f0d5160d90c7be9472948d74e"
  },
  {
    "url": "assets/js/19.a1649a0c.js",
    "revision": "a38fda8505cbf5b584b5da1ee2ae37ea"
  },
  {
    "url": "assets/js/20.45c57dd6.js",
    "revision": "34b18f84fbc80cdc54753b36e0ed958b"
  },
  {
    "url": "assets/js/21.01a03f78.js",
    "revision": "6afc41029cee3ef9bb40d09524b5c113"
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
    "url": "assets/js/24.74b21be4.js",
    "revision": "3087abe90cb5b7ce4af18f47fa6d5bae"
  },
  {
    "url": "assets/js/25.ab761306.js",
    "revision": "6d3167f19413cbb40c6802e497903258"
  },
  {
    "url": "assets/js/26.61bd266b.js",
    "revision": "9c207e15a72e4f1013190134efe28ebc"
  },
  {
    "url": "assets/js/27.a0aa236e.js",
    "revision": "9852dea579f913fcf5238ff6d6a79362"
  },
  {
    "url": "assets/js/28.01812e92.js",
    "revision": "dfb852c1541d7c1dd0f26f8754aa25ac"
  },
  {
    "url": "assets/js/29.bb6aa9d5.js",
    "revision": "9088de61cabd6b5c21991b78bb02fd9c"
  },
  {
    "url": "assets/js/30.0017a9a5.js",
    "revision": "5046a26bbe7cb97fac46f2bcde3e25a1"
  },
  {
    "url": "assets/js/31.80e09e40.js",
    "revision": "ee529263e3458c20eb884cd89dfaa1aa"
  },
  {
    "url": "assets/js/32.8107c7d5.js",
    "revision": "e72c6d0fdb1d95514c936c9fd33a45aa"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
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
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.a7bf056a.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.f3bfe93a.js",
    "revision": "7bf646f34d617dd915a0d199b53ac762"
  },
  {
    "url": "assets/js/app.40938d10.js",
    "revision": "13a1d3df26f03e64d4f02418ae4c7314"
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
    "revision": "064fec6f3da83826c44995168506ac45"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "9815262a4a26532eb6007641293cd0df"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "f3897b8eae6e0f81255a638b94af093d"
  },
  {
    "url": "guide/contributors.html",
    "revision": "95f42fc6d684e3db2712f14cd13cd4b8"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "de9ec78edb9c4325c2dc256c7415e087"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "690f1e129575166c60574257a580aca8"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c58900682624ff1ff4ecd3766b57b75f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "391240dbe1c4ec149ebccab04e7f9d1d"
  },
  {
    "url": "guide/index.html",
    "revision": "3084d541c50a60b256b298b754f95b2d"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "169a14fec3b2ef6f9637fa835b6cda21"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "f591e37a87e07788a632bfe0e916e47b"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "ddec51af3937b53c9e281a3eec687385"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "c0121c054e565111d48482d01aaf3fb5"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "cdcbb9a6b2be403b54028e02fce40bda"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "580d40c55f535429e45bdf6b0b6237fa"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "c185ab709a435985a9fc45dbc2d47c44"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "e91f3a4a5687f9b39849f281a9fb8c22"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "bd2484246f574fe0b674b49d92dde8ab"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "aa25cf1b84a60e6f49e4ba81ab494723"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "cae07caccfb66d3d544a7578d4a85d6b"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "8121a29baba0d1a796afbed153a35768"
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

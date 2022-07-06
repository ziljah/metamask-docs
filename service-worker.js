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
    "revision": "51664764d42c16ccf76c7f6f4188b984"
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
    "url": "assets/js/18.91fd6703.js",
    "revision": "062626d1bf1742c6e42c824bc2812d85"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.aecacabb.js",
    "revision": "271ff1471381a6677f09d3bcf701cb75"
  },
  {
    "url": "assets/js/21.daa1b6c2.js",
    "revision": "c2b6478312426c79bfb1b9c95f0b10bc"
  },
  {
    "url": "assets/js/22.67174d41.js",
    "revision": "959c51c11242c65a60f578139f1d0bad"
  },
  {
    "url": "assets/js/23.743792b0.js",
    "revision": "bc5e7b347a113fa5f734f23a4803e36f"
  },
  {
    "url": "assets/js/24.96057b4a.js",
    "revision": "4024d566eddeb4bb079056a5f5c352ab"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.f8f75767.js",
    "revision": "8bbeb7ca2c6e42ea07d339def5b99ced"
  },
  {
    "url": "assets/js/27.908a9482.js",
    "revision": "2f3254456e1383668040d42278486930"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.f0b649f1.js",
    "revision": "e4715fd369328ddf2483971dde4f5e33"
  },
  {
    "url": "assets/js/30.eb9b7a0e.js",
    "revision": "553ecfa052c990d1c74eb312b832c385"
  },
  {
    "url": "assets/js/31.4746cd25.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.436bf087.js",
    "revision": "ce683c3558b3b63a8accc09582aacb4a"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.603865e2.js",
    "revision": "17039b54d2aa9a5b3e686d8ae2fd7229"
  },
  {
    "url": "assets/js/35.1e1004a0.js",
    "revision": "825c9fa269562d6c4188f954070b4f70"
  },
  {
    "url": "assets/js/36.61295f0b.js",
    "revision": "4d2c1acb0bfa66b19ff3d92ae5dc4d33"
  },
  {
    "url": "assets/js/37.606b7264.js",
    "revision": "62c0314bbed5bc3431ac904b7a755b92"
  },
  {
    "url": "assets/js/38.37c589f7.js",
    "revision": "24dd63c597f7153c7cd19375155d8d6c"
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
    "url": "assets/js/6.cfb38f1a.js",
    "revision": "3da70382309dcd99ad46f309bdc0b45a"
  },
  {
    "url": "assets/js/7.e06a715a.js",
    "revision": "8b239d108f078eadbaea5dc084cec7df"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.6ceff5d2.js",
    "revision": "8aea038cb275e5c7b9368e5b008ac929"
  },
  {
    "url": "assets/js/app.bad3053d.js",
    "revision": "5c4fe72d6099a2dfaf52282ed0c28dd9"
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
    "revision": "e0ca0fea0f5e26ad2e529a935fc496cb"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "e9f4237c65ef043e8fe16b267b5477f5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "73ad0fdb9bff68b1ff6d6beb370fe723"
  },
  {
    "url": "guide/contributors.html",
    "revision": "dfaeda4851cc4d3fdabf99a4227b15c4"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "757761efe2a2d845b7e01dc39d924c40"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "e08a8704a80ccb537e226542fcd1f60a"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "46d0f00f32537a639aec079286604f05"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c721dac39d6d258d6dbf5363b3bec2a6"
  },
  {
    "url": "guide/index.html",
    "revision": "6110c44a6381b2565171cfbe9397295b"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e9bb217d290bb3e8087d3aeb14048927"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "a3bd3fb1cec46efb09f879bbb5b19524"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7663a611836f9e42ac5774c85ae85703"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "103e97a58d1a01bd8b14d0557008061e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "cb351866a94110357eca0322eac1cf38"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "9f58921b121b4dfe07efe142fa519be5"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "c18cef6cd71ac1f902a9e44f65c3e7b3"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "88580578659d5adfdab23f7d9985abe6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "b2636bcfe10896a46a8c2a5b16ca7661"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "5b88d6043b3f2e6dcbf26dcc97e0d3a9"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "66b2d8e7bd07db528940cf645bab574d"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "b443fcd29306d5de801346a02946ce9c"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "dae89e0012cb7af63a3f6793005902e7"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "57fdb81a1a71104dea1c86f800b9abb4"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "e300b1ca07e8d2bae29408a288fdbf52"
  },
  {
    "url": "guide/snaps.html",
    "revision": "ff9753fe4916cb78db38a4fa376d638e"
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

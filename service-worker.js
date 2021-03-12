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
    "revision": "64c4df6b787d40e9e3e7da2182f1cc48"
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
    "url": "assets/js/16.904c58fe.js",
    "revision": "35bba10d19855d1f10a7dc8c5a08dbe6"
  },
  {
    "url": "assets/js/17.813125f8.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.3c1fd809.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.8f8334e6.js",
    "revision": "a38fda8505cbf5b584b5da1ee2ae37ea"
  },
  {
    "url": "assets/js/20.e4e8c0b4.js",
    "revision": "0a72c12f2695d763a4d4f99ce45b5fa1"
  },
  {
    "url": "assets/js/21.02b7a977.js",
    "revision": "33493a11e2737821b71971348fab618a"
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
    "url": "assets/js/24.fad54728.js",
    "revision": "a0acc79bb8118fc61a586c713cf4a201"
  },
  {
    "url": "assets/js/25.74d41771.js",
    "revision": "1fbb7be9be75ceed308f03661c510f4f"
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
    "url": "assets/js/30.e8ea9bdd.js",
    "revision": "4a5bd78568f85da3ef9cbfdb383ab7a8"
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
    "url": "assets/js/app.f8645f4e.js",
    "revision": "03476afe52f4ffc86a5986e855468224"
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
    "revision": "2f535130954060da00f09d77b9db9a4b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b215aa5ae049f50808a0de063984c747"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "cd737e9ef81db279209acd7639171bca"
  },
  {
    "url": "guide/contributors.html",
    "revision": "173162583ebd69dc1e12d70333bb4ef8"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "344943dc5caa2ae88c141c93001dd624"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "711802c94fddec96d3b96e9337065617"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "763f2e516048bd66b0aed799615a942e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a89cb19c3b30b43463571a305efdb843"
  },
  {
    "url": "guide/index.html",
    "revision": "e2b24cddbeb612c6295cafc25a9e0b33"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "34bfc7dfa2c660bd04e427eac1d8bc53"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "f79a237dbdf924f2cb2078435ba6a506"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "4c5599e8e577ab7f09ddca5ab6f315b5"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "f19facc70204413d2a0295fea5d57567"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "2f16dc75b2dbc733382a0ddc7e0cf559"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2c769f69e3e815fbbdc2cd384e2b16ff"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "9996bcd8e4e5770659cd48c2b19b378b"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "b95859351877dac7378ba9ccd339046e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "1c631aab3e642fee6004c64ab5eb7fbe"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "04d8ff24e1ddd6898c77f679dd492405"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c58d66d4cd6fc67318f1a9697be057dc"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "308da1953cc255db5db5e907470a5027"
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

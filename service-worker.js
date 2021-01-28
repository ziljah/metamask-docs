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
    "revision": "7fabf5afbbc7ae851d0dd33171421d89"
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
    "url": "assets/js/18.65343445.js",
    "revision": "034affe28e05c5cf6e30c394375849ef"
  },
  {
    "url": "assets/js/19.1a779be1.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.d64d2418.js",
    "revision": "d201aac39c8d60697e86215c6e15813d"
  },
  {
    "url": "assets/js/21.1f9dbdd0.js",
    "revision": "0a3938835de2ccea1d05f060b8d9d573"
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
    "url": "assets/js/24.e46aa721.js",
    "revision": "b602cf93bd4f8ef5925ce5f05db992ca"
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
    "url": "assets/js/27.bada8377.js",
    "revision": "77a511de656c108d0d04df0b083bd01b"
  },
  {
    "url": "assets/js/28.f4755381.js",
    "revision": "dfb852c1541d7c1dd0f26f8754aa25ac"
  },
  {
    "url": "assets/js/29.bc4639fd.js",
    "revision": "b030875706ec965a9fc9238aa6ca294a"
  },
  {
    "url": "assets/js/30.5e3ce49a.js",
    "revision": "cb97352eeb93680c5ba2c6039ed9c2ca"
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
    "url": "assets/js/33.79686ef6.js",
    "revision": "5e207019af9df153977c16681373b056"
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
    "url": "assets/js/app.1a2b99b4.js",
    "revision": "0c6ff770756657d3d9d82ac08eb6c2bc"
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
    "revision": "6ecb1623a9c856831a4159092631edcb"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "4b799862204b1ece2525b7a04f063433"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "af48ea8986f2caa8d2932d46662257d9"
  },
  {
    "url": "guide/contributors.html",
    "revision": "7799868fa93b72891373fc4587b5e926"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "803e6b477a45a41209bffd9c67903f6c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7a704c0a914b29bff0b5cee2fd984f7f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "43a530a43042f288a8b101226e3367af"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8565de44649c92e0b2b311bdd872f561"
  },
  {
    "url": "guide/index.html",
    "revision": "f8c7f78c00733662238205a1957ae9fd"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "4c1e440b778f94aae7d6db08b80b5199"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "3b6920d779b11430fbcca2f957764241"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "ce3e036affa8b0d3063a6efc5ccddf04"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "31b1e55e4adb2b7e0fe02046aaed29b1"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "763cc2fced58a6c8e93614c13c2eea03"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "0926fd9617c9c1ab665b981eda848917"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "926a20bc6bbcd98f73211c167e8b0d9d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8b609951fc855596033a2b65c2a61c46"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "cb77ac977b88f65babbe8e2eaf8468a8"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "7fa956be03c08111148a14f7dcd17d8f"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "01cbf4fa08da6a94610815cfd5edca52"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "0d3a00f90a9f854d89017b7762eb9252"
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

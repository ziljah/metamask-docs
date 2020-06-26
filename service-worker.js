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
    "revision": "e7d17652c9b85a0795eb2a2edd267c44"
  },
  {
    "url": "assets/css/0.styles.136e0e71.css",
    "revision": "cf5a8f9622999aeee52cd1d33da709c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2b5c3295.js",
    "revision": "667a0a2fa26dda73128c3f8374fe6f93"
  },
  {
    "url": "assets/js/11.1d334f84.js",
    "revision": "7269f599fcbe8c7c9bec6c68bd9d4f1f"
  },
  {
    "url": "assets/js/12.134edf91.js",
    "revision": "6831c5b8d341f31f544caad3493b5006"
  },
  {
    "url": "assets/js/13.f963feb9.js",
    "revision": "f9fd056144afe33f0875be254b93457e"
  },
  {
    "url": "assets/js/14.6e41f592.js",
    "revision": "1e3a76fa74b695ce8e0611dc505f53d1"
  },
  {
    "url": "assets/js/15.5e050eba.js",
    "revision": "a72b179eb112b3d73639bde2059e285d"
  },
  {
    "url": "assets/js/16.9012ef23.js",
    "revision": "b9425e77a79897e81a8063a3d5d21c48"
  },
  {
    "url": "assets/js/17.3a3d433c.js",
    "revision": "b2686ea7eb6f0696d38567147b9ab5c9"
  },
  {
    "url": "assets/js/18.c7a5d970.js",
    "revision": "843350a3a3adf1576fee7a90db434dad"
  },
  {
    "url": "assets/js/19.63413caa.js",
    "revision": "b7ec7484b16d31ca4d987da6dbde1ddf"
  },
  {
    "url": "assets/js/20.f786e3ff.js",
    "revision": "5d1902c026a5f4252f9e5796bc2d055f"
  },
  {
    "url": "assets/js/21.aa06821b.js",
    "revision": "96f633ae09af3b40a8183fe88e787fbe"
  },
  {
    "url": "assets/js/22.e0b0246a.js",
    "revision": "137d09addf56fe9ec077727cc0ab6664"
  },
  {
    "url": "assets/js/23.b731f2c5.js",
    "revision": "0062aa0b54aa28bad51bf1d7ce37694b"
  },
  {
    "url": "assets/js/24.5ec8dbbc.js",
    "revision": "6c4c555da120fe1a6df872c181d86418"
  },
  {
    "url": "assets/js/25.70a17f7e.js",
    "revision": "6eeafbb7b70e85a02d63f2cbd9d97267"
  },
  {
    "url": "assets/js/26.0fb6b2a9.js",
    "revision": "2f3ea04b8e14e4de5530054820d34c01"
  },
  {
    "url": "assets/js/27.69c7357f.js",
    "revision": "6e8be5c960783b7cf61b2e7e93cb24e2"
  },
  {
    "url": "assets/js/28.7020bcc0.js",
    "revision": "81bcf4249896afbb92e323776f8a6a6c"
  },
  {
    "url": "assets/js/29.85eb6db7.js",
    "revision": "37097a8006bd87414abfa415751cc644"
  },
  {
    "url": "assets/js/3.706dd5d3.js",
    "revision": "588ca0e5b6a3884b4dfd3c42c7e27194"
  },
  {
    "url": "assets/js/30.e58c5899.js",
    "revision": "7eb22d9a88c9bce3f22b608599091934"
  },
  {
    "url": "assets/js/4.7d38fd43.js",
    "revision": "a1e282d8a6dd8282d2ed841ffc43ef30"
  },
  {
    "url": "assets/js/5.a9f95618.js",
    "revision": "6037c33f7a7cc47c3e1dc811ed3c813c"
  },
  {
    "url": "assets/js/6.df9aa455.js",
    "revision": "394aa6c73de49d83fda7660f9d7a731b"
  },
  {
    "url": "assets/js/7.53c339ea.js",
    "revision": "96684965052e84ef43e38e2d4de24d73"
  },
  {
    "url": "assets/js/8.dfd83fe9.js",
    "revision": "7a2bcf6742375d383cf2d0c83fc2cabf"
  },
  {
    "url": "assets/js/9.f64036f1.js",
    "revision": "424a0dcb1019f027650fc057a4fbd5ac"
  },
  {
    "url": "assets/js/app.78ab002d.js",
    "revision": "c17a015e8f627e2cc171044cb19e3280"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "282c187899129171a96fe302be5add1c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "8aca4fb2c45ce75124ac622707b0e361"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "33f3d9fc84f6009d8d0480eb2eb4512f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "643dff39c278946e3579383a9beafa10"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "db7110417f5af3e58afce81bd2931461"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "1145b011361b4f06191ef95858c3e6d1"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "4c8dc2a6a6bd1f8377e1d798c2ddfb6d"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "4250035bed02510c39fa27d71d4f9ccb"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "ebe9e2af99483e8b4e68d59a6192e9a1"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6070c98a91ae3f46641a908f954fcbb6"
  },
  {
    "url": "guide/index.html",
    "revision": "10a5962c448ecfa4bc422b21f0c20f35"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e5b66dc18c4040a50d235762152ea993"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7e845e9867a4665bb5839e67de394aa7"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "ef4f53b0efc40c65d0ce7643a2cf997a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b3b1b2182b7c4e20304852d44344283f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1dc7bb033de3483401d8df08f8b4dbf2"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "51fa92a76a7b677bbe30aa59572faa95"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "81bc4470aae14fd591d4ff3aaa8be647"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "3f827eaeaaa9f10315e5f4f8ed62d192"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "b152aa6c66a459a391ae18c6743f87e5"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "e8ddb3d702200183813ff7b4b8bddc8f"
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

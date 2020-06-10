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
    "revision": "6e05ed4af26668c67a00b6600f386a8c"
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
    "url": "assets/js/10.97502985.js",
    "revision": "b52f2fef445fd72c0b5d6abc7366c51c"
  },
  {
    "url": "assets/js/11.1d334f84.js",
    "revision": "7269f599fcbe8c7c9bec6c68bd9d4f1f"
  },
  {
    "url": "assets/js/12.f443dc63.js",
    "revision": "f020f4774c5790590af790e02d2dae09"
  },
  {
    "url": "assets/js/13.29bb75c0.js",
    "revision": "c45debc359c74b8d5f7387cd35358745"
  },
  {
    "url": "assets/js/14.57057ee3.js",
    "revision": "0c4cb08bccc1ac5cd4a4c48c45119ff3"
  },
  {
    "url": "assets/js/15.e4fea7f9.js",
    "revision": "d0f52d8c7cc3ca3af4c9591f332b7959"
  },
  {
    "url": "assets/js/16.5f14bcff.js",
    "revision": "9ad02082225423ff8d05ac155200a902"
  },
  {
    "url": "assets/js/17.a7a8270f.js",
    "revision": "ce541a6de414ec808e4e33c55f12b8e0"
  },
  {
    "url": "assets/js/18.fdb261aa.js",
    "revision": "39af213ff6ebcda2903e9dd0dee6f491"
  },
  {
    "url": "assets/js/19.182fe59c.js",
    "revision": "9827a3c627a9debc5132909d7494e0f9"
  },
  {
    "url": "assets/js/20.6813f397.js",
    "revision": "4fae66aab22a8dee430d00792e26d6a3"
  },
  {
    "url": "assets/js/21.7f2c3709.js",
    "revision": "fc7a5548c42e91210040c6dc40fa9e65"
  },
  {
    "url": "assets/js/22.969bdc50.js",
    "revision": "57fca4c7f314441084d84584cded0861"
  },
  {
    "url": "assets/js/23.af5cc66a.js",
    "revision": "e844a95ee4915d144ccdb3eb5e66156b"
  },
  {
    "url": "assets/js/24.c527aff3.js",
    "revision": "07027582a808c87449ff1de1eb83c3e1"
  },
  {
    "url": "assets/js/25.291dff0c.js",
    "revision": "3c81a01dd284c21b56d466ac82d0d8c8"
  },
  {
    "url": "assets/js/26.6ae0364c.js",
    "revision": "76a3cc530c38402399b673c99adca6a0"
  },
  {
    "url": "assets/js/27.a1100231.js",
    "revision": "c5377dccd0a4e1bfa8cf450ce8e9a471"
  },
  {
    "url": "assets/js/28.9a65aaf1.js",
    "revision": "712152b85ccb99c8cfd6d4dc3edecc43"
  },
  {
    "url": "assets/js/29.a24969ca.js",
    "revision": "405c325a9e50d72b09a6aeee2edd41b7"
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
    "url": "assets/js/9.64544878.js",
    "revision": "f4663330dc281279475f14d15d41ca1a"
  },
  {
    "url": "assets/js/app.442d31fc.js",
    "revision": "aa085b646da56121d502aca2e58aabbc"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "bc7df4035b4f667997783ea3ecb0c305"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "df3be5cfe46c9b35cf450b85bd060d79"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "127ad92637232644c77fa0bd6a5d5560"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "ea88b977155d73b45ece8ee5b8d15c59"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "c10b2acdc5a27920bbe01c26d5b664b1"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "15fcf08f0adbc2a7b6323a63151c166b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "030a86067d8cfd5e1cddc9fe2d178bb9"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c1410c0b9beec2b4baff235a5e2896d3"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "2adde02cf321f62b505a555d200cae2a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "daddf7debf382a8816420a42d914695a"
  },
  {
    "url": "guide/index.html",
    "revision": "69b5137abb0b678c3382fc19ca75e4e2"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ae8b5b1dc720ee4fc92f0a50b130cefd"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "b5857137ad152ed5e135eb2309a5d764"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "53aa6d7eb82f90823eccfa9a54e0ce60"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "efdef0d6d7f6962510f31679459315ae"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "62aa51978277fc94ee0e319ec77739fb"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "25791dca5fd45bba82729a602d9b947d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "70e3c223f9bfec886876b614ba2d47e6"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ecce8439589466516205830696123ebd"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "1f69cec80e954a52e6c830048fb4b8aa"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "40382bfa86a1f78eff0210e3e6f3d597"
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

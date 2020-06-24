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
    "revision": "30bebc2eb8118ee5a6d6b9015f6a3d1a"
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
    "url": "assets/js/10.af3ee79a.js",
    "revision": "552dba49234a7a2cbaf1a3ee93800158"
  },
  {
    "url": "assets/js/11.1d334f84.js",
    "revision": "7269f599fcbe8c7c9bec6c68bd9d4f1f"
  },
  {
    "url": "assets/js/12.a881f36b.js",
    "revision": "e6583bc5f8d27528ab0529adbb6ec771"
  },
  {
    "url": "assets/js/13.5052d8c8.js",
    "revision": "2ba4fd6d1bdace85bfe72ab659d5acfd"
  },
  {
    "url": "assets/js/14.57057ee3.js",
    "revision": "0c4cb08bccc1ac5cd4a4c48c45119ff3"
  },
  {
    "url": "assets/js/15.5e050eba.js",
    "revision": "a72b179eb112b3d73639bde2059e285d"
  },
  {
    "url": "assets/js/16.9ebae792.js",
    "revision": "930ed34422fa36216cef38f478469703"
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
    "url": "assets/js/25.316c4bff.js",
    "revision": "264565ef981a8e33880ebbc4eb64e5dd"
  },
  {
    "url": "assets/js/26.e63bab58.js",
    "revision": "1073e81c567398e6e1bf95abd85824de"
  },
  {
    "url": "assets/js/27.a1100231.js",
    "revision": "c5377dccd0a4e1bfa8cf450ce8e9a471"
  },
  {
    "url": "assets/js/28.11206590.js",
    "revision": "67a26417571a66a7de2eb76c68bbb157"
  },
  {
    "url": "assets/js/29.df39111e.js",
    "revision": "dd3007e28bbd33731616b308a66f2276"
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
    "url": "assets/js/app.46646f9c.js",
    "revision": "91287a96893314fd3132151729965e61"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "564a9fcea6060023ded92871fc673b19"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "3c2b1ed8bd3ff80bfd3bd9838467225f"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "0b048d679a80bc9388b1b16069374395"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8419c474d1c26cc8b4e850a61b9985b2"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "5fe365683d5ced54e6baa568c9c6baf5"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "4d3367f18dee4f1ea44c873b9495082a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "0bae4acb5224079e2392bd93780c9124"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "189e6d4880ec59e3961fd9a34023812d"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "5e7f279e95a15bc71a1bad38e09e31ec"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5c0210d215d9760e233e8a70c7740af1"
  },
  {
    "url": "guide/index.html",
    "revision": "d2650251393ab1b9e0bbda9edaa79f22"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "efd09aead2df4a049239560e87dc221e"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "1c6a8331e1c7f81adc544812c0e13f6a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "b0c991b9ce9a0634a6b0b5e34ff1c978"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0c993a302e5c5d30b85297f87b2f57bf"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "97e99d6d96cc9e8e35ea1ca4edee96c0"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "d211f7f1a72884d02f301cab87579f1f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "61ffb010112c10d808d7c0713d49c312"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "16c2fcbf3bd06085ea7e5270b15e67a1"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "3a0aa730678c75f8285e4e4956f64460"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "f3df73363fd1483f6c9b1a27216a3529"
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

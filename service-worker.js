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
    "revision": "ae7aa06c7f483f8d5f1ccf514120bb8b"
  },
  {
    "url": "assets/css/0.styles.8dcb5106.css",
    "revision": "10de1213d2442d0add4f5413c0d7213e"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.ea876645.js",
    "revision": "4897f6656320e84c1fde0cd25139856e"
  },
  {
    "url": "assets/js/11.c8c32f07.js",
    "revision": "7a218ebf3e877987f7991b2a6907e7fc"
  },
  {
    "url": "assets/js/12.d0b2592d.js",
    "revision": "26e5f381cb23518521315c91a664974b"
  },
  {
    "url": "assets/js/13.7f205b2f.js",
    "revision": "eb4dc9b82698788420594ea40e9e59d8"
  },
  {
    "url": "assets/js/14.fa495985.js",
    "revision": "a03c6e3f9506ca3029e4c08752320a68"
  },
  {
    "url": "assets/js/15.075647e1.js",
    "revision": "9f231a217f40929b57efbcfda64a01e1"
  },
  {
    "url": "assets/js/16.24317299.js",
    "revision": "52c8c7b071348d92717e121b943dffa9"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.bdd85714.js",
    "revision": "e25ae88e071132c3a2b8eba1fc703615"
  },
  {
    "url": "assets/js/19.94d8030b.js",
    "revision": "5ff14d4ee4c4509e47a021829a7552ca"
  },
  {
    "url": "assets/js/20.1234e0ab.js",
    "revision": "01376a1c1b41425847910cfd332b8cd8"
  },
  {
    "url": "assets/js/21.d6fce277.js",
    "revision": "123fedd7c7546317aed2e6286ce59329"
  },
  {
    "url": "assets/js/22.ae8100fc.js",
    "revision": "6ee0473c8ae65faba0cddad5d640a870"
  },
  {
    "url": "assets/js/23.f12ea3b8.js",
    "revision": "98c7fbdfd8e23c9091902d01cae03f17"
  },
  {
    "url": "assets/js/24.6ad5806e.js",
    "revision": "f5a7067e0c676dea22c62d3869dc3072"
  },
  {
    "url": "assets/js/25.f99b767b.js",
    "revision": "9a1a15cb2b56cbfddf65268088fd616d"
  },
  {
    "url": "assets/js/26.047cd97c.js",
    "revision": "f9811124a8761279c895dbc5a40d9be8"
  },
  {
    "url": "assets/js/27.c5e59ec4.js",
    "revision": "e15241c584c0e0a89fec4dfea7f7bc81"
  },
  {
    "url": "assets/js/28.ee19db3b.js",
    "revision": "d04077526bdb96b79b4a6f310dc00e27"
  },
  {
    "url": "assets/js/29.13b67826.js",
    "revision": "4a56d193c552f396222308647a047a54"
  },
  {
    "url": "assets/js/30.5ba22dbb.js",
    "revision": "223589eb23723579e7723aefa999fe4f"
  },
  {
    "url": "assets/js/31.2e1e12cc.js",
    "revision": "a7c6ce489404e95f85b4c2b6cf43bf4d"
  },
  {
    "url": "assets/js/32.53667f5f.js",
    "revision": "889f5da3fac04323034839df4b03841c"
  },
  {
    "url": "assets/js/4.2530261f.js",
    "revision": "aee2ba4b11891081e4a2196a90d432e9"
  },
  {
    "url": "assets/js/5.dc3dae0a.js",
    "revision": "761d8df16cb9e2b39cfc5cfcb1473ee5"
  },
  {
    "url": "assets/js/6.d745268e.js",
    "revision": "5a4943dd355341c17e107eed75ffe58e"
  },
  {
    "url": "assets/js/7.1147ee0f.js",
    "revision": "3a872c4bb09ab114453a74ebccbf9919"
  },
  {
    "url": "assets/js/8.97ed842b.js",
    "revision": "bb968352bc4c8900d55bbcba97ef6265"
  },
  {
    "url": "assets/js/9.520a54c4.js",
    "revision": "d32cfadee44033783136b91510fd2dc6"
  },
  {
    "url": "assets/js/app.19922ce3.js",
    "revision": "6c380123af62e7d7eae62d167c227fc9"
  },
  {
    "url": "assets/js/vendors~docsearch.13c21034.js",
    "revision": "99fca4d6c890c7ef2fac9b69a2f31a85"
  },
  {
    "url": "assets/js/vendors~notification.858aa34f.js",
    "revision": "22962219ef3d017a36b7c767df0e9d61"
  },
  {
    "url": "faq/index.html",
    "revision": "b5bd6cc150daa90b816876ec06a78be5"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "2e814726326b401acdc41641bc3e5f23"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "832453d71e5442694865e32b08b53cc5"
  },
  {
    "url": "guide/contributors.html",
    "revision": "ae2992b08e093ac66032f7c7dafad60f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "fdc06868a02bc438b3ec04dce15e1f3d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "7021c7b81f5a527cb42be815c88622e1"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "a25292fe4d6e3e86309c3961f978f6e5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4d6d89e5d7e26fee2486aa10975acaaa"
  },
  {
    "url": "guide/index.html",
    "revision": "6df095fd0e495b4ea4162af6e99494f0"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "c466fa572c3129dd780bcc68452a8c94"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "dc587a79e8a6db03591ebd58b5e37f77"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "fe0d5d800526afb8447f4609a6e87607"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "7ffec8426645b43087f17cd47823943e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "f5ee898bd2422dd8e1fce989569de2fd"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "a79fbe275ab865b5cda0ccae9f04e640"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "044b3e47e693acd23e135a3b9afbdb21"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "db4e7e3e01a6bca43d53a582abe5a4d8"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "06c049ae0546cd47980fc4bcec2d88d1"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "252047dbf0ffc93dc9f4f75b069d2f42"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "dbea1307246c503c00be3dcdb9a7fb86"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f2259243a6d78b829a2b1788817cb415"
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

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
    "revision": "427d332bf85a2c54b839ea99f51a6636"
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
    "url": "assets/js/12.e7534a16.js",
    "revision": "10efeacf7e78151c0d32d15c9b195856"
  },
  {
    "url": "assets/js/13.1845e232.js",
    "revision": "44f25df4833532d7df664280f60fcd60"
  },
  {
    "url": "assets/js/14.463e000f.js",
    "revision": "18b7de48417e8c9e6ce98400c970dedf"
  },
  {
    "url": "assets/js/15.70c9efb8.js",
    "revision": "fdf26b7c0eeaa72ef7bc858c8cfc2af9"
  },
  {
    "url": "assets/js/16.fbb2cbcc.js",
    "revision": "98307a42bc90bd82a576a1f9f1d1f1d5"
  },
  {
    "url": "assets/js/17.d4b94795.js",
    "revision": "1b193cc637e1bd0eef25ea709e62d3be"
  },
  {
    "url": "assets/js/18.85a04573.js",
    "revision": "101d61721a1579ca607089d93bdb4149"
  },
  {
    "url": "assets/js/19.8aef5e48.js",
    "revision": "8806c05cfa816de61f1fdf88891bd545"
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
    "url": "assets/js/22.cffc4617.js",
    "revision": "deafe280afcb531a4e02ac885b8146ef"
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
    "url": "assets/js/25.1cea2735.js",
    "revision": "17c5b69ee8c1223a318a4b2190846815"
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
    "url": "assets/js/28.bf3408c6.js",
    "revision": "7022b1e537ee806582c50f921ffc373c"
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
    "url": "assets/js/31.38f00854.js",
    "revision": "27bcc5f04f6671d7da07d1da771a2da0"
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
    "url": "assets/js/app.d3a832e6.js",
    "revision": "bc5cbc529e673db7c1c620b574e08838"
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
    "revision": "d7be6980aae3e5ae3e1b5a9af1f721b4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a4346634a885d5d700ed5262fce79e65"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "d5c6f73dd51f4ee749a730d904b98120"
  },
  {
    "url": "guide/contributors.html",
    "revision": "99e07cbb27e7d267d0464ad4e4d48251"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "27654c0dab77c5cd8d0ee14af62cc06d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ea4be0c9743f210c61f46b8942b096db"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "541dd15b4df78279e1dfe2e565f32031"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "73a1ec78b89eb1dc796672180bc92f70"
  },
  {
    "url": "guide/index.html",
    "revision": "43c4186b73697b5999a0416c4ceef9b7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "50b700b638096c527b3ed5bb10b3f400"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "209e77de030db6d03e55a2b79ad49c3f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c7d1524d774168111066d8fa59a59893"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "9730185cdc54936ec5b42c494a4b5d40"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0140d6cac0a238317a16ae50be13a0d6"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "0dfc4778b4b43a00c599e5c24e5e1526"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "fbe7d1581e87e9a2a1f5141c275e1797"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "3e3415fddd73b4c1ad302b7e1460f63d"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "da249991974dc9a497f3e13f837c34de"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a8b4cc046c14b6b58d700c7f2868d781"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c0d749c979cc873052b66410c471299d"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "d86cc4169241574051619ef79e449eec"
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

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
    "revision": "eae9acffee808046dccd3f4f1835a562"
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
    "url": "assets/js/10.62f8824a.js",
    "revision": "0c01aa31e378016576e86d9ded0ffbb2"
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
    "url": "assets/js/13.43435ddc.js",
    "revision": "8f254b9d34fb11a840afd15642c580f7"
  },
  {
    "url": "assets/js/14.b8a0ac1d.js",
    "revision": "f62ea58682faed905d073266e9ef754b"
  },
  {
    "url": "assets/js/15.e4df139a.js",
    "revision": "ad57c05b1e7774d5a62fd791c9fe583f"
  },
  {
    "url": "assets/js/16.9012ef23.js",
    "revision": "b9425e77a79897e81a8063a3d5d21c48"
  },
  {
    "url": "assets/js/17.3844de08.js",
    "revision": "69e9f8f5002d668a151b4c2a691099bb"
  },
  {
    "url": "assets/js/18.88519165.js",
    "revision": "8dc06e2e0f37c2c551c75b1c85695861"
  },
  {
    "url": "assets/js/19.3d8fef4f.js",
    "revision": "bd441bace60b17f454d9621d435b1c48"
  },
  {
    "url": "assets/js/20.f1936d17.js",
    "revision": "326123c4561ebd4c4dde6e6bc7861d79"
  },
  {
    "url": "assets/js/21.942babb5.js",
    "revision": "5b98b6f0947ec0ad073e3134528ca2a3"
  },
  {
    "url": "assets/js/22.ad70f6d3.js",
    "revision": "51e81ec48ca5a1ad86f0cf6d239762f9"
  },
  {
    "url": "assets/js/23.29ed66e9.js",
    "revision": "6bed47776e3fa009a75699a1b5df4768"
  },
  {
    "url": "assets/js/24.64a81807.js",
    "revision": "481271af72560e59564046bf49efc1df"
  },
  {
    "url": "assets/js/25.42a69814.js",
    "revision": "2e90710f00386845843990e1ca3380e1"
  },
  {
    "url": "assets/js/26.b98d5475.js",
    "revision": "48dd1815a30e3e116e4362b813df95f2"
  },
  {
    "url": "assets/js/27.0ac95ffb.js",
    "revision": "f7d89a77a8338dcd2ee46902c404331f"
  },
  {
    "url": "assets/js/28.2f8fab71.js",
    "revision": "9c73153433f020b9488e648f86eafaca"
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
    "url": "assets/js/app.a34f1203.js",
    "revision": "0ba650ed5b72ba6d18965b428851fc97"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "5b367517c74f86585b40bac8abca5988"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "9386edbb642cb6bea0a7d1202fa3284e"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "d1c52f805010a6ad54f7624781d10ff1"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "6b6aee961c4426eeae0e62c4e3e1dc17"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "bb4e6667241668fe2c588689ff661887"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "b2e1029785f69cce33cebc23f8815312"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a8bf4ade6c13d22db1daa701ee037072"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "fc3c2d91f542aa6ea448e77a178e6ade"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0be680fe89f24d0143832eb9504a41a6"
  },
  {
    "url": "guide/index.html",
    "revision": "63d1aca906b5f1e6682e42562ab80970"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3197940e807f80115349f5bbdea580ff"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "4f1ee9062e3f45d1a6c2f896828e036b"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "59f6a9951b626fc41e469c12e99df851"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b5c87a92034c039a0dc4cf14e687d9d3"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "1b71d2b48e181f37fc1b0eef5df6e3e5"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3247638574066e42274d7c6e691df717"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "f74db0f7c415c6eb368d60bf305a6545"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "866fe6c9eb4f3e8cf9041341ce4edc83"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "2d4aea8b8b119c10796dfeded0e28190"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8aa85674f661d97e1cf145cb3c7da483"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "6d576fad580836691627bec8a8cd1d3d"
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

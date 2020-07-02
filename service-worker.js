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
    "revision": "9f32d8661fc905730703393f65204492"
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
    "url": "assets/js/13.2fa3aa6d.js",
    "revision": "7ae3adc34ed7214231c8503e4ed2f5cd"
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
    "url": "assets/js/17.90d40aaf.js",
    "revision": "db8cf2ace56f85e752fa3c29830d11c9"
  },
  {
    "url": "assets/js/18.88519165.js",
    "revision": "8dc06e2e0f37c2c551c75b1c85695861"
  },
  {
    "url": "assets/js/19.0b26a6c9.js",
    "revision": "4281b5b7e4b425249a99e78082812f5d"
  },
  {
    "url": "assets/js/20.55813330.js",
    "revision": "f29df24c07a8d8b4c331d0976dc1a5c9"
  },
  {
    "url": "assets/js/21.dfca3476.js",
    "revision": "17b030fbf0f84923fe1d15f0655e3c6e"
  },
  {
    "url": "assets/js/22.84491e79.js",
    "revision": "19ad6a38fa86e7e027b820a19b968812"
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
    "url": "assets/js/25.8ae8a4a9.js",
    "revision": "e5638321b99069f5f4f95d8766dd8037"
  },
  {
    "url": "assets/js/26.bc83aa0a.js",
    "revision": "fc06ac9150c164704137cf68f51b2450"
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
    "url": "assets/js/app.655bea04.js",
    "revision": "699d0b9a275be25c1567cf3862d96a54"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "9f257b295e5cbe758292e34a3f184a63"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "3bc876d85a05322fcaf5cdd5c9f34d2a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "481ae4cb0fc3197759698cac2bde89aa"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "0135e3ee7c197a13130652c7dd9c156b"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "e041608ade6a7d51232c6018df81ef77"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "1055dabb982596ad4e5a2b264d1b6719"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a04a83b0a61b5f8dfeea557222e6311d"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "8dda76ea919a0521055b0c8511103263"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "174619a8f31cac0efd6f5391af037098"
  },
  {
    "url": "guide/index.html",
    "revision": "56c0222a10453a17a39588ca6e368e31"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "550e8e44805361f7ad258e3dd53b586f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "bad2cfd46adc315ab6996cf3d05118cd"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "e4a26be14a0216dc7ece3d2068798bbe"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a634d8b77c6acfcf0ca12bdd4798f243"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "22e50980ab34e109f4a99d8fe87641a9"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "00ef1df6bdcab3b8af1118082ca41b36"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "2970bcc199a039b312f39c1bed1ead63"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "043bea6ca0c527d576861c9909c04b1c"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "ec32147d254f9f708d64071339c87631"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8941f8cbc7d9fd99b05ed72bfde48746"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "ed7f5ccc28bc0c3f7023c6db48132c7f"
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

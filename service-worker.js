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
    "revision": "c28309f6b65c872a6bbb049abd88f3d2"
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
    "url": "assets/js/12.1c6d0703.js",
    "revision": "a15b7daeb4b6d402e449a92085ec3ef1"
  },
  {
    "url": "assets/js/13.1c230673.js",
    "revision": "64f702e25401b4a1665278dd736cc109"
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
    "url": "assets/js/24.29cd539f.js",
    "revision": "ffa47a1ed39154c1cb305e3a6002fe0b"
  },
  {
    "url": "assets/js/25.feca0a38.js",
    "revision": "d6dfecf47c078d1628db580865c74b45"
  },
  {
    "url": "assets/js/26.c60a874a.js",
    "revision": "62bfc2e13d64218bccbb3c12c0ea00b7"
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
    "url": "assets/js/app.a5fe4881.js",
    "revision": "8458a6ff1b81b66100ca5fe8df794f7e"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "e6ff3d2b57fb21f69530760f76247e7a"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "ac33f2e8f082c74437ecec9ac760029a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b63450bb2df2dd03acf15f316850c26b"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8ed86a231ead77fe85024397a3bf9488"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "9abf3dc864f86a5a438d4f854f44e3ae"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "e89297ef54bc2c2a858ade3528a9946f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "e1107d1528e572d0bff55d829877612c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c42884afc0e73ad1467f309c8332c35c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8954df7f6e5a461c9a20aae6e21a68da"
  },
  {
    "url": "guide/index.html",
    "revision": "48aad11ad81d26d61d6d0edded66e7c8"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d6072a69952e1113fddcb5f764ca55ed"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "77f1b8cd6066065062f421c87da71131"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "64b8b46dc1baaed1c6f7345a0fe5cd47"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "3ac9ce4544e56f3453bbbe93a76cb3b8"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "a456887c10abba37835a28e257e65df9"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1fb2921e52ae268aed2eacff0aaa8ad6"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "5b31ec52534c0536176232bfe118cd14"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "86edc3501f1de3d04f4e5e0f30129dcb"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "fba69b2949e5b48c371f273237e0cb43"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "53b9e1ed8f497640e05a7afbe0aa09bc"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "71c248a134fdf65e8187e62ff894d980"
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

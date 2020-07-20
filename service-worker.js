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
    "revision": "8471518e28b7a36062f67f38d4218037"
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
    "url": "assets/js/17.8f85ab31.js",
    "revision": "4c57e5091ce6fd774a187b0d93a53fad"
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
    "url": "assets/js/22.42f0e5f2.js",
    "revision": "3910729d39c54401cabaef8c0a12ca7e"
  },
  {
    "url": "assets/js/23.8f59e5c8.js",
    "revision": "8dcf32ee750f620e7eee26f426ea3c25"
  },
  {
    "url": "assets/js/24.64a81807.js",
    "revision": "481271af72560e59564046bf49efc1df"
  },
  {
    "url": "assets/js/25.242e02a4.js",
    "revision": "1450d96db1510e8bd90ca226d6a201b0"
  },
  {
    "url": "assets/js/26.124faabc.js",
    "revision": "fcdb6ca3d3e88de3055c73a83fed6567"
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
    "url": "assets/js/app.040f2f88.js",
    "revision": "8ee93e4908774ba0b310fe3fd2acc136"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "e580b3e2df8febd96073d5852cdc8865"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d0d88006670a572b7158c6fe149d3607"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "6eacd33340cd243a572ca81a3afbbf0f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "147ceafc35b5d4edff264e48a71cb8e5"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "23d4da217d44d6f37ef19e27b3df96b4"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "fee292e6cddcf5fe6ef9b64481c97c5c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a9708bb78276d200f967b41b5f007133"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "d4715a69521cdd3f7b5fcb92591b527e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a203a5a039156d144b2413d8943714c6"
  },
  {
    "url": "guide/index.html",
    "revision": "aaa2faea4fda13baf51a93f759206829"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "1d572d9840d663e996d1e0944a2f2042"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "3cddd339f499158d8b0618bf69d08304"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "efa0b84786b612e082c34c551a3134b2"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "e4aa396a72645fce0cd682622cddd5a2"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "eca69bbfc657a8923f9dec5d1e7589b4"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "59f655fbcb98d2a42223715f8a602b2d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "edd51af41390fcb523ce36e15e7b0903"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "ba21ae544cbca2c60a1d9c0c78fcc4b1"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "0ec8a833ace15f7cb47688e520f26a68"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "2c0440e42db1d74cf5e45364fb7eaf8e"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "7ee41e10d5f352069b40e8855d47a579"
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

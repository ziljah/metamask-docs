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
    "revision": "83ea99b8ba31b02f0cfbc723c1623ba7"
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
    "url": "assets/js/17.0bb98986.js",
    "revision": "4243bbe00855e1a8c9ac4a4d154a5f87"
  },
  {
    "url": "assets/js/18.58338228.js",
    "revision": "b76fb86458c90eddc63af172c1f448e0"
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
    "url": "assets/js/25.39460a4b.js",
    "revision": "ce121547a8a5b0df519e2d16f08fb6e0"
  },
  {
    "url": "assets/js/26.3a9e49d8.js",
    "revision": "fdd28fdcf9831348b94d420fd3beeead"
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
    "url": "assets/js/app.fd5ca9ea.js",
    "revision": "c185863778a3299a1384f7d3b8326837"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "545ab409f07cd9e934ae267158df8960"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "1b22dc48a09c8e47e55c50ff461ab437"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "5d4934afdf6e04ba73d3cc0dc16ec1de"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "ff8582bd0adc37fb2e81f39d9c8598b6"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "dc486c541a538d53aa3d072f14d6d732"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "476630ce248f9dc0508a957a02d57e7b"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "4cda288893eafeabaa01863284cb1708"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "7e0b5dac04df0c824b90eadb6617c2a8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b98ad23f66c0bfb393867c1c8cd96780"
  },
  {
    "url": "guide/index.html",
    "revision": "0b74d9f9284ae52b1ff29ddbd21c8c87"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ee992ac6a6b50dd3959d934db8416d09"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "04b433f02e5ec670f113e0f2e4bd6c7b"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "9317e36326b8707442f497204e47bfc1"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "edb1fa17c9a3925f56c7c76140c0511d"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "4c45c4c2e7d4ce79a540379c1d83ba95"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "7afb91586ad0266d02b18991094ce9e7"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "a27789f21537702f7b68bd23aabb4b8e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "bf4846f72c1163ec79696a9bbdf8d56f"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "fdb8bc52accc474ac1fb32061f8abd0a"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7d180cc0c9b93df76c3f2626745441c0"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "038a42870cc040c9582fb13009a61318"
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

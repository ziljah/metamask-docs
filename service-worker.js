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
    "revision": "be1970dd81f4228a3c96303e5fb50d27"
  },
  {
    "url": "assets/css/0.styles.161fe5e4.css",
    "revision": "78e9f6d3a3ada7a24cfa05506026f7ae"
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
    "url": "assets/js/17.15237de2.js",
    "revision": "f35e18f2807c95e57e7209504e1dc6dc"
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
    "url": "assets/js/24.64a81807.js",
    "revision": "481271af72560e59564046bf49efc1df"
  },
  {
    "url": "assets/js/25.242e02a4.js",
    "revision": "1450d96db1510e8bd90ca226d6a201b0"
  },
  {
    "url": "assets/js/26.74d3307a.js",
    "revision": "8288137b1caad7b1a94f790d24a5313f"
  },
  {
    "url": "assets/js/27.ef35ff0a.js",
    "revision": "8e34cd96ec9090518df967e5f0006366"
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
    "url": "assets/js/4.6f2faeff.js",
    "revision": "fce079dbcf6e6018e6aa7444b3935892"
  },
  {
    "url": "assets/js/5.bcdc8312.js",
    "revision": "cc10e684c8222d6675720ddf4266101c"
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
    "url": "assets/js/app.46af4408.js",
    "revision": "35b692135062324eacdb020717c15e65"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "7f017009fff8b07942996c9f1e95a48b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "0609ee9c352981c2ac43cf5aba1d96ef"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "a2a59751d0bedfbc69ed054a42ee14ef"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "7547eddd778a8a899a504d2dbc5d4125"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "183408dbb9a06ebe88bf30d719a8ca39"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "53959cc97e0a19d5c4d230f301eb465f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "efbcebee3919f5bc8dacad27101492d3"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "2ab14052251cb6ef7f2c1b709d6de1be"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4cb430d390285df445da787e227c7690"
  },
  {
    "url": "guide/index.html",
    "revision": "83a123ae6aeca985c4dde0c3049962bd"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d685443bbfb0f65806973cd82ab7d29e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "68464e77b0a871a16f3274c1c01ea652"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "322d16e4c28dd1eb3b72238325db3ea3"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "637263dd0ade98496b13585961f7d3dd"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "64c65cc6cb337733237207132c584187"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "eb6a38ac9150e9be923ca847a2ca6d76"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "3b3aa18fd13525a68c19b4082b0b0bfb"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "1a6a66aa049299417eea002fe14f64ee"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "53c236a968bbda64cb31c4a482717568"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "15fcd0e4e80bbe76ce1281910fe6297a"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "9340b62ada0e76ca7cf97b77df1c56cd"
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

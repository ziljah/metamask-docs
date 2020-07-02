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
    "revision": "9db97103dce89b079b4478d90d2fa3db"
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
    "url": "assets/js/17.622b301e.js",
    "revision": "2673050acc9dc63519f913fca0b35838"
  },
  {
    "url": "assets/js/18.88519165.js",
    "revision": "8dc06e2e0f37c2c551c75b1c85695861"
  },
  {
    "url": "assets/js/19.38845bd7.js",
    "revision": "23db177be026d0e1b72ce8f443d57def"
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
    "url": "assets/js/app.79b362a0.js",
    "revision": "89595945f7d8330e42ea9027a98f8a12"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "f1576bbaf7bccada6ae111f139c93168"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "652c9f235bc194e8f24eb4a3ca7df458"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "5fe9bfe3b307ae5a7e7a6720319cca78"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "cd202b6b425c8fa593484df2e66eb35e"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "3a037623f25132edb794153a833432d7"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "75c62239ce2bfda588640ce9a73aa249"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "d0938595c20e51439a0a8244cb73fe1b"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "61ba740db43087e50e30a68706255d4f"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "021b991163ef2ea517f78deff7e74555"
  },
  {
    "url": "guide/index.html",
    "revision": "2e815808dcd62d42fd991ae58d6cd120"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "5003074a88b1c1d5e09ca84f0e20439f"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "67417e414ff7007500e6fd3becbc8afa"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "8041e02173d5bbb4aa670888e0b30db5"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "c92b6fb91a0064ca3731b5ecef9505e7"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "098ce9eeb2cd60453a3fc3c08df5d295"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "616b52d9753e29712e9425f693d6e100"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7367f5a375ad003720d4cac611065344"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "93dfa68975cc9c95d8f78779f51c2b88"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "27c3467c3b93553d5ba18aef6c3240e5"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7ebef66b43a710234c042e40eb3f58ed"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "1a8e30dcb32767ba555299f1aaada6f4"
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

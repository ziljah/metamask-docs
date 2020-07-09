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
    "revision": "0b2e2059195f101abd8326943ef58ef5"
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
    "url": "assets/js/17.3844de08.js",
    "revision": "69e9f8f5002d668a151b4c2a691099bb"
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
    "url": "assets/js/25.42a69814.js",
    "revision": "2e90710f00386845843990e1ca3380e1"
  },
  {
    "url": "assets/js/26.dd4cb312.js",
    "revision": "6da0069c33690a064e966f6735f0be16"
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
    "url": "assets/js/app.e86f28ec.js",
    "revision": "3fe457af78228755b8792efaab83da19"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "32106b88c8145584e09f50a4ae083fc2"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "f3957c61b78620ab8b355ab284a54f5f"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "7d969b6af93439f6af017830048b5713"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "76c1dbb7387126f3f2a1dad9d7e3db04"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "948c35e183b7c4274c0bb9ba445d8863"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "d610aa4e32c9f45cbe66640f44d74262"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "134b6ee91df9270577012ffba1afe087"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "bde7aaa8ab18c459bac982f8c4cb3259"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "50cb381c5a8157662f8193a7a68b9f5a"
  },
  {
    "url": "guide/index.html",
    "revision": "451cff64267fd585d42900f5639baf2a"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8de3b87f2c39a1e4af61699e06ac1985"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "d2fb0debc2367303622219b19651de82"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "5d4bc56e929a5d72d916f78d7a393310"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "79da7a70ae73763fdfca554239739dac"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "98e2e028cdc4ce1e155a7bfbd4d15ebd"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "71bb746a0666fb7977142ddb776fcbe4"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "97f2c7b2ba8124d0ae4deb537118c601"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "380e383606b188879526ba14b581f25b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "2d95604962c3635372da08b5916c8343"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "2ae95464911aecd4df78c949c1b420ea"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "523f2fc7e0d1f79aec4001992edf7ff5"
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

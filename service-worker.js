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
    "revision": "149bb1a0483018da3684b7d5dea408f3"
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
    "url": "assets/js/10.7656bfc4.js",
    "revision": "1bb0769d955130462a3bc132d003aff7"
  },
  {
    "url": "assets/js/11.d33b2baa.js",
    "revision": "0add16ef222c5062a17492e4f2fdcb45"
  },
  {
    "url": "assets/js/12.f443dc63.js",
    "revision": "f020f4774c5790590af790e02d2dae09"
  },
  {
    "url": "assets/js/13.63d6ef18.js",
    "revision": "0561f7abfd0835acdf0d9c1471464832"
  },
  {
    "url": "assets/js/14.57057ee3.js",
    "revision": "0c4cb08bccc1ac5cd4a4c48c45119ff3"
  },
  {
    "url": "assets/js/15.e4fea7f9.js",
    "revision": "d0f52d8c7cc3ca3af4c9591f332b7959"
  },
  {
    "url": "assets/js/16.5f14bcff.js",
    "revision": "9ad02082225423ff8d05ac155200a902"
  },
  {
    "url": "assets/js/17.f9b7651f.js",
    "revision": "c3e364efd1b4c0e94c8fb1df7847b0f6"
  },
  {
    "url": "assets/js/18.fdb261aa.js",
    "revision": "39af213ff6ebcda2903e9dd0dee6f491"
  },
  {
    "url": "assets/js/19.182fe59c.js",
    "revision": "9827a3c627a9debc5132909d7494e0f9"
  },
  {
    "url": "assets/js/20.6813f397.js",
    "revision": "4fae66aab22a8dee430d00792e26d6a3"
  },
  {
    "url": "assets/js/21.d02291cd.js",
    "revision": "65a3136d4ddd744c7b48e8e0bfc708ca"
  },
  {
    "url": "assets/js/22.7477a7ab.js",
    "revision": "046330ef22b6e65cea0276472ee44eb1"
  },
  {
    "url": "assets/js/23.ea860ecb.js",
    "revision": "10be9c72e97ddf809e5a8d8f2acce21d"
  },
  {
    "url": "assets/js/24.d1a01ceb.js",
    "revision": "71713331d1e3da8df7563093d944b2f5"
  },
  {
    "url": "assets/js/25.1021fc86.js",
    "revision": "a8d24e7d4c9d82c73d7685c8cdb1181b"
  },
  {
    "url": "assets/js/26.227d2417.js",
    "revision": "24cc922373d868ba75e07ee18cf33ed0"
  },
  {
    "url": "assets/js/27.a1100231.js",
    "revision": "c5377dccd0a4e1bfa8cf450ce8e9a471"
  },
  {
    "url": "assets/js/28.11206590.js",
    "revision": "67a26417571a66a7de2eb76c68bbb157"
  },
  {
    "url": "assets/js/29.df39111e.js",
    "revision": "dd3007e28bbd33731616b308a66f2276"
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
    "url": "assets/js/9.64544878.js",
    "revision": "f4663330dc281279475f14d15d41ca1a"
  },
  {
    "url": "assets/js/app.c17dc677.js",
    "revision": "52efe4b00ead428bd5bdc98325f8c180"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "a33fa93388437e8c7a871891beb99585"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "9d5d19d93819f0598e4f526c30e39af9"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "730f6d08eafd01fc53ef1e4a050eba12"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "991824c3da2a59608f2a287b5970eb0d"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "4aa652736ac1c4b65de970524d98cee1"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "0587683c4ac4db001287b6313288a0da"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "2909bea7ce331c7d38568bfd76d413f9"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "bde02c62bb020c0dd2a885ffa1779cf6"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "c3cb92561e768e69ad28f22d876d0bb9"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "addd9cfa6a6c0deb79ccdc2ebde03c5d"
  },
  {
    "url": "guide/index.html",
    "revision": "82a2978a2497486fe8b264a9a7aad02f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "465287aebd9651bf03a58c366dd30146"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "f1f47a8a780dd62a8bd8e7b1639e6a0f"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0defd16104daa2ec9e4c3bdee85bd5b8"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "bd06fad86d82588c5ac3dd18dff65871"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3ec9def1acd7e8a915a811b50f7244ef"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "9120f2c87c8a0d26d2e9a7bb230100e6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "dc6316d33a34cfeb54a3c384d0103680"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "9d5ec19890cfa798d2b6f87edec6d191"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "14cdf51bc1773acbec80b3851a97d474"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "640fd53e729fdc8df8d7b710872e3997"
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

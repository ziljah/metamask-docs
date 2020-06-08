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
    "revision": "dfced28991454b14d897406724b666f6"
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
    "url": "assets/js/10.97502985.js",
    "revision": "b52f2fef445fd72c0b5d6abc7366c51c"
  },
  {
    "url": "assets/js/11.1d334f84.js",
    "revision": "7269f599fcbe8c7c9bec6c68bd9d4f1f"
  },
  {
    "url": "assets/js/12.65f4840f.js",
    "revision": "b07ff6f26f5e42b13eba3660f81c6385"
  },
  {
    "url": "assets/js/13.b3354cdc.js",
    "revision": "28d13d0737fa6b32e9e24784178db47d"
  },
  {
    "url": "assets/js/14.57057ee3.js",
    "revision": "0c4cb08bccc1ac5cd4a4c48c45119ff3"
  },
  {
    "url": "assets/js/15.f3b1089f.js",
    "revision": "2b327298af7a20962be53147f20da896"
  },
  {
    "url": "assets/js/16.5f14bcff.js",
    "revision": "9ad02082225423ff8d05ac155200a902"
  },
  {
    "url": "assets/js/17.d00efd8c.js",
    "revision": "6394d499a684206340924bf54c6cf8ca"
  },
  {
    "url": "assets/js/18.9fd821ab.js",
    "revision": "b3df06da98932fa3f5f2957ab98c49b3"
  },
  {
    "url": "assets/js/19.ae7f155d.js",
    "revision": "9da2f7e26d3ce6dcab5d56f2fa165020"
  },
  {
    "url": "assets/js/20.e6319804.js",
    "revision": "5bd2fe4e0fb351953ed8d8c7ee3f8f11"
  },
  {
    "url": "assets/js/21.c6e357f8.js",
    "revision": "a616fc4bdedc650324e678472120dd6b"
  },
  {
    "url": "assets/js/22.9b502012.js",
    "revision": "4b53bdae092e0bb2a5e524613d3b73e5"
  },
  {
    "url": "assets/js/23.b01422cc.js",
    "revision": "faf8fc363bb1027d4745f9cd7031ba79"
  },
  {
    "url": "assets/js/24.ea8787e8.js",
    "revision": "7edb417fc742a106e6ddf141072d316f"
  },
  {
    "url": "assets/js/25.40ec03ac.js",
    "revision": "ae1bfe9849b89d09d36210c45710078e"
  },
  {
    "url": "assets/js/26.e63bab58.js",
    "revision": "1073e81c567398e6e1bf95abd85824de"
  },
  {
    "url": "assets/js/27.b6686807.js",
    "revision": "72c9882369f2cbd8dd3c520f98e4350e"
  },
  {
    "url": "assets/js/28.006843a0.js",
    "revision": "16995b7e2486ab37fd57377494cc5d33"
  },
  {
    "url": "assets/js/29.6cf1e7c6.js",
    "revision": "222a088e4572c7c45dc951a30a025e31"
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
    "url": "assets/js/app.2f78d413.js",
    "revision": "2304c6894a81f05befb11c800b4870e1"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "7d1e37cb4beb0b92d2fcb5699cc36a8f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "20bb654a29052abdae4bad25fb655eb5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "559319db6827d440369848320e76a1a0"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "f1f92a3efde89895c69c45947b261501"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "e0b6452f281c20508236f9bdfbf3bfbe"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "5c8e7611310988ac8268c5693f75c3ec"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "eb928ee3672f5476082a2e3144d23652"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "fcc87558b923d538c61ec702b35f1646"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "b686affd834d06cf400c0f7fdffc0fe2"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c66ae9e3695ef7c0a3a7ee92eb8ce25f"
  },
  {
    "url": "guide/index.html",
    "revision": "5b905d64c4fcddad25dbc097f742ce60"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "18b363758abdc3e0500537cd02e3139f"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "f09e82584046db4bd48556036b51b7ca"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "945e7324e74c6f00439851d10da6c307"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "50c2c3ae8565b5cf2a758a39b7e68f60"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "de4cb09b8bb0683c680e6cf37c07c8dd"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "60404976df899ed299aa7e83d3376639"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "515e956f8331137e14f411741cffccfd"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a54598adfe603135a8d298d69dddf3a7"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "0d03c951da6a25008cb5e5f221ff1d30"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "c74ab9faf2468d3d1a6493443e0477a4"
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

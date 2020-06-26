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
    "revision": "bda67d078aecc19de6230ac5437fed8d"
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
    "url": "assets/js/10.2b5c3295.js",
    "revision": "667a0a2fa26dda73128c3f8374fe6f93"
  },
  {
    "url": "assets/js/11.b2100a8f.js",
    "revision": "7cda6f84d567c71b8fb5880c84d60cff"
  },
  {
    "url": "assets/js/12.f443dc63.js",
    "revision": "f020f4774c5790590af790e02d2dae09"
  },
  {
    "url": "assets/js/13.a5c46735.js",
    "revision": "8b70040f4648d12eb49a6b36a0d93e3e"
  },
  {
    "url": "assets/js/14.ea64190d.js",
    "revision": "024d2953d20bb63fdb036a7096ebcf19"
  },
  {
    "url": "assets/js/15.36a12231.js",
    "revision": "3e9d65b3aea3c1d60fbf4fff24696f93"
  },
  {
    "url": "assets/js/16.9ebae792.js",
    "revision": "930ed34422fa36216cef38f478469703"
  },
  {
    "url": "assets/js/17.6dea649b.js",
    "revision": "8a9cc1717e8c79d86b458663daed9f1d"
  },
  {
    "url": "assets/js/18.dc1864f9.js",
    "revision": "a0de161ff9f9ef29b1a93daaed6d6088"
  },
  {
    "url": "assets/js/19.f4c26050.js",
    "revision": "48b50a6ab2d439d52add6eea119cc3a1"
  },
  {
    "url": "assets/js/20.3429844e.js",
    "revision": "e3a6170519c385ec3a825d4fb9a47a55"
  },
  {
    "url": "assets/js/21.c1f96197.js",
    "revision": "a6c8e8b1caf93106c8dee0868d4e9e58"
  },
  {
    "url": "assets/js/22.7477a7ab.js",
    "revision": "046330ef22b6e65cea0276472ee44eb1"
  },
  {
    "url": "assets/js/23.54a06158.js",
    "revision": "63d857901835beeff3e5436127e7c802"
  },
  {
    "url": "assets/js/24.41732033.js",
    "revision": "876f207776f1f7d09991d02d753c9f73"
  },
  {
    "url": "assets/js/25.8f882a97.js",
    "revision": "0ad692c55339defdfbec2d80984ec66d"
  },
  {
    "url": "assets/js/26.a1b9aec0.js",
    "revision": "740c664aee3dcc9532993e109b41a97c"
  },
  {
    "url": "assets/js/27.d27a43b8.js",
    "revision": "0190adae226bbdaf0d666a8275794785"
  },
  {
    "url": "assets/js/28.8f839abb.js",
    "revision": "25aa67c8b56ac30e09c873a6d512a2c9"
  },
  {
    "url": "assets/js/29.a24969ca.js",
    "revision": "405c325a9e50d72b09a6aeee2edd41b7"
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
    "url": "assets/js/app.fcb9c637.js",
    "revision": "2a688d29faaf83cef120b03f2207a5f6"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "7e7c018f24e548f9d56cb0b6eb732aa6"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "dde53bad226c6da8103ff5d53fc3f18f"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "3768154070c36cfbefd194052cdfb0d3"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "08b50d4b48014ea9f047130d8dd93de1"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "739d910dc0b68a87a3bb620b9c06a6ae"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "c57d8d60bdc94302e8449e2d003d16bc"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "95be205e0e90a73cb3f88af5137efb38"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "aa6b57ebd4f68a68a950c3da7fd73a42"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "a62257c62f0d10cd0d45124063cfcd4e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8f625384cc8b25b48b8cfa1e5a02ded3"
  },
  {
    "url": "guide/index.html",
    "revision": "b7c984744a64be0eaa5c6ce55985a1bf"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "4dd7df70173c8e7e0542da9c8a2d7fbf"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "023cec508ad49b8a63cd1ecced76d5d4"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "dab122c5dc2b669b76969367c572d9c5"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "ce543ad25146afcc4efdbc4e12c5cd11"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "898a992acebb3c090f11222a1dc56093"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "af60f8ae238cd737a5670ec0e2d22642"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "fc42bc8901de5fbd82e43e1420adc772"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "eaf70208acd50716826fef13722dd757"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "513f91e43ff47ab3a19c7a20be92db39"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "871ba327693c273c3c70d0c798ccbcbc"
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

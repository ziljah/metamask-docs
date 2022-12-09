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
    "revision": "9b059d2af6202b8510d8216d9d3f2e9c"
  },
  {
    "url": "assets/css/0.styles.12c93c8c.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.49523d64.js",
    "revision": "ce7d229c59bacd9416919edbfb905a14"
  },
  {
    "url": "assets/js/11.533fe2a3.js",
    "revision": "c58b6368707b779c8ab776d849725a57"
  },
  {
    "url": "assets/js/12.2fba61b7.js",
    "revision": "d45eb8ed381b0c8955e9166ff8975249"
  },
  {
    "url": "assets/js/13.4af98693.js",
    "revision": "dedb2ea0837cf02ccc3d35e79a964c99"
  },
  {
    "url": "assets/js/14.51dfb6aa.js",
    "revision": "132fa818b53c6b3c4ae99d389292384d"
  },
  {
    "url": "assets/js/15.7bd667ca.js",
    "revision": "a451607350e78e4da52e1f2a710d858c"
  },
  {
    "url": "assets/js/16.77ad9260.js",
    "revision": "8960d575d229a603a5779e21b91d5be4"
  },
  {
    "url": "assets/js/17.90f5d884.js",
    "revision": "32f0e701dda918012509b22ed6cfe4e1"
  },
  {
    "url": "assets/js/18.59bdb821.js",
    "revision": "b603953c889667e6d25a3b732cb8056c"
  },
  {
    "url": "assets/js/19.7b395b59.js",
    "revision": "2a951126b2e68ef00f1a5b6b47241b29"
  },
  {
    "url": "assets/js/20.464020aa.js",
    "revision": "7bb17b170f4ca25d040cbf88deb43bb4"
  },
  {
    "url": "assets/js/21.75bf6c9d.js",
    "revision": "44843b04b76ed1a06c08e65ca5bb8b6b"
  },
  {
    "url": "assets/js/22.307e825c.js",
    "revision": "ccc0d346aadcf518d99972dd75c311ab"
  },
  {
    "url": "assets/js/23.95faae54.js",
    "revision": "3c3d52c3e54459cb670c252f6b73f240"
  },
  {
    "url": "assets/js/24.1acfb38a.js",
    "revision": "e99c4637e9dd3b8f3ee92ca97d7d6de5"
  },
  {
    "url": "assets/js/25.89d81fd4.js",
    "revision": "6e811613991ebf26a973f517fe06f238"
  },
  {
    "url": "assets/js/26.f63ea45c.js",
    "revision": "64afad2f60f3017b528cf3566a15a457"
  },
  {
    "url": "assets/js/27.2b124053.js",
    "revision": "907364433cf39653a19c9899fe31b664"
  },
  {
    "url": "assets/js/28.37330ad5.js",
    "revision": "b96b4f1f8bc9ee6de0e16bb528c0e988"
  },
  {
    "url": "assets/js/29.90b47631.js",
    "revision": "132e93a27ee9072990539cf29d9574c7"
  },
  {
    "url": "assets/js/30.87bc84ac.js",
    "revision": "2afbc7e29f4bf07496e79ef3a01bae74"
  },
  {
    "url": "assets/js/31.6ceef109.js",
    "revision": "00ceb0e2f6509f32195033b24e472571"
  },
  {
    "url": "assets/js/32.5bffb61a.js",
    "revision": "14519553e413fb75afcf50d3e644a25d"
  },
  {
    "url": "assets/js/33.35ec9cad.js",
    "revision": "f492aa08f3143f1b4aeaf193c72f3533"
  },
  {
    "url": "assets/js/34.a5791133.js",
    "revision": "fd7eba7d88c2ec83c6e4310fcb9d3ad0"
  },
  {
    "url": "assets/js/35.fa65f12b.js",
    "revision": "1527c025b1403dc48afa2eeadabcac4f"
  },
  {
    "url": "assets/js/36.735812e0.js",
    "revision": "b6033d94b9327c607675bdd03a9f820c"
  },
  {
    "url": "assets/js/37.d211658e.js",
    "revision": "b6575f3c91536461b62fae4c6d76e4c4"
  },
  {
    "url": "assets/js/38.2d725de2.js",
    "revision": "cc7e4f1bc14a954c5b59438fbc28c99b"
  },
  {
    "url": "assets/js/39.0b34c430.js",
    "revision": "95b7a939977bd449d8079d48a5bfc406"
  },
  {
    "url": "assets/js/4.d23c13a5.js",
    "revision": "3b09c4651dced19023b2bfeef1a30b1e"
  },
  {
    "url": "assets/js/40.20ae22a0.js",
    "revision": "6abf884451b68cfbc169ecb7a7698299"
  },
  {
    "url": "assets/js/5.c4523763.js",
    "revision": "18bcb84db95f3e2569095395620fe690"
  },
  {
    "url": "assets/js/6.0ef10dab.js",
    "revision": "cc684723b5365dce69cb55886aef0150"
  },
  {
    "url": "assets/js/7.7b2afbe6.js",
    "revision": "4be99563deb0110ebead52f71660aaf5"
  },
  {
    "url": "assets/js/8.eec38c46.js",
    "revision": "62ed9bd98801c5093e450373c45576f0"
  },
  {
    "url": "assets/js/9.c0204ff6.js",
    "revision": "3d6d60156d701d70dc7f173ce10a9a73"
  },
  {
    "url": "assets/js/app.3ad21f4e.js",
    "revision": "9184d6b7f044c48923658e013dffd1a2"
  },
  {
    "url": "assets/js/vendors~docsearch.eb9067e8.js",
    "revision": "f5f3a74ff3aa6a503d72919490ac7a67"
  },
  {
    "url": "assets/js/vendors~notification.7822af06.js",
    "revision": "572675a5d71ac99ae57daae40bc30654"
  },
  {
    "url": "faq/index.html",
    "revision": "b6b8768059cdc2bff92a56cf0133ec04"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "6f9a60f9ed5013d2a517b0311a3f9be4"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "1ffab6da3548c102ae555fe100a74ae1"
  },
  {
    "url": "guide/contributors.html",
    "revision": "aa62eb1c07e377f03cc1bd73d015080f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "7240448724ec6aea9b6bd0baade36805"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "68a619fec0b2eb4e783c08f11f993617"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "02dbcb347542f99e29371ecb38366539"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "4ab91773b7dc0807e0b0e2b3d17a7fc8"
  },
  {
    "url": "guide/index.html",
    "revision": "361c2d4be08002ea9dc38909bf4973ea"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "4440a2e6348f500845c5d30b9a5b4128"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "7b44fd3e227bf4b02b0255c2deafe8a0"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "f23cd8af28cd8a4c60eae957ec5ef9dd"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0a4ff28c59a2fdc4bcbd074ac49ca467"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "45ee7fed33120d1b29001b34eadb1a8b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "ece7e146f6ac337b518bd5e5c724eb96"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "e44b66062236994a38d4c8997002532a"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "69b54a3e271af6e64706a3749eb1a9c6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "81d1cac76504b615046976762d8cffc0"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "313e43fd83b51ed3dd77124994835485"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "b7852dda86487dfe1b5e2b02190e5d33"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "4f4ab90d3c48b81ee791d78789e3dd04"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "ea93788e2bd06ecb3f740c21cbe8aa94"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "b0d7b7e5e2fef527ac95d9db37f77e9e"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "eab23b3bd6a3ec9f62200fd374478a78"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "799ff28be936587b25fe21479c6786c4"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "71fadb3ff19649e5ea8d43b6c611278d"
  },
  {
    "url": "guide/snaps.html",
    "revision": "a581616b36a268ba0dded08a349acbf7"
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

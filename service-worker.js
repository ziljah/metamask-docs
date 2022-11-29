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
    "revision": "7c362fe8ac53d9dacaa6797dc2a88938"
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
    "url": "assets/js/12.1127f37f.js",
    "revision": "3f94d5284aef9f0184f370a0f27f8ac8"
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
    "url": "assets/js/35.afad16ee.js",
    "revision": "8908a4a35cc18cf6e5fe01f6dad5195e"
  },
  {
    "url": "assets/js/36.63d86890.js",
    "revision": "94f3f39a1752d386a879f037a03afeeb"
  },
  {
    "url": "assets/js/37.41ee1a32.js",
    "revision": "17e9b0a1122df44421678409282ca86f"
  },
  {
    "url": "assets/js/38.31e7d785.js",
    "revision": "1f55ac1cb87f2dc086656d1550a08908"
  },
  {
    "url": "assets/js/39.ccd9cadb.js",
    "revision": "d2cfed8a1d20ec19d4aea30fe2e545ca"
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
    "url": "assets/js/app.77c0b42a.js",
    "revision": "2fe7eaed3a65e9f60f2df1d9d52e09c4"
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
    "revision": "d46fd7a8f22c2ad994c581f7e2dbe5ff"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d6bdad9d323555d12c852a23ab472342"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "3e222a06b94910e17263e8425eaeebb8"
  },
  {
    "url": "guide/contributors.html",
    "revision": "0d1b35c2fefc6126a69527ce8b829a1e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "0488dac5b924daf86e716260750fe63e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a0d85299df65a0f0006a49d7c6fc504a"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "03aa4bab3c9a1faddc5673662f5f276e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "2fed495d97e2f9ea7ab7f87d4c5232fc"
  },
  {
    "url": "guide/index.html",
    "revision": "e4a6c995f9c399820f01815ae6c6d55d"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "bee28d8b1a3b78ce0a450ed0128b339f"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "2b73e6e670632d313aca7b1aa047e865"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c7933ca0b29cd3f045e3a9356a6b1e0c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "2fa7002d769445ecac20c0789ebb2e54"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "e5d40f7aaad2684048edf89510369f8d"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "4f221794c3d235a3f4e9e56cfe64b17f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "783c19737a9ff685b06cd7f8664e7534"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "dfff785572099428e64744726be743a3"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "1aae6a8fcf66d5a8c6d9bde2fbb5b982"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "714c1dcf689bea0f8f8a5101ff320239"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "5dc75d15395fbc44a3e87891a1d5145c"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "71fa593e503f4f83c74bb4f5dec57a22"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "bcdd4a8cbbfc455349cbe118baa07065"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "1b22eeb99864511c496c13160b8e81c5"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "6f91f8f3b3b95d6b4c05deb8ee1ec5d3"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "b0fc59b8fc1fe15e5683cf0aa5502af2"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "6fc24e8f14721afa9042e8497d04c6bc"
  },
  {
    "url": "guide/snaps.html",
    "revision": "bca1984ed30559491d15e6d5061a55e4"
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

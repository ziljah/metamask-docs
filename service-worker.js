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
    "revision": "001aa2efaf60965d73d24017befd875c"
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
    "url": "assets/js/12.d35d1ebb.js",
    "revision": "dcffbcbff4595a5d0b933886db079065"
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
    "url": "assets/js/21.ea800465.js",
    "revision": "63fd1a1c14dd920249e4b917d92e203c"
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
    "url": "assets/js/39.d09813f7.js",
    "revision": "fb95b931cccdcfc4a9403c0af6f1dff7"
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
    "url": "assets/js/app.2883284a.js",
    "revision": "1f725f840fff0c02ca53f20770f0d97d"
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
    "revision": "668358732a1cec36a30ec628898f7baa"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a6122a43842f8c1c9def6f1ce1dba4e3"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "332a10536010416fa0ad8e6545ae495b"
  },
  {
    "url": "guide/contributors.html",
    "revision": "31ba07e7c6fcc7970a7fbb4d105db1f4"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4524a256578e01f2e7d35a171902d0a7"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "3df29429b280e1f950c67feaf5393e7d"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "870e1ceede7be144617a836cb13f2187"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "77659b62b822781eb9a77a891ac093c2"
  },
  {
    "url": "guide/index.html",
    "revision": "d4940ac96b70141745cb394fc76a967c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "41bcfbdcb8ed28b33a77439baa1cf221"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "f6829d9d39d71a146ae8046688c8c3c0"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "64d72e70eeaa0311036c0d7142394f05"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "86d32f1b2e7d4e25334bbb305018e0fe"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "7a9333fd071a039ed3a4d5498c4669d9"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2156111df771a308c3bccac5a4454bf0"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3ddc892943ef1b161ada9f74e48ebf4f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "cd602d7d91e7170dc6bade16d1c7e917"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "0a149e059282dab99bad1d08c02dd30a"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "71d08bb87d9cc9ae7001ce8bb4bbcef4"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "c85645c8ab79be080590a74f57f95555"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "c8e9e3e246daab50a78b3126a1af0507"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "5be01586ce3bad84f7f6e655e45f5c01"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "f81ff6c42636cc07ab9fe5a9cf3025b0"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "acb8faa5fe8ffdd51cdb6c45cbd42bd0"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "97589f8cb1745f9efeab7e9c18f455a3"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "32432f98f2e44e66e21d8ec27feb1981"
  },
  {
    "url": "guide/snaps.html",
    "revision": "cf09ec3f96b76066dac891da845e3c80"
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

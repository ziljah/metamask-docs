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
    "revision": "00d53a78ce51142a17abd3c6c26361c1"
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
    "url": "assets/js/12.01f5657b.js",
    "revision": "d73a84113ae8616a13f824b2f2314b81"
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
    "url": "assets/js/19.4327dd98.js",
    "revision": "a286fabadcc23ee4c4d9c039062a31e5"
  },
  {
    "url": "assets/js/20.464020aa.js",
    "revision": "7bb17b170f4ca25d040cbf88deb43bb4"
  },
  {
    "url": "assets/js/21.48495faa.js",
    "revision": "47330977afefb973e6f07abed2aa8df7"
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
    "url": "assets/js/33.70e0551d.js",
    "revision": "24ac5e2a09bb3b7503e34866a7ce1baa"
  },
  {
    "url": "assets/js/34.af259b91.js",
    "revision": "62876a5be6938b3aeed38e523be5fd45"
  },
  {
    "url": "assets/js/35.afad16ee.js",
    "revision": "8908a4a35cc18cf6e5fe01f6dad5195e"
  },
  {
    "url": "assets/js/36.75cea88e.js",
    "revision": "5540354e65b7b89b4e333c190a10fa80"
  },
  {
    "url": "assets/js/37.0a0c0af0.js",
    "revision": "259948583e82cc9e42fed62e62164d6b"
  },
  {
    "url": "assets/js/38.9adb487a.js",
    "revision": "d673a1b31e7da81615473e0fe63dd5d8"
  },
  {
    "url": "assets/js/39.58f47d36.js",
    "revision": "05aedb1895f930103263b417569e6f61"
  },
  {
    "url": "assets/js/4.a9946f62.js",
    "revision": "a9748bcf7fb4d54e0639137db65c7ff1"
  },
  {
    "url": "assets/js/5.c4523763.js",
    "revision": "18bcb84db95f3e2569095395620fe690"
  },
  {
    "url": "assets/js/6.5b1dde04.js",
    "revision": "a572e9aa59d33b9c069833bc5877c1f4"
  },
  {
    "url": "assets/js/7.b4403191.js",
    "revision": "f5651ed1fa1c31fd81895bf160d2454a"
  },
  {
    "url": "assets/js/8.eec38c46.js",
    "revision": "62ed9bd98801c5093e450373c45576f0"
  },
  {
    "url": "assets/js/9.b0ddfaaa.js",
    "revision": "4909932770a74d32192287728f6fdb54"
  },
  {
    "url": "assets/js/app.2274f634.js",
    "revision": "217c038991d063be3a1acd555487aeb1"
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
    "revision": "00ff660f67e3be8e8289071e700d9916"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a7374d05d479c9f63f0b72ad0d3bbff5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "1055db10fc02d24dde6ba6ddc23108d0"
  },
  {
    "url": "guide/contributors.html",
    "revision": "e51d5a82247da05703d1683ae4043844"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "182c64e6b8f1df74a6784ccdaccff146"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "47a372925b3ead70eee1c533a69b1734"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "82ab899d944528b20020fec2b515f584"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7b7e37f5abc083a24c38cf5ace529ec7"
  },
  {
    "url": "guide/index.html",
    "revision": "55571100a2a22fad997aa979024efda1"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a0ae0a62b28ac628b9d758288a2e876b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "111eb0917e21163cd0a474a7986ab66b"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "d19220ed73172518e0a3f32de5b2a842"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0077edebc525adeee2d43ec2a0bd3996"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "5b7a4bd591ca411ab3f71c408de9b201"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "ad02f97802735ce00f85b86bc0967213"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "933ecedc7a8ff11227be71be6dd3df79"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "203f43d8dff4fbb3acce2090082aa348"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "b43c7eeb46b335ce7b374454042e45d8"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "32a9436a99a3f0bf1b1280d05ef980e1"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "f713babefbac19c1da14a5c392928ecc"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "863157dd72950e885f84c5ab6b326a6e"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "2bd0aaeb24aacf42a0501eaa6e695d52"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "ed63e7a553ebd268b2bcbfe18ffc01d3"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "e0d69a0d2ebccad12230435a880f14a6"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "9638990420c48c36c8869ad1d48892da"
  },
  {
    "url": "guide/snaps.html",
    "revision": "5d559c3bce5cde2a5bcdb72827992919"
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

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
    "revision": "b07213ea73f06e01c40190cd7b3b8eb8"
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
    "url": "assets/js/23.740a17ff.js",
    "revision": "d68f26ddf3196c42874f39a5fd59668e"
  },
  {
    "url": "assets/js/24.f9204e5f.js",
    "revision": "c800cb03ad05e76c04faf77afb96f970"
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
    "url": "assets/js/app.f3a0af22.js",
    "revision": "3db7e3daae1e0c986195b27b01384688"
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
    "revision": "f21f25efb8526753c00e527e923feb89"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b8afdf8347689ce5e1bfc50da9062f4e"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "2a6b216908516eb7ad1108c5aa31cb67"
  },
  {
    "url": "guide/contributors.html",
    "revision": "5931f407b421b50e859019e41f36c399"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "d8fda0d6957d40935afeb7fd8f3d2695"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "b389dd404bc01a0b0f3d874ce8038d15"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "20508b17d56ab3f51256828df22d6c40"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f762a6322e21c7988688c6b4a0165b53"
  },
  {
    "url": "guide/index.html",
    "revision": "8945e24aaa68a67ab65b3ca44860e053"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "551e1a2a06791a711240485173615d2f"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "5ff5b78033c21d9b7bb9c1e551f8f27c"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "19854d99c23a7254bfac6bdac7cdb387"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "d7d595cc256dc772c61f08974632988b"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "216e2d1e06f3fd6b98a50628f00c266c"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "93ec187760921c833b7be92a67fee304"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "5a092d6a645ac8919b25a5d16b7e0cb7"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "4c4de60456b6419fe42fc7ad02f74b43"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "5efbadd97682c4edecae79cd100fdf98"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "921a6ef4aaaac8663eab111bd596a2b6"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "41b6a0b3beb4582c1efbf1b986b7adc4"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "6e0db14e8fd4321520d51ac7d63976a2"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "bb98ba902cf7c47b163ab14a78c0dddc"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "bfc8a8a1332067b24305b1357d17dae0"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "4e1413f33f3cf40dd11abd1526760134"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "40310169ac564760273eb56f151c082e"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "e94f6a0030dc20538bc6a95019e0c0ec"
  },
  {
    "url": "guide/snaps.html",
    "revision": "c0b98451daf1c4a03d8c9cc06a36cf56"
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

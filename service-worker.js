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
    "revision": "a7f686146ad3a189a7c5aff624e983d1"
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
    "url": "assets/js/12.409e54c6.js",
    "revision": "d71823bb3e8a017e85ff42223bfb58a7"
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
    "url": "assets/js/32.41bf694a.js",
    "revision": "4c5780db28f55c057347782ef47213ac"
  },
  {
    "url": "assets/js/33.5f864cac.js",
    "revision": "abe6057ec5513ad047f814a9c77e7f18"
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
    "url": "assets/js/app.dcd79d32.js",
    "revision": "718ba253f68395181dcce0866d2577c5"
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
    "revision": "0c7cf3b1a92d076d08226a580ca4e935"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b21ff60ec48be91224cfbd30fa062bab"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "66ac8019c7c75b6df829ad3970c6f422"
  },
  {
    "url": "guide/contributors.html",
    "revision": "8094e16a79939479e617cd040f0447ec"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "9b9873908f545390f985816c4ac23c2d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "fd013329f55499ba843fa16fd4e080b6"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "ada76dc9cb98ec12655ed80338d03ec8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "0283abc53cdd9cf47adddd301bfb3bf6"
  },
  {
    "url": "guide/index.html",
    "revision": "e87d03356a949abf1bd6a73709f9a156"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "7b11cb8a273d4c27c6d98fec7afde66c"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "f32094968e1e483dde8e0c9035739d94"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "6e60a105614c37ed54e4ddbc406b754f"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "8d81939faa48a28981ac19e948dc95ba"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "7d6f9f29226a8447cb8a71247378f3ec"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "dfacb428a39663e1ccf45fdb032414b6"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "4fcf1a3750d5b89e2386266225d1267e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "2553446661952a2a985c10d9735a28f9"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "ae4479e4a3f2a7d19b501144df954a42"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "02d70ef6b7181618e67d2ba85c727bd8"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "dba1baf016f1c1f84538ff0f0bd3f031"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "3d8da9ad9e347c6d96d301562274295c"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "c1fe2af34bc50e693692d9b53bd545d4"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "2320ce1e6bf7e6e319d35ffc0deaf296"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "84869d2635cceeeabb78aafc2c52719c"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "84b90c5c9ba38b953d091288b2e02e78"
  },
  {
    "url": "guide/snaps.html",
    "revision": "807787c2e82f40d6f3e8ffc5cef53897"
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

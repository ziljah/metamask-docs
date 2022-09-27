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
    "revision": "b765be5fe0125b1c70bc68149df5eb60"
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
    "url": "assets/js/12.3c21fc4d.js",
    "revision": "d5657ebee0aaf1dc7c6135ed782944fd"
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
    "url": "assets/js/33.ab808661.js",
    "revision": "012ee4dc79d190d9d855a5096e094840"
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
    "url": "assets/js/app.30f27ffe.js",
    "revision": "dbe43b013c773cb4855ace03cf18ff05"
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
    "revision": "c08ef667026f2444ccee5fad230758aa"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a72b7a349236e7b7a8abe922e89c72ca"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "c5291ae3bf85250c7097eb4a59822af6"
  },
  {
    "url": "guide/contributors.html",
    "revision": "349d95ca475fac8bdb3edc35c89152cf"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "bea0329603b0315d3869086a54d01466"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "082f8fd1631a6ec7d8c3da2fb204beee"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "18636309a4e099022fdcf3aad79cde52"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c018d6e71f6f053074952e1ab16f52a7"
  },
  {
    "url": "guide/index.html",
    "revision": "758f147e7540f9de6d94d1746dc478d7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "f3581285f5b34fdb5f11c13d93b0f3f7"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "ba65b33257346e701e75be85f959f77b"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "89d455d22130bde3fefe36f8b7933f15"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "748abe8e753a707b4a4997c5bd345f31"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "084bbb59d45734e8d44e80c063e33836"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "70fcddc2306fa8ebeee6aac20067f455"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "4893e86b7fe0d8d0baf7211e78b1f6f2"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7cfb1f10cf81ff8a9c7ebcf08331bf26"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "84f9da055ac91abbf705cd8922fdb475"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "2347d4c1f66ced24044603cd28ebb436"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "5d44137f65aeef165681fa6724b0aa9b"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "8d6ded3cb36fa072d370a7582fd8ab52"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "ef124dc86e0fc68a539ddf3a600e5584"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "9a0f53ef046e3f5f652bafdeeed60b5d"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "71f79a1e6173e14acfa5cac932bd1fad"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "af6fc731607331848d2745e2d0046e2d"
  },
  {
    "url": "guide/snaps.html",
    "revision": "e27709cf6a144eec6accb0bfb1a8635b"
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

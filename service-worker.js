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
    "revision": "1763169d7a60921824c28a295d766bb8"
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
    "url": "assets/js/34.b074a91f.js",
    "revision": "df9ba2ef3a0d5ee44a774059469428c3"
  },
  {
    "url": "assets/js/35.a11a7d83.js",
    "revision": "ef4190564a2c2146b634ac84e2fda609"
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
    "url": "assets/js/app.b6a6bfe0.js",
    "revision": "7a8b7272ef9d7da76601e66cb462d925"
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
    "revision": "a196d8ad10bfb6528db26bb1d2156658"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "002a38f2c3209f6f3a0308ff843bd275"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "e51b8b1467f0dbd10cd0ca12d456cb68"
  },
  {
    "url": "guide/contributors.html",
    "revision": "57339971867b1b29f4cc7b9724da8bed"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "33df4c2b43b422ce11b81c89975e60e7"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "6e7d519dac78bec1e12879e054c97c5d"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6414e67b5ffe41a397f8df38a8e84704"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6a8a37f4cc8704ff4db39bae8a0e9854"
  },
  {
    "url": "guide/index.html",
    "revision": "b5ed57ef17352084489a43f1dcc0c3ee"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3bc315c12a1a40d8b54c05ab13ccfa2c"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "e4954e5a00d317906c07ccbeb7070a0d"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "4e92209dfa38e6d362fc0ca7eab587fd"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "8562a8b5b61e38d0d4873be2d9ac2749"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "914e90dd80cbec635e82aec1baa7285d"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "dabfca60002487e989b08c873cc47b9e"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "d3d8e90bb87f47d6408411d2e7e7f9e2"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "2428a52df9a2edc271a53e709846efc5"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "296424d186172fe5406c20ae20d9968e"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "0023a7ed046b9e284c75872d5383ab92"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7683ad127a98f4ec33c6352c922cbeb0"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "49c929e23ecf036d311fca050785f0de"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "89ae0cdca98b923b39697a587f05e1b4"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "5f0eadbe6f372e485374c2f9831a0796"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "ce48b58ef7ab5a7819c1a6eaa3ac11a4"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "1b97201d2d306c5b9c32a9db913bc890"
  },
  {
    "url": "guide/snaps.html",
    "revision": "a412a6894272242350d1a574c23f9f41"
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

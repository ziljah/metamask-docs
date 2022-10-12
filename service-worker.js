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
    "revision": "e7138b566970c20280de8d6390f67988"
  },
  {
    "url": "assets/css/0.styles.1dc86ded.css",
    "revision": "f3a4ddc7c9ff72e8a778ed719aefcc31"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4d72a3dd.js",
    "revision": "78ec35755d0787aef9ab9d8be5fb933e"
  },
  {
    "url": "assets/js/11.533fe2a3.js",
    "revision": "c58b6368707b779c8ab776d849725a57"
  },
  {
    "url": "assets/js/12.a80ba36b.js",
    "revision": "279896581a27c7e2d7db5e79eef9c2ab"
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
    "url": "assets/js/15.1f7a591c.js",
    "revision": "ca30763233832ecbaaf753fe14e62e9b"
  },
  {
    "url": "assets/js/16.cdf891a8.js",
    "revision": "4ad96346220e0a689b58a35b1caa19aa"
  },
  {
    "url": "assets/js/17.7ed08fb0.js",
    "revision": "3b08b7374168c3f1ad7da34fba77fa7e"
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
    "url": "assets/js/30.457ffc5c.js",
    "revision": "08570bd1668ce9e9997f3a932f7f71f2"
  },
  {
    "url": "assets/js/31.01a58bd3.js",
    "revision": "647b70e9bfbb5c2b5a295fae724b7bfb"
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
    "url": "assets/js/36.75cea88e.js",
    "revision": "5540354e65b7b89b4e333c190a10fa80"
  },
  {
    "url": "assets/js/37.0a0c0af0.js",
    "revision": "259948583e82cc9e42fed62e62164d6b"
  },
  {
    "url": "assets/js/38.dd0e5993.js",
    "revision": "d8deb5ea2e5a8c51e44cd2ea7092f3d4"
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
    "url": "assets/js/9.f58df97b.js",
    "revision": "74743ed70b064782fe8f8c9ca23d9908"
  },
  {
    "url": "assets/js/app.6e0d7476.js",
    "revision": "2831630b68f79ba3b0fc90a7eef79dff"
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
    "revision": "fe09c0639e36e1bcfba32e785f288f55"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "a86c0d6329899494e10b338a4f5236e6"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "1267e2f91ea300d327fb6b1ffa5574f9"
  },
  {
    "url": "guide/contributors.html",
    "revision": "b6190d42c0e963d30a960c7ea9314d64"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "f9522a41ee637a4db384b391856da99e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "9dd86b0d19c015f8155cfdb52b2d95c3"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "462ff3b18f9dc7f1a814dd446fc2c939"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "cd4fe3c43f51b49bdeec83284c701af2"
  },
  {
    "url": "guide/index.html",
    "revision": "b0f46229b97e872e1f591c0c206d9938"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3859db9cc24a1255c8427f5d0939699a"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "f4385a2d4b7b237cb0d79885e6542435"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c0358341eba9ec8f26bd07e716dda562"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "a85a083a9845d28e9bb7c91cf3a71af8"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "739fbac565e1bd2d6de5d8c2ad54fc5c"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "92c3080818013c2c5847efe92552c59f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "421bdd00db45238775a73f99d12d2168"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "c27119a651de823ecadb65ec90980567"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "f39c27c095a44e503ddb70006c12d88b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "b41ccabcc89a72e99e95ea9b67eeabb8"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "e8acdab10e9ccd452097517feac0846f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "51e2c6eba16b5d230518b36efdc7faab"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "292f77131174c964b0c8a7c868f39266"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "99e510f418cd43cc749f50e28a17b0d8"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "79fb24e29e25205fc37a2ae3cf81a973"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "9cd6dace0b281d76a01cacce6fb7914f"
  },
  {
    "url": "guide/snaps.html",
    "revision": "3ec5ac8f73fd684ef50333b4b297aab6"
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

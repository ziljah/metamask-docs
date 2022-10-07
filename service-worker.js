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
    "revision": "ff61895db6886340c9e2ef776927df5b"
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
    "url": "assets/js/18.d410a9d9.js",
    "revision": "3ddbf755304c6a48d2c4907c23a5edf1"
  },
  {
    "url": "assets/js/19.8ff0598f.js",
    "revision": "62acf5b148db4d63e72c3e857b1e3ec8"
  },
  {
    "url": "assets/js/20.ec6f01ff.js",
    "revision": "ad8285650d16fc2023297fd6ab979e51"
  },
  {
    "url": "assets/js/21.310ee361.js",
    "revision": "59d80da6f1ec60fad431dbd19a8c04cd"
  },
  {
    "url": "assets/js/22.20e9bf8a.js",
    "revision": "df87df33a090579ff7013eca4142aced"
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
    "url": "assets/js/29.fb162c18.js",
    "revision": "b83c1c0efd3b3943b3781948701c8f65"
  },
  {
    "url": "assets/js/30.8968c524.js",
    "revision": "6e35c1d9c98d34b96b58488d6f2ef49b"
  },
  {
    "url": "assets/js/31.6ceef109.js",
    "revision": "00ceb0e2f6509f32195033b24e472571"
  },
  {
    "url": "assets/js/32.9ec9d87b.js",
    "revision": "3ca01f9147eea12cf70c6b3e7e15aa5e"
  },
  {
    "url": "assets/js/33.5f864cac.js",
    "revision": "abe6057ec5513ad047f814a9c77e7f18"
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
    "url": "assets/js/38.2d97effb.js",
    "revision": "b4c4cb8c451f9ac83150861905c5cac1"
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
    "url": "assets/js/app.637f7985.js",
    "revision": "f82c8c5379da09a0261e3e9285f2ca39"
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
    "revision": "3da80d6bb56ae6f33739ae860a8e798b"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "41b5e139956b30e634d394fe3015a15c"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ac71530a6195291c027ab50ada983b96"
  },
  {
    "url": "guide/contributors.html",
    "revision": "f8d9a5c57302f6aca0ab3dda3e157ab1"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "60cc8706907377a57f7399dce7e80ccf"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "2df364d276a834498d10b2d0ebd81edc"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "8fec9aae811647cfe60f9804b3681539"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a9c8cc76d5a0bb623c33cd3e7fb7e91b"
  },
  {
    "url": "guide/index.html",
    "revision": "b01b18df525d7952a4d6426917904e24"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b2d95513a258d30903ff6a85e6bc1036"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "557a55d4d1f0996e4b2f0a4a2e8a8b06"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "0ce10e3509512dd2d850b7f052a91216"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "454c5d01a58248390f2cb1147aa7da24"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "cab985c37b9404bbaefe8329c7be7832"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "bbe9447f3da5edfb08314ab8a82abafb"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "6bce5edaf638bfbab05e8d58be27a358"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "a0233ece32092cd53d84dbda6a1fccaa"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "c347c848c43a14c54cbbaf1f2a5aa42b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "64eceecadcc950a71d4a76bc5874a922"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "1e6e8843910a26e0764dcc8e14063068"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "d671d5d1ecec354e2442ea35c5b340d2"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "a8315021766c43788c99848f750d3085"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "eb57f4df94ce9fc85945a41d2b12fb41"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "a271d7dc25eea14dcf17975de3cc070a"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "78d796de592f8baf4312c71e8ac8ad89"
  },
  {
    "url": "guide/snaps.html",
    "revision": "37461daf7b4e7cfb77f574f710b774d5"
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

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
    "revision": "9cee4f1aefc0d92789049523af7423fa"
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
    "url": "assets/js/32.9ec9d87b.js",
    "revision": "3ca01f9147eea12cf70c6b3e7e15aa5e"
  },
  {
    "url": "assets/js/33.40bf26e1.js",
    "revision": "6e9203df76b43619a5bb942b04f4046f"
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
    "url": "assets/js/9.cf1856f2.js",
    "revision": "f1e16d79c81b77e975b12791abb85d64"
  },
  {
    "url": "assets/js/app.e94bfad4.js",
    "revision": "97f7f15dc89c3ed0f4339e7c956178fc"
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
    "revision": "660c5e8907767aad068b736378e8b6e6"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "0373a08140e3351edc94b3867223e1ed"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "40d834957d75e0a1ea63f802568a3493"
  },
  {
    "url": "guide/contributors.html",
    "revision": "99c03bcac54629b3f7bcbf666fa170d9"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4d956137799065b2e8d30fb63815d642"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "40dcad07f0fce2bd808f6501039c82d8"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "c3a6b6b899e2ce790c0f62a1f4b2b03e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f53fb10a8a62f52b57cd65f9cb877c0f"
  },
  {
    "url": "guide/index.html",
    "revision": "2c66fc2ea79e6392769f5ac30692d092"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "5e99cd85a2ed87a26aaeced1da1d7554"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "66fec315a55fc90f808953ea04d9a948"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "366f727fe89da1cb75f8ea68bf52463a"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "cc0e3b14b37f567e05abb54a3f19682d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "d74dc444a8bc8381407b89209d171efc"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "f1827c386b36d46410c47dd1cf193600"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "de9ce294e293c1a5cc82f731ae7004a9"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "b29ddb6faf7e979c515eb7a27a36bad2"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "6a378f8fe01f934ad534dc855ff1eafa"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "941cf9bf396857f135a62623b6833b4a"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "35308a5ac927b85b8d8c84dc1502e283"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "eea1f220ca7f71e547bd894e2927b5f7"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "deb01328207382755cfabd6136a49513"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "c811943eb426c5119e6d916f2706502e"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "c531726c18586dd7c86f75e1994bf094"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "8ac547a7ac8769363cf262d518b8dfe9"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "ffd8ffcbf41dd91d94c9963dfac7497d"
  },
  {
    "url": "guide/snaps.html",
    "revision": "08819c1624fbed924c68c8343c5c58b1"
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

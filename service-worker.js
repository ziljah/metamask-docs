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
    "revision": "123de6617f9894eb73caf5a8f6062a27"
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
    "url": "assets/js/22.5224bacb.js",
    "revision": "8a05d4a04c8f7d75b167daf584dc8c0c"
  },
  {
    "url": "assets/js/23.db37ec51.js",
    "revision": "38ce821d925d75738779e4df4f8c8152"
  },
  {
    "url": "assets/js/24.e29dadfd.js",
    "revision": "83d44d050c175904b6896acbec38bd11"
  },
  {
    "url": "assets/js/25.87fe813d.js",
    "revision": "dc8c57149ffe931430b983bb1a150342"
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
    "url": "assets/js/31.74e728f7.js",
    "revision": "43971ed5e4b8821736b748d09955e2fa"
  },
  {
    "url": "assets/js/32.09ed5138.js",
    "revision": "e75eba0fa01f4dc597e70954133bf8b6"
  },
  {
    "url": "assets/js/33.4db776fa.js",
    "revision": "8a91ed81ddedbbdca4070b205b01cdf0"
  },
  {
    "url": "assets/js/34.af259b91.js",
    "revision": "62876a5be6938b3aeed38e523be5fd45"
  },
  {
    "url": "assets/js/35.42a96cc1.js",
    "revision": "361d5d94a43b6bcc95a8b771e3402b83"
  },
  {
    "url": "assets/js/36.daa9ed5d.js",
    "revision": "fbfa084c2a87d2df348b03381741b5db"
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
    "url": "assets/js/39.bfaf9c44.js",
    "revision": "03caa5baa6e4bb60394cf4ba40843a1f"
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
    "url": "assets/js/app.54b7bd77.js",
    "revision": "bf8486f202772d5d0f9ec442f5913815"
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
    "revision": "35c7062881388694904f6f102ef6cdc7"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "de9e6629bcf955de2171eaac75e6f941"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "c240f93741adbe0d65d4861e86ce0baa"
  },
  {
    "url": "guide/contributors.html",
    "revision": "7be1272213d615daf5dd424e4f70c1a9"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "8845d48f9cbf09a0fe92e9badca53488"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "b73e95a43e39f8f30a0c05811fc3f404"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b0a5066e4465d4db65cae06d3ab305b4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6b61fdf7f2855a2ba5efaeddc1822681"
  },
  {
    "url": "guide/index.html",
    "revision": "2be451ec3cf2dc99a38f1226fb13215c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "04612fa2bf2eb48dce5b6d29ca9c7b3b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "cfc80e7913d44d0de26221162f22da12"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "b8bebdfb06e3bec2555f7fe4aac851e7"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "ae423c922de4a718ce66734e3769f4eb"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "479998e1307c08b1f682c8e70fff0707"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "74f026c926194815196c879aedf80546"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ac170714c7433476d227197910ca3fa4"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "980f13de39e5eddcd510681d2ff6664b"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "430f5dfbd600c5342d7e6c030a77c251"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "b2e51abe51489ac473e091598861b23f"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "04c77a03f47a4d11afce768b6078b041"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5723db7292a19ea405795b85178842b3"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "095cfb179dd0d82417936098b1b7e4c6"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "b8cd274c74db78b0ab9271e1273ddc89"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "02ac4e5f45f0207f458a5b309c281293"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "389de19c9b34cae3767fad04f4432299"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "5ab69eb7cb0e6af33e679ccab7ad817c"
  },
  {
    "url": "guide/snaps.html",
    "revision": "e712483c4df31914123b51a0c41c7763"
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

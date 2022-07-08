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
    "revision": "d2d644dfd002cfb18df339fb2d6e0762"
  },
  {
    "url": "assets/css/0.styles.d79a1fb0.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9885c248.js",
    "revision": "ad08c4f500a167770eb3fb3958011674"
  },
  {
    "url": "assets/js/11.2de1d8f2.js",
    "revision": "30dfba51ec06492cd3dc8c1ba6414d1d"
  },
  {
    "url": "assets/js/12.8c4c0727.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.7348b7e7.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.4c0bd9f7.js",
    "revision": "c1a65b427dec1fb8071cf201528d0715"
  },
  {
    "url": "assets/js/15.5d58bde3.js",
    "revision": "7e6a50ddf76fbcdb74501ca84d3959bc"
  },
  {
    "url": "assets/js/16.ef574c2c.js",
    "revision": "06f0275bc382aa8d929d7b2fadde9ede"
  },
  {
    "url": "assets/js/17.2c225c32.js",
    "revision": "a6ee0b280f24c70dd249c87330e320aa"
  },
  {
    "url": "assets/js/18.10288e16.js",
    "revision": "6f1f7b90f44157da3dfc51296427dcd7"
  },
  {
    "url": "assets/js/19.14fabb39.js",
    "revision": "af214bf9e936a73239f7e347fe0680a1"
  },
  {
    "url": "assets/js/20.99d7cc90.js",
    "revision": "6046bb305a7ede1a86ed663e1abadd94"
  },
  {
    "url": "assets/js/21.7bc4627c.js",
    "revision": "3f07883fb3fbfbf5fc340b6abf9eba43"
  },
  {
    "url": "assets/js/22.66905b54.js",
    "revision": "84bba4cb9ec83eb6a2a4bbedf8d9e316"
  },
  {
    "url": "assets/js/23.1c341684.js",
    "revision": "ad147f22e00ea54b78d23b86506a4852"
  },
  {
    "url": "assets/js/24.96057b4a.js",
    "revision": "4024d566eddeb4bb079056a5f5c352ab"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.f8f75767.js",
    "revision": "8bbeb7ca2c6e42ea07d339def5b99ced"
  },
  {
    "url": "assets/js/27.2b718761.js",
    "revision": "1a94878c94e384aeeeb35a34197aabd6"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.52918c6b.js",
    "revision": "64c6cacd5956da1dffbe0e3242240652"
  },
  {
    "url": "assets/js/30.d94b0018.js",
    "revision": "29f7cc5892d2aaaeeda90f8ab73f4eba"
  },
  {
    "url": "assets/js/31.701a4fa0.js",
    "revision": "8264cf96a30434eb897157a6239cbf91"
  },
  {
    "url": "assets/js/32.09d612a5.js",
    "revision": "50855a1b32e00ee936578ba3996b83eb"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.41735fb5.js",
    "revision": "b328239eab7d73cf2b60abefc2108d92"
  },
  {
    "url": "assets/js/35.6b445c65.js",
    "revision": "8b5b75da972f9b16d94bd5dad33a8894"
  },
  {
    "url": "assets/js/36.a533f422.js",
    "revision": "d6870392806b50ab105f8fa97b8ea3a2"
  },
  {
    "url": "assets/js/37.65a76f70.js",
    "revision": "12253d6d01670f01d3ac00e4b4cd2b2e"
  },
  {
    "url": "assets/js/38.1f5584be.js",
    "revision": "bce7e451274ad207e47a0aa037668cf7"
  },
  {
    "url": "assets/js/39.ebd1c546.js",
    "revision": "75bcebabd87d16c7a2f53292ef3c49bb"
  },
  {
    "url": "assets/js/4.baa1ba71.js",
    "revision": "95efbe7ebc3321184214cb45cd3eca3b"
  },
  {
    "url": "assets/js/5.d309383e.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.155302f2.js",
    "revision": "522d59cf549844ea05278011e181899d"
  },
  {
    "url": "assets/js/7.78832be4.js",
    "revision": "9be91a163d672687fe542aa288b4d22e"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.026bbad3.js",
    "revision": "379b1c03990d9982f8d38722a21dd2b5"
  },
  {
    "url": "assets/js/app.dca4db38.js",
    "revision": "f81b3dc50548b88e33cd4f72ac419f18"
  },
  {
    "url": "assets/js/vendors~docsearch.3591cf1d.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "assets/js/vendors~notification.8ec48a6d.js",
    "revision": "8c5292ddd31a027ce1a72eef945787f5"
  },
  {
    "url": "faq/index.html",
    "revision": "5d5e6bb9e2575a0351eb9e574cc0fa70"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "ca59fb5ac8d902e1d4222c8ac9c7052a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "9ba0a1f23963d3b378a5886c775cea23"
  },
  {
    "url": "guide/contributors.html",
    "revision": "4612dac5c506d26fa3d1291b8588363b"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "9506c69dd160ce5953450ef4346656ea"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "235e635f9833ef9892949647b1b830be"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "50305b22fbac7f18c4b4d990b4adb938"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8aaa832317216f544bdb68008f6b8844"
  },
  {
    "url": "guide/index.html",
    "revision": "46dc25470746ebb54d0e709df4b5475f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "fb41534041454195122e7163eaec4d31"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "9b428061ab26da7885521204117b4185"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "eccf94ee62a3de81c699915a00f13343"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "e417bf84f52072a6d4b6395ef5ee3558"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "9b26b10e35368800f18fe66a717797a9"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "51f5dc0a32a9470ba6976b9f18b40ffe"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "5d541567d806c1de938ae87e4cb447f2"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "e756198a7b81b5f16017f226e6541934"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "8cba364ded98b8a97fc981d6911e2c02"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "3cbdf81d0fd99c7a77e387713abea21c"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "3a25f86e56212c10f6a08f503e085fa6"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "b29429683ba7a4301c678ac3ea5e589d"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "0180c0120d49368de26fe96a40a5a59c"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "b0daf4db05d6b135b36c24e458416ea8"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "c2d785a5a6096a4b67212a81e4b6756e"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "d9221a7a2ac5f2001eddfc8b41bb1d90"
  },
  {
    "url": "guide/snaps.html",
    "revision": "fd98f9fb183db32b2f08af91c2c97638"
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

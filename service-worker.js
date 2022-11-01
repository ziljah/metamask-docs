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
    "revision": "c6c7dc0863355e76b26c025dffbe75a6"
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
    "url": "assets/js/18.d410a9d9.js",
    "revision": "3ddbf755304c6a48d2c4907c23a5edf1"
  },
  {
    "url": "assets/js/19.7c891c2b.js",
    "revision": "19a85c2bdc2fcb3c64a636867b402c38"
  },
  {
    "url": "assets/js/20.255d6f98.js",
    "revision": "bd053ddbec48a95985825f86fa0aaeb9"
  },
  {
    "url": "assets/js/21.03798851.js",
    "revision": "7d0748d2be83935a55032576f465e050"
  },
  {
    "url": "assets/js/22.79af835c.js",
    "revision": "1c9ed09498e23aa0f528a740bd155369"
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
    "url": "assets/js/36.63d86890.js",
    "revision": "94f3f39a1752d386a879f037a03afeeb"
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
    "url": "assets/js/39.3972fc02.js",
    "revision": "c24a6d589fe31a6b8d9e645356d43e0b"
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
    "url": "assets/js/app.20fc6f78.js",
    "revision": "52963d1b05fb163445ef98f1b347ffd6"
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
    "revision": "f2fcb4275bfb48c11922a66f09fd37c4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "0c7b3e71fe295e55d1217a5498e4e5b5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "c3e0b525232d17b377f849a238c458a3"
  },
  {
    "url": "guide/contributors.html",
    "revision": "db113d3770f441445c5ccc651db7c805"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "5a01893b938c9c407fe48f9558c9f955"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "1d79437f35b96fdcca966b1b431ead3d"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "52a392e8da8c20c7d0f819c54fb357f5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "536b677e3b6f434c012af3ba5cfdac3f"
  },
  {
    "url": "guide/index.html",
    "revision": "6a451566f9d5449943548349a16adb28"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e9644143f2653a3be43e47a8f735310b"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "8d416b2bfc97e99d443438243ad4ea7a"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "cfb9b6cde31397b7199e4ec89fd3a9f6"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "d92e25c7143410ccd0d28fde1a97ae9f"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "605bfa95be2e4215f37e9eb450922ad9"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "acddf7104540e3d8a657a44466036cb2"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "146fe5e32b5f010f290f2b9c1462b872"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "cf508095d949a663a67c07692ac467c8"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "170aefc82d0e305e75e0e49aafbb5346"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "23ab84d314e503533e350efec76b7fed"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "6eadf559616e0a65ad255b9fa16d9573"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "cb2e4d50cfdefeec9e41d39ec36499b3"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "6c8b51035b470275826a5fee48df3171"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "5c54b7a2a89f241bfb137646134505bd"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "461fe04d8b97e8fbbd219f8571b568fe"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "1a3b705e4cf8f55a1a7e7cc092d610c9"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "656486834e66d2d4392cf335c6b1d1ea"
  },
  {
    "url": "guide/snaps.html",
    "revision": "b1671fee0f8441770c6ac84496d3e90c"
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

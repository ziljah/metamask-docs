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
    "revision": "0b90f16a0ab3b1724db6220d3376aaa4"
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
    "url": "assets/js/12.1127f37f.js",
    "revision": "3f94d5284aef9f0184f370a0f27f8ac8"
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
    "url": "assets/js/19.1755fad8.js",
    "revision": "968162d212fbe9ffafb363aaeea20409"
  },
  {
    "url": "assets/js/20.dfa81144.js",
    "revision": "1622ba988f2ecb7307ec78285ae9b060"
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
    "url": "assets/js/23.dbd523a7.js",
    "revision": "0d060e6f68acc0c5a06699a0365d4ce2"
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
    "url": "assets/js/37.dea8f5df.js",
    "revision": "ecdd2dea95d0a9311ca99b1bf14d8dc7"
  },
  {
    "url": "assets/js/38.031949c0.js",
    "revision": "292f5f9bf65e32b745b58f70fdde6918"
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
    "url": "assets/js/9.cf1856f2.js",
    "revision": "f1e16d79c81b77e975b12791abb85d64"
  },
  {
    "url": "assets/js/app.9a44c461.js",
    "revision": "3194edd8ab0716fa7d80af4e7d91bcd3"
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
    "revision": "c600554dd07b15f20d3d11cae632e7f6"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "fa8bc6919c1a09cddc2b9c08f55146a9"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "156ed8dc9f386716fc0bcbc023831fab"
  },
  {
    "url": "guide/contributors.html",
    "revision": "a9a462fe91d14f7866b277885491e599"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "e670baf62f5a92757f4c5ea735efc4e8"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "9697d8a508b1f04e0ed21696c5d9e5be"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "a2cb6e1124c5381b60186354c423de96"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "240b4885c9e8c78e8dce3e6d03008a11"
  },
  {
    "url": "guide/index.html",
    "revision": "c9d439876f97c244be07515028640d65"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "0e0a3ab82295b34b18149f59a2ff9a20"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "8d780821d3af0e2b98f5243a1daabdc0"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "0d8b9dae82f5aeaed80cf949c79f7270"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "fecbc215d5577a8e6f992940cd4ad8a1"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "950dea3be27dd7afd33551162a9a8c2c"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "81ebce8dc305c583a5faf65b4aa38728"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "416d4702e3ca7f2710b2c7b47a531afe"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "c142cd6948bb8185288285921ed5c4c1"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "7b4d6ff4f8554eb6b4376299a5ed1744"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "c7c8e7f306a2b5b37161e0b7319b7e7a"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7f8d0c922b941462d4d0ff9944f2880d"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "46a22465405bbe775ab01035540236b6"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "b999172668cf6205d6e231717292734b"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "6c04d06afcdda136964366ab5e92d705"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "7fdf6a5ee6b4e52ceec4c3eafe550768"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "5db3c8195294ca0dfe52fa9c9ead4afa"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "808cc488e0667e0f4f3e23a7e10e7c77"
  },
  {
    "url": "guide/snaps.html",
    "revision": "939deb0e6f563b5d7be79e4969acb265"
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

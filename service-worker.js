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
    "revision": "3d3f054f9c86d7b4da4cca2a376ffaad"
  },
  {
    "url": "assets/css/0.styles.b95f70f4.css",
    "revision": "9c1ba210052693ad3ae1d14466944cef"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.5b8c2398.js",
    "revision": "4ddea30d059d82fc7070cd30d9e43054"
  },
  {
    "url": "assets/js/11.fb97087c.js",
    "revision": "ad235f3c306d9a8326a4228e186c3113"
  },
  {
    "url": "assets/js/12.00730e4f.js",
    "revision": "931f2de0fe25a2fc11ea8500193abafa"
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
    "url": "assets/js/17.9f4102b3.js",
    "revision": "ab5802c321606f0eb24429bf1c5ef4ce"
  },
  {
    "url": "assets/js/18.b594a6b2.js",
    "revision": "e5b7d833e6675c8268b68c9515be61ea"
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
    "url": "assets/js/24.021eca1b.js",
    "revision": "6e4adf7f454b51cd8ddecc8fa08f76af"
  },
  {
    "url": "assets/js/25.87fe813d.js",
    "revision": "dc8c57149ffe931430b983bb1a150342"
  },
  {
    "url": "assets/js/26.2ab208a0.js",
    "revision": "a0758c035204fa43f3180fe52aababb5"
  },
  {
    "url": "assets/js/27.f9b6c104.js",
    "revision": "894dc7d534ea19e8c1d1b925f2d0eb5b"
  },
  {
    "url": "assets/js/28.84d6415e.js",
    "revision": "083719da789333acf0827c609e37844b"
  },
  {
    "url": "assets/js/29.90b47631.js",
    "revision": "132e93a27ee9072990539cf29d9574c7"
  },
  {
    "url": "assets/js/30.f01b257f.js",
    "revision": "2503eebe5645f923c140ac422b879b99"
  },
  {
    "url": "assets/js/31.01a58bd3.js",
    "revision": "647b70e9bfbb5c2b5a295fae724b7bfb"
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
    "url": "assets/js/35.afad16ee.js",
    "revision": "8908a4a35cc18cf6e5fe01f6dad5195e"
  },
  {
    "url": "assets/js/36.bd736b09.js",
    "revision": "7075b07dc685e3869e722700c39dc167"
  },
  {
    "url": "assets/js/37.a9590e57.js",
    "revision": "7dbad069b4b1d3bd6fa661b704bf43ca"
  },
  {
    "url": "assets/js/38.031949c0.js",
    "revision": "292f5f9bf65e32b745b58f70fdde6918"
  },
  {
    "url": "assets/js/39.fb273010.js",
    "revision": "62ba2602ef24ae40a3570d74728d5a7c"
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
    "url": "assets/js/app.a1e5827e.js",
    "revision": "11403b7f8812dc6de40d8e4692003787"
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
    "revision": "476a7a79f2a92ce4c27cd561c4240cfe"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "50faa8e31dc04b6d6d2287f0fb536182"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ec14c7a760e241ebb4f86f78b947a367"
  },
  {
    "url": "guide/contributors.html",
    "revision": "03e22eb13e0dbe23edf4c4514f914e57"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "6337cf9dbb0743e9dbcf894a8cc4e3a0"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "f7610900d228c81344fc7d0b74cf683f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "530c48f341f342bd77b3d2b71eb17b92"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c37df815c6690bc2a3d565dce0c73cf1"
  },
  {
    "url": "guide/index.html",
    "revision": "ff8c0b177fc002f5c707bbe93ebfb68c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "9545140be8dfbd30691043b38dfb11bd"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "2fd0091b524c9d7f06e82bfbdbddbe03"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c9b7365f2172246f7d05c6c1403d3f8b"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "67be149b0ca1a5023486792fd1a281c0"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "2d4e3a0a341cb025f857faca09d9d441"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "b83156c593ddba90674e3a9fb7804b25"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f1aed8de0fa24a23e864fb1a996b1de1"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "1449acdc75a0f98b54c883f3fac9fdb9"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "4f9b62b2b6e0f898b75b0ad28fa4dad6"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a279e5ab41f18d5f958b3931d5c1ade1"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "261fefd8e4627113e43c081faf05fcfa"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "919ee7eb0cca0e0d04111d42e78db27a"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "93e34f295f2612341b4f9da82872f99e"
  },
  {
    "url": "guide/snaps-exports.html",
    "revision": "60e253c08fa25d6a48b71f17fee09a9a"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "31ae477f184f1900da90bf0c29e64034"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "6c07574dac77bb59a9552d00641f0700"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "2209f48c9e65b0fb73c537c1d63f7dc7"
  },
  {
    "url": "guide/snaps.html",
    "revision": "12cbb945fe08330c34e1f410502ee66d"
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

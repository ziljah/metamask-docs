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
    "revision": "dc6833cdb7c7be9d91e9b1ef66cffc3c"
  },
  {
    "url": "assets/css/0.styles.61a9f1de.css",
    "revision": "127d866d457004deb543e4e646fd1648"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.47314843.js",
    "revision": "2a1248147bca21b1d318e660f29f50af"
  },
  {
    "url": "assets/js/11.d1137ec7.js",
    "revision": "8995bb9edc31860391bc3727c487d13e"
  },
  {
    "url": "assets/js/12.ae2008df.js",
    "revision": "9704f1a2fd0ee0b3be1d297a3b95410a"
  },
  {
    "url": "assets/js/13.71c35727.js",
    "revision": "d44cf15daef5807e8b685591b0f3963f"
  },
  {
    "url": "assets/js/14.5cd36ef1.js",
    "revision": "331587b73ee09c2f932266b3cbefc564"
  },
  {
    "url": "assets/js/15.5501e753.js",
    "revision": "80a41c4c58198c4193417378a6cd1be9"
  },
  {
    "url": "assets/js/16.51570fb4.js",
    "revision": "8366206604a8e81ac546d21d0b76fe0d"
  },
  {
    "url": "assets/js/17.1ace2421.js",
    "revision": "5bfd26982fe39482bebabe1a742e1c88"
  },
  {
    "url": "assets/js/18.2ce2bb9a.js",
    "revision": "3a7b0edd413c29fa11dc7d2ca990eb7e"
  },
  {
    "url": "assets/js/19.4f7729cf.js",
    "revision": "c628350895b07a5d52137ecb245b20b7"
  },
  {
    "url": "assets/js/20.12d81659.js",
    "revision": "81517ce257c33070724b92dcce53788a"
  },
  {
    "url": "assets/js/21.885785f8.js",
    "revision": "6cf95ca769436ed714b7679db315840b"
  },
  {
    "url": "assets/js/22.dc5488d0.js",
    "revision": "1a47505c250e95abc7ceda665ee28ed2"
  },
  {
    "url": "assets/js/23.cce5912a.js",
    "revision": "29df0f249da74ad9ec7089dd0f3be792"
  },
  {
    "url": "assets/js/24.80cb6b6e.js",
    "revision": "e71a5c0612f0fbbcda1f29ad7614ffe7"
  },
  {
    "url": "assets/js/25.7e42be2d.js",
    "revision": "efec0b1425e5355d3223fe05e4ec9216"
  },
  {
    "url": "assets/js/26.be02219c.js",
    "revision": "d8f021df369400e4843abecd475d43f8"
  },
  {
    "url": "assets/js/27.deb5392f.js",
    "revision": "522e2616db539b866eccaafbf9bb4eba"
  },
  {
    "url": "assets/js/28.52bf9d23.js",
    "revision": "8dcc5fe675746ed351426bee6d9f06ad"
  },
  {
    "url": "assets/js/29.de59453f.js",
    "revision": "9ca562fd7e87ab7ce271bcba640ae2e8"
  },
  {
    "url": "assets/js/3.ef2fe70b.js",
    "revision": "37a6a8572560895a6f877e28657b904e"
  },
  {
    "url": "assets/js/30.0beab1ee.js",
    "revision": "778e743c7c4026632af2f71865fda42c"
  },
  {
    "url": "assets/js/4.44550793.js",
    "revision": "cb8c4f63993d6076772228144eaa065e"
  },
  {
    "url": "assets/js/5.ac0c2f9d.js",
    "revision": "eda380b795f8db916115629a99c81bd4"
  },
  {
    "url": "assets/js/6.9e784e7c.js",
    "revision": "2fbcb27b8df5ad8ea687bfacb34cfea7"
  },
  {
    "url": "assets/js/7.06e425f1.js",
    "revision": "4e344b6a9daa6f1fe17de7c9ad6bc07d"
  },
  {
    "url": "assets/js/8.bd9d2aed.js",
    "revision": "93e7c34f90cac35064dbf1ed358f1666"
  },
  {
    "url": "assets/js/9.6d9148b9.js",
    "revision": "a91b8462b5c4969c92ac28e30c2e9ca6"
  },
  {
    "url": "assets/js/app.b2f608a7.js",
    "revision": "260dfb8c4a88fb3f6f5e9c4cddb6ca4a"
  },
  {
    "url": "assets/js/vendors~notification.98447839.js",
    "revision": "a05efde42d5f02fe13dfada85a780b47"
  },
  {
    "url": "ethereum-metamask-chrome.png",
    "revision": "79226bac078ce93a58b74aff1a8a6aa3"
  },
  {
    "url": "faq/index.html",
    "revision": "9053790a3c2f5bbf1630736f93081c1e"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "7e8962a7c44bad2ac07fb3b2e2da742c"
  },
  {
    "url": "guide/assets.html",
    "revision": "6dcc52edc77915b21f68f093976c43b1"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "820d42a7c3728243112485b2c56f7b8d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "12ab526bfcb45da05da88c3fbe8e0392"
  },
  {
    "url": "guide/deploy.html",
    "revision": "dede2aa62999222c0c1c1aa18f068c5f"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "2bc7fb5a0c7224d8fb746ccc3c2c6c3c"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "a8df218809003a1424dc0c078ce28ae4"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "0f3468bb0f1792779244a998d915e920"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1921b5189b3d00a84bd053cfb56f7bd3"
  },
  {
    "url": "guide/index.html",
    "revision": "8dc0f674430d4065befb5db73aac290b"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "ed9d703e2b3da4725b0a4b80653ede08"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "e2cd3e2937300e806719623e0e974d8d"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "e643f49840c687c7fb2147696c9be4a8"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "e68fc703269884d4d4ad5cf6fce002e0"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "71fe9f8e3d863eaf4c2b657159585905"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "1f5039cd044a0cb50ae6ae1b89901ebb"
  },
  {
    "url": "icons/android-chrome-192x192.png",
    "revision": "f130a0b70e386170cf6f011c0ca8c4f4"
  },
  {
    "url": "icons/android-chrome-512x512.png",
    "revision": "0ff1bc4d14e5c9abcacba7c600d97814"
  },
  {
    "url": "icons/apple-touch-icon-120x120.png",
    "revision": "936d6e411cabd71f0e627011c3f18fe2"
  },
  {
    "url": "icons/apple-touch-icon-152x152.png",
    "revision": "1a034e64d80905128113e5272a5ab95e"
  },
  {
    "url": "icons/apple-touch-icon-180x180.png",
    "revision": "c43cd371a49ee4ca17ab3a60e72bdd51"
  },
  {
    "url": "icons/apple-touch-icon-60x60.png",
    "revision": "9a2b5c0f19de617685b7b5b42464e7db"
  },
  {
    "url": "icons/apple-touch-icon-76x76.png",
    "revision": "af28d69d59284dd202aa55e57227b11b"
  },
  {
    "url": "icons/apple-touch-icon.png",
    "revision": "66830ea6be8e7e94fb55df9f7b778f2e"
  },
  {
    "url": "icons/favicon-16x16.png",
    "revision": "4bb1a55479d61843b89a2fdafa7849b3"
  },
  {
    "url": "icons/favicon-32x32.png",
    "revision": "98b614336d9a12cb3f7bedb001da6fca"
  },
  {
    "url": "icons/msapplication-icon-144x144.png",
    "revision": "b89032a4a5a1879f30ba05a13947f26f"
  },
  {
    "url": "icons/mstile-150x150.png",
    "revision": "058a3335d15a3eb84e7ae3707ba09620"
  },
  {
    "url": "icons/safari-pinned-tab.svg",
    "revision": "f22d501a35a87d9f21701cb031f6ea17"
  },
  {
    "url": "index.html",
    "revision": "6efea413e9db63ae32b21ebb490c76ff"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
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

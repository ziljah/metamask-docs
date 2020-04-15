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
    "revision": "875ca005ff81c715d016ece1d1c03538"
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
    "url": "assets/js/10.31eb8799.js",
    "revision": "e83db4c61619b3d8b134067b65caa1aa"
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
    "url": "assets/js/14.e441fa82.js",
    "revision": "a58a728ae781f801227e08eb78a01bd0"
  },
  {
    "url": "assets/js/15.ab3e63f5.js",
    "revision": "08f338fdd131bff9e3effabe9089ce9c"
  },
  {
    "url": "assets/js/16.1e7d0c52.js",
    "revision": "da951b7d3ef91b0c76ee8352c315717a"
  },
  {
    "url": "assets/js/17.4cd5d613.js",
    "revision": "bdc15d868d1ab752551925439aceebcc"
  },
  {
    "url": "assets/js/18.52a67ff2.js",
    "revision": "df28639c12f5010da32d119fefd9e001"
  },
  {
    "url": "assets/js/19.173251f5.js",
    "revision": "834f5a8fddd4f7f72985fc041b258b62"
  },
  {
    "url": "assets/js/20.b03d41bf.js",
    "revision": "ccf0a52ef145a48b4936d38f9bb81855"
  },
  {
    "url": "assets/js/21.0096cf69.js",
    "revision": "ce3e1a41045d61423b52651c44d5f16e"
  },
  {
    "url": "assets/js/22.8ee729a8.js",
    "revision": "3dcc594b60906d75f11195c85bebc4b3"
  },
  {
    "url": "assets/js/23.66b2e8d1.js",
    "revision": "8c0eac809115ad8f730a955d1390cf15"
  },
  {
    "url": "assets/js/24.5bc7546c.js",
    "revision": "2ffa62c8de1750f3884ef1949a89d5a0"
  },
  {
    "url": "assets/js/25.03ab471b.js",
    "revision": "c535978a7bb5610f4808285c9cebbd00"
  },
  {
    "url": "assets/js/26.a4004f68.js",
    "revision": "3aa5ba85619a4a6ad6ab48a10eb45230"
  },
  {
    "url": "assets/js/27.ee790aff.js",
    "revision": "2b686bd9543ac42aac2cdae3a945f59c"
  },
  {
    "url": "assets/js/28.17f97396.js",
    "revision": "133032109cec493a6116258359385bbc"
  },
  {
    "url": "assets/js/29.c6e719ed.js",
    "revision": "3a2b6bf6483a77bbf17ad0ae14de8cc6"
  },
  {
    "url": "assets/js/3.ef2fe70b.js",
    "revision": "37a6a8572560895a6f877e28657b904e"
  },
  {
    "url": "assets/js/30.783ba694.js",
    "revision": "32f9e89816ef2d3de46faf61ff0fde4b"
  },
  {
    "url": "assets/js/31.ad6ac76a.js",
    "revision": "b9b95da67abaf9b97f60136ac7aa934c"
  },
  {
    "url": "assets/js/4.7677e895.js",
    "revision": "b95604128839685b66db2c095128c06f"
  },
  {
    "url": "assets/js/5.d4eb0b47.js",
    "revision": "5da854c5992d858712d1bb1ca7a70c8f"
  },
  {
    "url": "assets/js/6.9e784e7c.js",
    "revision": "2fbcb27b8df5ad8ea687bfacb34cfea7"
  },
  {
    "url": "assets/js/7.1c45f8ca.js",
    "revision": "4eea80b035fce30f525f2d5d1acb09b8"
  },
  {
    "url": "assets/js/8.bd9d2aed.js",
    "revision": "93e7c34f90cac35064dbf1ed358f1666"
  },
  {
    "url": "assets/js/9.6774e0d3.js",
    "revision": "2d212cbde08aaea92f3f83f958960eef"
  },
  {
    "url": "assets/js/app.e9717e72.js",
    "revision": "c3f0c5e2c54a96a97e50bf9b0a20d439"
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
    "revision": "6c61f216c7218163f4ec91bf6381f8d4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "faf9b61c479a17b78ba72ba40abfe000"
  },
  {
    "url": "guide/assets.html",
    "revision": "30c8bb7ba34a910cc7e94771f178cb70"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "7fff38c59a2c5d0c8c80ad2f7916c33b"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "de472fe7be9cf848d3562576fbb7b6df"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "960aaee2f4d2129618801c8f7221e88e"
  },
  {
    "url": "guide/deploy.html",
    "revision": "01875fe7d78df9907834040a1fe236e6"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "42a14ed7c69d6bd8c489ad5cd4dce8b1"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "fdfdecb8b3c35011b2224c61b6151448"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "d0aee34c90b0500871e4f9186e665fdd"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ccf291ece2da275a76502789b568ea23"
  },
  {
    "url": "guide/index.html",
    "revision": "3861c41e5d95fbd9f082f795759eab77"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a37e5a923f7e85d4b7062570d275a38c"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "c84ff293150ddd7a2f8f91acca012d23"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "d4106d25ad94ec738c0f39f0e3bd116b"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "f5cc79ef8b49a7f6225b22f19d260967"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "db17f2f69462d17c01347b8d3ad02e2d"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "aa9c9aa8aa82f3dac25ca8557e23d5a7"
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
    "revision": "8daa254e03f02c9454d20f16be47f01e"
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

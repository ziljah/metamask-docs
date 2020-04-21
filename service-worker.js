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
    "revision": "78ee99eb9cd17a2ec5342286d5c84801"
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
    "url": "assets/js/10.b19c554c.js",
    "revision": "cb7be4c7c7ff7f3fdf60cd3c3970b22f"
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
    "url": "assets/js/18.dafffd64.js",
    "revision": "cca1d827428623c5f1a6332c8c89427d"
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
    "url": "assets/js/21.a1b6ed99.js",
    "revision": "c762124d3ba01a9b48d3463136cfdc3f"
  },
  {
    "url": "assets/js/22.5f88b03d.js",
    "revision": "c256025d8112114b1fd7b5c77a3b57dc"
  },
  {
    "url": "assets/js/23.f6fd1939.js",
    "revision": "15db6814ceb364f0e193455325ac18d9"
  },
  {
    "url": "assets/js/24.5bc7546c.js",
    "revision": "2ffa62c8de1750f3884ef1949a89d5a0"
  },
  {
    "url": "assets/js/25.5ea02137.js",
    "revision": "95f1dad859ef69dd2d9562cf87ffb647"
  },
  {
    "url": "assets/js/26.a4004f68.js",
    "revision": "3aa5ba85619a4a6ad6ab48a10eb45230"
  },
  {
    "url": "assets/js/27.05d9a2aa.js",
    "revision": "ae34e52521f8cfa2be534af09127aff6"
  },
  {
    "url": "assets/js/28.b8312b8d.js",
    "revision": "ceefb8e62f75f8c556c64f3d02653fd0"
  },
  {
    "url": "assets/js/29.6e80904d.js",
    "revision": "25ea2c424c6716ea4f0989f41480f603"
  },
  {
    "url": "assets/js/3.ef2fe70b.js",
    "revision": "37a6a8572560895a6f877e28657b904e"
  },
  {
    "url": "assets/js/30.94a10aeb.js",
    "revision": "6d4e3999ba05da8e2ec42c0b6fda6ef2"
  },
  {
    "url": "assets/js/31.be92dc12.js",
    "revision": "5208d22e345d8d64d8f68ccc96b77758"
  },
  {
    "url": "assets/js/32.1e548125.js",
    "revision": "cc8abbbd249351d31ab9205f4cf6f0c5"
  },
  {
    "url": "assets/js/4.dccfff33.js",
    "revision": "431c7f22820e5cac3e9d961754d47a5a"
  },
  {
    "url": "assets/js/5.87d950f7.js",
    "revision": "4424e159e508bc85cc93d3fad0a653bf"
  },
  {
    "url": "assets/js/6.9e784e7c.js",
    "revision": "2fbcb27b8df5ad8ea687bfacb34cfea7"
  },
  {
    "url": "assets/js/7.39e38909.js",
    "revision": "754c5c95ea362c029de4f18f43b2ba83"
  },
  {
    "url": "assets/js/8.bd9d2aed.js",
    "revision": "93e7c34f90cac35064dbf1ed358f1666"
  },
  {
    "url": "assets/js/9.8eb0ab5f.js",
    "revision": "fe5a572f9a9141224c8b50e2fac37493"
  },
  {
    "url": "assets/js/app.69a18079.js",
    "revision": "72f799eded36bd0cb86b73a5f389bec8"
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
    "revision": "eae5f1863b023c0f1659d14f38fb8984"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "3cbf315d249323d816d54f7c69085e4b"
  },
  {
    "url": "guide/assets.html",
    "revision": "dfad05a61600b8e7630319ec674c9093"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "41782a8bf6f1c925138b417d1036b93c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "123aecd0c196a463bc3c74838e7fd97f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "fc4782049cef86f82b38339617fef3dc"
  },
  {
    "url": "guide/deploy.html",
    "revision": "a178c8de8e13b448be62ecd024bff0b2"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "a50a101f2d3bc586b928b1dc9f3b0bc3"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "0ad57e49030c19aea62049be04fc762b"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "b9a4f69594f695580561729936ddb393"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "994ab585248ef60d54e03ed6b7f19dc5"
  },
  {
    "url": "guide/index.html",
    "revision": "e5054a5d59fc39dd8630b844ed828190"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "1f618d1fa734ef1fea41f3f0511ff21c"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "6f3a9a1be097b80dfeb3cc4ecfb2f0f8"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "cb026f669c2e4363299524b00b709039"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "b8c5ae9d7e5058269a9d11b214a49147"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "da933fa3150a89694f8151f7427a975d"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "aa4a6b90463faf8939ec48c166bfaf0b"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "9e2aab77764696ae22deeb03825bb750"
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
    "revision": "69f86accdda538dc89697a27f50bd7ce"
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

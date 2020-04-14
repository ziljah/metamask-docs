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
    "revision": "c2b270a8c9153004fbf5a83f42e6750f"
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
    "url": "assets/js/17.1ace2421.js",
    "revision": "5bfd26982fe39482bebabe1a742e1c88"
  },
  {
    "url": "assets/js/18.244b4c80.js",
    "revision": "f70df645aa24bbf455830e179004abb2"
  },
  {
    "url": "assets/js/19.e5d2abd6.js",
    "revision": "c866ec875f3018db180f815c50a665eb"
  },
  {
    "url": "assets/js/20.426c3bd4.js",
    "revision": "7e2ef2d5ac21a691629ce0f2d425ab48"
  },
  {
    "url": "assets/js/21.155a2d53.js",
    "revision": "0097b7b3816a1bf555e64a4b1e80c0fc"
  },
  {
    "url": "assets/js/22.da74d1a2.js",
    "revision": "17f97f7e952e86c6122ea4cd1b87de56"
  },
  {
    "url": "assets/js/23.cce5912a.js",
    "revision": "29df0f249da74ad9ec7089dd0f3be792"
  },
  {
    "url": "assets/js/24.5ab35b54.js",
    "revision": "7af7fc29e3c33a2c707db9d643190b6e"
  },
  {
    "url": "assets/js/25.507b148a.js",
    "revision": "959f202526fc8699635f9a6e7ce862d0"
  },
  {
    "url": "assets/js/26.bbc61e34.js",
    "revision": "18e7fed5d90c1eef4b064c5537473337"
  },
  {
    "url": "assets/js/27.098be540.js",
    "revision": "766ac3094a4cb9147ed84d0882bb0ea7"
  },
  {
    "url": "assets/js/28.237aad77.js",
    "revision": "3fda03f1abd63ef6930431fed78ff86d"
  },
  {
    "url": "assets/js/29.769ce764.js",
    "revision": "99a9236e6ec29a3614af18093586867e"
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
    "url": "assets/js/app.553874fe.js",
    "revision": "adcd35234c402830b796fc7c6f233ffb"
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
    "revision": "318b730061968527ba4349e626ed4b28"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "3863c88d02eaa991f04aa96c4ab52da5"
  },
  {
    "url": "guide/assets.html",
    "revision": "2a59c2b5a458a74d8b291ab658703065"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "6c2d091691cb9cbf518fc17ef373e23c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "f563df883ebaaffe65203cd647d1b5fb"
  },
  {
    "url": "guide/deploy.html",
    "revision": "1c4494477d2f11d8de756fd6ed322ec2"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "82c884bf6fb66fc816d752c7febb75fa"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "d39d800e634074110d843d11407ad210"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "d6ac5b24d2aeca547d38907cbb9b82a8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "722c79a5d1035fc5a82f19e920d4ee93"
  },
  {
    "url": "guide/index.html",
    "revision": "3dc60f10070998bc63afcd18eb1b6ebe"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b49e6d00e65ecbeaf9056ec8e7653e84"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "511e708e24d006b352cd24806eb1df6a"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0b9fd448fbe9c85373a05093be316b55"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7376d06cf97d132ffe128f5811b18470"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4eaa60284bfbf322013952452ff80042"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7599022cc489489232508f737db0e9a7"
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
    "revision": "4d19894a4e31960eb73c7dc39c01f265"
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

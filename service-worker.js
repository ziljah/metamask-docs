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
    "revision": "f499266183798fc24c460ec67f42532b"
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
    "url": "assets/js/15.4ae77fcd.js",
    "revision": "d5dbb18c34ec339dc1389f4c01bd2d6a"
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
    "url": "assets/js/20.888b4f39.js",
    "revision": "d723f48201841b5b45c4e535d3b6e79c"
  },
  {
    "url": "assets/js/21.294e88ff.js",
    "revision": "5c956f5d4a33f6c3f8fafbb1b4005799"
  },
  {
    "url": "assets/js/22.da74d1a2.js",
    "revision": "17f97f7e952e86c6122ea4cd1b87de56"
  },
  {
    "url": "assets/js/23.e7283c3f.js",
    "revision": "8ddda06a4cd4c035732938538890e693"
  },
  {
    "url": "assets/js/24.3b907620.js",
    "revision": "f5c6f975e86de8ddbf687d74f8f88d51"
  },
  {
    "url": "assets/js/25.507b148a.js",
    "revision": "959f202526fc8699635f9a6e7ce862d0"
  },
  {
    "url": "assets/js/26.0fccbaec.js",
    "revision": "cdf392f14627643f96e054a914434097"
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
    "url": "assets/js/app.b81b13d4.js",
    "revision": "f164b74d7303e9a6eac0f9d30db890b1"
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
    "revision": "4f84d376a2783359065a36b3657c277f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "7173ef1171e5f1c34805dfa0b4d64be6"
  },
  {
    "url": "guide/assets.html",
    "revision": "898fc7becd2ee927e73b65761c67ae64"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "f042153df99167a2d75cb69fe810d214"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "969d18063290a35fdbf8ce7c4355306a"
  },
  {
    "url": "guide/deploy.html",
    "revision": "4104930c330f20ce19c78c7f7e0fe6da"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "47d0ad3357db0168068b274f1d0f044b"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "5bba9509bcde9f36c17157fb4bc10a18"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "994befc96c1560680609b14c7d2f7203"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c9f07220ad4e4ae33e1d869ffea5433f"
  },
  {
    "url": "guide/index.html",
    "revision": "c7c837df16fe65a0d4cd03daa7d446f7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "3e1265791014786db68626b35b62ef12"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "1efa99cd5d0690626fb399d805f35f6e"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1939507ef7cd416a1668043061f87d76"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "ccdab4b7df60a34730efac6336a36ef3"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d3b90bab45a7e0fc0ae0fcd0b647fdb0"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "05670872753b423904be8b9f9c6f1e51"
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
    "revision": "46b20eaa29e0a001d33c89e1189ec4ba"
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

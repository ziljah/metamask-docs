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
    "revision": "acf27bb46b4aaeb8323bed4244cf4479"
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
    "url": "assets/js/13.4cad8f49.js",
    "revision": "71632fdba06af6dc4626ba705286f724"
  },
  {
    "url": "assets/js/14.8a8a420d.js",
    "revision": "47e79012e7097516ecf654cae263047a"
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
    "url": "assets/js/20.c9309d9a.js",
    "revision": "f9ebe1ccd87525b8628f4a1f6dd7e26e"
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
    "url": "assets/js/24.80cb6b6e.js",
    "revision": "e71a5c0612f0fbbcda1f29ad7614ffe7"
  },
  {
    "url": "assets/js/25.7e42be2d.js",
    "revision": "efec0b1425e5355d3223fe05e4ec9216"
  },
  {
    "url": "assets/js/26.4613242e.js",
    "revision": "45872b1664ec0749067792802ef0d547"
  },
  {
    "url": "assets/js/27.540e4003.js",
    "revision": "f36015ce638723cab8eb762c0f8ae7af"
  },
  {
    "url": "assets/js/28.109eec1f.js",
    "revision": "3dea555d6b3dbe03f78d5f993892b132"
  },
  {
    "url": "assets/js/29.66198c6c.js",
    "revision": "faf2035cdd624c9baff37ecbb517e5f8"
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
    "url": "assets/js/app.0173c11a.js",
    "revision": "bb7342f6d5ca5b770d82c4d61b6964ea"
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
    "revision": "a5c773b4e26762934a1c1b1253c6f92e"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "f36bd664c04ab3da0a1857adc84ae854"
  },
  {
    "url": "guide/assets.html",
    "revision": "b93d9c3a0e12dbeb08e2108900483cfd"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "41ed5fdac6c44a6a7a28284d4f34911d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "305c3f1ec21ae592f65f89abcf9cd624"
  },
  {
    "url": "guide/deploy.html",
    "revision": "f240bb5060ed4cca4191a6590aaec055"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "43e10ce499ef11a138372a4898b0a059"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "b71e16493d972121d8d2efdb51199983"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "597004b80427ed831d2af986c2c5a961"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3acb35d2b0d0e656ce731363123846d3"
  },
  {
    "url": "guide/index.html",
    "revision": "1f23eb0b71b9237618be3a14d0ff27f8"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "eeff9adf158deaba7cb4d16a63cd5e8d"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "6dbae286a6beef2d8a28ba31442e0e0f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f4a4bf5d51ed01bf21054e9b6adda975"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "6f5e3abc2dd8da09860ef5b1d103c727"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "7b33d2e1062c00fbac664c94dbbce65f"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "68fa5af3fdae0b806ae3dbc232cb91a4"
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
    "revision": "82a6c63b96ce6f03e73654bcfdaa9262"
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

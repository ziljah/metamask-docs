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
    "revision": "b82a941f1e4439096a17db4c75eab6f8"
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
    "url": "assets/js/15.dbaad193.js",
    "revision": "b5cf299bed8fae1c593bf48bc4c54665"
  },
  {
    "url": "assets/js/16.7c3cd95e.js",
    "revision": "f81fac3a039898c1e326fcaed4879e4c"
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
    "url": "assets/js/20.0b682444.js",
    "revision": "855c704e3b9bbf17c0d41c9a20969c3b"
  },
  {
    "url": "assets/js/21.155a2d53.js",
    "revision": "0097b7b3816a1bf555e64a4b1e80c0fc"
  },
  {
    "url": "assets/js/22.81f6e493.js",
    "revision": "ea4da42c1132fe1ff03c5e9e47c88d1a"
  },
  {
    "url": "assets/js/23.cce5912a.js",
    "revision": "29df0f249da74ad9ec7089dd0f3be792"
  },
  {
    "url": "assets/js/24.ce5ec27a.js",
    "revision": "d4726a01f784c1aa798694c2812f5520"
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
    "url": "assets/js/27.098be540.js",
    "revision": "766ac3094a4cb9147ed84d0882bb0ea7"
  },
  {
    "url": "assets/js/28.237aad77.js",
    "revision": "3fda03f1abd63ef6930431fed78ff86d"
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
    "url": "assets/js/app.2e1063a8.js",
    "revision": "eccbb9c8be4a8bf47e4d10a664adf919"
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
    "revision": "2631e30996856822123a05bcb13b82eb"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "df0310820960b3abc8eaf24c470e20f6"
  },
  {
    "url": "guide/assets.html",
    "revision": "a895afaf7f1ad0a11451e7d4f654f354"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "9ef22578f14e0f9ffc573192da842eb1"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "b2a483597c1750932516515910bebfca"
  },
  {
    "url": "guide/deploy.html",
    "revision": "8c2a4b9abb46175fd8d1a276325c3f6a"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "dd43ff5d40adb384f115c87f30a63bfa"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "77dd4530d9fe7e1a6c7cde77aae1adbf"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "1d17f7ccf9755156219fca70b2e53432"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "6479bd482d89de4d4fff0d54d2c1636d"
  },
  {
    "url": "guide/index.html",
    "revision": "6b6aeae814ff816e5e872f555406cea7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b6d4c29427bdea88213e1c64b5fba246"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "6262de8f3d670b51553de51b2f7925d4"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "673fb4c741d30b2dd85fa6da3941dbf1"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "e01031bdd0509049eec21894f96882f5"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "35d3d717ef3f8fae2b561dd008725ffa"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7f124829dfd437e193c69feb53aadffc"
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
    "revision": "6cb650df0996b8554e7471f4a0a31e17"
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

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
    "revision": "0eae8472b5238f4187e821e3b4cc82db"
  },
  {
    "url": "architecture.png",
    "revision": "9a93cf6cea38878e19c5816d1af28b17"
  },
  {
    "url": "assets/css/0.styles.6048c0de.css",
    "revision": "a6e1d2a2fd33bd6d6dcbc77601aefb45"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.b97e1d0b.js",
    "revision": "c2348b79f9fe45fb6200e2f24bb2f984"
  },
  {
    "url": "assets/js/11.fe162caf.js",
    "revision": "0324ebbf0783ae5a725150a6a753482d"
  },
  {
    "url": "assets/js/12.720cd971.js",
    "revision": "124179d2e5191766ae4e22b9cf152528"
  },
  {
    "url": "assets/js/13.e54e42dd.js",
    "revision": "672d9adeb3cb4369f26f0a0d31800bc9"
  },
  {
    "url": "assets/js/14.d24bab44.js",
    "revision": "473754ddbe046a4b551875baa01a628d"
  },
  {
    "url": "assets/js/15.252932b0.js",
    "revision": "8924040080fa7c2f61fb68dd8497b5f0"
  },
  {
    "url": "assets/js/16.aff84a08.js",
    "revision": "29733c89575165bafc6fdbd9772c05a2"
  },
  {
    "url": "assets/js/17.3c7c1496.js",
    "revision": "4ed36f1136eb4d078dde3d36e885bfeb"
  },
  {
    "url": "assets/js/18.a17424db.js",
    "revision": "157e4369e4f4c168346ef72e7dc71c62"
  },
  {
    "url": "assets/js/19.83fc8c03.js",
    "revision": "edc1d914c4176cb50e8f7fe8296bd175"
  },
  {
    "url": "assets/js/20.eb6de7f6.js",
    "revision": "c50983f710e8f2b87abf052e8f586716"
  },
  {
    "url": "assets/js/21.4eca5392.js",
    "revision": "42e2a70ef999c449551ab7c19627007f"
  },
  {
    "url": "assets/js/22.11fe956d.js",
    "revision": "cb44c9d3e60852c5794586f9deee9fdf"
  },
  {
    "url": "assets/js/23.688eaaa3.js",
    "revision": "2bf19154d440bc0558842158aca02b40"
  },
  {
    "url": "assets/js/24.d06ed211.js",
    "revision": "96ffd60b855b3ebf31bee574e1ac84db"
  },
  {
    "url": "assets/js/25.6ad6d2c9.js",
    "revision": "b0fa3aa749ef179ac02a1f62e0e2eee6"
  },
  {
    "url": "assets/js/26.ee398d5e.js",
    "revision": "732df7da6771224878de1306caecddfe"
  },
  {
    "url": "assets/js/27.a6033854.js",
    "revision": "2f521ac89eecb08eea8121dbab23e30c"
  },
  {
    "url": "assets/js/28.7db91792.js",
    "revision": "acda3e370a640e7e108adc752cc537aa"
  },
  {
    "url": "assets/js/29.5d1df0fa.js",
    "revision": "49dad29d3676619a10dc234e6ff58e36"
  },
  {
    "url": "assets/js/3.ef2fe70b.js",
    "revision": "37a6a8572560895a6f877e28657b904e"
  },
  {
    "url": "assets/js/30.55388a36.js",
    "revision": "ebc492e407543ded377f40131c999fe9"
  },
  {
    "url": "assets/js/31.fca4562b.js",
    "revision": "c67f360e41a6e5eff849c53aa3a38081"
  },
  {
    "url": "assets/js/32.5c88ad25.js",
    "revision": "a633d59bcc746306655ace5ae2c26c2a"
  },
  {
    "url": "assets/js/33.687bdc32.js",
    "revision": "610d3f0598254c56b91cb55468682c64"
  },
  {
    "url": "assets/js/34.8c19ab7c.js",
    "revision": "1f46d494ae435cfcbf08416d93c08b84"
  },
  {
    "url": "assets/js/35.adee5d22.js",
    "revision": "41216fc17dd373cdc47482c638e9fb64"
  },
  {
    "url": "assets/js/36.ee6e3521.js",
    "revision": "cb1c51386c9699b306b5c1aceb858ab3"
  },
  {
    "url": "assets/js/37.104e2dd7.js",
    "revision": "7f1462b51cbac1921191fe508422753b"
  },
  {
    "url": "assets/js/38.1420b104.js",
    "revision": "6aeb18687faa7aaf2529bdff64701aad"
  },
  {
    "url": "assets/js/39.ee94505e.js",
    "revision": "d5b4e67092d24b861f9d9b2672023279"
  },
  {
    "url": "assets/js/4.154d6642.js",
    "revision": "4428c9e02179585af32087b2a23f9aac"
  },
  {
    "url": "assets/js/40.3300b156.js",
    "revision": "f09339158b7ee57a00b5b90722403cbf"
  },
  {
    "url": "assets/js/41.50391649.js",
    "revision": "12fc23ab082289d305205a26ca9aef0f"
  },
  {
    "url": "assets/js/5.a6091208.js",
    "revision": "df8f49bcd767a458f59caf862aa2c4e3"
  },
  {
    "url": "assets/js/6.9e784e7c.js",
    "revision": "2fbcb27b8df5ad8ea687bfacb34cfea7"
  },
  {
    "url": "assets/js/7.ea631824.js",
    "revision": "9add99bb35ca080d721cee412f233a6b"
  },
  {
    "url": "assets/js/8.69792c60.js",
    "revision": "66beb4800b40aeaec391873453d22259"
  },
  {
    "url": "assets/js/9.54d318b9.js",
    "revision": "0f9ad29bf04273833f9296e52837e5db"
  },
  {
    "url": "assets/js/app.9f8e4d3e.js",
    "revision": "928cd1fca96e1d6238c8553522a59db9"
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
    "revision": "959bbb7c11bf5b0635a48525ae89234f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d17a8b50b802a7c42ad6be1986df1b98"
  },
  {
    "url": "guide/assets.html",
    "revision": "2a440795225187287b3cffbc41bb92a7"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "a9b9d0444e291f2ee232da17d4b6876d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "dc5955744f63e3aba4ba8fedba45ca7f"
  },
  {
    "url": "guide/deploy.html",
    "revision": "5b777823b27f1218d5dd4e9664671642"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "36b11112834faf8b70e72cc157f6ee8d"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "760015f08a77819c3e9ad635bff1a094"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "202e994fab6fc06a2fa62e786a63d7f4"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1342414bf61bba0509ef6d04e16d41b9"
  },
  {
    "url": "guide/index.html",
    "revision": "db23055bb50856eb045fc8f75b9f5d8d"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "bf6df6c42156b3758134f4571cf0f2d3"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "d04bf56ca0202687b99042c6d52b1600"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "61348b19317fb60df44b0ae7d9309807"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "48a58ca2201fc6f749d981b009eacbdd"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "41b4b7088cbb1d36be8ce06849281efd"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "3558e0c7df72c3ba2c92dc707d168bcd"
  },
  {
    "url": "hero.png",
    "revision": "d1fed5cb9d0a4c4269c3bcc4d74d9e64"
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
    "revision": "1dc855022c245dcd0b5669dbc047474d"
  },
  {
    "url": "line-numbers-desktop.png",
    "revision": "7c8ccab7c4953ac2fb9e4bc93ecd25ac"
  },
  {
    "url": "line-numbers-mobile.gif",
    "revision": "580b860f45436c9a15a9f3bd036edd97"
  },
  {
    "url": "logo.png",
    "revision": "cf23526f451784ff137f161b8fe18d5a"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
  },
  {
    "url": "plugin.png",
    "revision": "3e325210d3e3752e32818385fc4afbc9"
  },
  {
    "url": "plugin/index.html",
    "revision": "60943b6e20cc10db40c2beb7395bd583"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "15d3f4d81c8420968b3b8b52006a1af2"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "f67f710226fe6cfd8f4aa0fb0153bd36"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "65f4a940619533497992d5df10b723f2"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "b24a5aba4cd7fbe169a7923a129229de"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "ac6a063888bf01b54a5de2b87bea15cc"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "de205dc535bce1baec1b33b46566ca3f"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "c23937bffad39a9ba75ebd2b00a970ca"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "0a7b0bc960967ce79f9426b3653a223c"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "7912f53dfa6f211c72b233c61b0ffe0e"
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

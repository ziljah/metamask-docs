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
    "revision": "ea7b3614168cc475bebdef971f012269"
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
    "url": "assets/js/22.7f8bd5b9.js",
    "revision": "70a3855626963f27d04d7145c400628c"
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
    "url": "assets/js/26.055e6e7c.js",
    "revision": "851aecfb551f5a76a04cec388a4f7ae1"
  },
  {
    "url": "assets/js/27.ae424dd7.js",
    "revision": "bb18d6e5f6fe5d75721d5b64a9d02944"
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
    "url": "assets/js/30.73779c3e.js",
    "revision": "8e1aa844b8f70bf36253491364dabec1"
  },
  {
    "url": "assets/js/31.c9d514b2.js",
    "revision": "974d8213f103fbe924ce54a84bfa5504"
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
    "url": "assets/js/37.d09b27a0.js",
    "revision": "0ce6f4075f50b91969778113611888aa"
  },
  {
    "url": "assets/js/38.1420b104.js",
    "revision": "6aeb18687faa7aaf2529bdff64701aad"
  },
  {
    "url": "assets/js/39.091bcb36.js",
    "revision": "0b42def16b4ef15e40d19947b4a09814"
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
    "url": "assets/js/app.ffdd2f2f.js",
    "revision": "da383e2fc6029da2d36185cf319d6b69"
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
    "revision": "9d607b19fd02ac7c07203dfb3a82a583"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "f337c1fbe29ef5b3ac2829238c16785d"
  },
  {
    "url": "guide/assets.html",
    "revision": "82c2d3a080216e80a11560cd4513979e"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "97d8405f0db57e7737f44f25276f2079"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "93a778b53a21d0e16a4eba931ef798ac"
  },
  {
    "url": "guide/deploy.html",
    "revision": "c7b72ca823b126cd3f46f03605f3affd"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "5d5f85bf16f390612c2068332adde7ba"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "ae1313755cadc2176c4c6291b5d93ad5"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "5befa34ec9bea67d15d9154a78b324ef"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "7dc936a79c4865084ce9c6c6661b4d2c"
  },
  {
    "url": "guide/index.html",
    "revision": "e08b80a3e6f4f5161b9ea9fa844fde7c"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d1d2a9f560311871a8d1f453ffc01eae"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "b461dabf29d79dcdfc6c79bbd61a4c86"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "58612f693ae928009bbd5b20b4d6ea65"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "d3003dd375195754fb7052fa1ce8f71e"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "1fc82607780cb0a2f1fd82c6f4e51a28"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "e37e2ea0795e15763b91ff077cf14383"
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
    "revision": "01197d9cb887a04b51a530c56f7ca35e"
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
    "revision": "10f44d10ebc0ba37de449b3db1c98534"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "e4097e9039a21bf65879f4b37e2de4ec"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "2d26adc4dfa41811cbfe927bd7c23260"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "3f18e74a7776615c567499a9a0bc1f44"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "199ee3e9d4df6e6f49633d3c22e5bb77"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "bb2d4393ebd482d0a392da76b170b802"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "6d7e6608b8833a2db8091a50eecb2576"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "2a6c0f1cf44aab64028b121705e2cb23"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "8aac4c907195f361a66e0415bb7e281b"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "e447014f147cf30af1c3af0aa764ce41"
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

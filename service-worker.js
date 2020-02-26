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
    "revision": "25df4e720291025c83cbcba723354290"
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
    "url": "assets/js/19.575f142f.js",
    "revision": "0d6a7a7b2f85995d6bff297005cffbd6"
  },
  {
    "url": "assets/js/20.b03d41bf.js",
    "revision": "ccf0a52ef145a48b4936d38f9bb81855"
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
    "url": "assets/js/23.415c06bd.js",
    "revision": "617e42c0bf6575b8ced19ce890b748a9"
  },
  {
    "url": "assets/js/24.61af10e1.js",
    "revision": "348d3a4b07794c77fb1cf2991805b533"
  },
  {
    "url": "assets/js/25.03ab471b.js",
    "revision": "c535978a7bb5610f4808285c9cebbd00"
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
    "url": "assets/js/32.ea49ac27.js",
    "revision": "18ade3418b20a0fcc89ddac610c49398"
  },
  {
    "url": "assets/js/33.c9f3473e.js",
    "revision": "633e6c6368394f84897d867d83fce8bd"
  },
  {
    "url": "assets/js/34.8b2148d0.js",
    "revision": "5fb82f0d6e3ba044b1ae057171e51528"
  },
  {
    "url": "assets/js/35.e8501677.js",
    "revision": "c95fa490ec630111f3aa90801ed930be"
  },
  {
    "url": "assets/js/36.2716f742.js",
    "revision": "9b5e3a9d75995c9ccd505f8876bd9fef"
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
    "url": "assets/js/4.7bded3d5.js",
    "revision": "24ee727b400953fd3f370e7dcd8082ac"
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
    "url": "assets/js/9.62386865.js",
    "revision": "a551466fdcc3b3a28cf0be8d5f63f3d5"
  },
  {
    "url": "assets/js/app.cc3e9500.js",
    "revision": "8903852ca0fbee942b1bf4d5cc39b10f"
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
    "revision": "c5e4e1f0bb5f32ffcb6b6dce50624dc4"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "d7f7198d2c15d07b21665ce90e8177b7"
  },
  {
    "url": "guide/assets.html",
    "revision": "24eba42104106272d868ffe3d0c059b9"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "e7d3fcaebbb0bf06d00dd38596d81d99"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "4bb9098a44e3cb7685f38b38f1de6c1e"
  },
  {
    "url": "guide/deploy.html",
    "revision": "49b5df274e8df462cf269ce04e25c199"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "16459431d820b62d407a61c1544a9c37"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "72b574243e0a2ea0afbb26534dad4608"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "b1f1d3cb6ad71b9203fada492e99fdd5"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "c2e8350202b289f94979d51f9af61221"
  },
  {
    "url": "guide/index.html",
    "revision": "17c083f4f9e69efaadb46c82fab187e4"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "82dd04b24f5a451acd1be9353b1476ff"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "e23741b1018c41b97548627a8142431d"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "70d2fa65ffc724c4afb92ea03338050e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8bffa053763b1fc92d7e40ba961eb4c8"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "45c94d5b71d8eaa0e50c4fde13ee2cff"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "89df3c984648106556e3f3ee8f654daf"
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
    "revision": "dba1459555cf4da7adba7607ee30efbd"
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
    "revision": "8bd2a38e7e068be6d27998c697b64d6c"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "fbd4fdca5ea021b0437b115f39bb86a5"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "1f957abf65e936b72ae7c834eeede26e"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "12fd90d19b68ed86759884f36d4ade8a"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "17261351050881166d81f2553d31814c"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "ca131f6a77d3bad6c14bd03290b14de7"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "335a94c641eba65d8b1c0583f338e594"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "f0aea000fee27b16972f90fc29f42111"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "e5f04c97f6e125f8a2ac2a69ec7d57ea"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "478266bdee5057a548318d79f0e8dc64"
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

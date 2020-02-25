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
    "revision": "310c8353d3c1ff856b65a74d4c08ff45"
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
    "url": "assets/js/22.61210d83.js",
    "revision": "ac88a56352871fca0246010da3bad0f0"
  },
  {
    "url": "assets/js/23.66b2e8d1.js",
    "revision": "8c0eac809115ad8f730a955d1390cf15"
  },
  {
    "url": "assets/js/24.a1e22831.js",
    "revision": "c8ff1d83cf42ad304682b0f59226b173"
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
    "url": "assets/js/3.eaaf45d1.js",
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
    "url": "assets/js/app.f26e8ffb.js",
    "revision": "0721032ac48fc278c698343db229d529"
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
    "revision": "585371619764ee5b6e241450c4b3b7b1"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "47a0d4174d089f3c9e9610af54f7e6b3"
  },
  {
    "url": "guide/assets.html",
    "revision": "6571673fa1fbbae838a80c6eae31d3f8"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "08562f5fac5e9c80906f1f7455fd5506"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "2055e37990b9dafba50bb5cd9c3c7320"
  },
  {
    "url": "guide/deploy.html",
    "revision": "431fd199b99e876eac6987e7fec55342"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "1b949425b778d915a4c2515d241ed975"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "b432dd53f2b6a031e0cece5b1165a626"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "bd1e1aa25b7aa027f141ded96e56882e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a396a51448498f96497c4817b6d7792d"
  },
  {
    "url": "guide/index.html",
    "revision": "6d0caa7191c79aa8431cace3a4613d65"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "96ed0df50675253384d400b03e74d1a4"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "7baf9e4c01dbda4e3ad7ade574cb2015"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f0a5d45d63ce604c4029484b9b1d95fb"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "5fc63a8deb789b880765e233e6a82502"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "425b7022d4b6a3c3f5197192c09bdc06"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "e8c371bb520eaac56041d089781cde7b"
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
    "revision": "bf024b327a023cee88143a025503fe2b"
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
    "revision": "de15609cd25e6c48903fe18b083f0556"
  },
  {
    "url": "plugin/official/plugin-active-header-links.html",
    "revision": "13ea046ae365fb50941c63104f7768aa"
  },
  {
    "url": "plugin/official/plugin-back-to-top.html",
    "revision": "90d97ecad538882e6cd73b3a62025097"
  },
  {
    "url": "plugin/official/plugin-google-analytics.html",
    "revision": "3ffc78211c204ea4b73f3b586ecbed94"
  },
  {
    "url": "plugin/official/plugin-last-updated.html",
    "revision": "b456fe9bfd914c65b1b279d5e0e2d3e8"
  },
  {
    "url": "plugin/official/plugin-medium-zoom.html",
    "revision": "5586f14c49f003954d898b7723d93b6c"
  },
  {
    "url": "plugin/official/plugin-nprogress.html",
    "revision": "a979bf176912ece1da8cfec435618473"
  },
  {
    "url": "plugin/official/plugin-pwa.html",
    "revision": "ee455c9978ef69ee13dfef8541f69d9e"
  },
  {
    "url": "plugin/official/plugin-register-components.html",
    "revision": "b597a264d51dbcf58fcf6f40cd4db4f7"
  },
  {
    "url": "plugin/official/plugin-search.html",
    "revision": "f93fb8ebf4b75e8ed50e4246290ebd10"
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

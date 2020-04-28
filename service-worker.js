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
    "revision": "635b0899d23997fc8b2f896eec86f7e0"
  },
  {
    "url": "assets/css/0.styles.9127da40.css",
    "revision": "bd5a597c5e56ec08c16d7a3951a19140"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.1ab38b98.js",
    "revision": "e3aa6b04c8a2a10d48dd275d708aab23"
  },
  {
    "url": "assets/js/11.309777ba.js",
    "revision": "3d2f9c02da167500d61ed907a3b10745"
  },
  {
    "url": "assets/js/12.f53f8ba1.js",
    "revision": "781515ffa46b878d991a7ad4a919b76a"
  },
  {
    "url": "assets/js/13.071cdded.js",
    "revision": "b9be80de16c92f8109543efcc2115e54"
  },
  {
    "url": "assets/js/14.bcafc914.js",
    "revision": "b4f1f6fa73e6a7af0ea37457d91cf48e"
  },
  {
    "url": "assets/js/15.ad0a4b99.js",
    "revision": "5eadfdba448508434931998e3540de34"
  },
  {
    "url": "assets/js/16.f797f92a.js",
    "revision": "2972a06b3b33785d55186b8bab6a7819"
  },
  {
    "url": "assets/js/17.0ea1c3ae.js",
    "revision": "893e0082c7eacb36599d509e89682e87"
  },
  {
    "url": "assets/js/18.50281558.js",
    "revision": "c29ccfc3730413502206fdb33ef745e5"
  },
  {
    "url": "assets/js/19.7b9c64bb.js",
    "revision": "9f62c419fde853c1b5570ef62241736d"
  },
  {
    "url": "assets/js/20.65ee0a9e.js",
    "revision": "4993d9a880d464c92e9cbd56acf6818b"
  },
  {
    "url": "assets/js/21.28355a97.js",
    "revision": "0d56e98df313ca70f38744508e69d759"
  },
  {
    "url": "assets/js/22.0c81e52b.js",
    "revision": "551abf77e0f87a52fbe65988bac351db"
  },
  {
    "url": "assets/js/23.29e75ace.js",
    "revision": "6f2f3ef42b0d7da4ee26eef678f189a9"
  },
  {
    "url": "assets/js/24.9ac1ae23.js",
    "revision": "29b5eef7cc07fa3d394990fd1644b952"
  },
  {
    "url": "assets/js/25.e8def7ab.js",
    "revision": "ac258aef435e1b28811eec3f92e0bfa1"
  },
  {
    "url": "assets/js/26.b0c8b555.js",
    "revision": "be3998fc7cab920412c470e6334b775e"
  },
  {
    "url": "assets/js/27.10ff21d6.js",
    "revision": "a6c56546b1158941f31fc30cf6c09e82"
  },
  {
    "url": "assets/js/28.af242467.js",
    "revision": "84d3aacaa2acf7a962cf69fe69154a54"
  },
  {
    "url": "assets/js/29.312b6c72.js",
    "revision": "3f4673e116e9077c17540a02a6634868"
  },
  {
    "url": "assets/js/3.217093b0.js",
    "revision": "1cc3a68e7e093f02fcb1f1b4a2d52779"
  },
  {
    "url": "assets/js/30.4516ea33.js",
    "revision": "41b8ee1ff743c7aaa1ecdc230e1113fe"
  },
  {
    "url": "assets/js/4.ab884ed5.js",
    "revision": "6f44a7f50dc0fac0b141d6055c72fb8a"
  },
  {
    "url": "assets/js/5.a523b3c4.js",
    "revision": "9bde66d047d7e9893a7e2d8334da2959"
  },
  {
    "url": "assets/js/6.2322089f.js",
    "revision": "040c847ea9f286d685b22d2760fdeec4"
  },
  {
    "url": "assets/js/7.c5aa78be.js",
    "revision": "0b770c2b3454aef6bed4fc284d882f67"
  },
  {
    "url": "assets/js/8.ee525b17.js",
    "revision": "c3df4eff51acc6108b3720045b76f2c2"
  },
  {
    "url": "assets/js/9.7a3542cc.js",
    "revision": "17be74bea7f287e73e8f88860348fd23"
  },
  {
    "url": "assets/js/app.455fa24e.js",
    "revision": "7de8437b62051b9c1606b412f5f80f4d"
  },
  {
    "url": "assets/js/vendors~notification.deb6a181.js",
    "revision": "d003821becedc54da7b54019e25fee46"
  },
  {
    "url": "ethereum-metamask-chrome.png",
    "revision": "79226bac078ce93a58b74aff1a8a6aa3"
  },
  {
    "url": "faq/index.html",
    "revision": "ec24540eccd556a9efba488c91ccbf75"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "08d858c5cbfad5a8e628c70ae04dca6a"
  },
  {
    "url": "guide/assets.html",
    "revision": "556bb2916b56bc671e09c654167419ce"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "544af621f3ce6f651a363f448b69297f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "7f151e3def54d06a06435be021c0a74a"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "9a35f8a299fec740200d6f2a1c72484d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "814051870ff03b33bbe76d095247dfc4"
  },
  {
    "url": "guide/deploy.html",
    "revision": "2fa549f8ad9bb2d51b1af7202e50e3b2"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b80955b75dfd5562fa8f79ba4bc70568"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "3892ed4c561bcc621abf7cc0830f12ee"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "3c92d4580961b38d9c631578ecab6354"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "83cb98c5bda9da8bfd83b90c2dabe7e1"
  },
  {
    "url": "guide/index.html",
    "revision": "dc440e580379beeafea6096d449c9900"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "40652b5165a0f0037eda712200a39ab0"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "5132177ef4634cb6763df3aa6e5f4957"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "fa2cbb1a48a3edc3cf81dffafac72847"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0aeff50da0c0098264b0f7cede64cc06"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "29aebb182cd57f845a931a3fc514b719"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "5cf0248a1e51e351ea85eb05e4e19844"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "7ab5321c4ead111890fd665a706e6a93"
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

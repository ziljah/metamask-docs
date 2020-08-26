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
    "revision": "3e01709d25af2ec090414c30192c0e44"
  },
  {
    "url": "assets/css/0.styles.b6a43169.css",
    "revision": "365569d4673f3186649db9194f398029"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.0b3dafac.js",
    "revision": "d5f722a6f21e3a701a9ca6b8606f9eb3"
  },
  {
    "url": "assets/js/11.583e835e.js",
    "revision": "616a5ebe19ebf4d10df7b76dbf23afb1"
  },
  {
    "url": "assets/js/12.6152b60f.js",
    "revision": "4532774355974fdb1b0c9eea60b07630"
  },
  {
    "url": "assets/js/13.e62820f8.js",
    "revision": "6132f6128e1f05a9592d74369f3e41b2"
  },
  {
    "url": "assets/js/14.7f87b952.js",
    "revision": "98f9d032730755cff056542663f62cfd"
  },
  {
    "url": "assets/js/15.30283319.js",
    "revision": "77b297f8c240376a900f144c0f707fd7"
  },
  {
    "url": "assets/js/16.16a70339.js",
    "revision": "c19f27dd777e0fa01a47371439a617e8"
  },
  {
    "url": "assets/js/17.02ccb974.js",
    "revision": "aed111d681556ed1c66c7e7a2bd81359"
  },
  {
    "url": "assets/js/18.2646b8bc.js",
    "revision": "9689b6eda47ac2f6026569d2a8c2f4ac"
  },
  {
    "url": "assets/js/19.118fd2b7.js",
    "revision": "2b91a0f4907bec40d44d1bad04e671ea"
  },
  {
    "url": "assets/js/20.a5fe3e56.js",
    "revision": "fd0b130cccb872b21f2f87231d54e477"
  },
  {
    "url": "assets/js/21.5dd9e1b4.js",
    "revision": "922f74fc47d780236f4e9e14e1fb8fbe"
  },
  {
    "url": "assets/js/22.3246774b.js",
    "revision": "b7b1821b7db0b86c7744ce959cb98bec"
  },
  {
    "url": "assets/js/23.715b4cc4.js",
    "revision": "bf5351910e9f4682449ceffc46197b49"
  },
  {
    "url": "assets/js/24.bc54f390.js",
    "revision": "6b02cc61ab4cb85642f76f8e18d1352f"
  },
  {
    "url": "assets/js/25.d396023d.js",
    "revision": "8dff1624ac94f8d7f4ffc5b1fd1fc6e5"
  },
  {
    "url": "assets/js/26.947e9065.js",
    "revision": "47e1dcf4726bcee73095c5fdf38aedcb"
  },
  {
    "url": "assets/js/27.9b5a2c07.js",
    "revision": "044dae66d28df140b5ca35629e37bdd8"
  },
  {
    "url": "assets/js/28.27fef35f.js",
    "revision": "604b7e6b4bebc2de3e10d3a6addcccb6"
  },
  {
    "url": "assets/js/3.0f0d4e75.js",
    "revision": "1e19d17a4b12ee03ec6a5522201e9aef"
  },
  {
    "url": "assets/js/4.ec9a0a2f.js",
    "revision": "981f911df3d1a7c1ba9d1cf7e56b85ea"
  },
  {
    "url": "assets/js/5.eb0b6669.js",
    "revision": "69ebe379622aff9fa9741a29ff60285e"
  },
  {
    "url": "assets/js/6.3641c5f1.js",
    "revision": "48ede51ad0117d0e5e8d9be6a450abd2"
  },
  {
    "url": "assets/js/7.f457f0b5.js",
    "revision": "744ec1c1951aae3218f94efdadf5e454"
  },
  {
    "url": "assets/js/8.fa4cb31d.js",
    "revision": "0dd4077c14cc9a1efc0e394202e04d46"
  },
  {
    "url": "assets/js/9.583f925c.js",
    "revision": "2f2c83605ccd2722b9603ae4e1690194"
  },
  {
    "url": "assets/js/app.f58d614a.js",
    "revision": "64fdd92349e94d40c7b71d23ed1a2a31"
  },
  {
    "url": "assets/js/vendors~notification.7f11cff8.js",
    "revision": "9a96ad34a9f20f204f1bc8faed06dd1e"
  },
  {
    "url": "faq/index.html",
    "revision": "bd3351b29c7d54f2ef9e78c5b26811d5"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "c8111739aafc01a836e3c95a6ff0661f"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "d0dd54963eda60413bb504c0a99b07ff"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "c343ab92893a1e69ddada6ffe0a74581"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "1b660115954ec4ec445f6702f49f09fc"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "d84fe15cf1d357f8a2ef6598a8e4ea9a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "5edb1ed9f26480207c8bd5c26fbb5ebe"
  },
  {
    "url": "guide/index.html",
    "revision": "7c054b48481cf5ffddc36462f0596516"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "4a1b7cb1d6e63ef1fffbb569e76bcedd"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "693562609b45dac750655b93a9c0f92e"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "b1f6ec50fb06da0f0190197c7eb608ea"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "6539f4b9fbaf36d23f73d35ccb1e0d6b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "8cbf04ee1ebdbbe066d90c19363bca98"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "99e6e40b014d880e250f42982764f80a"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "d105d7aed3ed4e2f4551c7f4a209cd41"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "e1ed8325ec4b06166b31034f3e84339e"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "0b14938ed9cdbfe2d94db933731330f9"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "6c8b2a7101614970939f6b9d86b8f9c5"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "ebab1c217dbcb4ee026a0c5a9c9ecd6c"
  },
  {
    "url": "metamask-fox.svg",
    "revision": "c06f3a3e804ebc7343949fdca3fdd7f8"
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

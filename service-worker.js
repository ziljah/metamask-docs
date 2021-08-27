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
    "revision": "197f10f0779fe4a34b4e234f365a17ef"
  },
  {
    "url": "assets/css/0.styles.d79a1fb0.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.9885c248.js",
    "revision": "ad08c4f500a167770eb3fb3958011674"
  },
  {
    "url": "assets/js/11.2de1d8f2.js",
    "revision": "30dfba51ec06492cd3dc8c1ba6414d1d"
  },
  {
    "url": "assets/js/12.8c4c0727.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.7348b7e7.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.ff42e3b5.js",
    "revision": "2d6ea4b316d7f6b3757ad74d86abd550"
  },
  {
    "url": "assets/js/15.dc9053bf.js",
    "revision": "e4834a4c747f8baa96c4daa27ebf383d"
  },
  {
    "url": "assets/js/16.d54c0624.js",
    "revision": "a79a0ba7aaceae6fafaf2eb60c681bb9"
  },
  {
    "url": "assets/js/17.04568593.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.16c75ffb.js",
    "revision": "1767c1f335462b4deec9e8c238ffdfaf"
  },
  {
    "url": "assets/js/19.14fabb39.js",
    "revision": "af214bf9e936a73239f7e347fe0680a1"
  },
  {
    "url": "assets/js/20.8b24a82e.js",
    "revision": "9c6ff9325b8c0a316326420d41b848ce"
  },
  {
    "url": "assets/js/21.a702fa6f.js",
    "revision": "addd86229407bca3d62043b4fb9a6285"
  },
  {
    "url": "assets/js/22.af85d9a4.js",
    "revision": "fc5265244f1f20e5341c8994b4908557"
  },
  {
    "url": "assets/js/23.f88fcd4f.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.31ebaf14.js",
    "revision": "bb57364211af4cb273a3e8d995c4e907"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.f3ced236.js",
    "revision": "092ef8939b9ac3c931fd8adfd134e1de"
  },
  {
    "url": "assets/js/27.8ed4b159.js",
    "revision": "124a5db8b3f384d372bfa267aead2cc0"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.902e9e5b.js",
    "revision": "a353e9eb3c5e6d64d20344f2176c3c17"
  },
  {
    "url": "assets/js/30.e08aeadb.js",
    "revision": "345c04332968964c026f2b7f8bc55b31"
  },
  {
    "url": "assets/js/31.c9ac0b5a.js",
    "revision": "03d433bc76378825b67bf52774d83108"
  },
  {
    "url": "assets/js/32.20e013a9.js",
    "revision": "2d31ae1958f6a5fae4cb99e2b62eeeb3"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.f9cefb41.js",
    "revision": "f33b127c16f7515530e1d16b6c42028f"
  },
  {
    "url": "assets/js/4.baa1ba71.js",
    "revision": "95efbe7ebc3321184214cb45cd3eca3b"
  },
  {
    "url": "assets/js/5.d309383e.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.be697ab4.js",
    "revision": "c9a4127b3360d3d52c1926e23ea6f71c"
  },
  {
    "url": "assets/js/7.a7bf056a.js",
    "revision": "eed5bf5a71d77b9d1eefb760731ce4a3"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.b003b921.js",
    "revision": "dfa275cb5681b841a47c7f1c70a0f365"
  },
  {
    "url": "assets/js/app.b0d42f90.js",
    "revision": "385f6e5aa43ea517e1eb2c6574df399c"
  },
  {
    "url": "assets/js/vendors~docsearch.3591cf1d.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "assets/js/vendors~notification.8ec48a6d.js",
    "revision": "8c5292ddd31a027ce1a72eef945787f5"
  },
  {
    "url": "faq/index.html",
    "revision": "b063a8441d40199b8b3eebbbc70e6d66"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "f008a48d7437b323a9938803acd016dc"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "a28a857c1482c66b5ba641b2b6c60200"
  },
  {
    "url": "guide/contributors.html",
    "revision": "89c79f430966c0a64fba5f648f762102"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "35d6c834010b8ad58e14e0ee1bf65eba"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "09366b071b75fcaaa06bb0e65ba06350"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "d95f473421e69b132ff8294d9f70a394"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "14cfc2efb460d2e481a3997c7541380c"
  },
  {
    "url": "guide/index.html",
    "revision": "f3616b7d477b3d9d9cd666fa1f90667f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e6bce28ba1ea7628ff52b4ac5a650db9"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "fd6b6cb2925b05893ef9881bb6e399e4"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "c9388fca8de5dbbaa5fc5a2e1bcf1c4f"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "54e82a66e98929a847aa84ea31ce5849"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "cf3181e0aa3557a5a158f428916dbe31"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "87c750afc158931b8009f2bb4c68653a"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "1e25d284d5c02ddf0e3c1d6825b9a4f3"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "45edd78aca9979d0241a9f7914624268"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "f836c356531a11dcc7432c9028c9edbc"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "d3855a986fdfa5824465f17cad2f7f07"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8c2c4078583526da428560b5cdf5db0a"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "fb5cc77a543b704ad101e6d0ecba663e"
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

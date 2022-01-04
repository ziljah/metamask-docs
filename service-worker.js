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
    "revision": "4556b7ff56cd6e5f6005c5c32fe41925"
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
    "url": "assets/js/14.32a9b871.js",
    "revision": "b074b033765e30b0bb0221ee084992bc"
  },
  {
    "url": "assets/js/15.66215e78.js",
    "revision": "34c725f92add42472d5996dae33413bd"
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
    "url": "assets/js/18.fd81efc1.js",
    "revision": "65b65ea7f85010fa39a0fcdd6d660e50"
  },
  {
    "url": "assets/js/19.14fabb39.js",
    "revision": "af214bf9e936a73239f7e347fe0680a1"
  },
  {
    "url": "assets/js/20.a65dbef6.js",
    "revision": "c538964b90281205331efb9b575a69c5"
  },
  {
    "url": "assets/js/21.1c392bf5.js",
    "revision": "7b88e28172a5658cc113b0b285584e2e"
  },
  {
    "url": "assets/js/22.7d71e45f.js",
    "revision": "ef4c3c1e43ef26aa822f1ad4e9f68ae7"
  },
  {
    "url": "assets/js/23.d19e42b4.js",
    "revision": "43bbe3e7676874555d726185318b3d8f"
  },
  {
    "url": "assets/js/24.f7c521e7.js",
    "revision": "186921b291402bac7b1f86935c65baf1"
  },
  {
    "url": "assets/js/25.ad74af87.js",
    "revision": "1fbb7be9be75ceed308f03661c510f4f"
  },
  {
    "url": "assets/js/26.61bd266b.js",
    "revision": "9c207e15a72e4f1013190134efe28ebc"
  },
  {
    "url": "assets/js/27.cd0c2eb6.js",
    "revision": "778c637dc04ebd31c453049f88d20ddd"
  },
  {
    "url": "assets/js/28.18d5846b.js",
    "revision": "6d4902ed053e7dfae710b816bb684171"
  },
  {
    "url": "assets/js/29.c3eb3581.js",
    "revision": "60105214c318f7eab25b74502d8ef095"
  },
  {
    "url": "assets/js/30.8bc1f253.js",
    "revision": "5a2dfe57ca4ac38ae1668c8bc64e4dae"
  },
  {
    "url": "assets/js/31.c9ac0b5a.js",
    "revision": "03d433bc76378825b67bf52774d83108"
  },
  {
    "url": "assets/js/32.6620dda9.js",
    "revision": "bb7a4c20b6e2aa2fe14f0df04e6806b0"
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
    "url": "assets/js/app.a2d2426d.js",
    "revision": "fba1cab4b93cba35e8b23ca9c5a394d2"
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
    "revision": "6b4066145127118b9938497d2f185ffb"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "6ff22104e37e5024c9366a6db7eadbfb"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "6616afc7209392bdb676a1b32a7f759d"
  },
  {
    "url": "guide/contributors.html",
    "revision": "192cc5a737c78ec65ef130b2d2f912ab"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "1490e1d33080155b189ca676a6a1645e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "aaff6e9dbaa0d52561204c4d9e3886b5"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "4468cbb01b9f8dd8457cc3207dfad5d3"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "b8a1009b1c15e2e0c33f75faface8c39"
  },
  {
    "url": "guide/index.html",
    "revision": "98b30580df025b1962a48034a6100953"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "a6aaadef322018c0e4fba62c8e619c14"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "6cd3107328f6511a8980c5ee97853330"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "d354d0450dacf1db1a17149af16317c1"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "caa18de6f7bde63df5d11305b67630a3"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0c8e07ff84db1d6895a075fb12962174"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "2ded0328ed3e50b616b67a7740b6e19d"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "0a5799ef03536584a382956bd797f174"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "1028bbd8239fcf331793f99487b3da7d"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "293aae6d8eddce039a236712d143e688"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "6cd7942c9f9d29166103573156051378"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "00908f6bdbd64a4911f58c758645239d"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5312641b379f4df18593fb8ff4546d17"
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

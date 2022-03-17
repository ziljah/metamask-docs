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
    "revision": "5dfcd49620c23be14a5d76d42a29a945"
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
    "url": "assets/js/14.74fe7ed2.js",
    "revision": "eac8243d4a7cc7e3a9596eff0aa8cf6b"
  },
  {
    "url": "assets/js/15.5d58bde3.js",
    "revision": "7e6a50ddf76fbcdb74501ca84d3959bc"
  },
  {
    "url": "assets/js/16.ef574c2c.js",
    "revision": "06f0275bc382aa8d929d7b2fadde9ede"
  },
  {
    "url": "assets/js/17.c2cc9bb7.js",
    "revision": "fa7b64ca0ba4feae10b5bf7c3e1a1b75"
  },
  {
    "url": "assets/js/18.e3312806.js",
    "revision": "97e5c6eefe60fb54a8ba94914759f41e"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.d1ed9ab7.js",
    "revision": "6e0852c509a29d17941d77ea58cc7ce2"
  },
  {
    "url": "assets/js/21.7cd19eea.js",
    "revision": "ece2938e363d7e5fcf9fe212e105bc1e"
  },
  {
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.f88fcd4f.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.41489810.js",
    "revision": "91ddb8b48a3175e3538d66575f08702d"
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
    "url": "assets/js/27.978bfcab.js",
    "revision": "20c54e1f894a2f3cb869f040678cce12"
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
    "url": "assets/js/30.8ad668b1.js",
    "revision": "b93e6d84a522595f271771e0f4bb6c48"
  },
  {
    "url": "assets/js/31.80e09e40.js",
    "revision": "ee529263e3458c20eb884cd89dfaa1aa"
  },
  {
    "url": "assets/js/32.6620dda9.js",
    "revision": "bb7a4c20b6e2aa2fe14f0df04e6806b0"
  },
  {
    "url": "assets/js/33.0c113ba0.js",
    "revision": "bf77dd989851e7183ba743ea31ccc6f8"
  },
  {
    "url": "assets/js/34.a8173623.js",
    "revision": "4483d7b1a589ae46a9b3d457750e3b2f"
  },
  {
    "url": "assets/js/35.ff867924.js",
    "revision": "9700852e641124190ba0c453b8be0c0e"
  },
  {
    "url": "assets/js/36.f59cf17e.js",
    "revision": "61583d1c7275eb79facaa5792b8ef8ce"
  },
  {
    "url": "assets/js/37.eb19e0d7.js",
    "revision": "0eb9ead751860bd2469f9b4f9910e87f"
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
    "url": "assets/js/6.a0d1e866.js",
    "revision": "29f718453c76590851211e3db25c8aa6"
  },
  {
    "url": "assets/js/7.50a770b2.js",
    "revision": "5604cecaa689454aa86376434b0c40c9"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.c87edbeb.js",
    "revision": "d517bd47317ad81e6ab16a0e8b3b6124"
  },
  {
    "url": "assets/js/app.da9e6996.js",
    "revision": "fc900879cce9b5bf2b5a94ddbf1eeb2f"
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
    "revision": "8e903dc2934403719f9dceebe5d0993f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "feace1387e26a6a0902e0354869c4514"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "a373884c2774014c46ea9d9029ce8fdc"
  },
  {
    "url": "guide/contributors.html",
    "revision": "66c8dde24b8ded4b7220ee95b0b39d48"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "ba26bf5cdfd71ae5d00d3d90d83ae927"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a8453e469aafecdde850996fce57a0b5"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "b71eba80c30c4b0bc9a14cb0ce0c941e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "fd4e0faf31411a3bd7c5e2719f32ad26"
  },
  {
    "url": "guide/index.html",
    "revision": "40c1d49805f8823d74b11876cb5923f4"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8c9ed7b05bc55b536d53d5f448de0e43"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "b880437d9786fbcb58d2d7300b969f1e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "42ff2f4887e330dbcfac02d14f3d9d56"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "cac916b7d7b8fdc0e7755629c57a6b6e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "91ef3900e48df63d1c1802957d455a8f"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "e38c8c7ea1f1f760f5d1bde1c8e026ef"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "8f0dabf8a373d85d4668d1685648ec3e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "632c81d5bdfebccd5aa4cc1b24223ed2"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "fbd0a00691a79c51fbd867d70b938352"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "292cb28fb9306b3c0706b94abcc31517"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "f86022315163c0058b16793c28b80a48"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "ab55ed018ab6085a84610c475e64b969"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "ded6bead9a09219d113b48e08ba6ad72"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "0130ec7d8e0812d50e4c311c91750bce"
  },
  {
    "url": "guide/snaps.html",
    "revision": "97b2cc3cf26386f13b7523c489317590"
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

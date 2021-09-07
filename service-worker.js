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
    "revision": "02532c7f1208dc8eca141a60005c9e7c"
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
    "url": "assets/js/15.f9dcc7fb.js",
    "revision": "4a497f65f7e031ef4a8f960a5708d19f"
  },
  {
    "url": "assets/js/16.d54c0624.js",
    "revision": "a79a0ba7aaceae6fafaf2eb60c681bb9"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.729eeed4.js",
    "revision": "1e3faf8a54635f99467d149230a7a96c"
  },
  {
    "url": "assets/js/19.ee4b1e1d.js",
    "revision": "9cbff5bc32514ce5f59140985fd54cc3"
  },
  {
    "url": "assets/js/20.a65dbef6.js",
    "revision": "c538964b90281205331efb9b575a69c5"
  },
  {
    "url": "assets/js/21.65ca1b3a.js",
    "revision": "9ed9db630c2351bb3c177e54f3ca3612"
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
    "url": "assets/js/30.1d63ab4b.js",
    "revision": "b7a279b15c3a4b75b365126c57582840"
  },
  {
    "url": "assets/js/31.3b898d5d.js",
    "revision": "76310584d63389029a5758dab302c7e7"
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
    "url": "assets/js/app.49f14f40.js",
    "revision": "be1e28eda63ddc1ddd0ab5fb8eb85363"
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
    "revision": "fe86161a4cfd5d045c3f8b16ab9d55da"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "03d17232b60ce63788ce5f18f113756a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "a57cb42d45aef056693e9f8de1bbde25"
  },
  {
    "url": "guide/contributors.html",
    "revision": "baa1d13891292caf10549f8d4c69d987"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "fae1a0cfe96a2da9b66ed23762a9e418"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "85306c00cda34683a84ad8589ff8f5d9"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "372d37798af33e7e07633ddedefe2d4a"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "93eaaa005d86c6fa5b9126fa46b0f3bd"
  },
  {
    "url": "guide/index.html",
    "revision": "905358fc06c9fb181ab448aefe927c43"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d198e0b95b94d28f1ecae2926a34a1e2"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "15b79a1bf1e5a494130b94abf0cd0944"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "da1ac35dd7567c1ebe5aa513de0115df"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "0cf724336a635efb5c1a216889616493"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "36464a55e45c0b5d6dbf39e4e0be83a5"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "d3c016f89d0c76ec218016e31354df99"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "4c943f2d1b608aaf9898e5eccf338103"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "3300afe6f19a842e17019c8d8ffb1c35"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "e80ebbe9cbb7140b4bbaee5cf464939c"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "6c5f29dd557688a227820482d8c0dec4"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8b301e108bf946db49e1766e178fc720"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "1f5281ea73e525a502d7778f1147fe8d"
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

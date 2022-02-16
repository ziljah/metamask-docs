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
    "revision": "9778a6bd9318cb588bea6c3845724f14"
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
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.3d569f46.js",
    "revision": "09b59bd21092b85b72a96940f310b7ca"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.772086ab.js",
    "revision": "2cf0d5a330b2e053a62a214b27421871"
  },
  {
    "url": "assets/js/21.01a03f78.js",
    "revision": "6afc41029cee3ef9bb40d09524b5c113"
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
    "url": "assets/js/27.978bfcab.js",
    "revision": "20c54e1f894a2f3cb869f040678cce12"
  },
  {
    "url": "assets/js/28.01812e92.js",
    "revision": "dfb852c1541d7c1dd0f26f8754aa25ac"
  },
  {
    "url": "assets/js/29.c3eb3581.js",
    "revision": "60105214c318f7eab25b74502d8ef095"
  },
  {
    "url": "assets/js/30.8aff618b.js",
    "revision": "16f8df1e7dd0f1071f79f596013b9df2"
  },
  {
    "url": "assets/js/31.80e09e40.js",
    "revision": "ee529263e3458c20eb884cd89dfaa1aa"
  },
  {
    "url": "assets/js/32.8107c7d5.js",
    "revision": "e72c6d0fdb1d95514c936c9fd33a45aa"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.75142449.js",
    "revision": "7453a270c8308987db7f09e5a39e66f2"
  },
  {
    "url": "assets/js/35.cb029de6.js",
    "revision": "11dd455b36a0da35ac8b3935a725fff4"
  },
  {
    "url": "assets/js/36.5adc87c2.js",
    "revision": "202216678b9c96b53ddf57878b50fd5b"
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
    "url": "assets/js/app.18f0ef51.js",
    "revision": "cdc74b8dbc7effac8f14ee39b52135c7"
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
    "revision": "b88f29c30642c38199e57cf9e4216215"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "ddea1364163228231c02b03cd6c3205d"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "775c01c02d3bb83335e164a40d835435"
  },
  {
    "url": "guide/contributors.html",
    "revision": "119da96e0e33763590b1034c0a4ecd7c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "eec11b3d2296c21e51af6969a444c6d3"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "491710ae1838818259e3f125b4cf983b"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6514996d0dea7385e6a31415c4187f0e"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d48d76e0e01e4eee77b9ebc109642e8c"
  },
  {
    "url": "guide/index.html",
    "revision": "177e265e014610045f19b42c818c4904"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "eef2f82f4187bea655d0f306ac9d3259"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "4726fde673033a3b44cbc5dd6f1f6c76"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "a875ed4287b16161a2c65487f8c7e0b4"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "1a612f4e4aa264cc2a8d96fc8a091855"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "6cb0301dc41ab5efc08109e2a3041f98"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "d4a44d71415df2453b2b681a32eca9ea"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "9b3781d8beffdcb1243d032b294bcfeb"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "b1830c3da5afb183235a17af7ade51f8"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "319e00e12e083a9bef9bc8582037ca97"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4c136e6d5dbdb074a4b3dd7558e55bb0"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "92df3289068b47f2b3bb2e467c3920d5"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "2d102abdeb286f52f3ac87cbdf7d5ce7"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "1b33621d528cbcdd2d87677daa5fbad6"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "b8989456db1ec868d5439988ad4a51ab"
  },
  {
    "url": "guide/snaps.html",
    "revision": "1ff03bb38280e7a7a9db82e6ac4d82c2"
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

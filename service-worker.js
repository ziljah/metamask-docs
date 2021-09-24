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
    "revision": "e13a071c560f655c264d79040b89aeb9"
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
    "url": "assets/js/15.4536993e.js",
    "revision": "c46d38ba85894b2f33fa7afcda4d8f60"
  },
  {
    "url": "assets/js/16.9fdce3a8.js",
    "revision": "908ba7e8f5879a33ba4d3e993f722873"
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
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.4b085eef.js",
    "revision": "606350382f1c97299632159e981665db"
  },
  {
    "url": "assets/js/21.045acb34.js",
    "revision": "ab6b678d5134fa66ffdfff0ecd4299a3"
  },
  {
    "url": "assets/js/22.20fc3329.js",
    "revision": "94667b900caf8dd04fa0c5c49a6666b1"
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
    "url": "assets/js/29.a7dda938.js",
    "revision": "416f220ad55c5d6f1629300a6303249f"
  },
  {
    "url": "assets/js/30.362a4ba8.js",
    "revision": "c5eef79392d3afe334c9396da33c2e48"
  },
  {
    "url": "assets/js/31.3b898d5d.js",
    "revision": "76310584d63389029a5758dab302c7e7"
  },
  {
    "url": "assets/js/32.107bb8df.js",
    "revision": "07013aeaa2884043f4d9f0b4b089077c"
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
    "url": "assets/js/app.afd3bf06.js",
    "revision": "953790573b58f1035ed21c083e90670a"
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
    "revision": "b25b22e09bbe975b52863664625d1b49"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "674c383c2fd469fd69f4fee602929f18"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b800bdcf6bd8328bed42720eff5ada78"
  },
  {
    "url": "guide/contributors.html",
    "revision": "f8cbc1010fb1b655f4531e20392c4173"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "ba89eefc775894bd097b45c1e1b27b6d"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "ec1f9f5cf264bb2d2a5dd1d327e1aceb"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "931039c5140d76fbcd4501afddb909fa"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "86f38fa9f556f5a72580f0a0b3aae7c2"
  },
  {
    "url": "guide/index.html",
    "revision": "083297d7114ff1f9b4939281cb4c16a4"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d02ea74f368c0c8f5ce40d92216b3d97"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "5fc0b012b13d57da7acf588ce5f138bd"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "a55d14ca1eb836fa5a397ade830d23d8"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "d3b5c13a8034b59adc9ee1bd2669cb7a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "4b57ebe043b755c2ae9e92b1a6e9365e"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "825e454fdec537c618b283d3f6e07818"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "d6f4eb738e2aceda35d3d251a66a21aa"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "4f325ec4dae6ce724a8b90879cd46225"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "ad3ddb5066e5a1aa22887d4b0cff4513"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4e0ae1bcbf349968d3c00c61ca96f4a2"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "14419d5ec11be26dc8a7144099b0c7ef"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "9af6862bbe2a83d157d5ca9fc96b78c2"
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

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
    "revision": "33366264de8c3822d317dc10a727bb8f"
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
    "url": "assets/js/18.91fd6703.js",
    "revision": "062626d1bf1742c6e42c824bc2812d85"
  },
  {
    "url": "assets/js/19.101c259c.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.aecacabb.js",
    "revision": "271ff1471381a6677f09d3bcf701cb75"
  },
  {
    "url": "assets/js/21.daa1b6c2.js",
    "revision": "c2b6478312426c79bfb1b9c95f0b10bc"
  },
  {
    "url": "assets/js/22.a4f7a7e2.js",
    "revision": "21d2035a2dd8fb6176bc4af4fdc25120"
  },
  {
    "url": "assets/js/23.743792b0.js",
    "revision": "bc5e7b347a113fa5f734f23a4803e36f"
  },
  {
    "url": "assets/js/24.199174d6.js",
    "revision": "fb29e371adee6935dc6134ea3d927913"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.f8f75767.js",
    "revision": "8bbeb7ca2c6e42ea07d339def5b99ced"
  },
  {
    "url": "assets/js/27.908a9482.js",
    "revision": "2f3254456e1383668040d42278486930"
  },
  {
    "url": "assets/js/28.cd212862.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.f0b649f1.js",
    "revision": "e4715fd369328ddf2483971dde4f5e33"
  },
  {
    "url": "assets/js/30.eb9b7a0e.js",
    "revision": "553ecfa052c990d1c74eb312b832c385"
  },
  {
    "url": "assets/js/31.4746cd25.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.436bf087.js",
    "revision": "ce683c3558b3b63a8accc09582aacb4a"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.48281b05.js",
    "revision": "34f3db4aa6336390e1dc7b76beb7dfe8"
  },
  {
    "url": "assets/js/35.1e1004a0.js",
    "revision": "825c9fa269562d6c4188f954070b4f70"
  },
  {
    "url": "assets/js/36.5a22527e.js",
    "revision": "e7933869fe719f0129d5a4d7ea6aba30"
  },
  {
    "url": "assets/js/37.65a76f70.js",
    "revision": "12253d6d01670f01d3ac00e4b4cd2b2e"
  },
  {
    "url": "assets/js/38.1f5584be.js",
    "revision": "bce7e451274ad207e47a0aa037668cf7"
  },
  {
    "url": "assets/js/39.ebd1c546.js",
    "revision": "75bcebabd87d16c7a2f53292ef3c49bb"
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
    "url": "assets/js/6.155302f2.js",
    "revision": "522d59cf549844ea05278011e181899d"
  },
  {
    "url": "assets/js/7.78832be4.js",
    "revision": "9be91a163d672687fe542aa288b4d22e"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.026bbad3.js",
    "revision": "379b1c03990d9982f8d38722a21dd2b5"
  },
  {
    "url": "assets/js/app.3ccbd546.js",
    "revision": "b4e8149a1e6afb1d753c50e3cce73cb6"
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
    "revision": "b3e24f09ece4d744e590735cbaf15c2c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "2a71db03c7a8922bc55cef710fd893e7"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "52e277bee91732cde5cbe816943c13df"
  },
  {
    "url": "guide/contributors.html",
    "revision": "5ce017d57e5b811f2a26dee8ffb7dcdb"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "4e8f977e0134b33ba36862c66b9be6e8"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "d05c5c3fe0ac472edd29b7badbedf752"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "0ae0b45acef7ea4e8c03003104de663c"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3a8b3d3de3db98332e7756262158e3cd"
  },
  {
    "url": "guide/index.html",
    "revision": "903b34b40ee7e14fc1806c6725211568"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "e62daad59fc6e5b35c1d8d5cebf0e308"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "f44f71fbda21f36edbaacfd5b6f8991c"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "b4f98085c5531851057a33d3cf277f1f"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "34512f8be089040072ae442994d415f1"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "0d22550112f0c989a3bf47ba6f9b5d79"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "dbaab44f60967a8b22a7c8594f65c6ea"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "ece6319a1b67a4956537b1fc1112e523"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "be1d013e4727ffc5a57fed881fba6d92"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "f36bcf53c5f96da93e08ed1e46131df3"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "62f30ecb4902d89df36a317d95436bc3"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "53c1e73f4c1533558730b641ec4e2d9f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5388c06e1f5bf9da3875443fd273c151"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "aa955eef3eeeeea1d773cd5786d5f377"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "70d6f69d1a57a074bae7a407b8b9af66"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "acb61c48843cf053f9203412a443fda9"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "6ea75a06aa6f7ec6956d38fe235a5c0b"
  },
  {
    "url": "guide/snaps.html",
    "revision": "3e2035bcf85a38dff579866bd8435911"
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

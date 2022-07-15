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
    "revision": "3061f09a920f7a3da72716154f41cf97"
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
    "url": "assets/js/15.5176821d.js",
    "revision": "8ec24f0eb88d8774198adce47e270372"
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
    "url": "assets/js/18.335e19b8.js",
    "revision": "35b597ce6cbbc06123cdd6d063533a7c"
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
    "url": "assets/js/21.194b40e4.js",
    "revision": "02fcdf4298a5f7374e3d466873aea57c"
  },
  {
    "url": "assets/js/22.66905b54.js",
    "revision": "84bba4cb9ec83eb6a2a4bbedf8d9e316"
  },
  {
    "url": "assets/js/23.abf5e998.js",
    "revision": "bd0d1135cef3b7e7ef8ab7eb6cfea92f"
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
    "url": "assets/js/30.a1c63691.js",
    "revision": "f4c8dd0be3bc6501242e725a07354fe1"
  },
  {
    "url": "assets/js/31.4746cd25.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.09d612a5.js",
    "revision": "50855a1b32e00ee936578ba3996b83eb"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.41735fb5.js",
    "revision": "b328239eab7d73cf2b60abefc2108d92"
  },
  {
    "url": "assets/js/35.a8a51582.js",
    "revision": "8a40cc0869582cecd2f4d4dc80c75dd8"
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
    "url": "assets/js/app.014a66ea.js",
    "revision": "30dd5d15e3609b74060970c819c00147"
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
    "revision": "24e62ec03d03df07cf51e733388b757c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "22f6964259589d8212ef13b590e2fd08"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "b64f15ca83855630c7753e82055d8150"
  },
  {
    "url": "guide/contributors.html",
    "revision": "ad7b6d35e7d64c711f499f6d6c722129"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "c2065221844fe1ea93bfbfd47291ac52"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "59239d3d72dd547c06ee0810f983aefa"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "44eb30135804507dc40028a1ce1bdb98"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "ce2d7c282918be8dc8140c47be2fbe66"
  },
  {
    "url": "guide/index.html",
    "revision": "6f568b6a304aeb7f8b2390c182459a98"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "802b63dab5fee01a51f2e178b911c78f"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "f6e9e07ce98e0a03b65d4474695177ba"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "8dd382e55ea85a0db813ab6981bb4bb4"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "1a4acf5b43c9753531c1f833d7244e79"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "035488628a423946332a46650bd76905"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "eb321e3532987e56b983c3626f37496e"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3f344d0ecd551b3c76dff5c1a418f051"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "98442283958a6b938f941c8c0f0b7a3d"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "8b605903f34fb8951851f16b9209d09b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4cedc4bb0e63d6a829636d1bd7cfa74d"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a0f0e7167a3d56388894346078314eac"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "9c21c0c9370385767fe9471f30302e08"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "cf65c535e43d759b3e0369592caefdbf"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "b08d1e432dc1e4c30dd2c952283f00b7"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "60f43a00112764a51d306c73955994ab"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "8efc8bd5b4a0ab68a6260708d0cc71c1"
  },
  {
    "url": "guide/snaps.html",
    "revision": "1245c31c30d2c7af7c51b642ba4b6970"
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

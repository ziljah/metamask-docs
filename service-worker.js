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
    "revision": "30408a9a4cce174014506c9c3d34968e"
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
    "url": "assets/js/21.daa1b6c2.js",
    "revision": "c2b6478312426c79bfb1b9c95f0b10bc"
  },
  {
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.1c341684.js",
    "revision": "ad147f22e00ea54b78d23b86506a4852"
  },
  {
    "url": "assets/js/24.96057b4a.js",
    "revision": "4024d566eddeb4bb079056a5f5c352ab"
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
    "url": "assets/js/34.11617ff1.js",
    "revision": "9384a766cd61fe580674e3d37a6a4ed6"
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
    "url": "assets/js/app.27a7b51c.js",
    "revision": "9075de9d7bb63f47d62527b8f5e631c4"
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
    "revision": "206241e6710dc66bce4bb8d5db2c1bce"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "c2d3acfc3d93d63d62acac5902d347e4"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "33a766002381d494a80d1d103612b51c"
  },
  {
    "url": "guide/contributors.html",
    "revision": "2f86787c8e512f7da90f18c96aefd88f"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "1f8ae7903e6363d598592770dc9ba05a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "db7272a32963896ae1f65cf2c9f42b65"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "65070050b23cd9597717b6d428f5b765"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "49077ff756dfb600c13da78e13f1a25b"
  },
  {
    "url": "guide/index.html",
    "revision": "03b61eb966491f11d374e6750f347000"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "19346b7e2655db408f21000dbf9753ca"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "cda53b3ae672241739bc8a3e60270316"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7f9794381fe2d9e869ca410d4936905b"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "049cebcd6017895be1ca5ddda99eec53"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "320418aa83bd7b79e31fe07bfc1c3b39"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "aefba030f3dd25dc0e80c9fdcb906850"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "e8dc5f635ae4532a27f22d3a9957c2e5"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "415d52ab165ea9ca96ced1e10691347e"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "9d89820fd2d81227ce6198906b930b5b"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "86aa44ae8b1aa9ba987819bf754066ad"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "f054be9455df9c35506ed224d36131c0"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "1156215a158a0165dd220e26bd8edfa5"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "c0752a93136e7a91676729aaf0d22d4f"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "a116d3e17a4ed585eb8925fe46b5c4af"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "493eebbc84e8109602250a70acadf424"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "497a5c86c2995c65c3ee64a2c291fdfc"
  },
  {
    "url": "guide/snaps.html",
    "revision": "95e2b763c7852df1de635b2d5c3669df"
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

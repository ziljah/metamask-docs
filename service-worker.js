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
    "revision": "c0cb176d934528c59e8382bae3074164"
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
    "url": "assets/js/14.dc316dbb.js",
    "revision": "377a7b56efcb576cfaf80e240b99bf7b"
  },
  {
    "url": "assets/js/15.53c9cf0e.js",
    "revision": "cbb8cdfbe7ee9fece4312b78e2f6c827"
  },
  {
    "url": "assets/js/16.9386e194.js",
    "revision": "6ac07b34dcee53049463a49ce8343f07"
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
    "url": "assets/js/app.78495bfd.js",
    "revision": "47eee17e705c9dc5189964c7993525d4"
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
    "revision": "c03b11ce5c881d84042be1486520b469"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "f19192d97ef9ac0eb3ee1f04753e6068"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "678f3029e1897c9e9cdb22bcf8dc1261"
  },
  {
    "url": "guide/contributors.html",
    "revision": "d73eb2ee3d1754c8e5e314a2fa14a81b"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "37b87c4484a32ceb6d84d488f1091dc5"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "55ff7b36af8d5010473b75913576d541"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "3e8a1105cb7df0dc4d3e080af77fcb7b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "aa8513118d9e9c80268fa3843a8d5747"
  },
  {
    "url": "guide/index.html",
    "revision": "057c5644753c304fc6e82df5adb26981"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b36776b5d4cf97e42a5a5ca80d11e533"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "318d42049ed4bc6c233f46951b4bdd0c"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "69ed3a655b29a9f320ef3709118f5eed"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "1e8637c4d37bf987339982792db2ed57"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a2374c21670615f17ffe2e83c202dca9"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "1a32b542b928e70dd36bd5cd8b5d3937"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "8cf2b998cea8544a7140efe80632604f"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "0d6d13a3bc69475bd1797730f30a10cb"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "f60dec29ca345a7404cb0dba26e89a83"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4b7467e4303b95c00b07a76cfd1a5376"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "37bfda05a89dd47b2923e5352f237176"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "1ea13ef01abb536b274508a4467dc5f9"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "f856f15864ad5981498f1c662f5f7c00"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "4d5f2b21ba3026a509e0c9a59ea7d81a"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "95dc38e84af7a59b5c06042df312f304"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "37c8d722b7e3ab56af690337ff0b15f4"
  },
  {
    "url": "guide/snaps.html",
    "revision": "d5911656a47e136796ae4d8a53023015"
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

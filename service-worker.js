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
    "revision": "239aebebdeee78f1b9496fcad1cb5ac4"
  },
  {
    "url": "assets/css/0.styles.12c93c8c.css",
    "revision": "959aee458424e46d5c2f3906d8b5bfc9"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.4b9056bc.js",
    "revision": "ad08c4f500a167770eb3fb3958011674"
  },
  {
    "url": "assets/js/11.3b6010c7.js",
    "revision": "30dfba51ec06492cd3dc8c1ba6414d1d"
  },
  {
    "url": "assets/js/12.cf53c375.js",
    "revision": "50596d7873dfabb6e974f608ba76d4c5"
  },
  {
    "url": "assets/js/13.0624a0bd.js",
    "revision": "658a55e4b29d62b7e10dac661bae7512"
  },
  {
    "url": "assets/js/14.0049aa5d.js",
    "revision": "eac8243d4a7cc7e3a9596eff0aa8cf6b"
  },
  {
    "url": "assets/js/15.a299fa36.js",
    "revision": "357a226755203f259b9402ba6f021117"
  },
  {
    "url": "assets/js/16.32a14945.js",
    "revision": "bac455ea6b053a17181176f5fa00f0f4"
  },
  {
    "url": "assets/js/17.6f6a6031.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.9f8d6a15.js",
    "revision": "35b597ce6cbbc06123cdd6d063533a7c"
  },
  {
    "url": "assets/js/19.ef61ef04.js",
    "revision": "9af614c9dbe4d716587807e450686b5d"
  },
  {
    "url": "assets/js/20.26279094.js",
    "revision": "271ff1471381a6677f09d3bcf701cb75"
  },
  {
    "url": "assets/js/21.6e5f8b4c.js",
    "revision": "c2b6478312426c79bfb1b9c95f0b10bc"
  },
  {
    "url": "assets/js/22.f78520dd.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.75d59452.js",
    "revision": "ad147f22e00ea54b78d23b86506a4852"
  },
  {
    "url": "assets/js/24.091acb11.js",
    "revision": "785305ab369c228c0700a39c1eb815c6"
  },
  {
    "url": "assets/js/25.769739b2.js",
    "revision": "1fbb7be9be75ceed308f03661c510f4f"
  },
  {
    "url": "assets/js/26.92a9d938.js",
    "revision": "8bbeb7ca2c6e42ea07d339def5b99ced"
  },
  {
    "url": "assets/js/27.5fec9149.js",
    "revision": "2960a82ccaac356ae401ddf476326b31"
  },
  {
    "url": "assets/js/28.1c285bef.js",
    "revision": "88bb8249c204588a79d55064ffc79fec"
  },
  {
    "url": "assets/js/29.baa6ec7a.js",
    "revision": "e51e365ea46773d4f277e0e63af3df46"
  },
  {
    "url": "assets/js/30.c4e308a6.js",
    "revision": "e17ca79ca77386e325f7cce67e67fa6f"
  },
  {
    "url": "assets/js/31.a3e3a668.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.bbd6c609.js",
    "revision": "9965d4b9d99249a69d8da8676391f646"
  },
  {
    "url": "assets/js/33.9abc38a5.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.bcf953ff.js",
    "revision": "9384a766cd61fe580674e3d37a6a4ed6"
  },
  {
    "url": "assets/js/35.a652579e.js",
    "revision": "8a40cc0869582cecd2f4d4dc80c75dd8"
  },
  {
    "url": "assets/js/36.809d48c6.js",
    "revision": "e7933869fe719f0129d5a4d7ea6aba30"
  },
  {
    "url": "assets/js/37.8cdefb11.js",
    "revision": "5a076c31d4f454093f4aa5866b24f3e2"
  },
  {
    "url": "assets/js/38.6f9c0038.js",
    "revision": "b1a7ec1087ffb94da4ee5bbe01d0e1c5"
  },
  {
    "url": "assets/js/39.5bb58909.js",
    "revision": "75bcebabd87d16c7a2f53292ef3c49bb"
  },
  {
    "url": "assets/js/4.dcf10488.js",
    "revision": "95efbe7ebc3321184214cb45cd3eca3b"
  },
  {
    "url": "assets/js/5.b6bf2fa6.js",
    "revision": "615169aa7cd4a4ba2f32f2c4d22e05ae"
  },
  {
    "url": "assets/js/6.b06d2227.js",
    "revision": "522d59cf549844ea05278011e181899d"
  },
  {
    "url": "assets/js/7.4a4e875a.js",
    "revision": "9be91a163d672687fe542aa288b4d22e"
  },
  {
    "url": "assets/js/8.df4b2a85.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.44d3d9c4.js",
    "revision": "379b1c03990d9982f8d38722a21dd2b5"
  },
  {
    "url": "assets/js/app.6d438efe.js",
    "revision": "50979f21c4e1ae190b5418c684944237"
  },
  {
    "url": "assets/js/vendors~docsearch.4871985a.js",
    "revision": "2411673b2e59774dec123da7c76a3a06"
  },
  {
    "url": "assets/js/vendors~notification.fdd6e850.js",
    "revision": "8c5292ddd31a027ce1a72eef945787f5"
  },
  {
    "url": "faq/index.html",
    "revision": "0e2616bcac582d46fcf7fab01f533ca2"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "cd8f13b74ecaf7432795b1b819c4b033"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "465e77099f4883598a2330c05eae6a91"
  },
  {
    "url": "guide/contributors.html",
    "revision": "6571ed1948d9fa3a4770fb9b951b9aa2"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "970f48fb8336b991a13b3b68fe22f23a"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "2ad951b8d1ccd5c10557af14447e624c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "926dd4102f6db34363f67a9e8937efbf"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a573cb3178f89a32b674cbea1d65d094"
  },
  {
    "url": "guide/index.html",
    "revision": "9c375793252ac169b547cc747d0218fa"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "af36e1819c99ce53567fb3ebde5f0a24"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "1dbc680470acb3634533f399135f59f2"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7f3d9f1f9627586be8610bb6971b5b1d"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "1fa64c033bd5792fddd775942fe3a603"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "e413bddcca6a928565255991e84cc9ef"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "215967d3e576a3a30419cfbcb376eaba"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "3c1d82699e03ec5391e09e9c1f4e8d28"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "8fe66ae218f45c4ccf454dfe4e5e95ac"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "81ae290a8b8553a68094db67092690be"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "8340e7a5aa435833df45f08b1e91e82b"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "8487ddc26ac34b041180af1d44b92038"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "ac2c8d719b0e6ea4432d9d82f7f4d3e1"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "f8bdad6e1cd67559d45ea75b26c196fe"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "f730ee5d6791e43ed2e4e615625a722e"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "3438afcdd7da01cf2b8745cf13053e50"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "5e2b9e035eddbfbbc65f5e091ade89fa"
  },
  {
    "url": "guide/snaps.html",
    "revision": "27138af3fcdba1ce8d3914767cdafbb3"
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

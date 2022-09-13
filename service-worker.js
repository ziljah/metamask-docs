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
    "revision": "d4adab07e3939dc678b3c9a1d82daaaa"
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
    "url": "assets/js/15.b1d381f1.js",
    "revision": "8ec24f0eb88d8774198adce47e270372"
  },
  {
    "url": "assets/js/16.96de34ce.js",
    "revision": "06f0275bc382aa8d929d7b2fadde9ede"
  },
  {
    "url": "assets/js/17.b406b087.js",
    "revision": "fa7b64ca0ba4feae10b5bf7c3e1a1b75"
  },
  {
    "url": "assets/js/18.d87c2c74.js",
    "revision": "8a0c2cdf1bc7d80e835518a5913257ad"
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
    "url": "assets/js/24.5d990e3f.js",
    "revision": "4024d566eddeb4bb079056a5f5c352ab"
  },
  {
    "url": "assets/js/25.1a913d34.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.fe03db26.js",
    "revision": "d58d263c61d8e1320fad77a063c43f69"
  },
  {
    "url": "assets/js/27.2cdb5f95.js",
    "revision": "d4311108424f544cb6c28864fae7dc50"
  },
  {
    "url": "assets/js/28.13c08488.js",
    "revision": "f6df04ad9ccd5dd17f03075fa929bafb"
  },
  {
    "url": "assets/js/29.f29058fc.js",
    "revision": "e4715fd369328ddf2483971dde4f5e33"
  },
  {
    "url": "assets/js/30.9520a642.js",
    "revision": "bdea70812e398c5a4fe702af1dc1a0dc"
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
    "url": "assets/js/33.a0909b3e.js",
    "revision": "f56f7a047555f4142bff6c06f43bc711"
  },
  {
    "url": "assets/js/34.1840da37.js",
    "revision": "7ddc88ba3b23c4c32ef49668c090ae45"
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
    "url": "assets/js/37.7453d955.js",
    "revision": "372466d63c77df83e610d66adfe83400"
  },
  {
    "url": "assets/js/38.4a3d8782.js",
    "revision": "bce7e451274ad207e47a0aa037668cf7"
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
    "url": "assets/js/app.fa202899.js",
    "revision": "8323d34cfda79361cd4c2938a24066bf"
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
    "revision": "189cb7bdb37c4f63c041064c0bf83320"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "b309f8babe36610230f5539d496a7583"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "8b479b2b98cd4d2bf66c023b2896d65f"
  },
  {
    "url": "guide/contributors.html",
    "revision": "61d51ffad3fbb8d74fd16a6e56395104"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "22e2f5d726d04869058e5090b00f007c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "d2792b0104b0133708946b5f01b66cf9"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "0f5cf80667823b77ba40ece9674de1e8"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "8b0cd5ec260ea38210b990d5818d7a66"
  },
  {
    "url": "guide/index.html",
    "revision": "0dd4b75eef4699cda1d859708f4e5fa3"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "481a32e11a3d7b8962173250da0dd9fd"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "2eeab5a8837de8b479eb2b44d8340d00"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "bab4eee07be29ec1af83de44e82555f4"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "6406b331b6905c0959d83980557d287d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "977bbe01a91e8b6501c09f0c37a5f5a9"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "36eba59c47a590bd1e9dbbc6543c4b29"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "b7c94683caf2971d7f117a252cb1401e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "20356abd929545a0488860ca42d9c332"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "25cf3cff14499aaf836d7e2b77d5e2ad"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "2e5ec5509af2a381a834e302d20aeaee"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "07b7ccc84e22cd4d1e47559e43a00e71"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "ea87417736d92c0f4e4423f9e98b65a2"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "f9e916a4c9f50ac93b10167f66d15227"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "0b0b0d6b07866883badf6c0e991874f2"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "ee4387f1b8ecdcd64e1d3bf5e8f36f65"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "5c214663485ac39cd5ad574833eb5cda"
  },
  {
    "url": "guide/snaps.html",
    "revision": "26bd8c4a1b7a0046289e6362926446d0"
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

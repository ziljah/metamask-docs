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
    "revision": "b93a5a1ba0838cd8c2a2e997b5ea3cb1"
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
    "url": "assets/js/16.f082e1d3.js",
    "revision": "6f46f98759448ca7c7e558cd8e56d0aa"
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
    "url": "assets/js/19.1270d05d.js",
    "revision": "8a4442a57022edd866c0bfd57ef2726b"
  },
  {
    "url": "assets/js/20.51118bd1.js",
    "revision": "c46371933afc7ff08b4babc8ba37afcb"
  },
  {
    "url": "assets/js/21.6e5f8b4c.js",
    "revision": "c2b6478312426c79bfb1b9c95f0b10bc"
  },
  {
    "url": "assets/js/22.9c4b1754.js",
    "revision": "addaa4f202a34f952bd7822c305add1c"
  },
  {
    "url": "assets/js/23.838688e7.js",
    "revision": "bc5e7b347a113fa5f734f23a4803e36f"
  },
  {
    "url": "assets/js/24.5d990e3f.js",
    "revision": "4024d566eddeb4bb079056a5f5c352ab"
  },
  {
    "url": "assets/js/25.b90b88a6.js",
    "revision": "2205d7f5567c1a5f8aed53a83c89f387"
  },
  {
    "url": "assets/js/26.84ae38a5.js",
    "revision": "23ef67bf96aac6823a5733f8f150267c"
  },
  {
    "url": "assets/js/27.35b6a478.js",
    "revision": "2f3254456e1383668040d42278486930"
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
    "url": "assets/js/30.06f3b379.js",
    "revision": "3f2aa6013c5ffdb3bbea07dd1116ddf3"
  },
  {
    "url": "assets/js/31.fff5472e.js",
    "revision": "8264cf96a30434eb897157a6239cbf91"
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
    "url": "assets/js/37.81b58ca6.js",
    "revision": "8b58647b6fef87552601455720f2cd3f"
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
    "url": "assets/js/app.e7528a09.js",
    "revision": "5d2fb6dd62900543311e594775ef6d69"
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
    "revision": "5d947febdc41b73539eda3eea2b3168c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "0fd16fbb9157a53048438674fed9d6c7"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "0445e493ae3ac2de3cf0ad87045aaa77"
  },
  {
    "url": "guide/contributors.html",
    "revision": "fc8d652f350f86942635097b7be4a61e"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "2efeec90cd13128e8fd9958fa7e292e8"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "79667418e289eb5ea2f1d8e4363456a2"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "946dd2a8f7fa0ff8e6680b85e8fa36f6"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "a8adc19d79741b29b7f4193009e5350c"
  },
  {
    "url": "guide/index.html",
    "revision": "fb7e6211bc912fa4efb5de77a70f59e9"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "13135dcddf75943e91f8ee470904dcd7"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "88fe1020b13a0e3591805912363a8af9"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "0413b7cbe9e2952b44dc8e8f8a8f2809"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "e1998a45d4797eb6aec4daae375ae18e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "a59152b783e9811ebc15725491a14a27"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "349942107e88a70f6883164a1537d2f2"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "4597d4d5d36ec1a45c5c3e7d00e0cb40"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "fce1a331d033551b6694c8603b758ab5"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "4a054888ea9d4d7d92c12ebf7cb2dbda"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "22bcbee7c77bdf4d60a08511e7750a6b"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "89130a37c43d7ad088a75cd8c8b51975"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "31c1a667ad03badff8a75b0197346d33"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "24a69d38260a0379adfbbed672f241b4"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "8701dfff428e7f7ef4e3f94ae8216306"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "31bfc808a4dcab958924b997afbc7602"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "d4e2f8b211febeedff4ae9407053cb3c"
  },
  {
    "url": "guide/snaps.html",
    "revision": "8e9c247a8879cd3cbab7358ad278a5c2"
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

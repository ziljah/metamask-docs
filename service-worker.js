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
    "revision": "1e83f61a17573f7c2dfc778f693a99d3"
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
    "url": "assets/js/24.5d990e3f.js",
    "revision": "4024d566eddeb4bb079056a5f5c352ab"
  },
  {
    "url": "assets/js/25.1a913d34.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.92a9d938.js",
    "revision": "8bbeb7ca2c6e42ea07d339def5b99ced"
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
    "url": "assets/js/30.41f77e9f.js",
    "revision": "f4c8dd0be3bc6501242e725a07354fe1"
  },
  {
    "url": "assets/js/31.a3e3a668.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.14731d5b.js",
    "revision": "50855a1b32e00ee936578ba3996b83eb"
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
    "url": "assets/js/37.1e7099c8.js",
    "revision": "12253d6d01670f01d3ac00e4b4cd2b2e"
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
    "url": "assets/js/app.0803ec8c.js",
    "revision": "3754dd4f2e2a7f926efce15d80aa1b75"
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
    "revision": "cad92b10f109a1f284b137e29d9956ba"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "163a6634d2befecebad58a372bfff8ce"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "fd8f0cfaec868133c0dc3d89582b0ddf"
  },
  {
    "url": "guide/contributors.html",
    "revision": "b71f5a5e833ea69d4c8b4ce594471789"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "2f0e6c7ff2a132b1d6acf5da279e794f"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "a606ce9e86980a30c6013083449fd92a"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "443ef2696217fbf278f7dc0b45bb120d"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "9adcf60f260fbaf9f24f4a6b549e4ea4"
  },
  {
    "url": "guide/index.html",
    "revision": "6638822215e505244a0ab8b0dcce47ad"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "eff02bfde7153ba4d0462d6464711ac7"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "e213b3c92e7278ae5261c17c1144c737"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "03b4105406de128ace62b0a6397b05bb"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "faf730e4d09ad8250c689de793a882dd"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "6ce7d86dcb56c04ee3d454e1df78d571"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "61a16cc381ebb1415e102e834198cc5f"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "fc264803324811d8e629c06b92911180"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "74c3f20d6bf28e894cc000c9bd9dc7a7"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "12654ec191595ae0d5d29de9daa7abce"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "96c4285a45afc2a33c226b7969517672"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "a896be994960dc9b454e9501ffd69aaa"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "6e4f989879270038abf33d1acf71decf"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "bdc39ac037fc38b439d0ceaac7a1c939"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "264cdb6a89f4f707413cb1445b36291b"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "e90a4416b60ea0789e9dc513401a8f8f"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "417163df436ab4ee5e408e5fd813be0a"
  },
  {
    "url": "guide/snaps.html",
    "revision": "d241820d8d106dfa68843a96d70a6c60"
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

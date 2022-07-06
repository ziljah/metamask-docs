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
    "revision": "ddf0742b2532d8159648794a97dacac9"
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
    "url": "assets/js/25.42f3cd8d.js",
    "revision": "7e9824fff74a9d6d22f9b12529a008b1"
  },
  {
    "url": "assets/js/26.c6825fb3.js",
    "revision": "23ef67bf96aac6823a5733f8f150267c"
  },
  {
    "url": "assets/js/27.02be1413.js",
    "revision": "d4311108424f544cb6c28864fae7dc50"
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
    "url": "assets/js/35.6b445c65.js",
    "revision": "8b5b75da972f9b16d94bd5dad33a8894"
  },
  {
    "url": "assets/js/36.a533f422.js",
    "revision": "d6870392806b50ab105f8fa97b8ea3a2"
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
    "url": "assets/js/app.09f482c4.js",
    "revision": "1ddfab7bfd5ee7271f3eba0d2601af6a"
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
    "revision": "46b148cadbc098efbd13d544e433faa2"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "c99c8023dccd6649f8638bd4b44f53d5"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "ff924ac6373043f0c035d0274fb4d47b"
  },
  {
    "url": "guide/contributors.html",
    "revision": "314dc3da0358771dc8bd4e4b36a347fe"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "e4b79a142f4efeea0c9cef5b47cd47d4"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "00277ea6857c731afbdc05a12e71325e"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "f98aa87c6184370f382fa701ac83c856"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "1d777288d86cf51eb92f8350b210fa79"
  },
  {
    "url": "guide/index.html",
    "revision": "0c69b7f3a60b2905ef8ea380e958ff5f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "9a2421924a0b11a5791df254651003b9"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "69f13c68270b862ff1b4a1f7d6e91b92"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "6b3c82f1ad7ccbe476745284143fbf2c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "b77e90b126e4f921c1e188e23d2b356d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "1cb1e932c8c9f6dc5a34aed00447af37"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "e251fa9a2171b60d257d0ed68dcf519b"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "9e399dbf4818821c3e2151655ec5fa38"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "46f4914584e118d0c354c429787eddd9"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "fcf193ba5b96099fb7bb5894c1a39d32"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "931cd65c309aa52315de4b815f2b6833"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "9a4bb2fe934d919118766ade70557830"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "5cfcfb0b457266b003ce133be650899c"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "0a6b4281071423656bfa57eba8259a36"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "e3dcfb56aa3a5788a8ed9d138b033f4f"
  },
  {
    "url": "guide/snaps-permissions.html",
    "revision": "11b8a043da5c19bb06b8ca13b95fefce"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "562561ce41a54632a40bcf219502d8b5"
  },
  {
    "url": "guide/snaps.html",
    "revision": "e3f7767316ad1bbbfa69e85d8e418b62"
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

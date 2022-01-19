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
    "revision": "7a38cf432b33cc6cd881c7c8bc86a163"
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
    "url": "assets/js/16.dc649f71.js",
    "revision": "6f46f98759448ca7c7e558cd8e56d0aa"
  },
  {
    "url": "assets/js/17.04568593.js",
    "revision": "0e03552b54898d777a9b69056a45dbe7"
  },
  {
    "url": "assets/js/18.9ae1e13a.js",
    "revision": "4ce3ec7e203bd6140cda73c4b4ff9fe2"
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
    "url": "assets/js/21.7cd19eea.js",
    "revision": "ece2938e363d7e5fcf9fe212e105bc1e"
  },
  {
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.f88fcd4f.js",
    "revision": "ab60c128f294525163446692e76efeba"
  },
  {
    "url": "assets/js/24.41893593.js",
    "revision": "a0acc79bb8118fc61a586c713cf4a201"
  },
  {
    "url": "assets/js/25.ad74af87.js",
    "revision": "1fbb7be9be75ceed308f03661c510f4f"
  },
  {
    "url": "assets/js/26.f3ced236.js",
    "revision": "092ef8939b9ac3c931fd8adfd134e1de"
  },
  {
    "url": "assets/js/27.978bfcab.js",
    "revision": "20c54e1f894a2f3cb869f040678cce12"
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
    "url": "assets/js/30.becd9c50.js",
    "revision": "e9f3b05c3447b8139603b8239f688caf"
  },
  {
    "url": "assets/js/31.74901bf2.js",
    "revision": "c72993434fd58aa88fc8b74f33ed6e96"
  },
  {
    "url": "assets/js/32.6620dda9.js",
    "revision": "bb7a4c20b6e2aa2fe14f0df04e6806b0"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.c42e60f2.js",
    "revision": "cd0cb4b214ec1d84caa1036d4dc64f8c"
  },
  {
    "url": "assets/js/35.0a6cb011.js",
    "revision": "1b7d369f81c5eb19aaeda67d9806f171"
  },
  {
    "url": "assets/js/36.e56f989b.js",
    "revision": "0d3395475ee9b6eb0cd0173d0631b300"
  },
  {
    "url": "assets/js/37.eb19e0d7.js",
    "revision": "0eb9ead751860bd2469f9b4f9910e87f"
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
    "url": "assets/js/6.a0d1e866.js",
    "revision": "29f718453c76590851211e3db25c8aa6"
  },
  {
    "url": "assets/js/7.50a770b2.js",
    "revision": "5604cecaa689454aa86376434b0c40c9"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.c87edbeb.js",
    "revision": "d517bd47317ad81e6ab16a0e8b3b6124"
  },
  {
    "url": "assets/js/app.cb63a3a6.js",
    "revision": "75ae31f4ed8bc0327f86152fcf4c3dc6"
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
    "revision": "df42e27600b6484b1d0495083dcca609"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "3787f1517c26308821e13c53fe47a155"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "8ac6307b56bcb8b5269cabbbc9f15d43"
  },
  {
    "url": "guide/contributors.html",
    "revision": "10f3e24e6e51b1724ea489f0bda8c3b8"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "dc99a60aa3652613a01ff0f011068c54"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "d6e42637e111ce590d5ff67ba4a4223c"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "fdcb836c4bc4748ce00e33f91d97e72b"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "aa6e5e558f38aa7c97b1a8589d88af4d"
  },
  {
    "url": "guide/index.html",
    "revision": "4145dd613686ccded8f3e4344d7a858f"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d2e494033fc450576b4410e0d2b8d221"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "49bba6e0896c566885ebc50cbfd29819"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "e822797abf3b662234ec0eb226e715c7"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "f5c63718db10a743d93c0bd496de1c2a"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "772c8086ce854f9d6dfadaec525e0ba6"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "a6ea8417334bed641b7eb438f508f8fd"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "9304336e95c278fd94c2d4c5f43e5760"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "d44c190ea5e7bdb78668cc1237bdaeb6"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "0441a73b3de57cd0c2016b4b4369f0bc"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "e72da75d898ab0c9c4ebea386d210332"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "01c9f63de43df63479541fbba2c23f0f"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f0bf326e2dff45dd197e203aef8ad173"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "ebc42c8be7fec3966a0407a47d1b4d3e"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "549d83d3f676ee17df0ab903f8719d82"
  },
  {
    "url": "guide/snaps.html",
    "revision": "1df042c90a4f54f2d3bd97cb62478c78"
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

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
    "revision": "146f406f080589d72a2c910963317ca4"
  },
  {
    "url": "assets/css/0.styles.136e0e71.css",
    "revision": "cf5a8f9622999aeee52cd1d33da709c3"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.2b5c3295.js",
    "revision": "667a0a2fa26dda73128c3f8374fe6f93"
  },
  {
    "url": "assets/js/11.1d334f84.js",
    "revision": "7269f599fcbe8c7c9bec6c68bd9d4f1f"
  },
  {
    "url": "assets/js/12.134edf91.js",
    "revision": "6831c5b8d341f31f544caad3493b5006"
  },
  {
    "url": "assets/js/13.3f1cd67b.js",
    "revision": "80703b91e70faaa5a909b2851feff5e7"
  },
  {
    "url": "assets/js/14.b8a0ac1d.js",
    "revision": "f62ea58682faed905d073266e9ef754b"
  },
  {
    "url": "assets/js/15.3c543bab.js",
    "revision": "d9c8c7778e4806940c7ca19c92691fb0"
  },
  {
    "url": "assets/js/16.9012ef23.js",
    "revision": "b9425e77a79897e81a8063a3d5d21c48"
  },
  {
    "url": "assets/js/17.3a3d433c.js",
    "revision": "b2686ea7eb6f0696d38567147b9ab5c9"
  },
  {
    "url": "assets/js/18.c7a5d970.js",
    "revision": "843350a3a3adf1576fee7a90db434dad"
  },
  {
    "url": "assets/js/19.63413caa.js",
    "revision": "b7ec7484b16d31ca4d987da6dbde1ddf"
  },
  {
    "url": "assets/js/20.f786e3ff.js",
    "revision": "5d1902c026a5f4252f9e5796bc2d055f"
  },
  {
    "url": "assets/js/21.aa06821b.js",
    "revision": "96f633ae09af3b40a8183fe88e787fbe"
  },
  {
    "url": "assets/js/22.e0b0246a.js",
    "revision": "137d09addf56fe9ec077727cc0ab6664"
  },
  {
    "url": "assets/js/23.b731f2c5.js",
    "revision": "0062aa0b54aa28bad51bf1d7ce37694b"
  },
  {
    "url": "assets/js/24.5ec8dbbc.js",
    "revision": "6c4c555da120fe1a6df872c181d86418"
  },
  {
    "url": "assets/js/25.70a17f7e.js",
    "revision": "6eeafbb7b70e85a02d63f2cbd9d97267"
  },
  {
    "url": "assets/js/26.0fb6b2a9.js",
    "revision": "2f3ea04b8e14e4de5530054820d34c01"
  },
  {
    "url": "assets/js/27.69c7357f.js",
    "revision": "6e8be5c960783b7cf61b2e7e93cb24e2"
  },
  {
    "url": "assets/js/28.7020bcc0.js",
    "revision": "81bcf4249896afbb92e323776f8a6a6c"
  },
  {
    "url": "assets/js/29.85eb6db7.js",
    "revision": "37097a8006bd87414abfa415751cc644"
  },
  {
    "url": "assets/js/3.706dd5d3.js",
    "revision": "588ca0e5b6a3884b4dfd3c42c7e27194"
  },
  {
    "url": "assets/js/30.e58c5899.js",
    "revision": "7eb22d9a88c9bce3f22b608599091934"
  },
  {
    "url": "assets/js/4.7d38fd43.js",
    "revision": "a1e282d8a6dd8282d2ed841ffc43ef30"
  },
  {
    "url": "assets/js/5.a9f95618.js",
    "revision": "6037c33f7a7cc47c3e1dc811ed3c813c"
  },
  {
    "url": "assets/js/6.df9aa455.js",
    "revision": "394aa6c73de49d83fda7660f9d7a731b"
  },
  {
    "url": "assets/js/7.53c339ea.js",
    "revision": "96684965052e84ef43e38e2d4de24d73"
  },
  {
    "url": "assets/js/8.dfd83fe9.js",
    "revision": "7a2bcf6742375d383cf2d0c83fc2cabf"
  },
  {
    "url": "assets/js/9.f64036f1.js",
    "revision": "424a0dcb1019f027650fc057a4fbd5ac"
  },
  {
    "url": "assets/js/app.60071226.js",
    "revision": "73a27096d0465f0dd3e24b078704c1d6"
  },
  {
    "url": "assets/js/vendors~notification.c44ed76f.js",
    "revision": "0a290ca3c6bdf6c838c089e1bd223486"
  },
  {
    "url": "faq/index.html",
    "revision": "1dadab1cabf047bd7a68b879e604c24f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "ad9b83f0da79fe921fd2bb3e366bf37a"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "8df31d76ec6b19875f9585aa3649d8dd"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "9a533666b0c9e4a9485e5c20989c4a5b"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "ebe4f2c74ca313efa9e1d909f1f00cc3"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "57c7ec663d2b71d9655e90b34fed06c6"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "947ac6882a310141e0fb9df422ec5e56"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "9bcc22bd6910573d9b0a91fe9da77b33"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "5de31573bbbdb5126772f0dc8067bc65"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "900e6435217ffe7999db6b2197ba73c4"
  },
  {
    "url": "guide/index.html",
    "revision": "c98e98b182bb16522ce1f26e87ebeca9"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "7f0356dea578532a4716099736d162fc"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "053d179207b1aa608aa856d975ad0ee3"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "816eb265c1500a97720ad2cf35cc022d"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "b20970ea7f416683bb2215dea9ad237e"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "262143e76bd7494ab7eabf14aeccdcae"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "7af4764663d6a0722d7b74f49fb611e7"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "8b28a62f50767fe9ac3c50a9467dec71"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "51b2893427ccda821772363993e4b760"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "859c6331a3e77b4540cbaf672113f8ca"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "f2016dcabaa63fc50f011ffae968893d"
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

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
    "revision": "584fb6876766b5f9fec3b2736c2f2435"
  },
  {
    "url": "assets/css/0.styles.2266dc7b.css",
    "revision": "0d42ac6fbe6d7ff27b2c196ad7d34fac"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.97502985.js",
    "revision": "b52f2fef445fd72c0b5d6abc7366c51c"
  },
  {
    "url": "assets/js/11.8341b876.js",
    "revision": "eba546fefbe015a5c7db8e46f82b8add"
  },
  {
    "url": "assets/js/12.8c9db7cc.js",
    "revision": "20be22e2935cb232c01222da7e9b3826"
  },
  {
    "url": "assets/js/13.4f82c197.js",
    "revision": "80c1bae1df2ff1bee828c6fb71692c00"
  },
  {
    "url": "assets/js/14.967bd9fb.js",
    "revision": "f6c0404d575a22b79d6b2c2d4df50f25"
  },
  {
    "url": "assets/js/15.fbb66249.js",
    "revision": "f2d92343ff89ce9f8959a2244dabbfb2"
  },
  {
    "url": "assets/js/16.9a79512e.js",
    "revision": "78552fb7774107d220af6fdd4c33b80e"
  },
  {
    "url": "assets/js/17.1dae40aa.js",
    "revision": "7c51bf848002fd47c6b86b1499b0c6c4"
  },
  {
    "url": "assets/js/18.545d582b.js",
    "revision": "5598214c644592198f148012a3453851"
  },
  {
    "url": "assets/js/19.7678dc82.js",
    "revision": "afeb20897f9d705d8d421c39b2860139"
  },
  {
    "url": "assets/js/20.a4a5da52.js",
    "revision": "628952baad6bb43dcb89a40c0bf45b48"
  },
  {
    "url": "assets/js/21.e985d920.js",
    "revision": "3790879d74451e125f3f83f1881a7537"
  },
  {
    "url": "assets/js/22.234df099.js",
    "revision": "77565d6f08b580bbcb478e84db2bba61"
  },
  {
    "url": "assets/js/23.6cb76009.js",
    "revision": "801f04f0d359ed1c3e5675b91d2f4e77"
  },
  {
    "url": "assets/js/24.b360b81f.js",
    "revision": "c3b533aea8147032cd7352e89e1019e4"
  },
  {
    "url": "assets/js/25.b39f5f33.js",
    "revision": "9ab5d8a5a694ee67b390fa4989c0985d"
  },
  {
    "url": "assets/js/26.da505a0e.js",
    "revision": "075647b25377d67dcb37d5f7a304e0fc"
  },
  {
    "url": "assets/js/27.56d67427.js",
    "revision": "8a214e420dfdf9b165fc13adb4017b73"
  },
  {
    "url": "assets/js/28.adcdeadc.js",
    "revision": "d0e923fad3504db2b0b5038dcdec10c9"
  },
  {
    "url": "assets/js/29.137f94a4.js",
    "revision": "a78efd3098151f56f544ec0b40e2fbd0"
  },
  {
    "url": "assets/js/3.244b93ea.js",
    "revision": "9214fcf782f386f5459a3b1641929174"
  },
  {
    "url": "assets/js/30.eef992d4.js",
    "revision": "3cb1978342059e09c976a2b1fe9cec51"
  },
  {
    "url": "assets/js/31.988a7d67.js",
    "revision": "43f77d9e26d5709df9c66510c8d42f38"
  },
  {
    "url": "assets/js/32.a7f0df84.js",
    "revision": "758df66e3c0fa5b75df74cdece61b7d5"
  },
  {
    "url": "assets/js/33.849bcad8.js",
    "revision": "f9c87f39423413454391dd441485c622"
  },
  {
    "url": "assets/js/4.26ec4cfe.js",
    "revision": "176d9e63622233bbe50266b8cd48a409"
  },
  {
    "url": "assets/js/5.76d62b17.js",
    "revision": "fb7f39c4340051d41acaa12a3762afde"
  },
  {
    "url": "assets/js/6.52b89912.js",
    "revision": "780139334fe1573f1616e18fc2fb69de"
  },
  {
    "url": "assets/js/7.6cbf5b70.js",
    "revision": "597ddd1f29f812f868feb25c8d24a349"
  },
  {
    "url": "assets/js/8.6d9031fb.js",
    "revision": "1bad8c7bace93600ff68989f75f56577"
  },
  {
    "url": "assets/js/9.4fb0a7bf.js",
    "revision": "9ae389668083f09446b42bb7ffa900e2"
  },
  {
    "url": "assets/js/app.301feee7.js",
    "revision": "3c0f3708b86adb71b1854776ceea40f6"
  },
  {
    "url": "assets/js/vendors~notification.845db04c.js",
    "revision": "a255cb8d877421ce112f3e8e7b7da9cf"
  },
  {
    "url": "faq/index.html",
    "revision": "3b07e678dbfde72d4815f0740367a814"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "78322436dedf3fc833b22e1a03fe356b"
  },
  {
    "url": "guide/assets.html",
    "revision": "7634394634bdf3e70af9ec7c4c0db130"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "6ef2076a57887948f95e0085fc394b1d"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "f67395152ba3a6a6a3d0679df0653936"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "7e08c40d9da3b3563dd4bc42401f859c"
  },
  {
    "url": "guide/deeplinking.html",
    "revision": "27e16258e874b798c4d2c72aa60dae38"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "6bd2a074f2318853a6cedea7e1913527"
  },
  {
    "url": "guide/deploy.html",
    "revision": "ad2c9010eccde2053aae8727a6e26581"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "6f56038572eebd885f489e12720e0784"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "5914885e846f30d4708097dedb0688ac"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "786809d7ce4c1e8bb336329dd6592caa"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "efbcb70de03c7f80dcedee44fd868dda"
  },
  {
    "url": "guide/index.html",
    "revision": "ef28250cd279e14b853ee49f955d84f7"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "928a870507342b891872f9440bbfc50b"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "33d20b9cd04b6380e90addf03cb83904"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "7fd5866400efe0d71d07ad1c628f5c08"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "87b225e9566882f5b91d984105ea22fd"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "1ab3e6b9813bebb822ab4eac0ce0ee6c"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "459a0d510d4b2e8c8e6f6521ab609475"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "64a239e90167917f855c05d49b378429"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "4260e069f8855874e089e43e86c38d89"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "b32ea5374419335a6f1541bf144a63e3"
  },
  {
    "url": "guide/walletconnect.html",
    "revision": "3e952d173f8f26d0b0f6eee8f81a5f11"
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

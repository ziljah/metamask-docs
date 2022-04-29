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
    "revision": "5f35858f223215efc35db92af4a7b859"
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
    "url": "assets/js/15.53c9cf0e.js",
    "revision": "cbb8cdfbe7ee9fece4312b78e2f6c827"
  },
  {
    "url": "assets/js/16.878c533b.js",
    "revision": "bac455ea6b053a17181176f5fa00f0f4"
  },
  {
    "url": "assets/js/17.84fe591e.js",
    "revision": "b2d91c16d1733b6f9d6b8b9ae0ef79fe"
  },
  {
    "url": "assets/js/18.707dc816.js",
    "revision": "91adfb4f88c236425aca89f9df8e9ba3"
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
    "url": "assets/js/21.8e2a9427.js",
    "revision": "5a5d982c07625a337e1d89cee65c393b"
  },
  {
    "url": "assets/js/22.be411b40.js",
    "revision": "f4ad282746a95b6114e38b041d1c0f52"
  },
  {
    "url": "assets/js/23.abf5e998.js",
    "revision": "bd0d1135cef3b7e7ef8ab7eb6cfea92f"
  },
  {
    "url": "assets/js/24.199174d6.js",
    "revision": "fb29e371adee6935dc6134ea3d927913"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
  },
  {
    "url": "assets/js/26.c728cfe4.js",
    "revision": "e3516b830141ba132740a27a031adc2b"
  },
  {
    "url": "assets/js/27.f68593fe.js",
    "revision": "8a5142151240935c12d93762dec49053"
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
    "url": "assets/js/30.b625f471.js",
    "revision": "15468bc01fc60d85f15387761dd3017f"
  },
  {
    "url": "assets/js/31.4746cd25.js",
    "revision": "28695ba412b0de448cb0c59a0a170f13"
  },
  {
    "url": "assets/js/32.436bf087.js",
    "revision": "ce683c3558b3b63a8accc09582aacb4a"
  },
  {
    "url": "assets/js/33.554a79ad.js",
    "revision": "2dbe7dfd71ff73aaebceee7217f5b4b5"
  },
  {
    "url": "assets/js/34.6cde43cf.js",
    "revision": "5c5c44950bf6f931106bfd3c7cff5444"
  },
  {
    "url": "assets/js/35.a8a51582.js",
    "revision": "8a40cc0869582cecd2f4d4dc80c75dd8"
  },
  {
    "url": "assets/js/36.74b10946.js",
    "revision": "d65c0379cde2835afc41dc5975989000"
  },
  {
    "url": "assets/js/37.56530481.js",
    "revision": "be1568628464935e26ab18631eef56e7"
  },
  {
    "url": "assets/js/38.37c589f7.js",
    "revision": "24dd63c597f7153c7cd19375155d8d6c"
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
    "url": "assets/js/6.cfb38f1a.js",
    "revision": "3da70382309dcd99ad46f309bdc0b45a"
  },
  {
    "url": "assets/js/7.e06a715a.js",
    "revision": "8b239d108f078eadbaea5dc084cec7df"
  },
  {
    "url": "assets/js/8.2bb62a19.js",
    "revision": "f31fd1450dce50f0b62d85a628e5ac94"
  },
  {
    "url": "assets/js/9.6ceff5d2.js",
    "revision": "8aea038cb275e5c7b9368e5b008ac929"
  },
  {
    "url": "assets/js/app.172f84fd.js",
    "revision": "d51a857832a803bbf4d943e350c75be7"
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
    "revision": "ea4e37b887301e2be52cd497b6125cb7"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "9150256c78ba49eb785a5c027feed7cb"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "9e6c69276e8a7c983390f84d777f4a52"
  },
  {
    "url": "guide/contributors.html",
    "revision": "ce27a521326a7abfdd5b7157736eb02d"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "b61bc9355cb4279c4c0fe47660fab3b7"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "2e1c9fd4adcdbaba088e1220240a2525"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "1f17cb5a924a65783e1be2bbbf777ae7"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "d62771a250f2b012059f6432f4190651"
  },
  {
    "url": "guide/index.html",
    "revision": "4c4337ad42d6625e8fab9dd8a995fa13"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "8e8934d4a434f97ad01cf553f9109e61"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "c28f888e089c71c40e76d9b4bd8fec13"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "f5724a7863e1772780cac6643ef41458"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "befa3c5445000e4753b3af0e3ce9afec"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "1153f8f8fc3e5f10e0cc6618ccae54b2"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "49540f694b9fc6b6f7b14e8fbe55a6f6"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "5f962058c056c1d7fdc5ce456a885fd0"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "5b9c839f86f47314711e70b43e3d312d"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "3d9e68befe5ff2b9322d1900c8e3fd3d"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "b562bd9993587f9d005ad7cb595545c3"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "befd2df480ecf4a7397a1edd2a8f7ec6"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "cdaf3db89b93c06dd2564e8dbb39bb10"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "904ee9bfab5ee31781f717f49f6f9586"
  },
  {
    "url": "guide/snaps-patching-dependencies.html",
    "revision": "8726e5da137f3159864e846eb5db2a16"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "9e97ba4c05425baf49a3207dc778408f"
  },
  {
    "url": "guide/snaps.html",
    "revision": "4e29a682cb90d9d1ba51a79cf49f83b2"
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

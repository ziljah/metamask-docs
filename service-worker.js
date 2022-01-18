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
    "revision": "29599f8093eee3584aa7b51d35411dce"
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
    "url": "assets/js/24.31ebaf14.js",
    "revision": "bb57364211af4cb273a3e8d995c4e907"
  },
  {
    "url": "assets/js/25.229e3b42.js",
    "revision": "4e6d905ef025a397fbdbe4cbb1eeb71c"
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
    "url": "assets/js/28.01812e92.js",
    "revision": "dfb852c1541d7c1dd0f26f8754aa25ac"
  },
  {
    "url": "assets/js/29.c3eb3581.js",
    "revision": "60105214c318f7eab25b74502d8ef095"
  },
  {
    "url": "assets/js/30.eb78b99a.js",
    "revision": "51426c37586a14b433adad1b1d970267"
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
    "url": "assets/js/33.7708681f.js",
    "revision": "f567137b64732d4253b36e10d35206cf"
  },
  {
    "url": "assets/js/34.7f11b491.js",
    "revision": "519790f9e65ae3d4a01d4e4f15d286ef"
  },
  {
    "url": "assets/js/35.0a6cb011.js",
    "revision": "1b7d369f81c5eb19aaeda67d9806f171"
  },
  {
    "url": "assets/js/36.c143efee.js",
    "revision": "3750ec8ce22bc784a331f5917b1b0a5a"
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
    "url": "assets/js/app.cebc490d.js",
    "revision": "e3c3a295b7faa11c91f32d06be184ed6"
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
    "revision": "6ea31cc328b257c771bb8f8e6b13dd8f"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "0f413c1bebae6cc6633a1bba32d771f6"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "5aa9933d79873ae6ca7ab60146e7b599"
  },
  {
    "url": "guide/contributors.html",
    "revision": "5856b9f8d9a3a63a4e7c9265b35e6806"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "52ea83ad73045ac27292337e6caafb7c"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "5e5feb7dd95b1356e022afbbe33ad9c3"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "14da6f96435cb3b59a4dc36318159469"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "f9dc85c6c39e812351dd50bff752cd8c"
  },
  {
    "url": "guide/index.html",
    "revision": "a9d56a45dc884321369d56a8c751a502"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "b16e79b0db66b8955104eba0ce9968c1"
  },
  {
    "url": "guide/metamask-extension-provider.html",
    "revision": "9f58c866930bac22d33fc4c8c801a21e"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "ccd2364e5acd07735e1e6baca0faa15c"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "7e880e4007ecce132931afacaea8ab74"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "d336112ffc837518e750dbd88ceccd59"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "7065344060451cb8c4d015f313274276"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "169329e02128ba2e2227d1f78a55390e"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "77dbe12f471307d8c527f6394ec4fa4b"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "bfee21084fb6bd047ff65c410a18e243"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "9ffa18d94d749183f6d61709a529ffd5"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "5cbf2c34c96ea51de34c052e839a86aa"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "f4abba44ca79365055422843ebea513b"
  },
  {
    "url": "guide/snaps-development-guide.html",
    "revision": "24dff0e8a2e4fd80b06ff8ba1cca11dd"
  },
  {
    "url": "guide/snaps-rpc-api.html",
    "revision": "9258757789cd22a03c0a3bb63dbe7ea0"
  },
  {
    "url": "guide/snaps.html",
    "revision": "602fc4a48bf46bd1bb51bd2db00fece2"
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

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
    "revision": "b558a279602e1cc84aaef9a0be08de4b"
  },
  {
    "url": "assets/css/0.styles.f3b6e9f3.css",
    "revision": "9769e2fb0e0854fb4620381249f9c5d1"
  },
  {
    "url": "assets/img/search.83621669.svg",
    "revision": "83621669651b9a3d4bf64d1a670ad856"
  },
  {
    "url": "assets/js/10.7379bd90.js",
    "revision": "57c2f0cf98c1b04aace2eba18dfca623"
  },
  {
    "url": "assets/js/11.41b7363d.js",
    "revision": "30b66706e724d065c9ca1caeae15d3d4"
  },
  {
    "url": "assets/js/12.8cdb27cf.js",
    "revision": "2b23e174b6fcf99ee50ec0e2ea27612f"
  },
  {
    "url": "assets/js/13.33ec82fc.js",
    "revision": "51fa9b9b713bb29a3e98c14ad10aa488"
  },
  {
    "url": "assets/js/14.a30ce4aa.js",
    "revision": "3ca84094c49a48eb7f2daba1f8f04598"
  },
  {
    "url": "assets/js/15.02882e4a.js",
    "revision": "be173af036cc0121c6df801542f4832f"
  },
  {
    "url": "assets/js/16.710ccd0a.js",
    "revision": "c23f93e2f511da9e7cdfa245575b3ad6"
  },
  {
    "url": "assets/js/17.011fd58b.js",
    "revision": "75019eef04cf9a7a5c3dcd80bb0a1d24"
  },
  {
    "url": "assets/js/18.953f95eb.js",
    "revision": "72e0da250d67a83df7cb5b984e3d3560"
  },
  {
    "url": "assets/js/19.4d9f605f.js",
    "revision": "37f80a8e48bfbc2ab12f15cdaf92e368"
  },
  {
    "url": "assets/js/20.f1cafd09.js",
    "revision": "2ed0173ac3d73a50eb8d3e52f677f300"
  },
  {
    "url": "assets/js/21.20071e0d.js",
    "revision": "66c415cd67e5ea6a76347edbc6f8eb58"
  },
  {
    "url": "assets/js/22.d711248f.js",
    "revision": "f9bd6e8016dfe50af91ad7d9f58774c7"
  },
  {
    "url": "assets/js/23.a26b6527.js",
    "revision": "40d7bd73ed1cc750fee9be134e57c5b8"
  },
  {
    "url": "assets/js/24.d048d164.js",
    "revision": "7ebeae1c20fb518fab52a010ad9f8d4c"
  },
  {
    "url": "assets/js/25.e01d7f82.js",
    "revision": "fb3911c82cdc884e44833d88eb4faab1"
  },
  {
    "url": "assets/js/26.39e58241.js",
    "revision": "ec2540904307301978cc601f59dba758"
  },
  {
    "url": "assets/js/27.58ac0f55.js",
    "revision": "2bf3fcec29c8ac48452f4fa186ad1f22"
  },
  {
    "url": "assets/js/28.d2e2946c.js",
    "revision": "f2a023217560b53dd3c3fe5ff4fa5269"
  },
  {
    "url": "assets/js/29.a7f8c7ef.js",
    "revision": "16cbba8095efc9431ebbb1b473d606e3"
  },
  {
    "url": "assets/js/4.585ebdb9.js",
    "revision": "2101f31f3696194c88efe7d81438a13b"
  },
  {
    "url": "assets/js/5.6356bcb2.js",
    "revision": "3c377d978de2f462554c3010cd7bb662"
  },
  {
    "url": "assets/js/6.3c3e6efb.js",
    "revision": "92b862eda8c60cc467f23e26a74ca484"
  },
  {
    "url": "assets/js/7.b213a769.js",
    "revision": "b76135d413fdea4e298b8476744373f1"
  },
  {
    "url": "assets/js/8.5f80aca0.js",
    "revision": "c00a56a200faa232a7f646e257f4cd0b"
  },
  {
    "url": "assets/js/9.eb4bbf3b.js",
    "revision": "aa36ef7cd5c8f0e5a8caba996c3a7745"
  },
  {
    "url": "assets/js/app.9e61a911.js",
    "revision": "35e1aa6803d5e0a13f0fd34aa74e524d"
  },
  {
    "url": "assets/js/vendors~docsearch.fdd8a010.js",
    "revision": "581a5b4c541e9463dc178f120623529d"
  },
  {
    "url": "assets/js/vendors~notification.e64ff089.js",
    "revision": "60f80241bc1086602f2721767abc0a52"
  },
  {
    "url": "faq/index.html",
    "revision": "9f07825af4ade46292ec4da110cef35c"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "f5fc18e9faf8bbe01e7da822b4b8616c"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "6dc99a38b05d2dbf9ec3b5b49d4820e3"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "1b4978bfad85572d734818f6fd21d18e"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "14d9591a1e51f71f646819def269deef"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "577bc30d66e28453c963f2656c5d2d33"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3c0c07801a48e576b6bb109fbbfd4989"
  },
  {
    "url": "guide/index.html",
    "revision": "f45ede8005c59ed0fb6712f39a4af9ce"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "d6d67e7b7352ae9315266d27d22217aa"
  },
  {
    "url": "guide/mobile-best-practices.html",
    "revision": "6b2c0161879aabcdc213d56df42198c5"
  },
  {
    "url": "guide/mobile-getting-started.html",
    "revision": "9dbdfef3b5bce3f7e166f30522c959b3"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "1fba8e0681fc6de492a923645012953b"
  },
  {
    "url": "guide/provider-migration.html",
    "revision": "343cfa97b461d22d5a043d7ba4536b79"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f7a93e8a4fdafa5b36f9d5894c075e49"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "a7225aa41e3b16aa6a8363155ada31cc"
  },
  {
    "url": "guide/rpc-api.html",
    "revision": "79421b20a4ac5cab9de475a774c4937a"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "a9efb81a915905309009c3a2d21c9844"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "d31b67c681ae22f29075ecee96e8f263"
  },
  {
    "url": "guide/site-compatibility-checklist.html",
    "revision": "39010dc435fafd967ddf533a30425986"
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

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
    "revision": "d6fc0e9d8a3eed7b1ce3e7b48c4fdea0"
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
    "url": "assets/js/10.b5b69f39.js",
    "revision": "19c6ebd841f0966949860a44a97398da"
  },
  {
    "url": "assets/js/11.d33b2baa.js",
    "revision": "0add16ef222c5062a17492e4f2fdcb45"
  },
  {
    "url": "assets/js/12.8c9db7cc.js",
    "revision": "20be22e2935cb232c01222da7e9b3826"
  },
  {
    "url": "assets/js/13.7acfcaec.js",
    "revision": "c9fd26f203533996a6a349dc87babb9e"
  },
  {
    "url": "assets/js/14.964ecae0.js",
    "revision": "b55e7343d191266615a0eec6c6e277ce"
  },
  {
    "url": "assets/js/15.e404cc9a.js",
    "revision": "9fe9bb0dc25622d38ee17449942cce8c"
  },
  {
    "url": "assets/js/16.9ebae792.js",
    "revision": "930ed34422fa36216cef38f478469703"
  },
  {
    "url": "assets/js/17.718e32fa.js",
    "revision": "6bbf079f7e3176f33e498aaff65715a8"
  },
  {
    "url": "assets/js/18.0370dd02.js",
    "revision": "c55c4158ec2bbc4795553eb9f0df1350"
  },
  {
    "url": "assets/js/19.3abd3f04.js",
    "revision": "cb2c20c04f069aa1d3b4d5085b27fb5b"
  },
  {
    "url": "assets/js/20.ab99602b.js",
    "revision": "4bb192e49738234bc661d89c2b124276"
  },
  {
    "url": "assets/js/21.198a2033.js",
    "revision": "0a5fb9dc79a66947ed72fb43f9c2d527"
  },
  {
    "url": "assets/js/22.4c95a626.js",
    "revision": "355cf51e39144e65c6b489c2994a1eb6"
  },
  {
    "url": "assets/js/23.058d71fd.js",
    "revision": "638851851a5756c1552f11ea511baf52"
  },
  {
    "url": "assets/js/24.435f7e7d.js",
    "revision": "808fdabad915dac161a05f10ac83929f"
  },
  {
    "url": "assets/js/25.291dff0c.js",
    "revision": "3c81a01dd284c21b56d466ac82d0d8c8"
  },
  {
    "url": "assets/js/26.545d7f3b.js",
    "revision": "6418a9f10b057d20efbc15b33c3fc83d"
  },
  {
    "url": "assets/js/27.2d3ead22.js",
    "revision": "59eb21b3d2085efd8c59c42cb6dce459"
  },
  {
    "url": "assets/js/28.d16c9a41.js",
    "revision": "808b67d836366e759ed6858b4096c01e"
  },
  {
    "url": "assets/js/29.a8839e69.js",
    "revision": "0169d147e7fe8d177cfda3f2da3e5208"
  },
  {
    "url": "assets/js/3.244b93ea.js",
    "revision": "9214fcf782f386f5459a3b1641929174"
  },
  {
    "url": "assets/js/4.22d8fae1.js",
    "revision": "f082cabe0d22a4e9fc7b1e1b1f7a292f"
  },
  {
    "url": "assets/js/5.891b9d07.js",
    "revision": "c62eb0a6db56dc6c54b8280b05e47012"
  },
  {
    "url": "assets/js/6.52b89912.js",
    "revision": "780139334fe1573f1616e18fc2fb69de"
  },
  {
    "url": "assets/js/7.267ef5a0.js",
    "revision": "f672bc1259e13ff3169d01677dd035b3"
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
    "url": "assets/js/app.c5fb00bc.js",
    "revision": "a05849c887fade55fa7060f5ddb687ef"
  },
  {
    "url": "assets/js/vendors~notification.845db04c.js",
    "revision": "a255cb8d877421ce112f3e8e7b7da9cf"
  },
  {
    "url": "faq/index.html",
    "revision": "fbbb7cea65958675d1fc996af7de4436"
  },
  {
    "url": "guide/accessing-accounts.html",
    "revision": "102999b43043dcffb13ff6d44ce2ecd4"
  },
  {
    "url": "guide/assets.html",
    "revision": "d8fe084369e1bc7812d15f0d088ad358"
  },
  {
    "url": "guide/common-terms.html",
    "revision": "582c09b829976c3d46b0d86b76584c7c"
  },
  {
    "url": "guide/create-dapp.html",
    "revision": "2c53dc32cbba006a0ea9d5d10518bbde"
  },
  {
    "url": "guide/dapp-compatibility.html",
    "revision": "57d2e50c8650a7c879f51b139d7a4a29"
  },
  {
    "url": "guide/defining-your-icon.html",
    "revision": "c34e3cd707c96f74deb55dda7841a8e4"
  },
  {
    "url": "guide/deploy.html",
    "revision": "fa70e6de61decc4c2a8b3761ba9a05bc"
  },
  {
    "url": "guide/ethereum-provider.html",
    "revision": "805b0b479de6660d146ccd661f1c2542"
  },
  {
    "url": "guide/experimental-apis.html",
    "revision": "0ccb35e4eadbeb91c507c28f3b74dc55"
  },
  {
    "url": "guide/frontmatter.html",
    "revision": "380877edecd20b37f721b244d47005a3"
  },
  {
    "url": "guide/getting-started.html",
    "revision": "3931e9b27d4dc7133a7d874993ce6d80"
  },
  {
    "url": "guide/index.html",
    "revision": "38c3ae4ea6b5f923faa0c43d4a141d02"
  },
  {
    "url": "guide/initializing-dapps.html",
    "revision": "11eb5d674f2bd3f9449d90fc588f4e80"
  },
  {
    "url": "guide/json-rpc-api.html",
    "revision": "ba50863346ff61f5504222a7a1bfa25e"
  },
  {
    "url": "guide/onboarding-library.html",
    "revision": "48a92c508e4dc9f87a0bd37312c36c07"
  },
  {
    "url": "guide/registering-function-names.html",
    "revision": "f3f024d30fc9b3aec8301b1ecbe79b2d"
  },
  {
    "url": "guide/registering-your-token.html",
    "revision": "2673da4f7b81c4504833342fcc7cd86d"
  },
  {
    "url": "guide/sending-transactions.html",
    "revision": "1c7faa0d9a6bc1851fe0ffc8458dca35"
  },
  {
    "url": "guide/signing-data.html",
    "revision": "0043efd1bd8dcf3a3b755d82fe561664"
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

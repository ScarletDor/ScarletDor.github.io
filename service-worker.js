/**
 * Copyright 2016 Google Inc. All rights reserved.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
*/

// DO NOT EDIT THIS GENERATED OUTPUT DIRECTLY!
// This file should be overwritten as part of your build process.
// If you need to extend the behavior of the generated service worker, the best approach is to write
// additional code and include it using the importScripts option:
//   https://github.com/GoogleChrome/sw-precache#importscripts-arraystring
//
// Alternatively, it's possible to make changes to the underlying template file and then use that as the
// new base for generating output, via the templateFilePath option:
//   https://github.com/GoogleChrome/sw-precache#templatefilepath-string
//
// If you go that route, make sure that whenever you update your sw-precache dependency, you reconcile any
// changes made to this original template file with your modified copy.

// This generated service worker JavaScript will precache your site's resources.
// The code needs to be saved in a .js file at the top-level of your site, and registered
// from your pages in order to be used. See
// https://github.com/googlechrome/sw-precache/blob/master/demo/app/js/service-worker-registration.js
// for an example of how you can register this script and handle various service worker events.

/* eslint-env worker, serviceworker */
/* eslint-disable indent, no-unused-vars, no-multiple-empty-lines, max-nested-callbacks, space-before-function-paren, quotes, comma-spacing */
'use strict';

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","d04338cd858c9f4d508362121bb17f68"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","9dd9dae390117b6d79254eda718ef391"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","19e0ee7ba5149a6adfae4d65152d6ea9"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","fcfddb41bfba75e2a45f0cba190e96e2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","d707eaa1ce32e89a532a7a267ee1e175"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","422ac003b8ee93e4d8e4684921722c63"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","e4ed5d886c111815b3d4e9473f7a9148"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","056bf4a7ddf86316865fb5f2d26abacd"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","1a8e6283d57d949acc940abcc3f7ff26"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","47dda7e4e7d80cc378dc85ab04522fa6"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","c43fa801ffcbdc6b61342ce5c8a75cc2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","2c14a53c60347087b02c5dc1ecba2267"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","992b68739d2b69c7ab68baa15566287d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","ee2cceb531a2adb57130ef565fb26f2c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","580e20a662aae132732c52eca97b663c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","6eb13ab9175f4913c8a11f1ba78a717e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","750a0db1e19cce8fafe40a25692ad670"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","91046a720c2cdac9a4d66a2b27de5694"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","7cf41bdf1547996f0df24c456d1f0585"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","f6e1f97276ca5753396ed519fecc8daf"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","9e063557a568a824bbd32df57e6707f7"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","3142c3321e115fb8cc9dc2127b014c4a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","9e5604c557ded2e74ccea54314ac2252"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","0a38ee5311e68f19a89ecd58d3c2fb2b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","d7ed13e006af886f6bcdcdadb9641fb3"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","bc06c1d6eb00b9da3ec39c35064127a4"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","047630f2f8d41c3c01b57fd9aaebcdc3"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","80cbb4ca232abfc9a187091c3f7e373c"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","8dd3576f39bcbafe7c9e0966440653ff"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","3e0d527386da430ef9812cba25211737"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","736d44125a9d90ac76208c4dc52d5e84"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","987e00df3ba64caa71b9257b4c4ae277"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","fdca43f1b5efe6c81c60080903200564"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","28fb7a94bdb5b218fdaf948e360c716e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","de4dc12694a0b5d639d5a2cb2be22351"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","e8e758ab79105dbde7807abb14d9e698"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","de9ce4380c34b90868349f39e93a9316"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","44d397e2dc215997ac7b58e2dd35e755"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","00f703bee81fe4c4c4c32ab91637a9b7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","ba2406306416d449fea574290158d81d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","a53479e17776d8c71172b8a8ded6b7ea"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","3f6c7bff503892abcfc436a81bd375d2"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","6a785b5a3dfc94913b253bef4675e98e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","184acc15bdbb0499165a32a2857a6952"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","77fd47617051c04e8cc43c9940bcd522"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","157efb8e50765c328b3c21c0a4cd8c01"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","516d8566ef766d1fcba4fc3dad639831"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","229a72e658248f56b186f605c857d11a"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","a7c6f69259f714b3dc928655e3bf6920"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","2c83dd03938bb38b35371dbec5a963aa"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","bb1cdb715fc41835c90267c2e99c42f1"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","123e7bf29fda5b7069fb1fa13f5ba4a9"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","fda07ac5318c7c4e34cc95f348005bbb"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","2efe01cf5013b9d39cefcc8f41008e74"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","ab831ab6206e778a89196af07d1f272f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","14336c2a4717144cb9f520bea31e37fe"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","1616ad0f46edfff7a02cc19d1e13b154"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","63e9019ed890d9b255c56f4c5c7d8c3e"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","8c4ea1767117fe5d71e682ffb19c151e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","de8ecc016c7a155aa96c47f2da9435b2"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","d492c92a6551bf6f51fbe315b7603875"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","a497949cd7c357ad299ed3a5d2a41ece"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","0a70ed17af838d8899a72a5d3b48f9ae"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","792aa7b050f62239fac21a683a20cbb7"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","6df2f96194893a5f51212f22a3c728b4"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","a7efee707c8e37d987ad5bc180a8fde8"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","3fd9d60ce083d8d9c053a261832e7af6"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","df6fc0aa87a9128bd341c37152ea4129"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","32c399f4f9112e89c74fdd901655f7e9"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","2bf403d7f40a968fbe655e96a2ea5e4a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","58f6530e40f8410ccea819900ada0486"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","459bc5a28ffe52dd0833a57387eb1392"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","36855d24d1aea32972d6d3c1bef30d91"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","3c3eb1e5aec38ec294337c2716ab0c8d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","860a1a32e3905351083321ffda91ace1"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","0dbb6b0929ae9842262d5eed52c18b91"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","ee71041a73f20838204c2dea6a1adbba"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","09ce58c141adf197d1a1ed906e44fc26"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","5a810c03cf58bfe880364ad903919694"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","408b708243cc13eefb1acd7c678c3346"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","7ece8c8fa50c6e92f7da2d23a953019d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","07b5ded7928af3c16a9dccb458a4d7ca"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","91532db0846bfc15fa77682e8973bff7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","3fa6c0aecfa44719f08dccfe4e1e5887"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","9e95b6e66a48d01d8567db68dac79d8b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","21e28cd75c7f1847cf29cbd28f437a49"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","41a9cb7c759359e0e8d722755f52a946"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","1b77948da42daef6dbd03b66718f39c3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","a456ebcbbd09149504bf0dfedd515231"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","4cc7432b1a4f5d03097f65fe9e940247"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","c42030e22e0a970ac6c17ba16a18ba88"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","0be9d4063c8cf542f01542e143c62e9b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","df6fb8122298cd17417b66bb8edb633f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","42d0a5948c4e2a872731b14aec44148b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","92e1fd37d5dcea8748b2212e42600b1d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","c31e2a939053544225c029a797293ef9"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","6a6b051f111166012a147430b1ad4faf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","94cacb923e4f005364787cd21e14c2fc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","08875c05e34b2e73e6dbec29da4ff2c2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","cb8af1056d2807232771f4bd06417501"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","1db7bc67044a2922087bb54b5f776d84"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","38dd51ba0aced1e87832017082b15d23"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","713945d3087e89fe4b58bf02bfffb06d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","16f48147a88938e281bb95ee35264327"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","c7b2359421f1b6c401f919ebc7560c90"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","8b330d01896b7a8037ce25afbef2bfc8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","cbdd624d06c9d3be1eb6bba5d5a7cc67"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","75ffefcc39405e0516ae732016af784c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","2ba365e600750d6fbf543fd2be8cc06c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","e5f4d981fbd051486193e85c42f270aa"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","efad483eaacedada3f455fcf8e1a23a1"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","58b5a80b8937dab2165f4d1db0096c4b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","452c2d799ac1d01c46a6463a6e94ce18"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","65d62ebe5053d8a25992fd1e1bc8b1f3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","8a2469abca84b77567a3d1dbaf7bf426"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","229c6b5bc962a86018269bad6591d813"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","4160f5f80dde0d80eaca4241ec5516fa"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","e0818798b82d05f832e63ab773594fb2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","4732b9da67446d9effec297cae6b46e5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","ea16a83ad2659af9329c6d16e254f10f"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","ac76b6b6d950aeeaf1e9013ee0449387"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","dc0bf129b29a5589a63164e41b0e107c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","d3a1723164613672b83beeab982dad86"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","07420018f9e9059c77d64682db6d2c6a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","20bb772713995b273cd630df641812c6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","7be3819a8272c7964daa88d4053cc9df"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","4ac636c32324b616391bd99bf3ae0b41"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","e00f59eee0e83c40fc66eedd7f8d9afe"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","08a894f5f907c3e1b367f913daaffb5c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","40c00e82893fc490a9d60b9a636cad5f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","c09857614e74e5ef09978661fe7445d1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","6216d1dda74379b7974c3e8c86ba12f6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","1713047ed476999fb0869e383a1f7716"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","5bf029ebdc1f83c94a201f537e758dc3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","471e969dbb37587002c092fafbd6b851"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","e29bd5023bd56db6088886b1d9f1401d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","b541686252161d829aa52469cd1d4cb5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","1657889b915d6ebc441dcf7b201c2509"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","1ecbd981a85b89be7ddc59b09d3eed05"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","0c37dccb86c72213fdecd2655293e374"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","adab2e5eac8ae9ac58f12efd43a3a4e6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","8770151714ac2af21979c149a8870297"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","3577797510171ffae5cbbdc7df2774ea"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","4d64a3971515ed634346f9fb0d6f7a33"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","0a83102fe2039bb9d933c07645d59fcf"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","17710a3e6ba0131b1e373bd7d80a067f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","76d71cb3ed833f05bd0b9641c41c2a1e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","4e0371493fd4802657fc5d2eb1f5c940"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","26b50c2f2a9fbbdf9e692a4ca5c419d2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","a8ace1daacc21651a8551539a880708a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","c31215b6762cdbf2d88ac62ff22dd146"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","329d791bc409e47a8e5ff42482178ed4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","0cebcbf7016a46d27c7c4a6a02b76433"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","845ec38d81cce1403c18c22ed5b0b718"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","7a279759136094847af9b2fc5c184f34"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","3a7e572e5159a3548ad512c8ecc05fd9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","d8e123c2b30ebe2c676811b1ea52b722"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","bc39c37d60acbf00f420baea772e0a7a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","9c3feadba80b295749c4f0ac09138c37"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","218b5051624d2c4be5b74e76ee15b7d4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","92aedc53c4201018c32d7ba3685310a5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","656a8d1f0a3e41465ca4eeb76f40bc6b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","a6ba4ea3021f6567cf5f872fb9cbb344"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","17272319e8e07a530a1dd5a8cf367f20"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","858765a1e72d51e1003c9dab921ba819"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","3c43421569961a417ad7d09903491cf4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","2cf4dd65461dbd63f9f2660da06b04d0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","d4ede629d2d0ad57b1255a941fb2ebf3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","791ebbf0fecd4437c6b97e737628f0d5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","d637dc3563f87bfbb591cab14d9a52cb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","38e534fd5c5f89a250ff7b4eff439763"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","33592934d502fb5e3a76bea5ef7f9d86"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","fa06f223ca724132d0e730bf92d9fe7f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","9f85ed461eb1f6522b7ae25a296dddfd"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","e6168b94aff2f6d41c763f0709f36d16"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","9d113e98d0be3a1e224183fa63da416d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","b35ea2b86b775a7a58b12d0118b5b216"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","1882bd3613ac45890337ae220fb43ba0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","1be9d66e1601d6f29c8b671d8ece6397"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","508f2d293b1f98bfdc3dd6428c1bfa98"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","d69c28152b9cb76ea0ee386cf290e1c5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","bc0551b17b27d72cf8e798a9eb652909"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","df4af32944b6ac609c58dc4a07f8d928"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","3eed18e4dcad06e923d641ddcdec5471"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","390095dc1b89c128292b18619c271f15"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","e9eade7dce37281de3134d9d4b499718"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","427e314e722c9f4604bdfa07a25d70f6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","cbae08403749b25b890d6dea64e7d0da"]];
var cacheName = 'sw-precache-v3--' + (self.registration ? self.registration.scope : '');


var ignoreUrlParametersMatching = [/^utm_/];



var addDirectoryIndex = function(originalUrl, index) {
    var url = new URL(originalUrl);
    if (url.pathname.slice(-1) === '/') {
      url.pathname += index;
    }
    return url.toString();
  };

var cleanResponse = function(originalResponse) {
    // If this is not a redirected response, then we don't have to do anything.
    if (!originalResponse.redirected) {
      return Promise.resolve(originalResponse);
    }

    // Firefox 50 and below doesn't support the Response.body stream, so we may
    // need to read the entire body to memory as a Blob.
    var bodyPromise = 'body' in originalResponse ?
      Promise.resolve(originalResponse.body) :
      originalResponse.blob();

    return bodyPromise.then(function(body) {
      // new Response() is happy when passed either a stream or a Blob.
      return new Response(body, {
        headers: originalResponse.headers,
        status: originalResponse.status,
        statusText: originalResponse.statusText
      });
    });
  };

var createCacheKey = function(originalUrl, paramName, paramValue,
                           dontCacheBustUrlsMatching) {
    // Create a new URL object to avoid modifying originalUrl.
    var url = new URL(originalUrl);

    // If dontCacheBustUrlsMatching is not set, or if we don't have a match,
    // then add in the extra cache-busting URL parameter.
    if (!dontCacheBustUrlsMatching ||
        !(url.pathname.match(dontCacheBustUrlsMatching))) {
      url.search += (url.search ? '&' : '') +
        encodeURIComponent(paramName) + '=' + encodeURIComponent(paramValue);
    }

    return url.toString();
  };

var isPathWhitelisted = function(whitelist, absoluteUrlString) {
    // If the whitelist is empty, then consider all URLs to be whitelisted.
    if (whitelist.length === 0) {
      return true;
    }

    // Otherwise compare each path regex to the path of the URL passed in.
    var path = (new URL(absoluteUrlString)).pathname;
    return whitelist.some(function(whitelistedPathRegex) {
      return path.match(whitelistedPathRegex);
    });
  };

var stripIgnoredUrlParameters = function(originalUrl,
    ignoreUrlParametersMatching) {
    var url = new URL(originalUrl);
    // Remove the hash; see https://github.com/GoogleChrome/sw-precache/issues/290
    url.hash = '';

    url.search = url.search.slice(1) // Exclude initial '?'
      .split('&') // Split into an array of 'key=value' strings
      .map(function(kv) {
        return kv.split('='); // Split each 'key=value' string into a [key, value] array
      })
      .filter(function(kv) {
        return ignoreUrlParametersMatching.every(function(ignoredRegex) {
          return !ignoredRegex.test(kv[0]); // Return true iff the key doesn't match any of the regexes.
        });
      })
      .map(function(kv) {
        return kv.join('='); // Join each [key, value] array into a 'key=value' string
      })
      .join('&'); // Join the array of 'key=value' strings into a string with '&' in between each

    return url.toString();
  };


var hashParamName = '_sw-precache';
var urlsToCacheKeys = new Map(
  precacheConfig.map(function(item) {
    var relativeUrl = item[0];
    var hash = item[1];
    var absoluteUrl = new URL(relativeUrl, self.location);
    var cacheKey = createCacheKey(absoluteUrl, hashParamName, hash, false);
    return [absoluteUrl.toString(), cacheKey];
  })
);

function setOfCachedUrls(cache) {
  return cache.keys().then(function(requests) {
    return requests.map(function(request) {
      return request.url;
    });
  }).then(function(urls) {
    return new Set(urls);
  });
}

self.addEventListener('install', function(event) {
  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return setOfCachedUrls(cache).then(function(cachedUrls) {
        return Promise.all(
          Array.from(urlsToCacheKeys.values()).map(function(cacheKey) {
            // If we don't have a key matching url in the cache already, add it.
            if (!cachedUrls.has(cacheKey)) {
              var request = new Request(cacheKey, {credentials: 'same-origin'});
              return fetch(request).then(function(response) {
                // Bail out of installation unless we get back a 200 OK for
                // every request.
                if (!response.ok) {
                  throw new Error('Request for ' + cacheKey + ' returned a ' +
                    'response with status ' + response.status);
                }

                return cleanResponse(response).then(function(responseToCache) {
                  return cache.put(cacheKey, responseToCache);
                });
              });
            }
          })
        );
      });
    }).then(function() {
      
      // Force the SW to transition from installing -> active state
      return self.skipWaiting();
      
    })
  );
});

self.addEventListener('activate', function(event) {
  var setOfExpectedUrls = new Set(urlsToCacheKeys.values());

  event.waitUntil(
    caches.open(cacheName).then(function(cache) {
      return cache.keys().then(function(existingRequests) {
        return Promise.all(
          existingRequests.map(function(existingRequest) {
            if (!setOfExpectedUrls.has(existingRequest.url)) {
              return cache.delete(existingRequest);
            }
          })
        );
      });
    }).then(function() {
      
      return self.clients.claim();
      
    })
  );
});


self.addEventListener('fetch', function(event) {
  if (event.request.method === 'GET') {
    // Should we call event.respondWith() inside this fetch event handler?
    // This needs to be determined synchronously, which will give other fetch
    // handlers a chance to handle the request if need be.
    var shouldRespond;

    // First, remove all the ignored parameters and hash fragment, and see if we
    // have that URL in our cache. If so, great! shouldRespond will be true.
    var url = stripIgnoredUrlParameters(event.request.url, ignoreUrlParametersMatching);
    shouldRespond = urlsToCacheKeys.has(url);

    // If shouldRespond is false, check again, this time with 'index.html'
    // (or whatever the directoryIndex option is set to) at the end.
    var directoryIndex = 'index.html';
    if (!shouldRespond && directoryIndex) {
      url = addDirectoryIndex(url, directoryIndex);
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond is still false, check to see if this is a navigation
    // request, and if so, whether the URL matches navigateFallbackWhitelist.
    var navigateFallback = '';
    if (!shouldRespond &&
        navigateFallback &&
        (event.request.mode === 'navigate') &&
        isPathWhitelisted([], event.request.url)) {
      url = new URL(navigateFallback, self.location).toString();
      shouldRespond = urlsToCacheKeys.has(url);
    }

    // If shouldRespond was set to true at any point, then call
    // event.respondWith(), using the appropriate cache key.
    if (shouldRespond) {
      event.respondWith(
        caches.open(cacheName).then(function(cache) {
          return cache.match(urlsToCacheKeys.get(url)).then(function(response) {
            if (response) {
              return response;
            }
            throw Error('The cached response that was expected is missing.');
          });
        }).catch(function(e) {
          // Fall back to just fetch()ing the request if some unexpected error
          // prevented the cached response from being valid.
          console.warn('Couldn\'t serve response for "%s" from cache: %O', event.request.url, e);
          return fetch(event.request);
        })
      );
    }
  }
});








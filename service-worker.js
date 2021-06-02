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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","70e05c34a4b07600787574ac431e5a23"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","e2a43df81190f41c6b5ebe3601fe2f7c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","e90d1ec7bfe793a0594fd4935ff14737"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","f2e594a13fb6de3837d2750cf28bf3c7"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","b36ce0330d64c1ca661f175d2acec249"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","7d860f77bcfb18af39cf323c1180c06c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","30f5c93ccd3052538a770db48fe899ab"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","7de1853be800f48d95e8e9b6be344518"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","4b935d942dd300556ed151aa8d055f49"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","2c48d8168b468692cbd29e823b6ffd1f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","1f8b90d82713839478702b6c76498b9c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","c920da26181782d23ce23ee807b8d7b2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","a72328c52f88fe23bf861b1046f82ece"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","03dec10c7bf010a09af134e7319271fc"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","65e56c09221e6d44a710c3ad30d0e38d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","b4711b8139c8fa0804e574bccd98afb4"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","9336ba3f621afb0c6a8f22f860adb855"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","723e7c866d87aa3bf14567c14e8fc28e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","645e88fe52bdd2832949340c408319d2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","7de8d778bd4b4eb3cbc7d06c8b643e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","fe7b1713c3aa805ccaeb86c584a58aa8"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","c0b2ee8530b7a99b2f608a6759ed430a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","503ff0180c03002a3cdedbb55f169082"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","792a0a3b9c3ec2b9066df7a6d0dbbd4b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","86fbd884ca70f22234c86360a7b91df0"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","4f15005996ab1c13f1927d902b89b64c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","cf9d855ee57caa2e5e8340c0ac22c558"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","47a7db2847738716ca5defa3d155154b"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","873472ed320266ab7e955921b8ed963f"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","3e0d527386da430ef9812cba25211737"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","8f7a64f5449400c5a0c3d82e6ae121c8"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","cf532ddd713a68aca0125af0dc68e479"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","100902eac2536e7bcf88659d48613592"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","c25d6867adcf7338f0686054ce7153d6"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","7295d87bb2e5fabf03496d34f16f3b5d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","b8bc0e6afda427c20857c006f317d9ca"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","a55adf6ac70992ade228705c582e9f4c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","4834611d1316abd19e6cf8fc2b473452"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","7ff7260ce91a1144ade6c55a55add231"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","f808f9aa5e4a30019c67185a06536da8"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","84b5bff6566488dda4b413f47314f9b8"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","70f6a3d4db207454d0d33e64fb64a18f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","4b8a6376a7db65e9fa19335d809bcb9d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","d4506c09acfa17b32564673175415a8b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","991d512af744d05dcf3d43c7039024f7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","86218bddae4d875e01fc8694b83ef289"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","e18421dd143454c40f2faab83d30537b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","573ee7c77111535cbdbfbdf31090ef0d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","dfac5d2c3b01fecd259c53bf895cf659"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","a1de0dce97b698e688870441328b820b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","10946dbef9dab444c237a4514b614ba9"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","74695daab8ae8d9c4a1e314a5acb9994"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","71bfa6cf0b65089deaa10c262d38ac2b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","4dbc7a5c721cb902e67edbec5d4563a9"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","263524297435a06a7f3470a53400e7df"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","e6388b62e1e6ac8db7404da606630611"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","aecd6339fef014a1313e3931d939c185"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","dc06c88ba92af78e8b633206d9c4195c"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","ce54e2ac5c41555a8c3f3e354d8db1c5"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","4270fb0972bc2d5d4cc485af6e47e01d"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","465f0ff19851e94a14fa26eb2c60df13"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","f9f08de80f63a6fb67788387604bb6de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","b963095fbe3ff7e2d4400252c1a214a1"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","792aa7b050f62239fac21a683a20cbb7"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","a12d483641236328a4cfdf894a952a4f"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","06cf6e202e96843e77615d3fc7253b01"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","c2c1e2d7f7a39e8069936b8b5456cda4"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","92437f3bfed8d49243e32aad8383ec03"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","d2a6fe56122773a6344d1ea72f9c6bf4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","d6c00505e1552fd2380b08c800f6b807"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","b7cdb03ce48f47c0e80710540e79d711"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","41b7578be075ac15b356367acc7d1155"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","b6aa921d1372c491a14a5bd597c53972"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","00c30e6577b5edf171af5588d4ceaa1a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","a57cc53948791db7f47c2cf836668df7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","264f48076244ee9a458190d74f5534d2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","cda3d158e69ae9d264ccce3488620bd2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","9de377ac9d9311ee6e16839c30472bc3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","128d0dbd5cc7868b2e0c9b7daf30311c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","cb30ad67091b4cca205de5aa7fb6b237"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","ecf7e77928f711f150d76dd6b2fcca02"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","4b19ff5a0f4401ffb7057e04c4100702"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","137ad9beceae3c8019e74f23f187741e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","765f20358d9551aa07594c5d15b9560f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","349793c4a627f092c5e706498c83a103"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","55d144d2d8369c366d2eedf2dbe87039"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","73ef08eb6f6a49afa0b8dd3ad7de9cfd"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","6a4d57b61dc9794802413cf1cf3aaa87"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","e5010a2769bb13617261ff5d8b93187b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","46d4a9049c93e105038e12860c726df4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","2a7799c794770a45788333f3fe5e2332"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","288f2cf5020b1e035586fc8d297781cc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","13774d883fa67a695cb71a08b8414576"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","76329e9fd414eb53dfdad2494a70b1e1"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","a1a0713380f813373487cf16a3e56fd2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","3ba0ad299c6bea51aa85656895b39b8f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","feb0bc70e66f743265226e79834de1c3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","15ed1cad58345684dfd18b5b99c050bf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","2601bd5e4794d589ac436418062a4ec1"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","f388f8cf466ef5bd59e9303d3b9f8ee4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","6b5fa11d7735dc4928751eb11f8766fe"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","7f1ac94dd6c8f65f87e1631ac71935ca"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","af3dcdb89fbcbc0ccf1ca334db486d04"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","d0e4a7cca652c05f42a2a402830c2b49"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","45df76cdddbbc931e1719f843114d81f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","961c2fd1a591aa6014f261d9277f963f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","ca4deaab0ed43dab5b785dddefab361e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","1d4fb649f71751525712279b88acf6c9"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","5c25dc38aa403f91f3a7d1fb5a45caa8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","afaa75604b20ef233d870197308b65cc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","ee88c4ba246a5d1c7f415275a177eba3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","7617e3cc09af47f0bd39b11da3f2ebb0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","c388577d721f8f4cacf91024f373938e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","deb7adfea11d3ff5987fdb156efac0ec"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","7c0947e1093b117e7c9490cbdde490b6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","dce6fd0f63ad4ea4b2629c609b2fde30"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","f7103ccc4487059048bb9ff7314e58da"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","d2c3c825736822574eec5d445088cbf1"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","fb44c3486c900df98021e4c59ed76c3c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","6b5f30bc0b1ee49b48623b45bb33c00f"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","2a620e2b9c4e763b86419d38aef5a558"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","dfee490454038ee07487f4a13c7a2fd9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","987523463c253bdbcda49badb76726f0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","7ba341a11aa09a2311fc056a7c2bd14e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","011c6a138bde70c84255ddd121872c26"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","472b13df745f38d2d8b2a8a80360e84e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","a539014b0ff406cf20c569ab6cb5a3de"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","f3699a8e745bb4e5e654f6a85da52c3c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","e3d10e198782552836eaf829d385d06e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","465b0c78844d9f41bf0cadac89eb80dc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","0216a1e9bc4e8c1cf133e4de8d02e3a0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","efbeb181ec6d213a11ae0685280e3b01"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","d90867ef4b0e996681165c0f6032010c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","c95192309514372bd531294e8a03a3ca"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","82a2bbcd7ec9bb0a63204c7af9c4c868"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","5dde2c12946a043f8cde3da0a1fc19e3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","399d5f569c93ef1dec4b7d0ae5f125a1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","929ece04d12af7346aaf1672370d3c84"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","bee249ea9fe0681e9adc5431c767545b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","3ede1ea3dd8465873aab0bc649e9e5c8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","2f5bd48df26ff735282308be03234f1b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","6c7c3b1a726e5e1f7cdcbd9b12d07706"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","d80901325fa791235c711013f6fdb7f5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","2ef11ba0cddb88d1ffc96c4349d87cf8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","677ff642f3f321f06caca04225d9b474"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","c733b4106a5a3ccb9e19d64689f566d1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","1fb09c1a88dc4c675193bf697540d9cb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","699b0e8525b7c8d8ea06428df3679492"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","f3ca0aecad3032f8d3a933c6bb7fbb8d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","53661d8e7dd3fd0bdc7baa6573537a7c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","2e945948442f70f7205f8571206738f1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","d97f5dfb80cc730a3e76dbbdebd746f8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","6cbdcc5ec801c58ae06de040e06d1ddd"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","252fd617a051b55ec6e1595bc2ab0430"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","a36d0d224580689d7350c092bdd06d7d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","59355f4a158f8d2e334c08457888af85"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","037b73a9c46499c66b19860362e9464d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","031a829183328041228702a62bdaf2c2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","65ad7d8de85376d139532eb79b517f63"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","83ead4e7bab6421e8642ff6dfd4bd925"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","0b989c647367b8c6c10f8f4518be67ff"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","24aed0d3612e9ccf1a7f8e3d99b02fa0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","9b36763b1862f27bb1e62d06664ffcd4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","6ae1c93ec67e73831c57084ebd2c75f0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","06d50119e2722832d02f4d80dd9c77f1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","924547e143336cdc644269c12dce7630"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","c5c9e650cf474390e694672312f82fb9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","9e95f7e50036c796432d83251e46e247"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","77736d81f678c02c48fec053907d4ddb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","f5a75bc3ffc261560bda260c9dd32bf4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","24d83610fa17b5e7971f1a75ffcb905f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","b1ee42b56e9f113a041f992040a4196d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","1261d3cf2e5abe45ade565e618f877af"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","7957b7fa66e44664786e4bdbe3da3def"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","3029a961ddb0939139e79cf200332182"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","5cabb456e0efca22797d61c8d65cd896"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","381231f742e03a07adf6dee0dc9904b9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","026a5778df77c8cafe14e8de399ccf94"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","58c9f64016b75019dee809dff588776b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","bcb2857a7a81a47b44919fa41e91c32c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","63189edf022c19898aebf33935f2a42f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","41e687504f31a49148c18073a226db38"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","e2656e350fc62d9c68fdcec0045c7ad1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","e156a42998232ffb0166c715756103a4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","24c166698340bdc87693efd9b88f40f7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","2144bb198071e3e9fd5664ac72d43e00"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","13cc98ff05a634a28334b7701c872187"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","fe25a5d27b47eaba91b05fa8fc2232c7"]];
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








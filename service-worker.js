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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","5ef230a11def85867640c2389278ce80"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","eac1fdb8a327f6bdd0eedefd38e154fe"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","b929b9f837ac1acc6c2f05d6de63a273"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","0e2939165508aed102c72cafb74cfb39"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","1de2b6213558d3e162abb90837d36956"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","c677fd9e34d1d9ddfe84f894c00c272d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","4c8807a100bf14cc3d55cffc2ca0846a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","3fae6d0ccb7b3108ab07035e26b96ca2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","473155574880f43ae389586fa9e686a4"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","7fafa2ce85afc4eb1698733c98a96e7a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","d4aec7d9122cd742a5e205f08d2126d2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","0d863190bf5ae565c6f0edf675588b24"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","53670955aa13bbeea2a50e3cab724b30"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","7f53807072339a68a6de49435688fed8"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","3b2a0d3162be5cb3bd92b53137d99d05"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","0428ead7f6ccb24d55cbd91688f4ad38"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","f6d9077a4ed74604d70ec64288f1e610"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","f649bec4eca7e2c2985178424f5aacc1"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","ba58fb64c7d603ee5a3cd603d23e6e98"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","8c5b04d9151b50e36b566fd7e648dacd"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","236cc2d5a9ab0b6d9fa47d26896c7072"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","dc3e1a8dac3ce35df48236ff76567f05"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","e153c9227fd6dc267d370470dfe0a8ec"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","316a2d546730b9cd496f9d8167ce2e23"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","a5744082385e7dd93de28ab65bc93f0a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","49908619b1c6ce5c67e87c2b4fcc8934"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","c990553e68bce85ba6f3f8fd8cca99d0"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","7b62744acb4f7aa978b2ad4375456e53"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","8c722ed60ede47c33f6056aae364a419"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","3e0d527386da430ef9812cba25211737"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","74d3558e1251a0c97a8dd999c4b1d8aa"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","3c2f1e049084c825e256423dd4a9296b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","c9562908dad70af79709c4d0e82e065e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","582541d7f6ed0ddb209eac9f1635dfe8"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","c845459d299161ee50630588ad3b1218"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","c2c1015c942d0f90be12aa115ab55774"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","271981d7dc51a2bc043d621d7a6febaa"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","c5754c59b0fe32cd11d9248b1bb46be2"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","1ba65593ed12f6a8a14f94a09701d97a"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","abc5fe86fc2f8697a1c30def4ca501cc"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","d571e2a856ab6d53db97f6418c977aad"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","9cc66694e2b7a1fad0af3e2325f87887"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","cc9b5b82d5b49835d09eea8fc83471ba"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","76690a549bf3e1f1264dd0cd0641b4c7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","9f91116cc6a59837a9ea1d1015556df3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","4ab113e563e6fe0d8e348b2725c8aee0"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","bdd5266dd7fd0750a640d514c0278010"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","aa94498b18f04cc5984f30e38267e5dd"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","509e8b90c7aa975c8d92b5abe574ad7d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","2cd09c3f67a17691eb2dcf82b1d94302"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","dc4f6bb029f03e6e7d524cf194b95c05"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","627d0b97360f84a3e7dad8ac65f5b2ae"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","657bc3693d431e1034691d2a8cbd6b3d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","a44d066ecb7f1babf2c9240961e1edb6"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","c4627af7c28ee4c7be5f32ccf2995bb3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","baabbb761f7dac0d34afab5db967c8df"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","1e7b6b17da340427a30548fde2d8a99c"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","5b9693cfa3e14d5708c002d1661e6e67"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","477768e75e8aa47b0ee4da186eeab32f"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","34631da55570c7872505ace152967014"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","1e816241f8631969c8916e35fa530952"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","7408b7b17d1a51b62cfd3053f316ddbb"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","f7039b4aae55951eb6d5240003857ac9"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","792aa7b050f62239fac21a683a20cbb7"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","dae93871d186eb935f728a9aba9a0c5a"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","5e7bf2603b95743c01e4dfb33107ef7a"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","086a319623fc37695e205c23e1bb5ada"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","af3e572f5b8946be25ffdfe9e86cce2d"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","0b03185ac1442f2f4c8eb532faee571f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","a0e566ec336666c67ecebebb229d45b0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","4d66613c766b32577f0fdcbe00a66d1e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","1c3e36fc3e25c30b60dfed5ebc581f1d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","5aa29370ac2c746891e0183a994ea930"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","1261d3c53108f64c8cbc613d2735ef68"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","e7d2200b8381e13838b72f6f1f1392d0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","baecd9e690f2980d9319fa0d5ceaf0d8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","091da5b3239b317b41ba21863504f4bb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","d994f8e3dad4b3a8195101e8455845d4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","1e32f9a22a98505cc760b0a39784a851"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","5713a94c7b814f409f4fc8a54448cebb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","b844c90e4a5ed2f54ecea804a9d3d6da"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","ea1a1620a4a76161be7390ca8e68edff"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","d67744426c60f059e57029b20dde7923"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","d20ca4d703893407fc70c29c6cac7cb0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","54d22b19130646fd921faab79fc791df"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","a3d1bed0297091f829c3ffb98bb16359"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","aacd116051cc769f80fe10fc4c846908"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","f7efbc212d2dd5d75f4f771fd400f606"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","739d6781ad306abca4c8771beca92caa"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","6a9d37fe21c6ad994b21110d72327e61"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","1606c0d08d39bb2fc3e96d071aeeb0db"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","4d868f89112c2bc6b294684470244755"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","7bc070b5ab8019069af1beeea35d8810"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","a259723bf77e0c39866170f56ab8a396"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","75163bca8bf4804f09b9ec114855b43e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","b1026d36ff8c0717b24433327b58920a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","0dfef90e2da87a930fb70b23ec086ea5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","f142269f8e07977bfcc84822e454f37e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","8020922d1e0da0eadc84745defa9ab3b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","0128fa42bdaae9db7130146d4cacc296"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","d390ba8bc5b3db62f15c70e1491a57dc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","815521517db79fc5976eb2dda426a800"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","617bba3cb12344a1754d6958fee2336c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","d858d1ea044a172acbe1f52906ca6c83"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","341c9de3696f6c9f40b6f7a30b39e558"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","74473c97f4ec385207f2a805fd419f4c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","b756fce525771fef4defcdf50e9afd73"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","57bd96e229450bdfcbcf496cc4aa7bdf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","560bf80b783cf503d84c73810e4a4ada"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","12e9b3ab7fcd20f168522a39c5eae0df"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","1a18e80e53fbd414ef3c4ef93e1f7a6b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","81c3d7449e15004a78fd297e4d235736"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","cd9457d03e2d745c6e44f49b52961304"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","9761cc2c86b2cf4a3e8533c18326cf8e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","d0c73dca71bd5c830a043b70fc15e73c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","f674faff650a22e3ce40b0d2b57165f7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","965fb7180bca979076967d966d9b37db"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","77dc6e6d558f15e5173a3435786a5bb3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","553a5d26d5beed9d4146b082509c2282"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","8de0ee58ee6a799b4a13cb85489a0a88"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","1e3f2c3e77c99064e062e2f3dc07afa3"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","65b2e1ee4573c2911fc6c4122a8c4db2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","7cd5fad1105d2879c242b1c49365d0ab"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","c5bc62252d7a73956cf57e3c917c2c90"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","c61e08be98a7a5c6743778dc1c477d80"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","ff625d08699795f11c0c43b3c934e993"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","a42852e8146f7f3ede545b2ff0760cd1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","20d515e5c96dfa758d755810db0d59c3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","5666d99aa43cf3d3f12df2d13a82a2a0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","884932fbd4b7fda1aecda083705f356c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","8e4dd19978a6e2990644ace520abac7e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","4fda1787ddd04699ffa1c5ac8809f6e0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","efe19b8866b7f60187042c7e476cfbe0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","72e7167b5aa18dcff51c08f53e021b03"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","4a763223d92ae94a8527796a08b91a99"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","c75c05cc1d57fbb1c3cea0fe724bf9ba"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","5eed0d7b628d89cc2c41dc2d7557fa40"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","f47a9899b1d9502fa0a5354ea254375a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","ffd0718be12ec2a0d0a7242b9e6ca183"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","82d2d223895e9ee682faad599cc91334"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","a24d60a0cc01e988a6456eba011cfbcf"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","af67787d409f8f3af6286b9cd32dd6cd"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","d1547e390c3cc0d5ca4b53125a371d34"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","399eadfb44dfb32f356d1d1f06a01579"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","f0acf0f775aa9240cba5206e091c44fc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","86a97538e6771673f72d593e7a831022"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","c561da7549bd72662049f0088fc9cc82"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","dcb234e26310561aeceaff40fc674f61"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","2cfecfdc8919297add26babd7c35f23c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","dcd27e4860694f81b97186690c0341ab"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","51d4959daa46fd15398cb90c80704826"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","5b63dafb20429807a02465cf0df6d999"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","113a835f127309d965294cd91fd574ea"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","cb590b282450b860a23e9e4407871bca"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","5b4f47a5a2501ac83c562c6ac31ee7f8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","eb6a72ead6b550be13744fca725dfdce"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","b201ee499556ab1667b56c4f536f5dbe"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","53c42c2b1397974c7bbfdbd3b3aa80b0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","726550abedfdf75a64c62df891c55041"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","0cd0615a6024d076334a9712250a4540"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","679f0f5785ca4ce5abf4afd20cd651db"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","3bf10af06330b4e4c9e4d1b73aaa8c3b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","a3c1cd002db9f0fddc5025c9241ddfe2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","3a2c9f94c84f7137f444ac03a62c50fe"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","ab05896b8986964899068c418fa194ed"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","5f7a0d2d390754ca21d297d4de755697"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","0673ea84bbe77269baf226e8fbc8e14d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","7e994f3114017fa6f6e5e7e2f4f396b7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","7466fbcb7fbfda94e9d61fbe822d0031"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","c731dad28870557189e81ce37af69eea"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","25c1a22def7be3d020ec6581e8fdcc08"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","903d4a6dc6eb3c42e297e05e5d371647"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","eea530faf887d68b8551975545766ffc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","8aa8795ded542e8233f39d5792d617ec"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","67f5cba4f7b58cbf73264a33a258ce7b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","b8242b91cf92c3e84f8e6805c474c3b7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","0724e2c67c45888bc2dde33ea4e7042c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","3218c8583cf5eb530bd18cf00c404244"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","138969b24ee753a20ad062295b543f15"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","644af92f1cdf6e2afc2e9f8d17d21124"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","1b65f3bbf1b61ab12195a55d9f33e261"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","33a0875df4a95ef5fb846b0931190252"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","3d04ab60a0e379d98cba7f28c8621987"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","db35e8b3fc1714e60662431be083f10c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","7f20b43ad960c5479506e25138261378"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","c3e41b256cb22054bcd55b6b6b67e50b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","c4dd32d6e7933fa066ab006fed860123"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","ed400a9302c8595a02ff0ae46288d413"]];
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








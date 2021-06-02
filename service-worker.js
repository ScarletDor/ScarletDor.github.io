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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","79bce8fb0d4427d855763db1406a9fc4"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","c55f864cdd9c2e98bfde332d5e24759a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","51668076e5e0942c9c4a13c6eec0f621"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","b9c7d65ba6c736b4f9f962c30352802f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","57bd6825eb045e9d83bef103ef1651b7"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","ca049cc63a9aa4d8f86eda8e23ba4a51"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","164988983281d3812f09fb98869d8e8d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","2f104bd5712fbc836b968b3765d2ceb9"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","1cfc5cf87dc4469b40e0aac5bf9fe1bf"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","759556262e7d4953417db7aa0eacece1"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","4699a16fffd8a88ee2a9060dcd75521e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","44de36dc8f5c45b69f971b248e85f2a0"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","0bce56db579d7321fe451d1abaebbf2e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","52d9c0b0059367fa6d2cb994ddbaf724"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","e5182504981138286e45bf8044b92730"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","f025cac214b5a01eb26e14001fc056ea"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","c60918bd2ad950b299ba0a35e3fb2176"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","8dd31af4919901a42b136ce16f8a9b3b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","210512cdde1cdecdd10723edc166b5ff"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","3410a1bf3c7bfffd4348f60a87218b3b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","4454d6e165f9152263de5a7ad2bc6b3b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","ae3bf0577cd0c92d0f910918b66c6fc9"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","a03a9c350bf34bda2d2a3f9687258a71"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","c4765c151d0fbbe40ac80114e56ef0a8"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","d19e9a331b167046375440b50cbfa2e0"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","0a697e0884bcd4c3385672cd0306fe55"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","085a38ebfe2186a279b3c9236508675a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","e17d0116be679a40ed9f89ac79f253cf"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","49c532831da37369c06163f9f1e297d7"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","3e0d527386da430ef9812cba25211737"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","cc157117b9a9240a27e56e835b6b106a"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","1e6371656e22c63211ad9640d5f1e085"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","73bdb305e4791f15999ef91a78e98397"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","a087f7692fe8c433d6666ed73d68b33e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","8cdc41db93fbad42d398013bd3c64eb3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","da585281c2b5838adf64761e0168af3a"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","f01a03a618ba191ddce0f0cb1d9d031d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","a5768ed82675ddd483b74385dfcb0eb9"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","faf2959b9d7a4762a88cf40f1dd4590e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","c7130c612283f14f2cff917881140c68"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","9e9e3d3d8a7e3d9c99a973145c66b502"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","48f207acbb3c7bfacd38b6ddfa3e6eb3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","cf80f89b6abb20e89e0ab63570bf9209"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","aa398e0f78ca21a80523c0582fcf7412"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","d2720aaa01ea2812bff8529890159818"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","9142196cef2263117d268a7dbcd26b30"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","1e9db5e59a634dfdb4dda8874e738968"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","eec1b6db8b4bf65c32840a9e0b74e426"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","49dc057130377cce3065c1c18d17d81f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","8522704d2cdd30d69504f5398d6cffa6"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","6cfcf3355ebe6dabea6dc03147b620e3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","f9eeedeeaad420a3bdf102599ec4fc45"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","47e30b1ad92b168265878239100ba874"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","8afd1ddc42387ffc7719dc960006a33e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","bd3de48b213002c25f9d93cce07edc68"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","d5d320f26ad9b1dcd0d113c9e3906e1f"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","bc035bc704a62b8b9b0b55f8ada375e1"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","b778807952126308e94a4b43944932d6"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","9ed94bd688f14ba3ab84e184a6a7d43f"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","01a12f34f673c758649feebd68176f3d"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","b0e9432e94d9ff3f0d57a1042674b96b"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","1e71ee4313fab2a500b6629d04739f70"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","d8dbf9c074d3be6a0ddb027be67affc0"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","792aa7b050f62239fac21a683a20cbb7"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","06adf47fcb5d5ffcd3c71dd81f468e5b"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","9b673c924dbacff515516dce0f6842ae"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","10572efa9252000b6c2169a8b482fa8a"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","899af39a26000a28cfcd98c5b2a8ed70"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","7dc0f961bfb1adfc0dc4c0f6792ab4d0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","16b36d7f9a24ee431de6e2679c5a4f9b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","a2759167234e511972ff84954ccaa739"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","d2262434f9f1a031b47766a08f1a2dd1"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","663bc2fad97a0c81303aa60b0e689918"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","c4309d47668811033285b8ed18053571"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","f17519f5e9962057810dcb4d948eca43"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","783ae956529dd442ba31c52557c81f8e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","ab3138725db5b44b1234f9e24b3279e8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","da1a53b1e2ebd4a18077e7df5f6776bc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","af7065f7998bc6213586458e5a0078e5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","909678543291d45392bebfc53a5465bc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","c8a942cff24ea78535512b45e08be50b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","35f1f440fdc38ee196f0028d6c6fc0e4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","02c07c8ff83df4bd44974b2c394fe696"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","3ec0343caa58ac2507126f21a3d6a34c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","f0a9d1237629d8fdda132ebc3e51acbb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","be0e447e354f86d7ce8c19372b5d3325"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","5e5d27a1afaced9eea24ecaa28b451ff"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","ba49051f15928ab7adb8dc36fd18c3ac"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","ac17dc61ed0c231a74b4b2a20d2f5cc3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","3dbf56b32358a7ba028f80158b6e8e53"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","9a0fdbfd42703db678c5738d3721e99d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","cf151e29a2a050fd19bc059e885518c3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","1b3df628dd2f61bbcbef0e7a8db6f125"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","92f545c781badcbe10ffd710a1084fcd"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","72af05d6c38bc8582bf400372cb17986"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","54d01aaa8e2480fb758770da231ee57e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","ab3be19d1621d1c709e8e1133cd1c94c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","9dc46f7b0d51361702b0b74e0900b28e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","ad85f9460fc3787125c407170cf0a907"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","966893d480d43f0498dfff97279b19cb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","a1bf610270ad866b6c96b79968449d5a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","7081cb11a9de6f602bc56e202ab792f3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","6b66f3566f43db9237b75e2ea368778b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","eb08ce3ab31b0a75e3261086dedd93bb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","70a2abadcdd42d23813960b9759d7e71"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","552b4a8c85eda9cb430ab6100cf7321d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","f4b2bbd90a4b87fc4b8276f0f5018873"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","ec18b1ca3d67a23b116d428c74691a37"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","be03082d512829dfabd3853a2d299950"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","c265f0422ec4c080079bad4bd39edecd"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","3cd0dfec2a42921a4ceda2d5a12426ac"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","44d5f4282715053380d1ce7ab977ff54"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","41a84cb2ec2808751aaad278e2675c74"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","a4f7fd701d938b37c0fcf8d9043a372c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","d8b893e256641a1713ff7951f510ce7c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","9bd0f3020bf126d9f0b4e2db5cfb7d9a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","ac1bf12dd4c7e054c3a6cf5cdc9629d4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","f17867f2b753b2dd4e7755c1bad533ad"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","9a7620f9468f4ba1f4bce4a9eaa5502a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","b37dff3d9f6a0a05ebff095acee86377"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","d09a1af4a798e24d8b274cb22fb35a2d"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","b710d27075b66517315f8c0f9050262a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","db38b7df1d2d1792ea73a93ed12e4a0a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","57ce430dd56796ab1e9e4a9f96efa6d9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","769a82f4ecd6ae7acfbaef15ff37573f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","1e69508e078e284fd0f3884ca7024266"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","827a5b73c1e13d0be68902df4255fa9b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","a687fbae9859f49e10e96cec405b54c9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","e1f6538c1f15e6cfed2d4b4127a4c997"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","c228aff801aaf91488029d11474a21a0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","6f726df4d5765c6127881d034e2b92f8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","076c61a82a26281b2fdc8b2d2a1d33c2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","b164f5b6a0d7505e0d1ebae7f3a6697d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","3ee70125c08d2b32cbfe4e1ad8f14f63"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","25713dde55f1ace72b3d317ca2907fcb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","00df7a49d3fc9ca2c1ed0836b29b5a0a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","fa18f4ba2ba75f02e58be89baeb68b99"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","0669ee17fda982e05a6f735c678ac528"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","da64eff7d1de3e676814bb81637aac46"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","3fb6199302dd42620c88ea021f2b14e8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","01d5a3a8feb23593d3fba3b52b86b637"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","8b91a3ac464290eb17678180456a21a3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","3bedd7eba13192e7012b64bf64825f5c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","d97727c258e47aab48f0ed86adcd1058"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","87bb254355909752e5368b5726abc08a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","55f6cc294b4c3e25e573b93ed90c6a3d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","4f804ca6a8bbe88575bbf7bf676383aa"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","2d3e6ae4305a2fca164001764ad5ab4f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","d924cdb0d60715feaed51c9822e72e17"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","ac2bdff047817740d7ee85bf2086a9c2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","b31f5810d06acf2fa26acc29eb0c10ef"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","9edb3b64779ea804df6508afdc1ccc4c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","5a0a72ff5fe9544f90a3895c544a2113"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","22ecde3d7845eaeba39393d3487edada"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","178da67b09aa4c014e9e8a97e3944fd6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","52c0df3f7f753f65ce0aafbf5a8bf85d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","cabdf26ab4fe666be32fdcade83675d6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","b43b9b0c1b50b1b1bced1da0dab9cdaf"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","770008d190385b398d2a4d660517c039"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","bf0450eb77dc888d793443284b080f63"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","d3c5df05c11248ffd3d14b01cf3039f1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","1ac8a1bbdca4a1427f89c44aeb3a1ca7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","14fed65a356072ed868ffb7c2fbdb060"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","95f8173389a449189afc5530de98859b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","1b016dcc50eda84f15fd38be785365d1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","2f1911ede4dcdec54b253702f0cde46c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","3975c9c7dfbcfc3074a5476cc303fe51"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","0edbf7ed01d67bf4a6e724979350498a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","13cfd108198545a42b6617949193ff30"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","8ded58c852b4ac540bfe94011db12197"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","00790675a7dfcd7165a7fdb72e0faedb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","dce18da7d2395d0f4d5dd7f1e5d936d8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","10e5ee968d6a9181b9afcab68d6cd92f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","5ddd63b067b76bb0753c85b3afc92f53"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","ff3f070e0c45643a9a59d3e81424f7d9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","1876a49e8731fe539cf67a5a98713070"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","b4c51c287a6cdef9559d97e524c74372"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","c6094e1d157c41af6e886f1b829c0370"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","a4b92f6213eef8c557d8618add72b44a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","63a4b759a662ce7d0cffe4237cbe8ef5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","3ff41dfa2abeb8893cbcc59485217efc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","9eed140c58b5d0d90357daf7174b09d1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","c0870977979269104139f2676d969b57"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","3f1e629cfe4456dab7e3b614a0e35bfe"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","c87c6740a605b01585e427e9179ac726"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","7c37d306d49a7c4cc8e1c6603698be4d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","51f5e4da2df05aeda551084aa4393728"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","fea88115814b6547cd53335c17ebf185"]];
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








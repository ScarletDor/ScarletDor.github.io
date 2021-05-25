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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","bf1c478d414eeec1ca3e975ff39af104"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","f2a81471a48b2db516624c6c4d1093b0"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","9bc3b296ebd5418a5fd40b63263cbe11"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","d4c9397a56fd42d9ed744e311cbfdca8"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","a1124f658cb65ce3b9f9978c677b8cdf"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","91f4f63c413426cb88a64d8e2e68ba0a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","aaf65a63ad4332c2ce0997d0b14706e2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","ab40e190bfe6be20be393ad65ef07f24"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","8d6cfa74d81f40ee541657ce4a7385e2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","f2895241301a118b03b9cff65ec52649"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","b5743eed390e89eddaf3be46b0e2cceb"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","f1134a49046d8ac8115868f4175a8de0"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","33b5642c4bb1f64743293b5fc2f3ab1f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","8abae0482640553c9731876c3990d383"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","a117708c668fe975a41a22cb12de38cb"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","b55c49747348406789956115ea83a60d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","f7612bab81ccc1399959a76ecddb2c2f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","8c86fa96674a34bd7021a2584e1324b2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","673e59b706bc4a12f22e6cd6aeed328b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","03e0db86bdc1c41d99e9eaf582d1278a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","14f0c50f04af81c4c37e133718862852"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","f4e6d15aba050eec00eeb2b80ce45bee"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","714f09c242bad43ac896d66ff099bda2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","e92bf03a718d49517e9793b36a33395f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","50ddfd403b028f2d3f9f71a112f9f979"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","643630a70bdd7ea14535f68d143470dc"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","88432ab5cf218993c008a3a2dd996bd0"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","3634366fba55b9e99898efe5c604e927"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","b9d0cd375e3229676088bf773cef8807"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","3e0d527386da430ef9812cba25211737"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","28435595cf1d137c1bda53ebc4ab75bc"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","32e3d3ea89b0dc8b47e1466541d087c4"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","9b25d79678bc5cdc54038d696c1f4e25"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","a9004a63e14063f2560cd2db477ee992"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","71cb3328dad30229b76f0eabf168691b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","67881fdf62464f93cb831035bbdc889b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","7e7b272cf44e119577f7a2682536dbb9"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","346aea45ffd89606bac1eb90d2d52c30"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","28ec0c27c03f4ff8a3070eff1053aacb"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","263eb6cefb225ff9b866dd4f5ddade08"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","fe6b3cbe58ad5435f0578e96e6797136"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","94ba63dcd28f6319220ec3eec3773758"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","da26a460e9e5ec2d7d94c5f114591b9c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","5f696869d56899974452b35eef332b8b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","9cdcbe49fcaf0bd0e1b185adbf860427"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","da797251a8b0d6a253b351267ef438db"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","58c975473029d59d82df650acf24a6c2"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","71afae3818c68fe66f36a3d5919551d1"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","7be1b639069406812b2c0314cd27c6ec"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","0169cb4874defbf9333e3f951304640b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","f3d208a2f04cd32cb0c1808f2f1dad46"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","84368f00ed78af14d82ec841a6dc3a8e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","691f3da5e09ea18f4e24db6aae77c19a"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","06b62015db80019cdfafc3d479010b1d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","b1e6f489a7c068cd3b8690f431db98ab"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","61f31597969557016d022f11cdc22b0e"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","2dc1b324f634ab403a25b588848ee3bc"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","35a4139c0f32696509e14ed2fa6ee0dc"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","1eb61dd650bb6a8356a071fc0d77ea63"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","e7a1080f690b5e67f5308e2235617475"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","f080e9b72e2ca309fcc451e6bf22d857"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","2568b994ea445f5d0cdd591c3f78958c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","756ab3835b190075dd2bbbc43d64fef9"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","792aa7b050f62239fac21a683a20cbb7"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","553ff9840c2f1137459d259822dbd86c"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","0886210ca42866920ef4ff6323480094"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","8db58c47557bd8b8f412232871ffeea6"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","96ad3ec39f1afd03208ea2faf0c6f731"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","639e3c14b575705c47d53cb2fb1adeba"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","8471bc3015515790beb4ff75b7e95e25"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","1052de85869a46ba099d953981195ea3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","aca812887b7aeef6dae136b58f61b198"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","a3cfa2436f2f4982e8799e0e53f7aa9b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","6053abc874898303698bf3df5d5b6690"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","6b44a3b3e72b226db339453606281aae"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","601f7deac832761bc4324c00fdd6ec84"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","d609e3d38435285f35c71cabbe40d50f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","1f5c2608cb7ea8252e1ca510b866873f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","6f6bc4cb6ecaf6e1de4d47c0043de365"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","02c1832d9e3b71634ab324f5b9f93f53"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","d464614df4f7ae843725c6bdb232e1cb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","06b7cf58fdcc58bdb280299dee1fcbc8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","e2725526c8a6582d2001f9e14ca32f2e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","eeb2f2235c93f929ce846d9c4f6ed1f1"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","2b71302879e1f84f095b472df7b3fb79"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","0385584a5f8521d21d384bddf3eab764"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","2a51deb307efa351307d0aeabbcee768"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","f1c1bf43031f3781942db6f55d0b3aaf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","9eabca0c5ea30537c409eea153dcca33"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","2af64ed3d0242159804d3a7cb4d76f17"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","b465d59b0fff1f19255eddc9c4ed9b46"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","7d4d29813d0e90f7308abdf9ff8ce0c4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","68d66ba64839a08b32712a4345ed2723"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","398251ad17899f1ca4aa7ec420e3a65b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","6cb2e70b9d9a11095c2aec7d59e46747"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","8d70736315b883ce7678c0a82a567494"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","346f472e50048e41d1481ff98f660ba3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","adc0ddb0e46b18e95ee9718ec416205f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","0856dc68979c65c89e4a8da2c9d92431"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","082a496f7db5ebaa4d0ce71f233dd57d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","155e6602180bd430c1b8361ee89b1c85"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","ce32f9e478a4f0350f299d08ef7307e2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","4afe3fe8ab5811aafa1b92d78fb29c6f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","f6715a221b1443e6c4f1a8d7acc850e0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","8c5d876a8b3018498984248f7aed4b7a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","00337a46f96d7ca38bfa8a11972454e0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","11fda127e54541121c4fd483b3595c65"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","409ead88e67a358ac77b77dca9e71cdf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","c4af91cc8d12871c71f4d18e6962d4e2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","693242057a746e9398d4891ae182b7c2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","0b145dc74171e73fd3b4a86f94fba656"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","7be5fea6f21e5a57079b5c7ce1933d01"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","e41d8669766da173e7c34b81b84c2033"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","1b2d0d754421b2a7cd370fb086680f6a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","af01f7320f3cd5ce6b55a41429c37319"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","8264648dea9bdae524f5431760b8ce0e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","289f8c0b2976706f4c2eea61fb6035b6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","85e4301268f9b7a65232ef3a0c5bee99"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","866169fcebe4997e228e39cb9b61f0af"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","a5e971068840ef6d550ba8b068f103ce"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","553e4a10ca3209237489c22f41a68d1f"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","0ef54974b44301e09983e0a9b327eaab"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","4627485778616e7ccdf2bebb373f1e59"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","de32c76283851985eb564b7463f3e816"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","314ca70245d3aa1d14af411d81577659"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","e580fc5936639a33a68c4166195d192b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","c87f72f7ccf7ba1051e2e69f9c894860"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","a214fcea5b93ff8311a2be7b0c12dd03"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","c542e13a5a920aa0d1256840166ee573"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","4deb7c9ec0bc9a14dc10ac13247d137f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","9f52167f05215e8b6e819586de95fc90"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","b6b572e2ef5c9c676613f991e01881cb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","a4bfafa0d0ac7685c4c229889a972760"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","f5e43de162bc9f9e528b491a5952422a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","c38a6aed0d326042d35b37f143244337"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","7b912398aa0ef6b0a287844b85a093ad"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","40aa57502b4b2e27f4d7b8e0a692ec44"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","19b3ca1cd55e767372736ce20f6b2b7e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","518bf3882a58e7d079f7720b8838e554"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","5da374fa587bc43cb86070ab61f0d75d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","f9bccb2ecef0a55a43f0a5c599235ec2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","b82d07b7c1f499ae953407e30c119fe2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","9e6896978b3a0d0279530e0408ff5dda"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","5fc9122467562947a2b9fc2f43c0c25d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","3e43328f5aa4f444dcf513472a302fbb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","f299ef91ceb88b74232dec698670fe71"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","f4b97a470a2cae41a24c302af94747ad"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","d19829e5fa615e04de5a7eb8c68f5fa0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","70b24ba003e4559eb5a3868877b4b661"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","f1171444fe318136780c6a497e1eb804"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","c497566dfad61f0b9384c9918c3d602a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","42ad820ae61903547fa893de2aef74b2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","9e0acefbba2692fae03b1285e97a138d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","1af990e9055902be35f94dd5d6a74a8f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","eb10345e8c0ef58b286dfa9786d8d296"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","ecf7497209058a55ce9578d290a45155"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","19c338e064cce71a4601c56e4d277e73"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","01bdb4b79642f353b4c16932180bda78"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","baadf36dfc3bb912016c105c468817e9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","12aff57090dce9f277501f98c807f210"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","2f78fdb271838e060a4d32295bebf9f1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","014e6bbca0bfba0a431fe5e587797004"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","693b0ec6ba8575e7cf51501d297ba8ae"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","ce574e3e1322c457dab59524a636b026"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","a4837e12e78cea9a001bece56d0c5850"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","33fa491a1a3df36718f4d4f98b2564db"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","ac829b7a3895546707f6878e74d6c6cb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","d01f69d598825c4cdda84b14523a216a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","4cde134c1b7db351362ac3f2f86e5684"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","f8643e0d5f7282249beff4051aa26da4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","12ca4980767bfad8e578c832d3323195"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","100849d7334be823c823a824283a00b4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","f5beb76b535631b9de520b4a36f41049"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","34f57b9c7592116fb811beaf9bbea5d5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","33cc17e1c45311d0d8cc5247237a29b4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","e1981149b2e4e771dc9bd289ef4e15fc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","f5820a47d4ef74e8d394294707fb10b4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","c06740fb90ceb8ebdaa1eb8af0a36e70"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","514323ff9c29b75160ae8f334b781e9f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","d883fc66466407aae242d69a8951f179"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","e52bc01f14253caf55742e9f05939ef0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","4635357833685f8d2b57aff82dc613a5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","ca66a9dbb9646558bc1f3dbaf8399c6f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","aad9b2c1ccb6d01d9cf0b8e8045a9e62"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","ac4092c637523c95cca5a4b5d64a6d0d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","487746b3feacf3f6439ce89d149d24f3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","a6d13b8ea2bceeea94623c38a6bd4c6e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","9c726cc46acff1a622aec01bf5cca5c7"]];
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








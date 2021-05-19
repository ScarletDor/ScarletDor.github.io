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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","517a29e339205fb2ad794b2471705798"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","e0ca5a98dc9239a91f17979feda7c9ff"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","aeb26774fc1ba09feef01310dba63676"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","eda164a74dd66464290a0b90d483b341"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","a42793936bf4b20c487bbb6054a1339e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","298fd57edd79c909ddc5728305d05ce5"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","4a655bb574bf7ee8b973e73eef11e056"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","239d9333b2c88c2a044f00b3c76af86f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","88cb6fb303cf85e08fa075ac1a1e5f68"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","3381beddc2ea69943905f48176d14860"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","861a782aa8e92beccd8ab97fab3695cf"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","d10a42f5163aa295a0df2701fee57077"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","fdd037bc0cc066563391f9d39dfac00b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","f8d7f63ad18e1d96460ec83794de7cc3"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","2c4db387da1c3e0d0c03339bb2610aa9"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","480129bac017c6f5c0919f8a59dfde8a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","e624a7b21ef9922f30c27b2f4090c99f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","50476362ccf2556c975d43c9ecea1f56"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","381f4870a770bba31ef7186ef81b7f5d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","505a6dc81e735798b62a74a4013cb9ae"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","644ce0df3e3b8394c439e9f0ceffb4c1"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/04/index.html","6066d9344c769aa9c73e8f207976eb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","fcaf8d0dbe2ae21207174bdfcc5c6433"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","1633e581e9391b53e807c877b01d0f8d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","eaa5f53acbafc03fc9d4823acb151dbe"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","17682a903b7143402bfa618f90b70311"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","fa66858d491cf8ecdca54fd2724355dd"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","b2d9640dd05ed54f4f6dfa3c81008c79"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","6735c67bdf90ff79cf6b3897147dd423"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","e92d5c8deb93675139f4dd23181a2175"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","905d2e4266f0a0734757f70252382b3c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","cf607eb25c573cbf2e5dd34913b8d88c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","8f16868f48c037e16ce84fe26e04a557"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","74127b6cd565a364ed7f25308926e8a7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","35e273909931b38e259151bf94a66228"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","ee47521bad0e13beaff2d278c9529e0f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","595b40f2877c7f517c69c785a5a549d3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","ee7f0e250b958f5f1dc64621f3438c56"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","6f1fcc9d7d4a782928688f0be2671738"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","09658395b0e34ad201bfc51d7d063c6f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","19a87ba6664946e889db5463db0d887b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","bc43ea709b7531261bc6b09947e3f7a4"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","95899c9b8815706468d4c5e14e311adf"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","f3c211db238adc428a618bbbce03b0f7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","215ea8127ac6a60ac50e010a2089065c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","621c1eda0ee2ba6b2b7c078bd77091db"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","fcf8d2a1233ee33ca6cef31c1fc2afdc"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","cf749ead4970fb6e528cdbeec5b4db94"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","e4f34c70a0834df49f52ca2deaad9806"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","698e4305f0a650d01adb94ef32d7ee77"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","7472f66b63aa20d94c19dce2e61a29c5"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","91a01d0149fbb3c3c354084cd8ce860d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","9e3990b4cdec85362d59fb780399b69d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","ee69d7bac325ae31089d5bc3ed647ed3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","3f932c1a889733f301f9be616e9ee78d"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","65ae0294a277e999daf79c2e89e5a30a"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","2099deab103427325812fc36fef56d9b"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","afb5864ed143f1123e0f4067493e379d"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","532d0cef121f4c0b77b48af9b024d179"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","082dcbc2a0e3f048df44f8d269bc99a6"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","19aba7994b148c7f68644e9d9c5928d4"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","115f664f3344cc63b0d4f163a801b534"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","73b637afc981cb16eb6a9c45d8ea7d33"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","b63a9365811d16095afd5b755cb9595c"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","b74db0b4c4e535c12fbd3333c51db433"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","d42bacd282e70f7dfbdd771f74d97169"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","90a2067c08aed88326561a30404fcc1c"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","b0a50d03fef4b8d301b7b6d46395fc92"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","d563a0ef0c298a3c70c184ff618cfcf0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","3d8ddc6bedb8d5ecd6bfcda4974052df"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","f5992febe145465428dd094712d67dcc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","03dc802ad156695a7416029a53150522"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","8b8f4b019a488cf2eae682169262ea63"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","e90a8002fb3902761afc80158ab8048e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","015c22c6eb4f92488d85dd6523f90fa9"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","5289021575d11729e7c1379692387493"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","140335078efd535530b9a2a11f35432e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","6c95bcfcecd781bd9bf7c80b30bc1ef6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","d3e67572d79d8ecb3971c0da0fab372c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","b08a8d39a67562c2fe422eecf98220ff"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","23583bc13ef86698cdb561b0503639b6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","e2a7a6ce6169b9de1f5189da3a90725c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","0664d4ad01a7123b20bb45584b355ca5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","703fc278c2d499217e50d52d114e6401"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","c9a3beb0263d8506b20261ef6656bbd8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","c0a6496b56276283a5f2f43ff6d6f62a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","7925ccde6774602333714d970dd08502"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","2acd1071de8e5e172d56735b10e5581e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","6f682ed43430e5a865541c065e823dbc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","aee9f50397620556819efa698836fac6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","19edaaf0838c5bcd1682422a907a63a2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","1cdfd9decba0ff9ecbf70d58f75ad2d8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","215d948282c55292542fb376e19de3f9"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","f116859e7a80d2651e1e281b67e95813"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","083da5a7320a0b04fd6edb705d66a5df"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","209868995ce8742957bb9a5da9199408"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","0d5211dcd2bbbab3f5ecaa71345dc120"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","dfda7fe86c5a3f159eba8624ce17080a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","e6e530492afd8840682dfe9a8a2ca433"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","8a1f581af5ae9b87ef2b3b59c5890a4b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","2ef76cc6dfae849ac9a599b583d38948"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","2f8bda6019e51370c81c916420aad76a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","584260ed08b0232b2ff2238ec17087b3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","5aa0c0d1c39c5bb79eb6ab056c90af74"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","074c8a368beaaa66f0f55ffd3731ac70"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","54ff281045060e42530de4b27eea13af"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","8f127038b678a0fefaa557a8519b85ca"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/c2d6f175/index.html","2a890d9be82d83193952dca4c4561010"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","fc20d38474f50c0d5327fd15eb16af1e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","a0fd0b725212a9f11893b771f8bf4ec0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","924530160e7f0c4dc20983d7bd601be5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","48f724997ffd0271156e988e332c7b5e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","6043ee94a0fc0b037e82eff6e732f4d1"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","c11a5aac54cb9fde030a9d1d7630a070"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","ee1e9680fc92ee97c29f5a29a3c826c8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","7df07ac6f5b3fd925c6597ec2f60e2af"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","d32c2a9e28d1d7c77ff91d712be55893"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","4bda3f80fd3884770678265258412df5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","1ce5063b92ee10d9fe99de55cdfbc5cd"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","c7502861f45825458c6cc531c81bd914"],["F:/OneDrive - Office/Workspaces/hexo/public/shuo/index.html","760257c4d00006ceb34f015c0bdb3912"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","227224b19608bb8963d7e6073505d771"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","131af8070220f0a111f8e1ab05886746"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","97878312702872608c7ff95b39f7bac6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","e8aeaef37a2d50326de2c59c3e64b802"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","af2107202d4e25219b316c15316b1f8f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","0fc6c2f2c9b787bcec2ed67325532a7c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","eaa2b3ef260368b5759df6dc7699b00e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","f694f2b2dd9dc912707ad00256f313bb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","b0960399e330ff3e9cb3860663402256"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","7073dd61388a679ea4cb56f8f1450254"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","a7ee704ec366038def932b762b2c305c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","2630935063ce9d5e553ca60f3f3001e0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","78e4473300948f08d72a25b5b8efd46e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","08d1f80ada16563e8d4ee11d7a49cbae"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","14750ffbc2bd66c1ee46955f89ed0ca2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","00120c70af9bc7bf55725086f7763e63"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","a06447df74f60571f4e89c07f8106930"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","9dd76d74624af5d3bab1c21973eeaa97"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","8422677af3f9e339488d63bd9c1e289b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","5e97e9a92d01ed2eb0b15a406c70c79b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","0d9fa95e801fc4e770c28af329cd3c58"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","c445d73157e9686d9e7e003b804adb36"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","1875ba0ce6895655ca899ab3ff670459"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","2c81d0e36f90a9bbc9389bd1cf9ce169"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","aa199f159152a87cbf704c2fa67456cb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","18a108697eea8e9419098c970341beef"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","7974a7442c24c9ad1518e5300ad43932"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","6bee0cd3f96f6f3cf7b9eee79cc989b4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","f215304bdc2eb526c2abbe8778ad0251"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","78ee0ac9b4411d9bb7738bb080857952"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","e606decb5216abf26c22fa11bb6ba55a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","1b6a6fa043e528211769243737d8728b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","db1558b539f8ef61a59e1d635d4f2c9b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","3131d3db702c3abdbc89473923e76e07"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","29ba2b1ccc99544435aa2af1c642b7db"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","45e653fece2357fb0f5fc6ef97fa2e7c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","fcaf1b74d8233f242886d446c9b5623b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","5cd8e384b6ae603eb0823cdb16c81e0c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","fe80528695da6d901eaa786f1ee28f17"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","247db5c839501459b9d73be9a367d254"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","b9d469740939d1343bfa4f4c066984cf"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","f17d48f02b68b20ad24bb9e7751c5755"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","6f2eba04b93920a29795e9056a8e95ea"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","5fec517ea1333fffdd5eab0fd6f31242"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","3c35f6214db3ff4493956031db9594e1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","47f85ca9f2fc0fa5422acd1028ef28e9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","ddc216f62d17864d9c69492a91711b77"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","aaa9aaaf64213b6747991be8206beb09"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","df8e5458bb8ffd48bb140ad1b93cde4c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","9ca9da4e222fb101ad7191b5b3ad4351"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","6403fd0ff8ac4221d326c42e9d4dcff8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","ccc99f914c2cb9dc31dffe953d2d6be0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","5e38298666b7943b204d166473985815"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","31bc22fbef53eddd402a4b8473f777c1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","edb3f110ae5e2956d924a820e2be5e14"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","ec9aeb8fdd15edb7dcbb006b6260aca5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","a11e5f44b92f66a9bedc13122ff61ef5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","fd9bd86b5651f4e264a4731bfc3572f7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","2a3d628edc886fa011f19072db3901a8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","df034643d672504155df431822579a10"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","4c2a0efdaaae68e86375690c12952766"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","7876b9738fdfaa2a95c6db65fd04a6bd"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","adb603e7dabb55eb4366d9b1ce86077b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","ef9502f3acc1214b9f5da66d1ffb0431"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","d134e0596c37a452d65fe17bd82d2937"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","0b1ad0c104fa08f009e29285d2e64cce"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","d9bd560fb9fb932b14e2375741c6cf16"]];
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








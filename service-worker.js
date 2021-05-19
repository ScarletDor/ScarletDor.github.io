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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","cca4207b3cc9a9f59ae4066398d43d44"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","19b899496779737b5435c6d9e8f6708c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","409e42c3453e20ea786afddf793a8983"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","e631815c06349bfbebec136d7423f53a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","c0651565f49a7b07ab70ec271d361451"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","1434d3930711a0007a39528f0696bfe5"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","1dc8e2467f6993f8cba3d81cee2120f4"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","98c082f242f9bae8314c3fd1110101da"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","f986e7b658b77fd5599881289c02df3a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","fd53c6830363ec8274475ff59a4eb36b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","0f6a34cfb8d0858d550a18dc3dffed45"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","883ea79801634209c7995ba4f1da9493"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","5ee5b23f9f03a10099e8c1cae811f55d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","8ee981eeeb9f0a56ac1be8d884c2db6b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","57a7f6a2ce0faded467465bbdee3bf50"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","c8af07820516dcff5dd2146b098802e3"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","d710cb03ab999c7320535ad428ca0e53"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","c0e404370f57e3a18f80b03270b3daba"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","e3f4a2615209cef24a6368d9e1fc34e4"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","7e499a4531ad115735210c8f6957d413"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","566803f7fdd1b09ee04e66010a8b9b19"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/04/index.html","2ed753dcc7d9175ebafa1681827d0520"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","6cb559b6eccc7ea08f5303d571b521de"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","40eeca971c2711864e95d0d70f272b66"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","dadfd4e85d4c21b07f248085b243809f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","63bbd822c75cfc69f9dfced3ffc33c78"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","efa479b3920585feee4dc741604604c2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","f9ee371a044948fd9b7eb578f06b5924"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","345e63414fbccba587949670a0e33d2c"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","3959f1154c300bdc2e6c1ce2dedad100"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","c2c70f74cb35b569fd8bd180139a9589"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","3899cabef6548d4f186748c2bee31468"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","7f1bbc9808bd3dbff19265cd722529ad"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","935c198ef11158851837954efae730e1"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","81fb8febfd01eec87fd6c1dfeb0a6a4e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","4e9502f25e16e717bd01892da475b410"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","74c8d2f1a3b35b759cce66fadc91014e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","011412733679c280d5fb8bb9a84b245f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","8dbd124b0fbad76268e2361ef6b0db00"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","918c1e8e7f5ac479f5a32a9b5cea0157"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","1d20121bb0d0840d4c7db72078f710b3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","8ffaecce3214d7b363eff1b1a57bcf43"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","833f51535d10d9fc1ae19e549e4732be"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","ad48d47534347d327d074baef5aaa5b7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","2bdcecf73310b3098ac933522f5443b8"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","9ddc21b884bb656f7f71aa2f6eca9214"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","99548b9abd25bce8d8b943b40cd61ead"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","f5499f1a985f6eabac4f6ecc8c39654d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","02feede3540de6693dfc4cf33b801a5d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","7086e6deee51d6105ccdf94a2a1cb972"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","e7e5650329a6ce00f4e25ab666e2eabd"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","e5c5ae3400b75598bbd539272a511b9b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","2f2548b2adebb5536dbfb19aa5f2f4b5"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","73469f888a91f5b2ba5fd588de6924f1"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","983ef63f3a55f4936e4444028d9fa463"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","7ff5bfdb4c63303e5730c8853767be78"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","83db0d810c607b40bd6f36e723b45d6c"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","142be821e1ac8a2c76052fbb8454d5e2"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","f043b9844d502ad87c09b2a378f1027a"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","ac5dea2223c62d0276b4f999478e7af3"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","e6ce31e5d91b8bf4832d0b28a0edab98"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","0c6fb2d8945836b9bef71cc0dfc5486c"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","ceb894da6f9bb9b0821da7d7cfb35556"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","f32de08db52ace7dcda9bd72214fcb82"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","dfd1e941e6a976b365b99d7af3910f6d"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","4e1e879a9258fb07c88d5e6e9fde12d0"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","558d35b94734fc29b9ed60e1de71bbb7"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","bce2c52a2ae6f7456c89cf76e0ce3388"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","f94fd32244355fed6c562b0242da74e7"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","bdc0cc5b206a0165f3f98284d62e758d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","25acddfee65b4af9e41e6b5e284c4a8a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","3958a051508e37f7b180c51efb6324fa"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","5321a46d060d117bf87be4f157922421"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","9b0315d4ca50f323901b7b25b814d541"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","8a3fab08ea004126f539688f9eae5f53"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","99862407468c6e72182c0a37e2bb01cb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","8c85bb81ac48aa60dc65654fbd5f970e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","75728e9db2160b06d45fc278346a7314"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","9bb2f2daf417337b87dd37c36fb77422"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","ab35664cfd430d8f2332cc3465afc9ed"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","27831d1b9e139da4e66862cd25ab426b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","ca58bc2a0ac08873053128ca216c57f5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","58e86b201a02046ad0fb0a99e54ac08e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","1041739a91f3c285a1b9579edeb175ca"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","6e2d7e8e45897dd6432bb7c3be63a81e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","f2c4f1f5675e9c715b193372c837a3d3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","a7af7ecd397c3e0daabe531b7f676877"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","fae517b4713d66287531fcf3bf04eb19"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","3b1f9696aec594cd931d0967c6e0de86"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","14e5ee7699544e048cca698269937050"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","c1195aa15a51a256e984b4639947cbdf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","5f201f8479f62b9f2a383747e0382389"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","33b2de9074fa5cdffb5a3d0fd8591b89"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","9805e3a7a107672270c2c9c3dcf58c38"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","0116e0a69278e730be6cc60a697739ba"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","d54b53925ce1e66da5cf04a9033b4d82"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","9a29a13f7a222ffc63cbf7c581a7af9e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","ae092a50c635e1e1f9ad3662508c68b7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","be9b54d86a2078bbb258c1b83f3481b6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","998c2bd3998041b145349f60893e6d3b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","413ed9f1f303b45a7a198370f7a74817"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","43767ee393b257726ccdc49719e4dc8b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","26823030dbeed9394e73574a1ebe1798"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","6e5a54c63bb86264ee15e86920a86d2e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","27ac7d779e0e1cbda2c24b44864ec6e8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","de28494a357a82f4e02fbbfd694e9681"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","95dce378d64b69f832dfd62986a31d24"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","f7b8c03e51102b1af39910b1e41af32c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","59e7c58c9ab641ab74020df50292661f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","d78181c7d0866388652c9ad597a60869"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/c2d6f175/index.html","e0b08d2b1c0c697a23c531e2cfdb7fd8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","78a22a7a9ef1d2a3636cf26fe9addd0e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","1b84c589781e8bd33a5c3b3313cd892b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","1e3c091d5882715abf8f013e5d3535d2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","bab164f9c3e3f2db88c43d2280597274"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","7a1ff20dc5f361c45af5e7abadd13003"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","6849d15c8d1a13e33786962b4987ab7a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","37362aaf9b50576d3373b530ef2e5787"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","2e42a0ab9196dbbd20fdb3cfc88a33a4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","c46ff107f75a2f9f9b8579bfb1e69b87"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","109ae42cd6de2ff99982e45d222dee24"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","5a2e80d88117ac2814f50a25c604f27d"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","d12493413633167da12b367774edf442"],["F:/OneDrive - Office/Workspaces/hexo/public/shuo/index.html","dc3a5bc042e76ef642c6c721dd4e1aee"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","d891a05eecabd4b77dfc5b9efb82666e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","6d790d5a9eaea687b8462bf44445eb08"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","725abe8ccfde8b833e6b4d8c30bcebee"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","14405355976bb11b2d85acb475cc60b1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","5c5fbdc694a80d59ddf94b21b446895b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","7c58d087bcde9fb17f6b0a7cc7a97ad4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","1b0c3cce2f5143851adcba578789e7c1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","44e2b128b7b9da7a53da1a4c320b6d5c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","6ecf13ea86203a0990332597161aa074"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","d663513f4efd8c492e17f809beaed125"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","d6828225fa601aadcc6e75b98cbbecef"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","afa9ad061be744c42ac95d45d4505833"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","062d488fa590a201775bededd9fab03a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","3ffffc5ec1a6ce88e5d2b631eab0e363"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","620af20214b4cd4a51415a99293b042c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","cb3fb343e4c9f5262dbeb8a67a20ef6d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","c5afdb9c1763d4fa8f3d57e9b07d0828"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","c2597056b3b6a49c4133cdfbe6d4d59f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","4936ec120786a604a23fcedf22b100b4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","27771c1154e6a70ad090a23c40093f49"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","7890c7a40488e86d08b7d8590aa8774d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","069fc0a604dafc25dc66433564815949"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","2e3b1000c81640aa271ef2bd8349854c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","244318929cf263b4ffd7faa7475955bb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","d76b2547155f9d01e47be09eb1a5cd6c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","b496ccc6c01c10654e27349122ccda1e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","cb63416a1b91f63b2405fb88fc477971"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","a53d6613b2c96984f3cef9e4aaa57277"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","fecfa68f7e61768a6a298c911acbcb56"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","3f9fce705a1a3082d2267db973224fc3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","9e3bf44a3a68e51aad310b4f8babb820"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","d2b32d073bdac0f4448989e488ed8a61"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","a4984217b6af6db8169106e0d3d02708"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","17373f804883c9d1cb521effd8bfa573"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","b4adab0110edd895ad052f771b487303"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","ec0c5bff3d9ca372e6455168315b39c6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","3b07989fd8c62b3a4b49deaa78a7f3c5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","4609152af523e3360056ecf1a53b735f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","fb974a83c301b6eab2595a47d846d73a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","fa0b2936ee4420182bbe643ffc3d35b6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","a41e7081929ce0ee21f5c612a2e54836"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","eefcf7a976bbbb2f8dd7feab434182d5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","09b0b9a4e906a46b45490215ac112c1d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","22c3cfcb7f5ee855c20f20cc32c16e14"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","ad0772f6ee0d6ed2ce62f37d83212a19"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","787619a471eda1354472663a95050560"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","9fd5a646e00a4ff07fcfea20094b0e67"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","8899346c9c0e7430d814c6d78f4062a7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","95f0dfefeea296e739f7bd6c3dee82fb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","3bb9174e5e6efa76b2f26fd02f59086b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","226f2524eb69acc4977b4eb8c6c538f6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","f8fe78ebf020ccb2dcdd822400ad8d69"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","d66dfbbc54d47add1a7bc647b46acc8c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","ee0a59fb2efbbbd0ccddbc725aec05c1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","891b5c87c8a65935940def2de2106182"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","211d2b0c0096fd920a8799bf522bb4bf"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","e77e80e61b0da8ffb087a0d66686dffa"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","494cec4f0e4db525b303e149eb0d460b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","2cd8c4110af244b6e1a74bcd374db64d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","3ba6cde8276276f0222f4c927fc6fb0f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","f731aec56ee244399fc59181d9abd7b3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","2b035145d18a1dfed5b091e3545328ac"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","b875c2a455b4ba63d4a30d64d2da536d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","3eda1b1bc5a8c10bb57c7bc6b2a04b36"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","101fc031aef27872c4f99a3c4dc2f091"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","e3092122ca5b181af9752e704d01bc2d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","d43f98bba1a5e6236f78a16cbf85a4fe"]];
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








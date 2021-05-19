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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","cca4207b3cc9a9f59ae4066398d43d44"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","408d4c19c0b01b60d5ec45fc0e84e781"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","409e42c3453e20ea786afddf793a8983"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","e631815c06349bfbebec136d7423f53a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","c0651565f49a7b07ab70ec271d361451"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","1434d3930711a0007a39528f0696bfe5"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","1dc8e2467f6993f8cba3d81cee2120f4"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","98c082f242f9bae8314c3fd1110101da"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","f986e7b658b77fd5599881289c02df3a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","fd53c6830363ec8274475ff59a4eb36b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","0f6a34cfb8d0858d550a18dc3dffed45"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","883ea79801634209c7995ba4f1da9493"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","5ee5b23f9f03a10099e8c1cae811f55d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","8ee981eeeb9f0a56ac1be8d884c2db6b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","57a7f6a2ce0faded467465bbdee3bf50"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","c8af07820516dcff5dd2146b098802e3"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","d710cb03ab999c7320535ad428ca0e53"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","c0e404370f57e3a18f80b03270b3daba"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","e3f4a2615209cef24a6368d9e1fc34e4"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","7e499a4531ad115735210c8f6957d413"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","566803f7fdd1b09ee04e66010a8b9b19"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/04/index.html","2ed753dcc7d9175ebafa1681827d0520"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","561bd7ff325ea6bf18270c77f6ef09d5"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","0c623925faa717458dde49c4f5b77915"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","3a80c872d4b96e048ad7895428cf78c0"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","63bbd822c75cfc69f9dfced3ffc33c78"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","efa479b3920585feee4dc741604604c2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","f9ee371a044948fd9b7eb578f06b5924"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","345e63414fbccba587949670a0e33d2c"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","eff2641dbbde5c8d8a63c349581d13e5"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","e92d5c8deb93675139f4dd23181a2175"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","d9af895e67072a579abaec27711ffa4f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","7f1bbc9808bd3dbff19265cd722529ad"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","935c198ef11158851837954efae730e1"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","81fb8febfd01eec87fd6c1dfeb0a6a4e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","bb7ca4f915b79f79f0792bef23bee9da"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","74c8d2f1a3b35b759cce66fadc91014e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","011412733679c280d5fb8bb9a84b245f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","8dbd124b0fbad76268e2361ef6b0db00"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","918c1e8e7f5ac479f5a32a9b5cea0157"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","1d20121bb0d0840d4c7db72078f710b3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","8ffaecce3214d7b363eff1b1a57bcf43"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","833f51535d10d9fc1ae19e549e4732be"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","ad48d47534347d327d074baef5aaa5b7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","2bdcecf73310b3098ac933522f5443b8"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","9ddc21b884bb656f7f71aa2f6eca9214"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","99548b9abd25bce8d8b943b40cd61ead"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","f5499f1a985f6eabac4f6ecc8c39654d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","02feede3540de6693dfc4cf33b801a5d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","7086e6deee51d6105ccdf94a2a1cb972"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","e7e5650329a6ce00f4e25ab666e2eabd"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","e5c5ae3400b75598bbd539272a511b9b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","2f2548b2adebb5536dbfb19aa5f2f4b5"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","73469f888a91f5b2ba5fd588de6924f1"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","983ef63f3a55f4936e4444028d9fa463"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","7ff5bfdb4c63303e5730c8853767be78"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","83db0d810c607b40bd6f36e723b45d6c"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","9aab3badbd93a7b3e96e62a1d1689121"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","d205230cb9b6113ea01073e805d9ec45"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","69d09118fc51eef825c4ae9e41ae0dd2"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","11860a7a877b1a04964db97d05ec71c0"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","a411913c93333caeebb2478a8be34bb7"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","ceb894da6f9bb9b0821da7d7cfb35556"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","82cc03d03e62553327247100c96dc548"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","73b637afc981cb16eb6a9c45d8ea7d33"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","f203008a53bbf32c21a4805892d3f80d"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","0571e4867656778d7494e5953364a566"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","9c400c10a4d5614bbcd7d304402f209f"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","1397b867fb74cb1b74112bb4b69f8599"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","97df1f6a5b0c886a59c58d6b475ae0f1"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","25acddfee65b4af9e41e6b5e284c4a8a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","508fd065800db753abc4b467994651b7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","3ad487b1b981a07e8a206d1d4d493591"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","d4d528305160c22dda00015fcfa9597b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","9c8d5daf0a96f86a51b63b1edddde26f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","27df87b2942e308a794a480c660f384c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","ed549b735ee6f562baab909e574d1174"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","6ad30bbbf3f25a200e15808a67afbc45"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","9bb2f2daf417337b87dd37c36fb77422"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","91cb281aaf912a0e72db6986a325fa4c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","2fec5138a248513723526e5db605f57c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","11b78ccb445635dd3644450095b9f4af"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","60dfc2706dfc0790cb5932e643693569"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","4b05580e8ac77b2c8d98ce8c58b59cc2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","e17053ccc3b843de0bd6e4601004de62"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","f2c4f1f5675e9c715b193372c837a3d3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","c15ba6e278ef27523fb0253807465a4f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","8f00d2ebc573db89c00ddb9b7fafd0b4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","6b5dc2f672174cebda208611b83dbd5e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","f1ff89ee9238edbca64ad98c51b2a057"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","5e43b80a109b5f6419673fdc8578a2b2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","0415cd1894bba022bba151c2200c1b0a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","96223abc452ce289dfb94e6cecf5b17a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","daab02f5249efb19b40c3922c1c4575c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","c0e0ce66a1d57d4f08503171c64d6423"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","d54b53925ce1e66da5cf04a9033b4d82"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","ab9f7dd9d1f1542e2b9cc203d389458d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","24f2ef26200d8081d702354077f2b2dc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","f0c6441ed0a0116089a69845e6d9c2a2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","85d1456988c20db356da95a021d2b185"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","e5b5e8816398a103f2f0858a092be623"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","263f234fa613950525a6c082fddb6616"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","b0307ab87d47bc52e2ca24a23299cb54"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","0169e2aa3d36cf9a886f4ef493d689f0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","7b37d1956bbfa0b55a47365a8444662b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","31b9b6e19b04e374d6ffa66dcc5e2be7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","95dce378d64b69f832dfd62986a31d24"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","26515f797cd6c2ade52e9249c1cb20de"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","f18ca856df6582f4d016160019bd25b7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","7548e561ddd32bb7681797464b1141a5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/c2d6f175/index.html","a6f636391454dcd0d38ea146fbacdc71"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","7670043dd4b2f819e7c403ba70ab41de"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","d5e93b1b98ddd63ace17a1aec2a856c3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","178cfa9c03c704c6ca35a3520097bd23"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","33b377e794ef604d745060a3252c53b3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","9d9988ab7a2dc7172f075801e93f8f24"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","70cd0461d3105cff10ec9e892d33c146"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","d98cb129052465b2c904d2faf56cf85e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","add91c270b742a72e7b11c2227e6e1fe"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","d41796ca7eb5e64da0713e99a829306f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","88ac4b9e85c2134271ab1c617e080c99"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","5a2e80d88117ac2814f50a25c604f27d"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","ab9970b8879fab3ea6c6d3fd7e4f246f"],["F:/OneDrive - Office/Workspaces/hexo/public/shuo/index.html","bbb5f0b07c556d58fb575b802ee45ba4"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","d891a05eecabd4b77dfc5b9efb82666e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","6d790d5a9eaea687b8462bf44445eb08"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","725abe8ccfde8b833e6b4d8c30bcebee"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","14405355976bb11b2d85acb475cc60b1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","5c5fbdc694a80d59ddf94b21b446895b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","7c58d087bcde9fb17f6b0a7cc7a97ad4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","1b0c3cce2f5143851adcba578789e7c1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","44e2b128b7b9da7a53da1a4c320b6d5c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","6ecf13ea86203a0990332597161aa074"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","d663513f4efd8c492e17f809beaed125"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","d6828225fa601aadcc6e75b98cbbecef"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","53beac735db2014b193fada42e855315"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","062d488fa590a201775bededd9fab03a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","3ffffc5ec1a6ce88e5d2b631eab0e363"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","620af20214b4cd4a51415a99293b042c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","cb3fb343e4c9f5262dbeb8a67a20ef6d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","c5afdb9c1763d4fa8f3d57e9b07d0828"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","c2597056b3b6a49c4133cdfbe6d4d59f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","4936ec120786a604a23fcedf22b100b4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","27771c1154e6a70ad090a23c40093f49"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","7890c7a40488e86d08b7d8590aa8774d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","069fc0a604dafc25dc66433564815949"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","2e3b1000c81640aa271ef2bd8349854c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","244318929cf263b4ffd7faa7475955bb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","d76b2547155f9d01e47be09eb1a5cd6c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","b496ccc6c01c10654e27349122ccda1e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","cb63416a1b91f63b2405fb88fc477971"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","a53d6613b2c96984f3cef9e4aaa57277"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","fecfa68f7e61768a6a298c911acbcb56"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","3f9fce705a1a3082d2267db973224fc3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","9e3bf44a3a68e51aad310b4f8babb820"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","d2b32d073bdac0f4448989e488ed8a61"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","a4984217b6af6db8169106e0d3d02708"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","17373f804883c9d1cb521effd8bfa573"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","b4adab0110edd895ad052f771b487303"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","ec0c5bff3d9ca372e6455168315b39c6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","3b07989fd8c62b3a4b49deaa78a7f3c5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","4609152af523e3360056ecf1a53b735f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","fb974a83c301b6eab2595a47d846d73a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","fa0b2936ee4420182bbe643ffc3d35b6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","a41e7081929ce0ee21f5c612a2e54836"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","eefcf7a976bbbb2f8dd7feab434182d5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","09b0b9a4e906a46b45490215ac112c1d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","22c3cfcb7f5ee855c20f20cc32c16e14"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","ad0772f6ee0d6ed2ce62f37d83212a19"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","787619a471eda1354472663a95050560"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","9fd5a646e00a4ff07fcfea20094b0e67"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","8899346c9c0e7430d814c6d78f4062a7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","95f0dfefeea296e739f7bd6c3dee82fb"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","3bb9174e5e6efa76b2f26fd02f59086b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","226f2524eb69acc4977b4eb8c6c538f6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","f8fe78ebf020ccb2dcdd822400ad8d69"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","d66dfbbc54d47add1a7bc647b46acc8c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","ee0a59fb2efbbbd0ccddbc725aec05c1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","891b5c87c8a65935940def2de2106182"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","211d2b0c0096fd920a8799bf522bb4bf"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","e77e80e61b0da8ffb087a0d66686dffa"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","494cec4f0e4db525b303e149eb0d460b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","2cd8c4110af244b6e1a74bcd374db64d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","3ba6cde8276276f0222f4c927fc6fb0f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","f731aec56ee244399fc59181d9abd7b3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","2b035145d18a1dfed5b091e3545328ac"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","b875c2a455b4ba63d4a30d64d2da536d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","3eda1b1bc5a8c10bb57c7bc6b2a04b36"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","101fc031aef27872c4f99a3c4dc2f091"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","e3092122ca5b181af9752e704d01bc2d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","d43f98bba1a5e6236f78a16cbf85a4fe"]];
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








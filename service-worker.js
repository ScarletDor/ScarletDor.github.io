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

var precacheConfig = [["F:/Pan/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/Pan/Workspaces/hexo/public/about/index.html","e8bc5dd0544894bad84251c2e169e05b"],["F:/Pan/Workspaces/hexo/public/aboutsite/index.html","79b33fbfcbc7be3b3644fc226411cc71"],["F:/Pan/Workspaces/hexo/public/archives/2019/10/index.html","3df42e2ccd35ce2e6fe07cc65fdeb6d5"],["F:/Pan/Workspaces/hexo/public/archives/2019/11/index.html","ed75a65ee5712b85a3c3cd46a61f2077"],["F:/Pan/Workspaces/hexo/public/archives/2019/12/index.html","0c76f68a3fadde44f6a39a9584cfd3cd"],["F:/Pan/Workspaces/hexo/public/archives/2019/index.html","f04bb5f604a51601c8afdcba3ded988d"],["F:/Pan/Workspaces/hexo/public/archives/2020/01/index.html","9cb1b62ed3aaff3ce2845d037dc034cc"],["F:/Pan/Workspaces/hexo/public/archives/2020/02/index.html","af12baf5027ffc5cbf32d54a56813e50"],["F:/Pan/Workspaces/hexo/public/archives/2020/03/index.html","797f8027d06a75ce8fd8654eb13f5163"],["F:/Pan/Workspaces/hexo/public/archives/2020/04/index.html","dcea7f0a19e53e3c0820f0cfd502a98d"],["F:/Pan/Workspaces/hexo/public/archives/2020/05/index.html","b1e80b1952a336657b48db6690f60149"],["F:/Pan/Workspaces/hexo/public/archives/2020/06/index.html","0d1465422041fedea0c6f296cefbc269"],["F:/Pan/Workspaces/hexo/public/archives/2020/07/index.html","d9ebd381668ff5817d0c1108ddc1f301"],["F:/Pan/Workspaces/hexo/public/archives/2020/11/index.html","ab069b95dcadda9e612ef13f3c6834e0"],["F:/Pan/Workspaces/hexo/public/archives/2020/12/index.html","5b3de0bde3819d16c19a1bf7e4125f59"],["F:/Pan/Workspaces/hexo/public/archives/2020/index.html","cf1855c201e1740579e3fe46f3d07560"],["F:/Pan/Workspaces/hexo/public/archives/2020/page/2/index.html","403b7b9114c52f0ae75de7b4b2b28627"],["F:/Pan/Workspaces/hexo/public/archives/2020/page/3/index.html","a026b80813a8375a11c7ea11e59c6ce6"],["F:/Pan/Workspaces/hexo/public/archives/2020/page/4/index.html","a5b1df86de4aca52566543503b253f18"],["F:/Pan/Workspaces/hexo/public/archives/2021/01/index.html","2249a1b650be1cf1f41075e53d40a5f0"],["F:/Pan/Workspaces/hexo/public/archives/2021/02/index.html","a8792fc3402b9e5b8eb0c752491fe27a"],["F:/Pan/Workspaces/hexo/public/archives/2021/04/index.html","511bd6f67816096a8796c84fb248a50d"],["F:/Pan/Workspaces/hexo/public/archives/2021/index.html","89265395bd252acb5ef88f43683a1f31"],["F:/Pan/Workspaces/hexo/public/archives/index.html","8f7b6a883d480524ada0041c51b750c1"],["F:/Pan/Workspaces/hexo/public/archives/page/2/index.html","8b2a60a1967c37a5e26d7f949d55f7a7"],["F:/Pan/Workspaces/hexo/public/archives/page/3/index.html","97f9e9b5697a577f7266c3e9e7a6e739"],["F:/Pan/Workspaces/hexo/public/archives/page/4/index.html","d4643607c14e0448f24124cbcd3caa80"],["F:/Pan/Workspaces/hexo/public/archives/page/5/index.html","379923998ecfdae2ac290e9c7f390b26"],["F:/Pan/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Pan/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/Pan/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Pan/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Pan/Workspaces/hexo/public/bangumis/index.html","1aa061bcf2be13643263954d5fd0375d"],["F:/Pan/Workspaces/hexo/public/books/index.html","fca5f954731c21fc60a8a4ab04966aab"],["F:/Pan/Workspaces/hexo/public/categories/index.html","eb2babbecb6af0d8add2d2584a059f44"],["F:/Pan/Workspaces/hexo/public/categories/二次元/index.html","2d02ca215bec60b3d3b89e383cc53e7b"],["F:/Pan/Workspaces/hexo/public/categories/二次元/晒手办/index.html","7f52aa0f80718bb97d029282ee2f2f3d"],["F:/Pan/Workspaces/hexo/public/categories/二次元/番剧/index.html","da9b31ae443d28dc4181b9f62a940849"],["F:/Pan/Workspaces/hexo/public/categories/安利/index.html","e152e206476165ca86fad13ec90877ac"],["F:/Pan/Workspaces/hexo/public/categories/安利/世界名画/index.html","683b36663a15ebe7ef6b88ed9276c3a4"],["F:/Pan/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","6692620b6018ecb94017bd8534ee7c64"],["F:/Pan/Workspaces/hexo/public/categories/安利/有趣分享/index.html","994a316fca9766cd34756d78f1be80c6"],["F:/Pan/Workspaces/hexo/public/categories/安利/音乐影视/index.html","30eec6611c2dca7b47373d8abd50cfc2"],["F:/Pan/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","3056304b9d7c6e50c477fbd40d1d2675"],["F:/Pan/Workspaces/hexo/public/categories/我的RPG/index.html","316d73cc910482230f9a0434cf6dde9b"],["F:/Pan/Workspaces/hexo/public/categories/旅行/index.html","ed5f673debdd9cf674bf0f585b6de075"],["F:/Pan/Workspaces/hexo/public/categories/旅行/踏青/index.html","e3ff944324811cf6eb7145aa6dde3298"],["F:/Pan/Workspaces/hexo/public/categories/日记/index.html","2f751d689f384ec329a3854450264c90"],["F:/Pan/Workspaces/hexo/public/categories/日记/page/2/index.html","a12a7a19723fd5c8d173d9c00c100562"],["F:/Pan/Workspaces/hexo/public/categories/日记/page/3/index.html","d9def62819fb4e20b922130bdf333126"],["F:/Pan/Workspaces/hexo/public/categories/日记/吃货日记/index.html","cb643fe97a0ec33290cfc1842a10538b"],["F:/Pan/Workspaces/hexo/public/categories/日记/喵的世界/index.html","bb5c30873b0d9c7b8306b97e20ceb247"],["F:/Pan/Workspaces/hexo/public/categories/日记/游戏记录/index.html","73352df0d8d7d0c824b1a48020523366"],["F:/Pan/Workspaces/hexo/public/categories/笔记/index.html","de0693e83d0e3272f8d80f2761f01478"],["F:/Pan/Workspaces/hexo/public/categories/笔记/page/2/index.html","0c89c9dcc186196119e6a0fff4dc26d3"],["F:/Pan/Workspaces/hexo/public/categories/笔记/博客建站/index.html","45e68cd00c48183a59dee967a0cb37d9"],["F:/Pan/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","6da5d97e198f71521c78277e1d5e1752"],["F:/Pan/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","21ef449a610e4364130536c7e875c509"],["F:/Pan/Workspaces/hexo/public/categories/笔记/网络代码/index.html","1949f12f3866d7d9ea062fa3bf471675"],["F:/Pan/Workspaces/hexo/public/cinema/index.html","6f80d3acffe30d3150bb8e8dc23ee28a"],["F:/Pan/Workspaces/hexo/public/css/caise.css","415b20cc583d2cd7311a2287513ac30f"],["F:/Pan/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/Pan/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Pan/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/Pan/Workspaces/hexo/public/game/index.html","52e95a55530527b423f2f1c940015ec8"],["F:/Pan/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/Pan/Workspaces/hexo/public/guestbook/index.html","e74c1c767460a5b5627cf0a8c2093827"],["F:/Pan/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/Pan/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/Pan/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/Pan/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/Pan/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Pan/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Pan/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/Pan/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Pan/Workspaces/hexo/public/index.html","53410904a557dfe07499443846bf76ef"],["F:/Pan/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/Pan/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/Pan/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/Pan/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/Pan/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/Pan/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/Pan/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/Pan/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/Pan/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Pan/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Pan/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/Pan/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/Pan/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/Pan/Workspaces/hexo/public/library/index.html","e78c622bec527c1a579e2a89c9987dca"],["F:/Pan/Workspaces/hexo/public/link/index.html","498c2e9a4ffea15c510f425c53c81025"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/Pan/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/Pan/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/Pan/Workspaces/hexo/public/mishi/index.html","4b93601e749f8087684113d1c5e380b8"],["F:/Pan/Workspaces/hexo/public/movies/index.html","966aa546680a41d0cdf6417a710ae922"],["F:/Pan/Workspaces/hexo/public/music/index.html","05c699fb8c1c740ccfd83ca5d1f490d2"],["F:/Pan/Workspaces/hexo/public/page/2/index.html","5c353fa6a94c07126037910dac08d8a0"],["F:/Pan/Workspaces/hexo/public/page/3/index.html","fbe7c10f278e457c3f5c29f14c85deb7"],["F:/Pan/Workspaces/hexo/public/page/4/index.html","ac88e71214eaaed355bfc4aac1a07a7f"],["F:/Pan/Workspaces/hexo/public/page/5/index.html","d56e253d6b36a8f61f2ee39043a82ab9"],["F:/Pan/Workspaces/hexo/public/posts/10cf6379/index.html","3e845b84269932bc74757ecb2e97d1fb"],["F:/Pan/Workspaces/hexo/public/posts/145c5b6f/index.html","7568f922bd448785ca03ce7f3a0783a4"],["F:/Pan/Workspaces/hexo/public/posts/1b13bafa/index.html","c0cb76234df785031fc9c18a3ec404f9"],["F:/Pan/Workspaces/hexo/public/posts/26b62851/index.html","a3636b9d220ff268bdf6e22ad107da13"],["F:/Pan/Workspaces/hexo/public/posts/2d4222d/index.html","640888148809e507f3219dbafb8b9594"],["F:/Pan/Workspaces/hexo/public/posts/3460dca2/index.html","0c8614563e2d41e7253a2d048a8849c6"],["F:/Pan/Workspaces/hexo/public/posts/3c0c7cbc/index.html","5dbbed33f1f215f47e4a3746fb3c3c62"],["F:/Pan/Workspaces/hexo/public/posts/3f8c90ce/index.html","3fcfcb4ca8efd48d2e06a1dd11206f21"],["F:/Pan/Workspaces/hexo/public/posts/4a17b156/index.html","7d4c8985bbd891cfa403e90db1cf06c2"],["F:/Pan/Workspaces/hexo/public/posts/4e287f4a/index.html","339df7392689db5f98514fbc84ca2332"],["F:/Pan/Workspaces/hexo/public/posts/52fd1e12/index.html","3aa4624ce98425c538d113ae1ab4d064"],["F:/Pan/Workspaces/hexo/public/posts/55dce3f9/index.html","0e4881c4685b5005051fbd0212176d96"],["F:/Pan/Workspaces/hexo/public/posts/5a47444f/index.html","f921cfe807a9eef785d98d07e28f7244"],["F:/Pan/Workspaces/hexo/public/posts/5dde075a/index.html","bfdc16c3740b75f6bd431b3fe14f72a4"],["F:/Pan/Workspaces/hexo/public/posts/5f4133c6/index.html","c1e16685fae7a01103fd60b6ebf73496"],["F:/Pan/Workspaces/hexo/public/posts/603b6372/index.html","d600f223429553aabbc35c3d6bc6c145"],["F:/Pan/Workspaces/hexo/public/posts/65fa4d65/index.html","8e530737bb7d77771a8d4beaaea54c06"],["F:/Pan/Workspaces/hexo/public/posts/6912ae2b/index.html","c853b44360bbf325171c352450ce8143"],["F:/Pan/Workspaces/hexo/public/posts/6bd82013/index.html","1ec138bebb35fc263288650ef4366e47"],["F:/Pan/Workspaces/hexo/public/posts/6d77f1ee/index.html","8e83ba9bf211881c74eefb7111a21d7e"],["F:/Pan/Workspaces/hexo/public/posts/76791c4/index.html","c7222ebe2c4c3758939825ff8afb921c"],["F:/Pan/Workspaces/hexo/public/posts/7df0083c/index.html","90b842c5f8df0bb25779b7a5f47b2e38"],["F:/Pan/Workspaces/hexo/public/posts/8ee31f54/index.html","9d9648ca3e1bbb515760029790d25ce5"],["F:/Pan/Workspaces/hexo/public/posts/8f34bcde/index.html","225bfff8bc57ef937ec0a4831fd9d52e"],["F:/Pan/Workspaces/hexo/public/posts/90ae614d/index.html","61d8032412f7452dd51dc5a900d79d5b"],["F:/Pan/Workspaces/hexo/public/posts/916e8670/index.html","15e02cefad290ca0822fb2a28cb21747"],["F:/Pan/Workspaces/hexo/public/posts/929ec6de/index.html","d662f7905e716448c1532ca89c066b3e"],["F:/Pan/Workspaces/hexo/public/posts/949c1814/index.html","3ebb459a01aa34a78c9c49932ef624f3"],["F:/Pan/Workspaces/hexo/public/posts/9733ae9b/index.html","a94ebb2c7e6d29e42e947d199cfce244"],["F:/Pan/Workspaces/hexo/public/posts/973e37b2/index.html","05299aec2765e0401302fe6fc824312f"],["F:/Pan/Workspaces/hexo/public/posts/982d66ce/index.html","b64e5c80ca16b7ec967b23105e0c2278"],["F:/Pan/Workspaces/hexo/public/posts/988c6240/index.html","3e04e314746393d4817756c6e0df3419"],["F:/Pan/Workspaces/hexo/public/posts/9a4050be/index.html","91f8fbd43c73b70b32f574fa49517e8e"],["F:/Pan/Workspaces/hexo/public/posts/a689f09d/index.html","2c6171c6e7beaf278c636096f46b7d87"],["F:/Pan/Workspaces/hexo/public/posts/a72d88cb/index.html","a05ce1dcb8a5e3e5d6faa6f7a9938be0"],["F:/Pan/Workspaces/hexo/public/posts/adef25b/index.html","7e3fb57f74c1ee8f8d78062062e211e0"],["F:/Pan/Workspaces/hexo/public/posts/afa82352/index.html","e252edcc2f46b9b4fe05bb3c57785083"],["F:/Pan/Workspaces/hexo/public/posts/b4173035/index.html","4424be35bc6df4e14a0a3e1af0dd945a"],["F:/Pan/Workspaces/hexo/public/posts/b89c26e0/index.html","41e7c3276ddb5fc997c67979d69e7bcc"],["F:/Pan/Workspaces/hexo/public/posts/c2d6f175/index.html","b2340492665994e24758599977d9f9e1"],["F:/Pan/Workspaces/hexo/public/posts/caf8f574/index.html","cbbc5425a5b216e01f511efa64353eca"],["F:/Pan/Workspaces/hexo/public/posts/cb3defb3/index.html","4eece700e87d7021d4529b22ae89b2ab"],["F:/Pan/Workspaces/hexo/public/posts/d2ed1417/index.html","982dec0520d58c5d5091198598e1ff7e"],["F:/Pan/Workspaces/hexo/public/posts/dabba837/index.html","a6e2ff312f167e9319ad81f5a0d6572b"],["F:/Pan/Workspaces/hexo/public/posts/e1da0a7e/index.html","396f8d7e24551838331796dd69a88327"],["F:/Pan/Workspaces/hexo/public/posts/e8d905e0/index.html","653aed7cbccbf61e4c95a3b92a5107b1"],["F:/Pan/Workspaces/hexo/public/posts/ea96970a/index.html","4b3f46ad461760bc347995f25d3338f4"],["F:/Pan/Workspaces/hexo/public/posts/f1ce2ae9/index.html","200ae7e02ba8835d899e0fe7617b2ad4"],["F:/Pan/Workspaces/hexo/public/posts/f3326637/index.html","e1ba729a683a8f1199e82e3af4346fa4"],["F:/Pan/Workspaces/hexo/public/posts/f63cae39/index.html","f53467a50d160f25e5f564c908736dac"],["F:/Pan/Workspaces/hexo/public/posts/f6dc1ee/index.html","8c464a53a4b30de901469246fec0ffa2"],["F:/Pan/Workspaces/hexo/public/shouban/index.html","bbb1e6fbaf395904e33752805a707c46"],["F:/Pan/Workspaces/hexo/public/shuo/index.html","700e66cec8093a0e6033532e437764b3"],["F:/Pan/Workspaces/hexo/public/software/index.html","60d0adcadb8a75938512cb1a1d898f75"],["F:/Pan/Workspaces/hexo/public/tags/Butterfly主题/index.html","4bbda6d732ccc91e85274e2e279023cf"],["F:/Pan/Workspaces/hexo/public/tags/GIF/index.html","a3edfb03ab606e3000db929169926c77"],["F:/Pan/Workspaces/hexo/public/tags/HTML/index.html","bd1c52dcc33708b79a77f0bba60ce821"],["F:/Pan/Workspaces/hexo/public/tags/Hexo/index.html","5b3e73ee3dbd4c968f736c97b1e6258f"],["F:/Pan/Workspaces/hexo/public/tags/HexoClient/index.html","df074f09376c22bbe62d1408ba7bbfd6"],["F:/Pan/Workspaces/hexo/public/tags/Kobo-Glo/index.html","bde324a2e8e80d586b2ea493ea37ebef"],["F:/Pan/Workspaces/hexo/public/tags/MV/index.html","322d5d833d767424575345d06e5596b5"],["F:/Pan/Workspaces/hexo/public/tags/Pixiv/index.html","e359c1637c0eca1fdad5787c01fc0524"],["F:/Pan/Workspaces/hexo/public/tags/Valine/index.html","6024ebea951e8c99fc030e43e7a3ee1e"],["F:/Pan/Workspaces/hexo/public/tags/bili/index.html","4b40d28328caccb27883d7c520bc9396"],["F:/Pan/Workspaces/hexo/public/tags/index.html","d798754c5d2b1341a5570a2ab87a16f9"],["F:/Pan/Workspaces/hexo/public/tags/mc/index.html","b11b06332ce7951c904eda6d27b3dc60"],["F:/Pan/Workspaces/hexo/public/tags/minecraft/index.html","203ac2bbb98dc74a46bf73e0ae9c16be"],["F:/Pan/Workspaces/hexo/public/tags/mod/index.html","d3b207c8279a860503db788776ea2f36"],["F:/Pan/Workspaces/hexo/public/tags/pjax/index.html","8528fd42a77d88551080a74cf89d9da9"],["F:/Pan/Workspaces/hexo/public/tags/rpgmaker/index.html","b2a9e430659650e415347988846d4928"],["F:/Pan/Workspaces/hexo/public/tags/ssr/index.html","b999160581a95056cfaa3a3e62ce536f"],["F:/Pan/Workspaces/hexo/public/tags/steam/index.html","a283932455707ae90784105dd648ceec"],["F:/Pan/Workspaces/hexo/public/tags/steam买买买/index.html","ff2249c42d2a116e2ff9109e57ebfe4a"],["F:/Pan/Workspaces/hexo/public/tags/typecho/index.html","c81848bd7d20e6596d106f9d4892acc2"],["F:/Pan/Workspaces/hexo/public/tags/wordpress/index.html","3cc2f8c4973b781f87745c417148696b"],["F:/Pan/Workspaces/hexo/public/tags/专题记/index.html","01a59fb932348a6431009de36abe9488"],["F:/Pan/Workspaces/hexo/public/tags/初音未来/index.html","30f4bd8e0da87133cf12e27bc6955c6b"],["F:/Pan/Workspaces/hexo/public/tags/刷机/index.html","f7c48b6a929e9639ea8b0c39edcbce4e"],["F:/Pan/Workspaces/hexo/public/tags/动图/index.html","bb15b29e566d7650a089e83bda9be57c"],["F:/Pan/Workspaces/hexo/public/tags/动画/index.html","198c3766c954504345141032b9961a7d"],["F:/Pan/Workspaces/hexo/public/tags/十年之约/index.html","691b243d5a706c103adcd38895b846f6"],["F:/Pan/Workspaces/hexo/public/tags/博客/index.html","04c46c201cb2f336b30ebe9f3c376e90"],["F:/Pan/Workspaces/hexo/public/tags/去广告/index.html","e8e84b4fe997471d5030c1102b69ba8e"],["F:/Pan/Workspaces/hexo/public/tags/回忆/index.html","5df249f942c564bcdd904a1be863b1e7"],["F:/Pan/Workspaces/hexo/public/tags/图标/index.html","0f511a150b7b885707f423844d410eef"],["F:/Pan/Workspaces/hexo/public/tags/学习/index.html","6bfe3d447aa32359ae0f7fdb6967e0ba"],["F:/Pan/Workspaces/hexo/public/tags/守望先锋/index.html","911a5277a055c89847103472a18b5ebe"],["F:/Pan/Workspaces/hexo/public/tags/建站/index.html","a3dd15f5d6a3cfdf18de423b43a51dc2"],["F:/Pan/Workspaces/hexo/public/tags/影评/index.html","c085ce99fab090fabf8dfa175a75bff2"],["F:/Pan/Workspaces/hexo/public/tags/心情/index.html","c9d33bf4c6cec4757e6aff99f04a1b95"],["F:/Pan/Workspaces/hexo/public/tags/我的世界/index.html","b5d2ccd634e340271bc9a1d49a097b7f"],["F:/Pan/Workspaces/hexo/public/tags/手办/index.html","9e587025554079135c6db2f1a7db4179"],["F:/Pan/Workspaces/hexo/public/tags/新番/index.html","033ce261aadfe6456eaa304723aaec14"],["F:/Pan/Workspaces/hexo/public/tags/旅行/index.html","8993b842fde6f1bff3ac4c17b91d3ac8"],["F:/Pan/Workspaces/hexo/public/tags/晋级/index.html","6b55c633a81ffc20173cfd83e7f33620"],["F:/Pan/Workspaces/hexo/public/tags/晒物/index.html","52d45f97c90997c53377597dcfef8993"],["F:/Pan/Workspaces/hexo/public/tags/更新日志/index.html","9b9d227ddcc6c6ed653e1f0143b8d26b"],["F:/Pan/Workspaces/hexo/public/tags/活动/index.html","6c5c612414353c1fd53f9aafaf055872"],["F:/Pan/Workspaces/hexo/public/tags/测评/index.html","074e56849162a45ad75df1fc82ae9591"],["F:/Pan/Workspaces/hexo/public/tags/海边/index.html","4bec4e32e5b427e6aaeec50d5a42675b"],["F:/Pan/Workspaces/hexo/public/tags/游戏/index.html","40ba698a0c39990c9e032b0b0f98ab10"],["F:/Pan/Workspaces/hexo/public/tags/生日/index.html","9a9f311ddf666b24d2f7ca061861cc88"],["F:/Pan/Workspaces/hexo/public/tags/生活/index.html","c454c315c5ba11a2384359e89bf6c236"],["F:/Pan/Workspaces/hexo/public/tags/电纸书/index.html","c2799f7dc607643231b5f654fce2b90d"],["F:/Pan/Workspaces/hexo/public/tags/笔记/index.html","d2effe3e90e7fb4dbdfa4282d6319c43"],["F:/Pan/Workspaces/hexo/public/tags/纪念/index.html","9f343dd9f16d3a03038264c8f4ef99d2"],["F:/Pan/Workspaces/hexo/public/tags/编辑器/index.html","1892d7c77b447d83a4ad35473ae75a23"],["F:/Pan/Workspaces/hexo/public/tags/美食/index.html","7bdc3d3f120f4e2961349e78733b7e1a"],["F:/Pan/Workspaces/hexo/public/tags/藤ちょこ/index.html","f1d8e9c8ab7e3eef6281107af1f77a05"],["F:/Pan/Workspaces/hexo/public/tags/表情/index.html","7f6f840a726b28c35473da389beb8de1"],["F:/Pan/Workspaces/hexo/public/tags/购物/index.html","148cd536df36a03b8a7b909a7d5aec6b"],["F:/Pan/Workspaces/hexo/public/tags/赛博朋克2077/index.html","17e0b243f9c5410e9bdd370478b0891b"],["F:/Pan/Workspaces/hexo/public/tags/超电磁炮/index.html","53d675f48e627b33787ea60e251c515d"],["F:/Pan/Workspaces/hexo/public/tags/踏青/index.html","b6b04968a33f25b3f012972a7fc38815"],["F:/Pan/Workspaces/hexo/public/tags/转载/index.html","57750e45a7546d6d2748a61c5ae4b1d9"],["F:/Pan/Workspaces/hexo/public/tags/软件/index.html","8d49328abb45b23b8fc2150d9426cbd6"],["F:/Pan/Workspaces/hexo/public/tags/音乐/index.html","d1466e531cf785be09c4156bc92adc29"],["F:/Pan/Workspaces/hexo/public/tags/风云三国/index.html","ba92e713b1d8376cf433f8e57043de93"],["F:/Pan/Workspaces/hexo/public/tags/骑砍/index.html","54f9b9bc11944c57d6abdcdaf7a3f0ab"],["F:/Pan/Workspaces/hexo/public/tags/骑马与砍杀/index.html","bfadd2cb533744123a74babfd26bb915"]];
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








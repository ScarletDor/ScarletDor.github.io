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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","5ef230a11def85867640c2389278ce80"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","4c4c6e9dc1c3a09aec99a9682a4b67e1"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","ebb165f972240ef925a50d2e06aa7b28"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","e74a69e2a76beafda69669f32cc45309"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","b0c985c4227e2cabc040fb048bb7767f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","a9503646506a75e721ba88dff0a8a269"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","6b4a5f62cb6910290f31750d3c63c914"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","3d9dde8519ff9498f9cc64e89b0b91eb"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","09044db3895c7078e257126a33d09ba3"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","98467ddf53a4aaeec26ad897ca388f07"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","2cf4c04677f650a54dad90a7a447542b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","c9206d53efddbfe890d816e49b3b78ba"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","aa9a3ef0412263692b1e56d5e7a1d40b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","1860949d689fb2cd81bc8862c3fe5075"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","bbc808ecc85a0b5ff7ba1b2a8ec80fa9"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","8e47b2e80723cf2fd51b912d4895efd0"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","23463f36936c937b3471ee693122c971"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","82bfa9cba2565dca89dda241ff9e8b16"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","bf1373f72cd3849891c70ff5f03c2186"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","e674999230163a8e36d19f728bdf527c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","ef92080845c54e2d49f3d5d12ef53ac2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/04/index.html","bd0044fb7e586891f1f1cac952a39c1c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","b1ff0bf5ec29082261d99f414e1834f6"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","8e3ada76cfcd1249c067014dc09a19d4"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","86d2bcff4de550fdad58861d9f9b5be9"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","43fd05116e2f307a988070572b79f8b3"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","ce3514832404572780048756f0bb1f23"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","61868a78574cf8e01ee95576ebca0502"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","3ecda7bb8f69351282a4664c476887d8"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","5dc5bdeebac4f9dc5219ee7b936f646e"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","6474e96bc12b993ab3b91981b3848014"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","74d3558e1251a0c97a8dd999c4b1d8aa"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","aaa59c82d4af84e2d8378166896f24fd"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","96c000258677313dac7fb43c2885f27d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","f347ddc096d1dfe6759140fefac050de"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","31d06649228ac3b7a38c88776b72eb59"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","41e64c8ec2c3f0a528e410f5835fafbb"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","b153d57c19213cb0370e8f85dfa8f18b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","343c9266f25efcb9241f92b097d07969"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","a8f34281064122a7afecad30961efa2f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","0edde9f724a4c7dfd1b6760285513a45"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","b98213549f1c25cd080242e52294e418"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","e77fd2976b41efe1588e7a265788290c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","a702a64d5d99f61b332176f0f5f35ee9"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","3e48cd35d966bc5bafdacf7e36305f81"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","94da5b3240a9dab114b42fd287b1835b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","1b7c9ca1a8e9e4be2aea25c33e3c9259"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","bcf49bf41a530064ccc23c249c085b12"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","b454a6fbd9f8748249f6a8db71771259"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","872fe2d274dc64d50e7753b9aec906a2"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","741bf8d6f4ecbf9ffaa6677a89c5de33"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","cd572cce1d25905cb8b82362567558f3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","cd81741651dd8157a1141f8eac29fc46"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","1560b6c8f75d15c12abe3a982f5b4a0a"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","39a260ef361f3b8a8ef623503a37df8d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","2e8e7134b88b56ebe3659b9f56361d8e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","d4c3eb44a8962fa8aa9633fe3231f9cf"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","6b6ce10fff3a7a9600e77f11429b9ccf"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","baa07bb5db19f89c2e6322457f52228c"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","056598621b458f57b8fe3e350a1ef184"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","b0a9f94dbd6129ba81793300b276f4f5"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","f5bb3f355506ecc0de6e86c303e75532"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","7408b7b17d1a51b62cfd3053f316ddbb"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","2046f6a83aeb4fa4e5e94d9c6a4fad13"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","d0d9dfb52aff44867f3b7042374c873d"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","dae93871d186eb935f728a9aba9a0c5a"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","915b64b75ad2d545cfc1d9272a13a7f1"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","1bc9ed512ada8bffe8187384528d9cb4"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","78a0ab0d10b5f1fb885570e93ef29b12"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","ebd5015040d9ed10cf4c387b0df92593"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","a0e566ec336666c67ecebebb229d45b0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","fb5d93600f14eee92b7b221e68c7271e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","caec71589c9ba04a0e986139081451d6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","db3a42671bd2ebdb334c00ba152b300c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","5e73686b7e3276cba2af193e344ff338"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","1c43128456c32686379a7dc285b93a8e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","ff35e9252f000fc220c852df56bf359a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","7c09681afb622ada4e7f3c3bfe792b9f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","d994f8e3dad4b3a8195101e8455845d4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","4656b8be9d356e1120af60d7c553cee6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","3382b8b08cf54d6ad8759ab15030de0e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","bd759f320399edd632e21ceb22f7e298"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","5286e6308dd70ad13cbd383a323e489e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","d7d6a2e36ce734e5b94fb18a0d1991a7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","0f485512fd43b87c2f3eaf988c519e80"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","54d22b19130646fd921faab79fc791df"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","f978213f6ed197eb0af1e10af204df07"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","ad42fb0cc5af558cd262307ec511bbb6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","c3d3b43cbc56d09a70a85593c6a10112"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","c8e3d55e05e02cf17fca246d1382f9a6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","9166eab6d24e71b944fd80a4fa11e973"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","9ec8db835a986e00a6ca26ce617dd11c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","c68d052941fac1eea1384db2ec8a5544"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","5cc139b99faa3e2e1e8fc71a41816e42"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","9113706050d59f96bfec6278749eaf47"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","75163bca8bf4804f09b9ec114855b43e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","9e25f965b8d67e48fb95de574ee1dbc4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","bce8f282f03a13a3b934c72bf097e5db"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","96a3f7af08946a4e2c2119ea13dc9e06"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","a689b918d535925a404db5c2e4d5331a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","f4164a2eb4ae3355dad6cff4e145c2b9"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","72ab7c594afd3c57801d65ed221a7c97"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","b53c4a1009dfcb413e88f170b2fe23fb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","8f6c516623f744cbe3badf6df2d92afa"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","776e7032efb4bb27b1303d7e38ca53d4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","361855e6c7fa65e74e8a877c1d157987"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","74473c97f4ec385207f2a805fd419f4c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","bb75e4789b37092f4f8d1286d260b1aa"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","bdf8ada5c58789e51a76fc9af90a58cc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","e11ff60639d40d4f8be6c6109794e6b0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/c2d6f175/index.html","1bc8ce9eecf235669731345679ca2e10"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","738f872d2bf3078857d59e9d55dc0712"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","cda4c84c7dd5b4fb55a2f8f6353de473"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","4330021b3bc8067e73bbfff08a290a5e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","770347093bf7583476a21011a50645e4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","6f06c4ff3b1bf581db82c68a0876acb3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","2cdda9045d44c4f2109a62bdd7555237"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","fb76e4572220f6dce7ee602e198f181b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","8cdb66f818e6927fd971017ae0dbebf0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","49b1f234b82c9a6956e88c957e609225"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","3166a3872411b0943a780d5ad89eb393"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","8de0ee58ee6a799b4a13cb85489a0a88"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","ef20a78504ccb6d7d79ee6d500e25db6"],["F:/OneDrive - Office/Workspaces/hexo/public/shuo/index.html","f00701a34adc2aa0cbc0678951537338"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","65b2e1ee4573c2911fc6c4122a8c4db2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","241a453bb34379af09cd585fd9bc993e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","fbc2dd0883a3d553ca824e6c2dfb4db4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","b2363f04e5c1c928f524f16e1bb5edcc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","c20477a41a954c343c5e4a96454052b6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","50ec1c10c94737252e10a14f5185fe63"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","b4cceb8c26c6992d8cd9242bc40cf2db"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","ec7fac45dd98c3c12d122b3842a7fd04"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","519905703083e6ade886558180599a77"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","60cdf0f690fe65833648a324a64fbd17"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","dcf53ba9f7d78125fa1efcfdb6fb3195"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","fcd6722c07e03b4b9221cdce0e27208a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","4a0916cdbac7a506fa411318ed5f5cc4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","95d106169828c89821131076a3575467"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","69e30994d9ef53261d00b67bfa676149"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","a0b4b393539578a0ce633420fa7235c6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","c6e92831347abc1604b647fd3237beef"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","a2352043b63d685f2b65ca6ee279a056"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","04f8b45c1275b00d30c16a7f4ee88326"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","8d3fa5406ce1d07f63f596b1a613611f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","663d5786bd24d6f3551abd384ef701aa"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","987f97b40f42ec30af19f18fbe5c5f09"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","c9026fe89ace4a0b580a51b356b1b30f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","6625047f3e1704767d92ac654d873249"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","86eeeaa77fba92f363d8a09e9af98ece"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","5112c27d656375e4af84b01b094f81b9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","f2d6be8f8dd039b1ecc7f8de8468f783"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","e1a236cc66fdb01f3a542c66afef8268"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","eba951d49e1ce2c898cb074be27300ab"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","80396767a8115a6a4ce02176798d2873"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","1e01098c56101e7c487859623eec25e6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","83f3de890df60d38c4986756a0a03e17"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","34571300de3b80c77a3462c2d0220a03"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","fbf628a2883ed396d2dc454a004249cf"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","517cab6277ec51c8854d76dc527250f6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","76425e2f4af879212f42e7c7de71d11f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","b0e2df367a3c7777a8af0a7e8581a018"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","4f6d001c8a74c9fbb0abb6153622682e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","378c7a577f9fdd9499e5f6f164ea484a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","318b1e0ffeb433b4c553839152880389"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","2c071e9e703fe1cdecd66ba9cf3450c6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","cb1115bb8adfba88c212a07a2af4b81c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","81bf603412e0b835c0ea9ee9ad517392"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","cb550a337a40119938e89c5bdf490a46"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","11902c90d264f381b2ce89ee2148405d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","066e3a0776bdf7bf7026e880ed1a9fd6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","65799765a1163bdf0626408772aaddee"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","db9b5afac957c4e9c909c6ed74247367"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","a94779ede3c723ef301f4a9b8b4f54a9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","d7929a46bb77ce397245473008de8fc2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","ee5b170b6f482b69b40e3ec3603a62ef"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","499b9acd9bd27735567182b90ed42d96"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","c38333c032835e13f865c4bf66b40b48"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","01b5d2e4aeb00972ab0a93dc9dd87d68"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","850a1f78786c8f420e8926b9634abf47"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","c58ed1f2652e25ac1cf3127da4677439"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","b4cd00d14ed17766bf87858e73196dd8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","1ee8ccccf3fe7f6d0ef4818b71a6b776"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","4c49a55cea144a97940e015bdee02c92"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","f53f5ed06583247a8454901bfa5b4f0e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","5033fcc16f7570ca1c68e6a6ebec251a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","3f3d0520807d67113b065b2e3c021dbe"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","81f44fe1dbaa93ad3cf7faafc32e99f3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","057ac01737b722777b2e3227f96c34b2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","0e4eb842648163ee336cbf85d30c31b5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","f1d4b5b3f1149c683e1e1367b75efbc3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","65a0691ca07ed18052d19df31a67ce44"]];
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








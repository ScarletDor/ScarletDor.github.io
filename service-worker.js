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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","e4a05ed0a89126afe36e19fdea4d20e3"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","995fd1a01d0a022db911ce10cb871973"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","5a9da4a435dc50daaf913bf609aca0db"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","1c4c8c80f8376331c95e9ae33c76e5e4"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","e705438d7ad08cbd5f4ff0c059ee51d8"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","2a879e30bb1abaafff468f2951cb2a1e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","d441298a4ebad87918b7638432fa3ca1"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","92e5265101795e61519652db7242e15e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","325637aaa52fbe6a487f97323baf9a88"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","684303472917b2f63b54b1008de9639a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","ff2c5e97771102ea118724fbeaaf75a3"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","4002f21b04ebaacb9eec6f6dee19c401"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","56832251b6cd3ac781786ed1814e282e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","46b8823b43ead70e4489e16a0757faa2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","a954f5aaf3866153a8a78904fb83f9f8"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","651f704fe1a36de1f2ca8c54a97f267d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","e9ffff9aae4b60f781b7e5b272c476c1"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","9f52624bde7f5f96c9112a5ff9174230"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","41308e840dcfb76e4388f56aa369a365"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","266670d19c935ce55fc708f6a6a2c662"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","ebb04ddcc58d7dae85b9a297e1df815e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/04/index.html","2037aadafb589a59248da2087880fc38"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","fccb4103119ea59d152259a54b77b301"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","443aa83ce980d6b28346d19ea3bc1b8d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","d311d7279b427574281bf58de78eb165"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","df4b9950e1e42ec3e93ad0ce902268e2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","8cf3a3bbe931b7bc9a75b38b9d66496d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","11d0c7934d085619537f5733781e479a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","e3566052c9822c2a49e03bf9025733cf"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","e61a2a8db113116f36cc7d54018e2e2a"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","6474e96bc12b993ab3b91981b3848014"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","9c1cea55421f38766490f17b752a8190"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","74f3a00499c68f3cf5f950037dd80d03"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","e5f20336daaa0464b4901c77930a9afe"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","295858bfd9b20f85d9b09c9d9fb623a9"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","17937cfd19a3614106108c4ad1d62b09"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","e07daf644eb613ce8396ce48d17fba1d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","b62e167337091e3971ceee0af57f0115"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","d216c7dfaaa5850f9c9d6bc7501fbeb6"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","c062cf87357f8be1a8faf746837bf670"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","ad3b9eaf4b69f601935d467f34e5d8f4"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","0779c1b49e8a020aaa8e74498d5d47d2"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","1cfee916e1cd20e1db6bb0d594c452b0"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","e90a33851728f0c7bb5b75c8c6e7eac7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","98846123beb8dbecbbb7242a1995aadc"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","328bec37467fbae847bc80ec9ad0fe04"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","3ef922a8dcc8e5cda82176dc19397ab0"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","1e3f4aa4c293f6e524333b458bea66f3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","420f17eeb29b2e4edc1c11a99c5caee0"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","7af12f383296065966241f5ad7c8b7a3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","6dc2d51003a94c800c083ed4ca92a047"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","cb123b65f820bc1f024526ed3e1eef93"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","7b5d104367fa17d78bdf5c89fbec6bb7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","350b77416ef24d7d6e4cb40f8fdc6f05"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","876360751b612031b3306d836051f7c3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","d826ddd53aea12870534ef21d53f07f6"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","3daaacd068bae28387d57d0f4293ee3f"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","a7fc6907657c3aaa9d34353ed420ed10"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","b1fbb90883d7b8b42c754fa23f1a8be8"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","ae8615dad0a95b05c7183339a13ab8e3"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","51b53b246b20ba1b0fb7d674ae951ecd"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","942420b0e4d53a34badf2dfa62a1493b"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","2a15b50180f7780064f4fff3d545fc8b"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","116d8d6a4d9faaf995b0206a3628954d"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","d0d9dfb52aff44867f3b7042374c873d"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","b648c87841829cd0c3e87528f56ef057"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","266f6e5e090c3c1cf0a48068886b09f1"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","c8abe82f34f35f98f94ea41372cc9b04"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","c155d5d4e75f579eb1c8206a638683bc"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","eda1b56d7938359dd57d53d5012b1e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","05947f3abf0d2ec53f15bf544eddbaf3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","f100ee4f0123fa9e0f32545d2d337a4b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","8ff8aae3f7101f0d66283cfd742e3866"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","46649ae5c2ac5e0aeeb082f9c60ca815"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","413f931bc2f3ffc038c6563c413f5044"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","410019f8c4714180b7f697330d8fb99b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","4e0fce5a8544f11ab50b124538344173"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","150f36c6f48a4fb92a5ac14f3978ef13"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","c8941c7b801533e770e196f202bfeb3b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","b2c2bfffd4489fa207edb47350c0eca2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","9240e14a12c9805b48b744eb7456e8ec"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","e2018d0e640a91dc8f3811938ccf7876"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","3dcaf5727c0059b17a46941974414687"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","20417f847a738cdf0bd2d587e8c5bb3e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","4dd3fce7e02c72f9fda3f20a0bb44e49"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","d0a73eb2253944f8cc675e2dd5654fb9"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","b93eb5f8f08a8c4e256d9ad564cb91e3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","4f99baaf7dccc27f5bb37fbe0ca0db2f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","6d8f5b572882d36b5b75fcfb172f36f5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","d3021f8550b7da33c8869ad931688fcf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","d93ee503ab0bcaa9948002e0228833f0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","0855d900fbe4e14d3f927cb6024cdf75"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","ad9c8f4ef8639c0d0bd0b93cdccada05"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","2768e3fddee053cafc5305f425d84339"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","273fc70a9673a3154ff0f55c6b0cfed0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","4ca486ba61ca6de053da857252ffd262"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","808b0191b2ccb35eb9de5d83c184f783"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","908f672ee815b98c9e10252218ff1a07"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","d37ff0bc2dbced08a1ddfded31dd2a49"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","5cf6db2732d9ce55296461ddd4528130"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","c4a3dfa2c11b17cbdf05261780a3a693"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","e18ac1e4e5ec2c1d86454c57d7ee4c7e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","190630e0f2c4f7c42e50993d210fdbc0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","c6d2aeefd48858d395d1099e28848097"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","162cea57659062f41d814453a050fe78"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","c33a6e8a2e418c861e446f3462f30a63"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","62bc1ca60011162920d3fbcfe3dfd490"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","10784211e1c1760890305f7c1ab6994a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","ebadf6c25728888d6ffee732c34d6b3d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","d5a807f889470f9ec79890ce9e40ac56"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/c2d6f175/index.html","43e0f41995b53ef5953823fd7d36e05b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","97afa361b497d6c28143d56f7d32e452"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","648f5b4c1c7f274672af09d85843759e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","a0da5ffeeaadcaad5574a5748f3daf7b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","1358c3920961ee490ee4037c6c049f06"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","327a01dcbd373bec8eb834b46159a64e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","3e169c9ccff81cc76da76da1d44cafce"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","d89c0fc20ed26dfbe71f95dae27ba437"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","36048b7d400edfddbeab146b719ee971"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","c790f483cdebc24f36cfb08102ffe320"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","ce87ae198df231c3c6f3ada4c04ebee7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","75630424ddc9558c495acfe3141d8823"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","0c98df98d53b44345a6afaf8276a2231"],["F:/OneDrive - Office/Workspaces/hexo/public/shuo/index.html","e6da5bc169e654147dcc8c914db848c3"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","3b37e19ba112109fa5b68f0786b9c3a4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","7f06db9596672ce19ac37a7c02ddaf4b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","df980ff27b724955b5950f30f8c97656"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","3c60563c6694e448b3cfc72b0e61f286"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","1599af1ee1400d96a542c9d08ba23f5c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","73e7d1a24802bdeecbc6ecfc83b109e4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","cc5d5909d06414b872d869e24fbd3352"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","092b69a885a74f8d47c8200ecdecc504"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","1cfc75635592823c62d23d2d0abf0955"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","01d11a0733b352ef0a77799f3595d5f7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","7776fd022d8e830b5231e06b9432c689"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","e0a2de0b7727aa6aa5689d8857685b2b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","20a02bb377924770846ad34ff53fe801"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","190a4578b7bee475582d14c0b889e53d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","7a5f94d7761f86fc1c9e8c00c2ade759"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","53c0f6ca1dca07b249df1ff0e6e63dc1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","7ad3d448e955d2927a1450d5a9043011"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","76074efa1a17b28c2d7c5ad066c9b33c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","46ca5bd0ebf6882eef33b63abd90b4ff"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","dd7ce09927fef956dfca8d2aa1b3c5c1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","4cf08edd5b8081b42623eda4574c5fee"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","47a79d17d64374f6b277b03caea85eac"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","360d49d6147ebe792b967c9b6e21cbf1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","bd35e8e43cd2bf9e9f2d74a56ad69b0f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","2aa08a29c0a1cf4958162c55d08cbfff"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","da5c5b0e352641cebe01d32bde774fdc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","941f0438e5749b72242a70e73ad112d1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","cdc8375427ef00480b5496f2eaef1711"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","35cfae092dce93b612a7fe40e14ae1b3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","e8394995e68260a8f03ffef74050594d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","0bb85acfde30c8d250d6cc1c3e83982c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","773deb6f05f12fb550736bac1627d83d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","70e066a52a62715a250217e78e0dbc48"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","8383856c902878470a6b42710e8dfc9f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","f8181cfb8eff849c03773870f00153b9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","027094fff3a1779e71f19ad9edaddccc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","c50547a25fefa62cb2eb70d45613429b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","1f2d92103a5a1aac45339d6b9f6c0cfd"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","af649daf3f11f612439d20aa8f6dafa9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","9aaff790eeb3c224cd48505f58744790"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","07de80ca41bdc970af89cabe9c016a7f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","7b9b54df0be7b8a416816b045d06b32c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","d12c1465bda1e22b7b072134bb6c222b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","0c815c40ae3a26ecb5dcfbfd6ea0baf5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","9dc8435e2d0b46225a5fb94270ed6717"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","061413193dd8cd9d27a58938cead4228"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","5b3b5e083f3ba715efd273a8e17e2cc0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","df4573e4baad94949ab36e3be8fbcb4f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","a27522a4c0a2ba71dc69c8a7779b8772"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","17ac46eb9637c1f21f3bfc272db31228"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","2ca27f5f428931c26273223e90d45ff4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","6a2728a5fa02d384ccdd3d69ef655065"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","5f0942245f1231d4edcafa22a4ad1404"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","5804a62dc3ef62adb400b44264b8cf04"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","f0df212357cebfcfbaa4ec3e52076333"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","4b3eeac257ceb3bdbd75c4c79310f7fc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","49b25b939f12d8300495e45f1210fc49"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","78fea5d2a2d16064cfa4440bbd18d109"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","e8ee4f4daceb7524c75da30819f78925"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","c47bf7d950f4e78e4f11f869b46b4dc2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","76f0bd4d2910e59c943176345678e0a6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","0027742273edbe472b0a3a62cba4242b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","bc53f45ab609c0c873187228243b7ffa"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","0a260ba268dcbdc7e8bb1679709cfcfa"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","1367d67da8ea12d1dfb8b6f37e0678f7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","05d110c00abf60e6b63bba1593949648"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","3b3dc4212d16cbad2af60bd095663c75"]];
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








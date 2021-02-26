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

var precacheConfig = [["F:/Pan/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/Pan/Workspaces/hexo/public/about/index.html","d4fa67b552116e53a41ab137195e8cbd"],["F:/Pan/Workspaces/hexo/public/aboutsite/index.html","a54cf9ee11cdf0b572dd9457f1ac1649"],["F:/Pan/Workspaces/hexo/public/archives/2019/10/index.html","c9a2f5abced639e37c1f813bbf598885"],["F:/Pan/Workspaces/hexo/public/archives/2019/11/index.html","61857ec00b48f663908b6cd57aef735c"],["F:/Pan/Workspaces/hexo/public/archives/2019/12/index.html","b624962901f1d77a58a409a0e03ed25a"],["F:/Pan/Workspaces/hexo/public/archives/2019/index.html","e1b74b93ab6d29f56a70e734277ff2dd"],["F:/Pan/Workspaces/hexo/public/archives/2020/01/index.html","e41d8262ba76ba76ef89e8d57caaec33"],["F:/Pan/Workspaces/hexo/public/archives/2020/02/index.html","1d27d3d9a9afeb79a0490b82ad1a10b8"],["F:/Pan/Workspaces/hexo/public/archives/2020/03/index.html","231e9cae8392975815c672ae81e09ae6"],["F:/Pan/Workspaces/hexo/public/archives/2020/04/index.html","a0fcf91e058c3ad1219902e49c4053ae"],["F:/Pan/Workspaces/hexo/public/archives/2020/05/index.html","f28ae26e8e88e6b4eba024df6b5bb2b0"],["F:/Pan/Workspaces/hexo/public/archives/2020/06/index.html","616c4a8335f96ae489ee0ea29ed5f35f"],["F:/Pan/Workspaces/hexo/public/archives/2020/07/index.html","a8b5b302ab98b8545169ad9c6a2d77b3"],["F:/Pan/Workspaces/hexo/public/archives/2020/11/index.html","c0f5d11fdb3d9ebda6d5ad5a01cec2c4"],["F:/Pan/Workspaces/hexo/public/archives/2020/12/index.html","93179bda7436e4bd39fdb5c83ca50ed6"],["F:/Pan/Workspaces/hexo/public/archives/2020/index.html","89b12c4521eca03a7dbe3e8a4ec51ea9"],["F:/Pan/Workspaces/hexo/public/archives/2020/page/2/index.html","6fcb161821422a6a72d7c7bfe9dcebf5"],["F:/Pan/Workspaces/hexo/public/archives/2020/page/3/index.html","1e7ad4b0c8cbe44c82a2ce463fc914fc"],["F:/Pan/Workspaces/hexo/public/archives/2020/page/4/index.html","540405c3746df5cea66b0278aab722cb"],["F:/Pan/Workspaces/hexo/public/archives/2021/01/index.html","781e6aaacc2535e477c2238558a5e62b"],["F:/Pan/Workspaces/hexo/public/archives/2021/02/index.html","6db78a9ad2770198786d146ceb9009d3"],["F:/Pan/Workspaces/hexo/public/archives/2021/index.html","76d724df1f9346b56e051121d2b0061f"],["F:/Pan/Workspaces/hexo/public/archives/index.html","0c01f48942cfb467ca627a9ae48b2ed9"],["F:/Pan/Workspaces/hexo/public/archives/page/2/index.html","5740f8c3b38e5eb03338b148bebce0f4"],["F:/Pan/Workspaces/hexo/public/archives/page/3/index.html","1102299d0216d5ad8abb160e3bac1feb"],["F:/Pan/Workspaces/hexo/public/archives/page/4/index.html","59531ba5fbde29dfd4232176c2f8e955"],["F:/Pan/Workspaces/hexo/public/archives/page/5/index.html","d8b9487c05835d533ec025aa43fd9acb"],["F:/Pan/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/Pan/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/Pan/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/Pan/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/Pan/Workspaces/hexo/public/bangumis/index.html","7bf8347af107e6e11512ed62fdc149b7"],["F:/Pan/Workspaces/hexo/public/books/index.html","fca5f954731c21fc60a8a4ab04966aab"],["F:/Pan/Workspaces/hexo/public/categories/index.html","beee75a4c2675f654a14a96c740d3184"],["F:/Pan/Workspaces/hexo/public/categories/二次元/index.html","4094b4f64bb784673f344a41e6304f86"],["F:/Pan/Workspaces/hexo/public/categories/二次元/晒手办/index.html","b77e77e0fd790f38ab7b6c21ddfbc839"],["F:/Pan/Workspaces/hexo/public/categories/二次元/番剧/index.html","81e5fdc21cbcebeffbbc966a316b8c2c"],["F:/Pan/Workspaces/hexo/public/categories/安利/index.html","2a3eb9fc16caee365f1a19703a71bec3"],["F:/Pan/Workspaces/hexo/public/categories/安利/世界名画/index.html","717177131b41b839318ca53022e40243"],["F:/Pan/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","6968923f986ae19b31e68c7159c70d76"],["F:/Pan/Workspaces/hexo/public/categories/安利/有趣分享/index.html","6ce4089de53fdcfb5c076ecec6072321"],["F:/Pan/Workspaces/hexo/public/categories/安利/音乐影视/index.html","3c33fd8a81e51b618308994f4e72e724"],["F:/Pan/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","6b09ae6f963f3a2ec8f9f4f3f72ae1f6"],["F:/Pan/Workspaces/hexo/public/categories/我的RPG/index.html","87f36a44ef0451281a2646a7b9c99563"],["F:/Pan/Workspaces/hexo/public/categories/旅行/index.html","a0bd298002c10c29aafa0068e152a056"],["F:/Pan/Workspaces/hexo/public/categories/旅行/踏青/index.html","c79d91942371d9abcd0c2b241da91dd3"],["F:/Pan/Workspaces/hexo/public/categories/日记/index.html","e45f8a6368a6033ad327f350cbbf2708"],["F:/Pan/Workspaces/hexo/public/categories/日记/page/2/index.html","1a83798030779e0e159e1f8c0df35808"],["F:/Pan/Workspaces/hexo/public/categories/日记/page/3/index.html","240eea6f22994b582a3c7197d0fded67"],["F:/Pan/Workspaces/hexo/public/categories/日记/吃货日记/index.html","33f98805e8f1df9d24015e5c7656c3ad"],["F:/Pan/Workspaces/hexo/public/categories/日记/喵的世界/index.html","f943367ae39c1580ec430493a3d48cfc"],["F:/Pan/Workspaces/hexo/public/categories/日记/游戏记录/index.html","f8c6149df984375f31d17cc064d189b0"],["F:/Pan/Workspaces/hexo/public/categories/笔记/index.html","de1371a71415ce15234a85b861fe760e"],["F:/Pan/Workspaces/hexo/public/categories/笔记/page/2/index.html","c170e44f89bf642d7e7d1fe992f2b50f"],["F:/Pan/Workspaces/hexo/public/categories/笔记/博客建站/index.html","400665a6c6ac3ca081f23bdfd1daa24c"],["F:/Pan/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","379b7f93eee5927e8eb92d1f18efac82"],["F:/Pan/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","76658ad3b257843094ad0c4da4d74323"],["F:/Pan/Workspaces/hexo/public/categories/笔记/网络代码/index.html","807f7e57bb68eee06d7d8d080c4eb36d"],["F:/Pan/Workspaces/hexo/public/cinema/index.html","84c464fba939dd883a65201974210d46"],["F:/Pan/Workspaces/hexo/public/css/caise.css","415b20cc583d2cd7311a2287513ac30f"],["F:/Pan/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/Pan/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/Pan/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/Pan/Workspaces/hexo/public/game/index.html","bcc217c67da10ebe34b495eee2380a27"],["F:/Pan/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/Pan/Workspaces/hexo/public/guestbook/index.html","bdd8b2bb03e84d62e156a7c69c7e3df1"],["F:/Pan/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/Pan/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/Pan/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/Pan/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/Pan/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/Pan/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/Pan/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/Pan/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/Pan/Workspaces/hexo/public/index.html","85344eed377bcdb031f30ea69af44722"],["F:/Pan/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/Pan/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/Pan/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/Pan/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/Pan/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/Pan/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/Pan/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/Pan/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/Pan/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/Pan/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/Pan/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/Pan/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/Pan/Workspaces/hexo/public/library/index.html","9c093773e030812cd805e40fcbfde36c"],["F:/Pan/Workspaces/hexo/public/link/index.html","a018365eb0daaecc16ca8a62bdbadc69"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/Pan/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/Pan/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/Pan/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/Pan/Workspaces/hexo/public/mishi/index.html","5177b7ce8818c17adffe1e72eb9ff697"],["F:/Pan/Workspaces/hexo/public/movies/index.html","966aa546680a41d0cdf6417a710ae922"],["F:/Pan/Workspaces/hexo/public/music/index.html","0dfc4908fb16a1fd2dc060e6fd0c75bb"],["F:/Pan/Workspaces/hexo/public/page/2/index.html","1053fdcbfd1324f508eb15be8ea64e2a"],["F:/Pan/Workspaces/hexo/public/page/3/index.html","f12ec6d47c110c52d0bf977b7457fd66"],["F:/Pan/Workspaces/hexo/public/page/4/index.html","a1cc7ef4fc4117edbad440b1e778ef8c"],["F:/Pan/Workspaces/hexo/public/page/5/index.html","6207d5a1debec28270a5558bc40cf258"],["F:/Pan/Workspaces/hexo/public/posts/10cf6379/index.html","20f91c71b0f2aa31629b1aa51102dc4e"],["F:/Pan/Workspaces/hexo/public/posts/145c5b6f/index.html","7748fe1db10a4e79ea20806f048f5303"],["F:/Pan/Workspaces/hexo/public/posts/1b13bafa/index.html","07ae63dd50d331232303122411d17ac9"],["F:/Pan/Workspaces/hexo/public/posts/26b62851/index.html","c832287891c83a190e22180f2c5813e9"],["F:/Pan/Workspaces/hexo/public/posts/2d4222d/index.html","5d106c129b7a5a01a7897a0fb0354927"],["F:/Pan/Workspaces/hexo/public/posts/3460dca2/index.html","b95b35a6822c09b483fa97a5f86dcba6"],["F:/Pan/Workspaces/hexo/public/posts/3c0c7cbc/index.html","2c18e58bebb188dddf648458afa7c116"],["F:/Pan/Workspaces/hexo/public/posts/3f8c90ce/index.html","11720d5ec8019acdef013c13d7ade157"],["F:/Pan/Workspaces/hexo/public/posts/4a17b156/index.html","75090940233a062f112d9818311a8b51"],["F:/Pan/Workspaces/hexo/public/posts/4e287f4a/index.html","3ab383f2f02fc160f704dc11367c4e16"],["F:/Pan/Workspaces/hexo/public/posts/52fd1e12/index.html","9da1173135cddf11660dc31d9f16ab43"],["F:/Pan/Workspaces/hexo/public/posts/55dce3f9/index.html","0e5600a90cda912a619e372e38518426"],["F:/Pan/Workspaces/hexo/public/posts/5a47444f/index.html","25235ae13e26d5110f06f364d4081422"],["F:/Pan/Workspaces/hexo/public/posts/5dde075a/index.html","3b87da259ad596add263ba0b5fffa068"],["F:/Pan/Workspaces/hexo/public/posts/5f4133c6/index.html","8b681f4fcd5b8cf73f7d1460151eb902"],["F:/Pan/Workspaces/hexo/public/posts/603b6372/index.html","c791de5ed4f9497c93c54f9ce8432283"],["F:/Pan/Workspaces/hexo/public/posts/65fa4d65/index.html","ab065de3d77ac9e80b527891dca96410"],["F:/Pan/Workspaces/hexo/public/posts/6912ae2b/index.html","898626c62ec95ea418424eab6e701bc2"],["F:/Pan/Workspaces/hexo/public/posts/6bd82013/index.html","05a68188492278c80acea14d87853cbf"],["F:/Pan/Workspaces/hexo/public/posts/6d77f1ee/index.html","ce69af0e86f5a67fceada7b576771b13"],["F:/Pan/Workspaces/hexo/public/posts/76791c4/index.html","44375555bf9a660266c83b17bc879283"],["F:/Pan/Workspaces/hexo/public/posts/7df0083c/index.html","af206dd7d81fbd2a0079dbf456cb9768"],["F:/Pan/Workspaces/hexo/public/posts/8ee31f54/index.html","156204488bec75642aa73ba16b8dacba"],["F:/Pan/Workspaces/hexo/public/posts/8f34bcde/index.html","7bcdfab3d93df50d481396356fac33a8"],["F:/Pan/Workspaces/hexo/public/posts/90ae614d/index.html","08665564f15e10ed09364e0e04654b8d"],["F:/Pan/Workspaces/hexo/public/posts/916e8670/index.html","3b0d113a3bd2ca32c7bc97fc17ce573f"],["F:/Pan/Workspaces/hexo/public/posts/929ec6de/index.html","e8771006dee26ec98f36fae6ddc084b3"],["F:/Pan/Workspaces/hexo/public/posts/949c1814/index.html","a6a632ea3073f32bccfea672a955d157"],["F:/Pan/Workspaces/hexo/public/posts/9733ae9b/index.html","d81f30c2f59b79b8830f99ebeb25da00"],["F:/Pan/Workspaces/hexo/public/posts/973e37b2/index.html","89b77ad64fdcf7b99226ece2a1effafb"],["F:/Pan/Workspaces/hexo/public/posts/982d66ce/index.html","040307763540a88a37cb9a957d9d08e7"],["F:/Pan/Workspaces/hexo/public/posts/988c6240/index.html","ac450f963e09a13cb146565df7939a0b"],["F:/Pan/Workspaces/hexo/public/posts/9a4050be/index.html","e18d44484d75482fe854ecf513126979"],["F:/Pan/Workspaces/hexo/public/posts/a689f09d/index.html","1b268f6e2cdd19f931d76a2e7d38711e"],["F:/Pan/Workspaces/hexo/public/posts/a72d88cb/index.html","5f337ea32edd6c1407a2b665fa623672"],["F:/Pan/Workspaces/hexo/public/posts/adef25b/index.html","d667c0c02a1e356930ab4db854647e6c"],["F:/Pan/Workspaces/hexo/public/posts/afa82352/index.html","1ee91adce63c9ad60b3f831fb1440ea0"],["F:/Pan/Workspaces/hexo/public/posts/b4173035/index.html","9f7e04b231f7a2225f43ce9d22516b94"],["F:/Pan/Workspaces/hexo/public/posts/b89c26e0/index.html","9109caa5cdc0167a56fe53208f225141"],["F:/Pan/Workspaces/hexo/public/posts/caf8f574/index.html","da3c53143782cd3f0726777e3c288252"],["F:/Pan/Workspaces/hexo/public/posts/cb3defb3/index.html","6ea69d42f129fdfdc40641440e1d2963"],["F:/Pan/Workspaces/hexo/public/posts/d2ed1417/index.html","6275e3c4523792ef0ea1012726f77103"],["F:/Pan/Workspaces/hexo/public/posts/dabba837/index.html","bfd32d7ef3319f354409ceacd8215391"],["F:/Pan/Workspaces/hexo/public/posts/e1da0a7e/index.html","8e17b91c9673e74c9fe255df2236a5db"],["F:/Pan/Workspaces/hexo/public/posts/e8d905e0/index.html","7ea2473785fd2daabe047ac596fa0190"],["F:/Pan/Workspaces/hexo/public/posts/ea96970a/index.html","30997158a8574b91205639f3e204be8d"],["F:/Pan/Workspaces/hexo/public/posts/f1ce2ae9/index.html","3a2771f569176b631e914d2dcbba4367"],["F:/Pan/Workspaces/hexo/public/posts/f3326637/index.html","eb245366391c094b06ba566a13ff3e11"],["F:/Pan/Workspaces/hexo/public/posts/f63cae39/index.html","65cdd62decfc3a53c0ae90fd703cc05f"],["F:/Pan/Workspaces/hexo/public/posts/f6dc1ee/index.html","b7e9a0f794f363868da894508a0a763c"],["F:/Pan/Workspaces/hexo/public/shouban/index.html","3dc0fc5d0c30c697b7b8f4062f23e395"],["F:/Pan/Workspaces/hexo/public/shuo/index.html","860d108fb47cb569459f5d27acd1094c"],["F:/Pan/Workspaces/hexo/public/software/index.html","84950951511213b58a7f9bba03f264d0"],["F:/Pan/Workspaces/hexo/public/tags/Butterfly主题/index.html","6941a289aa8fb2fcadc2cd01525b6f09"],["F:/Pan/Workspaces/hexo/public/tags/GIF/index.html","30dc5a2c61accd75964684788641f164"],["F:/Pan/Workspaces/hexo/public/tags/HTML/index.html","e0c270797ac4409e0125654e344e8e50"],["F:/Pan/Workspaces/hexo/public/tags/Hexo/index.html","27664a7835084cc211ad8acc9a761db3"],["F:/Pan/Workspaces/hexo/public/tags/HexoClient/index.html","3909fbe65b2f728ce0dcc5f635ef659e"],["F:/Pan/Workspaces/hexo/public/tags/Kobo-Glo/index.html","5573caa3b7b768b7e878887de50a7c4b"],["F:/Pan/Workspaces/hexo/public/tags/MV/index.html","52f364106b8b35d3845073d8b6500e26"],["F:/Pan/Workspaces/hexo/public/tags/Pixiv/index.html","86cd674ae4ba9d625f1b4450f0a33ef7"],["F:/Pan/Workspaces/hexo/public/tags/Valine/index.html","659ae07c7018acdb44d87b3447c792ad"],["F:/Pan/Workspaces/hexo/public/tags/bili/index.html","8f82c97a92b9e5de4e284ce3d123810a"],["F:/Pan/Workspaces/hexo/public/tags/index.html","7b4318570722eb2745e08d8e8cfeebfb"],["F:/Pan/Workspaces/hexo/public/tags/mc/index.html","9edd0d93bb58643c009f3b6055416107"],["F:/Pan/Workspaces/hexo/public/tags/minecraft/index.html","53b5da99caea3a629868e67711f32dc3"],["F:/Pan/Workspaces/hexo/public/tags/mod/index.html","17d507b46f4e06d9cd5d229b6fae1856"],["F:/Pan/Workspaces/hexo/public/tags/pjax/index.html","63d3589329c36bd572cebfa21aa90a23"],["F:/Pan/Workspaces/hexo/public/tags/rpgmaker/index.html","4f32f3e39ac2943e54ebd3d459500949"],["F:/Pan/Workspaces/hexo/public/tags/ssr/index.html","fb07844acaa7b06913333c9785b98b4e"],["F:/Pan/Workspaces/hexo/public/tags/steam/index.html","fb9a319ccf2dba09e59363ed8ae8b2a6"],["F:/Pan/Workspaces/hexo/public/tags/steam买买买/index.html","487d413c3b6a0d2b035424770dfbc95a"],["F:/Pan/Workspaces/hexo/public/tags/typecho/index.html","8c4625fda97f91c2abba4024362eb6df"],["F:/Pan/Workspaces/hexo/public/tags/wordpress/index.html","0587e26941a242292bd2dc975b545068"],["F:/Pan/Workspaces/hexo/public/tags/专题记/index.html","e1de1c20366fa20c56bc1b232b2eb1ac"],["F:/Pan/Workspaces/hexo/public/tags/初音未来/index.html","5dc227822e6afb198ee1172c67871d4b"],["F:/Pan/Workspaces/hexo/public/tags/刷机/index.html","644e18f260964ee0d863130cbaff993b"],["F:/Pan/Workspaces/hexo/public/tags/动图/index.html","67a57fd848fb5891f6452364a421d69a"],["F:/Pan/Workspaces/hexo/public/tags/动画/index.html","3b00c2602ecb17a1afcf1e18d9fa5191"],["F:/Pan/Workspaces/hexo/public/tags/十年之约/index.html","5ba3d1520243243758b1a2149509a195"],["F:/Pan/Workspaces/hexo/public/tags/博客/index.html","325aea61090e954e706a194f4abb4620"],["F:/Pan/Workspaces/hexo/public/tags/去广告/index.html","8c9a2051f21b5cdbe6feac428f10ea36"],["F:/Pan/Workspaces/hexo/public/tags/回忆/index.html","f100c7ec925151fbba6b1e46f3225de4"],["F:/Pan/Workspaces/hexo/public/tags/图标/index.html","24382743374e57e2f6ca31521cd6f18b"],["F:/Pan/Workspaces/hexo/public/tags/学习/index.html","ff236d5a0a9390c3c752772559a91e1b"],["F:/Pan/Workspaces/hexo/public/tags/守望先锋/index.html","0c3aff811f620b7973bf27e98d384c56"],["F:/Pan/Workspaces/hexo/public/tags/建站/index.html","5810f7e86e7442417fb7082fd1b603b3"],["F:/Pan/Workspaces/hexo/public/tags/影评/index.html","96b8a994e4066bd1abc3c7fe1d1d5f01"],["F:/Pan/Workspaces/hexo/public/tags/心情/index.html","70728910a6f4ce9f6f18cacdf261551f"],["F:/Pan/Workspaces/hexo/public/tags/我的世界/index.html","d1ade0b8fa13558c0b03af0dda082ef7"],["F:/Pan/Workspaces/hexo/public/tags/手办/index.html","1092f9e9d611c8d8f7802761fea57da9"],["F:/Pan/Workspaces/hexo/public/tags/新番/index.html","ce4f328349081a2c4d67108c800168b7"],["F:/Pan/Workspaces/hexo/public/tags/旅行/index.html","2a58b0cb35e2761cf8d1e861f1a869b2"],["F:/Pan/Workspaces/hexo/public/tags/晋级/index.html","31e67d3a2765aada1b25f09dfa1dfa3c"],["F:/Pan/Workspaces/hexo/public/tags/晒物/index.html","1333652ff2d59a654c8441f2c874c859"],["F:/Pan/Workspaces/hexo/public/tags/更新日志/index.html","9b1654ca084b77cd79da09d30ec681fc"],["F:/Pan/Workspaces/hexo/public/tags/活动/index.html","de1fe4b9e81723cd8dae3e0d61fb420a"],["F:/Pan/Workspaces/hexo/public/tags/测评/index.html","af3fcf36b15c659979afe3d96009de1a"],["F:/Pan/Workspaces/hexo/public/tags/海边/index.html","a031cd58c95b2631e2d5b65249c886c6"],["F:/Pan/Workspaces/hexo/public/tags/游戏/index.html","0d9253c1d46c177948123d908f135c19"],["F:/Pan/Workspaces/hexo/public/tags/生日/index.html","51a713863627f22e48a976ef6f6ac318"],["F:/Pan/Workspaces/hexo/public/tags/生活/index.html","ee810720beb8c918cd038ce24fd5ce00"],["F:/Pan/Workspaces/hexo/public/tags/电纸书/index.html","d1155de5205bc3ba0a8e747e387a596d"],["F:/Pan/Workspaces/hexo/public/tags/笔记/index.html","58b22e00b54cd39e713df7bbad855a01"],["F:/Pan/Workspaces/hexo/public/tags/纪念/index.html","30551ba11d86f6b8202c098e5b2929f1"],["F:/Pan/Workspaces/hexo/public/tags/编辑器/index.html","c2752625c2058bbec9edb66c7307e2e8"],["F:/Pan/Workspaces/hexo/public/tags/美食/index.html","5d04b593e7dff469ceb61bdc4001bc54"],["F:/Pan/Workspaces/hexo/public/tags/藤ちょこ/index.html","de3b30a88202bcf2a0a8c92902fd5832"],["F:/Pan/Workspaces/hexo/public/tags/表情/index.html","ad336c259519766f3adf6c660ce8cf6c"],["F:/Pan/Workspaces/hexo/public/tags/购物/index.html","c57c83eee117de97e616ef0f3682cf14"],["F:/Pan/Workspaces/hexo/public/tags/赛博朋克2077/index.html","f89aec71c99c3cc15863b68dc9512eb8"],["F:/Pan/Workspaces/hexo/public/tags/超电磁炮/index.html","7f7785aa198e05c0c988ac2e8132d213"],["F:/Pan/Workspaces/hexo/public/tags/踏青/index.html","021dcb02f839f506c38396b390d13893"],["F:/Pan/Workspaces/hexo/public/tags/转载/index.html","4bbedfa37394a18728f9e2d9d7763f8c"],["F:/Pan/Workspaces/hexo/public/tags/软件/index.html","cf38a3fd63ecb0659e88b5a02a3f2425"],["F:/Pan/Workspaces/hexo/public/tags/音乐/index.html","338daaea62219deca69b5c75e2196aec"],["F:/Pan/Workspaces/hexo/public/tags/风云三国/index.html","68d1edc98944286d73cb81cd211f474c"],["F:/Pan/Workspaces/hexo/public/tags/骑砍/index.html","3fa19eba9e91563dddd7b37010586e58"],["F:/Pan/Workspaces/hexo/public/tags/骑马与砍杀/index.html","e9a678b5dd12c487d51686a1378eda9d"]];
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








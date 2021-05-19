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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","f531b00fd8c36ef3dbc4417303956e7c"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","6b63985a9b0cc8359bb532372e515f39"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","2444518e5a087fdae754a97d7f835be2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","be989b856aa0a8c50ba45f8092fb475f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","db527598ea900b0599a3d33ab7aba0c2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","8a71e18fbb4fda1567c63e812393469e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","f788ff896477d1253e5243eb358777eb"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","a507e27d4de2fc2225ee515cfedc8190"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","2ad73365465fcd2f99302df382c62ee3"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","d25e0485ad4ee8d3289d770a84250da2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","aea9f89023e087f6d11b3cd03682a0bb"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","f74f0563c30eabe2f45bc378323aff27"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","7dcec8832ce002990c222edb9b5c72f0"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","f114da2d180542ce186663c7e5f7c697"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","13de23cd84640246160832ee45f966a5"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","d9e9e33a047ff06ab19089b804a3890e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","9729e5c24b89d7c2112bf0ec5586dfe5"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","ee66d29d93427d78a3891e578ed6cfa2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","56ce38e74a656eca1b09c0cbe416d143"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","4d9a01c748b369140f24807c89b1b070"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","0b3301d36de2dca9a4039112fa7fd285"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/04/index.html","bd0044fb7e586891f1f1cac952a39c1c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","eb5b29d614a323364c8c2dfc9cf5978e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","59cabffa1683115c07d69a633fff3b35"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","02a7b85d4ddc068f4bb9091e32209ebf"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","364a8a9d2ca387dd5b6886097fca5e73"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","2a2b76c01dc381fa6cfd3fa154fcdd88"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","54e7cc67b3191085014a878aef5ed096"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","056449b02d474206ec875eb4514c1476"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","cfb033c57e6008a8b8f83de6c16576be"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","6474e96bc12b993ab3b91981b3848014"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","1d00d2bdd344d7760da2c23db48be780"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","21fdfc36d787b7cf669a68b5ce85ac5f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","0691f63f381833a8aa4c0322d5630b60"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","2bf4e8101ec5122a606e2b0fa23ac21c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","14a63768a26ff6d663b8a16e83c66878"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","5d59a0b0c73b9a047f9335ec31687722"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","7a0dd96b8191eeaec8cacc1efabc3535"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","d1253e294fa3868c35a1b2f8b470f86c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","124d1ba865315777e21aeed639f757a6"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","fbdedd8c3403af483459d360bf1f8ed7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","a812aa2045b91c76c33fe2bfd10a5377"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","b114d74505bc9bd06ae55140eb2b2262"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","4ad3cc5375adbebf82c2bc60f01f8724"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","e32166c182968f302f9da2d0e6b291a5"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","0ed1169b9ce762c7f637f2f10c19ebcc"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","c7d8b1fe64211b771e1902b070d28c7d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","24ea271f3d4a4839734fff36fc57cc97"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","960f0b88353d07cb32d7e4734118c7da"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","03885b8ad0616db22afddab59997bcb5"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","85f45fad19322f0ff17478abb2674960"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","fec28c2b6a8c8cc349164bc48c45a765"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","8b65c7c01d6a3dd940fa9b01e8d0b570"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","31c95a5677fbb0b76b137c778b53d1cc"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","a3db74ba6314cdcba6b3b3dd1d1f8f67"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","b2be9fa436d519232be9e1a317e53b76"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","a51c34a79ddf09f05e51973ed73171c8"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","f4b77cf52117b74517e8a49d224067e5"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","651162ff664838b6ff01cf9c7ad97f2a"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","23ef698079b6efa8d51cea47876651c4"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","fbc2b4a69685be838558192afe32802c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","c72d05b09ed54d438a0b517a818ad0c0"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","c361959393f5cc905dbab4abb13a04fc"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","ab9891d3ffd2af5d42b50e5cb7721dea"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","d0d9dfb52aff44867f3b7042374c873d"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","1728ae7f77749dac4779df6a77c978da"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","3915f4658595863711723f21caf3abec"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","0b8d649aec5117ddc6e74ec95661f4d0"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","4d930edae867036ff367e71a2eb74144"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","ebac6beadd4f718ec315df13893400e0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","2e7dc8782148c37c73c09fdca00d7029"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","a12ec081ae036b18d2ab96c363976faf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","e774eaecb4db39f0a6b626188e15a6c5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","fc9ba299c1a46452828f80585d7fbef8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","aa2ca4783f86e78fbaf3e2da922401fa"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","5b3827405c4bbdf02f3f3b4925f30b81"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","434acbf56694e6f60cdcfdf1b78f8882"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","59e2b08aafe46bf265452253dbe48f55"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","2c77f2211a3ba6aaa226605319c77f94"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","0b68fb829fe24a4452b5dac866732889"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","429777fe92652931ac2868c9482b3a4d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","3e028d77c26f9c2e9553fc4b4440b66c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","47a2e14d00657445ee9a5882805fab95"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","c9963031ea336359afbeb149c98b58b7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","895886e263579d7e389b3bf441e4d1a2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","e8a93c7e94e19b26296805a14ffa8a39"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","958e9d8c61dbb6711f2719ebdec0d59f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","6edad1c21c1e53b79cd53b0b36124a1c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","44f491974010f88c599c2a827ba0e460"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","e6d9cb7d52733dfc3e7875f50d116712"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","4c362ae18e601c3732e259b4ea56035d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","03cea092fd0117f1d3d8e2fc712026f9"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","454583e355672c0738303dcfc340b454"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","b98480d328e42a3833505e1a5801d649"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","b6d4c16749be8a340e553f3fdd7b72e3"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","a70212ca5c50e26278155d848ff5a98f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","893a4ac3365c40c9ac36e4f438b1a5ed"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","4148d2d1e12f6e7cfb6c790cbdcd5dcb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","b90e141cbec77591dd5055cf9cf14b2d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","7b16e39afb2e9f6623779ad8cf5b6f68"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","3728142c7c2f27dfd568a3ddbf9e03f9"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","3d6bcdce83d2e6eae28e7fb2055aebd7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","aeb128c21f9369894259aa3656c45a76"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","f4e3c43ee14ae308ff5873c1faaa5dd8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","eae634b7abfbbfd128a80a543c4e5531"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","b141acb7309b35fd0dcd5d8cfa90a03c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","b87fab2aec89181337cf63f5b2222d7c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","3582885f786627254d482d2519083e4e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","4567bcfd4e07055d164c6aa05b312f9a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","9a3d68e4a68d06e6c2134be40e41993d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/c2d6f175/index.html","1bc8ce9eecf235669731345679ca2e10"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","35484198ca011a82a0bce7fd80be53e4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","734d632271d8a1e3b7ad7bddc1f2f9cb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","44a00a5c403a461de3a8fd7b1f4e9ef5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","ef9d4ae977afdfef5a59b1b796de1ed2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","18021f567858cb7d5ee27ce4fc22b670"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","0f7ef6642ea15280a2e91641bf3d2e6e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","6f1ceb0051c515396dfa34635a8e788c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","53cc445b87fc63b72bcf6e4c3c8de91e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","bffdb8278a49fc333fc4ccb2411e805b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","cf90e8ce1d977ca01c541d3d0f577c5c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","2ccdac81b0787a03d9022e7f1c43f8ed"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","e7050b8b59a878e9c730e78db2fcecde"],["F:/OneDrive - Office/Workspaces/hexo/public/shuo/index.html","976207df390be512dc1e742ea2997f8c"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","f3a2e91de2b2f72c70a3d394247fce3f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","eb9b827ebf0851433739648427c126ea"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","3fe1e410421d12d9d8b39b4d1d7d9b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","ba4b7c01d47e716cc659e79ba2bffd2f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","eebffdf6653e0bf20aadd594ab7ce5c2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","7232fd6ea5be410e00bd805da814f77e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","d2f37ba2e42194dc8387c0c9de3cf413"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","50be27caf96b5310ae5531d15f231602"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","a337626316a5174bd2da0dbca4d33e55"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","dd3b4242703d47179b3bd28927c51c3f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","f77e7af39e3deea1e43906e6d6ade5f4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","bfe8072d24507822c380bc82e944d713"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","5a7998151b0f7040bbee9a6d241798ee"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","528071e2ef6d38133ceb5c65a7a8b557"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","3da29aaf0742729f676b8ef48fd9da89"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","e8cb6957a468e873d04a2c13582357a1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","4c7c088079835e07dc63a66fed927b76"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","d7e95feac6c323feb8be42f98463e5e6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","b93b55ef9c2bf7fc339b033077ff5af3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","5608404d833a5c5c13f0f1c79d008309"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","660dbb2d0c89b7f37c93d5281e95f791"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","c1152574cdcd329a0080cb927b27b2fc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","1d3e5bb31baea2c0f602dc873cccb25d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","5fe31bbf10fa6cd8d6b244bda49c8973"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","0dbfa2d87528693d31f7ca5ed88ba711"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","22abf4169ea00f392a08e462282424df"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","372d90dd07e862737f5aa632b1dc05d7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","f49053abd3c17614f51bd8d039d3fd52"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","19a564f54a678825a7ff9596cbf15f59"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","c5e3e3f350b48eb1d0b9d243d8eeb5c3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","e958ba274e11b6a85bcf928f9af52ab5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","01f6e1ce28217ad521d7f2b7aa03a72c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","7c1190666d7511986488e286a628850e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","ac98f2ba2c407b6998bbd2f2111da5a8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","ce8e955831351fc23e97a5ca6f5e5df5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","03a96760e198458fcaeb2532dbe79ef0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","b0e9a7f6c6cc0f6f8d404837d672bdfc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","3ce7aede5a100adbf807baa4e8725273"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","24f9c36da24695c50b0ca10c24f005df"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","14e583cc34a9db24ee3798fd3df74491"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","315e95e5882d0a1e5201319f4c22a5ad"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","da4e0443fd3d70e11c28dbb030136d94"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","4fc23d441b48004c0aa0b4110299ccde"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","3cffbcde4e4995c9ad4b255e1b648807"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","d010cba6899b213733b157e09fe5a263"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","3e6dda0b2a67b3cd8cb7f89ba7b3ccd3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","f3a1d71322ff1f8f59e01f5ddd43ae27"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","112c18b13489f54318d7e37588a7eac1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","2ca800457d4dc2bf47ba0f5de2800ba9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","d4b5c24a141e3d7b9e5bfc606aeb6f2a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","3d908f0bc34fc7b92824b705003a88a1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","550d4552d16caf4cc747d79848fc8876"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","2ca5501a23d676b5a98551824626979a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","61870c54d68ae4ec66a083f3e3ec983f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","2a6ee33e72f8f3e14ea644e4c7bdcfd6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","2c83f3ecfe8fc4cbae19a7375647129a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","cb6d9c0b1e2a78d8df64ec970c7e1a23"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","348f4899f6c10e8ef7aa09562eaf0b12"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","5ef119fba66e0ae9fffac2f56a599961"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","4d27ea590ddbdb047defabc220b32db1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","dbd8b9ccb3aa9539a44b5235cd71a282"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","45a0b960aaf5af571f2d0dba303503b0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","6fb1ddeb32f6528894e6df86c64bc38b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","9819911819069be484f49f82e7b0a970"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","0b627c9dabc7015273ac8c4505eb92a5"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","9284ae644ad80ec32b6aabee21fd8792"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","c101396904ceccf535a8ba2c5b1c247d"]];
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








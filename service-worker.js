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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","787b767ce9c9caf07feb77a9d854524b"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","f14f30feac4d800511cf82c0cc46179b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","4e604a4bca66ebed3627cbb8689db15c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","7019e3fab9a5064bf2d6d5b13e96cd89"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","154b4555e2d609d4622b47da3b0e1f3c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","96d83f8ea791febd007ba9012b50fa29"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","a1edc78ef7806b84fd6044268b0547dc"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","193f6d839b801ee31195dc0d8bcd2a4d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","870d5fdc643c29b3c9f1ffb9dbe053e7"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","472a6a0f8c412165be102296414dd010"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","cba5b962d63a25109e0d012181eaa3c1"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","19611c16552ff394a2ffc3bbb28435be"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","2079a3a8e27f5446fe9e4192c47ab19e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","6cef5a0cf76280cf093e9173fab0e68d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","566d0642f08f799a65c1cba76a2bf76d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","ed9782b30e12dd418112012b4f63555c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","23cff8e868dd7cc16e2bc64cd3b0e210"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","75c1ea0bf4127c879eaa0d6c03e72139"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","663a4ea9aa63c8f1df100f17383e9040"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","f9dcc3702c2af2973cbc9e7f0c594919"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","6612c359cebd49253542282b5543ed40"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/04/index.html","bd0044fb7e586891f1f1cac952a39c1c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","e52586f94c9c7ccda467265fd488fb76"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","152ade67a0df4f6d64603fe0886ab98a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","3d0d51c2540e4fa65191b568932b8957"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","155519b7a57a6a943983128240eb171d"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","7b41b883d22d2f6e0314175dd9a6da9a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","142249a085e47dafa4b30749cbc1ba5f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","2174df44e6c34e898df7bf86b43bbf86"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/douban-loading.gif","b86c6b435fc25c1366acaafc3fb5c252"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","d2be6dda7de5137960adfe071c17b04a"],["F:/OneDrive - Office/Workspaces/hexo/public/books/index.html","6474e96bc12b993ab3b91981b3848014"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","f3579451bfe016964dea9bf14241e7b8"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","8d2ac67f859aa301d65c60d4163f528e"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","d4059bbb55d1e6355e4e76731f2f0564"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","bdb848ee7c6be01b8c430ff7dbca8300"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","80bc8ff17aa355157eeff5605e9dda68"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","489bd02c4cc2d346b4016d56f22d33c0"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","cf5e9c69a9eceea9bbd5815172092fa4"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","9bf762f13c694389afeaaa8df93f2998"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","c9815f91833c2a51003ac13b0587c358"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","2f479d2a83210dd6ba3b84ca40fc02d2"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","fc78cacf4dd19117af1145f97ad11d90"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","e96d51a1fbec9897fc65373851a8b145"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","a18d0e68c9c289c6e0d786186900b0c8"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","f5c56e31c5ad7c2a98180506b94b542d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","f549b09ee9813f909202de591117dd29"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","ca0de348198fbf4314776a59d42758d0"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","d2c64743ea9567a6d5961db4c5ac821f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","249be9e748e7117005a91757f0773379"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","28589a87e75a2de747d5366db6c35d1a"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","d19a8fabd8e836682a6c491277185ba7"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","52e2cb986e30641d32e46c7af79bd8e4"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","d8e46b4228f7782697032481def6f44c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","c5954717124f17bf7199d8fb61f151e1"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","ec69c92e54595f95aae8538597b5eb30"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","f69516f7e12fb7c3d85d759266e71278"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","82b7209a3e29333d04b9d2101c925843"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","61b8cfc550af8325d02b2d8e7cb0880f"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","0bec3e978e9c83903f72cfb092f27eda"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","b372854b57838de9f9f197918385bc61"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","fb7723834eff90050318c3f0f37995af"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","cb78eb0b5eb5d6306cd318c5c6763799"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","edbfe1a2311e8d45656e2e1856c83189"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","cba3de8d63e50ba145f9158fd31c3403"],["F:/OneDrive - Office/Workspaces/hexo/public/movies/index.html","d0d9dfb52aff44867f3b7042374c873d"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","f2a3f5a0a484f7fa02a5d0ace1db5013"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","b62378d2655794fcfd4595ddb4fc131b"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","8faae2a565f6a40e3f3b8c6f50b139a2"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","325611ac632f699d21eaf5e45b681fbe"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","5c5ea7456643a1eb40368e3f1bae2fb4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","b0abe9f948092c3442a6ddabb35d4483"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","e80c9968843300dff1d10bc52722d05b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","ddcb07b52ea09aa243d3a30d6b0db3ba"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","55fa79bdf6bf7e27dc0f0e1cda4d6521"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","65982971064903ddd7890d325e7387d7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","7d639b21e02df55f7a825fdf7040d80f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","748394eb5aea25b2d9a882e9c7498321"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","0d510b036bd75059d8297db1d6072700"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","3115b54964b986356c1aea6216d85ac5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","28e24c7dabff2747c3b8ac17b845048e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","136a017b26ceca7abb707ee2252a4de4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","2666869a3e8dad262537bbe1006c5848"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","f9c887aab99a8fda4618251458112e53"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","bc68ebcdd46f96e8902c00ec1694bdf4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","91ed3d67baf18f089f74e6ad98db7847"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","2c358806fbaca686f6d5cdd2c0a8a28f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","64b81a656c7ddb3f5fb50072b871a44c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","dbc021a7872ee1c364ed110c21984788"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","2f2af6c9f34d4ea683a59beef92478bb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","e8e8c3fff017e2830c3cbd5b3788fd3d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","ffff5f723307a66d5f69037403dca57a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","823cebc3c745e399c8da1ea0fb75e45d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","a4231c76705581c5c698848f2a71c751"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","832ac8d5ff2524adbea7db534a4d55e5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","a68bfb0b2ee578f0b51bc753f83f90b7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","f1d04bbcd0fe33a25088988acda45c5e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","d02dd063341cba7c2d321f1ec2e33f50"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","e66aa7f0fb1bca66d0066e08d9a1630d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","72d801391b04c66ef068300074201dc7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","6c2cdb88a07e243df48e016a88865c6e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","dc08de28f9372092aef1c1aa1fd6b4eb"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","d0644575aa3630a77a871a4b0928f05c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","feb9477360161110f7de6deb65f54d2a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","23d0658bdd3fd76f18c03202a71bdfcf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","05ecd6b4c4306d2691c86dedabda1b83"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","1eb3b13fc87c510501701c7de41c5291"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","3e10fbcaa3bece27412fa52922af9cdf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","60b6deda526e458e40f19cebeae8ed43"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","31807c494a4e26f912ce28d673f0eed7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","035e681f04d9de5ad8e3b0ae44e3f22f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/c2d6f175/index.html","1bc8ce9eecf235669731345679ca2e10"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","87747779183404be05eca9479a6ba6a9"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","66cbf1c49e4af40a5248f50be068e9af"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","209a31a1e722da849826da8203a6c683"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","a67063ca6ed25266642020604ed74a52"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","084a7998b8ff65fb6a5f613d9ad53534"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","8ef2b775a84399ff3b0b679bfe85b3c8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","9d74e0152408c327f56056784155de1e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","a1dd3b62a02d43d92ed04072ea9dc77c"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","256d96da3e1eea1c8c144a61f1768b4d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","33c8d8299dac2befd698bb6c1767d5a4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","08c287a6a1ba7a331ee6ac6b1fb32a87"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","c6973cc604df11f9bbb2f943db6985bc"],["F:/OneDrive - Office/Workspaces/hexo/public/shuo/index.html","f00701a34adc2aa0cbc0678951537338"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","0efa46c9b38ecfe6764eaf799edefe1b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","bb826a6b71973472cf674249961969c3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","2a630ed287da0ef7cbe4240638036b3f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","9e4b26adb94015e65f8634fe4ea9f307"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","8f6dcced8476fa243b56ec56d38af97d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","6782e49a1f69bd0e7a8bbf7d7802e634"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","31e0012a94fa340457b23183f54952d6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","5e0127a52814af8c676ba1dbe8689bb6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","a9065d7889e9626c34e2cf45e35e8845"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","f3f7d39861810224a8a39ea28bdcb433"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","b5ec9d8d1d33e7ace117d086bdbd15d3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","2b41e89e92f65afeeeeb07c874e65b0a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","10e8abf7a67510128c9ba6549e3cd565"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","27700f1a221c1cad4444addc076f6e3a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","4270f216715671441aecaacea64490f6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","a08dc98351094632a105ba2fcab3114e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","7ab8947eedca92a131b37d895e7b0f77"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","cc898505b8d1bda26a79228b106c5514"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","d6378ca279a871a9a2f28f821eec8554"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","e21941124fc1033a5721fd3cd4cb3ae3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","fa5da394c51280821f834eb1d30c64d9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","e57015d06e43036f2f6719a91dc28e29"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","ae9dc5e3675f420acef82e81de3bf25c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","7aee184be54251b5620aa20eff3d1d15"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","163d6a0eb8875ea9e9be6bf9cef71535"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","3cc57ecd2c2ae2262575f3bb4d528260"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","4b9c23cb58e82ba310bf18c8a2738c37"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","e7e82af6c023cc9363e0112494b5cbb6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","c9244b8ce7198211ca6699dcdd9addc3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","658afc4ba2f5d0f39e1239805007acd2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","6bd2e7f58480ff69105d13550f45dc64"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","7a288fe89d1cae819be64e77a591d8ef"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","aae1ad202c693f22373c0d915d715788"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","92c3aa3c8f15a82cc170143d244440e4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","fd9ce8d4124ea98495d846e2c58e4e38"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","adac6dcb0cbb5752de80a3cb736f4168"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","f12125586869b64286e738d6f6387883"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","4add4284f320859dc243ff743d97f61e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","767bb65e68a9229f45ebb836a559db02"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","c80e21db5d3a99c822d0f9fe1addf7ff"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","eb08043d58cf64398835dc1fd67fded7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","6e1c5cbfe3a33b699ae728e8b8ce899a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","2fa4920854af39b57f6e8edd802171b3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","e0d85b225f24ff6087a3fa54bf05dca7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","c8a2e88bd2f801c9ff0393beacbd9086"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","43f9cad4a111796a521a7d85cb14ce5c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","1bef918f1a63e2ef745415071520074a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","d6a169118778afbc287363b7c52acc52"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","64821fe54f5e4f81faba772d6ebe2c73"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","5a8d06216e4861a8645940dcfaa7bb4f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","9c1e4c38d5eabbd244bcff35eca0d62d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","0503220e0950fd5d535f5adca830db0e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","959cc8375e77cd2c6ea52c65f56f5bf8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","0c48c8fb46e0794144bd1027e5baa4ed"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","898618b2fdae9e05b8b28611b4d6e2bd"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","2210aa2478fdf21c3099860499904b37"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","47864737d6efea20ddd7575520edbb10"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","eda465a70aae7b687fef13caf50163b2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","ef97eae6f4480b2ad5388edb6dfb0d50"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","28f3d0a5f22be6d8237af77f43f98b13"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","b202034e31a3102556de1ab227074629"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","8222f0b07eae30cb37fd054bf425cc45"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","e35f88d91381ea865e9f91d65742cac0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","c0c887f0ecb17966fcce4b0457e46653"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","ee7318810e82fa37fec12415b73fc2a8"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","f9ecb714eebb894902012ccd0a669298"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","9627e659f6bf0739755f5d230df0d3ef"]];
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








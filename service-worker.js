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

var precacheConfig = [["F:/OneDrive - Office/Workspaces/hexo/public/404.html","89035a745402bc3bd9465000335d1efb"],["F:/OneDrive - Office/Workspaces/hexo/public/about/index.html","a372780c81040ab1d0f63ffa8c4c21c7"],["F:/OneDrive - Office/Workspaces/hexo/public/aboutsite/index.html","71e650f7070ab7ec06910479841167a6"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/10/index.html","7e8e678fa18f3ef6be47b10d68a5062e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/11/index.html","e4dad35d5eb842a10310f80635679cbf"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/12/index.html","c6c13521be164044a05fe399c6c01d53"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2019/index.html","1a86769629c23b85176ab8dc8f7e3d83"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/01/index.html","8c0f57d608ced45176d0fb0fcf16639e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/02/index.html","cd24b9b02cd9fb3efde3959236344b60"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/03/index.html","f4b31da3e399817316e36944dd893741"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/04/index.html","25d8526501d0c1dad888b9c09c517f23"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/05/index.html","4db4266824f59c0be1c3076ca35fee8f"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/06/index.html","207cc0084ec813c6e3fd51c62a86b04e"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/07/index.html","b8fa7d3454398651bcfdff6db96d118b"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/11/index.html","3471b3d7f5689276dc3c2ea77e21bb03"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/12/index.html","f62bf0b9e00becea80cb2c273bd55010"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/index.html","ea0fb2356ff96261158a4284047dd7b2"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/2/index.html","3d03207d826f06507f69924511bf4519"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/3/index.html","bc4191af6a770fa30a8dc8ebe5d70a49"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2020/page/4/index.html","059a6c19aa1017f1d360697e4bf8dcde"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/01/index.html","552bb6c01db3d57cb61644f8a0fc2c66"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/02/index.html","4d428a3f10af24fb8351b76bce2a4052"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/05/index.html","9378c1df8305f76a76a31174272b4bf6"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/2021/index.html","9fa7b8c20ddc30b00a0ad15ad8b08a1a"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/index.html","785659ad9ae15c189e65a4ee0b0c0010"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/2/index.html","9e64c1df68cf6c095cd46fd187f9e773"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/3/index.html","8105f56b99b2b3009d106b880dfc3c69"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/4/index.html","c5c023d0a68b241b7c8c00bb9040ee5c"],["F:/OneDrive - Office/Workspaces/hexo/public/archives/page/5/index.html","4ee7509c0a6e2ff36ea81c5eba74db6c"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/css/APlayer.min.css","fbe994054426fadb2dff69d824c5c67a"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/APlayer.min.js","8f1017e7a73737e631ff95fa51e4e7d7"],["F:/OneDrive - Office/Workspaces/hexo/public/assets/js/Meting.min.js","bfac0368480fd344282ec018d28f173d"],["F:/OneDrive - Office/Workspaces/hexo/public/bangumis/index.html","a972ba363a59a09224bffbdf4e900697"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/index.html","38c37c0e77c5d941f237cb6e85ceb33c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/index.html","446ed4c0e0dab3552a5a057052b48ffa"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/晒手办/index.html","ee7e63cf80b7bc0e8212f4a603ca841b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/二次元/番剧/index.html","ed8711b3f3abde63960e8b7b1cd63388"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/告示/index.html","58d7270611701e51878a49fc26a95ec9"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/index.html","ba7ae7fe254fe509bc98609ce33b3384"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/世界名画/index.html","12d976b82ea284978fa4f09876c9859b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/必玩游戏/index.html","19767157dfd6972d2494fee4de15138b"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/有趣分享/index.html","7aca466b3f6a6fa09739d99b5ab62def"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/安利/音乐影视/index.html","f503048f67c51ebe93a4012f76f82ae6"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/RPG随笔/index.html","532a5b3d6bfed097422efe648eb16432"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/我的RPG/index.html","5a424eed430fc6587289540fa2cb782c"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/index.html","7ac6a8bf4f3a871f08197738807401f5"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/旅行/踏青/index.html","6eec9ea9ad273028027c64ce696d1bb5"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/index.html","f58fe7dc95bc4f25ced1169c0e6e9bc3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/2/index.html","73a58820b7249d14ff3e0a2998e3382d"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/page/3/index.html","b764bf9537362407b58f4d305977c289"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/吃货日记/index.html","a66fe5bfdf6a8af69b1c181d43b00d7f"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/喵的世界/index.html","2d7524239485e4bc2195bcd84bd997e3"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/日记/游戏记录/index.html","1739e885e6fc50a448ea79e9733fc000"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/index.html","8e4453ab70e1b5f0a635c4580385f9ce"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/page/2/index.html","f4c623f2ac7f5eb5536cf3640ef106d9"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/博客建站/index.html","412a89137c3d6e36f9fcfe4a414cdc01"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/折腾小件/index.html","f2bb23ec9770a2b32dc17242fd4069be"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/电脑软件/index.html","47c8cd1201496070a02085f9549e8d37"],["F:/OneDrive - Office/Workspaces/hexo/public/categories/笔记/网络代码/index.html","21348ffb8810cd7fdd006e23310f90d9"],["F:/OneDrive - Office/Workspaces/hexo/public/cinema/index.html","f939e9785d2b345f28663368339c9c10"],["F:/OneDrive - Office/Workspaces/hexo/public/css/caise.css","7d4b74ff9a0222b86e8b35bbdd96c332"],["F:/OneDrive - Office/Workspaces/hexo/public/css/index.css","179e11cb4cf2290c006a90c242cfc34d"],["F:/OneDrive - Office/Workspaces/hexo/public/css/var.css","d41d8cd98f00b204e9800998ecf8427e"],["F:/OneDrive - Office/Workspaces/hexo/public/css/youjian.css","06ffcc2b81f9536dc7d16a07d13b1cfb"],["F:/OneDrive - Office/Workspaces/hexo/public/game/index.html","ad34cfeb5f861b43112c7373758e2e3c"],["F:/OneDrive - Office/Workspaces/hexo/public/go.html","5fd46297c5b1c32a7c15793746eadb7d"],["F:/OneDrive - Office/Workspaces/hexo/public/guestbook/index.html","9b3f6665a5f00d6f166a307de6c19d94"],["F:/OneDrive - Office/Workspaces/hexo/public/img/algolia.svg","fd40b88ac5370a5353a50b8175c1f367"],["F:/OneDrive - Office/Workspaces/hexo/public/img/avatar.png","cc30fbf64fa8972822751390c548cce7"],["F:/OneDrive - Office/Workspaces/hexo/public/img/comment_bg.png","7756bf38eee8a978f0454ebe30a3b85b"],["F:/OneDrive - Office/Workspaces/hexo/public/img/friend_404.gif","7d61ec233a0504314b84dd37c95cc753"],["F:/OneDrive - Office/Workspaces/hexo/public/img/icp.png","6e26aed5ced63bc60524cc736611d39e"],["F:/OneDrive - Office/Workspaces/hexo/public/img/loading.gif","d1cf8d9ccb6a2b3514a7d14332035a3c"],["F:/OneDrive - Office/Workspaces/hexo/public/img/moeicp.png","205284f61c19ee54a5a9707bbcfc5d68"],["F:/OneDrive - Office/Workspaces/hexo/public/img/post_loadding.svg","2901bcb74c0f032ed139676618432304"],["F:/OneDrive - Office/Workspaces/hexo/public/index.html","4d10140e41d6fcbc86a01c4db4aeb116"],["F:/OneDrive - Office/Workspaces/hexo/public/js/activate-power-mode.js","9824c61a46e23b00e54e0f4332130e2b"],["F:/OneDrive - Office/Workspaces/hexo/public/js/banip.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/js/crash_cheat.js","60749fcac7cce28caaa40c3e9cdd8dcf"],["F:/OneDrive - Office/Workspaces/hexo/public/js/echarts.min.js","f568f8fd3bb047a98ece7980cba82e26"],["F:/OneDrive - Office/Workspaces/hexo/public/js/fairyDustCursor.js","ac0d8ddeb86d4cce222e18d1856c78b1"],["F:/OneDrive - Office/Workspaces/hexo/public/js/main.js","f71ed91f9cbe06a5dc401927b2546a38"],["F:/OneDrive - Office/Workspaces/hexo/public/js/menujs.js","1e95ddcfc1195d819d17e7ec7e3f6381"],["F:/OneDrive - Office/Workspaces/hexo/public/js/snow.js","25adc917e1a067271f1e181465a1342c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/tw_cn.js","66b7ceb1aa8c2e14b8913f2372bd8b1c"],["F:/OneDrive - Office/Workspaces/hexo/public/js/utils.js","0673a8ee6ec8fe5ac3e009795707377f"],["F:/OneDrive - Office/Workspaces/hexo/public/js/valine.min.js","a0352dc0d53170f01b075e89165776a4"],["F:/OneDrive - Office/Workspaces/hexo/public/js/volantis.min.js","da027a8d81466efd93b2f310141f75ad"],["F:/OneDrive - Office/Workspaces/hexo/public/js/youjian.js","0fbc0901122f6a83fce09d93d14e95dc"],["F:/OneDrive - Office/Workspaces/hexo/public/library/index.html","42ea9d8c8b931e1a9250c189036317d8"],["F:/OneDrive - Office/Workspaces/hexo/public/link/index.html","5adf0e55e63551520fc15542bb553d64"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_00.png","4b76e5d94faba0030cb939f3249d5a6f"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_01.png","c960c28ee3f0353023d9498d2362d23c"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_02.png","00636a7081a333d5e8aa3a649d00f871"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_03.png","1e9c29e6e76b39583277d98ee4e80c48"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_04.png","5b282aa9f7d4fa68cc24c946c0556b87"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/assets/moc/shizuku.1024/texture_05.png","16f7b74f1e61bf2b21d91ea5c3ee71de"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.0.min.js","32973883fcac0a9ae6cc79c0ea25fda2"],["F:/OneDrive - Office/Workspaces/hexo/public/live2dw/lib/L2Dwidget.min.js","094cbace49a39548bed64abff5988b05"],["F:/OneDrive - Office/Workspaces/hexo/public/mishi/index.html","f83bc5f4f0a7988b1aee24eb87743fb1"],["F:/OneDrive - Office/Workspaces/hexo/public/music/index.html","1898fcf4b0607c6bad86fcf755878260"],["F:/OneDrive - Office/Workspaces/hexo/public/page/2/index.html","6a525bcbead7e658f2c73a93a48c27b6"],["F:/OneDrive - Office/Workspaces/hexo/public/page/3/index.html","03b8b7fcef8cf4f50c9b3641b3c41108"],["F:/OneDrive - Office/Workspaces/hexo/public/page/4/index.html","037ab5d5e722d0b75e41cfb113426f46"],["F:/OneDrive - Office/Workspaces/hexo/public/page/5/index.html","4ba2eabe4fd7e22df916b6495e861986"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/10cf6379/index.html","514119d5bfb2d6285e83cbb9c27c3827"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/145c5b6f/index.html","33310916160d70c00b8a31521a207d08"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/1b13bafa/index.html","42e4054ce9b05006b68b2d796a6665a8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/26b62851/index.html","852564514b3592c6b4cf1cd928b74e71"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/2d4222d/index.html","5082c4f636cae1cbd3d856fed482eb1d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3460dca2/index.html","d965a4c7de380d384946c1d290ba154f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3c0c7cbc/index.html","1f43b7e9d35c098615e075262c14fa7e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/3f8c90ce/index.html","318bf7dc61f7644ccbad8ad200d0ea1e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4a17b156/index.html","5283ad7e51cb6b287df8e70ef96124b5"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/4e287f4a/index.html","d457f7cc5f0e5e78d9e9ffc8afbbe02b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/52fd1e12/index.html","19cfed067b27af84af726de9704e6f26"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/55dce3f9/index.html","2caefca072b42c139c89ef5aae5b72c1"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5a47444f/index.html","347bbd0e3890055c2b475c9ac84788c7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5dde075a/index.html","0ba015089ff8d6a426a071e6161b0e36"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/5f4133c6/index.html","1ebb80f464199027ea939eb187ab9281"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/603b6372/index.html","a5abea0f0dd68fc8d996501a824fbc2e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/65fa4d65/index.html","cc8c4ce4f87e613511e88e4b86e685e8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6912ae2b/index.html","fd1b2f96c7598d3747e050ea35491ee6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6bd82013/index.html","38e9ed3d13f3a49c9a48392b4f36299d"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/6d77f1ee/index.html","a20988402622965de23225ff34605c2f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/76791c4/index.html","9ae91dd55e66ee1982a28c1cc904c6c7"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/79768e3c/index.html","fbc5a6ce14f1fe17f36e905351ae3293"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/7df0083c/index.html","da941899a21c920d86a52f0335a42f8e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8ee31f54/index.html","3fc3b9cdc0095271ab89796088356510"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/8f34bcde/index.html","f106fd0b8e63bfa2b08114e24a653c1a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/90ae614d/index.html","154f49ef6db64159b826c8e293c7a45e"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/916e8670/index.html","d232aca420be92a92de158c101912513"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/929ec6de/index.html","bc13f716f3c7604316f76e02572fb4e4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/949c1814/index.html","70cae6cc3e54c49a26c3fa4c0dc19074"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9733ae9b/index.html","c03eade2ba9a1954dacc46606847b30b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/973e37b2/index.html","24eaafcb564670e88c2db4b5555643fd"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/982d66ce/index.html","7a3e99750014a413ca0fd2585b4f791b"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/988c6240/index.html","b18d9afe867a8ca1fa2db7d3f89eaddf"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/9a4050be/index.html","656adf3e6829c5e644e16304369d0007"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a689f09d/index.html","36c5f5fa43ea0749ab30771c91c8ee32"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/a72d88cb/index.html","ce3ce8cf3f5ce04002bc9d324b4d10c2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/adef25b/index.html","450e6c04f99dc6259d614718746bf2e4"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/afa82352/index.html","b0f9edc4d38ab8fbbcfdbc4ccb11d8d8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b4173035/index.html","a92b7ffd1b8cc8d47ebcdc73bed634d8"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/b89c26e0/index.html","431987b4e0849682aede44bba62a7127"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/caf8f574/index.html","fda95115b9b80c361b7cea534521ee89"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/cb3defb3/index.html","0f506342f12a4d80c94260af7113519a"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/d2ed1417/index.html","9d1e72971ca1d4c1bec999fd361fc2da"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/dabba837/index.html","ac592ea208f37b340c05ae1ba469f5b0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e1da0a7e/index.html","bf7b8ec2b904c87313920dd9401fa2e6"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/e8d905e0/index.html","bfd3f9ff7b1696631ab9da6dc39f29d0"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/ea96970a/index.html","28f1808639d19baf87abbc3f37f747ae"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f1ce2ae9/index.html","49148bafaba07273669c3a31439926c2"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f3326637/index.html","2513f8aee473995eb19943f8cedebbfc"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f63cae39/index.html","90e674649db5a15424fec6f266e6eb1f"],["F:/OneDrive - Office/Workspaces/hexo/public/posts/f6dc1ee/index.html","67939ed62379e93a8358d0066361ae44"],["F:/OneDrive - Office/Workspaces/hexo/public/shouban/index.html","d0a2f06c3ecf91a634da9d15fcc7170f"],["F:/OneDrive - Office/Workspaces/hexo/public/software/index.html","b294146ba42eeda4e5cd4d4e427b6b9a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Butterfly主题/index.html","ba3d7c4ba85de54d23cf32c53b0d000b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/GIF/index.html","c454b275e9209f05f21f90d403bdf8c7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HTML/index.html","a68d47c127b0b5c021b8b6390db59234"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Hexo/index.html","31b1859b7e3954a4fc300800ae510b1e"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/HexoClient/index.html","560c3775ca9e4e7a441a934b61557a17"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Kobo-Glo/index.html","2dc83127fbca3a27cb9ac6543ba70533"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/MV/index.html","b4d12a23bcc3d530559937530a9f2b16"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Pixiv/index.html","144a3e1f8349fbd0af70934500148bf1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/Valine/index.html","eab8851d72c372603c8e1010fbc9fb03"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/bili/index.html","bb26c35e7a2b9febf02b01c3ed321c52"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/index.html","7ec6f3626179e6805de5a466df20dcab"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mc/index.html","47ac15ce7fe0fb62ff40258e3355c188"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/minecraft/index.html","a7137a4968ebbaa1dce049b2d87adabe"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/mod/index.html","e8b8651d7c26a5fcc74a1c318a074208"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/pjax/index.html","13b8987baefd5226ed5d6b06ed618ce1"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/rpgmaker/index.html","db84d709c00aa5c9169ef59022f96076"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/ssr/index.html","a1336ae0a4ebb23f498326985d432b1f"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam/index.html","3d26488214cf0c87a1795dbe3d531256"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/steam买买买/index.html","510868c0e3c3cf51cc2c865af205e395"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/typecho/index.html","668b6807bd9428f870892eee078f35ff"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/wordpress/index.html","c0aefaf07406d45ecf4ab12d33bd86ec"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/专题记/index.html","26bbdd99ca3dff47a761ec106412e10a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/初音未来/index.html","285560c925cbbeeb7d96ece16bbd2375"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/刷机/index.html","861bf223e75feeee088b0067f47899d3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动图/index.html","1d0703f084f17643decdee2c87990d8b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/动画/index.html","c47cff07244976daaea7263e6828cbd7"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/十年之约/index.html","5cdda9c953d1e2a27863592ce2ebb4c9"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/博客/index.html","e949309ee59ba6ffafda893721c208f3"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/去广告/index.html","dc45c343787230ae2507a58c8939360c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/回忆/index.html","74d899c7babe427fd20d7fd85171407a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/图标/index.html","01ad0d85822dfdacc5570c15eecfc265"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/学习/index.html","9290c81ee1947ca617b80e2703d2730a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/守望先锋/index.html","cc2b4698ebbd4cb8ab0b72ffc8dddc54"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/建站/index.html","cbc4756ab9590bd6e189b8b469450f64"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/影评/index.html","c30a34ff84f2a9c6daa8805e60ffadbd"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/心情/index.html","3b963e8d4124827ec013545e2fa902fc"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/我的世界/index.html","4507fcc63619f7650c6a619efc09a11a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/手办/index.html","bb81b0b285a5ddab856c14c2efdfe58d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/新番/index.html","116a6234079a9b4988cff1bc4bc6fc37"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/旅行/index.html","79a093595b162a0e8f2db62af0a43b32"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晋级/index.html","0c8236756feaa5a557337bc79f2b0d77"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/晒物/index.html","27d0ebacd33df3e01d5ebc1e4b29b564"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/更新日志/index.html","3afc705d057cd697ded8309cb992d118"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/活动/index.html","db2895dd10daabbb4a0037b27b099503"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/测评/index.html","ba1938b6ea42107818eed75db49fd7de"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/海边/index.html","e4d8c6ac2946df8609dcc1e82b4ede12"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/游戏/index.html","9c40dba19698effa76445ade2b256038"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生日/index.html","30900590b0b8e4d4015f76c2411c0735"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/生活/index.html","26ed5b82adc35e57cd9f55ab0503c7a4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/电纸书/index.html","26b51c7cc26f39c2287b89f084feece4"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/笔记/index.html","70d496840cc4d69de45115492a01b831"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/纪念/index.html","7dba0507571c7cf2059385f937af865d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/编辑器/index.html","51c62fdeb4d6bf8637981f634afca5bd"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/美食/index.html","c45e905bc15501e81d15f33d58cefc69"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/藤ちょこ/index.html","86fafe5c3c8e0496390eeed3706b407a"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/表情/index.html","c0ae2722e893925a40a3fe45e6ae4cf2"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/购物/index.html","b4bcfe7a28ff4a23ba906e63c14db80d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/赛博朋克2077/index.html","6d2733b5fc1897b8c6d84ceafef3ac2b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/超电磁炮/index.html","678da3f1429eb5f6f2607a44ec53f08d"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/踏青/index.html","c30bc9ccb3b048f2f17574b83503736c"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/转载/index.html","65daf2ef8ce808f74bff878dc69a811b"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/软件/index.html","a11d4f56636d62294ae1d07d674cd042"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/音乐/index.html","42e114535df7df54d6e484ba995d10a0"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/风云三国/index.html","4cfe68ca61e41e6345e18de9cf1b92db"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑砍/index.html","ac3351e02f8105e30be4c63b473e3ad6"],["F:/OneDrive - Office/Workspaces/hexo/public/tags/骑马与砍杀/index.html","98556de0df8a676e189d62f4f0844331"]];
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








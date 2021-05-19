<!--崩溃欺骗-->
 var OriginTitle = document.title;
 var titleTime;
 document.addEventListener('visibilitychange', function () {
     if (document.hidden) {
         $('[rel="icon"]').attr('href', "https://hexo-1251213061.cos.ap-beijing.myqcloud.com/image/joke.ico");
         document.title = '！！这里这里 ◕ ں ◕ ';
         clearTimeout(titleTime);
     }
     else {
         $('[rel="icon"]').attr('href', "https://hexo-1251213061.cos.ap-beijing.myqcloud.com/image/favicon.ico");
         document.title = '(ฅ>ω<*ฅ) 喵喵爱你哟~' + OriginTitle;
         titleTime = setTimeout(function () {
             document.title = OriginTitle;
         }, 2000);
     }
 });
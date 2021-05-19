let cn=window.location.hostname==='mirror.dorcandy.cn';
let siteDiv = $(`<div class="menus_item"><a class="site-page" href="${cn ? "//diary.dorcandy.cn" : "//mirror.dorcandy.cn"}"><i class="fa fa-ravelry"></i><span> ${cn ? "国内访问" : "海外访问"}</span></a></div>`);
$(".menus_items:first .menus_item:first").after(siteDiv.clone());
$(".menus_items:last .menus_item:first").after(siteDiv);
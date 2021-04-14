var options = {items:[
  {header: '欢迎做客 喵窝･札记'},
  {divider: true},
  {text: '✪&nbsp;&nbsp;喵窝主页', href: 'https://dorcandy.cn'},
  {text: '↜&nbsp;&nbsp;返回首页', href: '/#/'},
  {text: '↷&nbsp;&nbsp;刷新页面', onclick: function() {alert("功能添加中，先请手动是用F5或者ctrl+F5刷新页面")}},
  {divider: true},
  {text: '❄&nbsp;&nbsp;心语日记', href: '/posts/b89c26e0/'},
  {text: '☍&nbsp;&nbsp;友情链接', href: '/link/'},
  {text: '✓&nbsp;&nbsp;留言板', href: '/guestbook/'},
  {text: 'ฅ&nbsp;&nbsp;关于火喵', href: '/about/'},
  {divider: true},
  {text: '☇&nbsp;&nbsp;百度搜索', href: 'https://www.baidu.com/s?wd='+window.getSelection()},
  {text: '☄&nbsp;&nbsp;更多...', onclick: function() {alert("噗qaq，更完善的右键菜单 火喵 正在努力攻克中...")}}
]}
$('body').contextify(options);

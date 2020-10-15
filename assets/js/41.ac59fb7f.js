(window.webpackJsonp=window.webpackJsonp||[]).push([[41],{317:function(e,t,r){"use strict";r.r(t);var s=r(4),o=Object(s.a)({},function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[r("h1",{attrs:{id:"书签订阅-rss"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#书签订阅-rss","aria-hidden":"true"}},[e._v("#")]),e._v(" 书签订阅 RSS")]),e._v(" "),r("h2",{attrs:{id:"引言"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#引言","aria-hidden":"true"}},[e._v("#")]),e._v(" 引言")]),e._v(" "),r("p",[e._v("笔者使用 "),r("a",{attrs:{href:"https://www.inoreader.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("inoreader"),r("OutboundLink")],1),e._v(" 订阅 RSS。\n但是知乎专栏,微博等无法转换为 RSS。google 后发现利用 "),r("a",{attrs:{href:"https://docs.rsshub.app/",target:"_blank",rel:"noopener noreferrer"}},[e._v("RSSHub"),r("OutboundLink")],1),e._v(" 可将各种资源转换为 RSS 订阅。由于手动转换网址为 RSS 过于麻烦,研究后发现了如下解决方案。")]),e._v(" "),r("h2",{attrs:{id:"预备知识-url-scheme"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#预备知识-url-scheme","aria-hidden":"true"}},[e._v("#")]),e._v(" 预备知识 URL scheme")]),e._v(" "),r("p",[e._v("参考 "),r("a",{attrs:{href:"https://tools.ietf.org/html/rfc1738#section-5",target:"_blank",rel:"noopener noreferrer"}},[e._v("URL rfc"),r("OutboundLink")],1),e._v(" 资源定位符的一般形式为 "),r("code",[e._v("scheme:schemepart")]),e._v("。其中 "),r("code",[e._v("scheme")]),e._v(" 决定了资源的访问策略。\n在浏览器中一般使用 "),r("code",[e._v("http,https")]),e._v(" 访问资源,实际访问地址还可为其他形式")]),e._v(" "),r("ul",[r("li",[r("code",[e._v("mailto")]),e._v(" 打开邮箱 "),r("a",{attrs:{href:"mailto:zenheart_register@163.com"}},[e._v("mailto:zenheart_register@163.com")])]),e._v(" "),r("li",[r("code",[e._v("tel")]),e._v(" 拨打电话 "),r("a",{attrs:{href:"tel:1234"}},[e._v("tel:1234")])]),e._v(" "),r("li",[r("code",[e._v("file:")]),e._v("  打开本地文件")])]),e._v(" "),r("div",{staticClass:"custom-block tip"},[r("p",{staticClass:"custom-block-title"},[e._v("TIP")]),e._v(" "),r("p",[e._v("你甚至可以使用 "),r("a",{attrs:{href:"vscode:"}},[r("strong",[e._v("vscode:")])]),e._v(" 打开 VSCode 编辑器,只要相关应用设置了符合 "),r("code",[e._v("scheme")]),e._v(" 策略,浏览器便会根据 "),r("code",[e._v("scheme")]),e._v(" 打开应用")])]),e._v(" "),r("p",[e._v("可查看 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAemail%E9%93%BE%E6%8E%A5",target:"_blank",rel:"noopener noreferrer"}},[e._v("mdn"),r("OutboundLink")],1),e._v(" 进一步理解各种 scheme 的使用。")]),e._v(" "),r("p",[e._v("基于上述原则实际上访问地址也可为一段 js 代码。采用 "),r("code",[e._v("javascript:")]),e._v(" 即可。例如 "),r("a",{attrs:{href:"javascript:alert('hello world')"}},[e._v("javascript:alert('hello world')")]),e._v(" 该链接会触发 "),r("code",[e._v("alert('hello world')")]),e._v(" 执行。")]),e._v(" "),r("p",[e._v("基于此 scheme 我们可以将当前地址转换为 RSS 订阅的逻辑保存为 "),r("code",[e._v("javascript:")]),e._v(" 的标签即可。")]),e._v(" "),r("h2",{attrs:{id:"url-转换为-rss-订阅"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#url-转换为-rss-订阅","aria-hidden":"true"}},[e._v("#")]),e._v(" URL 转换为 RSS 订阅")]),e._v(" "),r("p",[e._v("假设将 github issue 转换为 RSS 订阅。参考 "),r("a",{attrs:{href:"https://docs.rsshub.app/programming.html#github",target:"_blank",rel:"noopener noreferrer"}},[e._v("RSSHub github issue"),r("OutboundLink")],1),e._v(" 可知需将 issues 链接转换为 "),r("code",[e._v("https://rsshub.app/github/issue/用户名/用户仓库")]),e._v(" 订阅地址。")]),e._v(" "),r("p",[e._v("在访问 issue 时,我们需要把从当前地址提取 "),r("code",[e._v("/用户名/用户仓库")]),e._v(" 转换为 "),r("code",[e._v("https://rsshub.app/github/issue/用户名/用户仓库")]),e._v(" RSS 订阅地址")]),e._v(" "),r("p",[e._v("利用 "),r("a",{attrs:{href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Location",target:"_blank",rel:"noopener noreferrer"}},[e._v("location"),r("OutboundLink")],1),e._v(" 对象可以很方便的从 URL 提取相应信息。")]),e._v(" "),r("p",[e._v("转换为 RSS 的地址如何触发 "),r("a",{attrs:{href:"https://www.inoreader.com/",target:"_blank",rel:"noopener noreferrer"}},[e._v("inoreader"),r("OutboundLink")],1),e._v(" 订阅。利用 "),r("code",[e._v("https://www.inoreader.com/bookmarklet/subscribe/RSS地址")]),e._v(" 触发订阅。")]),e._v(" "),r("p",[e._v("综合上述逻辑访问 "),r("a",{attrs:{href:"https://gist.github.com/zenHeart/8aec3f90366829afba32858bb38e8daa",target:"_blank",rel:"noopener noreferrer"}},[e._v("RSS gist"),r("OutboundLink")],1),e._v(" 查看结果,拖动此标签到书签栏查看效果 "),r("a",{staticStyle:{display:"inline-block",padding:"1px 6px",color:"#fff",background:"#32a0eb","border-radius":"4px"},attrs:{href:"javascript:(function()%7B(function()%20%7Blet%20rssData%20%3D%20%7Bzhihu%3A%20%7Bvalidator%3A%20%2Fzhuanlan.zhihu.com%2F%2CurlToRss%3A%20location%20%3D%3E%60https%3A%2F%2Frss.lilydjwg.me%2Fzhihuzhuanlan%2F%24%7Blocation.pathname.split('%2F')%5B1%5D%7D%60%7D%2CgithubIssue%3A%20%7Bvalidator%3A%20%2Fgithub%5C.com%5C.*issues%2F%2CurlToRss%3A%20location%20%3D%3E%60https%3A%2F%2Frsshub.app%2Fgithub%2Fissue%2F%24%7Blocation.pathname.split('%2F').slice(1%2C%203).join('%2F')%7D%60%7D%7D%3Blet%20validatorRss%20%3D%20(url%2C%20validator)%20%3D%3E%20validator.test(url)%3Blet%20addRss%20%3D%20url%20%3D%3E%20%60https%3A%2F%2Fwww.inoreader.com%2F%3Fadd_feed%3D%24%7Burl%7D%60%3Blet%20subscribe%20%3D%20(a%2C%20w%2C%20h)%20%3D%3E%20%7Bvar%20b%20%3D%20window.screenLeft%20!%3D%20undefined%20%3F%20window.screenLeft%20%3A%20screen.left%3Bvar%20c%20%3D%20window.screenTop%20!%3D%20undefined%20%3F%20window.screenTop%20%3A%20screen.top%3Bwidth%20%3D%20window.innerWidth%3F%20window.innerWidth%3A%20document.documentElement.clientWidth%3F%20document.documentElement.clientWidth%3A%20screen.width%3Bheight%20%3D%20window.innerHeight%3F%20window.innerHeight%3A%20document.documentElement.clientHeight%3F%20document.documentElement.clientHeight%3A%20screen.height%3Bvar%20d%20%3D%20width%20%2F%202%20-%20w%20%2F%202%20%2B%20b%3Bvar%20e%20%3D%20height%20%2F%202%20-%20h%20%2F%202%20%2B%20c%3Bvar%20f%20%3D%20window.open(a%2Cnew%20Date().getTime()%2C'width%3D'%20%2Bw%20%2B'%2C%20height%3D'%20%2Bh%20%2B'%2C%20top%3D'%20%2Be%20%2B'%2C%20left%3D'%20%2Bd%20%2B'location%3Dyes%2Cresizable%3Dyes%2Cstatus%3Dno%2Cscrollbars%3Dno%2Cpersonalbar%3Dno%2Ctoolbar%3Dno%2Cmenubar%3Dno')%3Bif%20(window.focus)%20%7Bf.focus()%3B%7D%7D%3Blet%20l%20%3D%20location%3Blet%20res%3Bfor%20(let%20k%20in%20rssData)%20%7Blet%20rss%20%3D%20rssData%5Bk%5D%3Bif%20(validatorRss(l.href%2C%20rss.validator))%20%7Bres%20%3Drss.urlToRss(l)%3B%7D%7Dif%20(res)%20%7Bsubscribe('https%3A%2F%2Fwww.inoreader.com%2Fbookmarklet%2Fsubscribe%2F'%20%2BencodeURIComponent(res)%2C640%2C400)%3B%7D%20else%20%7Bsubscribe('https%3A%2F%2Fwww.inoreader.com%2Fbookmarklet%2Fsubscribe%2F'%20%2BencodeURIComponent(location.href)%2C640%2C400)%3B%7D%7D)()%7D)()"}},[e._v("rss")])]),e._v(" "),r("h2",{attrs:{id:"代码片段保存为标签"}},[r("a",{staticClass:"header-anchor",attrs:{href:"#代码片段保存为标签","aria-hidden":"true"}},[e._v("#")]),e._v(" 代码片段保存为标签")]),e._v(" "),r("p",[e._v("既然标签可以执行 javascript 代码,可以建立一个 "),r("code",[e._v("code")]),e._v(" 书签,保存常用的脚本标签。此外结合 "),r("a",{attrs:{href:"https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb",target:"_blank",rel:"noopener noreferrer"}},[e._v("Vimium"),r("OutboundLink")],1),e._v(" 实现快捷调用。")]),e._v(" "),r("p",[e._v("相比 "),r("router-link",{attrs:{to:"/projects/chrome/devtool/source.html#snippets"}},[e._v("Snippets")]),e._v(" 需要打开控制台后触发,该方法更方便。")],1)])},[],!1,null,null,null);t.default=o.exports}}]);
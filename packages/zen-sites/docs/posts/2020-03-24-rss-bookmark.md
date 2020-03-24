---
tags: 
    - 工具
---

# 书签订阅 RSS

## 引言
笔者使用 [inoreader](https://www.inoreader.com/) 订阅 RSS。
但是知乎专栏,微博等无法转换为 RSS。google 后发现利用 [RSSHub](https://docs.rsshub.app/) 可将各种资源转换为 RSS 订阅。由于手动转换网址为 RSS 过于麻烦,研究后发现了如下解决方案。

## 预备知识 URL scheme
参考 [URL rfc](https://tools.ietf.org/html/rfc1738#section-5) 资源定位符的一般形式为 `scheme:schemepart`。其中 `scheme` 决定了资源的访问策略。
在浏览器中一般使用 `http,https` 访问资源,实际访问地址还可为其他形式

* `mailto` 打开邮箱 <mailto:zenheart_register@163.com>
* `tel` 拨打电话 <tel:1234> 
* `file:`  打开本地文件

:::tip
你甚至可以使用 [**vscode:**](vscode:) 打开 VSCode 编辑器,只要相关应用设置了符合 `scheme` 策略,浏览器便会根据 `scheme` 打开应用
:::

可查看 [mdn](https://developer.mozilla.org/zh-CN/docs/Web/HTML/Element/a#%E5%88%9B%E5%BB%BA%E4%B8%80%E4%B8%AAemail%E9%93%BE%E6%8E%A5) 进一步理解各种 scheme 的使用。

基于上述原则实际上访问地址也可为一段 js 代码。采用 `javascript:` 即可。例如 <a href="javascript:alert('hello world')">javascript:alert('hello world')</a> 该链接会触发 `alert('hello world')` 执行。

基于此 scheme 我们可以将当前地址转换为 RSS 订阅的逻辑保存为 `javascript:` 的标签即可。

## URL 转换为 RSS 订阅
假设将 github issue 转换为 RSS 订阅。参考 [RSSHub github issue](https://docs.rsshub.app/programming.html#github) 可知需将 issues 链接转换为 `https://rsshub.app/github/issue/用户名/用户仓库` 订阅地址。

在访问 issue 时,我们需要把从当前地址提取 `/用户名/用户仓库` 转换为 `https://rsshub.app/github/issue/用户名/用户仓库` RSS 订阅地址

利用 [location](https://developer.mozilla.org/zh-CN/docs/Web/API/Location) 对象可以很方便的从 URL 提取相应信息。 

转换为 RSS 的地址如何触发 [inoreader](https://www.inoreader.com/) 订阅。利用 `https://www.inoreader.com/bookmarklet/subscribe/RSS地址` 触发订阅。

综合上述逻辑访问 [RSS gist](https://gist.github.com/zenHeart/8aec3f90366829afba32858bb38e8daa) 查看结果,拖动此标签到书签栏查看效果 <a style="display: inline-block;padding: 1px 6px;color: #fff;background: #32a0eb;border-radius: 4px;" href="javascript:(function()%7B(function()%20%7Blet%20rssData%20%3D%20%7Bzhihu%3A%20%7Bvalidator%3A%20%2Fzhuanlan.zhihu.com%2F%2CurlToRss%3A%20location%20%3D%3E%60https%3A%2F%2Frss.lilydjwg.me%2Fzhihuzhuanlan%2F%24%7Blocation.pathname.split('%2F')%5B1%5D%7D%60%7D%2CgithubIssue%3A%20%7Bvalidator%3A%20%2Fgithub%5C.com%5C.*issues%2F%2CurlToRss%3A%20location%20%3D%3E%60https%3A%2F%2Frsshub.app%2Fgithub%2Fissue%2F%24%7Blocation.pathname.split('%2F').slice(1%2C%203).join('%2F')%7D%60%7D%7D%3Blet%20validatorRss%20%3D%20(url%2C%20validator)%20%3D%3E%20validator.test(url)%3Blet%20addRss%20%3D%20url%20%3D%3E%20%60https%3A%2F%2Fwww.inoreader.com%2F%3Fadd_feed%3D%24%7Burl%7D%60%3Blet%20subscribe%20%3D%20(a%2C%20w%2C%20h)%20%3D%3E%20%7Bvar%20b%20%3D%20window.screenLeft%20!%3D%20undefined%20%3F%20window.screenLeft%20%3A%20screen.left%3Bvar%20c%20%3D%20window.screenTop%20!%3D%20undefined%20%3F%20window.screenTop%20%3A%20screen.top%3Bwidth%20%3D%20window.innerWidth%3F%20window.innerWidth%3A%20document.documentElement.clientWidth%3F%20document.documentElement.clientWidth%3A%20screen.width%3Bheight%20%3D%20window.innerHeight%3F%20window.innerHeight%3A%20document.documentElement.clientHeight%3F%20document.documentElement.clientHeight%3A%20screen.height%3Bvar%20d%20%3D%20width%20%2F%202%20-%20w%20%2F%202%20%2B%20b%3Bvar%20e%20%3D%20height%20%2F%202%20-%20h%20%2F%202%20%2B%20c%3Bvar%20f%20%3D%20window.open(a%2Cnew%20Date().getTime()%2C'width%3D'%20%2Bw%20%2B'%2C%20height%3D'%20%2Bh%20%2B'%2C%20top%3D'%20%2Be%20%2B'%2C%20left%3D'%20%2Bd%20%2B'location%3Dyes%2Cresizable%3Dyes%2Cstatus%3Dno%2Cscrollbars%3Dno%2Cpersonalbar%3Dno%2Ctoolbar%3Dno%2Cmenubar%3Dno')%3Bif%20(window.focus)%20%7Bf.focus()%3B%7D%7D%3Blet%20l%20%3D%20location%3Blet%20res%3Bfor%20(let%20k%20in%20rssData)%20%7Blet%20rss%20%3D%20rssData%5Bk%5D%3Bif%20(validatorRss(l.href%2C%20rss.validator))%20%7Bres%20%3Drss.urlToRss(l)%3B%7D%7Dif%20(res)%20%7Bsubscribe('https%3A%2F%2Fwww.inoreader.com%2Fbookmarklet%2Fsubscribe%2F'%20%2BencodeURIComponent(res)%2C640%2C400)%3B%7D%20else%20%7Bsubscribe('https%3A%2F%2Fwww.inoreader.com%2Fbookmarklet%2Fsubscribe%2F'%20%2BencodeURIComponent(location.href)%2C640%2C400)%3B%7D%7D)()%7D)()">rss</a> 

## 代码片段保存为标签
既然标签可以执行 javascript 代码,可以建立一个 `code` 书签,保存常用的脚本标签。此外结合 [Vimium](https://chrome.google.com/webstore/detail/vimium/dbepggeogbaibhgnhhndojpepiihcmeb) 实现快捷调用。

相比 [Snippets](../projects/chrome/devtool/source.md#snippets) 需要打开控制台后触发,该方法更方便。
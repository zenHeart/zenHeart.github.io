
web 简史
===
**简述 web 的发展历史,理解技术演化的缘由**

---


## 第一个网页

故事从[伯纳斯-李][bns]开始,他在[CERN](CERN)担任软件工程师时发现查找资料很不方便。
因为各种资料存储在不同的电脑上，他必须登录对应电脑来获取资料。为了实现不同电脑之间资源的共享,他需要解决如下问题:
1. 如何实现多台电脑间资源的共享
2. 如何解决不同类型电脑上资源显示的问题
3. 


在 1989 年他完成了初步构想。并与 1990 年发明了第一个[浏览器][worldweb]和[服务器][CERN httpd].we
于是第一个[网站][firest_server]诞生了.随后在 1994 年他创建了[万维网联盟](www),来实现对WEB技术的规范化。
这就是如今大名鼎鼎的[**W3C网站**][W3C]。早期的 WEB 组织，为了利于 WEB 的正常发展提出了几个革命新的观点:
1. 去中心化   
    没有资源的总控中心，所有 WEB 的资源都应该是独立的节点
2. 无差别
    网络资源连接之间不具有差异性，也称网络中立性原则
3. 自底向上设计
    人人皆可为 WEB 做贡献而不是只有专家才可
4. 通用性
    任何人都何以发布任何资源，但必须遵守相同的规则(遵从 W3C 的规范等)
5. 一致性
    对于通用的标准，任何人都必须遵守，并且保持一致

## 第一个图形浏览器
在 1990 年，伯纳斯李提出 WEB 思想后，1993 年 NCSA 发明了第一个运行在图形界面下的  [mosaic](https://zh.wikipedia.org/wiki/Mosaic)浏览器。
该浏览器实现了内联图片和带颜色的超链接等功能，而这个项目的领导者[马克·安德森][mld]随后离职开创了[网景公司][Netscape]

## js 的诞生
在当时用户利用浏览器只能显示静态资源,[马克·安德森][mld] 为了实现
，在 1995 年网景公司的雇员[布兰登·艾克][bl]发明了 javascript 来增强和用户的交互。


网景公司的浏览器初衷是不依赖于运行平台的应用程序，这使得微软感受到了威胁，
在网景推出具有 js 功能的浏览器后，微软也不甘落后在浏览器中加入了自己的脚本语言`Jscript`。
两家公司为了获取市场份额。相继在自己的浏览器中加入新功能，第一次浏览器大战就此拉开战幕。
由于当时 WEB 还是基于 HTML 规范。而自从图形浏览器出现后，为了实现丰富的视觉效果， W3C 
在 HTML 标签中加入了类似于`FONT、CETEER`等用来控制文本展现的标签。导致在书写页面时混杂着大量的页面呈现逻辑。
为了改变这种现状，在 1996 年，W3C 发布了 CSS1，将控制页面呈现的内容单独分离出来。而微软
也顺势发布了支持这些规范的 ie3 浏览器。在这场持续的战争中产生了如下问题：
1. 把加入新功能的重要性放在修复错误之前
2. 不尊重 W3C 的标准，采用专属格式
介于上述现状，1996- 1997 ECMA 承担起了规范脚本语言 js 的任务，这个规范就是
[ecmaScript][ecmaScript],他规范了脚本的语法和内建对象。第一次浏览器大战在 1998 年
以微软的胜利告终。

> 1995-1998 微软 网景 ECMA
>
>       正是由于各厂家之间的竞争促使了 WEB 技术的发展。这也是 web 兼容性问题产生的源头
>       ECMA 开始规范了 js 的使用。
>       
>

在 web 发展的初期它只能获取静态页面。为了实现类似统计访问者数量，
获取数据数据库中的内同并显示等功能，就需要在请求后，利用服务器端的脚本将处理返回。
这样的功能在当时称为[cgi][cgi],随后随着 WEB 的富应用化化就出现了类似 PHP、
Java、ASP.NET、Python、Ruby等服务端的语言，它们实现了对请求结果进行处理，
例如查询数据库、处理用户数据等在返回 HTML 或其他资源的功能。
另一个方面，为了实现客户端向服务器提交数据，比如订购货物，[表单][webform]技术发展起来。
可是在使用类似表单的技术时，由于客户端需要等待服务端返回处理结果。
微软在2000年利用`XMLHttpRequest`对象实现了对请求的异步加载。
随后 2005 年goole在开发google地图时,雇员[杰西·詹姆士·贾瑞特][jjg]谈论了利用[ajax][ajax]
技术来实现异步加载的技术。

2005年出现了，`jsp,asp,php`等技术。此时资源实现了动态的组合，利用后端的
语言将各种资源经过编译后在返回给客户端。但是由于请求会使整个页面发生刷新，为了实现
客户端页面的部分更新，ajax 技术出现了。通过跟新浏览器中 DOM 对象节点，实现了在不刷新
页面的前提下，从服务器后去数据。
由于 ajax 的出现，使复杂的 web 应用成为可能，出现了像 `gmail、google map`这样的杀手级应用。
时间推进到 2007-2010 年，涌现了三种开发潮流。
1. web 向移动页面倾斜
2. jquery 将 js 在前端兼容性等问题进行了解决
3. node.js 发布了，使 js 在服务端运行成了可能。

随着 web 应用的进一步复杂，jquery 这样提供基本函数可得框架无法胜任复杂应用
在路由管理、前端模板等类似后端的开发理念，于是 backbone,ember,derby,meteor，angular 等
超级框架出现了。这些框架整合了各种开发需求，形成了一套完整的应用开发体系。
此外由于 node 在后端的强势发展，及 W3C 等在 html5 和其他 web 标准的逐步完善。
原来单纯的 html 静态资源，渐渐脱离了后端的控制，独立出来成为了完整的前端体系。
包括开发的自动化，各种开发模式百花齐放，产生了如今的前端。

# 技术概览
起初前端的技术只是简单的用 HTML 构建静态页面，用户利用 http 请求索取静态资源即可。
限于当时网速，为了实现客户端的数据验证，网景在 1995 年，有程序员*Brendan Eich*发明了JavaScript。
不同的产生为了取得市场，纷纷仿照 js 推出自己的客户端语言
而后由于
### html

## js
起初 js 的语言只是简单地用来进行表单验证，后来由于在前端浏览器和后端 node 环境的高速发展。
导致基于 js 语言的本身，在各功能层发生了极度的扩张，简要总结以下。
### 开发者框架分类
是用来方便编程人员的框架，发展来源于 node 搭建了 js 在后台运行的基本环境。
在基于 NPM 强大的社区效应和实现的面向开发这的系列工具

> 基础框架   

方便视图交互和代码组织的框架
* jquery 
  提供丰富而统一的 DOM 操作
* lodash 
  对于基本函数库的扩充
* bootstrap
  通用的 UI 模板
* sea
试下类似后端语言的模板，路由库等功能
...

> 应用框架   

* angular
用来构筑 SPA 的超级框架
* React
同上
* Angular
同上
* Backbone
同上
* ExtJS
同上
* vue
同上

> 自动化框架

这个概念非常大，包括从开发初期，编译型 less,sass 的使用，再到测试，规则校验文档生成等多方面的知识相互交叉，
形成了一个复杂的工具链。
* sass 和 less
原本 CSS 只是描述页面呈现的一系列规则，但是经由 sass 和 less 的发展将，css 变成一门编译性
语言，这样做的意义在于，加快了文档的开发效率。
* GruntJS
前端自动化开发工具，实现了上述自动化的所有功能，是一个打的自动化编译环境。
* Gulp
同上
* webpack
同上



### css
dom的操作，删除，移动，复制，插入，前插后插，指定插一类。
事件的处理，兼容性写法，参数作用，扑获冒泡，委派代理。
动画方面，加速度，重力模拟实现。
正则，基本的用法和相关函数作用考查。
闭包，原型链，作用域，变量引用，类继承方法。
内存泄露的原因和场景。
h5里一些新增api的了解。
性能优化和重构知识。
## 应用层
应用层是综合能力的体现，前提是在具备足够的基础前提下，才可完全学会应用层的使用
ie下的一些兼容性问题，js的，举例。

### 还原能力
对Web标准和兼容性有良好认识，能够高保真还原设计稿，具备良好的代码风格以及接口、架构设计能力

### 框架使用能力
* **应用框架**
    * jQuery

     



###　通讯
HTTP的基本工作原理
常用WEB开发调试工具
socket通信
AJAX

### 安全和性能
对Web前台的性能优化以及Web常见漏洞有一定的理解和相关实践

### 服务器
* php
* node.js







> 1990-1994 伯纳斯李
>
>       提出利用 HTML,URI,HTTP三个基本概念，来组件 WEB 的基本思想。
>       并基于此架构创建了第一个服务器和浏览器和利用 HTML 编写的网站。
>       创建了 W3C 来标准化 web 的规范
>
> 1993-1995 马克·安德森 布兰登·艾克
>
>       马克·安德森 创建了基于图像界面的 netscape 浏览器。
>       布兰登·艾克 创建了增强交互性的 js。
>






# 参考文章
[webform]:http://www.joomlavision.com/illustrated-history-web-forms/
[jjg]:https://zh.wikipedia.org/wiki/%E5%82%91%E8%A5%BF%C2%B7%E8%A9%B9%E5%A7%86%E5%A3%AB%C2%B7%E8%B3%88%E7%91%9E%E7%89%B9
[bns]:https://zh.wikipedia.org/wiki/%E8%92%82%E5%A7%86%C2%B7%E4%BC%AF%E7%BA%B3%E6%96%AF-%E6%9D%8E
[CERN]: http://home.web.cern.ch/
[worldweb]:https://zh.wikipedia.org/wiki/WorldWideWeb
[CERN httpd]:https://zh.wikipedia.org/wiki/CERN_httpd
[firest_server]:http://info.cern.ch/
[www]:https://www.w3.org/
[W3C]:https://www.w3.org/
[mld]:https://zh.wikipedia.org/wiki/%E9%A9%AC%E5%85%8B%C2%B7%E5%AE%89%E5%BE%B7%E6%A3%AE
[Netscape]:https://zh.wikipedia.org/wiki/%E7%BD%91%E6%99%AF%E5%AF%BC%E8%88%AA%E8%80%85
[bl]:https://zh.wikipedia.org/wiki/%E5%B8%83%E8%98%AD%E7%99%BB%C2%B7%E8%89%BE%E5%85%8B
[ecmaScript]:http://www.ecma-international.org/publications/standards/Ecma-262.htm
[cgi]:https://zh.wikipedia.org/wiki/CGI
[ajax]:https://zh.wikipedia.org/wiki/AJAX

[Berners-Lee:ansers for young people](https://www.w3.org/People/Berners-Lee/Kids.html)
[web 历史技术参考](http://blog.jobbole.com/45169/)   
[web 的历史](http://webfoundation.org/about/vision/history-of-the-web/)   
[a little history of 3w](https://www.w3.org/History.html)   
[web 程序开发的历史](https://www.devsaran.com/blog/history-web-application-development)   
[动态脚本语言的历史](http://royal.pingdom.com/2007/12/07/a-history-of-the-dynamic-web/)   
[ajax 的诞生](http://techtracer.com/2007/03/12/the-birth-of-ajax-an-amazing-story/)   
[web 设计简明历史](http://blog.froont.com/brief-history-of-web-design-for-designers/)
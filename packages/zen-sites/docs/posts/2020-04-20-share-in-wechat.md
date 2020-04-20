---
tags: share
---

# 记一次微信分享

**这是一次微信分享的资料这里记录一下**

## 自我介绍
大家好我是 15  级一个普通二本毕业生。到今年 7 月就工作 5 年了。

### 大学经历
我大学学的自动化, 从大一开始就在学校参加比赛,大一暑假参加数学建模学会了 `matlab` 也有幸获得了全国一等奖。

大二由于是自动化专业接触到单片机知识, 所以加入了学校电子实验室学习 C 语言,同时开始学习单片机,主要用的是 `STC 51` 系列、`Atmel Mega`系列 和 `TI MSP430` 系列的 8 位、16 位单片机, 暑假参加了飞思卡尔智能车大赛还有全国电子设计大赛也获得了一些名次。

大三也参加了智能车和湖北省电子设计大赛成绩还行,大四在学校学习 FPGA 临近毕业找的 offer 是一家深圳做电子通路的公司。

### 工作履历
`1-3 年` 一直在这家公司,由于公司的培养体系很健全, 有师徒制, 所以在第一年学习了前端基础,php,nodejs 等知识, 主要的工作偏 IoT 方向,做了智能家居等方面的应用,由于公司本身是一个芯片代理商,RD 的价值主要依托于芯片做方案, 并不是纯正的互联网公司。所以我就跳槽了。

`3-4年` 在一个还不错的公司做 WebAPP 相关的开发,主要的技术栈是 Vue。

`19 年` 因为个人发展回到武汉,在一家公司做 CRM 系统,由于工作太累,2020 年又跳槽到了新的公司(其中由于疫情在家自学了两个月 😂 )。

## 学习经验
说一下自己工作五年的一些学习经验吧, 我觉得主要是如下四点:

1. 去源头找答案
2. 不要给自己设限
3. 形成自己的做事模式
4. 一切以解决问题为中心

下面我会详细展开讲解

### 去源头找答案
首先学会使用正确的搜索引擎,推荐使用 [google 助手](http://www.cnplugins.com/office/gugefangwenzhushou/) 利用 google。学会一些基本的搜索指令,详见 [知乎](https://www.zhihu.com/question/20161362)。

技术学习尝试去源头找答案,例如不理解 ECMAScript 特性的机制,去读 [规范](https://tc39.es/ecma262/), 看不懂在向上去看 [MDN](https://developer.mozilla.org/zh-CN/) 的相关使用说明。 同样如果好奇规范的来历你也可以向下去看 [tc39](https://github.com/tc39/test262) 提案的演变规则,甚至去 [邮件组](https://esdiscuss.org/1) 查看一个特性的想法从开始到确定的全过程,通过知乎这个提问的回答: [为什么Js中localStroage只能存string类型的value？](https://www.zhihu.com/question/366665675/answer/1127726009) 来理解这种知识溯源的能力。

上面只列举了 JS, 实际上这个思想是可以推广到其他技术甚至是非技术学习的,例如网络协议去看 [RFC](http://www.rfcreader.com/#rfc1001),IEEE 等各种规范, MVC 模式去读原始的论文, 当你能从源头完全消化并理解知识的时候,你已经强于那些通过二层或三层信息链路才能理解的人。这也是为什么在面试时喜欢问源码,应为从源头获取信息的能力可以很好体现出技术能力。

### 不要给自己设限
先是工程师,再是软件工程师,再是前端工程师。你的职业只决定了你的专精范为, 并没有限定你的知识边界。

想学硬件买一块 [Arduino](https://www.arduino.cc/) 或树莓派做个数码时钟,推荐 [杜洋电子工作室](http://www.doyoung.net/) DIY 自己的创意。

想学后端,在自己电脑上搭建 mysql,nginx 环境,用 nodejs,php 或其他语言,选一个框架搭建 CRUD 的系统。

想学运维, 从搭建一个简单的 ftp 服务开始,理解 FHS, 系统权限, 配置管理等知识, 掌握 shell , 进一步学习 docker 等容器技术。

当然还包括产品,设计等方方面面的知识,只要你感兴趣就去学,不要只局限在前端领域,因为技术的思想是相通的,你知道的越多你的思路越开阔。


### 形成自己的做事模式
为什么要学习设计模式, 因为它抽象了一些经典问题,总结了一套标准化的解决方案,提高了软件开发的效率和质量。同样在你的工作中你也应该形成应对不同事情的做事模式,提高效率。

例如我工作的任务管理上, 会采用 TODO 模式操作步骤如下。
1. 明确任务,采用 5W1H 原则
2. 拆分任务,确定关键链路
3. 采用任务优先级排序任务
4. 细化任务拆分 TODO 列表
5. 按照排序逐项完成

例如做一个需求,先采用 5W1H 搞清楚需求的来龙去脉,对接人等等信息,清楚后再拆分你的任务,例如设计,编码,UI,联调 。假设到了编码环节再进一步将功能拆分为一系列 TODO 项,如果用 vscode 推荐[todo+ 插件](https://marketplace.visualstudio.com/items?itemName=fabiospampinato.vscode-todo-plus) ,你可以在项目中添加 `.todo`, 然后在 [.git/info/exclude](https://git-scm.com/docs/gitignore) 中添加 `.todo`保证只在自己工程忽略此文件, 通过此文件追踪你的代码代办清单。结合 [todo tree 插件](https://marketplace.visualstudio.com/items?itemName=Gruntfuggly.todo-tree) 精确到单行代码级别的控制。

当然还有很多的模式,你可以在反复的操作中优化这些应对模式从而形成自己对于不同事情的最优策略。如果你看过 JS 高级程序设计,你肯定知道 Nicholas C. Zakas, 这是他最近的博文 [How I think about solving problems](https://humanwhocodes.com/blog/2020/02/how-i-think-about-solving-problems/) 总结了他解决问题的模式, [我的拙译在此](http://blog.zenheart.site/posts/2020-02-21-how-i-think-about-solving-problem.html)。


### 一切以解决问题为中心
一切已解决问题为中心, 在我工作的前几年我也痴迷对新技术的追逐, 但是我逐渐发现软件工程的本质是为了解决问题, 而不是这些技术本身。这些技术的目的是为了更好更快的解决问题, 所以在你学习之前先问自己你是要解决问题还是单纯的为了追逐技术。

同样除了解决问题你还需要保持好奇心, 如果熟悉 npm 你肯定知道 Tj, express, mocha 等一系列 npm 核心包的创建者, quora 上有个提问 [How did TJ Holowaychuk learn to program?](https://www.quora.com/How-did-TJ-Holowaychuk-learn-to-program)(需翻墙) Tj 的回答就是我总是好奇这是怎么工作的,保持好奇以解决问题为中心，再去学习技术你会有无限动力。

## 总结
最后希望大家真的能有所收获,如果感兴趣可以关注我的 [blog](http://blog.zenheart.site/) 或者 [github](https://github.com/zenHeart) 。

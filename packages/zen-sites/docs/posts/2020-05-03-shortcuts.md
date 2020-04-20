---
tags:
  - 工具
  - mac
---

# iOS 快捷指令使用详解

## 前言

rss 订阅中看到了 [用 JS 玩轉 iOS shortcuts](https://blog.techbridge.cc/2020/04/26/ios-shortcuts-js/) 的 blog,于是学习了此工具的使用。

## 什么是快捷指令
参考 [wiki](https://zh.wikipedia.org/wiki/%E5%BF%AB%E6%8D%B7%E6%8C%87%E4%BB%A4), 快捷指令是由阿里·温斯坦等开发者于 2014 年开发的一款工作流应用。该应用于 2017 年被苹果收购,2018 作为 iOS 12 版本的内置应用推出。

快捷指令可以将 APP 中常用的操作组合起来映射为一个快捷命令,下次直接使用快捷命令便会触发者一系列操作。参考 [快捷命令使用手册](https://support.apple.com/zh-cn/guide/shortcuts/welcome/ios) 进一步理解。


## 快速入门

> 确保 iOS 版本 `≥ 12`,我使用 `13.4.1` 说明如何使用。

该示例实现了,将访问的网页添加到备忘录特定页面的功能。
> 开始之前确保在备忘录应用中创建了一个 `杂货铺的文件夹` 且包含 `收藏` 为开头的文件 

<iframe  height="400" width="600"  src="//player.bilibili.com/player.html?aid=668008428&bvid=BV1Xa4y1v7LN&cid=186917494&page=1" scrolling="no" border="0" frameborder="no" framespacing="0" allowfullscreen="true"> </iframe>

核心步骤
1. 在 iPhone 页面下拉唤起搜索,查找 `shortcuts` 打开快捷路径的应用
2. 点击右上角创建快捷路径
3. 将创建的快捷路径添加到共享按钮
4. safari 访问任意网页,点击共享按钮,触发快捷命令,会自动提取 url 并保存到备忘录收藏夹。

你也可以手机端打开 [test 快捷路径](https://www.icloud.com/shortcuts/276b71131ab743d6b5af6103458c8cac)

> **注意使用前确保 [允许不受信任的快捷指令](https://support.apple.com/zh-cn/guide/shortcuts/apdfeb05586f/3.5/ios/13.5#apdf9081945c)**


## 核心概念
根据 [快速入门](#快速入门) 的示例,指令是由一系列独立的操作串联起来的。
阅读 [快捷指令操作原理](https://support.apple.com/zh-cn/guide/shortcuts/apdad3cbabfc/ios) 进一步理解操作流程。

### 操作

例如示例中的 `追加到备忘录`,`显示备忘录` 等一系列功能。
iOS 内置了一系列内置操作方便你处理日常工作。大致分为如下几类

* `App` 暴露了 App 的内置功能,包括邮件,短信,safari 等
* `脚本` 提供了一系列的控制逻辑及硬件控制功能,例如 获取电池电量,在 safari 中执行脚本
甚至包括执行执行 api,连接远程 ssh 执行命令的功能
* `媒体` 包含了一系列音频,视频制作 gif 的能力
* `位置` 包含地理位置控制,天气等接口
* `文稿` 包含文本处理,markdown 等常用格式的相关操作
* `共享` 包含共享和邮件,短信等通知功能
* `网页` safari 的一系列操作能力

你也可以在搜索框查询所需的操作。

### 输入和输出
一般的操作都会有输入,输出的概念,例如 `获取 url` 的操作会从输入中提取 url。
输出 `url` 的文本。每一个操作都包含自己的输入输出规则,通过点击操作旁边的感叹号,查询操作的帮助。其中包含一些典型的输入。

* `快捷指令输入` 是根据当前执行快捷指令的环境提取输入,例如示例是从 safari 浏览器提取 url
* `剪切板` 是从剪切板提取输入
* `魔法变量` 是从变量中提取输入,后有详述 

### 变量
通过变量你可以将不同的操作流程串联起来,通过将中间值保存到变量,来组合
不同的输入结果。


快捷指令的重点就是利用操作结合需要处理的内容,创建一系列的操作流。
处理基本的组合,快捷指令也提供了逻辑判断,重复等逻辑操作,查看 [高级快捷指令](https://support.apple.com/zh-cn/guide/shortcuts/apdb5506f698/ios) 理解。


---
title: web_dev    
tags: web_dev      
birth: 2017-07-12      
modified: 2017-07-12      
---

web_dev
===
**前言:微信官方文档网页开发说明**

---

## [网页开发](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1483682025_enmey)

浏览器内核为 `WKWebview` 或 `UIWebview`
微信 6.5.3 以后支持手动切换内核.

1. 微信主页点击右上角加好
2. 点击添加朋友
3. 输入 `:switchweb` 
4. 会给出提示框显示当前使用内核为 `UIWebview` 还是 `WKWebview`

> 在 WKebview 界面下会出现闪烁问题,

查看当前内核

* 进入任意网页下拉网页
* 点击任意网页右上角菜单

显示 `此网页由` 为 `WKWebview` ,`网页由` 为 `UIWebview`

利用 `window.__wxjs_is_wkwebview` 为真使用 `WKWebview`

**经验在 ios 特性时,使用 safri 来进行类比**

微信在 `WKWebview` 中注入了 `JSBridge` 对象.
重点关注如下问题

* 页面功能
* 页面屏幕适配
* 利用微信按钮点击返回行为
* 页面 js 缘分兼容性
* JSAPI 兼容性 
* cookie 和 localstroage 存储
* cache-control 缓存机制设定

### jsapi
* 不支持 `cache` api.
* wx.config 失败

ios 微信 6.5.1 以下,使用 HTMl5 `Histroy API`
* `pushState`
* `popState`
* `replaceState` 控制页面导航时(单页面应用)
同时使用 `JSSDK` wx.config 授权 jsapi 出现无权限而调用失败

ios 微信 6.5.2 之后,可能出现此问题


> 注意使用 jssdk 时开启调试模式简化调试步骤

### cookie 和 localStorage
退出微信会被清空.

需保证服务端设置了 `cache control` 后再进行 html 页面缓存设置.


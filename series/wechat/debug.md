---
title: debug    
tag: debug      
creat: 2016-10-14      
modified: 2016-10-14      
---

debug
===
**前言:讲解微信调试环境的搭建**

---
# 环境配置
1. 去微信网站下载官方调试工具   
[调试工具下载网站](https://mp.weixin.qq.com/wiki/10/e5f772f4521da17fa0d7304f68b97d7e.html)
2. 非微信运营者参考如下链接绑定开发者 [web 开发者工具](https://mp.weixin.qq.com/wiki?t=resource/res_main&id=mp1455784140)


# 蓝牙设备调试技巧
## 在使用 JSAPI 的库时保证调用的页面和生成
JSAPI 的界面相同。

```php
   	// 注意 URL 一定要动态获取，不能 hardcode.
   	$protocol = (!empty($_SERVER['HTTPS']) && $_SERVER['HTTPS'] !== 'off' || $_SERVER['SERVER_PORT'] == 443) ? "https://" : "http://";
   	$url = $callUrl;//注意这个地方
   	$noncestr="abc";//可以随便定义
   	$jsapi_ticket=$this->get_jsapi_ticket();
   
   	$timestamp=time();
         //$url="http://1.atulocke.sinaapp.com/sample.php";
   	$str="jsapi_ticket=".$jsapi_ticket."&noncestr=".$noncestr."&timestamp=".$timestamp."&url=".$url;
   	$signature=sha1($str);
   
       $signPackage = array(
         "appId"     => $this->appId,
         "nonceStr"  => $noncestr,
         "timestamp" => $timestamp,
         "url"       => $url,
         "signature" => $signature,
         "rawString" => $str
       );
       return $signPackage; 
     }  
 
```
## 在设备 api 无法正常调用时注意打开调试信息
```js
        wx.config({
               debug: false,//注意把调试信息打开
               appId: token.appId,
               timestamp:token.timestamp,
                nonceStr: token.nonceStr,
                   signature:token.signature,
       }); 
```
## 记得将前后端的页面进行分离
尽量不要出现前后端代码冗杂在一起的情况，
使用接口方式进行结合。不要暴露代码接口。
采用重定向方式进行文件设置。

## jsapi 调用出错说明
> **the permission value is offline verifying**   

出现该错误原因有2
1. 传入参数有误
2. 未将调用函数注入 WX 对象。
具体内容参考:[JSSDK 附录5常见错误说明](http://mp.weixin.qq.com/wiki/7/aaa137b55fb2e0456bf8dd9148dd613f.html)   


# 微信 JSAPI 对象介绍
微信内置有浏览器，其浏览器是基于 QQ 浏览器的精简版。
所以在使用设备的 JSAPI 或微信的 JSSDK 时，都会设置到浏览器的内建的
宿主对象使用，微信内置有浏览器对象 WeixinJSBridge ，该对象需要客户端进行初始化。
初始化代码如下:
```js
   if (typeof WeixinJSBridge == "object" && typeof WeixinJSBridge.invoke == "function") {
       callback();
   } else {
       if (document.addEventListener) {
           document.addEventListener("WeixinJSBridgeReady", callback, false);
       } else if (document.attachEvent) {
           document.attachEvent("WeixinJSBridgeReady", callback);
           document.attachEvent("onWeixinJSBridgeReady", callback);
       }
   }
   //callback即为调用WeixinJSBridge的相关接口的函数 
```
该对象初始成功回拥有如下方法
## WeixinJSBridge 方法
方法名|用途|通用形式|
:---|:---|:---|
invoke|调用指定 API|WeixinJSBridge.invoke("API名称","调用参数",<回调函数>);
on|事件监听|WeixinJSBridge.on("事件名称",<回调函数>);

具体内容参考:[WEUI说明](https://github.com/weui/weui/wiki/%E5%BE%AE%E4%BF%A1JSAPI)


## 微信的隐藏 bug

* 用户仅向公众号发送信息，无其他互动，公众号仅能通过客服接口向此用户发送20条信息。
* 用户仅在公众号点击菜单，无其他互动，公众号仅能通过客服接口向此用户发2条信息。

意味着如果想主动向客户发送信息,必须发送消息后.才可复位该限制.


# 微信设备 JSAPI 使用详解
1. 使用之前的初始化
设备端库在使用之前需要保证已经加载，WeixinJSBridge 对象。
在加载此对象成功后，调用 openWXDeviceLib 函数初始化设备库即可使用微信的
JSAPI 设备函数库。核心代码如下。
```js
    
```


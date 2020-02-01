# network 



## chrome-internal
内部工具实现 http 接口的完全监听.
直接调试浏览器接收的字节流.常规使用.

1. 打开 [chrome internal](chrome://net-internals/)
2. 在 `cpcture` 勾选捕获实际字节,并重置
3. 跳转到 `event` 选项卡,输入需要监听的域名 
4. 点击右上角三角清空缓存及重置内容
5. 在浏览器中发送对应请求
6. 则可在 net-internal 中截获并看到对应字节流

有用的资料:

* [internal](https://www.chromium.org/developers/design-documents/network-stack/netlog)
* [internal 使用](https://blogs.sap.com/2017/02/06/useful-chrome-tool-chromenet-internals-to-monitor-http-request-detail/)
* [net log 事件含义](https://src.chromium.org/viewvc/chrome/trunk/src/net/base/net_log_event_type_list.h?view=markup)

## 清除 DNS
进入 [DNS](chrome://net-internals/#dns) 完成 DNS 清除.



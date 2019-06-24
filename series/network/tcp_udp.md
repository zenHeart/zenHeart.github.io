---
title: tcp_udp    
tag: tcp_udp      
birth: 2017-02-22      
modified: 2017-02-22      
---

tcp_udp
===
**前言:讲解 tcp udp 的基本知识**

---

TCP 具有如下的连接状态

状态|作用|
:---|---|
listen|监听来自远方 tcp 端口发出的请求
syn-sent|发送请求后，等待连接匹配的连接请求
syn-received|等待确认连接的连接请求
established|建立了一个连接
fin-wait-1|等待远程 tcp 连接中断请求，或先前的连接终端确认
fin-wait-2|从远程 tcp 等待连接终端请求
close-wait|等待从本地用户发来的连接中断请求
last-ack|等待原来的发向远程 tcp 的连接中断请求的确认
time-wait|等待足够的时间确认远程 tcp 接受到连接中断请求的确认
closed|没有任何连接状态


利用 `netstat` 查看连接的类型

```bash
# 查看所有 tcp 连接
# 或者 `netstat -nlp` 也可
netstat -alt 

Proto Recv-Q Send-Q Local Address           Foreign Address         State      
tcp        0      0 lockePc:mysql           *:*                     LISTEN     
tcp        0      0 *:netbios-ssn           *:*                     LISTEN     
tcp        0      0 127.0.1.1:domain        *:*                     LISTEN     
tcp        0      0 *:ssh                   *:*                     LISTEN     
tcp        0      0 *:microsoft-ds          *:*                     LISTEN     
tcp        0      0 10.86.136.14:46926      10.86.136.2:24800       ESTABLISHED
tcp        0      0 10.86.136.:microsoft-ds 10.86.136.2:56710       ESTABLISHED
tcp        0      0 lockePc:43322           lockePc:mysql           ESTABLISHED
tcp        0      0 10.86.136.:microsoft-ds 10.86.136.2:56709       ESTABLISHED
tcp        0      0 lockePc:mysql           lockePc:43322           ESTABLISHED
tcp        0      0 10.86.136.:microsoft-ds 10.86.136.2:57431       ESTABLISHED
tcp        0      0 10.86.136.14:33210      112.74.170.197:ssh      ESTABLISHED
tcp        0      0 10.86.136.:microsoft-ds 10.86.136.2:57432       ESTABLISHED
tcp6       0      0 [::]:netbios-ssn        [::]:*                  LISTEN     
tcp6       0      0 [::]:http               [::]:*                  LISTEN     
tcp6       0      0 [::]:ssh                [::]:*                  LISTEN     
tcp6       0      0 [::]:microsoft-ds       [::]:*                  LISTEN     

```
注意理解 `local adress` 这个字段决定了服务的连接范围。
假设某一服务显示如下的格式则含义为

* :::80 允许任意 ip 地址连接，(ipv4 或 ipv6)
* 0.0.0.0:80 允许任意 ipv4 端口连接
* 127.0.0.1:80 只允许本地连接
* 192.168.0.5:80 允许额外的 ipv4 地址 192、168.0.5 连接

注意 ip 和端口可以利用符号指代。使用 `netstat` 命令时
`-n` 参数就是以非指代方式进行显示,常见的指代含义如下

**ip 的别名**

名称|含义|
:---|---|
`*`|类似 `0.0.0.0`
`[::]`|类似`::`

**端口的别名**

名称|含义|
:---|---|
ssh|指代 22 端口|
http|指代 80 端口|
mysql|指代 3306 端口|

通过此特性配置网络连接的允许范围。

## 参看资料

[tcp 和 udp](http://www.erg.abdn.ac.uk/users/gorry/course/inet-pages/packet-decode.html)

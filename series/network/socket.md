---   
title:socket   
tag:socket   
birth:2016-09-12 16:43:15   
modified:2016-10-10 21:16:47   
---

socket
===
**前言:详细探讨 socket 技术**
---

# socket 原理
[socket连接图示](http://www.cs.colostate.edu/~gersch/cs457/CS457_tutorial2.pdf)

## 发送和接收中的问题讨论
### 是 buffer 还是 string

### 发送过快导致的消息粘包

### 单独发送时的消息分包

### 自定义消息体的规范

### socket 反复重连的问题

1. 不要使用特殊字符作为包的结束，这样会增加接收包
的判断损失。利用标准规范进行发送。
`|--包头--|--包长度--|--包体--|`

### 理解 node socket end
在使用 socket.end() 函数时。
实际上是服务端先向客户端发送了结束包，
然后根据客户端的 fin 消息进行的关断。
所以在客户端断网时，服务端是无法实现通道销毁的。
此时需要根据 socket 时间的结果来判断客户端是否出现中断。
进一步说明，在通讯逻辑错误的时候，也无法利用 end 事件来关断 socket 通道。

## socket 复杂业务逻辑的架构

## 安全及稳定
1. 连接数量的限制
2. 请求频次的限制
3. 错误及历史日志的记录
4. 消息包长度的限制
5. 消息包内容的限制
6. 错误处理的判别
7. 防止请求包的丢失，消息队列的保存

## mtu
linux 查看 mtu
```bash
ifconfig | grep -i mtu 
```

配置 mtu 大小

```bash
sudo vi  /etc/network/interfaces
```

添加 `mtu 5000` 即可


## mss

修改 mss
```bash
 sudo iptables -A FORWARD -p tcp  --tcp-flags SYN,RST SYN -j TCPMSS --clamp-mss-to-pmtu
 
```

## socket 架构设计

# 参考文章
1. [socket 连接错误](http://taobaofed.org/blog/2015/11/05/nodejs-errors/)

2. [super socket 架构](http://www.oschina.net/p/supersocket/)

3. [socket 设计经验](http://www.oschina.net/p/supersocket/)

4. [清除 socket 对象](http://stackoverflow.com/questions/9918203/remove-objects-on-disconnect-socket-io)

5. [socket 内存消耗](http://cnodejs.org/topic/50e5900da7e6c6171a0159d7)
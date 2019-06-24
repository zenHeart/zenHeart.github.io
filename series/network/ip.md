---
title: ip    
tags: network      
birth: 2017-12-15      
modified: 2017-12-15      
---

ip
===
**前言:理解 ip**

---

ip 为 32 位二进制数字.
被拆分为四个字节.每个字节取值 0-255.

整个 ip 分为两段.

netid + hostid

* `netid` 表示主机对应的网络段
* `hsotid` 表示主机在对应网络段的编号
    * `hostid` 为 0 的表示网段地址
    * `hostid` 全为 1  的表示广播地址
> 主机的硬件实体相同的主机同一网段





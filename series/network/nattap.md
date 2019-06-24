---
title: nattap    
tags: nat tool      
birth: 2017-11-15      
modified: 2017-11-15      
---

# nattap

**前言:讲解内网穿透技术**

---

## nat
[nat](https://natapp.cn/) 内网穿透工具.
可以将本地 ip 映射到远程服务器进行访问.

![](img/nat_work_flow.png)

利用 nat 可以很方便的将本地服务映射到外网访问.
步骤如下.


1. 注册 natapp
2. 在配置界面配置本地服务的域名及端口
3. 本地安装 natapp 命令行工具
4. 本地运行 natapp
    ```bash
    natapp -authtoken=<你的配置 token>   
    ```
5. 即可实现远程访问本地内容



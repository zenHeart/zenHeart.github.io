---
title: nginx    
tags: nginx linux tool       
birth: 2017-05-11      
modified: 2017-05-11      
---

nginx
===
**前言:讲解 nginx 的基本使用**

---

# 概述

nginx 是一个 http 服务器



# 概念建立
## 配置文件

nginx 的配置文件由 [directives](https://nginx.org/en/docs/http/ngx_http_core_module.html#location)
组成.指令具有如下特点.
* 指令支持嵌套
* 指令会实现覆盖

配置文件结构

由控制指令组成,指令由键值对组成.
指令之间的包含称之为语境由大括号构成.
指令的配置为层级继承关系.
常用配置层级从外到内依次为.

`http -> server -> location`


配置文件为 `nginx.conf` 分为所在目录为

* `/usr/local/nginx/conf` 本地,mac 下为 `/usr/local/var/ngnix` 
* `/usr/local/etc/nginx` 用户
* `/etc/nginx/conf`  全局



**配置文件取值约定**

* 内层变量覆盖外层变量
* 未取值继承外层设定值或默认值

**错误处理**

配置结果不符合预期是查看 
* `/usr/local/nginx/logs`  
* `/var/logs/nginx`  

## nginx 处理请求的原理

结合 [how nginx process a request](http://nginx.org/en/docs/http/request_processing.html)
[理解 nginx](https://n0where.net/understanding-the-nginx/)

简述如下:

一个常见的 http 可拆解为如下部分:

`http://<host>:<port>/<path>?<query>#<frag>`

若为静态文件,规则如下:

1. server 指令匹配

提取 `host` 和 `port` 字段.根据 `nginx.conf`
文件 server 指令对应的 `server_name` 和 `listen` 字段进行匹配
若未查找到对应的服务器名称则指向默认的处理服务.参看 [listen](http://nginx.org/en/docs/http/ngx_http_core_module.html#listen)



```nginx
 server {
     listen      80 default_server;
     server_name example.net www.example.net;
 }
``` 

2. location 指令匹配

匹配模式取决于 location 的设定规则.
大致分为如下几种.

* 部分匹配
* 完全匹配


在找到对应的 `server` 配置后.nginx 会根据 `path` 值.
匹配对应的 [location](http://nginx.org/en/docs/http/ngx_http_core_module.html#location) 指令.
当存在多个 location 时,逐一匹配,若匹配则使用该 location 指令.
然后组合 `server` 指令中的 root 指令结果和 path 最为本地的查找路径.
去 `<root>/<path>` 路径下搜索资源并返回.

对于 `rewrite` 指令.当匹配到对应的模式时.
会根据配置改写 url.同时利用 改写后的url 进行重定向
重新执行第二步内容.注意重写中.

* `?<query>#<frag>` 部分无需处理, nginx 会自动添加该部分
* `<path>` 路由只匹配该部分请仔细阅读该部分匹配规则.



 对于动态文件,例如 php 文件.
 
 









各部分对应配置文件如下

* <host> 被 [server]()

## 基本命令


signal 常用值

* stop 立即停止服务
* quit 优雅的停止服务
* reload 重载配置文件
* reopen 重新打开配置文件

```bash
# 停止 nginx 服务 
nginx -s stop

# 获取所有 nginx 进程
ps -ax | grep nginx
```

## 重写

nginx 下存在三种重写参见 [官方文档创建重写规则](https://www.nginx.com/blog/creating-nginx-rewrite-rules/)

* return 基于 http 状态的处理  
    
    例如网站的重定向.配置范例
    
    ```nginx
    server {
          listen 80;
          server_name www.old-name.com;
          return 303 $shceme://www.new-name.com$request_uri
      } 
    ```
    
* rewrite 指令重写路由,递归替换路由,记住重写最多只能执行(10 次)
    

* try_files 对未知文件或路径进行重写

    ```nginx
    location /images./ {
          try_files $uri $uri/ /images/default.gif
      } 
    
    location = /images/default.gif {
          expires 30s;
      }
    ```
    
    按照 try_files 规则对文件进行查找.



  

## 

# 快速入门

以 php 服务器为例讲解搭建流程.
## 前期准备
### 安装 nginx
参考 [nginx](https://nginx.org/en/docs/install.html)

```bash
# mac 
brew isntall nginx

# ubuntu
sudo apt-get install nginx

```

### 安装 php

```bash
# mac
brew install php56 

# ubuntu
sudo apt-get install php56
```

## 修改配置文件
### 配置 ngnix

1. mac 进入 `/usr/local/etc/nginx` 备份 `nginx.conf` 文件后,修改
该文件.在 server 指令块修改配置如下

    ```nginx
    root   /usr/local/var/www;
    
    # 配置 index 文件
    location / {
        index  index.html index.htm;
    }
    
    # 配置执行 php 权限
    location ~ \.php$ {
        try_files $uri =404;
        include fastcgi.conf;
        fastcgi_pass 127.0.0.1:9000;
    }

    ```

### 配置 php-fpm

mac 进入 `/usr/local/etc/php/5.6/`,备份并修改 `php-fpm.conf` 文件.
查找 `error_log` 修改为:

```apacheconfig
error_log = /use/local/var/log/php-fpm.log 
``` 

## 启动

1. 启动 nginx

```bash
# mac
brew services start nginx 

# ubuntu
sudo service nginx start
```

2. 启动 php-fpm

```bash
# mac 
brew services start php-fpm

# ubuntu
brew service php-fpm start
```

查看应用是否启动成功.

```bash
# 查看 nginx 和 php-fpm 进程
ps -ax | grep 'nginx\|php-fpm'  

# 查看 nginx 监听端口
# mac
lsof -i | grep nginx

# ubuntu
netstat -t | grep nginx
```

## 经验
### 日志
mac 去 `/usr/local/var/log/nginx` 目录下查看 nginx 日志.
* access.log 显示了 nginx 的访问日志 
* error.log 显示了 nginx 的错误日志 

**注意对于 php-fpm 解析错误**在 `/usr/local/var/log/php-fpm.log` 文件中查看

### 重启
每次修改完配置后记得重启

```bash
# nginx 只需重载配置文件即可 
nginx -s reload 

# php-fpm 修改配置后重启
# mac
brew services restart php56

# ubuntu
sudo service restart php-fpm
```




## 常用配置

常用配置分为三类

* 服务器配置
* php 配置
* location 配置

**服务器配置**

```nginx
# 配置重定向
server {
    listen          80;
    server_name     domain.com *.domain.com;
    return          301 $scheme://www.domain.com$request_uri;
 }
 
# 配置域名服务 
server {
    listen          80;
    server_name     www.domain.com;
 
    index           index.html;
    root            /home/domain.com;
} 

# 默认服务器

server {
    listen          80 default_server;
 
    index           index.html;
    root            /var/www/default;
}
```


## 坑
**配置 php 工作的坑**

不知道什么是 `CGI` 解决步骤.

1. 配置 nginx 调用 cgi

```nginx
 location ~ \.php$ {
            try_files $uri =404;

            include fastcgi.conf;
            fastcgi_pass 127.0.0.1:9000;
        }
 
```

通过文件后缀名识别文件

2. 配置 php-fpm.conf

配置错误文件位置如果使用 brew 安装目录在.

`/usr/local/etc/php/<version>/` 下.

```apacheconfig
error_log = /usr/local/var/log/php-fpm.log
```

3. 启动 `php-fpm` 即可.

```bash
# mac 下使用 brew services 
sudo brew services start php56

# ubuntu
sudo service php-fpm start
```

## 常用指令

[if 工作原理浅析]()

[if](http://nginx.org/en/docs/http/ngx_http_rewrite_module.html#if)

[try_files](http://nginx.org/en/docs/http/ngx_http_core_module.html#try_files)



# 核心指令讲解

## 路由部分



# 参考资料
[adimn tutorial](https://www.nginx.com/resources/admin-guide/?_ga=2.226680029.1115053694.1494497716-934426725.1494322682)

[ngnix 配置入门](https://www.nginx.com/resources/wiki/start/index.html)

[ngnix phh 配置解析](http://blog.jobbole.com/50121/)

[php5-fpm 日志设定](http://www.tothenew.com/blog/php5-fpm-logging/)

[直接执行 CGI 代码](https://ma.ttias.be/running-php-cgi-scripts-via-the-cli-as-a-webserver-would-by-faking-them/)
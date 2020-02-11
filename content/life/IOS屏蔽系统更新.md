+++
title = "IOS屏蔽系统更新"
date = "2020-02-12"
tags = ["IOS系统", "屏蔽更新","Iphone"]
slug = "ios-ota"
type = "poetry"
+++

# IOS系统屏蔽更新
最近发现IOS13有新系统更新了，貌似只对Iphone 11有提升，老机型就没必要更新了。可是明明已经关闭自动更新了，手机在Wi-Fi环境下还是会偷偷的下载升级包
👀 在一月底我们得知屏蔽更新的描述文件[^1]已经失效，并据 [Beta Profiles ](https://twitter.com/betaprofiles/status/1222838327843246080?s=21)消息，苹果有可能禁止 tvOS 13 Beta 在目前 iPhone 设备的安装。这意味着将来我们可能无屏蔽描述文件可用
现如何屏蔽系统更新or设置图标上的小红点呢？
## 屏蔽IOS13系统更新
### 小白版
去手机设置-无线局域网-使用无线局域网和蜂窝的App里面吧设置的联网权限关掉就不会自动检测更新和下载了，缺点是 设置里面的很多项无法联网了。`最佳做法是把 设置 的联网权限改为蜂窝数据，这样Wi-Fi环境下不会偷偷下载升级包了（数据下默认是不会下载的）`
关闭之前先去`设置-通用-iphone的储存空间里面找到设置这个图标删掉已经下载好的系统升级包节省空间`
### 进阶版
利用网络调试软件把更新系统的域名给`reject`掉

```host, ns.itunes.apple.com, reject
host, appldnld.apple.com, reject
host, mesu.apple.com, reject
host, xp.apple.com, reject
host, gdmf.apple.com, reject
```
软件有 Surge、Quantumult等
## IOS12.1系统屏蔽更新
[点击下载](https://ibeta.me/static/configs/noota.mobileconfig) 安装描述文件

![](https://i.loli.net/2020/02/12/UbJRZSmzgTBXlG4.jpg "描述文件安装说明")

[^1]: 描述文件是iOS系统特有的一种设置文件，里面包含了设备的很多授权信息，如网络配置、访问限制、安全策略等等。对于iPhone手机而言，它有着非常重要的作用，用户也可以使用它实现很多自定义的需求。






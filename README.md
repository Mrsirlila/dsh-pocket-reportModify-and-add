# dsh-pocket-reportModify-and-add

把 DeepSeek Harness 装进你的口袋，对原作者shaobeichen的版本[github.com/shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket)源码用deepseek跑了一点修改，并且做出了能使用的APK手机版进行操作，能够自动一键公网内网互通

新增功能介绍以及更新
https://www.bilibili.com/video/BV1XaeU65EHJ

软件功能介绍，对软件进行了一坨优化，以及拉了一坨大的，以及功能增加

1.自动内外网切换，打开原版的CF隧道之后，开启软件时自动匹配网络，家里出门都能使用

2.增加功能如只要链接过内网的IP自动会拓扑外网的链接，不需要二次扫码（如果出现DSH软件重启，只需要连接一次家里WIFI，或者扫码就能自动匹配外网）

3.新增能使用手机发送文件给DSH,更方便在手机端使用

4.修复 2.11.0 打开公网莫名其妙有个 CMD 弹窗的 BUG（那个弹窗一关，公网就断）

---

## 下载（当前版本 1.37）

| 文件 | 装在哪 | 说明 |
|---|---|---|
| [`DSH掌上版-1.37.apk`](DSH掌上版-1.37.apk) | 手机 | 手机端 App，包名 `com.boss.dshpocket`，最低 Android 7.0，正式密钥签名可直接覆盖升级 |
| [`dsh-pocket插件-已打补丁.zip`](dsh-pocket插件-已打补丁.zip) | 电脑 | 电脑端插件（解压后照里面的「安装说明-必读.txt」装） |
| [`使用说明.txt`](使用说明.txt) | — | App 的用法 + 完整更新记录 |
| [`先读我-包内容说明.txt`](先读我-包内容说明.txt) | — | 整个包的导读 |
| [`SHA256校验.txt`](SHA256校验.txt) | — | APK 与插件包校验值，下载后可比对 |
| [`plugin/`](plugin/) | — | 上面那个 zip 的原样源码目录（基于上游 v2.12.0 的三处改动），方便直接看代码与 diff |

App 是「壳」，插件是「门」，**两边要配对使用**：只装 App 不装插件，App 没有东西可连。

本版插件基于上游 **v2.12.0**，改了三处：

1. 二维码自动带上访问密码（`lib/service.mjs`）
2. 新增 `/dsh-pocket/entry.json` 入口信息接口（`lib/service.mjs`、`lib/index.js`）
3. **修复 Windows 上开公网弹控制台黑框、关掉黑框隧道即断的问题**（`lib/tunnel.mjs` 两处 `spawn` 补 `windowsHide: true`）

明细见 [`plugin/本地修改声明.md`](plugin/本地修改声明.md)。

> **维护约定**：以后以我们自己的补丁版为准。官方出新版时只作参照、重打补丁，
> **不要用 `dsh plugin update` 或插件页的「更新」直接覆盖**。完整流程见
> [插件维护规范.md](插件维护规范.md)。

## 许可与来源声明

电脑端插件是 [shaobeichen/dsh-pocket](https://github.com/shaobeichen/dsh-pocket)（GPL-2.0）的修改副本，
以 **GPL-2.0** 分发，与原作者无关；问题请提到本仓库，不要反馈给上游。
界面与图标中的形象版权归其原作者所有。

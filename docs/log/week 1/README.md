# 第一周

> 主要熟悉公司开发环境，搭建本地开发环境

- [12.24](12.24.md)
- [12.25](12.25.md)



## 总结

1. [项目启动问题，字符乱码等](12.25.md/#message-pocket项目启动问题√)





## 问题

### 总结超链接跳转

在Typora中用.md后缀可以跳转，但是部署到vuepress需要使用.html跳转

例如上面的超链接

```bash
# 使用.html可以在vuepress中跳转
[项目启动问题，字符乱码等](./12.25.html/#message-pocket项目启动问题√)
# 使用.md可以在Typora中跳转
[项目启动问题，字符乱码等](./12.25.md/#message-pocket项目启动问题√)
```

目前使用.html毕竟Typora用来编辑，还是优先支持部署后预览效果

### 解决方法

去掉`./`之后即可使用`.md`
(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{408:function(t,r,a){"use strict";a.r(r);var n=a(44),e=Object(n.a)({},(function(){var t=this,r=t.$createElement,a=t._self._c||r;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"undo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undo"}},[t._v("#")]),t._v(" undo")]),t._v(" "),a("ul",[a("li",[t._v("[ ] 日期配置更新")]),t._v(" "),a("li",[t._v("[ ] dubbo 接口 禁止重试 调用方")])]),t._v(" "),a("h2",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[t._v("#")]),t._v(" problem")]),t._v(" "),a("p",[t._v("任务调度时间配置")]),t._v(" "),a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),a("ol",[a("li",[t._v("迎新活动二期")])]),t._v(" "),a("h3",{attrs:{id:"需要学习"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#需要学习"}},[t._v("#")]),t._v(" 需要学习")]),t._v(" "),a("ol",[a("li",[t._v("@Transaction注解")]),t._v(" "),a("li",[t._v("dubbo")]),t._v(" "),a("li",[t._v("消息队列")])]),t._v(" "),a("h2",{attrs:{id:"learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[t._v("#")]),t._v(" learn")]),t._v(" "),a("h3",{attrs:{id:"spring事务"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#spring事务"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://zhuanlan.zhihu.com/p/148504094",target:"_blank",rel:"noopener noreferrer"}},[t._v("Spring事务"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("Spring 事务管理分为"),a("strong",[t._v("编码式")]),t._v("和"),a("strong",[t._v("声明式")]),t._v("的两种方式。")]),t._v(" "),a("ol",[a("li",[t._v("编程式事务指的是通过编码方式实现事务")]),t._v(" "),a("li",[t._v("声明式事务基于 AOP,将具体业务逻辑与事务处理解耦")])]),t._v(" "),a("blockquote",[a("p",[t._v("声明式事务有两种方式")]),t._v(" "),a("p",[t._v("一种是在配置文件（xml）中做相关的事务规则声明")]),t._v(" "),a("p",[t._v("另一种是基于@Transactional 注解的方式。")])]),t._v(" "),a("h4",{attrs:{id:"transaction"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#transaction"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://www.jianshu.com/p/5687e2a38fbc",target:"_blank",rel:"noopener noreferrer"}},[t._v("@Transaction"),a("OutboundLink")],1)]),t._v(" "),a("p",[t._v("声明式事务（@Transactional)基本原理如下：")]),t._v(" "),a("ol",[a("li",[t._v("配置文件开启注解驱动，在相关的类和方法上通过注解@Transactional标识。")]),t._v(" "),a("li",[t._v("spring 在启动的时候会去解析生成相关的bean，这时候会查看拥有相关注解的类和方法，并且为这些类和方法生成代理，并根据@Transaction的相关参数进行相关配置注入，这样就在代理中为我们把相关的事务处理掉了（开启正常提交事务，异常回滚事务）。")]),t._v(" "),a("li",[t._v("真正的数据库层的事务提交和回滚是通过binlog或者redo log实现的。")])]),t._v(" "),a("blockquote",[a("p",[a("strong",[t._v("Spring中事务的默认实现使用的是AOP，也就是代理的方式，如果大家在使用代码测试时，同一个Service类中的方法相互调用需要使用注入的对象来调用，不要直接使用this.方法名来调用，this.方法名调用是对象内部方法调用，不会通过Spring代理，也就是事务不会起作用")])])]),t._v(" "),a("h3",{attrs:{id:"xxl-job-cron表达式"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#xxl-job-cron表达式"}},[t._v("#")]),t._v(" "),a("a",{attrs:{href:"https://blog.csdn.net/ZHANGJNWEI/article/details/110679692",target:"_blank",rel:"noopener noreferrer"}},[t._v("xxl-job cron表达式"),a("OutboundLink")],1)])])}),[],!1,null,null,null);r.default=e.exports}}]);
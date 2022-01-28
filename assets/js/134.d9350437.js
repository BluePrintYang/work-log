(window.webpackJsonp=window.webpackJsonp||[]).push([[134],{435:function(a,t,s){"use strict";s.r(t);var e=s(44),r=Object(e.a)({},(function(){var a=this,t=a.$createElement,s=a._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":a.$parent.slotKey}},[s("h2",{attrs:{id:"undo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undo"}},[a._v("#")]),a._v(" undo")]),a._v(" "),s("ul",[s("li",[a._v("[x] 数据库表熟悉")]),a._v(" "),s("li",[a._v("[x] 微信API编写")]),a._v(" "),s("li",[a._v("[x] getConf")]),a._v(" "),s("li",[a._v("[ ] 前后台交互逻辑")])]),a._v(" "),s("h2",{attrs:{id:"problems"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problems"}},[a._v("#")]),a._v(" problems")]),a._v(" "),s("h3",{attrs:{id:"启动项目显示localhost-将您重定向的次数过多。√"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#启动项目显示localhost-将您重定向的次数过多。√"}},[a._v("#")]),a._v(" 启动项目显示"),s("strong",[a._v("localhost")]),a._v(" 将您重定向的次数过多。√")]),a._v(" "),s("p",[a._v("清除cookie，关闭当前页面重新开")]),a._v(" "),s("ul",[s("li",[a._v("[x] 具体怎么写？获取数据库数据，返回？分层，mapper等也需要自己写吗？")])]),a._v(" "),s("blockquote",[s("p",[a._v("写biz层，mapper那些是自动生成代码")])]),a._v(" "),s("ul",[s("li",[a._v("[x] 前端没有微信公众号通道，没有办法测试？")])]),a._v(" "),s("blockquote",[s("p",[a._v("postman")])]),a._v(" "),s("h3",{attrs:{id:"result-maps-collection-already-contains-value-for-√"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#result-maps-collection-already-contains-value-for-√"}},[a._v("#")]),a._v(" Result Maps collection already contains value for *** √")]),a._v(" "),s("p",[a._v("mybatis在逆向创建工程时，会自动生成sql配置映射文件，报这个错误是因为在生成是"),s("strong",[a._v("重复生成")]),a._v("了，你每运行一次，就会在映射的mapper.xml中重新生成字段值，所以在后边的运行web工程时就会报错，"),s("strong",[a._v("解决办法就是将mapper.xml中的多余字段删除，或者是将mapper.xml配置文件删除，然后在重新生成，在重新生成的过程中pojo是不会重复生成的。")])]),a._v(" "),s("p",[a._v("==自动生成代码，不需要手写mapper.xml所以报错重复==")]),a._v(" "),s("h2",{attrs:{id:"learn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[a._v("#")]),a._v(" learn")]),a._v(" "),s("h3",{attrs:{id:"cdn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cdn"}},[a._v("#")]),a._v(" CDN")]),a._v(" "),s("p",[a._v("CDN加速意思就是在用户和我们的服务器之间加一个缓存机制，通过这个缓存机制动态获取IP地址根据地理位置，让用户到最近的服务器访问。\n那么CDN是个啥？\n全称Content Delivery Network即内容分发网络。")]),a._v(" "),s("p",[a._v("CDN是一组分布在多个不同的地理位置的WEB服务器，用于更加有效的向用户发布内容，在优化性能时，会根据距离的远近来选择 。")]),a._v(" "),s("p",[a._v("作者：沐源山\n链接：https://www.jianshu.com/p/ce98fbff39ac\n来源：简书\n著作权归作者所有。商业转载请联系作者获得授权，非商业转载请注明出处。")]),a._v(" "),s("h3",{attrs:{id:"cmd查看进程"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#cmd查看进程"}},[a._v("#")]),a._v(" cmd查看进程")]),a._v(" "),s("p",[a._v("1、查看端口占用")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -ano\n")])])]),s("p",[a._v("2.查看指定端口的占用情况")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[a._v("netstat")]),a._v(" -aon"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("findstr "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("8080")]),a._v("    -- 数字为端口号\n")])])]),s("p",[a._v("3.查看PID对应的进程")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("tasklist"),s("span",{pre:!0,attrs:{class:"token operator"}},[a._v("|")]),a._v("findstr "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5769")]),a._v("  -- 数字为PID\n")])])]),s("p",[a._v("4.结束该进程")]),a._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[a._v("taskkill /f /t /im xxx.exe -- 杀程序\ntaskkill /f /PID "),s("span",{pre:!0,attrs:{class:"token number"}},[a._v("5769")]),a._v("  -- 杀PID\n")])])]),s("h3",{attrs:{id:"jmx端口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#jmx端口"}},[a._v("#")]),a._v(" "),s("a",{attrs:{href:"https://www.jianshu.com/p/8c5133cab858",target:"_blank",rel:"noopener noreferrer"}},[a._v("JMX端口"),s("OutboundLink")],1)]),a._v(" "),s("p",[a._v("是Java Management Extensions(Java管理扩展)的缩写，是一个为应用程序植入管理功能的框架。用户可以在任何Java应用程序中使用这些代理和服务实现管理。")])])}),[],!1,null,null,null);t.default=r.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[118],{479:function(t,a,s){"use strict";s.r(a);var r=s(44),e=Object(r.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),s("h3",{attrs:{id:"华为云迁移问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#华为云迁移问题"}},[t._v("#")]),t._v(" 华为云迁移问题")]),t._v(" "),s("h4",{attrs:{id:"tinyid-分布式id生成重复问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#tinyid-分布式id生成重复问题"}},[t._v("#")]),t._v(" tinyid 分布式id生成重复问题")]),t._v(" "),s("h5",{attrs:{id:"场景"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#场景"}},[t._v("#")]),t._v(" 场景")]),t._v(" "),s("p",[t._v("新用户在登录今日校园时，会生成"),s("code",[t._v("campus_account")]),t._v("号，此号码由日期前缀加tinyid生成，yyMM+tinyId")]),t._v(" "),s("p",[t._v("参考"),s("a",{attrs:{href:"https://github.com/didi/tinyid/wiki/Tinyid%E5%8E%9F%E7%90%86%E4%BB%8B%E7%BB%8D",target:"_blank",rel:"noopener noreferrer"}},[t._v("tinyid生成原理"),s("OutboundLink")],1)]),t._v(" "),s("p",[t._v("迁移华为云之后会报错"),s("code",[t._v("campus_account")]),t._v("重复")]),t._v(" "),s("h5",{attrs:{id:"原因分析"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#原因分析"}},[t._v("#")]),t._v(" 原因分析")]),t._v(" "),s("p",[t._v("数据库在从阿里云同步到华为云时先同步了tiny_id_info表，而user表数据较大，同步较慢，且此时会有新用户数据写入，所以阿里云中tinyid会增长，而tiny_id_info表已经同步完成，华为云中tiny_id_info表的"),s("code",[t._v("max_id")]),t._v("值已经固定，所以在生成tinyid时会出现重复的问题。")]),t._v(" "),s("h6",{attrs:{id:"阿里云数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#阿里云数据"}},[t._v("#")]),t._v(" 阿里云数据")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yonglone/PicHub/raw/master/image-20211117155543383.png",alt:"image-20211117155543383"}})]),t._v(" "),s("h6",{attrs:{id:"华为云数据"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#华为云数据"}},[t._v("#")]),t._v(" 华为云数据")]),t._v(" "),s("p",[s("img",{attrs:{src:"https://gitee.com/yonglone/PicHub/raw/master/image-20211117155709836.png",alt:"image-20211117155709836"}})]),t._v(" "),s("h5",{attrs:{id:"解决方法"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[t._v("#")]),t._v(" 解决方法")]),t._v(" "),s("p",[t._v("直接将华为云中"),s("code",[t._v("max_id")]),t._v("增加10000。然后重启tinyid项目，由于id是成段获取并保存在内存中，所以需要重启项目")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" tiny_id_info "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("set")]),t._v(" max_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" max_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("10000")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("where")]),t._v(" biz_type "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2111")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h3",{attrs:{id:"charles抓包过滤"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#charles抓包过滤"}},[t._v("#")]),t._v(" Charles抓包过滤")]),t._v(" "),s("blockquote",[s("p",[t._v('"Proxy"->"Recording Settings"->"Include 栏->"Add"')])]),t._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[t._v("*.campushoy.cn\n*.campushoy.com\n*.campushoytest.com\n")])])]),s("h2",{attrs:{id:"learn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[t._v("#")]),t._v(" learn")]),t._v(" "),s("h3",{attrs:{id:"每日一题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[t._v("#")]),t._v(" 每日一题")])])}),[],!1,null,null,null);a.default=e.exports}}]);
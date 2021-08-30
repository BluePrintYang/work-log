(window.webpackJsonp=window.webpackJsonp||[]).push([[85],{443:function(s,t,a){"use strict";a.r(t);var e=a(44),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[s._v("#")]),s._v(" problem")]),s._v(" "),a("h3",{attrs:{id:"sql执行慢"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql执行慢"}},[s._v("#")]),s._v(" SQL执行慢")]),s._v(" "),a("p",[s._v("复制表的时候，没有创建索引")]),s._v(" "),a("h2",{attrs:{id:"learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[s._v("#")]),s._v(" learn")]),s._v(" "),a("h3",{attrs:{id:"sql优化"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#sql优化"}},[s._v("#")]),s._v(" "),a("a",{attrs:{href:"https://www.changchenghao.cn/n/174426.html",target:"_blank",rel:"noopener noreferrer"}},[s._v("SQL优化"),a("OutboundLink")],1)]),s._v(" "),a("h4",{attrs:{id:"区分in和exists、not-in和not-exists"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#区分in和exists、not-in和not-exists"}},[s._v("#")]),s._v(" "),a("strong",[s._v("区分in和exists、not in和not exists")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表A "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("上面SQL语句相当于")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表A "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("exists")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" 表B "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" 表B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v("表A"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("区分in和exists主要是造成了驱动顺序的改变（这是性能变化的关键），如果是exists，那么以外层表为驱动表，先被访问，如果是IN，那么先执行子查询。所以"),a("strong",[s._v("IN适合于外表大而内表小")]),s._v("的情况；"),a("strong",[s._v("EXISTS适合于外表小而内表大")]),s._v("的情况。")]),s._v(" "),a("p",[s._v("关于not in和not exists，推荐使用not exists，不仅仅是效率问题，not in可能存在逻辑问题。")]),s._v(" "),a("p",[s._v("原SQL语句：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" colname … "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" A表 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("in")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" B表"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])]),a("p",[s._v("高效的SQL语句：")]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("select")]),s._v(" colname … "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" A表 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("Left")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("join")]),s._v(" B表 "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("on")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" a"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" b"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(".")]),s._v("id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v("\n")])])]),a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[s._v("#")]),s._v(" log")]),s._v(" "),a("ol",[a("li",[s._v("修改Collection模块SQL语句")]),s._v(" "),a("li",[s._v("创建索引优化SQL查询速度")]),s._v(" "),a("li",[s._v("学习SQL优化")])])])}),[],!1,null,null,null);t.default=r.exports}}]);
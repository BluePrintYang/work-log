(window.webpackJsonp=window.webpackJsonp||[]).push([[279],{683:function(t,s,a){"use strict";a.r(s);var r=a(56),e=Object(r.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),a("ol",[a("li",[t._v("评审点赞评论表")]),t._v(" "),a("li",[t._v("评审私聊")])]),t._v(" "),a("p",[t._v("宁大校级号不展示问题")]),t._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v("GET /v7/api/campus/account/listAccountList?filter=SCHOOL&pageSize=20&keyword=&pageNum=1&oick=65ea2a9d HTTP/1.1\n")])])]),a("p",[t._v("校级号名称包含'测试'两个字，被过滤了")]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("SELECT")]),t._v("\n\t\t\tt_campus_account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t\t\tIFNULL"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t_campus_account_hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("AS")]),t._v(" hot\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("FROM")]),t._v(" t_campus_account\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEFT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_campus_account_hot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" t_campus_account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" t_campus_account_hot"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account_id\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v("\n\t\t\taccount_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ENABLE"')]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" delete_flag "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" open_status "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" org_type "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("!=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("4")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" instr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t_campus_account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'测试'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("  "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 过滤测试")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"accountIdList != null and accountIdList.size() >0 "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" t_campus_account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("account_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("foreach collection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"accountIdList"')]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"accountId"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"("')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('")"')]),t._v(" separator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{accountId}")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("foreach"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"accountWidList != null and accountWidList.size() >0 "')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" t_campus_account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("wid "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("IN")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),t._v("foreach collection"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"accountWidList"')]),t._v(" item"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"wid"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("open")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"("')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("close")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('")"')]),t._v(" separator"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('","')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{wid}")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),t._v("foreach"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" test"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("\"keyword != null and keyword!= '' \"")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" instr"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("t_campus_account"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("name"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{keyword})")]),t._v("\n                          "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("<")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("/")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(">")]),t._v("\n                          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" hot "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("create_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v("\n                          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LIMIT")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("#{pageStart}, #{pageSize}")]),t._v("\n")])])]),a("ol",{attrs:{start:"3"}},[a("li",[t._v("评审消息表结构")])]),t._v(" "),a("h2",{attrs:{id:"learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[t._v("#")]),t._v(" learn")]),t._v(" "),a("h3",{attrs:{id:"每日一题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[t._v("#")]),t._v(" 每日一题")])])}),[],!1,null,null,null);s.default=e.exports}}]);
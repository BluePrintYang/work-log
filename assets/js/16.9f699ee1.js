(window.webpackJsonp=window.webpackJsonp||[]).push([[16],{378:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"undo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undo"}},[t._v("#")]),t._v(" undo")]),t._v(" "),a("ul",[a("li",[t._v("[ ] 数据库表设计")])]),t._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" t_activity_score\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n    id          "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto_increment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主键id'")]),t._v("\n        "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    activity_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'活动id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    user_id     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    avatar      "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                        "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户头像'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    user_name   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户昵称'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    rest_score  "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("                                 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'剩余积分'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    tenant_id   "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("                         "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'租户id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    deleted     "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v("       "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("                 "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'是否删除 0-否 1-是'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    create_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'创建时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    update_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("on")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("update")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'更新时间'")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'活动积分表'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("create")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("table")]),t._v(" t_activity_score_detail\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("\n\tid "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("auto_increment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'主键id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tuser_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'用户id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tactivity_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'活动id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tbiz_id "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("50")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'活动下引起积分变化的业务id'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tscore_num "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'积分变化数量，加为正数，减为负数'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("`")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("varchar")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("255")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'积分变化事件描述'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tcreate_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("current_timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'创建时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tupdate_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("current_timestamp")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("UPDATE")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("CURRENT_TIMESTAMP")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'更新时间'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\tdeleted "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("int")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("default")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("null")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'是否删除 0-否 1-是'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("constraint")]),t._v(" t_activity_score_detail_pk\n\t\t"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("primary")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("key")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("comment")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v("'积分明细表'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n\n\n")])])]),a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),a("ol",[a("li",[t._v("积分模块接口实现\n"),a("ol",[a("li",[t._v("查询用户积分")]),t._v(" "),a("li",[t._v("添加积分")])])])])])}),[],!1,null,null,null);s.default=e.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{421:function(s,t,a){"use strict";a.r(t);var e=a(44),r=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[s._v("#")]),s._v(" log")]),s._v(" "),a("ol",[a("li",[s._v("查积分明细，拉表")]),s._v(" "),a("li",[s._v("oss问题处理")]),s._v(" "),a("li",[s._v("现场今日校园服务栏目配置")]),s._v(" "),a("li",[s._v("思政云会议，准备预研")]),s._v(" "),a("li",[s._v("积分补偿")])]),s._v(" "),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查第二期排行榜")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_activity_score_rank "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" activity_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yxhd0831'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" week2_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" week2_score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 查第一期排行榜")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_activity_score_rank "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" activity_id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yxhd0831'")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" week1_score "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("is")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("not")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token boolean"}},[s._v("null")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" week1_score "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("desc")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 第二期积分增长明细")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\n\tt_activity_score_detail\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\n\tuser_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2c109381-aa86-4627-9d32-1fe35b93bea9'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" score_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" activity_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yxhd0831'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" create_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2021-09-08 00:00:00'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\n\tcreate_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\t\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 第二期通过点赞评论获取积分的用户")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n\tuser_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(",")]),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("count")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("score_num"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\n\tt_activity_score_detail\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\n\t score_num "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" activity_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yxhd0831'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" create_time "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2021-09-08 00:00:00'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("and")]),s._v(" description "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'动态被点赞/评论'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("GROUP")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v(" user_id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 根据id查用户所有积分明细")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\n\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("FROM")]),s._v("\n\tt_activity_score_detail\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("WHERE")]),s._v("\n\tuser_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'01c5fe18-0d46-4546-ba82-267a37502ff8'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("AND")]),s._v(" activity_id "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'yxhd0831'")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("ORDER")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("BY")]),s._v("\n\tcreate_time "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("DESC")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n")])])]),a("div",{staticClass:"language-sql extra-class"},[a("pre",{pre:!0,attrs:{class:"language-sql"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- 学号查用户信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_cpdaily_users "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" open_Id"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'2006191010'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[s._v("-- id查用户信息")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("SELECT")]),s._v("\t"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("*")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("from")]),s._v(" t_cpdaily_users "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("where")]),s._v(" wid"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("=")]),a("span",{pre:!0,attrs:{class:"token string"}},[s._v("'975dae79-009a-439b-8662-001c80f4a45c'")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(";")]),s._v("\n\n")])])]),a("h3",{attrs:{id:"oss"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oss"}},[s._v("#")]),s._v(" oss")]),s._v(" "),a("p",[s._v("cookie set 域名的时候不加"),a("code",[s._v(".")]),s._v("就可以了，"),a("code",[s._v(".campushoytest.com")]),s._v("改为"),a("code",[s._v("campushoytest.com")])]),s._v(" "),a("h2",{attrs:{id:"undo"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#undo"}},[s._v("#")]),s._v(" undo")]),s._v(" "),a("ul",[a("li",[s._v("[x] oss问题处理")]),s._v(" "),a("li",[s._v("[x] 积分补偿")]),s._v(" "),a("li",[s._v("[ ] BUG 3个")]),s._v(" "),a("li",[s._v("[ ] 思政预研")])]),s._v(" "),a("h2",{attrs:{id:"problem"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#problem"}},[s._v("#")]),s._v(" problem")]),s._v(" "),a("h3",{attrs:{id:"cookie设置域名的问题域名"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#cookie设置域名的问题域名"}},[s._v("#")]),s._v(" cookie设置域名的问题域名")]),s._v(" "),a("p",[s._v("报错")]),s._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[s._v("java.lang.IllegalArgumentException: An invalid domain "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v(".test.com"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" was specified "),a("span",{pre:!0,attrs:{class:"token keyword"}},[s._v("for")]),s._v(" this cookie\n")])])]),a("blockquote",[a("p",[s._v("cookie set 域名的时候不加"),a("code",[s._v(".")]),s._v("就可以了，"),a("code",[s._v(".campushoytest.com")]),s._v("改为"),a("code",[s._v("campushoytest.com")])])]),s._v(" "),a("h3",{attrs:{id:"积分出现少加的情况"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#积分出现少加的情况"}},[s._v("#")]),s._v(" 积分出现少加的情况")]),s._v(" "),a("h4",{attrs:{id:"原因"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#原因"}},[s._v("#")]),s._v(" 原因")]),s._v(" "),a("blockquote",[a("p",[s._v("0点更新排行榜（数据库）时，数据库写操作太多，与用户增加积分争抢数据库连接，导致积分增加失败")])]),s._v(" "),a("h4",{attrs:{id:"解决方法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#解决方法"}},[s._v("#")]),s._v(" 解决方法")]),s._v(" "),a("ol",[a("li",[s._v("此操作次数较少，可更改定时任务执行时间，用户少的时候执行")]),s._v(" "),a("li",[s._v("[写操作改为批量执行]("),a("a",{attrs:{href:"https://blog.csdn.net/u010253246/article/details/115752049",target:"_blank",rel:"noopener noreferrer"}},[s._v("Mybatis 三种批量插入数据 方式_FH-Admin的博客-CSDN博客_mybatis 批量插入"),a("OutboundLink")],1),s._v(")")])]),s._v(" "),a("h4",{attrs:{id:"补偿方案"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#补偿方案"}},[s._v("#")]),s._v(" 补偿方案")]),s._v(" "),a("blockquote",[a("p",[s._v("通过读临时表，调用积分增加接口去补偿积分")])]),s._v(" "),a("h2",{attrs:{id:"learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[s._v("#")]),s._v(" learn")])])}),[],!1,null,null,null);t.default=r.exports}}]);
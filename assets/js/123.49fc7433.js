(window.webpackJsonp=window.webpackJsonp||[]).push([[123],{479:function(t,a,s){"use strict";s.r(a);var e=s(44),r=Object(e.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),s("h3",{attrs:{id:"华为云问题记录"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#华为云问题记录"}},[t._v("#")]),t._v(" 华为云问题记录")]),t._v(" "),s("h4",{attrs:{id:"message-provider"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-provider"}},[t._v("#")]),t._v(" message-provider")]),t._v(" "),s("p",[t._v("CpdailyPushService:savePushResult")]),t._v(" "),s("blockquote",[s("p",[t._v("极光app_key失效 （无需处理）")])]),t._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[t._v('"The app_key is not allowed for this api"\nRequest is forbidden! Maybe your appkey is listed in blacklist or your params is invalid\n')])])]),s("p",[t._v("GeTuiService:addGeTuiBind -> 慢")]),t._v(" "),s("h4",{attrs:{id:"message-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message-api"}},[t._v("#")]),t._v(" message-api")]),t._v(" "),s("ol",[s("li",[t._v("/v7/message/innerMsg/list -> Failed to invoke the method getMasterAuthInfo")]),t._v(" "),s("li",[t._v("/v6/message/push/bind-ge-tui  -> Failed to invoke the method addGeTuiBind")])]),t._v(" "),s("blockquote",[s("p",[t._v("慢且会报错，dubbo调用失败")])]),t._v(" "),s("h4",{attrs:{id:"info"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#info"}},[t._v("#")]),t._v(" info")]),t._v(" "),s("p",[t._v("AnswerApiService:listAnswerOneByProblem -> 慢")]),t._v(" "),s("p",[t._v("ProblemService:listProblemDTOS -> 慢")]),t._v(" "),s("h4",{attrs:{id:"message"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#message"}},[t._v("#")]),t._v(" message")]),t._v(" "),s("p",[t._v("/v7/message/api/redDot/getUserRedDot -> 慢")]),t._v(" "),s("h4",{attrs:{id:"wec-cpdaily-content-api"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#wec-cpdaily-content-api"}},[t._v("#")]),t._v(" wec-cpdaily-content-api")]),t._v(" "),s("p",[t._v("/v9/content/fresh/list-first-page-top/v-9012 -> Invoke remote method timeout. method: listAccountFollowStatus")]),t._v(" "),s("h4",{attrs:{id:"oauth"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#oauth"}},[t._v("#")]),t._v(" oauth")]),t._v(" "),s("p",[t._v("/connect/qrcode/validation/MWJCQWJiN1YxNjM3NjM2NDc4 -> 慢")]),t._v(" "),s("h4",{attrs:{id:"authentication"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#authentication"}},[t._v("#")]),t._v(" authentication")]),t._v(" "),s("p",[t._v("/v6/auth/authentication/new/validation -> 报错")]),t._v(" "),s("h2",{attrs:{id:"learn"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[t._v("#")]),t._v(" learn")]),t._v(" "),s("h3",{attrs:{id:"每日一题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[t._v("#")]),t._v(" 每日一题")]),t._v(" "),s("p",[t._v("POST /api/account/activity/info/hotList HTTP/1.1")]),t._v(" "),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t_activity act "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_activity_campus_account campus "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" campus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_code\n            "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" campus"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("tenant_id "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[t._v("'1020236217699686'")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEFT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_activity_action_signup su "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" su"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_code\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_classify "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start_time "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_time "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v("\n")])])]),s("div",{staticClass:"language-sql extra-class"},[s("pre",{pre:!0,attrs:{class:"language-sql"}},[s("code",[s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("select")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" t_activity act \n"),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("LEFT")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("JOIN")]),t._v(" t_activity_action_signup su "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ON")]),t._v(" su"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_code "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_code\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("WHERE")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("state "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("2")]),t._v(" \n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("recommend_platform "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("1")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("AND")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("activity_classify "),s("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v("\n        "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("ORDER")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("BY")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("start_time "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" act"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("create_time "),s("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("DESC")]),t._v("\n")])])]),s("p",[t._v('invoke com.wisedu.wec.cpdaily.message.provider.api.service.CpdailyInnerMsgPersonService.listInnerMsgPerson("50629cef-b416-422e-b3be-bab12890c965",1637404736553)')])])}),[],!1,null,null,null);a.default=r.exports}}]);
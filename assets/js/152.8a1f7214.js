(window.webpackJsonp=window.webpackJsonp||[]).push([[152],{515:function(t,s,a){"use strict";a.r(s);var n=a(44),e=Object(n.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h2",{attrs:{id:"log"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),a("p",[t._v("转移存在的问题")]),t._v(" "),a("p",[t._v("JOB类型")]),t._v(" "),a("p",[t._v("企业号才有")]),t._v(" "),a("p",[t._v("忽略")]),t._v(" "),a("p",[t._v("新：2e308554-acd3-4635-ab90-c8e86162825a")]),t._v(" "),a("p",[t._v("旧：c4b67cab-892a-4a72-a8d4-0727a2fe1549")]),t._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制内容")]),t._v("\ninvoke com.wisedu.wec.cpdaily.content.provider.api.service.fresh.FreshWriteService.copyFresh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c4b67cab-892a-4a72-a8d4-0727a2fe1549"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2e308554-acd3-4635-ab90-c8e86162825a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# 复制粉丝")]),t._v("\ninvoke com.wisedu.wec.cpdaily.user.dubbo.service.CpdailyFansPersonWriteService.copyFans"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"c4b67cab-892a-4a72-a8d4-0727a2fe1549"')]),t._v(","),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"2e308554-acd3-4635-ab90-c8e86162825a"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"atUsers":[],"audioAddr":"","audioName":"","content":"<p>管控台发送文章</p>","contentSrcType":"ORIGINAL","createUserId":"2e308554-acd3-4635-ab90-c8e86162825a","createUserType":"MEDIA","freshCrossTalk":[],"freshResourceType":"ARTICLE","growthDTOS":[],"hasMq":true,"img":"https://cpdaily-resource.oss-cn-hangzhou.aliyuncs.com/web/200748510/bcomm0/fcomm0/2021/efE2G2QhHs_x168_x180_x28322_x.png","infoId":"FRESH_3168efd7-39b6-4ea0-ab16-904a791def75","localUrl":"https://news.campushoy.com/info/resource/1020526561403181/2021-12-21/399bdba7-4e87-4c03-a801-e48544fbea9a.html","originalAuthor":"cbc23dcc-ae4e-4af7-941b-ba565952c268","readNum":0,"resourceId":"399bdba7-4e87-4c03-a801-e48544fbea9a","resourceTitle":"管控台发送文章","rewardCoin":0,"summary":"管控台发送文章","tag":"节日","targetFans":"1","targetMember":"1","targets":[{"targetId":"ALL","targetName":"全部用户","targetType":1,"targetTypeEnum":"ALL"}],"taskId":"19b6bdd9-2ade-454c-821b-237156560962","tenantId":"1020526561403181","videoAddr":"","videoCover":"","videoName":""}\n')])])]),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[t._v('{"atUsers":[],"content":"管控台发送图文","createTime":1640067375356,"createUserId":"2e308554-acd3-4635-ab90-c8e86162825a","createUserType":"MEDIA","freshCrossTalk":[],"freshId":"FRESH_42315cc6-6689-41c3-9fa7-de1bb9bdc972","freshResourceType":"GRAPHIC","growthDTOS":[],"hasMq":true,"img":"https://cpdaily-resource.oss-cn-hangzhou.aliyuncs.com/web/200748510/t0/d/2021/Jxp32FmhP5_x168_x180_x28322_x.png","rewardCoin":0,"taskId":"6bf9823d-f1a1-462a-ac47-698de0501a00","tenantId":"1020526561403181"}\n')])])]),a("h3",{attrs:{id:"困扰很久的问题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#困扰很久的问题"}},[t._v("#")]),t._v(" 困扰很久的问题")]),t._v(" "),a("p",[t._v("文章定时发布总是失败")]),t._v(" "),a("p",[t._v("定时任务失败原因")]),t._v(" "),a("p",[t._v("插入数据库时，主键重复")]),t._v(" "),a("p",[t._v("resourceId也是UUID")]),t._v(" "),a("div",{staticClass:"language-java extra-class"},[a("pre",{pre:!0,attrs:{class:"language-java"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("if")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Objects")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("equals")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accountFresh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFreshType")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ResourceTypeEnum")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("ARTICLE"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getValue")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PublishNewArticleFreshReq")]),t._v(" publishFreshBaseReq "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CpdailyJsonUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("fromJson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accountFresh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getFreshInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("   \t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t\t"),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("PublishNewArticleFreshReq")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("class")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    publishFreshBaseReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setCreateUserId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("newAccountId"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    publishFreshBaseReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTenantId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("accountDTO"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getTenantId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// 3个uuid")]),t._v("\n    publishFreshBaseReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setInfoId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"FRESH_"')]),t._v(" "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("+")]),t._v(" UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomUUID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    publishFreshBaseReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setTaskId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomUUID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    publishFreshBaseReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setResourceId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("UUID"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("randomUUID")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toString")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    \n    accountFresh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFreshInfo")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("CpdailyJsonUtils")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("toJson")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publishFreshBaseReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n    accountFresh"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("setFreshId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("publishFreshBaseReq"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("getInfoId")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("h2",{attrs:{id:"learn"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#learn"}},[t._v("#")]),t._v(" learn")]),t._v(" "),a("h3",{attrs:{id:"每日一题"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#每日一题"}},[t._v("#")]),t._v(" 每日一题")])])}),[],!1,null,null,null);s.default=e.exports}}]);
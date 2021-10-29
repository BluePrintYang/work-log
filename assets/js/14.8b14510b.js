(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{377:function(t,a,s){"use strict";s.r(a);var _=s(44),v=Object(_.a)({},(function(){var t=this,a=t.$createElement,s=t._self._c||a;return s("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[s("h2",{attrs:{id:"undo"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#undo"}},[t._v("#")]),t._v(" undo")]),t._v(" "),s("ul",[s("li",[t._v("[x] 技术方案设计")])]),t._v(" "),s("h2",{attrs:{id:"技术方案设计"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#技术方案设计"}},[t._v("#")]),t._v(" 技术方案设计")]),t._v(" "),s("h3",{attrs:{id:"任务模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#任务模块"}},[t._v("#")]),t._v(" 任务模块")]),t._v(" "),s("ol",[s("li",[t._v("沿用之前的任务数据库表，包括以下\n"),s("ol",[s("li",[t._v("t_biz_task(业务场景的任务配置表)")]),t._v(" "),s("li",[t._v("t_task(任务规则明细表)")]),t._v(" "),s("li",[t._v("t_user_task(用户领取任务表)")]),t._v(" "),s("li",[t._v("t_user_task_log(任务日志表)")])])]),t._v(" "),s("li",[t._v("任务类型对应"),s("code",[t._v("t_task")]),t._v("表中任务编号"),s("code",[t._v("code")]),t._v("字段")]),t._v(" "),s("li",[t._v("积分对应"),s("code",[t._v("t_task")]),t._v("表中奖励"),s("code",[t._v("prizes")]),t._v("字段，直接保存积分数量")]),t._v(" "),s("li",[t._v("所属场景？难度？")])]),t._v(" "),s("h3",{attrs:{id:"积分模块"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#积分模块"}},[t._v("#")]),t._v(" 积分模块")]),t._v(" "),s("h4",{attrs:{id:"核心逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#核心逻辑"}},[t._v("#")]),t._v(" 核心逻辑")]),t._v(" "),s("ol",[s("li",[t._v("任务获得积分      签到包含在任务里？")]),t._v(" "),s("li",[t._v("兑换奖品消耗积分")]),t._v(" "),s("li",[t._v("积分明细查询积分（获取和消耗记录）")]),t._v(" "),s("li",[t._v("积分榜单，全国榜，校内榜")])]),t._v(" "),s("h4",{attrs:{id:"接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口"}},[t._v("#")]),t._v(" 接口")]),t._v(" "),s("ol",[s("li",[t._v("查询用户积分  user_id，activity_id（活动id）    剩余积分")]),t._v(" "),s("li",[t._v("增加积分 user_id、num、biz_id（活动id+任务id）")]),t._v(" "),s("li",[t._v("减少积分  调用增加积分，num=-num，biz_id为活动id+奖品id")]),t._v(" "),s("li",[t._v("查询积分明细")]),t._v(" "),s("li",[t._v("查询积分排行榜 mongodb？  获取的总积分（包括已消耗）")])]),t._v(" "),s("div",{staticClass:"language-java extra-class"},[s("pre",{pre:!0,attrs:{class:"language-java"}},[s("code",[s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 查询用户剩余积分\n *\n * @param userId 用户id\n * @param actId  活动id\n * @return score list\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("UserScoreDTO")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryUserScore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" actId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 增加积分\n *\n * @param userId 用户id\n * @param num    增加数量\n * @param bizId  活动id+任务id(业务id)\n * @return boolean\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("addScore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" bizId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 减少积分\n *\n * @param userId 用户id\n * @param num    增加数量\n * @param bizId  活动id+任务id(业务id)\n * @return boolean\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Boolean")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("cutScore")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Integer")]),t._v(" num"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" bizId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 查询积分明细\n * @param userId 用户id\n * @param actId 活动id\n * @return detail list\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScoreDetailDTO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryScoreDetail")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" actId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[t._v("/**\n * 查询积分排行榜\n * @param userId 用户id\n * @param actId 活动id\n * @param rankType 排行榜类型 （全国/校内）\n * @return rank list\n */")]),t._v("\n"),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("List")]),s("span",{pre:!0,attrs:{class:"token generics"}},[s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("<")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("ScoreRankDTO")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(">")])]),t._v(" "),s("span",{pre:!0,attrs:{class:"token function"}},[t._v("queryScoreRank")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" userId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" actId"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),s("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("String")]),t._v(" rankType"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v("\n")])])]),s("h4",{attrs:{id:"数据库表结构"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#数据库表结构"}},[t._v("#")]),t._v(" 数据库表结构")]),t._v(" "),s("h5",{attrs:{id:"积分表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#积分表"}},[t._v("#")]),t._v(" 积分表")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("id")]),t._v(" "),s("th",[t._v("activity_id")]),t._v(" "),s("th",[t._v("user_id")]),t._v(" "),s("th",[t._v("tenant_id")]),t._v(" "),s("th",[t._v("rest_score")]),t._v(" "),s("th",[t._v("create_time")]),t._v(" "),s("th",[t._v("update_time")]),t._v(" "),s("th",[t._v("deleted")])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("租户id")]),t._v(" "),s("td",[t._v("剩余积分")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("h5",{attrs:{id:"积分明细表"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#积分明细表"}},[t._v("#")]),t._v(" 积分明细表")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("id")]),t._v(" "),s("th",[t._v("activity_id")]),t._v(" "),s("th",[t._v("biz_id")]),t._v(" "),s("th",[t._v("user_id")]),t._v(" "),s("th",[t._v("score_num")]),t._v(" "),s("th",[t._v("change_desc")]),t._v(" "),s("th",[t._v("create_time")]),t._v(" "),s("th",[t._v("update_time")]),t._v(" "),s("th",[t._v("deleted")])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("加为+减为-")]),t._v(" "),s("td",[t._v("积分变化的原因")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("h5",{attrs:{id:"积分排行榜"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#积分排行榜"}},[t._v("#")]),t._v(" 积分排行榜")]),t._v(" "),s("table",[s("thead",[s("tr",[s("th",[t._v("id")]),t._v(" "),s("th",[t._v("user_id")]),t._v(" "),s("th",[t._v("tenant_id")]),t._v(" "),s("th",[t._v("real_score")]),t._v(" "),s("th",[t._v("week_start")]),t._v(" "),s("th",[t._v("last_score")]),t._v(" "),s("th",[t._v("last_rank")]),t._v(" "),s("th",[t._v("create_time")]),t._v(" "),s("th",[t._v("update_time")]),t._v(" "),s("th",[t._v("deleted")])])]),t._v(" "),s("tbody",[s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td",[t._v("租户id")]),t._v(" "),s("td",[t._v("本周积分")]),t._v(" "),s("td",[t._v("本期排行榜周起始时间点")]),t._v(" "),s("td",[t._v("上期分数")]),t._v(" "),s("td",[t._v("上期排名")]),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")]),t._v(" "),s("tr",[s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td"),t._v(" "),s("td")])])]),t._v(" "),s("h4",{attrs:{id:"接口逻辑"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#接口逻辑"}},[t._v("#")]),t._v(" 接口逻辑")]),t._v(" "),s("h5",{attrs:{id:"查询用户积分接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#查询用户积分接口"}},[t._v("#")]),t._v(" 查询用户积分接口")]),t._v(" "),s("p",[t._v("根据"),s("strong",[t._v("用户id")]),t._v("以及"),s("strong",[t._v("活动id")]),t._v("，查询积分表")]),t._v(" "),s("h5",{attrs:{id:"增加积分接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#增加积分接口"}},[t._v("#")]),t._v(" 增加积分接口")]),t._v(" "),s("p",[t._v("传入"),s("strong",[t._v("用户id")]),t._v("，"),s("strong",[t._v("积分数量")]),t._v("，"),s("strong",[t._v("事件")]),t._v("，更新三张表，保证原子性")]),t._v(" "),s("h5",{attrs:{id:"减少积分接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#减少积分接口"}},[t._v("#")]),t._v(" 减少积分接口")]),t._v(" "),s("p",[t._v("同增加积分，但无需更新积分排行榜表，只需扣除积分表数据以及记录积分明细表")]),t._v(" "),s("h5",{attrs:{id:"积分明细接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#积分明细接口"}},[t._v("#")]),t._v(" 积分明细接口")]),t._v(" "),s("p",[t._v("根据"),s("strong",[t._v("用户id")]),t._v("，"),s("strong",[t._v("活动id")]),t._v("查询该用户所有积分变化情况数据，包括积分增减数量，积分变化原因，时间")]),t._v(" "),s("h5",{attrs:{id:"排行榜接口"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#排行榜接口"}},[t._v("#")]),t._v(" 排行榜接口")]),t._v(" "),s("h6",{attrs:{id:"mysql方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#mysql方案"}},[t._v("#")]),t._v(" MySQL方案")]),t._v(" "),s("blockquote",[s("p",[t._v("排行榜以周为单位，数据库存储周起始日的时间点，获取排行榜时，分以下几种情况")])]),t._v(" "),s("ol",[s("li",[t._v("数据库无数据\n"),s("ol",[s("li",[t._v("无数据-----\x3e暂无榜单")])])]),t._v(" "),s("li",[t._v("数据库有数据\n"),s("ol",[s("li",[t._v("有总积分无上周积分（第一期）\n"),s("ol",[s("li",[t._v("当前时间点与"),s("code",[t._v("活动起始时间点")]),t._v("不到一周-----\x3e上期榜单无数据，根据本周积分排行并返回")]),t._v(" "),s("li",[t._v("当前时间点与"),s("code",[t._v("活动起始时间点")]),t._v("达到一周-----\x3e获取"),s("code",[t._v("活动起始时间点")]),t._v("一周范围的积分明细数据（过滤消耗积分），更新上周积分，排行，周起始时间到数据库中并返回")])])]),t._v(" "),s("li",[t._v("有总积分有上周积分（往后每期）\n"),s("ol",[s("li",[t._v("当前时间点与"),s("code",[t._v("数据库周起始时间点")]),t._v("不到一周-----\x3e返回数据库数据")]),t._v(" "),s("li",[t._v("当前时间点与"),s("code",[t._v("数据库周起始时间点")]),t._v("达到一周-----\x3e获取"),s("code",[t._v("数据库周起始时间点")]),t._v("一周范围的积分明细数据（过滤消耗积分），更新上周积分，排行，周起始时间到数据库中并返回")])])])])])]),t._v(" "),s("p",[t._v("问题")]),t._v(" "),s("ol",[s("li",[t._v("MySQL压力？")]),t._v(" "),s("li",[t._v("上周之前的数据丢失，只能通过积分明细表恢复")])]),t._v(" "),s("h6",{attrs:{id:"redis方案"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#redis方案"}},[t._v("#")]),t._v(" redis方案")]),t._v(" "),s("p",[t._v("zset")]),t._v(" "),s("p",[t._v("rank:activity_id:20210720")]),t._v(" "),s("h3",{attrs:{id:"其他问题"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#其他问题"}},[t._v("#")]),t._v(" 其他问题")]),t._v(" "),s("p",[t._v("签到小红点，数据库查询签到记录？")]),t._v(" "),s("h2",{attrs:{id:"log"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#log"}},[t._v("#")]),t._v(" log")]),t._v(" "),s("ol",[s("li",[t._v("开学季活动方案讨论与方案设计")]),t._v(" "),s("li",[t._v("积分模块接口设计，数据库设计")])])])}),[],!1,null,null,null);a.default=v.exports}}]);
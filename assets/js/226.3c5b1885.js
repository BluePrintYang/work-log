(window.webpackJsonp=window.webpackJsonp||[]).push([[226],{584:function(_,v,t){"use strict";t.r(v);var d=t(44),r=Object(d.a)({},(function(){var _=this,v=_.$createElement,t=_._self._c||v;return t("ContentSlotsDistributor",{attrs:{"slot-key":_.$parent.slotKey}},[t("h2",{attrs:{id:"_9-2-0-新版今日校园"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#_9-2-0-新版今日校园"}},[_._v("#")]),_._v(" 9.2.0——新版今日校园")]),_._v(" "),t("h3",{attrs:{id:"需求列表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#需求列表"}},[_._v("#")]),_._v(" 需求列表")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("一级模块")]),_._v(" "),t("th",[_._v("二级模块")]),_._v(" "),t("th",[_._v("需求明细")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("大学圈")]),_._v(" "),t("td",[_._v("评论及评论回复")]),_._v(" "),t("td",[_._v("1.at功能； 2.表情功能； 3.发布功能； 4.评论展示列表；")])]),_._v(" "),t("tr",[t("td"),_._v(" "),t("td",[_._v("评论列表")]),_._v(" "),t("td",[_._v("1.获取评论列表； 2.点赞、取消点赞； 3.点赞的统计")])]),_._v(" "),t("tr",[t("td"),_._v(" "),t("td",[_._v("评论更多操作")]),_._v(" "),t("td",[_._v("1.复制； 2.举报（举报已经单独评了，此处就不在评审时间了） 3.拉黑；")])]),_._v(" "),t("tr",[t("td",[_._v("举报")]),_._v(" "),t("td",[_._v("内容举报")]),_._v(" "),t("td",[_._v("图片和视频要上传到华为云；")])]),_._v(" "),t("tr",[t("td"),_._v(" "),t("td",[_._v("问答举报")]),_._v(" "),t("td",[_._v("图片和视频要上传到华为云；")])]),_._v(" "),t("tr",[t("td"),_._v(" "),t("td",[_._v("举报管控台")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("服务端基础底层")]),_._v(" "),t("td",[_._v("评论微服务、点赞微服务、收藏微服务")]),_._v(" "),t("td")])])]),_._v(" "),t("h3",{attrs:{id:"评论中心-逻辑梳理"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#评论中心-逻辑梳理"}},[_._v("#")]),_._v(" 评论中心 逻辑梳理")]),_._v(" "),t("h4",{attrs:{id:"现有版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#现有版本"}},[_._v("#")]),_._v(" 现有版本")]),_._v(" "),t("h5",{attrs:{id:"t-cpdaily-comment-评论表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#t-cpdaily-comment-评论表"}},[_._v("#")]),_._v(" t_cpdaily_comment  评论表")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("COLUMN_NAME")]),_._v(" "),t("th"),_._v(" "),t("th",[_._v("COLUMN_COMMENT")]),_._v(" "),t("th",[_._v("COLUMN_DEFAULT")]),_._v(" "),t("th",[_._v("COLUMN_TYPE")]),_._v(" "),t("th",[_._v("IS_NULLABLE")]),_._v(" "),t("th",[_._v("COLUMN_KEY")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("comment_id")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("评论id")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(50)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td",[_._v("PRI")])]),_._v(" "),t("tr",[t("td",[_._v("content")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("评论内容")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(5120)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("img_urls")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("评论的图片")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(1024)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("video_urls")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("评论的视频（目前不存在）")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(1024)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("create_user_id")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("发布人用户id")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(50)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td",[_._v("MUL")])]),_._v(" "),t("tr",[t("td",[_._v("tenant_id")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("租户编号")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(50)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("create_time")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("评论时间")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("timestamp")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("like_num")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("点赞数")]),_._v(" "),t("td",[_._v("0")]),_._v(" "),t("td",[_._v("int(11)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("comment_num")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("被回复数")]),_._v(" "),t("td",[_._v("0")]),_._v(" "),t("td",[_._v("int(11)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("biz_id")]),_._v(" "),t("td",[_._v("√")]),_._v(" "),t("td",[_._v("业务标识(动态id,文章id等)")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(60)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td",[_._v("MUL")])]),_._v(" "),t("tr",[t("td",[_._v("reply_comment_id")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("回复评论id")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(60)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td",[_._v("MUL")])]),_._v(" "),t("tr",[t("td",[_._v("reply_user_id")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("评论新鲜事时：取新鲜事创建者id 回复评论时：取评论创建者id")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(36)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td",[_._v("MUL")])]),_._v(" "),t("tr",[t("td",[_._v("delete_type")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("是否已删除 0 未删除 1删除")]),_._v(" "),t("td",[_._v("0")]),_._v(" "),t("td",[_._v("int(11)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("update_time")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("更新时间")]),_._v(" "),t("td",[_._v("CURRENT_TIMESTAMP")]),_._v(" "),t("td",[_._v("timestamp")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td",[_._v("MUL")])]),_._v(" "),t("tr",[t("td",[_._v("time_value")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("排序号")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("bigint(20)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td",[_._v("MUL")])]),_._v(" "),t("tr",[t("td",[_._v("source_type")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("评论来源，例如 同学圈CIRCLE,资讯INFO,今日淘TAO 可以理解为业务类型")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(20)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("has_hot")]),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td",[_._v("0")]),_._v(" "),t("td",[_._v("tinyint(4)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("CREATE_USER_TYPE")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("发布人类型 USER用户 MEDIA 媒体号 APP 应用")]),_._v(" "),t("td",[_._v("USER")]),_._v(" "),t("td",[_._v("varchar(36)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("REPLAY_USER_TYPE")]),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(36)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("BEST_STATE")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("是否是最佳答案")]),_._v(" "),t("td",[_._v("0")]),_._v(" "),t("td",[_._v("tinyint(1)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("REWARD_COIN")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("冗余最佳答案获取到的今币")]),_._v(" "),t("td",[_._v("0")]),_._v(" "),t("td",[_._v("int(11)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("CIRCLE_ID")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("圈子编号")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(60)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("memo")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("备注")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(20)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")])])]),_._v(" "),t("h5",{attrs:{id:"t-cpdaily-like-点赞表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#t-cpdaily-like-点赞表"}},[_._v("#")]),_._v(" t_cpdaily_like 点赞表")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("COLUMN_NAME")]),_._v(" "),t("th",[_._v("COLUMN_COMMENT")]),_._v(" "),t("th",[_._v("COLUMN_DEFAULT")]),_._v(" "),t("th",[_._v("COLUMN_TYPE")]),_._v(" "),t("th",[_._v("IS_NULLABLE")]),_._v(" "),t("th",[_._v("COLUMN_KEY")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("user_id")]),_._v(" "),t("td",[_._v("创建者ID")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(50)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td",[_._v("PRI")])]),_._v(" "),t("tr",[t("td",[_._v("create_type")]),_._v(" "),t("td",[_._v("创建者类型USER、MEDIA、GROWTH")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(20)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("biz_id")]),_._v(" "),t("td",[_._v("业务标识(可以是评论id，也可以是动态等id)")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(50)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td",[_._v("PRI")])]),_._v(" "),t("tr",[t("td",[_._v("biz_type")]),_._v(" "),t("td",[_._v("业务类型GRAPHIC、LINK、SMALL_VIDEO、JOB、JOB_LIVE、ANSWER、QUESTION、ARTICLE")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(20)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("create_time")]),_._v(" "),t("td",[_._v("操作时间")]),_._v(" "),t("td",[_._v("CURRENT_TIMESTAMP")]),_._v(" "),t("td",[_._v("timestamp")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("update_time")]),_._v(" "),t("td",[_._v("更新时间")]),_._v(" "),t("td",[_._v("CURRENT_TIMESTAMP")]),_._v(" "),t("td",[_._v("timestamp")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("biz_create_id")]),_._v(" "),t("td",[_._v("业务创建者id")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(50)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td",[_._v("MUL")])]),_._v(" "),t("tr",[t("td",[_._v("biz_create_type")]),_._v(" "),t("td",[_._v("业务创建者类型USER、MEDIA、GROWTH")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(20)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("tenant_id")]),_._v(" "),t("td",[_._v("租户编号")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(50)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("time_value")]),_._v(" "),t("td",[_._v("排序用")]),_._v(" "),t("td",[_._v("0")]),_._v(" "),t("td",[_._v("bigint(20)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td",[_._v("MUL")])]),_._v(" "),t("tr",[t("td",[_._v("memo")]),_._v(" "),t("td",[_._v("备注")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(20)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")])])]),_._v(" "),t("h5",{attrs:{id:"t-cpdaily-user-collects-收藏表"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#t-cpdaily-user-collects-收藏表"}},[_._v("#")]),_._v(" t_cpdaily_user_collects 收藏表")]),_._v(" "),t("table",[t("thead",[t("tr",[t("th",[_._v("COLUMN_NAME")]),_._v(" "),t("th",[_._v("COLUMN_COMMENT")]),_._v(" "),t("th",[_._v("COLUMN_DEFAULT")]),_._v(" "),t("th",[_._v("COLUMN_TYPE")]),_._v(" "),t("th",[_._v("IS_NULLABLE")]),_._v(" "),t("th",[_._v("COLUMN_KEY")])])]),_._v(" "),t("tbody",[t("tr",[t("td",[_._v("wid")]),_._v(" "),t("td",[_._v("主键")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("bigint(20)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td",[_._v("PRI")])]),_._v(" "),t("tr",[t("td",[_._v("collect_user_id")]),_._v(" "),t("td",[_._v("收藏者用户wid")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(36)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td",[_._v("MUL")])]),_._v(" "),t("tr",[t("td",[_._v("collect_type")]),_._v(" "),t("td",[_._v("收藏的内容类型, FRESH:新鲜事,INFO:资讯,LINK:链接")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(36)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("collect_id")]),_._v(" "),t("td",[_._v("收藏内容编号，类型为FRESH:新鲜事编号,INFO:资讯编号,LINK:为链接编号随机产生")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(60)")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td",[_._v("MUL")])]),_._v(" "),t("tr",[t("td",[_._v("cover_title")]),_._v(" "),t("td",[_._v("封面标题")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(128)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("cover_avatar")]),_._v(" "),t("td",[_._v("封面头像地址")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("cover_url")]),_._v(" "),t("td",[_._v("封面打开地址")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("publisher_avatar")]),_._v(" "),t("td",[_._v("发布者头像地址，正常是发布者头像地址")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(256)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("publisher_name")]),_._v(" "),t("td",[_._v("发布者的名称，正常是发布者名称")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(32)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("create_time")]),_._v(" "),t("td",[_._v("收藏时间")]),_._v(" "),t("td",[_._v("CURRENT_TIMESTAMP")]),_._v(" "),t("td",[_._v("timestamp")]),_._v(" "),t("td",[_._v("NO")]),_._v(" "),t("td")]),_._v(" "),t("tr",[t("td",[_._v("collect_tenant_id")]),_._v(" "),t("td",[_._v("收藏者的租户wid，冗余字段，方便查询")]),_._v(" "),t("td"),_._v(" "),t("td",[_._v("varchar(36)")]),_._v(" "),t("td",[_._v("YES")]),_._v(" "),t("td",[_._v("MUL")])])])]),_._v(" "),t("h5",{attrs:{id:"收藏逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#收藏逻辑"}},[_._v("#")]),_._v(" 收藏逻辑")]),_._v(" "),t("p",[_._v("收藏记录保存在用户表中")]),_._v(" "),t("p",[_._v("MySQL     \tcpdaily.t_cpdaily_user_collects")]),_._v(" "),t("p",[_._v("Cassandra \tcpdaily.t_cpdaily_userstats      主要记录收藏数，粉丝，关注，访客，动态数")]),_._v(" "),t("p",[_._v("通知发布者")]),_._v(" "),t("h5",{attrs:{id:"评论逻辑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#评论逻辑"}},[_._v("#")]),_._v(" 评论逻辑")]),_._v(" "),t("h4",{attrs:{id:"新版本"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#新版本"}},[_._v("#")]),_._v(" 新版本")]),_._v(" "),t("h5",{attrs:{id:"评论疑惑"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#评论疑惑"}},[_._v("#")]),_._v(" 评论疑惑")]),_._v(" "),t("ol",[t("li",[_._v("展示逻辑，分层，最多分几层   -----\x3e 两层")]),_._v(" "),t("li",[_._v("黑名单过滤")]),_._v(" "),t("li",[_._v("回复的评论被删除。一级评论删除后，对应二级评论是否展示，评论数减少是否同时计算一级二级评论？")])]),_._v(" "),t("h5",{attrs:{id:"评论接口"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#评论接口"}},[_._v("#")]),_._v(" 评论接口")]),_._v(" "),t("ol",[t("li",[_._v("批量查询评论")]),_._v(" "),t("li",[_._v("评论  （评论通知，自己回复自己不通知）")]),_._v(" "),t("li",[_._v("删除评论 （权限校验，评论数量更新，删除后回复的评论处理） B站微博都会全部一并删除 （微博有bug，删除后展示的评论数未减少）")])])])}),[],!1,null,null,null);v.default=r.exports}}]);
# 思政版本——今日校园高级接口

> **开始日期**：12.29

### 需求

#### 1. 添加校园号统计接口

1. 浏览总数
2. 获赞次数
3. 评论次数
4. 分享次数
5. ~~昨日来访次数~~ 已取消
6. ~~本月来访次数~~ 已取消
7. ~~活动累计参与人数、报名人数~~ 已取消
8. 获取本校话题  新增
9. 获取推荐话题 新增
10. 推广活动 新增



#### 2. 今日校园提供思政绑定管控台

1. 客户端绑定
2. 校园号管控台绑定
3. 运营管控台绑定
4. 思政授权时回调云平台接口



涉及项目：`wec-cpdaily-api` `wec-cpdaily-campus`  `wec-devops-proxy` `wec-cpdaily-campus-account` `wec-cpdaily-common` ` wec-cpdaily-info-provider` `wec-cpdaily-content-provider`



### SQL

#### 校园号管控台

```sql
# 校园号管控台添加授权菜单
INSERT INTO cpdaily_authority.t_authority_permission (permission_id, permission_name, permission_type, type_info, parent_id, biz_type, fit_mode, sort_no, deleted, update_time, create_time) VALUES ('account_authorization_management', '授权管理', 'menu', '{"urlType":"route"}', 'account_campus_setting', 'account', 7, 5, 0, '2022-01-04 16:11:32', '2022-01-04 16:11:32');

INSERT INTO cpdaily_authority.t_authority_permission (permission_id, permission_name, permission_type, type_info, parent_id, biz_type, fit_mode, sort_no, deleted, update_time, create_time) VALUES ('account_auth_management_school', '校园号授权管理', 'menu', '{"urlType":"route"}', 'account_org_management', 'account', 7, 3, 0, '2022-01-04 16:14:26', '2022-01-04 16:14:26');
```



```sql
# 校级号 超管与高级管理员添加授权权限
INSERT INTO t_authority_role_permission (role_id, permission_id) VALUES ('super_admin_school_account',   'account_authorization_management');
INSERT INTO t_authority_role_permission (role_id, permission_id) VALUES ('senior_admin_school_account', 'account_authorization_management');

INSERT INTO t_authority_role_permission (role_id, permission_id) VALUES ('super_admin_school_account',   'account_auth_management_school');
INSERT INTO t_authority_role_permission (role_id, permission_id) VALUES ('senior_admin_school_account', 'account_auth_management_school');
```



```sql
# 普通机构号 超管与高级管理员添加授权权限
INSERT INTO t_authority_role_permission (role_id, permission_id) VALUES ('super_admin_org_account',      'account_authorization_management');

INSERT INTO t_authority_role_permission (role_id, permission_id) VALUES ('senior_admin_org_account', 'account_authorization_management');
```



```sql
# 社团号 超管与高级管理员添加授权权限
INSERT INTO t_authority_role_permission (role_id, permission_id) VALUES ('super_admin_ass_account',      'account_authorization_management');

INSERT INTO t_authority_role_permission (role_id, permission_id) VALUES ('senior_admin_ass_account', 'account_authorization_management');

```



```sql
# 添加接口资源
INSERT INTO cpdaily_authority.t_authority_resource (resource_id, resource_name, resource_type, resource_value) VALUES ('account_admin_policy_bind', '思政绑定校园号', 'INTERFACE', '/admin/account/adminuser/policy-account/bind');
INSERT INTO cpdaily_authority.t_authority_resource (resource_id, resource_name, resource_type, resource_value) VALUES ('account_admin_policy_bind_list', '查询思政绑定列表', 'INTERFACE', '/admin/account/adminuser/policy-account/list');
```



```sql
# 添加接口资源权限
INSERT INTO cpdaily_authority.t_authority_permission_resource (permission_id, resource_id) VALUES ('account_campus_setting', 'account_admin_policy_bind');
INSERT INTO cpdaily_authority.t_authority_permission_resource (permission_id, resource_id) VALUES ('account_campus_setting', 'account_admin_policy_bind_list');
INSERT INTO cpdaily_authority.t_authority_permission_resource (permission_id, resource_id) VALUES ('account_org_management', 'account_admin_policy_bind');
INSERT INTO cpdaily_authority.t_authority_permission_resource (permission_id, resource_id) VALUES ('account_org_management', 'account_admin_policy_bind_list');
```



#### 运营管控台

```sql
# 运营管控台添加授权菜单
INSERT INTO cpdaily_base.t_cpdaily_m_menu (MENU_ID, MENU_TYPE, MENU_URL, MENU_NAME, MENU_ICON, MENU_CATEGORY, CLIENT_TYPE, SORT_NO, P_MENU_ID) VALUES ('CampusAuthorization', 'url', '/v3/admin/cpdaily/new/whole/admin.html#/campus/list', '校园号授权管理', '', 'system', 'CPDAILY', 7, 'CampusNew');
```



```sql
# 运营管控台授予超管授权菜单权限
INSERT INTO cpdaily_base.t_cpdaily_m_role_menu (role_id, menu_id) VALUES ('supper_admin', 'CampusAuthorization');
```

#### 高级接口

```sql
# 新增高级接口scope
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_campus_getAccounts', '获取校园号', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_campus_content_publish_link', '发布链接', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_campus_content_del', '删除动态', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_campus_content_publish_article', '发布文章', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_campus_content_update_article', '更新文章', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_campus_content_publish_graphic', '发布图文', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_campus_content_publish_small_video', '发布视频', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_account_statistics_fans', '查询粉丝', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_account_statistics_visited', '查询浏览次数', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_account_statistics_like', '查询点赞', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_account_statistics_comment', '查询评论', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_account_statistics_share', '查询分享', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_fresh_crosstalk_recommend_list', '获取推荐话题', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_fresh_crosstalk_tenant_list', '获取本校话题', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_sizheng_bind_campus_account', '思政云绑定校园号', '2');
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_campus_content_promote', '活动推广', '2');
```



```sql
# 思政云同步内容记录创作者，需夜间刷sq
alter table t_cpdaily_time_fresh
	add create_user_name varchar(64) default null null comment '创造者名称' after create_user_id;
```



### 高级接口相关逻辑



添加网关配置

```json
location = /senior/fresh/crosstalk/recommend/list {
    set $scope "senior_fresh_crosstalk_recommend_list";
    access_by_lua_file /opt/openresty/lua/senior_api.lua;
    proxy_pass http://wec-cpdaily-api;
}
```

覆盖原有配置

```shell
# x
/usr/local/openresty/nginx/sbin/nginx -t
/usr/local/openresty/nginx/sbin/nginx -s reload
```



### 发布文章动态逻辑

奇怪的逻辑

cpdaily_content.t_cpdaily_time_fresh.create_user_id  ----> 管理员用户id

cpdaily_content.t_cpdaily_freshs.CREATE_USER_ID  -----> 校园号account_id



发布内容高级接口添加createUserName 

管控台展示逻辑

> 高级接口会传租户code，学工号和用户名称，如果通过租户code和学工号能找到对应今日校园用户，文章管理/动态管理的创建者就展示今日校园用户，不能就展示思政传的用户名称

涉及项目 `wec-cpdaily-api`  ` wec-cpdaily-info-provider` `wec-cpdaily-content-provider`

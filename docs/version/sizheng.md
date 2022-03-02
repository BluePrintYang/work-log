# 思政版本——今日校园高级接口

> **开始日期**：12.29
>
> **上线日期**：2022.2.21

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
11. 获取校园号管理员 2022-02-10新增



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
INSERT INTO t_authority_permission (permission_id, permission_name, permission_type, type_info, parent_id, biz_type, fit_mode, sort_no, deleted, update_time, create_time) VALUES ('account_authorization_management', '授权管理', 'menu', '{"urlType":"route"}', 'account_campus_setting', 'account', 7, 5, 0, '2022-01-04 16:11:32', '2022-01-04 16:11:32');

INSERT INTO t_authority_permission (permission_id, permission_name, permission_type, type_info, parent_id, biz_type, fit_mode, sort_no, deleted, update_time, create_time) VALUES ('account_auth_management_school', '校园号授权管理', 'menu', '{"urlType":"route"}', 'account_org_management', 'account', 7, 3, 0, '2022-01-04 16:14:26', '2022-01-04 16:14:26');
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
INSERT INTO t_authority_resource (resource_id, resource_name, resource_type, resource_value) VALUES ('account_admin_policy_bind', '思政绑定校园号', 'INTERFACE', '/admin/account/adminuser/policy-account/bind');
INSERT INTO t_authority_resource (resource_id, resource_name, resource_type, resource_value) VALUES ('account_admin_policy_bind_list', '查询思政绑定列表', 'INTERFACE', '/admin/account/adminuser/policy-account/list');
```



```sql
# 添加接口资源权限
INSERT INTO t_authority_permission_resource (permission_id, resource_id) VALUES ('account_campus_setting', 'account_admin_policy_bind');
INSERT INTO t_authority_permission_resource (permission_id, resource_id) VALUES ('account_campus_setting', 'account_admin_policy_bind_list');
INSERT INTO t_authority_permission_resource (permission_id, resource_id) VALUES ('account_org_management', 'account_admin_policy_bind');
INSERT INTO t_authority_permission_resource (permission_id, resource_id) VALUES ('account_org_management', 'account_admin_policy_bind_list');
```



#### 运营管控台

```sql
# 运营管控台添加授权菜单
INSERT INTO t_cpdaily_m_menu (MENU_ID, MENU_TYPE, MENU_URL, MENU_NAME, MENU_ICON, MENU_CATEGORY, CLIENT_TYPE, SORT_NO, P_MENU_ID) VALUES ('CampusAuthorization', 'url', '/v3/admin/cpdaily/new/whole/admin.html#/campus/list', '校园号授权管理', '', 'system', 'CPDAILY', 7, 'CampusNew');
```



```sql
# 运营管控台授予超管授权菜单权限
INSERT INTO t_cpdaily_m_role_menu (role_id, menu_id) VALUES ('supper_admin', 'CampusAuthorization');
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

# 2022-02-10
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_campus_getAccountAdmins', '获取校园号管理员', '2');
```



```sql
# 思政云同步内容记录创作者，需夜间刷sql
alter table t_cpdaily_time_fresh
	add create_user_name varchar(64) default null null comment '创造者名称' after create_user_id;
# d
alter table t_cpdaily_time_fresh
    add delete_user_name varchar(64) default null null comment '删除人名称' after delete_user;
```



#### 思政相关表

```sql
# mysql4-cpdaily_account
create table t_campus_policy_bind
(
    id                 varchar(50) default ''                not null
        primary key,
    account_id         varchar(50) default ''                not null comment '校园号ID',
    account_name       varchar(100)                          null comment '校园号名称',
    biz_id             varchar(50) default ''                not null comment '业务ID（对应思政云的用户组ID）',
    biz_name           varchar(255)                          null comment '业务名称（对应思政云的用户组名称）',
    source             varchar(50)                           null comment '绑定来源，SIZHENG_CLOUD：思政云',
    ticket             varchar(50)                           null comment '同意后生成的票据，思政云调用就传递这个参数',
    state              tinyint(2)  default 0                 not null comment '绑定状态，0未绑定，1已绑定，2已拒绝，3已解除',
    extra              varchar(255)                          null comment '扩展字段',
    approval_user_id   varchar(50)                           null comment '审核人用户ID',
    approval_role_name varchar(50)                           null comment '审核人角色名称',
    approval_time      datetime                              null,
    create_time        datetime    default CURRENT_TIMESTAMP not null,
    update_time        datetime    default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    deleted            tinyint(1)  default 0                 not null comment '删除标识'
)
    comment '思政号绑定申请表';



create table t_campus_account_openid
(
    id             int(11) unsigned auto_increment
        primary key,
    account_id     varchar(50) default ''                not null,
    campus_open_id varchar(50) default ''                not null,
    create_time    datetime    default CURRENT_TIMESTAMP not null,
    update_time    datetime    default CURRENT_TIMESTAMP not null on update CURRENT_TIMESTAMP,
    constraint account_id
        unique (account_id)
)
    comment '校园号的开放ID表，对外暴露的ID';


```

#### 高级接口日志

```sql
create table t_cpdaily_api_call_log
(
    id            bigint auto_increment comment '主键'
        primary key,
    biz_id        varchar(50)   default ''                not null comment '业务ID',
    content       varchar(2000) default ''                not null comment '内容',
    source        varchar(50)                             null comment '操作来源',
    operator_id   varchar(50)                             not null comment '操作人id',
    operator_type varchar(20)   default ''                not null comment '操作人类型',
    action_type   varchar(20)   default ''                null comment '操作动作名称',
    extra         varchar(255)  default ''                not null comment '扩展字段',
    create_time   datetime      default CURRENT_TIMESTAMP not null
)
    comment '开放接口调用记录表';

INSERT INTO t_cpdaily_app_client ( client_id, client_name, client_secret, client_type, client_url_prefix, client_access_url, client_logo, client_state, client_tenant_type, client_source, client_intro, creator_role_id, create_time, update_time, operator_id, operator_name, is_deleted, client_version, client_logo_update_time, grant_type, detail_pic, developer_id, tenant_id, client_admin_url, senior_secret, allow_ips) VALUES ( '16417822721608593', '思政', 'vt3rjZmSaTE9bujIeuNAr1Im1p2nIX', 3, 'https://open.campushoy.com/admin.html#/applist', 'https://open.campushoy.com/admin.html#/applist', 'https://cpdaily-resource.oss-cn-hangzhou.aliyuncs.com/web/200748510/y0/tb/2022/nGcfhhBPxh_x1500_x2000_x376348_x.jpg', 'ONLINE', 1, 1, 'www.baidu.com', null, '2022-01-10 10:37:52', '2022-01-24 18:06:44', null, null, 0, '1', '2022-01-10 10:37:52', 'SILENCE_GRANT', 'https://cpdaily-resource.oss-cn-hangzhou.aliyuncs.com/web/200748510/y0/xq/2022/JX3ZhpxCxs_x1500_x2000_x376348_x.jpg', 258, '1020503765226325', 'https://open.campushoy.com/admin.html#/applist', 'wiSeFDTrrjRz3BqbEFCSzmeKu8i2be', '119.3.138.126,119.3.92.141,122.112.252.152,121.36.161.216,122.112.249.244,122.112.225.72,119.3.87.105');

update t_cpdaily_app_client set allow_ips = '119.3.138.126,119.3.92.141,122.112.252.152,121.36.161.216,122.112.249.244,122.112.225.72,119.3.87.105' where client_id = '16417822721608593'；
```



```sql
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_sizheng_bind_campus_account', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_promote', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccountAdmins', '2022-02-10 13:15:30', '2022-02-10 13:15:30', null, null, 0, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_sizheng_bind_campus_account', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_promote', '2022-01-24 18:06:44', '2022-02-10 13:15:30', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_sizheng_bind_campus_account', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_promote', '2022-01-21 17:21:50', '2022-01-24 18:06:44', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_sizheng_bind_campus_account', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_promote', '2022-01-21 09:53:13', '2022-01-21 17:21:50', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_sizheng_bind_campus_account', '2022-01-20 10:02:15', '2022-01-21 09:53:13', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_sizheng_bind_campus_account', '2022-01-17 13:29:06', '2022-01-20 10:02:15', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_sizheng_bind_campus_account', '2022-01-17 13:28:54', '2022-01-17 13:29:06', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-17 13:28:39', '2022-01-17 13:28:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_sizheng_bind_campus_account', '2022-01-17 13:28:27', '2022-01-17 13:28:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_sizheng_bind_campus_account', '2022-01-17 13:23:47', '2022-01-17 13:28:27', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_sizheng_bind_campus_account', '2022-01-17 12:26:35', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-14 14:27:25', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-14 14:27:25', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-14 14:27:25', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-14 14:27:25', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-14 14:27:25', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-14 14:27:25', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-14 14:27:25', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-14 14:27:25', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-14 14:27:25', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-14 14:27:25', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-14 14:27:24', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-14 14:27:24', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-14 14:27:24', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-14 14:27:24', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-14 14:27:24', '2022-01-17 13:23:47', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-14 14:26:54', '2022-01-14 14:27:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-14 11:22:24', '2022-01-14 14:26:54', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-14 10:58:48', '2022-01-14 11:22:24', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-13 16:17:56', '2022-01-14 10:58:48', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-13 16:15:01', '2022-01-13 16:17:56', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-13 16:12:39', '2022-01-13 16:15:01', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_tenant_list', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_fresh_crosstalk_recommend_list', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_share', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_comment', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_like', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_visited', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_account_statistics_fans', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_small_video', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_graphic', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_update_article', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_article', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_del', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_content_publish_link', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_getAccounts', '2022-01-13 16:02:40', '2022-01-13 16:12:39', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'senior_campus_userInfo_getAvatar', '2022-01-10 10:39:31', '2022-01-13 16:02:40', null, null, 1, 1);
INSERT INTO t_cpdaily_app_scope_client (client_id, scope_code, create_time, update_time, operator_id, operator_name, is_deleted, use_type) VALUES ('16417822721608593', 'basic_info', '2022-01-10 10:37:52', '2022-01-10 10:37:52', null, null, 0, 1);

update t_cpdaily_app_client set allow_ips = '119.3.138.126,119.3.92.141,122.112.252.152,121.36.161.216,122.112.249.244,122.112.225.72,119.3.87.105' where client_id = '16417822721608593'；
```



### 高级接口相关逻辑



#### 添加网关配置

```json
location = /senior/fresh/crosstalk/recommend/list {
    set $scope "senior_fresh_crosstalk_recommend_list";
    access_by_lua_file /opt/openresty/lua/senior_api.lua;
    proxy_pass http://wec-cpdaily-api;
}
```

#### 覆盖原有配置

```shell
# 131服务器
/usr/local/openresty/nginx/sbin/nginx -t
/usr/local/openresty/nginx/sbin/nginx -s reload
```

#### 添加scope

```sql
INSERT INTO `t_cpdaily_app_scope` (`scope_code`, `scope_name`, `scope_level`)VALUES ('senior_fresh_crosstalk_recommend_list', '获取推荐话题', '2');
```

#### 运营平台高级接口管理

添加应用->选择高级接口，设置白名单

#### 获取token

```json
post http://api.campushoytest.com/client/senior/get_senior_token
{
    "client_id":"16417822721608593",
    "signature":"a533b650e77a7b6f6f1c7dd4e9608d0935c1b26e",
    "timestamp":"1642061291757",
    "scope":"senior_campus_getAccounts"
}
```

#### 调用高级接口

```json
POST http://api.campushoytest.com/senior/fresh/crosstalk/recommend/list?senior_token=token
{
    "pageSize": 10,
    "pageNum": 1,
    "keyword": "",
    "tenantCode": "ann"
}
```



### 发布文章动态逻辑

奇怪的逻辑

cpdaily_content.t_cpdaily_time_fresh.create_user_id  ----> 管理员用户id

cpdaily_content.t_cpdaily_freshs.CREATE_USER_ID  -----> 校园号account_id



发布内容高级接口添加createUserName 

管控台展示逻辑

> 高级接口会传租户code，学工号和用户名称，如果通过租户code和学工号能找到对应今日校园用户，文章管理/动态管理的创建者就展示今日校园用户，不能就展示思政传的用户名称

涉及项目 `wec-cpdaily-api`  ` wec-cpdaily-info-provider` `wec-cpdaily-content-provider`



删除动态逻辑同上

管控台获取删除文章接口

/v7/admin/account/query/content?startTime=&endTime=&keywords=&contentSrcType=&synContent=&deleteType=DISABLE&draft=false&pageNum=1&pageSize=10&freshType=ARTICLE&accountId=3fa65d61-4f5b-496c-87f9-7a5bab241ada


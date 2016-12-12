delete from t_mod;

insert into t_mod values(-100,'系统配置',null,null,'fa fa-user-secret',0);
insert into t_mod values(-99,'用户管理',null,'user','fa fa-user',-100);
insert into t_mod values(-9901,'新增用户','/user/saveUser',null,null,-99);
insert into t_mod values(-9902,'删除用户','/user/deleteUser',null,null,-99);
insert into t_mod values(-9903,'修改用户','/user/saveUser',null,null,-99);

insert into t_mod values(-9904,'新增角色','/role/saveRole',null,null,-99);
insert into t_mod values(-9905,'删除角色','/role/deleteRole',null,null,-99);
insert into t_mod values(-9906,'修改角色','/role/saveRole',null,null,-99);

insert into t_mod values(-98,'动态参数',null,'conf','fa fa-pencil',-100);
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_primary_key';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_primary_key(
  table_name VARCHAR2(32) not null primary key,
  current_id int not null
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_user';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_user(
  id int not null primary key,
  name VARCHAR2(50),
  password VARCHAR2(32),
  mail VARCHAR2(20)
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_role';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_role(
  id int not null primary key,
  name VARCHAR2(50) CONSTRAINT role_name_uk UNIQUE
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_mod';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_mod(
  id int not null primary key,
  name VARCHAR2(50),
  url VARCHAR2(50),
  router_id VARCHAR2(50),
  addition VARCHAR2(50),
  parent_id int
);
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_user_role';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_user_role(
  id int  primary key,
  user_id int not null,
  role_id int not null
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_role_mod';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_role_mod(
  id int primary key,
  role_id int not null,
  mod_id int not null
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_dynamic_conf';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_dynamic_conf(
  conf_name VARCHAR2(60) primary key,
  conf_value VARCHAR2(128),
  conf_desc VARCHAR2(128),
  dirty number(2)
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_event';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_event(
  event_id int primary key,
  event_type number(2) not null,
  db_key int not null,
  db_int int not null,
  db_content VARCHAR2(32),
  event_status number(2) not null,
  try_count number(2) not null,
  trigger_date TIMESTAMP not null
);

insert into t_dynamic_conf(conf_name, conf_value, conf_desc, dirty) VALUES ('appUpdating','false','升级升级前，请将此参数改为true',0);

insert into t_user values(-10,'a','0cc175b9c0f1b6a831c399e269772661','a@a.com');
insert into t_user values(-9,'g','b2f5ff47436671b6e533d8dc3614845d','g@g.com');

insert into t_role values(-2,'管理员');

insert into t_user_role values(-2,-10,-2);-- administrator

insert into t_mod values(-100,'系统配置',null,null,'fa fa-user-secret',0);
insert into t_mod values(-99,'用户管理',null,'user','fa fa-user',-100);
insert into t_mod values(-9901,'新增用户','/user/saveUser',null,null,-99);
insert into t_mod values(-9902,'删除用户','/user/deleteUser',null,null,-99);
insert into t_mod values(-9903,'修改用户','/user/saveUser',null,null,-99);

insert into t_mod values(-9904,'新增角色','/role/saveRole',null,null,-99);
insert into t_mod values(-9905,'删除角色','/role/deleteRole',null,null,-99);
insert into t_mod values(-9906,'修改角色','/role/saveRole',null,null,-99);

insert into t_mod values(-98,'动态参数',null,'user-DynamicConfig','fa fa-pencil',-100);

-- insert into t_mod values(-98,'权限管理',null,'user-RoleManager','x-fa fa-user-secret',-100);
-- insert into t_mod values(-97,'角色管理',null,'user-RoleManager','x-fa fa-user-secret',-100);

insert into t_role_mod values(-10,-2,-100);
insert into t_role_mod values(-9,-2,-99);
insert into t_role_mod values(-8,-2,-98);





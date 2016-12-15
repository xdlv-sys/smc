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

drop table IF EXISTS t_user;
create table t_user(
  id int not null primary key,
  name VARCHAR(50),
  password VARCHAR(32),
  birthday date,
  sex tinyint,
  entry_time date,
  mobile varchar(11),
  phone varchar(16),
  id_card varchar(32),
  mail varchar(20),
  dept int,
  UNIQUE KEY `user_name` (`name`)
)ENGINE = INNODB;

insert into t_user(id,name,password,sex,mail,dept) values(-10,'a','0cc175b9c0f1b6a831c399e269772661',0,'a@a.com',1);
insert into t_user(id,name,password,sex,mail,dept) values(-9,'g','b2f5ff47436671b6e533d8dc3614845d',1,'g@g.com',1);

drop table IF EXISTS t_dept;
create table t_dept(
  id int not null primary key,
  parent int,
  name varchar(32)
)ENGINE = INNODB;

insert into t_dept values(0,-1,'公司');
insert into t_dept values(1,0,'事业部');
insert into t_dept values(2,1,'工程事业部');
insert into t_dept values(3,2,'财务部');
insert into t_dept values(4,2,'合同预算部');
insert into t_dept values(5,2,'材料供应部');
insert into t_dept values(6,2,'市场经营部');
insert into t_dept values(7,2,'行政办公司');
insert into t_dept values(8,2,'机械设备部');
insert into t_dept values(9,2,'劳务管理部');
insert into t_dept values(10,2,'信息管理部');
insert into t_dept values(11,2,'安全环保部');
insert into t_dept values(12,2,'质量检查部');
insert into t_dept values(13,2,'法务清欠部');


insert into t_role values(1, '会计');
insert into t_role values(2, '预算员');
insert into t_role values(3, '材料员');
insert into t_role values(4, '操作员');
insert into t_role values(5, '操作员');
insert into t_role values(6, '操作员');
insert into t_role values(7, '操作员');
insert into t_role values(8, '操作员');
insert into t_role values(8, '操作员');
insert into t_role values(10, '操作员');
insert into t_role values(11, '操作员');

drop table IF EXISTS t_dept_role;
create table t_dept_role(
  id int not null primary key,
  dept_id int not null,
  role_id int not null
)ENGINE = INNODB;

insert into t_dept_role values(1,3,1);
insert into t_dept_role values(2,4,2);
insert into t_dept_role values(3,5,3);
insert into t_dept_role values(4,6,4);
insert into t_dept_role values(5,7,5);
insert into t_dept_role values(6,8,6);
insert into t_dept_role values(7,9,7);
insert into t_dept_role values(8,10,8);
insert into t_dept_role values(9,11,9);
insert into t_dept_role values(10,12,10);
insert into t_dept_role values(11,13,11);
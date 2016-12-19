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

delete from t_role;
insert into t_role values(-2, '管理员');
insert into t_role values(-1, '副总经理');
insert into t_role values(0, '总经理');
insert into t_role values(1, '会计');
insert into t_role values(2, '预算员');
insert into t_role values(3, '材料员');
insert into t_role values(4, '操作员(4)');
insert into t_role values(5, '操作员(5)');
insert into t_role values(6, '操作员(6)');
insert into t_role values(7, '操作员(7)');
insert into t_role values(8, '操作员(8)');
insert into t_role values(9, '操作员(9)');
insert into t_role values(10, '操作员(10)');
insert into t_role values(11, '操作员(11)');

drop table IF EXISTS t_dept_role;
create table t_dept_role(
  id int auto_increment primary key,
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
insert into t_dept_role values(12,0,-2);
insert into t_dept_role values(13,0,-1);
insert into t_dept_role values(14,0,0);

delete from t_mod;
insert into t_mod values(1,'系统配置',null,null,'fa fa-user-secret',0);
insert into t_mod values(2,'用户管理',null,'user','fa fa-user',1);
insert into t_mod values(3,'动态参数',null,'conf','fa fa-pencil',1);

-- user manager
insert into t_mod values(4,'新增用户','/user/saveUser',null,null,2);
insert into t_mod values(5,'查看用户','/user/obtainUsers',null,null,2);
insert into t_mod values(6,'删除用户','/user/deleteUser',null,null,2);
insert into t_mod values(7,'修改用户','/user/saveUser',null,null,2);

insert into t_mod values(8,'新增角色','/role/saveRole',null,null,2);
insert into t_mod values(9,'查看角色','/role/obtainRoles',null,null,2);
insert into t_mod values(10,'删除角色','/role/deleteRole',null,null,2);
insert into t_mod values(11,'修改角色','/role/saveRole',null,null,2);

insert into t_mod values(12,'查看部门','/dept/obtainDepts',null,null,2);

delete from t_role_mod;
insert into t_role_mod values(-100,-2,1);
insert into t_role_mod values(-99,-2,2);
insert into t_role_mod values(-98,-2,3);
insert into t_role_mod values(-97,-2,4);
insert into t_role_mod values(-96,-2,5);
insert into t_role_mod values(-95,-2,6);
insert into t_role_mod values(-94,-2,7);
insert into t_role_mod values(-93,-2,8);
insert into t_role_mod values(-92,-2,9);
insert into t_role_mod values(-91,-2,10);
insert into t_role_mod values(-90,-2,11);
insert into t_role_mod values(-89,-2,12);

drop table IF EXISTS t_dynamic_conf;
create table t_dynamic_conf(
  id int primary key,
  group_no int,
  conf_name varchar(60) ,
  conf_value varchar(128),
  conf_desc varchar(128)
)ENGINE = INNODB;

-- product name manager
drop table IF EXISTS t_product;
create table t_product(
  id int primary key,
  code VARCHAR(32) not null,
  name varchar(32) not null,
  model varchar(64) not null,
  nature TINYINT not null,
  genre TINYINT not null,
  batch varchar(64),
  storage double,
  count_unit TINYINT,
  weight_unit TINYINT,
  bulk_unit TINYINT,
  trademark varchar(64),
  approve_code VARCHAR(64),
  line_code varchar(64),
  package_type VARCHAR(64) not null,
  bill_name VARCHAR(64),
  rate TINYINT not null,
  status TINYINT,
  import_id int,
  create_time DATETIME
)ENGINE = INNODB;
insert into t_product values(-1,'code','a','m',1,1,'b',0.2,1,1,1,'t','a','l','p','b',1,0,-1,now());

drop table IF EXISTS t_product_import;
create table t_product_import(
  id int AUTO_INCREMENT primary key,
  operator VARCHAR(64),
  status TINYINT,
  create_time DATETIME
)ENGINE = INNODB;

insert into t_mod values(13,'商品管理',null,null,'fa fa-truck',0);
insert into t_mod values(14,'商品导入',null,'product','fa fa-truck',13);
insert into t_mod values(15,'商品审核',null,'product-approval','fa fa-check-circle',13);

insert into t_mod values(16,'新增商品','/product/saveProduct',null,null,14);
insert into t_mod values(17,'查看商品','/product/obtainProducts',null,null,14);
insert into t_mod values(18,'删除商品','/product/deleteProduct',null,null,14);
insert into t_mod values(19,'审批商品','/product/approveProduct',null,null,15);

insert into t_role_mod values(-88,-2,13);
insert into t_role_mod values(-87,-2,14);
insert into t_role_mod values(-86,-2,15);
insert into t_role_mod values(-85,-2,16);
insert into t_role_mod values(-84,-2,17);
insert into t_role_mod values(-83,-2,18);
insert into t_role_mod values(-82,-2,19);


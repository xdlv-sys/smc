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


BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_user';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_user(
  id int not null primary key,
  name VARCHAR(50) CONSTRAINT user_name UNIQUE,
  password VARCHAR(32),
  birthday date,
  sex number(2),
  entry_time date,
  mobile varchar2(11),
  phone varchar2(16),
  id_card varchar2(32),
  mail varchar2(20),
  dept int
);

insert into t_user(id,name,password,sex,mail,dept) values(-10,'a','0cc175b9c0f1b6a831c399e269772661',0,'a@a.com',1);
insert into t_user(id,name,password,sex,mail,dept) values(-9,'g','b2f5ff47436671b6e533d8dc3614845d',1,'g@g.com',1);
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_dept';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_dept(
  id int not null primary key,
  parent int,
  name varchar2(32)
);

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

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_dept_role';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_dept_role(
  id int primary key,
  dept_id int not null,
  role_id int not null
);

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

-- product name manager
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_product';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_product(
  id int primary key,
  code VARCHAR(32) not null,
  name varchar2(32) not null,
  model varchar2(64),
  nature number(2) not null,
  genre number(2) not null,
  batch varchar2(64),
  storage number(38,4),
  count_unit number(2),
  weight_unit number(2),
  bulk_unit number(2),
  trademark varchar2(64),
  approve_code VARCHAR(64),
  line_code varchar2(64),
  package_type VARCHAR(64) not null,
  bill_name VARCHAR(64),
  rate number(38,4) not null,
  status number(2),
  import_id int,
  create_time TIMESTAMP
);
insert into t_product values(-1,'code','a','m',1,1,'b',0.2,1,1,1,'t','a','l','p','b',1,0,-1,SYSDATE);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_product_import';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_product_import(
  id int primary key,
  operator VARCHAR2(64),
  status number(2),
  create_time TIMESTAMP
);

insert into t_mod values(13,'商品管理',null,null,'fa fa-truck',0);
insert into t_mod values(14,'商品导入及审核',null,'product','fa fa-truck',13);
-- insert into t_mod values(15,'商品审核',null,'product-approval','fa fa-check-circle',13);

insert into t_mod values(16,'新增商品','/product/saveProduct',null,null,14);
insert into t_mod values(17,'查看商品','/product/obtainProducts',null,null,14);
insert into t_mod values(18,'删除商品','/product/deleteProduct',null,null,14);
insert into t_mod values(19,'审批商品','/product/approveProduct',null,null,14);
insert into t_mod values(20,'审批导入','/product-import/approveProductImport',null,null,14);

insert into t_role_mod values(-88,-2,13);
insert into t_role_mod values(-87,-2,14);
insert into t_role_mod values(-85,-2,16);
insert into t_role_mod values(-84,-2,17);
insert into t_role_mod values(-83,-2,18);
insert into t_role_mod values(-82,-2,19);
insert into t_role_mod values(-81,-2,20);

-- project
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_project';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_project(
  id int primary key,
  name varchar2(64),
  employer varchar2(64),
  project_mode number(2),
  project_type number(2),
  manager varchar2(16),
  contract_number VARCHAR(32),
  contract_sign_date date,
  contract_start_date date,
  contract_end_time date,
  license_number varchar2(32),
  license_date date,
  project_location varchar2(64),
  supply_mode number(2),
  total_count float,
  rate number(2),
  untaxed_count float,
  out_source number(2),
  attach number(2),
  status number(2),
  create_time TIMESTAMP
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_project_out_source';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_project_out_source (
  id INT PRIMARY KEY,
  contract_name varchar2(64),
  unit_name varchar2(64),
  address varchar2(128),
  sign_date date,
  start_date date,
  location varchar2(128),
  supply number(2),
  count float,
  project_id int
);

insert into t_mod values(21,'项目管理',null,null,'fa fa-calendar-check-o',0);
insert into t_mod values(22,'项目新建与查询',null,'project','fa fa-calendar-minus-o',21);
insert into t_mod values(23,'项目预算管理',null,'budget','fa fa-calendar-times-o',21);

insert into t_mod values(24,'新建项目','/project/saveProject',null,null,22);
insert into t_mod values(25,'修改项目','/project/saveProject',null,null,22);
insert into t_mod values(26,'导出项目','/project/exportProject',null,null,22);
insert into t_mod values(27,'查询项目','/project/obtainProject',null,null,22);

insert into t_mod values(28,'删除预算','/budget/deleteBudget',null,null,23);
insert into t_mod values(29,'导入预算','/budget/deleteBudget',null,null,23);
insert into t_mod values(30,'查看预算','/budget/obtainBudgets',null,null,23);

insert into t_role_mod values(-80,-2,21);
insert into t_role_mod values(-79,-2,22);
insert into t_role_mod values(-78,-2,23);
insert into t_role_mod values(-77,-2,24);
insert into t_role_mod values(-76,-2,25);
insert into t_role_mod values(-75,-2,26);
insert into t_role_mod values(-74,-2,27);

insert into t_role_mod values(-73,-2,28);
insert into t_role_mod values(-72,-2,29);
insert into t_role_mod values(-71,-2,30);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_budget';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_budget (
  project_id INT PRIMARY KEY,
  import_name varchar2(128),
  report_date date,
  import_user varchar2(64),
  import_date TIMESTAMP DEFAULT SYSDATE
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_budget_group';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_budget_group (
  id INT PRIMARY KEY,
  project_id int,
  group_index number(2),
  name varchar2(128),
  total number(38,4)
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_group_item';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_group_item (
  id INT PRIMARY KEY,
  group_id int,
  item_index int,
  material_name varchar2(64),
  model varchar2(32),
  unit varchar2(16),
  count number(38,4),
  price number(38,4),
  total number(38,4)
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_construction_progress';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_construction_progress (
  id INT PRIMARY KEY,
  project_id int,
  belong date,
  finished number(38,4),
  area number(38,4),
  import_user varchar2(64),
  update_date TIMESTAMP DEFAULT SYSDATE
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_contract_progress';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_contract_progress (
  id INT PRIMARY KEY,
  project_id int,
  belong date,
  finished number(38,4),
  import_user varchar2(64),
  update_date TIMESTAMP DEFAULT SYSDATE
);

insert into t_mod values(31,'项目进度管理',null,'progress','fa fa-list-ol',21);
-- insert into t_mod values(32,'项目合同进度管理',null,'contract-progress','fa fa-outdent',21);

insert into t_mod values(33,'查看工程进度','/construction-progress/obtainProgresses',null,null,31);
insert into t_mod values(34,'新建工程进度','/construction-progress/saveProgress',null,null,31);

insert into t_mod values(35,'查看合同进度','/contract-progress/obtainProgresses',null,null,31);
insert into t_mod values(36,'新建合同进度','/contract-progress/saveProgress',null,null,31);

insert into t_role_mod values(-70,-2,31);
insert into t_role_mod values(-68,-2,33);
insert into t_role_mod values(-67,-2,34);
insert into t_role_mod values(-66,-2,35);
insert into t_role_mod values(-65,-2,36);

insert into t_mod values(37,'项目预算测算管理',null,'calculate','fa fa-calculator',21);
insert into t_role_mod values(-64,-2,37);

insert into t_mod values(38,'预算进项税计算','/calculate/obtainCalculate',null,null,37);
insert into t_role_mod values(-63,-2,38);
alter table t_group_item add tax_ratio float;

insert into t_mod values(39,'预算税负计算','/calculate/showTaxCalculate',null,null,37);
insert into t_role_mod values(-62,-2,39);

-- ----------------supplier ------------------
insert into t_mod values(40,'各部分采购',null,null,'fa fa-shopping-cart',0);
insert into t_mod values(41,'供应商管理',null,'supplier','fa fa-address-book-o',40);
insert into t_mod values(42,'新增供应商','supplier/saveSupplier',null,null,41);
insert into t_mod values(43,'修改供应商','supplier/saveSupplier',null,null,41);

insert into t_role_mod values(-61,-2,40);
insert into t_role_mod values(-60,-2,41);
insert into t_role_mod values(-59,-2,42);
insert into t_role_mod values(-58,-2,43);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_supplier';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_supplier (
  id INT PRIMARY KEY,
  license_code varchar2(64),
  name varchar2(128),
  identity_type number(2),
  legal_person varchar2(32),
  assets number(38,2),
  license_date date,
  run_scope varchar2(256),
  address varchar2(256),
  telephone varchar2(16),
  bank varchar2(64),
  bank_number varchar2(64),
  license_img varchar2(64),
  registry_img varchar2(64),
  organization_img varchar2(64),
  open_account_img varchar2(64),
  dept int,
  update_date TIMESTAMP DEFAULT SYSDATE
);
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_supplier_type';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_supplier_type (
  id INT PRIMARY KEY,
  supplier_id int,
  supplier_type number(2)
);
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_supplier_sub_type';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_supplier_sub_type (
  id INT PRIMARY KEY,
  supplier_type int,
  supplier_sub_type int
);

insert into t_mod values(44,'采购成本税收测算',null,'cost-tax','fa fa-asterisk',40);
insert into t_mod values(45,'测算',null,null,null,44);
insert into t_role_mod values(-57,-2,44);
insert into t_role_mod values(-56,-2,45);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_project_purchase';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_project_purchase (
  id INT PRIMARY KEY,
  belong date,
  company varchar2(64),
  product_name varchar2(32),
  product_model varchar2(64),
  product_unit number(2),
  product_count number(38,4),
  price number(38,4),
  un_tax_count number(38,4),
  rate number(38,4),
  rate_count number(38,4),
  total number(38,4),
  import_id int,
  project_id int
);
insert into t_mod values(46,'实际实施采购管理',null,'purchase','fa fa-shopping-cart',40);
insert into t_role_mod values(-55,-2,46);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_project_purchase_import';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_project_purchase_import(
  id int primary key,
  operator VARCHAR2(64),
  project_id int,
  belong date,
  create_time TIMESTAMP
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_engineering_purchase';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_engineering_purchase (
  id INT PRIMARY KEY,
  dept int,
  belong date,
  year int,
  month int,
  project_id int,
  supplier_id int,
  supplier_type number(2),
  service_type int,
  service_sub_type int,
  name varchar2(64),
  product_model varchar2(64),
  product_unit number(2),
  product_count number(38,4),
  price number(38,4),
  un_tax_count number(38,4),
  rate number(38,4),
  rate_count number(38,4),
  total number(38,4)
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_composite_purchase';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_composite_purchase (
  id INT PRIMARY KEY,
  dept int,
  belong date,
  year int,
  month int,
  project_id int,
  supplier_id int,
  supplier_type number(2),
  service_type int,
  service_sub_type int,
  name varchar2(64),
  product_model varchar2(64),
  product_unit number(2),
  product_count number(38,4),
  price number(38,4),
  un_tax_count number(38,4),
  rate number(38,4),
  rate_count number(38,4),
  total number(38,4)
);

insert into t_mod values(47,'税务分析管理',null,null,'fa fa-cogs',0);
insert into t_mod values(48,'项目收款管理',null,'receipt','fa fa-credit-card-alt',47);
insert into t_role_mod values(-54,-2,47);
insert into t_role_mod values(-53,-2,48);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_project_receipt';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_project_receipt (
  id INT PRIMARY KEY,
  project_id int,
  belong date,
  count number(38,4),
  create_time date
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_project_addition';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_project_addition (
  id INT PRIMARY KEY,
  project_id int,
  belong date,
  progress varchar2(16),
  progress2 varchar2(64)
);

insert into t_mod values(49,'税收管理分析',null,'tax-manager','fa fa-bookmark-o',47);
insert into t_role_mod values(-52,-2,49);

insert into t_mod values(50,'纳税人身份管理',null,'tax-man-manager','fa fa-address-book',47);
insert into t_role_mod values(-51,-2,50);

insert into t_mod values(51,'税收分析与管理建议',null,'advise','fa fa-envira',47);
insert into t_role_mod values(-50,-2,51);


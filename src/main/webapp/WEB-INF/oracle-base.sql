BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_primary_key';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_primary_key(
  table_name VARCHAR2(32) not null primary key,
  current_id int not null
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
  user_id int not null,
  role_id int not null
);

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_role_mod';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_role_mod(
  role_id int not null,
  mod_id int not null
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

BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_dept';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_dept(
  id int not null primary key,
  parent int,
  name varchar2(32)
);
BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_dept_role';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_dept_role(
  dept_id int not null,
  role_id int not null
);


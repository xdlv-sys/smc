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
  import_id int
);
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
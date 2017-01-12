BEGIN
  EXECUTE IMMEDIATE 'DROP TABLE t_engineering_purchase';
  EXCEPTION WHEN OTHERS THEN NULL;
END;
create table t_engineering_purchase (
  id INT PRIMARY KEY,
  dept int,
  year int,
  month int,
  project_id int,
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
  year int,
  month int,
  project_id int,
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
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
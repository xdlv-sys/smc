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
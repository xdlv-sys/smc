-- group 1 : product
drop table IF EXISTS t_dynamic_conf;
create table t_dynamic_conf(
  id int primary key,
  group_no int,
  conf_name varchar(60) ,
  conf_value varchar(128),
  conf_desc varchar(128)
)ENGINE = INNODB;

delete from t_dynamic_conf;
insert into t_dynamic_conf values(1,'1','nature.1','库存材料','商品性质1');
insert into t_dynamic_conf values(2,'1','genre.1','水泥','所属类型1');
insert into t_dynamic_conf values(3,'1','genre.2','商品砼','所属类型2');
insert into t_dynamic_conf values(4,'1','genre.3','钢材','所属类型3');
insert into t_dynamic_conf values(5,'1','genre.4','砂石料','所属类型4');
insert into t_dynamic_conf values(6,'1','genre.5','地砖类','所属类型5');
insert into t_dynamic_conf values(7,'1','genre.6','管线类','所属类型6');
insert into t_dynamic_conf values(8,'1','genre.7','化工产品','所属类型7');
insert into t_dynamic_conf values(9,'1','genre.8','井盖类','所属类型8');
insert into t_dynamic_conf values(10,'1','genre.9','门窗类','所属类型9');
insert into t_dynamic_conf values(11,'1','genre.10','消防类','所属类型10');
insert into t_dynamic_conf values(12,'1','genre.11','水暖配件','所属类型11');
insert into t_dynamic_conf values(13,'1','genre.12','电工材料','所属类型12');
insert into t_dynamic_conf values(14,'1','genre.13','五金工具','所属类型13');
insert into t_dynamic_conf values(15,'1','genre.14','日杂类','所属类型14');
insert into t_dynamic_conf values(16,'1','genre.15','周转材料','所属类型15');
insert into t_dynamic_conf values(17,'1','genre.16','运费及其他费用','所属类型16');
insert into t_dynamic_conf values(18,'1','genre.17','一批材料','所属类型17');
insert into t_dynamic_conf values(19,'1','genre.18','实验仪器','所属类型18');
insert into t_dynamic_conf values(20,'1','genre.19','木材类','所属类型19');
insert into t_dynamic_conf values(21,'1','genre.20','沥青砼','所属类型20');
insert into t_dynamic_conf values(22,'1','genre.21','小建材','所属类型21');

insert into t_dynamic_conf values(24,'1','weightUnit.1','吨','重量单位');
insert into t_dynamic_conf values(25,'1','weightUnit.2','千克','重量单位');

insert into t_dynamic_conf values(26,'1','bulkUnit.1','立方米','体积单位');

insert into t_dynamic_conf values(27,'1','countUnit.1','公斤','计量单位');
insert into t_dynamic_conf values(28,'1','countUnit.2','千克','计量单位');
insert into t_dynamic_conf values(29,'1','countUnit.3','袋','计量单位');
insert into t_dynamic_conf values(30,'1','countUnit.4','立方厘米','计量单位');
insert into t_dynamic_conf values(31,'1','countUnit.5','滥立方厘米','计量单位');
insert into t_dynamic_conf values(32,'1','countUnit.6','立方分米','计量单位');
insert into t_dynamic_conf values(33,'1','countUnit.7','批','计量单位');
insert into t_dynamic_conf values(34,'1','countUnit.8','个','计量单位');
insert into t_dynamic_conf values(35,'1','countUnit.9','付','计量单位');
insert into t_dynamic_conf values(36,'1','countUnit.10','件','计量单位');
insert into t_dynamic_conf values(37,'1','countUnit.11','克','计量单位');
insert into t_dynamic_conf values(38,'1','countUnit.12','具','计量单位');
insert into t_dynamic_conf values(39,'1','countUnit.13','副','计量单位');
insert into t_dynamic_conf values(40,'1','countUnit.14','组','计量单位');
insert into t_dynamic_conf values(41,'1','countUnit.15','平方分米','计量单位');

insert into t_dynamic_conf values(42,'2','projectType.1','市政工程','项目类型');
insert into t_dynamic_conf values(43,'2','projectType.2','公路工程','项目类型');
insert into t_dynamic_conf values(44,'2','projectType.3','房屋建筑','项目类型');
insert into t_dynamic_conf values(45,'2','projectType.4','水利工程','项目类型');
insert into t_dynamic_conf values(46,'2','projectType.5','园林绿化','项目类型');
insert into t_dynamic_conf values(47,'2','projectType.6','装修装饰','项目类型');
insert into t_dynamic_conf values(48,'2','projectType.7','钢结构','项目类型');
insert into t_dynamic_conf values(49,'2','projectType.8','其它','项目类型');

insert into t_dynamic_conf values(50,'2','rate.1','11%','项目类型');
insert into t_dynamic_conf values(51,'2','rate.2','3%','项目类型');
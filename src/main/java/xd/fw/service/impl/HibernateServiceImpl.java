package xd.fw.service.impl;

import org.apache.commons.lang3.StringUtils;
import org.hibernate.query.Query;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.orm.hibernate5.HibernateCallback;
import org.springframework.orm.hibernate5.HibernateTemplate;
import org.springframework.transaction.annotation.Transactional;
import xd.fw.bean.PrimaryKey;
import xd.fw.service.*;
import xd.fw.util.FwUtil;

import javax.persistence.EntityManager;
import javax.persistence.PersistenceContext;
import java.io.Serializable;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

@Transactional(readOnly = true)
public class HibernateServiceImpl implements BaseService{
    final static Map<String, int[]> primaryKeyMap = new HashMap<>();
    final static int PRE_OCCUPY_MAX = 10;

    @Autowired
    protected HibernateTemplate htp;

    @PersistenceContext
    EntityManager em;

    @Override
    @Transactional
    public <T> T runInSession(SessionProcessor<T> processor) {
        return processor.process(htp);
    }

    @Override
    @Transactional
    public void runSessionCommit(SessionCommit sessionCommit) {
        sessionCommit.process(htp);
    }

    public int getPrimaryKey(Class<?> cls){
        int[] value;
        String tableName = cls.getSimpleName();
        synchronized (primaryKeyMap) {
            value = primaryKeyMap.get(tableName);
            if (value == null || value[0] == value[1]) {
                PrimaryKey primaryKey = get(PrimaryKey.class, tableName);
                if (primaryKey == null){
                    primaryKey = new PrimaryKey();
                    primaryKey.setCurrentId(PRE_OCCUPY_MAX);
                    primaryKey.setTableName(tableName);
                    save(primaryKey);
                    value = new int[]{1, PRE_OCCUPY_MAX};
                } else {
                    value = new int[]{primaryKey.getCurrentId() + 1, primaryKey.getCurrentId() + PRE_OCCUPY_MAX};
                    primaryKey.setCurrentId(value[1]);
                    update(primaryKey);
                }
                primaryKeyMap.put(tableName, value);
            } else {
                value[0] += 1;
            }
        }
        return value[0];
    }

    @Override
    @Transactional
    public void saveOrUpdate(Object entity) {
        htp.saveOrUpdate(entity);
    }

    private <T> String constructHsql(String prefix, Class<T> cls, T params, String orderBy){
        StringBuilder hsql = new StringBuilder(prefix).append("from ").append(cls.getSimpleName());
        if (params != null){
            final boolean[] appendWhere = new boolean[]{false};
            try {
                FwUtil.invokeBeanFields(params, (f, o) -> {
                    if (o != null && StringUtils.isNotBlank(o.toString())) {
                        if (!appendWhere[0]) {
                            hsql.append(" where ");
                            appendWhere[0] = true;
                        } else {
                            hsql.append(" and ");
                        }
                        if (o instanceof String){
                            hsql.append(f.getName()).append(" like :").append(f.getName());
                        } else {
                            hsql.append(f.getName()).append("=:").append(f.getName());
                        }
                    }
                });
            } catch (IllegalAccessException e) {
                throw new RuntimeException(e);
            }
        }
        if (StringUtils.isNotBlank(orderBy)){
            hsql.append(" order by ").append(orderBy);
        }
        return hsql.toString();
    }

    public <T> int getAllCount(Class<T> cls) {
        return getAllCount(cls,null);
    }

    public <T> int getAllCount(Class<T> cls, T params){
        List<Object> list = this.getList(constructHsql("select count(*) ",cls, params, null), params, -1,0);
        return ((Long) list.get(0)).intValue();
    }

    public <T> List<T> getList(Class<T> cls, String orderBy, int start, int limit){
        return getList(cls,null,orderBy,start,limit);
    }

    public <T> List<T> getList(Class<T> cls, T param, String orderBy, int start, int limit) {
        return this.getList(constructHsql("",cls,param,orderBy), param, start, limit);
    }

    public <T> List<T> getList(String hsql, T params, int start, int limit){
        return htp.execute((HibernateCallback<List<T>>) session -> {
            Query query = session.createQuery(hsql);
            if (params != null){
                try {
                    FwUtil.invokeBeanFields(params, (f, o) -> {
                        if (o != null && StringUtils.isNotBlank(o.toString())) {
                            if (o instanceof String){
                                query.setParameter(f.getName(),"%" + o + "%");
                            } else {
                                query.setParameter(f.getName(),o);
                            }
                        }
                    });
                } catch (IllegalAccessException e) {
                    throw new RuntimeException(e);
                }
            }
            if (start > -1){
                query.setFirstResult(start);
            }
            if (limit > 0){
                query.setMaxResults(limit);
            }
            return query.list();
        });
    }

    public <T> List<T> getLists(String hsql,T param, SetParameters setParameters, ConstructHql<T> constructHql, int start, int limit){
        return htp.execute((HibernateCallback<List<T>>) session -> {
            String hsql2 = hsql + constructHql.process(param);
            Query query = session.createQuery(hsql2);
            setParameters.process(query);
            if (start > -1){
                query.setFirstResult(start);
            }
            if (limit > 0){
                query.setMaxResults(limit);
            }
            return query.list();
        });
    }

    @Override
    public <T> List<T> getLists(String hsql, SetParameters setParameters) {
        return htp.execute((HibernateCallback<List<T>>) session -> {
            Query query = session.createQuery(hsql);
            if (setParameters != null){
                setParameters.process(query);
            }
            return query.list();
        });
    }

    public <T> int getAllCount(T param, SetParameters setParameters, ConstructHql<T> constructHql){
        return htp.execute((HibernateCallback<List<Long>>) session -> {
            String hsql2 = "select count(*) " + constructHql.process(param);
            Query query = session.createQuery(hsql2);
            setParameters.process(query);
            return query.list();
        }).get(0).intValue();
    }

    public int update(String sql, SetParameters setParameters, boolean original){
        return htp.execute(session -> {
            Query query;
            if (original){
                //noinspection deprecation
                query = session.createSQLQuery(sql);
            } else {
                query = session.createQuery(sql);
            }

            if (setParameters != null){
                setParameters.process(query);
            }
            return query.executeUpdate();
        });
    }
    public <T> T get(Class<T> tClass, Serializable id) {
        return htp.get(tClass, id);
    }


    protected <T> T load(Class<T> tClass, Serializable id) {
        return htp.load(tClass, id);
    }

    @Override
    @Transactional
    public void update(Object entity) {
        htp.update(entity);
    }

    @Override
    @Transactional
    public void save(Object entity) {
        htp.save(entity);
    }

    @Override
    @Transactional
    public Object merge(Object entity) {
        return htp.merge(entity);
    }

    @Override
    @Transactional
    public void delete(Object entity) {
        htp.delete(entity);
    }

    @Override
    @Transactional
    public void delete(Class<?> cls, Serializable id) {
        Object record = htp.get(cls,id);
        htp.delete(record);
    }

    @Override
    public <T> List<T> findByExample(T entity) {
        return htp.findByExample(entity);
    }

}
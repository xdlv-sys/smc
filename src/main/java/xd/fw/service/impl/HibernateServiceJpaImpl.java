package xd.fw.service.impl;

import javax.persistence.criteria.CriteriaBuilder;
import javax.persistence.criteria.CriteriaQuery;
import javax.persistence.criteria.Root;

/**
 * Created by xd on 12/1/2016.
 */
public class HibernateServiceJpaImpl extends  HibernateServiceImpl{
    @Override
    public <T> int getAllCount(Class<T> cls) {
        CriteriaBuilder cb = em.getCriteriaBuilder();
        CriteriaQuery<Long> cq = cb.createQuery(Long.class);
        Root<T> cFrom = cq.from(cls);
        cq.select(cb.count(cFrom));
        return em.createQuery(cq).getSingleResult().intValue();
    }
}

package xd.fw.service;

import org.hibernate.query.Query;

public interface SetParameters {
    void process(Query query);
}
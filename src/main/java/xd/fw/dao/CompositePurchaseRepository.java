package xd.fw.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.CompositePurchase;

import java.util.Date;

public interface CompositePurchaseRepository extends JpaRepository<CompositePurchase, Integer> {

    Page<CompositePurchase> findByBelongBetweenAndProjectId(Date start, Date end, int projectId, Pageable pageable);
}
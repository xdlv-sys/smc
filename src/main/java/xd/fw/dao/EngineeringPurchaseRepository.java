package xd.fw.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.EngineeringPurchase;

import java.util.Date;
import java.util.List;

public interface EngineeringPurchaseRepository extends JpaRepository<EngineeringPurchase, Integer> {

    Page<EngineeringPurchase> findByBelongBetweenAndProjectId(Date start, Date end, int projectId, Pageable pageable);


    List<EngineeringPurchase> findByProjectId(int projectId);
}
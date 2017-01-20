package xd.fw.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.EngineeringPurchase;
import xd.fw.bean.ProjectPurchaseImport;

import java.util.Date;

public interface EngineeringPurchaseRepository extends JpaRepository<EngineeringPurchase, Integer> {

    Page<EngineeringPurchase> findByBelongBetweenAndProjectId(Date start, Date end, int projectId, Pageable pageable);
}
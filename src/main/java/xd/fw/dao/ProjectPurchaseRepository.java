package xd.fw.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ProjectPurchase;

import java.util.Date;

public interface ProjectPurchaseRepository extends JpaRepository<ProjectPurchase, Integer> {

    void deleteByImportIdIn(int[] importIds);

    Page<ProjectPurchase> findByBelongBetweenAndProjectId(Date startDate, Date endDate, int projectId, Pageable pageRequest);
}
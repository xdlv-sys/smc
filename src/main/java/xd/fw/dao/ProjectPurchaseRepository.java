package xd.fw.dao;

import org.springframework.data.domain.Page;
import org.springframework.data.domain.Pageable;
import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ProjectPurchase;

import java.util.Date;
import java.util.List;

public interface ProjectPurchaseRepository extends JpaRepository<ProjectPurchase, Integer> {

    void deleteByImportIdIn(int[] importIds);

    List<ProjectPurchase> findByProjectId(int projectId);

    Page<ProjectPurchase> findByBelongBetweenAndProjectId(Date startDate, Date endDate, int projectId, Pageable pageRequest);
}
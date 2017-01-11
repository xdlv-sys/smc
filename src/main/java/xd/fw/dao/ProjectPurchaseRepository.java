package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ProjectPurchase;

public interface ProjectPurchaseRepository extends JpaRepository<ProjectPurchase, Integer> {

    void deleteByImportIdIn(int[] importIds);
}
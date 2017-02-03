package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ConstructionProgress;
import xd.fw.bean.ContractProgress;

import java.util.Date;
import java.util.List;

public interface ConstructionProgressRepository extends JpaRepository<ConstructionProgress, Integer> {
    ConstructionProgress findByBelongAndProjectId(Date belong, Integer projectId);

    List<ConstructionProgress> findByProjectId(Integer projectId);

    List<ConstructionProgress> findByProjectIdAndBelongIsLessThanEqualOrderByBelongAsc(Integer projectId, Date belong);
}
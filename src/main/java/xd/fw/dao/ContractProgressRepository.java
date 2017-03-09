package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Query;
import xd.fw.bean.ContractProgress;

import java.util.Date;
import java.util.List;

public interface ContractProgressRepository extends JpaRepository<ContractProgress, Integer> {
    @Query("select sum(c.finished) from ContractProgress c where c.project.id=?1")
    Double sumFinishedByProjectId(Integer projectId);

    ContractProgress findByBelongAndProjectId(Date belong, Integer projectId);

    List<ContractProgress> findByProjectIdAndBelongIsLessThanEqualOrderByBelongAsc(Integer projectId, Date belong);
}
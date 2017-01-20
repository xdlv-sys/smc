package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ConstructionProgress;
import xd.fw.bean.ProjectReceipt;

import java.util.Date;
import java.util.List;

public interface ProjectReceiptRepository extends JpaRepository<ProjectReceipt, Integer> {
    ProjectReceipt findByBelongAndProjectId(Date belong, Integer projectId);

    List<ProjectReceipt> findByProjectIdAndBelongIsLessThanEqualOrderByBelongAsc(Integer projectId, Date belong);
}
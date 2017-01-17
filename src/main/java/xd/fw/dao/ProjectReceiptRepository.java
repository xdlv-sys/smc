package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ProjectReceipt;

import java.util.Date;

public interface ProjectReceiptRepository extends JpaRepository<ProjectReceipt, Integer> {
    ProjectReceipt findByBelongAndProjectId(Date belong, Integer projectId);
}
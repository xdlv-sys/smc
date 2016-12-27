package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ConstructionProgress;

import java.util.Date;

public interface ConstructionProgressRepository extends JpaRepository<ConstructionProgress, Integer> {
    ConstructionProgress findByBelongAndProjectId(Date belong, Integer projectId);
}
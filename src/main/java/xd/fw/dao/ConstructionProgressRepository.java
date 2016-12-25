package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ConstructionProgress;

public interface ConstructionProgressRepository extends JpaRepository<ConstructionProgress, Integer> {
}
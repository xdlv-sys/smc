package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ContractProgress;

import java.util.Date;

public interface ContractProgressRepository extends JpaRepository<ContractProgress, Integer> {
    ContractProgress findByBelongAndProjectId(Date belong, Integer projectId);
}
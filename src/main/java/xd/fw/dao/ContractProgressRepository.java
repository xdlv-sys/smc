package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ContractProgress;

public interface ContractProgressRepository extends JpaRepository<ContractProgress, Integer> {
}
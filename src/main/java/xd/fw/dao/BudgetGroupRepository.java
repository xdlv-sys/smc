package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.BudgetGroup;

public interface BudgetGroupRepository extends JpaRepository<BudgetGroup, Integer> {
}
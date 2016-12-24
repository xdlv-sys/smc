package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.Budget;

public interface BudgetRepository extends JpaRepository<Budget, Integer> {
}
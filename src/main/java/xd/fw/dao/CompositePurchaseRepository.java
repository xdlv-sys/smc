package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.CompositePurchase;

public interface CompositePurchaseRepository extends JpaRepository<CompositePurchase, Integer> {
}
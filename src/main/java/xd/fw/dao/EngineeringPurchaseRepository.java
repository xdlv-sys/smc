package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.EngineeringPurchase;

public interface EngineeringPurchaseRepository extends JpaRepository<EngineeringPurchase, Integer> {
}
package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.Supplier;

public interface SupplierRepository extends JpaRepository<Supplier, Integer> {
}
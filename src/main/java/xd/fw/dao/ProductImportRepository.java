package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ProductImport;

public interface ProductImportRepository extends JpaRepository<ProductImport, Integer> {
}
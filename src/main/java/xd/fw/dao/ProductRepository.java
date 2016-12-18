package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

}
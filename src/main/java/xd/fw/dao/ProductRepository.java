package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import xd.fw.bean.Product;

public interface ProductRepository extends JpaRepository<Product, Integer> {

    @Modifying
    @Query("UPDATE Product u set u.status=:status where u.importId in :ids")
    void updateStatusByIds(@Param("status") byte status, @Param("ids") int[] ids);

    @Modifying
    @Query("delete from Product u where u.importId in :importIds")
    void deleteProducts(@Param("importIds") int[] importIds);

}
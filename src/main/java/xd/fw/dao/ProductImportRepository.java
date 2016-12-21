package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import org.springframework.data.jpa.repository.Modifying;
import org.springframework.data.jpa.repository.Query;
import org.springframework.data.repository.query.Param;
import xd.fw.bean.ProductImport;

import java.util.List;

public interface ProductImportRepository extends JpaRepository<ProductImport, Integer> {
    @Modifying
    @Query("update ProductImport u set u.status =:status where u.id in :ids")
    void updateStatusByIds(@Param("status") byte status, @Param("ids") int[] ids);

    @Modifying
    @Query("delete from ProductImport u where u.id in :ids")
    void deleteImportsByIds( @Param("ids") int[] ids);

}
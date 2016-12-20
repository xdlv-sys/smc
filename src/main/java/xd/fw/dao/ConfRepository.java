package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.DynamicConf;
import xd.fw.bean.Mod;

import java.util.List;

public interface ConfRepository extends JpaRepository<DynamicConf, Integer> {

    List<ConfRepository> findByGroupNoAndConfName(int groupNo, String confName);

}
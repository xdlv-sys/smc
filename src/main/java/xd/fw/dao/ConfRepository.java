package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.DynamicConf;
import xd.fw.bean.Mod;

public interface ConfRepository extends JpaRepository<DynamicConf, Integer> {
}
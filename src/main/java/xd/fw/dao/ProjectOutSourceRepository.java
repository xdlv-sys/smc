package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.Mod;
import xd.fw.bean.ProjectOutSource;

public interface ProjectOutSourceRepository extends JpaRepository<ProjectOutSource, Integer> {
}
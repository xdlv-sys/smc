package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.Project;

public interface ProjectRepository extends JpaRepository<Project, Integer> {
}
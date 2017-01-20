package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.ProjectAddition;

import java.util.Date;

public interface ProjectAdditionRepository extends JpaRepository<ProjectAddition, Integer> {
    ProjectAddition findByProjectIdAndBelong(int projectId, Date belong);
}
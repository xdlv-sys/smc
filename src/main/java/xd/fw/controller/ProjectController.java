package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.DynamicConf;
import xd.fw.bean.Project;
import xd.fw.dao.ConfRepository;
import xd.fw.dao.ProjectRepository;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("project")
public class ProjectController extends BaseController{
    @Autowired
    ProjectRepository projectRepository;

    @RequestMapping("obtainProjects")
    @ResponseBody
    public PageContent obtainProjects(int page, int limit){
        Page<Project> list = projectRepository.findAll(pageRequest(page, limit));
        return page(list);
    }

    @RequestMapping("saveProject")
    @ResponseBody
    public String saveProject(Project project) throws Exception {
        projectRepository.save(project);
        return DONE;
    }
}

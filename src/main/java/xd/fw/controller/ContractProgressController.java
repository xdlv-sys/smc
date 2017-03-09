package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.ContractProgress;
import xd.fw.bean.Project;
import xd.fw.dao.ContractProgressRepository;
import xd.fw.dao.ProjectRepository;
import xd.fw.util.FwException;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("contract-progress")
public class ContractProgressController extends BaseController {
    @Autowired
    ContractProgressRepository contractProgressRepository;
    @Autowired
    ProjectRepository projectRepository;

    @RequestMapping("obtainProgresses")
    @ResponseBody
    public PageContent obtainProgresses(int page, int limit, ContractProgress query) {
        Pageable pageable = pageRequest(page , limit, new Sort(Sort.Direction.DESC, "id"));
        Page<ContractProgress> list = contractProgressRepository.findAll(Example.of(query, queryMatcher()), pageable);
        return page(list);
    }

    @RequestMapping("saveProgress")
    @ResponseBody
    public String saveProgress(ContractProgress progress) throws Exception {
        if (progress.getId() == null
                && contractProgressRepository.findByBelongAndProjectId(
                        progress.getBelong(), progress.getProject().getId()) != null){
            throw new FwException(1,"special period contract progress exists "
                    + progress.getBelong());
        }
        Project project = projectRepository.findOne(progress.getProject().getId());
        Double sumFinished = contractProgressRepository.sumFinishedByProjectId(project.getId());

        if (progress.getFinished() + sumFinished > project.getTotalCount()){
            throw new FwException(2,"should not over the total count");
        }

        contractProgressRepository.save(progress);
        return DONE;
    }
}

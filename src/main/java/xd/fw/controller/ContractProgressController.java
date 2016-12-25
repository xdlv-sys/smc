package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.ContractProgress;
import xd.fw.dao.ContractProgressRepository;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("contract-progress")
public class ContractProgressController extends BaseController {
    @Autowired
    ContractProgressRepository contractProgressRepository;

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
        contractProgressRepository.save(progress);
        return DONE;
    }
}

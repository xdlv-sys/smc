package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.*;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.ConstructionProgress;
import xd.fw.dao.ConstructionProgressRepository;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("construction-progress")
public class ConstructionProgressController extends BaseController{
    @Autowired
    ConstructionProgressRepository constructionProgressRepository;

    @RequestMapping("obtainProgresses")
    @ResponseBody
    public PageContent obtainProgresses(int page, int limit, ConstructionProgress query){
        Pageable pageable = pageRequest(page, limit, new Sort(Sort.Direction.DESC, "id"));
        Page<ConstructionProgress> list = constructionProgressRepository.findAll(Example.of(query, queryMatcher()), pageable);
        return page(list);
    }

    @RequestMapping("saveProgress")
    @ResponseBody
    public String saveProgress(ConstructionProgress progress) throws Exception {
        constructionProgressRepository.save(progress);
        return DONE;
    }
}

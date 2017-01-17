package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.ProjectReceipt;
import xd.fw.dao.ProjectReceiptRepository;
import xd.fw.util.FwException;

import java.util.Arrays;
import java.util.Date;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("project-receipt")
public class ProjectReceiptController extends BaseController {
    @Autowired
    ProjectReceiptRepository projectReceiptRepository;

    @RequestMapping("obtainReceipts")
    @ResponseBody
    public PageContent obtainReceipts(ProjectReceipt query){
        return page(projectReceiptRepository.findAll(Example.of(query, queryMatcher())
                ,new Sort(Sort.Direction.ASC,"belong")));
    }

    @RequestMapping("deleteReceipt")
    @ResponseBody
    public String deleteReceipt(int[] receiptIds) {
        userRepositoryCustom.runSessionCommit(()-> Arrays.stream(receiptIds).forEach(id->projectReceiptRepository.delete(id)));
        return DONE;
    }

    @RequestMapping("saveReceipt")
    @ResponseBody
    public String saveReceipt(ProjectReceipt receipt) throws Exception {
        if (receipt.getId() == null
                && projectReceiptRepository.findByBelongAndProjectId(
                receipt.getBelong(), receipt.getProject().getId()) != null){
            throw new FwException(1,"special period construction progress exists "
                    + receipt.getBelong());
        }
        receipt.setCreateTime(new Date(System.currentTimeMillis()));
        projectReceiptRepository.save(receipt);
        return DONE;
    }
}

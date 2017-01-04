package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.Budget;
import xd.fw.bean.GroupItem;
import xd.fw.dao.BudgetRepository;
import xd.fw.dao.GroupItemRepository;
import xd.fw.dao.UserRepositoryCustom;

import java.util.List;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("calculate")
public class CalculateController extends BaseController {
    @Autowired
    BudgetRepository budgetRepository;
    @Autowired
    GroupItemRepository groupItemRepository;

    @Autowired
    UserRepositoryCustom userRepositoryCustom;

    @RequestMapping("updateRatio")
    @ResponseBody
    public String updateRatio(GroupItem item){
        userRepositoryCustom.runSessionCommit(()->{
            GroupItem record = groupItemRepository.getOne(item.getId());
            record.setTaxRatio(item.getTaxRatio());
            groupItemRepository.save(record);
        });
        return DONE;
    }
}

package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import xd.fw.bean.Budget;
import xd.fw.dao.BudgetRepository;

import java.util.List;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("calculate")
public class CalculateController extends BaseController {
    @Autowired
    BudgetRepository budgetRepository;

    public Budget obtainCalculate(int projectId){
        return budgetRepository.getOne(projectId);
    }
}

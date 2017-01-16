package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.CompositePurchase;
import xd.fw.dao.CompositePurchaseRepository;
import xd.fw.dao.ProductRepository;
import xd.fw.dao.ProjectRepository;

import java.util.Arrays;
import java.util.Calendar;

/**
 * Created by xd on 2017/1/10.
 */
@Controller
@RequestMapping("composite-purchase")
public class CompositePurchaseController extends BaseController{
    @Autowired
    DynamicConfig dynamicConfig;
    @Autowired
    ProductRepository productRepository;

    @Autowired
    CompositePurchaseRepository compositePurchaseRepository;

    @Autowired
    ProjectRepository projectRepository;

    @RequestMapping("obtainPurchases")
    @ResponseBody
    public PageContent obtainEngineeringPurchases(int page, int limit, CompositePurchase query) {
        return page(compositePurchaseRepository.findAll(Example.of(query, queryMatcher())
                ,pageRequest(page, limit)));
    }
    @RequestMapping("savePurchases")
    @ResponseBody
    public String savePurchases(CompositePurchase compositePurchase) {
        Calendar instance;
        instance = Calendar.getInstance();
        instance.setTime(compositePurchase.getBelong());
        compositePurchase.setYear(instance.get(Calendar.YEAR));
        compositePurchase.setMonth(instance.get(Calendar.MONTH) + 1);
        compositePurchaseRepository.save(compositePurchase);
        return DONE;
    }

    @RequestMapping("deletePurchases")
    @ResponseBody
    public String deletePurchases(int[] purchaseIds) {
        userRepositoryCustom.runSessionCommit(()-> Arrays.stream(purchaseIds).forEach(id-> compositePurchaseRepository.delete(id)));
        return DONE;
    }


}

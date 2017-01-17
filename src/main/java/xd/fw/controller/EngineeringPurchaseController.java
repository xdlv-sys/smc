package xd.fw.controller;

import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import xd.fw.bean.EngineeringPurchase;
import xd.fw.bean.Product;
import xd.fw.bean.ProjectPurchase;
import xd.fw.bean.ProjectPurchaseImport;
import xd.fw.dao.*;
import xd.fw.util.FwUtil;

import java.util.*;

/**
 * Created by xd on 2017/1/10.
 */
@Controller
@RequestMapping("engineering-purchase")
public class EngineeringPurchaseController extends BaseController{
    @Autowired
    DynamicConfig dynamicConfig;
    @Autowired
    ProductRepository productRepository;

    @Autowired
    EngineeringPurchaseRepository engineeringPurchaseRepository;

    @Autowired
    ProjectRepository projectRepository;

    @RequestMapping("obtainPurchases")
    @ResponseBody
    public PageContent obtainPurchases(int page, int limit ,EngineeringPurchase query) {
        return page(engineeringPurchaseRepository.findAll(Example.of(query, queryMatcher())
                ,pageRequest(page, limit)));
    }

    @RequestMapping("obtainPurchasesForQuery")
    @ResponseBody
    public PageContent obtainPurchasesForQuery(int page, int limit
            , Date startDate, Date endDate, int projectId) {
        Page<EngineeringPurchase> list = engineeringPurchaseRepository.findByBelongBetweenAndProjectId(
                startDate, endDate, projectId, pageRequest(page, limit));
        return page(list);
    }
    @RequestMapping("savePurchases")
    @ResponseBody
    public String savePurchases(EngineeringPurchase engineeringPurchase) {
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(engineeringPurchase.getBelong());
        engineeringPurchase.setYear(calendar.get(Calendar.YEAR));
        engineeringPurchase.setMonth(calendar.get(Calendar.MONTH) + 1);
        engineeringPurchaseRepository.save(engineeringPurchase);
        return DONE;
    }

    @RequestMapping("deletePurchases")
    @ResponseBody
    public String deletePurchases(int[] purchaseIds) {
        userRepositoryCustom.runSessionCommit(()-> Arrays.stream(purchaseIds).forEach(id-> engineeringPurchaseRepository.delete(id)));
        return DONE;
    }


}

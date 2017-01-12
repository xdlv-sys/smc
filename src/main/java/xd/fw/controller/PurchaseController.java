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
import xd.fw.bean.Product;
import xd.fw.bean.Project;
import xd.fw.bean.ProjectPurchase;
import xd.fw.bean.ProjectPurchaseImport;
import xd.fw.dao.ProductRepository;
import xd.fw.dao.ProjectPurchaseImportRepository;
import xd.fw.dao.ProjectPurchaseRepository;
import xd.fw.util.FwUtil;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * Created by xd on 2017/1/10.
 */
@Controller
@RequestMapping("purchase")
public class PurchaseController extends BaseController{
    @Autowired
    DynamicConfig dynamicConfig;
    @Autowired
    ProductRepository productRepository;

    @Autowired
    ProjectPurchaseRepository projectPurchaseRepository;
    @Autowired
    ProjectPurchaseImportRepository projectPurchaseImportRepository;

    @RequestMapping("obtainPurchaseImports")
    @ResponseBody
    public PageContent obtainPurchaseImports(int page, int limit, int projectId,Date startDate, Date endDate) {
        Page<ProjectPurchaseImport> list = projectPurchaseImportRepository.findByBelongBetweenAndProjectId(
                startDate, endDate, projectId, pageRequest(page, limit));
        return page(list);
    }
    @RequestMapping("obtainPurchases")
    @ResponseBody
    public PageContent obtainPurchases(int page, int limit, int projectId,Date startDate, Date endDate) {
        Page<ProjectPurchase> list = projectPurchaseRepository.findByBelongBetweenAndProjectId(
                startDate, endDate, projectId, pageRequest(page, limit));
        return page(list);
    }
    @RequestMapping("deletePurchaseImport")
    @ResponseBody
    public String deletePurchaseImport(int[] purchaseImportIds) {
        if (purchaseImportIds == null || purchaseImportIds.length < 1){
            return DONE;
        }
        userRepositoryCustom.runSessionCommit(()->{
            Arrays.stream(purchaseImportIds).forEach(id-> projectPurchaseImportRepository.delete(id));
            projectPurchaseRepository.deleteByImportIdIn(purchaseImportIds);
        });
        return DONE;
    }

    @RequestMapping("importProjectPurchase")
    @ResponseBody
    public String importProjectPurchase(MultipartFile file, Date importDate, int projectId, String operator) throws Exception {
        Workbook wb = FwUtil.parseFile(file.getInputStream());
        List<ProjectPurchase> projectPurchaseList = new ArrayList<>();
        Sheet sheet = wb.getSheetAt(0);
        Cell cell;
        Row row;
        String value;
        Product product;
        int wrong = 0;

        for (int i = 2; ; i++) {
            row = sheet.getRow(i);
            if (row == null || StringUtils.isBlank(FwUtil.getCellValue(row.getCell(1)))) {
                break;
            }
            ProjectPurchase projectPurchase = new ProjectPurchase();
            projectPurchase.setBelong(importDate);
            for (int j = 1; j < 8; j++) {
                cell = row.getCell(j);
                value = FwUtil.getCellValue(cell);
                if (StringUtils.isEmpty(value)) {
                    continue;
                }
                switch (j) {
                    case 1:
                        projectPurchase.setCompany(value);
                        break;
                    case 2:
                        projectPurchase.setProductName(value);
                        break;
                    case 3:
                        projectPurchase.setProductModel(value);
                        break;
                    case 4:
                        projectPurchase.setProductUnit(dynamicConfig.value2Id(1, value));
                        break;
                    case 5:
                        projectPurchase.setProductCount(Double.parseDouble(value));
                        break;
                    case 6:
                        projectPurchase.setPrice(Double.parseDouble(value));
                        break;
                    case 7:
                        projectPurchase.setTotal(Double.parseDouble(value));
                        break;
                }
            }
            product = productRepository.findByName(projectPurchase.getProductName());
            if (product == null){
                wrong++;
                logger.error("can not find product for name:{}",projectPurchase.getProductName());
                continue;
            }
            projectPurchase.setRate(product.getRate());
            projectPurchase.setUnTaxCount(projectPurchase.getTotal() * (1 - product.getRate()));
            projectPurchase.setRateCount(projectPurchase.getTotal() * product.getRate());
            projectPurchase.setProjectId(projectId);
            projectPurchaseList.add(projectPurchase);
        }
        userRepositoryCustom.runSessionCommit(()->{
            ProjectPurchaseImport purchaseImport = projectPurchaseImportRepository.save(
                    new ProjectPurchaseImport(operator,projectId, importDate));
            FwUtil.safeEach(projectPurchaseList, (projectPurchase)->{
                projectPurchase.setImportId(purchaseImport.getId());
            });
            projectPurchaseRepository.save(projectPurchaseList);
        });
        return String.format("{\"success\":true,\"right\":%d,\"wrong\":%d}", projectPurchaseList.size(), wrong);
    }
}

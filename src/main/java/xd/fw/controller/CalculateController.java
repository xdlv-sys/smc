package xd.fw.controller;

import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.document.AbstractXlsxStreamingView;
import org.springframework.web.servlet.view.document.AbstractXlsxView;
import xd.fw.bean.Budget;
import xd.fw.bean.GroupItem;
import xd.fw.bean.Product;
import xd.fw.bean.ProjectOutSource;
import xd.fw.dao.BudgetRepository;
import xd.fw.dao.GroupItemRepository;
import xd.fw.dao.UserRepositoryCustom;
import xd.fw.mk.ExcelStreamView;
import xd.fw.service.IConst;
import xd.fw.util.FwException;
import xd.fw.util.FwUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.List;
import java.util.Map;

import static xd.fw.util.FwUtil.*;

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

    @Value("${tax_calculate_file_name}")
    String taxCalculateFileName;
    @Value("${calculate_groups}")
    String calculateGroups;

    @Autowired
    DynamicConfig dynamicConfig;

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

    @RequestMapping("exportTaxCalculate")
    @ResponseBody
    public ModelAndView exportTaxCalculate(int[] budgetIds) {
        AbstractXlsxView view = new ExcelStreamView("/calculate-tax-export.xlsx",taxCalculateFileName) {
            @Override
            protected void buildExcelDocument(Map<String, Object> model, Workbook workbook
                    , HttpServletRequest request, HttpServletResponse response) throws Exception {
                super.buildExcelDocument(model,workbook,request,response);
                Sheet sheet = workbook.getSheetAt(0);
                Budget budget;
                for (int i = 0; i < budgetIds.length; i++){
                    budget = budgetRepository.findOne(budgetIds[i]);
                    String rate = dynamicConfig.id2Value(2, "rate", budget.getProject().getRate());
                    int rateInt = Integer.parseInt(rate.substring(0, rate.length() -1));
                    float rateFloat = rateInt / 100f;
                    double unTaxCount = budget.getProject().getTotalCount() / (1 + rateFloat);
                    double saleCount = unTaxCount * rateFloat;
                    double[] inCount = {0};
                    safeEach(budget.getGroups(),(group)->{
                        if (!calculateGroups.contains(group.getName())){
                            return;
                        }
                        safeEach(group.getItems(), (item)->{
                            inCount[0] += item.getTotal() * item.getTaxRatio() / (item.getTaxRatio() + 1);
                        });
                    });
                    double shouldTaxCount = saleCount - inCount[0];
                    double taxPercent = shouldTaxCount / unTaxCount;

                    setCellValue(sheet,2 + i, 0,budget.getProject().getName());
                    setCellValue(sheet,2 + i, 1,budget.getProject().getTotalCount().toString());
                    setCellValue(sheet,2 + i, 2, rate);
                    setCellValue(sheet,2 + i, 3,String.valueOf(toFixed(unTaxCount, 2)));
                    setCellValue(sheet,2 + i, 4,String.valueOf(toFixed(saleCount, 2)));
                    setCellValue(sheet,2 + i, 5,String.valueOf(toFixed(inCount[0],2)));
                    setCellValue(sheet,2 + i, 6,String.valueOf(toFixed(shouldTaxCount,2)));
                    setCellValue(sheet,2 + i, 7,String.valueOf(toFixed(taxPercent,4)));
                }
            }
        };
        return new ModelAndView(view);
    }

}

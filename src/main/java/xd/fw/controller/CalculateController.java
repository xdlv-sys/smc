package xd.fw.controller;

import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.document.AbstractXlsxView;
import xd.fw.bean.Budget;
import xd.fw.bean.GroupItem;
import xd.fw.dao.BudgetRepository;
import xd.fw.dao.GroupItemRepository;
import xd.fw.dao.UserRepositoryCustom;
import xd.fw.mk.ExcelStreamView;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
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
    @Value("${tax_file_name}")
    String taxFileName;


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

    @RequestMapping("exportCalculate")
    @ResponseBody
    public ModelAndView exportCalculate(int id) {
        AbstractXlsxView view = new ExcelStreamView("/calculate-export.xlsx",taxFileName) {
            @Override
            protected void buildExcelDocument(Map<String, Object> model, Workbook workbook
                    , HttpServletRequest request, HttpServletResponse response) throws Exception {
                super.buildExcelDocument(model,workbook,request,response);
                Sheet sheet = workbook.getSheetAt(0);
                Budget budget = budgetRepository.findOne(id);
                setCellValue(sheet,1,1, budget.getProject().getName());

                int[] row = {3};
                safeEach(budget.getGroups(),(group)->{
                    if (!calculateGroups.contains(group.getName())){
                        return;
                    }
                    setCellValue(sheet,row[0]++, 0, group.getName());
                    safeEach(group.getItems(), (item)->{
                        setCellValue(sheet,row[0],0, item.getItemIndex().toString());
                        setCellValue(sheet,row[0],1, item.getMaterialName());
                        setCellValue(sheet,row[0],2, item.getModel());
                        setCellValue(sheet,row[0],3, item.getUnit());
                        setCellValue(sheet,row[0],4, item.getCount().toString());
                        setCellValue(sheet,row[0],5, item.getPrice().toString());
                        setCellValue(sheet,row[0],6, item.getTotal().toString());
                        setCellValue(sheet,row[0],7, String.format("%d%%",(int)(item.getTaxRatio() * 100)));
                        setCellValue(sheet,row[0],8, String.valueOf(toFixed(item.getTotal()/(item.getTaxRatio() + 1),2)));
                        setCellValue(sheet,row[0],9, String.valueOf(toFixed(item.getTotal() * item.getTaxRatio() /(item.getTaxRatio() + 1),2)));
                        row[0] ++;
                    });
                });
            }
        };
        return new ModelAndView(view);
    }

}

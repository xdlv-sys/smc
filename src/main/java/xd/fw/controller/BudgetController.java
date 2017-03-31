package xd.fw.controller;

import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import xd.fw.bean.Budget;
import xd.fw.bean.BudgetGroup;
import xd.fw.bean.GroupItem;
import xd.fw.bean.Product;
import xd.fw.dao.BudgetRepository;
import xd.fw.dao.ProductRepository;

import javax.annotation.PostConstruct;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.HashSet;

import static xd.fw.util.FwUtil.getCellValue;
import static xd.fw.util.FwUtil.parseFile;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("budget")
public class BudgetController extends BaseController {
    final static Byte MAN = 1, MATERIAL = 2, MACHINE = 3;
    @Autowired
    BudgetRepository budgetRepository;
    @Autowired
    ProductRepository productRepository;
    @Value("${project_name}")
    String projectName;

    @Value("${group_index}")
    String groupIndex;

    @Value("${calculate_groups}")
    String calculateGroups;

    String[] calculateGroupNames;
    @PostConstruct
    public void init(){
        calculateGroupNames = calculateGroups.split(" ");
    }

    @RequestMapping("obtainBudgets")
    @ResponseBody
    public PageContent obtainBudgets(int page, int limit) {
        Page<Budget> list = budgetRepository.findAll(pageRequest(page, limit));
        return page(list);
    }

    @RequestMapping("deleteBudget")
    @ResponseBody
    public String deleteBudget(int[] budgetIds) {
        for (int id : budgetIds) {
            budgetRepository.delete(id);
        }
        return DONE;
    }

    @RequestMapping("importBudget2")
    @ResponseBody
    public String importBudget2(@RequestParam("file") MultipartFile file, @RequestParam("userName") String userName, @RequestParam("projectId") int projectId) throws Exception {
        Workbook wb = parseFile(file.getInputStream());
        Budget budget = new Budget();
        budget.setProjectId(projectId);
        budget.setImportUser(userName);
        budget.setImportDate(new Timestamp(System.currentTimeMillis()));
        budget.setGroups(new HashSet<>());

        Sheet sheet = wb.getSheetAt(0);
        Cell cell;
        Row row;
        String value;
        int allCount = 0;
        BudgetGroup manGroup = null, materialGroup = null, machineGroup = null;
        GroupItem groupItem;

        for (int i = 0; ; i++) {
            row = sheet.getRow(i);
            if (row == null) {
                break;
            }
            cell = row.getCell(0);
            if (cell == null) {
                continue;
            }
            value = getCellValue(cell);
            if (value != null && value.startsWith(projectName)) {
                budget.setImportName(value.substring(projectName.length()));
                i++; // skip the table header
                continue;
            }
            if (parseInt(value) == null){
                continue;
            }
            groupItem = new GroupItem();
            groupItem.setCode(getCellValue(row.getCell(1)));
            groupItem.setMaterialName(getCellValue(row.getCell(2)));
            groupItem.setModel(getCellValue(row.getCell(3)));
            groupItem.setUnit(getCellValue(row.getCell(5)));
            groupItem.setCount(Double.parseDouble(getCellValue(row.getCell(6))));
            groupItem.setPrice(Double.parseDouble(getCellValue(row.getCell(7))));
            groupItem.setTotal(Double.parseDouble(getCellValue(row.getCell(9))));
            groupItem.setLocation(getCellValue(row.getCell(10)));
            groupItem.setProducer(getCellValue(row.getCell(11)));

            String code = groupItem.getCode();
            groupItem.setTaxRatio(userRepositoryCustom.runSessionProcess(()->{
                Product product = productRepository.findByCode(code);
                if (product != null){
                    return product.getRate().floatValue();
                }
                return null;
            }));
            allCount++;

            if (groupItem.getCode().startsWith("1")){
                manGroup = put(MAN,budget,manGroup, groupItem);
            } else if (groupItem.getCode().startsWith("2") || groupItem.getCode().startsWith("3")){
                materialGroup = put(MATERIAL,budget,materialGroup, groupItem);
            } else {
                machineGroup = put(MACHINE,budget,machineGroup, groupItem);
            }
        }
        userRepositoryCustom.saveBudget(budget);
        return String.format("{\"success\":true,\"right\":%d}", allCount);
    }

    private BudgetGroup put(Byte type, Budget budget,BudgetGroup group, GroupItem groupItem){
        // man
        if (group == null){
            group = new BudgetGroup();
            group.setGroupIndex(type);
            group.setName(calculateGroupNames[type - 1]);
            group.setItems(new ArrayList<>());
            budget.getGroups().add(group);
            group.setBudget(budget);
        }
        group.getItems().add(groupItem);
        groupItem.setGroup(group);
        return group;
    }

    /*@RequestMapping("importBudget")
    @ResponseBody
    public String importBudget(@RequestParam("file") MultipartFile file, @RequestParam("userName") String userName, @RequestParam("projectId") int projectId) throws Exception {
        Workbook wb = parseFile(file.getInputStream());
        Budget budget = new Budget();
        budget.setProjectId(projectId);
        budget.setImportUser(userName);
        budget.setImportDate(new Timestamp(System.currentTimeMillis()));
        budget.setGroups(new HashSet<>());

        String[] groupIndexes = groupIndex.split(" ");
        Sheet sheet = wb.getSheetAt(0);
        Cell cell;
        Row row;
        String value;
        int status = 0;
        int allCount = 0;
        int index;
        Integer itemIndex;
        BudgetGroup budgetGroup = null;
        GroupItem groupItem;

        boolean skipNull = false;

        for (int i = 0; ; i++) {
            row = sheet.getRow(i);
            if (row == null) {
                if (skipNull){
                    break;
                } else {
                    skipNull = true;
                    continue;
                }
            }
            cell = row.getCell(0);
            if (cell == null) {
                continue;
            }
            value = getCellValue(cell);

            switch (status) {
                case 0:
                    //find the import name first according to the special prefix
                    if (value != null && value.startsWith(projectName)) {
                        budget.setImportName(value.substring(projectName.length()));
                        status = 1;
                    }
                    break;
                case 1:
                    // search the group
                    if (value != null && (index = search(groupIndexes, value)) > -1) {
                        budgetGroup = new BudgetGroup();
                        budgetGroup.setBudget(budget);
                        budgetGroup.setGroupIndex((byte) index);
                        budgetGroup.setName(getCellValue(row.getCell(1)));
                        budgetGroup.setTotal(Double.parseDouble(getCellValue(row.getCell(8))));
                        budgetGroup.setItems(new ArrayList<>());
                        budget.getGroups().add(budgetGroup);
                    }
                    status = 2;
                    break;
                case 2:
                    // all items will be found here
                    if (value != null && (itemIndex = parseInt(value)) != null){
                        groupItem = new GroupItem();
                        groupItem.setItemIndex(itemIndex);
                        groupItem.setMaterialName(getCellValue(row.getCell(1)));
                        groupItem.setModel(getCellValue(row.getCell(2)));
                        groupItem.setUnit(getCellValue(row.getCell(4)));
                        groupItem.setCount(Double.parseDouble(getCellValue(row.getCell(5))));
                        groupItem.setPrice(Double.parseDouble(getCellValue(row.getCell(7))));
                        groupItem.setTotal(Double.parseDouble(getCellValue(row.getCell(8))));
                        groupItem.setGroup(budgetGroup);
                        if (budgetGroup != null){
                            budgetGroup.getItems().add(groupItem);
                        } else {
                            throw new FwException("line:" + i);
                        }
                        allCount++;
                    } else {
                        // met blank or another group flag retry to parse in group status 1
                        i--;
                        status = 1;
                    }

                    break;
            }
        }
        userRepositoryCustom.saveBudget(budget);
        return String.format("{\"success\":true,\"right\":%d}", allCount);
    }
*/
    private Integer parseInt(String value) {
        try {
             return (int)Double.parseDouble(value);
        } catch (Exception e) {
            return null;
        }
    }


}

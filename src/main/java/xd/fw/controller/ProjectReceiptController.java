package xd.fw.controller;

import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.document.AbstractXlsxView;
import xd.fw.bean.*;
import xd.fw.dao.*;
import xd.fw.mk.ExcelStreamView;
import xd.fw.service.IConst;
import xd.fw.util.FwException;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.*;

import static xd.fw.util.FwUtil.setCellValue;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("project-receipt")
public class ProjectReceiptController extends BaseController {
    @Autowired
    ProjectReceiptRepository projectReceiptRepository;

    @Autowired
    ContractProgressRepository contractProgressRepository;
    @Autowired
    ConstructionProgressRepository constructionProgressRepository;
    @Autowired
    ProjectAdditionRepository projectAdditionRepository;

    @Autowired
    ProjectRepository projectRepository;

    @Value("${progress_export_name}")
    String progressExportName;

    @Autowired
    DynamicConfig dynamicConfig;

    @RequestMapping("obtainReceipts")
    @ResponseBody
    public PageContent obtainReceipts(ProjectReceipt query) {
        return page(projectReceiptRepository.findAll(Example.of(query, queryMatcher())
                , new Sort(Sort.Direction.ASC, "belong")));
    }

    @RequestMapping("deleteReceipt")
    @ResponseBody
    public String deleteReceipt(int[] receiptIds) {
        userRepositoryCustom.runSessionCommit(() -> Arrays.stream(receiptIds).forEach(id -> projectReceiptRepository.delete(id)));
        return DONE;
    }

    @RequestMapping("saveReceipt")
    @ResponseBody
    public String saveReceipt(ProjectReceipt receipt) throws Exception {
        if (receipt.getId() == null
                && projectReceiptRepository.findByBelongAndProjectId(
                receipt.getBelong(), receipt.getProject().getId()) != null) {
            throw new FwException(1, "special period construction progress exists "
                    + receipt.getBelong());
        }
        receipt.setCreateTime(new Date(System.currentTimeMillis()));
        projectReceiptRepository.save(receipt);
        return DONE;
    }
    @RequestMapping("saveProgressRemark")
    @ResponseBody
    public String saveProgressRemark(ProjectAddition addition){
        projectAdditionRepository.save(addition);
        return DONE;
    }

    private boolean currentMonth(Date date, int month){
        Calendar instance = Calendar.getInstance();
        instance.setTime(date);
        return instance.get(Calendar.MONTH) == month;
    }

    @RequestMapping("receiptAndProgress")
    @ResponseBody
    public Map<String, Object > receiptAndProgress(int projectId, Date belong) {
        List<ContractProgress> contractProgresses =
                contractProgressRepository.findByProjectIdAndBelongIsLessThanEqualOrderByBelongAsc(projectId, belong);
        List<ConstructionProgress> constructionProgresses =
                constructionProgressRepository.findByProjectIdAndBelongIsLessThanEqualOrderByBelongAsc(projectId, belong);

        List<ProjectReceipt> projectReceipts = projectReceiptRepository.findByProjectIdAndBelongIsLessThanEqualOrderByBelongAsc(projectId, belong);
        double[] all = {0, 0, 0, 0,0,0, 0};
        Map<String, Object > ret = new HashMap<>();
        Calendar calendar = Calendar.getInstance();
        calendar.setTime(belong);
        int month = calendar.get(Calendar.MONTH);
        ret.put("year",calendar.get(Calendar.YEAR));
        ret.put("month",month + 1);

        for (ContractProgress contractProgress : contractProgresses) {
            if (currentMonth(contractProgress.getBelong(), month)) {
                all[1] = contractProgress.getFinished();
            } else {
                all[0] += contractProgress.getFinished();
            }
        }

        for (ConstructionProgress constructionProgress : constructionProgresses) {
            all[6] += constructionProgress.getArea();

            if (currentMonth(constructionProgress.getBelong(), month)) {
                all[3] = constructionProgress.getFinished();

            } else {
                all[2] += constructionProgress.getFinished();
            }
        }

        for (ProjectReceipt projectReceipt : projectReceipts) {
            if (currentMonth(projectReceipt.getBelong(), month)) {
                all[5] = projectReceipt.getCount();
            } else {
                all[4] += projectReceipt.getCount();
            }
        }

        Project project = projectRepository.findOne(projectId);
        ProjectAddition addition = projectAdditionRepository.findByProjectIdAndBelong(projectId, belong);


        ret.put("contract_last", all[0]);
        ret.put("contract_current", all[1]);
        ret.put("contract_remain", project.getTotalCount() - all[1] - all[0] );
        ret.put("contract_percent", 100 * (all[1] + all[0]) / project.getTotalCount() );

        ret.put("area", all[6]);

        ret.put("construction_last", all[2]);
        ret.put("construction_current", all[3]);
        ret.put("construction_all", all[2] + all[3]);

        ret.put("receipt_last", all[4]);
        ret.put("receipt_current", all[5]);
        ret.put("receipt_all", all[4] + all[5]);
        ret.put("receipt_percent", (all[5] + all[5]) * 100 / project.getTotalCount());

        if (addition != null){
            ret.put("addition_progress", addition.getProgress());
            ret.put("addition_progress2", addition.getProgress2());
            ret.put("addition_id", addition.getId());
        }

        return ret;
    }

    private int[] getCurrentYearAndMonth(Date belong){
        Calendar instance = Calendar.getInstance();
        instance.setTime(belong);
        return new int[] {instance.get(Calendar.YEAR), instance.get(Calendar.MONTH)};
    }

    @RequestMapping("exportProgress")
    @ResponseBody
    public ModelAndView exportProgress(int projectId, Date belong) {
        int[] yearAndMonth = getCurrentYearAndMonth(belong);
        String exportFileName = String.format(progressExportName,yearAndMonth[0], yearAndMonth[1]);
        Project project = projectRepository.findOne(projectId);

        Map<String, Object > map = receiptAndProgress(projectId, belong);

        AbstractXlsxView view = new ExcelStreamView("/project-receipt--export.xlsx", exportFileName){
            @Override
            protected void buildExcelDocument(Map<String, Object> model, Workbook workbook, HttpServletRequest request, HttpServletResponse response) throws Exception {
                super.buildExcelDocument(model, workbook, request, response);
                SimpleDateFormat sdf = new SimpleDateFormat(IConst.DEFAULT_DATE_PATTERN);
                Sheet sheet = workbook.getSheetAt(0);
                setCellValue(sheet, 2, 1, dynamicConfig.id2Value(2, "projectType", project.getProjectType()));
                setCellValue(sheet, 2, 2, project.getName());
                setCellValue(sheet, 2, 3, project.getManager());
                setCellValue(sheet, 2, 4, project.getTotalCount().toString());
                setCellValue(sheet, 2, 5, map.get("contract_last").toString());
                setCellValue(sheet, 2, 6, map.get("contract_remain").toString());
                setCellValue(sheet, 2, 7, map.get("contract_percent").toString());
                setCellValue(sheet, 2, 8, map.get("area").toString());
                setCellValue(sheet, 2, 9, sdf.format(project.getContractStartDate()));
                setCellValue(sheet, 2, 10, sdf.format(project.getContractEndTime()));
                setCellValue(sheet, 2, 11, map.get("construction_last").toString());
                setCellValue(sheet, 2, 12, map.get("construction_current").toString());
                setCellValue(sheet, 2, 13, map.get("construction_all").toString());
                setCellValue(sheet, 2, 14, map.get("receipt_last").toString());
                setCellValue(sheet, 2, 15, map.get("receipt_current").toString());
                setCellValue(sheet, 2, 16, map.get("receipt_all").toString());
                setCellValue(sheet, 2, 17, map.get("receipt_percent").toString());
                setCellValue(sheet, 2, 18, map.get("addition_progress") == null ? "" : map.get("addition_progress").toString() );
                setCellValue(sheet, 2, 19, map.get("addition_progress2") == null ? "" : map.get("addition_progress2").toString() );
            }
        };
        return new ModelAndView(view);
    }
}

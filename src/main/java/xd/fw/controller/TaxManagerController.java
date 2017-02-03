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
import xd.fw.bean.ConstructionProgress;
import xd.fw.bean.IPurchase;
import xd.fw.bean.Project;
import xd.fw.dao.*;
import xd.fw.mk.ExcelStreamView;
import xd.fw.service.IConst;
import xd.fw.util.FwUtil;

import javax.annotation.PostConstruct;
import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.*;

import static xd.fw.util.FwUtil.*;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("tax-manager")
public class TaxManagerController extends BaseController {
    @Value("${in_tax_export_name}")
    String inTaxExportName;
    @Value("${tax_export_name}")
    String taxExportName;

    @Value("${tax_query_export_name}")
    String taxQueryExportName;

    @Value("${product_ratio}")
    String ratio;
    Float[] ratios;

    @Autowired
    DynamicConfig dynamicConfig;
    @Autowired
    ProjectRepository projectRepository;
    @Autowired
    ProjectPurchaseRepository projectPurchaseRepository;
    @Autowired
    CompositePurchaseRepository compositePurchaseRepository;
    @Autowired
    EngineeringPurchaseRepository engineeringPurchaseRepository;
    @Autowired
    ConstructionProgressRepository constructionProgressRepository;

    @PostConstruct
    public void init() {
        String[] split = ratio.split(" ");
        ratios = new Float[split.length];
        safeEach(split, (p, i) -> ratios[i] = Float.parseFloat(p));
    }

    private String percent(double ratio) {
        return toFixed(ratio * 100, 1) + "%";
    }

    @RequestMapping("inCountAnalysis")
    @ResponseBody
    public Map<String, float[]> inCountAnalysis(int projectId, Date belong) {
        Map<String, float[]> map = new HashMap<>();
        FwUtil.safeEach(ratios, (p, i) -> map.put(percent(p), new float[8]));

        List<IPurchase> list = new ArrayList<>();
        list.addAll(projectPurchaseRepository.findByProjectId(projectId));
        list.addAll(compositePurchaseRepository.findByProjectId(projectId));
        list.addAll(engineeringPurchaseRepository.findByProjectId(projectId));

        float[] total = new float[5];
        FwUtil.safeEach(list, o -> {
            float[] data = map.get(percent(o.getRate()));
            if (data == null) {
                return;
            }
            if (o.getBelong().getTime() == belong.getTime()) {
                data[0] += o.getUnTaxCount();
                total[0] += o.getUnTaxCount();
                data[1] += o.getRateCount();
                total[1] += o.getRateCount();
                data[2] += o.getTotal();
            }
            data[3] += o.getUnTaxCount();
            total[2] += o.getUnTaxCount();
            data[4] += o.getRateCount();
            total[3] += o.getRateCount();
            data[5] += o.getTotal();
            total[4] += o.getTotal();
        });

        //process percent
        FwUtil.safeEach(map.values(), v -> {
            if (v[5] > 0) {
                v[7] = v[3] * 100 / v[5];
                if (v[2] > 0) {
                    v[6] = v[0] * 100 / v[5];
                }
            }
        });
        map.put("total", total);

        // to fixed 2 digital
        FwUtil.safeEach(map.values(), v -> toFixed(v, 2));

        return map;
    }

    @RequestMapping("exportInCount")
    @ResponseBody
    public ModelAndView exportInCount(int projectId, Date belong) {
        int[] yearAndMonth = getCurrentYearAndMonth(belong);
        String exportFileName = String.format(taxExportName, yearAndMonth[0], yearAndMonth[1]);
        Project project = projectRepository.findOne(projectId);
        SimpleDateFormat sdf = new SimpleDateFormat(IConst.DEFAULT_DATE_PATTERN);

        AbstractXlsxView view = new ExcelStreamView("/in-count-analysis-export.xlsx", exportFileName) {
            @Override
            protected void buildExcelDocument(Map<String, Object> model, Workbook workbook
                    , HttpServletRequest request, HttpServletResponse response) throws Exception {
                super.buildExcelDocument(model, workbook, request, response);
                Sheet sheet = workbook.getSheetAt(0);
                setCellValue(sheet, 1, 1, project.getName());
                setCellValue(sheet, 1, 6, sdf.format(belong));

                Map<String, float[]> map = inCountAnalysis(projectId, belong);
                FwUtil.safeEach(ratios, (p, i) -> {
                    float[] data = map.get(percent(p));
                    if (data == null) {
                        return;
                    }
                    setCellValue(sheet, 4 + i, 2, String.valueOf(data[0]));
                    setCellValue(sheet, 4 + i, 3, String.valueOf(data[1]));
                    setCellValue(sheet, 4 + i, 4, String.valueOf(data[6]));

                    setCellValue(sheet, 4 + i, 5, String.valueOf(data[3]));
                    setCellValue(sheet, 4 + i, 6, String.valueOf(data[4]));
                    setCellValue(sheet, 4 + i, 7, String.valueOf(data[7]));
                });
                float[] total = map.get("total");
                setCellValue(sheet, 11, 2, String.valueOf(total[0]));
                setCellValue(sheet, 11, 3, String.valueOf(total[1]));
                setCellValue(sheet, 11, 5, String.valueOf(total[2]));
                setCellValue(sheet, 11, 6, String.valueOf(total[3]));

                setCellValue(sheet, 12, 2, String.valueOf(total[4]));

            }
        };
        return new ModelAndView(view);
    }

    @RequestMapping("taxAnalysis")
    @ResponseBody
    public Map<String, float[][]> taxAnalysis(int projectId, Date belong) {
        Map<String, float[][]> map = new HashMap<>();
        Project project = projectRepository.findOne(projectId);
        String percent = dynamicConfig.id2Value(2, "rate", project.getRate());
        float rate = Integer.parseInt(percent.substring(0, percent.length() - 1)) / 100f;

        float[][] data = new float[2][5];
        map.put(percent, data);

        List<ConstructionProgress> progresses = constructionProgressRepository.findByProjectId(projectId);
        safeEach(progresses, p -> {
            if (p.getBelong().getTime() == belong.getTime()) {
                data[0][0] += p.getFinished();
            }
            data[1][0] += p.getFinished();
        });

        Map<String, float[]> inMap = inCountAnalysis(projectId, belong);
        float[] total = inMap.get("total");

        data[0][1] = data[0][0] * rate / (1 + rate);
        data[1][1] = data[1][0] * rate / (1 + rate);

        data[0][2] = total[1];
        data[1][2] = total[3];

        data[0][3] = data[0][1] - data[0][2];
        data[1][3] = data[1][1] - data[1][2];

        if (data[0][0] != 0){
            data[0][4] = data[0][3] / (data[0][0] / (1 + rate));
        }
        if (data[1][0] != 0){
            data[1][4] = data[1][3] / (data[1][0] / (1 + rate));
        }

        toFixed(data[0], 2);
        toFixed(data[1], 2);
        return map;
    }

    @RequestMapping("exportTax")
    @ResponseBody
    public ModelAndView exportTax(int projectId, Date belong) {
        int[] yearAndMonth = getCurrentYearAndMonth(belong);
        String exportFileName = String.format(taxExportName, yearAndMonth[0], yearAndMonth[1]);
        Project project = projectRepository.findOne(projectId);

        AbstractXlsxView view = new ExcelStreamView("/tax-analysis-export.xlsx", exportFileName) {
            @Override
            protected void buildExcelDocument(Map<String, Object> model, Workbook workbook
                    , HttpServletRequest request, HttpServletResponse response) throws Exception {
                super.buildExcelDocument(model, workbook, request, response);
                Sheet sheet = workbook.getSheetAt(0);
                setCellValue(sheet, 1, 1, project.getName());

                Map<String, float[][]> map = taxAnalysis(projectId, belong);
                float[][] data = null;
                for (Map.Entry<String, float[][]> e : map.entrySet()) {
                    setCellValue(sheet, 3, 0, e.getKey());
                    data = e.getValue();
                }
                assert data != null;

                setCellValue(sheet, 3, 1, String.valueOf(data[0][0]));
                setCellValue(sheet, 3, 2, String.valueOf(data[1][0]));

                setCellValue(sheet, 5, 1, String.valueOf(data[0][1]));
                setCellValue(sheet, 5, 2, String.valueOf(data[1][1]));

                setCellValue(sheet, 6, 1, String.valueOf(data[0][2]));
                setCellValue(sheet, 6, 2, String.valueOf(data[1][2]));

                setCellValue(sheet, 7, 1, String.valueOf(data[0][3]));
                setCellValue(sheet, 7, 2, String.valueOf(data[1][3]));

                setCellValue(sheet, 8, 1, String.valueOf(data[0][4]));
                setCellValue(sheet, 8, 2, String.valueOf(data[1][4]));
            }
        };
        return new ModelAndView(view);
    }

    @RequestMapping("taxQueryCompare")
    @ResponseBody
    public String[][] taxQueryCompare(Date belong) {
        List<Project> projects = projectRepository.findAll();
        List<String[]> ret = new ArrayList<>();
        safeEach(projects, project -> {
            String[] data = new String[11];
            data[0] = project.getName();

            taxAnalysis(project.getId(), belong).values().forEach(d -> {
                for (int i = 0; i < 5; i++) {
                    data[2 * i + 1] = String.valueOf(d[0][i]);
                    data[2 * i + 2] = String.valueOf(d[1][i]);
                }
            });
            ret.add(data);
        });
        return ret.toArray(new String[ret.size()][]);
    }

    @RequestMapping("exportTaxQuery")
    @ResponseBody
    public ModelAndView exportTaxQuery(Date belong) {
        int[] yearAndMonth = getCurrentYearAndMonth(belong);
        String exportFileName = String.format(taxQueryExportName, yearAndMonth[0], yearAndMonth[1]);

        AbstractXlsxView view = new ExcelStreamView("/tax-query-export.xlsx", exportFileName) {
            @Override
            protected void buildExcelDocument(Map<String, Object> model, Workbook workbook
                    , HttpServletRequest request, HttpServletResponse response) throws Exception {
                super.buildExcelDocument(model, workbook, request, response);
                Sheet sheet = workbook.getSheetAt(0);
                safeEach(taxQueryCompare(belong),(s,i)->{
                    setCellValue(sheet, 3 + i, 0, String.valueOf(i + 1));
                    safeEach(s, (d,j)->setCellValue(sheet, 3 + i, j + 1, d));
                });
            }
        };
        return new ModelAndView(view);
    }
}

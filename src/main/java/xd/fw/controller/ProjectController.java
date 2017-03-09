package xd.fw.controller;

import org.apache.poi.hssf.usermodel.HSSFCellStyle;
import org.apache.poi.ss.usermodel.*;
import org.apache.poi.xssf.streaming.SXSSFWorkbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.Sort;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.document.AbstractXlsxView;
import xd.fw.bean.Project;
import xd.fw.bean.ProjectOutSource;
import xd.fw.dao.ProjectRepository;
import xd.fw.mk.ExcelStreamView;
import xd.fw.service.IConst;
import xd.fw.util.FwException;
import xd.fw.util.FwUtil;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.text.SimpleDateFormat;
import java.util.Map;

import static xd.fw.util.FwUtil.setCellValue;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("projecting")
public class ProjectController extends BaseController {
    @Autowired
    ProjectRepository projectRepository;
    @Autowired
    DynamicConfig dynamicConfig;
    @Value("${project_export_name}")
    String projectExportName;

    @Value("${out_sources_heads}")
    String out_sources_heads;

    @RequestMapping("obtainProjects")
    @ResponseBody
    public PageContent obtainProjects(int page, int limit, Project query) {
        Page<Project> list = projectRepository.findAll(
                Example.of(query, queryMatcher()), pageRequest(page, limit, new Sort(Sort.Direction.DESC, "id")));
        return page(list);
    }

    @RequestMapping("saveProject")
    @ResponseBody
    public String saveProject(Project project) throws Exception {
        userRepositoryCustom.saveProject(project);
        return DONE;
    }

    @RequestMapping("exportProject")
    @ResponseBody
    public ModelAndView exportProject(int projectId) {
        Project project = projectRepository.findOne(projectId);
        AbstractXlsxView view = new ExcelStreamView("/project--export.xlsx", projectExportName){
            @Override
            protected void buildExcelDocument(Map<String, Object> model, Workbook workbook, HttpServletRequest request, HttpServletResponse response) throws Exception {
                super.buildExcelDocument(model, workbook, request, response);
                SimpleDateFormat sdf = new SimpleDateFormat(IConst.DEFAULT_DATE_PATTERN);
                Sheet sheet = workbook.getSheetAt(0);
                setCellValue(sheet, 1, 1, project.getName());
                setCellValue(sheet, 2, 1, project.getEmployer());
                setCellValue(sheet, 3, 1, dynamicConfig.id2Value(2, "projectMode", project.getProjectMode()));
                setCellValue(sheet, 3, 4, dynamicConfig.id2Value(2, "projectType", project.getProjectType()));
                setCellValue(sheet, 3, 7, project.getManager());
                setCellValue(sheet, 4, 1, project.getLicenseNumber());
                setCellValue(sheet, 4, 5, sdf.format(project.getLicenseDate()));

                setCellValue(sheet, 5, 1, project.getContractNumber());
                setCellValue(sheet, 5, 5, sdf.format(project.getContractSignDate()));
                setCellValue(sheet, 6, 1, sdf.format(project.getContractStartDate()));
                setCellValue(sheet, 6, 5, sdf.format(project.getContractEndTime()));
                setCellValue(sheet, 7, 1, project.getProjectLocation());
                setCellValue(sheet, 8, 1, dynamicConfig.id2Value(2, "supplyMode", project.getSupplyMode()));
                setCellValue(sheet, 9, 1, project.getTotalCount().toString());
                setCellValue(sheet, 9, 6, dynamicConfig.id2Value(2, "rate", project.getRate()));
                setCellValue(sheet, 9, 8, String.valueOf(project.getUntaxedCount()));
                setCellValue(sheet, 10, 1, dynamicConfig.confirm(project.getOutSource()));
                setCellValue(sheet, 10, 7, dynamicConfig.confirm(project.getAttach()));

                String[] heads = out_sources_heads.split(" ");
                ProjectOutSource projectOutSource;

                CellStyle headStyle = workbook.createCellStyle();
                Font font = workbook.createFont();
                font.setBold(true);
                headStyle.setAlignment(HSSFCellStyle.ALIGN_CENTER);

                for (int i = 0; project.getOutSources() != null
                        && i < project.getOutSources().size(); i++) {
                    projectOutSource = project.getOutSources().get(i);

                    setCellValue(sheet,13 + i * 9,0, heads[0] + (i + 1)).setCellStyle(headStyle); //project outsource 1

                    setCellValue(sheet,14 + i * 9,0, heads[1]);
                    setCellValue(sheet,14 + i * 9,1, projectOutSource.getContractName());

                    setCellValue(sheet,15 + i * 9,0, heads[2]);
                    setCellValue(sheet,15 + i * 9,1, projectOutSource.getUnitName());

                    setCellValue(sheet,16 + i * 9,0, heads[3]);
                    setCellValue(sheet,16 + i * 9,1, projectOutSource.getAddress());

                    setCellValue(sheet,17 + i * 9,0, heads[4]);
                    setCellValue(sheet,17 + i * 9,1, sdf.format(projectOutSource.getSignDate()));

                    setCellValue(sheet,18 + i * 9,0, heads[5]);
                    setCellValue(sheet,18 + i * 9,1, sdf.format(projectOutSource.getStartDate()));

                    setCellValue(sheet,19 + i * 9,0, heads[6]);
                    setCellValue(sheet,19 + i * 9,1, projectOutSource.getLocation());

                    setCellValue(sheet,20 + i * 9,0, heads[7]);
                    setCellValue(sheet,20 + i * 9,1, dynamicConfig.id2Value(2,"supply",projectOutSource.getSupply()));

                    setCellValue(sheet,21 + i * 9,0, heads[8]);
                    setCellValue(sheet,21 + i * 9,1, projectOutSource.getCount().toString());
                }
            }
        };
        return new ModelAndView(view);
    }


}

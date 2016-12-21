package xd.fw.controller;

import org.apache.commons.lang3.StringUtils;
import org.apache.poi.hssf.usermodel.*;
import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.ExampleMatcher;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import org.springframework.web.servlet.view.document.AbstractXlsxStreamingView;
import xd.fw.bean.Product;
import xd.fw.bean.ProductImport;
import xd.fw.dao.ProductImportRepository;
import xd.fw.dao.ProductRepository;
import xd.fw.dao.UserRepositoryCustom;
import xd.fw.service.IConst;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;
import java.io.InputStream;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;
import java.util.Map;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("product")
public class ProductController extends BaseController {
    @Autowired
    ProductRepository productRepository;
    @Autowired
    ProductImportRepository productImportRepository;
    @Autowired
    DynamicConfig dynamicConfig;
    @Autowired
    UserRepositoryCustom userRepositoryCustom;
    @Value("${product_heads}")
    String productHeads;
    @Value("${product_export_file_name}")
    String productExportFileName;

    @RequestMapping("obtainProducts")
    @ResponseBody
    public PageContent obtainProducts(int page, int limit, Product query) {
        Page<Product> list = productRepository.findAll(Example.of(query, queryMatcher()), pageRequest(page, limit));
        return page(list);
    }

    @RequestMapping("obtainProductImports")
    @ResponseBody
    public PageContent obtainProductImports(int page, int limit) {
        Page<ProductImport> list = productImportRepository.findAll(pageRequest(page, limit));
        return page(list);
    }

    @RequestMapping("deleteProduct")
    @ResponseBody
    public String deleteProduct(int[] productIds) {
        for (int id : productIds) {
            productRepository.delete(id);
        }
        return DONE;
    }

    @RequestMapping("saveProduct")
    @ResponseBody
    public String saveProduct(Product product) throws Exception {
        product.setCreateTime(new Timestamp(System.currentTimeMillis()));
        productRepository.save(product);
        return DONE;
    }

    @RequestMapping("approvalProduct")
    @ResponseBody
    public String approvalProduct(int[] productIds) throws Exception {
        Product product;
        for (int id : productIds) {
            product = productRepository.findOne(id);
            product.setStatus(IConst.STATUS_DONE);
            productRepository.save(product);
        }
        return DONE;
    }

    @RequestMapping("importProduct")
    @ResponseBody
    public String importProduct(@RequestParam("file") MultipartFile file, @RequestParam("userName") String userName) throws Exception {
        Workbook wb = parseFile(file.getInputStream());
        List<Product> productList = new ArrayList<>();
        Sheet sheet = wb.getSheetAt(0);
        Cell cell;
        Row row;
        String value;

        for (int i = 1; ; i++) {
            row = sheet.getRow(i);
            if (row == null || StringUtils.isBlank(getCellValue(row.getCell(0)))) {
                break;
            }
            Product product = new Product();
            product.setStatus(IConst.STATUS_INI);
            productList.add(product);
            for (int j = 1; j < 17; j++) {
                cell = row.getCell(j - 1);
                value = getCellValue(cell);
                if (StringUtils.isEmpty(value)) {
                    continue;
                }
                switch (j) {
                    case 1:
                        product.setCode(value);
                        break;
                    case 2:
                        product.setName(value);
                        break;
                    case 3:
                        product.setModel(value);
                        break;
                    case 4:
                        product.setNature(dynamicConfig.value2Id(1, value));
                        break;
                    case 5:
                        product.setGenre(dynamicConfig.value2Id(1, value.substring(2).trim()));
                        break;
                    case 6:
                        product.setBatch(value);
                        break;
                    case 7:
                        product.setStorage(Double.parseDouble(value));
                        break;
                    case 8:
                        product.setCountUnit(dynamicConfig.value2Id(1, value));
                        break;
                    case 9:
                        product.setWeightUnit(dynamicConfig.value2Id(1, value));
                        break;
                    case 10:
                        product.setBulkUnit(dynamicConfig.value2Id(1, value));
                        break;
                    case 11:
                        product.setTrademark(value);
                        break;
                    case 12:
                        product.setApproveCode(value);
                        break;
                    case 13:
                        product.setLineCode(value);
                        break;
                    case 14:
                        product.setPackageType(value);
                        break;
                    case 15:
                        product.setBillName(value);
                        break;
                    case 16:
                        product.setRate(Double.parseDouble(value));
                        break;
                }
            }
        }
        int[] result = userRepositoryCustom.batchSaveProduct(productList, userName);
        return String.format("{\"success\":true,\"right\":%d,\"wrong\":%d}", result[0], result[1]);
    }

    @RequestMapping("exportProduct")
    @ResponseBody
    public ModelAndView exportProduct(Product query) {
        List<Product> all = productRepository.findAll(Example.of(query, queryMatcher()));
        AbstractXlsxStreamingView view = new AbstractXlsxStreamingView(){
            @Override
            protected void buildExcelDocument(Map<String, Object> model, Workbook workbook
                    , HttpServletRequest request, HttpServletResponse response) throws Exception {
                response.setHeader("Content-Disposition","attachment; filename=" + writeDownloadFile(request,productExportFileName));
                Sheet sheet = createSheet(workbook,"sheet1");
                Row row;
                Product product;
                for (int rowCount = 0; rowCount < all.size();rowCount ++){
                    product = all.get(rowCount);
                    row = sheet.createRow(rowCount + 1);
                    row.createCell(0).setCellValue(product.getCode());
                    row.createCell(1).setCellValue(product.getName());
                    row.createCell(2).setCellValue(product.getModel());
                    row.createCell(3).setCellValue(dynamicConfig.id2Value(1,"nature",product.getNature()));
                    row.createCell(4).setCellValue(
                            String.format("%02d %s",product.getGenre(),dynamicConfig.id2Value(1,"genre",product.getGenre())));
                    row.createCell(5).setCellValue(product.getBatch());
                    if (product.getStorage() != null){
                        row.createCell(6).setCellValue(product.getStorage());
                    }
                    row.createCell(7).setCellValue(dynamicConfig.id2Value(1,"countUnit",product.getCountUnit()));
                    row.createCell(8).setCellValue(dynamicConfig.id2Value(1,"weightUnit",product.getWeightUnit()));
                    row.createCell(9).setCellValue(dynamicConfig.id2Value(1,"bulkUnit",product.getBulkUnit()));
                    row.createCell(10).setCellValue(product.getTrademark());
                    row.createCell(11).setCellValue(product.getApproveCode());
                    row.createCell(12).setCellValue(product.getLineCode());
                    row.createCell(13).setCellValue(product.getPackageType());
                    row.createCell(14).setCellValue(product.getBillName());
                    if (product.getRate() != null){
                        row.createCell(15).setCellValue(product.getRate());
                    }
                }
            }
        };
        return new ModelAndView(view);
    }

    private ExampleMatcher queryMatcher(){
        return ExampleMatcher.matching().withStringMatcher(ExampleMatcher.StringMatcher.CONTAINING);
    }

    private Sheet createSheet(Workbook wb, String name){
        CellStyle style = wb.createCellStyle();
        style.setAlignment(HSSFCellStyle.ALIGN_CENTER);

        Sheet sheet = wb.createSheet(name);
        Row row = sheet.createRow(0);
        row.setRowStyle(style);
        Cell cell;
        String[] titles = productHeads.split(" ");
        for (int i=0;i<titles.length;i++){
            cell = row.createCell(i);
            cell.setCellValue(titles[i]);
        }
        return sheet;
    }

    private static Workbook parseFile(InputStream inputStream) throws Exception {
        Workbook book = null;
        try {
            book = WorkbookFactory.create(inputStream);
        } finally {
            if (inputStream != null) {
                inputStream.close();
            }
        }
        return book;
    }

    private String getCellValue(Cell cell) {
        if (cell == null) {
            return null;
        }
        String value;
        try {
            value = String.valueOf(cell.getStringCellValue());
        } catch (IllegalStateException e) {
            try {
                value = String.valueOf(cell.getNumericCellValue());
            } catch (IllegalStateException e1) {
                try {
                    value = String.valueOf(cell.getBooleanCellValue());
                } catch (IllegalStateException e2) {
                    value = null;
                }
            }
        }
        return StringUtils.isBlank(value) || "无".equals(value) ? null : value.trim();
    }
}

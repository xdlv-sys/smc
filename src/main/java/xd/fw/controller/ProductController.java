package xd.fw.controller;

import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.*;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import xd.fw.bean.Product;
import xd.fw.bean.ProductImport;
import xd.fw.dao.ProductImportRepository;
import xd.fw.dao.ProductRepository;
import xd.fw.dao.UserRepositoryCustom;
import xd.fw.service.FwService;
import xd.fw.service.IConst;

import java.io.InputStream;
import java.sql.Timestamp;
import java.util.ArrayList;
import java.util.List;

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
    FwService fwService;
    @Autowired
    UserRepositoryCustom userRepositoryCustom;

    @RequestMapping("obtainProducts")
    @ResponseBody
    public PageContent obtainProducts(int page, int limit) {
        Page<Product> list = productRepository.findAll(pageRequest(page, limit));
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
    public String importProduct(@RequestParam("file") MultipartFile file, @RequestParam("userName")String userName) throws Exception {
        Workbook wb = parseFile(file.getInputStream());
        List<Product> productList = new ArrayList<>();
        Sheet sheet = wb.getSheetAt(0);
        Cell cell;
        Row row;
        String value;
        int importId = productImportRepository.save(new ProductImport(userName)).getId();

        for (int i = 1; ; i++) {
            row = sheet.getRow(i);
            if (row == null || StringUtils.isBlank(getCellValue(row.getCell(0)))) {
                break;
            }
            Product product = new Product();
            product.setImportId(importId);
            productList.add(product);
            for (int j = 1; j < 17; j++) {
                cell = row.getCell(j -1 );
                value = getCellValue(cell);
                if (StringUtils.isEmpty(value)) {
                    continue;
                }
                switch (j) {
                    case 1 :
                        product.setCode(value);
                        break;
                    case 2 :
                        product.setName(value);
                        break;
                    case 3:
                        product.setModel(value);
                        break;
                    case 4:
                        product.setNature(fwService.value2Id(1, value));
                        break;
                    case 5:
                        product.setGenre(fwService.value2Id(1, value.substring(2).trim()));
                        break;
                    case 6:
                        product.setBatch(value);
                        break;
                    case 7:
                        product.setStorage(Double.parseDouble(value));
                        break;
                    case 8:
                        product.setCountUnit(fwService.value2Id(1,value));
                        break;
                    case 9:
                        product.setWeightUnit(fwService.value2Id(1,value));
                        break;
                    case 10:
                        product.setBulkUnit(fwService.value2Id(1,value));
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
        int[] result = userRepositoryCustom.batchSaveProduct(productList);

        return String.format("{\"success\":true,\"right\":%d,\"wrong\":%d}",result[0],result[1]);
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
        String value = null;
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

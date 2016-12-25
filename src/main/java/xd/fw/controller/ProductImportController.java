package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.dao.ProductImportRepository;

@Controller
@RequestMapping("product-import")
public class ProductImportController extends BaseController{
    @Autowired
    ProductImportRepository productImportRepository;

    @RequestMapping("deleteProductImport")
    @ResponseBody
    public String deleteProduct(int[] productImportIds) {
        userRepositoryCustom.deleteImport(productImportIds);
        return DONE;
    }

    @RequestMapping("approveProductImport")
    @ResponseBody
    public String approveImport(int[] productImportIds) {
        userRepositoryCustom.approveImport(productImportIds);
        return DONE;
    }
}
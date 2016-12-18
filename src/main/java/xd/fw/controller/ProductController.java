package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.DynamicConf;
import xd.fw.bean.Product;
import xd.fw.bean.ProductImport;
import xd.fw.dao.ConfRepository;
import xd.fw.dao.ProductImportRepository;
import xd.fw.dao.ProductRepository;
import xd.fw.service.IConst;

import java.sql.Timestamp;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("product")
public class ProductController extends BaseController{
    @Autowired
    ProductRepository productRepository;
    @Autowired
    ProductImportRepository productImportRepository;

    @RequestMapping("obtainProducts")
    @ResponseBody
    public PageContent obtainProducts(int page, int limit){
        Page<Product> list = productRepository.findAll(pageRequest(page, limit));
        return page(list);
    }

    @RequestMapping("obtainProductImports")
    @ResponseBody
    public PageContent obtainProductImports(int page, int limit){
        Page<ProductImport> list = productImportRepository.findAll(pageRequest(page, limit));
        return page(list);
    }

    @RequestMapping("deleteProduct")
    @ResponseBody
    public String deleteProduct(int[] productIds) {
        for (int id : productIds){
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
        for (int id : productIds){
            product = productRepository.findOne(id);
            product.setStatus(IConst.STATUS_DONE);
            productRepository.save(product);
        }
        return DONE;
    }


}

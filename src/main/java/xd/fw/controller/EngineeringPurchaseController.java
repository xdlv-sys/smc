package xd.fw.controller;

import org.apache.commons.lang3.StringUtils;
import org.apache.poi.ss.usermodel.Cell;
import org.apache.poi.ss.usermodel.Row;
import org.apache.poi.ss.usermodel.Sheet;
import org.apache.poi.ss.usermodel.Workbook;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import xd.fw.bean.Product;
import xd.fw.bean.ProjectPurchase;
import xd.fw.bean.ProjectPurchaseImport;
import xd.fw.dao.*;
import xd.fw.util.FwUtil;

import java.util.ArrayList;
import java.util.Arrays;
import java.util.Date;
import java.util.List;

/**
 * Created by xd on 2017/1/10.
 */
@Controller
@RequestMapping("engineering-purchase")
public class EngineeringPurchaseController extends BaseController{
    @Autowired
    DynamicConfig dynamicConfig;
    @Autowired
    ProductRepository productRepository;

    @Autowired
    EngineeringPurchaseRepository engineeringPurchaseRepository;
    @Autowired
    CompositePurchaseRepository compositePurchaseRepository;

    @RequestMapping("obtainEngineeringPurchases")
    @ResponseBody
    public PageContent obtainEngineeringPurchases(int page, int limit, int dept,Date startDate, Date endDate) {
        return null;
    }
}

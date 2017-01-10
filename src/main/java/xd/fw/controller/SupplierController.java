package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Example;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import org.springframework.web.servlet.ModelAndView;
import xd.fw.bean.Supplier;
import xd.fw.bean.SupplierType;
import xd.fw.dao.SupplierRepository;
import xd.fw.dao.SupplierSubTypeRepository;
import xd.fw.dao.SupplierTypeNameRepository;
import xd.fw.dao.SupplierTypeRepository;
import xd.fw.util.FwException;
import xd.fw.util.FwUtil;
import xd.fw.util.I18n;

import javax.annotation.PostConstruct;
import java.io.File;
import java.io.IOException;

/**
 * Created by xd on 2016/12/14.
 */
@Controller
@RequestMapping("supplier")
public class SupplierController extends BaseController {
    @Autowired
    SupplierRepository supplierRepository;
    @Autowired
    SupplierSubTypeRepository supplierSubTypeRepository;
    @Autowired
    SupplierTypeRepository supplierTypeRepository;
    @Autowired
    SupplierTypeNameRepository supplierTypeNameRepository;

    File supplierDir;
    String supplierFileDirectory = "supplier-files";

    @PostConstruct
    public void init() {
        supplierDir = new File(I18n.getWebInfDir(), supplierFileDirectory + "/");
        if (!supplierDir.exists() && !supplierDir.mkdir()) {
            throw new FwException("failed to create directory for storage of supplier files ");
        }
    }

    @RequestMapping("obtainSupplierTypeNames")
    @ResponseBody
    public PageContent obtainSupplierTypeNames() {
        return page(supplierTypeNameRepository.findAll());
    }

    @RequestMapping("obtainSuppliers")
    @ResponseBody
    public PageContent obtainSuppliers(int page, int limit, Supplier query) {
        return page(supplierRepository.findAll(Example.of(query, queryMatcher()),pageRequest(page, limit)));
    }


    @RequestMapping("saveSupplier")
    @ResponseBody
    public String saveSupplier(
            @RequestParam(required = false) MultipartFile licenseImgF
            , @RequestParam(required = false) MultipartFile openAccountImgF
            , @RequestParam(required = false) MultipartFile organizationImgF
            , @RequestParam(required = false) MultipartFile registryImgF, Supplier supplier) throws IOException {
        Integer supplierId = userRepositoryCustom.runSessionProcess(() -> {
            Supplier savedSupplier = supplierRepository.save(supplier);
            FwUtil.safeEach(savedSupplier.getSupplierTypes(), o -> {
                o.setSupplier(savedSupplier);
                SupplierType supplierType = supplierTypeRepository.save(o);
                FwUtil.safeEach(o.getSupplierSubTypes(), s->{
                    s.setSupplierType(supplierType);
                    supplierSubTypeRepository.save(s);
                });
            });
            return savedSupplier.getId();
        });
        transferTo(licenseImgF, supplierId);
        transferTo(openAccountImgF, supplierId);
        transferTo(organizationImgF, supplierId);
        transferTo(registryImgF, supplierId);
        return DONE;
    }

    @RequestMapping("showImage")
    public ModelAndView showImage(int supplierId, int type) {
        Supplier supplier = supplierRepository.findOne(supplierId);
        String name;
        switch (type) {
            case 1:
                name = supplier.getLicenseImg();
                break;
            case 2:
                name = supplier.getRegistryImg();
                break;
            case 3:
                name = supplier.getOrganizationImg();
                break;
            case 4:
                name = supplier.getOpenAccountImg();
                break;
            default:
                throw new FwException("invalidate type for supplier image file");
        }
        return new ModelAndView("/WEB-INF/" + supplierFileDirectory
                + "/" + makeKey(supplierId, name));

    }


    private void transferTo(MultipartFile file, Integer supplierId) throws IOException {
        if (file == null) {
            return;
        }
        file.transferTo(new File(supplierDir
                , makeKey(supplierId, file.getOriginalFilename())));
    }

    private String makeKey(int supplierId, String fileName) {
        return String.format("%d-%s", supplierId, fileName);
    }
}

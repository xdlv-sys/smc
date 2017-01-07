package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.multipart.MultipartFile;
import xd.fw.bean.Supplier;
import xd.fw.bean.SupplierType;
import xd.fw.dao.SupplierRepository;
import xd.fw.dao.SupplierSubTypeRepository;
import xd.fw.dao.SupplierTypeRepository;
import xd.fw.dao.UserRepositoryCustom;
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
    UserRepositoryCustom userRepositoryCustom;

    File supplierDir;

    @PostConstruct
    public void init() {
        supplierDir = new File(I18n.getWebInfDir(), "supplier-files/");
        if (!supplierDir.exists() && !supplierDir.mkdir()) {
            throw new FwException("failed to create directory for storage of supplier files ");
        }
    }

    @RequestMapping("obtainSuppliers")
    @ResponseBody
    public PageContent obtainSuppliers(int page, int limit) {
        return page(supplierRepository.findAll(pageRequest(page, limit)));
    }

    @RequestMapping("saveSupplier")
    @ResponseBody
    public String saveSupplier(
            @RequestParam(required = false)MultipartFile licenseImgF
            , @RequestParam(required = false)MultipartFile openAccountImgF
            , @RequestParam(required = false)MultipartFile organizationImgF
            ,@RequestParam(required = false) MultipartFile registryImgF
            , Supplier supplier) throws IOException {


        Integer supplierId = userRepositoryCustom.runSessionProcess(() -> {
            if (supplier.getId() != null) {
                Supplier supplierToSaved = supplierRepository.findOne(supplier.getId());
                supplierTypeRepository.delete(supplierToSaved.getSupplierTypes());
                supplierSubTypeRepository.delete(supplierToSaved.getSupplierSubTypes());
            }

            Supplier savedSupplier = supplierRepository.save(supplier);
            FwUtil.safeEach(savedSupplier.getSupplierTypes(), o -> {
                o.setSupplier(savedSupplier);
                supplierTypeRepository.save(o);
            });
            FwUtil.safeEach(savedSupplier.getSupplierSubTypes(), s -> {
                s.setSupplier(savedSupplier);
                supplierSubTypeRepository.save(s);
            });
            return savedSupplier.getId();
        });
        transferTo(licenseImgF, supplierId);
        transferTo(openAccountImgF, supplierId);
        transferTo(organizationImgF, supplierId);
        transferTo(registryImgF, supplierId);
        return DONE;
    }
    private void transferTo(MultipartFile file, Integer supplierId) throws IOException {
        if (file == null){
            return;
        }
        file.transferTo(new File(supplierDir, String.format("%d-%s"
                , supplierId, file.getOriginalFilename())));
    }
}

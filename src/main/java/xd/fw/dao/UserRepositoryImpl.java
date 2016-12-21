package xd.fw.dao;

import org.slf4j.Logger;
import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xd.fw.bean.*;
import xd.fw.service.IConst;
import xd.fw.util.FwUtil;

import java.util.ArrayList;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by xd on 2016/12/6.
 */
@Service
@Transactional(readOnly = true)
public class UserRepositoryImpl implements UserRepositoryCustom{

    @Autowired
    UserRepository userRepository;
    @Autowired
    DeptRepository deptRepository;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    ModRepository modRepository;
    @Autowired
    ProductRepository productRepository;
    @Autowired
    ProductImportRepository productImportRepository;

    Logger logger = LoggerFactory.getLogger(UserRepositoryImpl.class);

    @Override
    @Transactional
    public void saveUser(User user) throws Exception {
        User record;
        if (user.getId() != null) {
            record = userRepository.findOne(user.getId());
            if (!record.getPassword().equals(user.getPassword())){
                user.setPassword(FwUtil.md5(user.getPassword()));
            }
            //merge(user);
        } else {
             user.setPassword(FwUtil.md5(user.getPassword()));
            //save(user);
        }
        user.setDept(deptRepository.findOne(user.getDept().getId()));

        List<Role> roles = user.getRoles() != null ? user.getRoles().stream().map(
                role -> roleRepository.findOne(role.getId())).collect(Collectors.toList()) : new ArrayList<>();
        user.setRoles(roles);
        userRepository.save(user);
    }

    @Override
    @Transactional
    public void saveRole(Role role, int deptId) throws Exception {
        Role record = role;
        if (role.getId() != null) {
            record = roleRepository.findOne(role.getId());
        }

        List<Mod> mods = new ArrayList<>();
        FwUtil.safeEach(role.getMods(),m->{
            mods.add(modRepository.findOne(m.getId()));
        });
        record.setMods(mods);
        roleRepository.save(record);

        Dept dept = deptRepository.findOne(deptId);
        FwUtil.replaceOrAddListItem(dept.getRoles(), record, (t,o)->t.getId().equals(o.getId()));
        deptRepository.save(dept);
    }

    @Override
    @Transactional
    public int[] batchSaveProduct(List<Product> productList, String userName) {
        int [] result = {0, 0};
        int importId = productImportRepository.save(new ProductImport(userName)).getId();

        FwUtil.safeEach(productList,p->{
            try{
                p.setImportId(importId);
                productRepository.save(p);
                result[0] ++;
            } catch (Throwable e) {
                result[1]++;
                logger.error("",e);
            }
        });
        return result;
    }

    @Override
    @Transactional
    public void approveImport(int[] productImportIds) {
        productImportRepository.updateStatusByIds(IConst.STATUS_DONE,productImportIds);
        productRepository.updateStatusByIds(IConst.STATUS_DONE, productImportIds);
    }

    @Override
    @Transactional
    public void deleteImport(int[] productImportIds) {
        productImportRepository.deleteImportsByIds(productImportIds);
        productRepository.deleteProducts(productImportIds);
    }
}

package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.Role;
import xd.fw.bean.User;
import xd.fw.dao.RoleRepository;
import xd.fw.dao.UserRepository;
import xd.fw.service.FwService;

import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("role")
public class RoleController extends BaseController {

    @Autowired
    FwService fwService;
    @Autowired
    RoleRepository roleRepository;
    @Autowired
    UserRepository userRepository;

    @RequestMapping("obtainUserRoles")
    @ResponseBody
    public List<Role> obtainUserRoles(int userId) {
        return userRepository.findOne(userId).getRoles();
    }

    @RequestMapping("obtainRoles")
    @ResponseBody
    public PageContent obtainRoles(int page, int limit) {
        return page(roleRepository.findAll(pageRequest(page, limit)));
    }

    @RequestMapping("deleteRole")
    @ResponseBody
    public String deleteRole(int[] roleIds) {
        for (int id : roleIds) {
            roleRepository.delete(id);
        }
        return DONE;
    }

    @RequestMapping("saveRole")
    @ResponseBody
    public String saveRole(Role role) throws Exception {
        roleRepository.save(role);
        return DONE;
    }
}
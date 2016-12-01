package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.Role;
import xd.fw.bean.User;
import xd.fw.service.FwService;

import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("role")
public class RoleController extends BaseController {

    @Autowired
    FwService fwService;

    @RequestMapping("obtainUserRoles")
    @ResponseBody
    public Set<Role> obtainUserRoles(int userId) {
        return fwService.runInSession((htp)->htp.get(User.class, userId).getRoles());
    }

    @RequestMapping("obtainRoles")
    @ResponseBody
    public PageContent obtainRoles(int start, int limit) {
        int total = fwService.getAllCount(Role.class);
        List<Role> list = fwService.getList(Role.class, null, start, limit);
        return page(total, list);
    }

    @RequestMapping("deleteRole")
    @ResponseBody
    public String deleteRole(int[] roleIds) {
        for (int id : roleIds) {
            fwService.delete(Role.class, id);
        }
        return DONE;
    }

    @RequestMapping("saveRole")
    @ResponseBody
    public String saveRole(Role role) throws Exception {
        fwService.saveOrUpdateRole(role);
        return DONE;
    }
}
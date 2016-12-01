package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.Mod;
import xd.fw.bean.Role;
import xd.fw.service.FwService;

import java.util.ArrayList;
import java.util.List;
import java.util.Set;

@Controller
@RequestMapping("mod")
public class ModController extends BaseController{

    @Autowired
    FwService fwService;

    @RequestMapping("obtainModsByRole")
    @ResponseBody
    public Set<Mod> obtainModsByRole(int roleId) throws Exception{
        return fwService.get(Role.class,roleId).getMods();
    }

    @RequestMapping("obtainMods")
    @ResponseBody
    public PageContent obtainMods(){
        int total = fwService.getAllCount(Mod.class);
        List<Mod> list = fwService.getList(Mod.class, null, 0, -1);
        return page(total, list);
    }

    @RequestMapping("deleteMod")
    @ResponseBody
    public String deleteMod(int[] modIds) {
        for (int id : modIds){
            fwService.delete(Mod.class, id);
        }
        return DONE;
    }

    @RequestMapping("saveMod")
    @ResponseBody
    public String saveMod(Mod mod) throws Exception {
        fwService.saveOrUpdate(mod);
        return DONE;
    }
}
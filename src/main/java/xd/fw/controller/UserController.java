package xd.fw.controller;

import com.fasterxml.jackson.databind.deser.Deserializers;
import org.apache.commons.lang3.ArrayUtils;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.util.ListUtils;
import xd.fw.bean.User;
import xd.fw.service.FwService;
import xd.fw.util.FwUtil;

import java.util.Arrays;
import java.util.List;
import java.util.Map;

@Controller
@RequestMapping("user")
public class UserController extends BaseController{
    @Autowired
    ApplicationContext applicationContext;

    @Autowired
    FwService fwService;
    @Value("${version}")
    String version;

    @Value("${web-name}")
    String webName;

	@RequestMapping("userLogin")
    @ResponseBody
    public PageContent userLogin(User user)throws Exception {
	    user.setPassword(FwUtil.md5(user.getPassword()));
        List<User> users = fwService.findByExample(user);
		return page(1,ListUtils.isEmpty(users)? null : users.get(0));

	}
    @RequestMapping("obtainUsers")
    @ResponseBody
    public PageContent obtainUsers(int start, int limit){
        int total = fwService.getAllCount(User.class);
        List<User> list = fwService.getList(User.class, null, start, limit);
        return page(total, list);
    }

    @RequestMapping("deleteUser")
    @ResponseBody
    public String deleteUser(int[] userIds) {
        for (int id : userIds){
            fwService.delete(User.class, id);
        }
        return DONE;
    }

    @RequestMapping("saveUser")
    @ResponseBody
    public String saveUser(User user) throws Exception {
        fwService.saveOrUpdateUser(user);
        return DONE;
    }

    @RequestMapping("version")
    @ResponseBody
	public String version(){
        return String.format("{\"name\":\"%s\",\"version\":\"%s\"}",webName,version);
    }
}
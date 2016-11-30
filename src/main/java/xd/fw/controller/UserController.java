package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.thymeleaf.util.ListUtils;
import xd.fw.bean.User;
import xd.fw.service.FwService;
import xd.fw.util.FwUtil;

import java.util.List;

@Controller
@RequestMapping("user")
public class UserController {
    @Autowired
    FwService fwService;
    @Value("${version}")
    String version;

    @Value("${web-name}")
    String webName;

	@RequestMapping("userLogin")
    @ResponseBody
    public User userLogin(User user)throws Exception {
	    user.setPassword(FwUtil.md5(user.getPassword()));
        List<User> users = fwService.findByExample(user);
		return ListUtils.isEmpty(users) ? null : users.get(0);

	}
    @RequestMapping("version")
    @ResponseBody
	public String version(){
        return String.format("{\"name\":\"%s\",\"version\":\"%s\"}",webName,version);
    }
}
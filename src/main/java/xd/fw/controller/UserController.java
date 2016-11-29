package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.User;
import xd.fw.model.Shop;
import xd.fw.service.FwService;

@Controller
@RequestMapping("/user")
public class UserController {
    @Autowired
    FwService fwService;
    @Value("${version}")
    String version;

	@RequestMapping("userLogin")
    @ResponseBody
    public User userLogin() {
		return fwService.get(User.class,-2);

	}
    @RequestMapping("version")
    @ResponseBody
	public String version(){
        return version;
    }

}
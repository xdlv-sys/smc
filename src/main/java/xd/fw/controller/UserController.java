package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.data.domain.Example;
import org.springframework.data.domain.Page;
import org.springframework.data.domain.PageRequest;
import org.springframework.data.domain.Pageable;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.ModelAndView;
import org.thymeleaf.util.ListUtils;
import xd.fw.bean.Role;
import xd.fw.bean.User;
import xd.fw.dao.UserRepository;
import xd.fw.dao.UserRepositoryCustom;
import xd.fw.service.FwService;
import xd.fw.util.FwException;
import xd.fw.util.FwUtil;

import javax.servlet.http.HttpSession;
import java.util.List;

@Controller
@RequestMapping("user")
public class UserController extends BaseController{
    @Autowired
    ApplicationContext applicationContext;

    static final String USER_KEY = "USER_KEY";

    @Autowired
    FwService fwService;
    @Autowired
    UserRepository userRepository;

    @Autowired
    UserRepositoryCustom userRepositoryCustom;

    @Value("${version}")
    String version;

    @Value("${web-name}")
    String webName;

	@RequestMapping("userLogin")
    @ResponseBody
    public ModelRequest userLogin(User user, HttpSession session)throws Exception {
        User dbUser = userRepository.findByName(user.getName());
        session.setAttribute(USER_KEY, dbUser);
		return modelRequest(dbUser);

	}
    @RequestMapping("userLogout")
	public ModelAndView userLogout(HttpSession session){
        session.removeAttribute(USER_KEY);
        return new ModelAndView("index.jsp");
    }

    @RequestMapping("obtainUsers")
    @ResponseBody
    public PageContent obtainUsers(int page, int limit){
        Page<User> list = userRepository.findAll(pageRequest(page, limit));
        return page(list);
    }

    @RequestMapping("deleteUser")
    @ResponseBody
    public String deleteUser(int[] userIds) {
        for (int id : userIds){
            userRepository.delete(id);
        }
        return DONE;
    }

    @RequestMapping("saveUser")
    @ResponseBody
    public String saveUser(User user) throws Exception {
        userRepositoryCustom.saveUser(user);
        return DONE;
    }

    @RequestMapping("version")
    @ResponseBody
	public String version(){
        return String.format("{\"name\":\"%s\",\"version\":\"%s\"}",webName,version);
    }
}
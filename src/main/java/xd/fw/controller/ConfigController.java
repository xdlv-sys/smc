package xd.fw.controller;

import com.fasterxml.jackson.databind.deser.Deserializers;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.data.domain.Page;
import org.springframework.stereotype.Controller;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import xd.fw.bean.DynamicConf;
import xd.fw.bean.User;
import xd.fw.dao.ConfRepository;

/**
 * Created by xd on 2016/12/7.
 */
@Controller
@RequestMapping("config")
public class ConfigController extends BaseController{
    @Autowired
    ConfRepository confRepository;

    @RequestMapping("obtainConfigs")
    @ResponseBody
    public PageContent obtainConfigs(int page, int limit){
        Page<DynamicConf> list = confRepository.findAll(pageRequest(page, limit));
        return page(list);
    }
}

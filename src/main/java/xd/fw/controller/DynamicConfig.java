package xd.fw.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xd.fw.bean.DynamicConf;
import xd.fw.dao.ConfRepository;
import xd.fw.util.Conf;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by xd on 12/21/2016.
 */
@Service
public class DynamicConfig{
    @Autowired
    ConfRepository confRepository;
    Map<String, Byte> value2Id = new HashMap<>();
    Map<String, String> id2Value = new HashMap<>();
    @PostConstruct
    public void init(){
        List<DynamicConf> all = confRepository.findAll();
        for (DynamicConf conf : all){
            byte value = Byte.parseByte(
                    conf.getConfName().substring(conf.getConfName().lastIndexOf(".") + 1));
            value2Id.put(conf.getGroupNo() + "-" + conf.getConfValue(), value);
            id2Value.put(conf.getGroupNo() + "-" + conf.getConfName(),conf.getConfValue());
        }
    }

    byte value2Id(int groupNo, String value) {
        return value2Id.get(groupNo + "-" + value);
    }

    String id2Value(int groupNo, String name, byte value){
        return id2Value.get(groupNo + "-" + name + "." + value);
    }
}

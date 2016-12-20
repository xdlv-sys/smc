package xd.fw.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xd.fw.bean.DynamicConf;
import xd.fw.dao.ConfRepository;

import javax.annotation.PostConstruct;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

/**
 * Created by xd on 2016/12/4.
 */
@Service
@Transactional(readOnly = true)
public class FwServiceImpl implements FwService{
    @Autowired
    ConfRepository confRepository;
    Map<String, Byte> value2Id = new HashMap<>();
    @PostConstruct
    public void init(){
        List<DynamicConf> all = confRepository.findAll();
        for (DynamicConf conf : all){
            value2Id.put(conf.getGroupNo() + "-" + conf.getConfValue(),Byte.parseByte(
                    conf.getConfName().substring(conf.getConfName().lastIndexOf(".") + 1)));
        }
    }

    @Override
    public byte value2Id(int groupNo, String value) {
        return value2Id.get(groupNo + "-" + value);
    }

}

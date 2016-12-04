package xd.fw.service;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import org.springframework.transaction.annotation.Transactional;
import xd.fw.dao.UserRepository;

/**
 * Created by xd on 2016/12/4.
 */
@Service
@Transactional(readOnly = true)
public class FwServiceImpl implements FwService{
    @Autowired
    UserRepository userRepository;
}

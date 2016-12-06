package xd.fw.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xd.fw.bean.User;

/**
 * Created by xd on 2016/12/6.
 */
@Service
public class UserRepositoryImpl implements UserRepositoryCustom{

    @Autowired
    UserRepository userRepository;

    @Override
    public void saveUser(User user) {
        userRepository.save(user);
    }
}

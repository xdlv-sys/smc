package xd.fw.dao;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;
import xd.fw.bean.Role;
import xd.fw.bean.User;
import xd.fw.util.FwUtil;

import java.util.ArrayList;
import java.util.HashSet;
import java.util.List;
import java.util.stream.Collectors;

/**
 * Created by xd on 2016/12/6.
 */
@Service
public class UserRepositoryImpl implements UserRepositoryCustom{

    @Autowired
    UserRepository userRepository;
    @Autowired
    RoleRepository roleRepository;

    @Override
    public void saveUser(User user) throws Exception {
        User record;
        if (user.getId() != null) {
            record = userRepository.findOne(user.getId());
            if (!record.getPassword().equals(user.getPassword())){
                user.setPassword(FwUtil.md5(user.getPassword()));
            }
            //merge(user);
        } else {
            user.setPassword(FwUtil.md5(user.getPassword()));
            //save(user);
        }
        List<Role> roles = user.getRoles().stream().map(role -> roleRepository.findOne(role.getId())).collect(Collectors.toList());
        user.setRoles(roles);
        userRepository.save(user);
    }
}

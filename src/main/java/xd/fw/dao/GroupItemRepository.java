package xd.fw.dao;

import org.springframework.data.jpa.repository.JpaRepository;
import xd.fw.bean.GroupItem;

public interface GroupItemRepository extends JpaRepository<GroupItem, Integer> {
}
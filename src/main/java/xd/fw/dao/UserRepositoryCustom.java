package xd.fw.dao;

import xd.fw.bean.*;

import java.util.List;

public interface UserRepositoryCustom {

    void saveUser(User user) throws Exception;

    void saveRole(Role role, int deptId) throws Exception ;

    int[] batchSaveProduct(List<Product> productList, String userName);

    void approveImport(int[] productImportIds);

    void deleteImport(int[] productImportIds);

    void saveProject(Project project);

    void saveBudget(Budget budget);
}
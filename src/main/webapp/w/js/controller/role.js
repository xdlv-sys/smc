controllers.controller('RoleCtrl', ['$scope', 'common', 'modal', 'module', '$filter','menu', function($scope, common, modal, module, $filter,menu) {

    $scope.loadRoles = function(page, limit) {
        common.loadPage('/role/obtainRoles.cmd', {
            page: page,
            limit: limit
        }, {
            success: function(data) {
                $scope.roleGrid.data = data.data;
                $scope.roleGrid.totalItems = data.total;
            }
        });
    };

    $scope.roleGrid = module.createRoleGrid($scope, $scope.loadRoles);
    $scope.loadRoles(1, $scope.roleGrid.paginationPageSize);

    $scope.openRoleInfo = function(conf) {
        //obtain all dept in advance
        common.loadAllPage('/dept/obtainDepts.cmd', {
            success: function(data) {
                var depts = data.data;
                var mods = [];
                angular.forEach(depts, function(dept) {
                    angular.forEach(dept.roles, function(role) {
                        angular.forEach(role.mods, function(mod) {
                            if (!mods.contains(function(m) {
                                    return m.id === mod.id;
                                })) {
                                mods.push(mod);
                            }
                        });
                    });
                });
                mods = menu.parseMenu(mods, false,'children');

                modal.open(angular.extend({
                    url: 'js/tpl/role-info.html',
                    width: 500,
                    depts: depts,
                    mods: mods,
                    canGo: function(data) {
                        return data.name && data.dept;
                    },
                    treeCallback: function(item, selectedItems){
                        console.log(selectedItems);
                        return true;
                    },
                    ok: function(role) {
                        role.entryTime = $filter('date')(role.entryTime, 'yyyy-MM-dd');
                        role.birthday = $filter('date')(role.birthday, 'yyyy-MM-dd');
                        //TODO simply process
                        var roles = role.roles.length > 0 ? role.dept.roles : [];
                        delete role.roles;
                        angular.forEach(roles, function(v, i) {
                            role['roles[' + i + '].id'] = v.id;
                        });
                        role['dept.id'] = role.dept.id;
                        delete role.dept;

                        common.post('/role/saveRole.cmd', role, {
                            fail: function() {
                                modal.alert('新增用户失败');
                            },
                            success: function() {
                                $scope.roleGrid.refresh();
                            }
                        });
                    }
                }, conf), $scope);
            }
        });
    };

    $scope.addRole = function() {
        $scope.openRoleInfo({
            title: '新增用户'
        }, $scope);
    };

    $scope.delRole = function() {
        var roles = $scope.roleGrid.selection.getSelectedRows();
        var params = { roleIds: [] };
        angular.forEach(roles, function(v) {
            params.roleIds.push(v.id);
        });
        common.post('/role/deleteRole.cmd', params, {
            success: function() {
                $scope.roleGrid.refresh();
            }
        });
    };

    $scope.modRole = function() {
        var role = $scope.roleGrid.selection.getSelectedRows()[0];
        role = angular.copy(role);
        if (role.birthday) {
            role.birthday = new Date(role.birthday);
        }
        if (role.entryTime) {
            role.entryTime = new Date(role.entryTime);
        }
        $scope.openRoleInfo({
            title: '新增用户',
            data: role
        }, $scope);
    };
}]);

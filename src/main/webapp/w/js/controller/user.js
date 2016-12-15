controllers.controller('UserCtrl', [
    '$scope', 'common', 'modal', 'module', '$filter',
    function($scope, common, modal, module, $filter) {

        $scope.loadUsers = function(page, limit) {
            common.loadPage('/user/obtainUsers.cmd', {
                page: page,
                limit: limit
            }, {
                success: function(data) {
                    $scope.userGrid.data = data.data;
                    $scope.userGrid.totalItems = data.total;
                }
            });
        };

        $scope.userGrid = module.createUserGrid($scope, $scope.loadUsers);
        $scope.loadUsers(1, $scope.userGrid.paginationPageSize);

        $scope.openUserInfo = function(conf){
            modal.open(angular.extend({
                url: 'js/tpl/user-info.html',
                width: 500,
                canGo: function(data) {
                    return data.name && data.sex >= 0 && data.mobile && data.password && data.password2 && data.password === data.password2 && data.roles && data.dept >= 0;
                }
            }, conf), $scope);
        };

        $scope.addUser = function() {
            $scope.openUserInfo({
                title: '新增用户',
                loadDepts: function() {
                    common.loadPage('/dept/obtainDepts.cmd', {}, {
                        success: function(data) {
                            $scope.depts = data.data;
                        }
                    });
                },
                ok: function(user) {
                    user.entryTime = $filter('date')(user.entryTime, 'yyyy-MM-dd');
                    user.birthday = $filter('date')(user.birthday, 'yyyy-MM-dd');

                    var roles = user.roles;
                    delete user.roles;
                    angular.forEach(roles, function(v, i) {
                        user['roles[' + i + '].id'] = v;
                    });

                    common.post('/user/saveUser.cmd', user, {
                        fail: function() {
                            modal.alert('新增用户失败');
                        },
                        success: function() {
                            $scope.userGrid.refresh();
                        }
                    });
                }
            }, $scope);
        };

        $scope.delUser = function() {
            var users = $scope.userGrid.selection.getSelectedRows();
            var params = { userIds: [] };
            angular.forEach(users, function(v) {
                params.userIds.push(v.id);
            });
            common.post('/user/deleteUser.cmd',params,{
                success: function(){
                    $scope.userGrid.refresh();
                }
            });
        };

        $scope.modUser = function(){
            var user = $scope.userGrid.selection.getSelectedRows()[0];
            user = angular.copy(user);
            if (user.birthday){
                user.birthday = new Date(user.birthday);
            }
            if (user.entryTime){
                user.entryTime = new Date(user.entryTime);
            }
            modal.open({
                url: 'js/tpl/user-info.html',
                title: '修改用户',
                width: 500,
                data: user
            },$scope);
        };
    }
]);

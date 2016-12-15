controllers.controller('UserCtrl', [
    '$scope', 'common', 'modal', 'module','$filter',
    function($scope, common, modal, module,$filter) {

        $scope.userGrid = module.createUserGrid($scope);

        common.loadPage('/user/obtainUsers.cmd', {}, {
            success: function(data) {
                $scope.userGrid.data = data.data;
                $scope.totalItems = data.total;
            }
        });

        $scope.addUser = function() {
            modal.open({
                url: 'js/tpl/user-info.html',
                title: '新增用户',
                width: 500,
                canGo: function(data) {
                    return true;
                },
                loadDepts: function() {
                    common.loadPage('/dept/obtainDepts.cmd', {}, {
                        success: function(data) {
                            $scope.depts = data.data;
                        }
                    });
                },
                ok : function(user){
                	user.entryTime = $filter('date')(user.entryTime,'yyyy-MM-dd');
                	user.birthday = $filter('date')(user.birthday,'yyyy-MM-dd');
                	common.post('/user/saveUser.cmd',user,{
                		fail: function(){
                			modal.alert('新增用户失败');
                		}
                	});
                }
            }, $scope);
        };
    }
]);

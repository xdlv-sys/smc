controllers.controller('taxController', 
    ['$scope', 'common', 'modal','menu', '$state', function($scope, common,modal, menu, $state) {

    //functions for menu-link and menu-toggle
    this.isOpen = $scope.isOpen = function(section) {
        return menu.isSectionSelected(section);
    };

    this.toggleOpen = $scope.toggleOpen = function(section) {
        menu.toggleSelectSection(section);
    };

    $scope.menu = menu;

    $scope.loginSuccess = false;

    $scope.$on('loginSuccess', function(event, user) {
        $scope.loginSuccess = true;
        $scope.user = user;
        $state.go('user');
    });

    $scope.logout = function() {
        common.post('/user/userLogout.cmd', null,{});
        $scope.loginSuccess = false;
        $state.go('login')
    };

    $scope.changePassword = function(e){
        modal.open({
            title: '修改密码',
            url: 'js/tpl/change-password.html',
            canGo : function(user){
                return user.password
                && user.newPassword && user.newPassword === user.newPassword2;
            },
            ok : function(user){
                user.name = $scope.user.name;
                common.post('/user/changePassword.cmd',user,{
                    fail: function(){
                        modal.alert('修改密码失败');
                    }
                });
            }
        });
    }
}]);

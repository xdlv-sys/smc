controllers.controller('taxController', ['$scope', '$rootScope', 'common', 'modal', 'menu', '$state', function($scope, $rootScope, common, modal, menu, $state) {

    //functions for menu-link and menu-toggle
    this.isOpen = $scope.isOpen = function(section) {
        return menu.isSectionSelected(section);
    };

    this.toggleOpen = $scope.toggleOpen = function(section) {
        menu.toggleSelectSection(section);
    };

    $scope.menu = menu;

    $scope.loginSuccess = false;

    $scope.$on('loginSuccess', function(event, user, state, mods) {
        $scope.loginSuccess = true;
        $rootScope.user = $scope.user = user;
        $rootScope.mods = mods;
        $rootScope.allow = function(modId) {
            var allow = false;
            $rootScope.mods.each(function(v) {
                if (!allow && v.id === modId) {
                    allow = true;
                }
            });
            return allow;
        };

        $rootScope.constructSelectedId = function(grid, key) {
            var products = grid.selection.getSelectedRows();
            var params = {};
            params[key] = [];
            angular.forEach(products, function(v) {
                params[key].push(v.id);
            });
            return params;
        };

        $state.go(state);
    });

    $scope.logout = function() {
        common.post('/user/userLogout.cmd', null, {});
        $scope.loginSuccess = false;
        $state.go('login')
    };

    $scope.changePassword = function(e) {
        modal.open({
            title: '修改密码',
            url: 'js/tpl/change-password.html',
            canGo: function(user) {
                console.log(user);
                return user.password && user.newPassword && user.newPassword === user.newPassword2;
            },
            ok: function(user) {
                user.name = $scope.user.name;
                common.post('/user/changePassword.cmd', user, {
                    fail: function() {
                        modal.alert('修改密码失败');
                    }
                });
            }
        }, $scope);
    }
}]);

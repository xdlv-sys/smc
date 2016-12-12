controllers.controller('taxController', 
    ['$scope', '$http', 'modal','menu', '$state', function($scope, $http,modal, menu, $state) {

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
        $http.post('/user/userLogout.cmd', {});
        $scope.loginSuccess = false;
        $state.go('login')
    };

    $scope.changePassword = function(e){
        modal.show({
            url: 'js/tpl/change_password.html'
        });
    }
}]);

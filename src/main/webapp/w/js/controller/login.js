controllers.controller('LoginCtrl', [
    '$scope', '$mdSidenav', '$http', 'menu',
    function($scope, $mdSidenav, $http, menu) {
        $scope.login = function() {
            $http.post('/user/userLogin.cmd', $scope.user).success(function(data) {
            	var mods = [];
                var user = data.data;
            	user.roles.each(function(role){
            		role.mods.each(function(mod){
            			mods.push(mod);
            		});
            	});
                menu.parseMenu(mods, true);
                $scope.$emit("loginSuccess", user);
            });
        }
    }
]);

controllers.controller('LoginCtrl', [
    '$scope', '$mdSidenav', 'common', 'menu',
    function ($scope, $mdSidenav, common, menu) {
        $scope.login = function () {
            common.post('/user/userLogin.cmd', $scope.user, {
                success: function (data) {
                    var mods = [];
                    var user = data.data;
                    if (!user){
                        return;
                    }
                    user.roles.each(function (role) {
                        role.mods.each(function (mod) {
                            mods.push(mod);
                        });
                    });
                    menu.parseMenu(mods, true);
                    $scope.$emit("loginSuccess", user);
                }
            });
        }
    }
]);

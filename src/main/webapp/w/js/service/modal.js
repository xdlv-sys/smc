services.service('modal', ['$mdDialog', function($mdDialog) {
    this.alert = function(msg) {
        $mdDialog.show(
            $mdDialog.alert()
            .parent(angular.element(document.body))
            .clickOutsideToClose(true)
            .title('提示')
            .textContent(msg)
            .ariaLabel('Alert Dialog Demo')
            .ok('确定')
        );
    };
    this.open = function(conf) {
        $mdDialog.show({
                controller: DialogController,
                templateUrl: conf.url,
                parent: angular.element(document.body),
                targetEvent: conf.ev,
                clickOutsideToClose: true // Only for -xs, -sm breakpoints.
            })
            .then(function(data) {
                if (conf.ok) {
                    conf.ok(data);
                }
            }, function() {
                if (conf.cancel) {
                    conf.cancel();
                }
            });
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function() {
            $mdDialog.hide($scope.data);
        };
    }
}]);

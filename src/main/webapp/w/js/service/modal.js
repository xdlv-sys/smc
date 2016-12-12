services.service('modal', ['$scope', '$mdDialog', function($scope, $mdDialog) {
    this.show = function(conf) {
        $mdDialog.show({
                controller: conf.controller ? conf.controller : DialogController,
                templateUrl: conf.url,
                parent: angular.element(document.body),
                targetEvent: conf.ev,
                clickOutsideToClose: true
            })
            .then(function(answer) {
                if (conf.ok) {
                    conf.ok(answer);
                }
            }, function() {
                if (conf.cancle) {
                    conf.cancle();
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

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }

}]);

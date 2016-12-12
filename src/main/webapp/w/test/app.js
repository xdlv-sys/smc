var app = angular.module('taxApp', ['ngMaterial']);
app.controller('taxController', ['$scope', '$mdSidenav', 'modal',
    function($scope, $mdSidenav, modal) {
        $scope.enabled = false;

        $scope.show = function() {
            modal.open({});
        };

        $scope.items = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
    }
]);

app.service('modal', ['$mdDialog', function($mdDialog) {
    this.open = function(conf) {
        $mdDialog.show({
                controller: conf.ctrl ? conf.ctrl : DialogController,
                templateUrl: 'modal-tpl.html',
                parent: angular.element(document.body),
                targetEvent: conf.ev,
                clickOutsideToClose: true // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {
                console.log('You said the information was "' + answer + '".');
            }, function() {
                console.log('You cancelled the dialog.');
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
}])

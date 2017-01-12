controllers.controller('EngineeringPurchaseCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', function($scope, $rootScope, configuration, common, modal, module, $filter, $state) {

    $scope.addPurchase = function(row) {
        $state.go('purchase-import', { project: $scope.getSelectedProjects()[0] });
    };
}]);

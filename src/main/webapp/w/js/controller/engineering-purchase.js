controllers.controller('EngineeringPurchaseCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', 'supplierTypeName', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, supplierTypeName) {

    $scope.showPurchase = function(row) {
        $state.go('engineering-purchase-list');
    };

    $scope.addPurchase = function(row) {
        $scope.showDetail(true);
    };


    $scope.showDetail = function(add) {
        $state.go('engineering-purchase-item', {
            project: {
                project: $scope.getSelectedProjects()[0],
                type: $scope.type,
                add: add
            }
        });
    };
}]);

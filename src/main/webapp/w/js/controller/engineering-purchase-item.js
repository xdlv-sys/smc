controllers.controller('EngineeringPurchaseItemCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', '$stateParams', 'supplierTypeName', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, $stateParams, supplierTypeName) {

    $scope.modal = module.getSupplierTypes($stateParams.project);

    supplierTypeName.success(function(allSupplierTypes) {
        $scope.modal.allSupplierTypes = allSupplierTypes;

        $scope.$watch('modal.data.supplierType', function(n) {
            $scope.modal.supplierTypes = $scope.modal.allSupplierTypes[n];
        });
    });
}]);

controllers.controller('EngineeringPurchaseItemCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', '$stateParams', 'supplierTypeName', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, $stateParams, supplierTypeName) {

    $scope.modal = module.getSupplierTypes($stateParams.project);
    $scope.modal.data = $scope.modal.data || {};

    supplierTypeName.success(function(allSupplierTypes) {
        $scope.modal.allSupplierTypes = allSupplierTypes;

        $scope.$watch('modal.data.supplierType', function(n) {
            $scope.modal.supplierTypes = $scope.modal.allSupplierTypes[n];
        });
    });
    //watch count price and rate to calculate unTaxCount, rateCount and total
    $scope.$watch('modal.data.productCount + modal.data.price + modal.data.rate', function() {
        var modalData = $scope.modal.data;
        var count = parseFloat(modalData.productCount) || 0;
        var price = parseFloat(modalData.price) || 0;
        var rate = parseFloat(modalData.rate) || 0;

        modalData.unTaxCount = count * price;
        modalData.rateCount = modalData.unTaxCount * rate;
        modalData.total = modalData.unTaxCount + modalData.rateCount;
    });

    $scope.querySupplier = function(query){
    	
    };
}]);

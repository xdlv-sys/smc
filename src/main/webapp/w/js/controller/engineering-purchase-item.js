controllers.controller('EngineeringPurchaseItemCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', '$stateParams', 'supplierTypeName','util', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, $stateParams, supplierTypeName,util) {

    $scope.modal = module.getSupplierTypes($stateParams.project);
    $scope.modal.data = $scope.modal.data || {};

    supplierTypeName.success(function(allSupplierTypes) {
        $scope.modal.allSupplierTypes = allSupplierTypes;

        $scope.$watch('modal.data.supplierType', function(n) {
            $scope.modal.supplierTypes = $scope.modal.allSupplierTypes[n];
        });

        $scope.$watch('modal.data.serviceSubType', function(n) {
            if (n){
                $scope.modal.data.rate = util.rate(n.name)[0] / 100.0;
            }
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
    $scope.supplierItemChange = function(supplier){
        $scope.modal.data.supplierId = supplier.id;
    };

    $scope.querySupplier = function(name){
    	return common.loadAllPage2('/supplier/obtainSuppliers.cmd', {
            name : name
        }); 
    };

    $scope.savePurchase = function(){
        var data = angular.copy($scope.modal.data);
        data.serviceSubType = data.serviceSubType.id;
        data.serviceType = data.serviceType.id;
        data.projectId = $scope.modal.project.id;
        common.post('/engineering-purchase/savePurchases.cmd', data, function(){
            modal.alert('保存采购成功');
        });
    };
}]);

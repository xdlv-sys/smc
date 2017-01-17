controllers.controller('EngineeringPurchaseItemCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', '$stateParams', 'supplierTypeName','util', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, $stateParams, supplierTypeName,util) {

    $scope.modal = module.getSupplierTypes($stateParams.project);
    
    if (angular.isBlank($scope.modal.data)){
        $scope.modal.data = {};
    } else {
        //mod
        $scope.modal.data.dept = $scope.modal.data.dept.id;
    }

    supplierTypeName.success(function(allSupplierTypes) {
        $scope.modal.allSupplierTypes = allSupplierTypes;

        $scope.$watch('modal.data.supplierType', function(n) {
            $scope.modal.supplierTypes = $scope.modal.allSupplierTypes[n];
        });
        $scope.$watch('modal.data.serviceType', function(n) {
            if ($scope.modal.supplierTypes){
                angular.each($scope.modal.supplierTypes, function(v){
                    if (v.id === n){
                        $scope.modal.supplierSubTypes = v.supplierSubTypeNames;
                        return true;
                    }
                });
            }
        });

        $scope.$watch('modal.data.serviceSubType', function(n) {
            angular.each($scope.modal.supplierSubTypes, function(v){
                if (v.id === n){
                    $scope.modal.data.rate = util.rate(v.name)[0] / 100.0;
                    return true;
                }
            });
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
    
    $scope.querySupplier = function(name){
    	return common.loadAllPage2('/supplier/obtainSuppliers.cmd', {
            name : name
        }); 
    };
    $scope.queryPorject = function(name){
        return common.loadAllPage2('/project/obtainProjects.cmd', {
            name : name
        });
    };
    
    $scope.savePurchase = function(){
        var data = angular.copy($scope.modal.data);
        function f(name){
            data[name + '.id'] = data[name].id || data[name];
            delete data[name];
        }
        f('dept');
        f('project');
        f('supplier');
        
        common.post('/' + $scope.modal.type +'-purchase/savePurchases.cmd', data, function(){
            modal.alert('保存采购成功');
        });
    };
}]);

controllers.controller('CostTaxCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', 'supplierTypeName', function($scope, common, modal, module, $filter, $stateParams, configuration, supplierTypeName) {

    supplierTypeName.success(function(allSupplierTypes) {
        $scope.modal = module.getSupplierTypes({
            allSupplierTypes: allSupplierTypes
        });

        $scope.$watch('identityType', function(n) {
            $scope.modal.supplierTypes = $scope.modal.allSupplierTypes[n];
        });
    });

    $scope.costTaxGrid = {
        columnDefs: [{
            name: '供应商类别'
        },{
            name: '最优采购成本'
        },{
            name: '税率',
            field: 'rate'
        },{
            name: '进项税',
            field: 'inCount'
        },{
            name: '最优采购支付总额',
            field: 'finallyTotal'
        }]
    };

    $scope.calculate = function(){
        var rates = [];
        $scope.supplierSubType.name.replace(/(\d+)%/g, function(s,r){
            rates.push(parseInt(r));
        });     
    }
}]);

controllers.controller('CostTaxCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', 'supplierTypeName','util', function($scope, common, modal, module, $filter, $stateParams, configuration, supplierTypeName,util) {

    supplierTypeName.success(function(allSupplierTypes) {
        $scope.modal = module.getSupplierTypes({
            allSupplierTypes: allSupplierTypes
        });

        $scope.$watch('identityType', function(n) {
            $scope.modal.supplierTypes = $scope.modal.allSupplierTypes[n];
        });
    });
    $scope.identityType = 1;

    $scope.costTaxGrid = {
        enableColumnMenus: false,
        columnDefs: [{
            name: '供应商类别',
            field: 'supplierType'
        },{
            name: '最优采购成本',
            field: 'cost',
            cellFilter: 'toFixed'
        },{
            name: '税率',
            field: 'rate'
        },{
            name: '进项税',
            field: 'inCount',
            cellFilter: 'toFixed'
        },{
            name: '最优采购支付总额',
            field: 'finallyTotal'
        },{
            name: '备注',
            field: 'remark'
        }]
    };

    $scope.calculate = function(){
        // find index and subIndex
        var index, subIndex;
        $scope.modal.supplierTypes.each(function (v, i){
            if (v === $scope.supplierType){
                index = i;
                return true;
            }
        });

        $scope.supplierType.supplierSubTypeNames.each(function(v,i){
            if (v === $scope.supplierSubType){
                subIndex = i;
                return true;
            }
        });

        function f(i){
            var s = $scope.modal.allSupplierTypes[i][index].supplierSubTypeNames[subIndex];
            return util.rate(s.name);
        }

        function item(st, rate){
            var totalCount = parseFloat($scope.totalCount);
            rate = rate / 100.0;
            this.supplierType = st + '类';
            this.cost = totalCount / (1 + rate);
            this.rate = rate;
            this.inCount = this.cost * rate;
            this.finallyTotal = totalCount;
        }

        var data = [];
        angular.forEach(f(1),function(v){
            data.push(new item('A',v));
        });
        angular.forEach(f(2),function(v){
            data.push(new item('B',v));
        });

        var cItem = new item('C', 0);
        cItem.remark = '假定取得增值税发票';
        cItem.cost = cItem.cost / 1.03;
        data.push(cItem);

        cItem = new item('C', 0);
        cItem.remark = '假定无法取得发票去税务机关代开';
        data.push(cItem);

        $scope.costTaxGrid.data = data;
    }
}]);

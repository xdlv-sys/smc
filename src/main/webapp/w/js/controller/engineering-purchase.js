controllers.controller('EngineeringPurchaseCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', 'supplierTypeName', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, supplierTypeName) {

    $scope.query = {
        dept: undefined
    };
    
    $scope.loadEngineerPurchases = function(page, limit) {
        common.loadPage('/' + $scope.type +'-purchase/obtainPurchases.cmd', {
            page: page,
            limit: limit,
            'dept.id': $scope.query.dept == -1 ? undefined : $scope.query.dept
        }, {
            success: function(data) {
                $scope.purchaseGrid.data = data.data;
                $scope.purchaseGrid.totalItems = data.total;
            }
        });
    };
    $scope.purchaseGrid = module.createEngineeringPurchaseGrid($scope, $scope.loadEngineerPurchases, configuration);
    
    /*common.async(function(){
    	//load when the page finish render
    	$scope.loadEngineerPurchases(1, $scope.purchaseGrid.paginationPageSize);
    });*/
    
    $scope.deletePurchases = function() {
        common.post('/' + $scope.type +'-purchase/deletePurchases.cmd', $scope.constructSelectedId($scope.purchaseGrid, 'purchaseIds'), {
            success: function() {
                $scope.purchaseGrid.refresh();
            }
        });
    };
    $scope.modPurchase = function() {
        $state.go('engineering-purchase-item', {
            project: {
                type: $scope.type,
                add: true,
                data: $scope.purchaseGrid.selection.getSelectedRows()[0]
            }
        });
    };

    $scope.$watch('query.dept', function(v) {
        $scope.loadEngineerPurchases(1, $scope.purchaseGrid.paginationPageSize);
    });

     $scope.addPurchase = function(row) {
        $scope.showDetail(true);
    };

    $scope.showDetail = function(add) {
        $state.go('engineering-purchase-item', {
            project: {
                type: $scope.type,
                add: add
            }
        });
    };
}]);

controllers.controller('EngineeringPurchaseListCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', '$stateParams', 'supplierTypeName', 'util', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, $stateParams, supplierTypeName, util) {

    $scope.loadEngineerPurchases = function(page, limit) {
        var params = angular.extend({
            page: page,
            limit: limit
        }, $scope.query);

        common.loadPage('/engineering-purchase/obtainEngineeringPurchases.cmd', params, {
            success: function(data) {
                $scope.purchaseGrid.data = data.data;
                $scope.purchaseGrid.totalItems = data.total;
            }
        });
    };
    $scope.purchaseGrid = module.createEngineeringPurchaseGrid($scope, $scope.loadEngineerPurchases, configuration);
    $scope.loadEngineerPurchases(1, $scope.purchaseGrid.paginationPageSize);

    $scope.deletePurchases = function() {
        common.post('/engineering-purchase/deletePurchases.cmd'
            , $scope.constructSelectedId($scope.purchaseGrid, 'purchaseIds'), {
            success: function() {
                $scope.purchaseGrid.refresh();
            }
        });
    };
    $scope.modPurchase = function(){
        $state.go('engineering-purchase-item', {
            project: {
                type: $scope.type,
                add: true,
                data: $scope.purchaseGrid.selection.getSelectedRows()[0]
            }
        });
    };
}]);

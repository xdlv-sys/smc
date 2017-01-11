controllers.controller('PurchaseImportCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', function($scope, common, modal, module, $filter, $stateParams, configuration) {

    $scope.project = $stateParams.project;

    $scope.query = {};
    $scope.loadPurchaseImports = function(page, limit) {
        var params = angular.extend({
            page: page,
            limit: limit,
            projectId: $scope.project.id
        }, $scope.query);
        params.startDate = params.startDate || '1971-1-1';
        params.endDate = params.endDate || '2064-1-1';

        common.loadPage('/purchase/obtainPurchaseImports.cmd', params, {
            success: function(data) {
                $scope.purchaseImportGrid.data = data.data;
                $scope.purchaseImportGrid.totalItems = data.total;
            }
        });
    };

    $scope.purchaseImportGrid = module.createPurchaseImportGrid($scope, $scope.loadPurchaseImports, configuration);
    $scope.loadPurchaseImports(1, $scope.purchaseImportGrid.paginationPageSize);

    $scope.deletePurchaseImport = function() {
        common.post('/purchase/deletePurchaseImport.cmd', $scope.constructSelectedId($scope.purchaseImportGrid, 'purchaseImportIds'), {
            success: function() {
                $scope.purchaseImportGrid.refresh();
            }
        });
    };
}]);

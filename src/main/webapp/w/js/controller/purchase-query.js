controllers.controller('PurchaseQueryCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', 'supplierTypeName', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, supplierTypeName) {
    $scope.queryPorject = function(name) {
        return common.loadAllPage2('/project/obtainProjects.cmd', {
            name: name
        });
    };
    $scope.loadPurchases = function(page, limit) {
        var params = angular.extend({
            page: page,
            limit: limit,
            projectId: $scope.selectedProject.id
        }, $scope.query2);
        params.startDate = params.startDate || '1971-1-1';
        params.endDate = params.endDate || '2064-1-1';
        var url;

        switch ($scope.queryType) {
            case '1':
                url = '/purchase/obtainPurchases.cmd';
                params
                break;
            case '2':
                url = '/engineering-purchase/obtainPurchasesForQuery.cmd';
                break;
            case '3':
                url = '/composite-purchase/obtainPurchasesForQuery.cmd';
                break;
        }
        common.loadPage(url, params, function(data) {
            $scope.purchaseQueryGrid.data = data.data;
            $scope.purchaseQueryGrid.totalItems = data.total;
        });
    };

    $scope.purchaseQueryGrid = module.createPurchaseGrid($scope, $scope.loadPurchases, configuration);
}]);

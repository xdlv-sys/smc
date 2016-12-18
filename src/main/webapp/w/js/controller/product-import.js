controllers.controller('ProductImportCtrl', ['$scope', 'common', 'modal', 'module', '$filter', function($scope, common, modal, module, $filter) {
    
    $scope.loadProductImports = function(page, limit) {
        common.loadPage('/product/obtainProductImports.cmd', {
            page: page,
            limit: limit
        }, {
            success: function(data) {
                $scope.productImportGrid.data = data.data;
                $scope.productImportGrid.totalItems = data.total;
            }
        });
    };

    $scope.productImportGrid = module.createProductImportGrid($scope, $scope.loadProductImports);
    $scope.loadProductImports(1, $scope.productImportGrid.paginationPageSize);

}]);

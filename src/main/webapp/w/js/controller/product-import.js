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

    $scope.uploadFile = function() {
        common.uploadFile('/product/importProduct.cmd', {
            file: $scope.importFile[0].lfFile,
            userName: $scope.user.name
        },{
            success: function(result) {
                $scope.productImportGrid.refresh();
                modal.alert('成功导入:' + result.data.right + '条，失败:' + result.data.wrong + '条');
            }
        });
    };

    $scope.delImport = function(){
        common.post('/product-import/deleteProductImport.cmd'
            , $scope.constructSelectedId($scope.productImportGrid,'productImportIds'), {
            success: function() {
                $scope.productImportGrid.refresh();
            }
        });
    };
}]);

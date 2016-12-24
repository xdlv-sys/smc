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
        }, {
            success: function(result) {
                $scope.productImportGrid.refresh();
                modal.alert('成功导入:' + result.data.right + '条，失败:' + result.data.wrong + '条');
            }
        });
    };

    $scope.delImport = function() {
        modal.confirm('删除导入记录，将同时删除关联的商品信息，是否继续？', {
            postive: function() {
                common.post('/product-import/deleteProductImport.cmd', $scope.constructSelectedId($scope.productImportGrid, 'productImportIds'), {
                    success: function() {
                        $scope.productImportGrid.refresh();
                    }
                });
            }
        });
    };

    $scope.approveImport = function() {
        modal.confirm('导入记录审核通过后，所有关联的商品都将审核通过，是否继续？', {
            postive: function() {
                common.post('/product-import/approveProductImport.cmd', $scope.constructSelectedId($scope.productImportGrid, 'productImportIds'), {
                    success: function() {
                        $scope.productImportGrid.refresh();
                    }
                });
            }
        });
    };

    $scope.canApprove = function(){
        // just a workround to protect undefined selection
        if (!$scope.productImportGrid.selection){
            return false;
        }
        var products = $scope.productImportGrid.selection.getSelectedRows();
        return products.length > 0 && !products.contains(function(p) {
            return p.status !== 0;
        });
    };
}]);

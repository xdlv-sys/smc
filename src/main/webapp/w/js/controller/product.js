controllers.controller('ProductCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', function($scope, $rootScope, configuration, common, modal, module, $filter, $state) {

    $scope.showDetail = function(row) {
        $state.go('product-item', { product: row.entity });
    };
    $scope.query = {};
    $scope.loadProducts = function(page, limit) {
        common.loadPage('/product/obtainProducts.cmd', angular.extend({
            page: page,
            limit: limit
        }, $scope.query), {
            success: function(data) {
                $scope.productGrid.data = data.data;
                $scope.productGrid.totalItems = data.total;
            }
        });
    };

    $scope.productGrid = module.createProductGrid($scope, $scope.loadProducts, configuration);
    $scope.loadProducts(1, $scope.productGrid.paginationPageSize);

    $scope.openProductInfo = function(conf) {
        var params = module.getProductTypes({
            url: 'js/tpl/product-info.html',
            width: 500,
            add: true,
            ok: function(product) {
                common.post('/product/saveProduct.cmd', product, {
                    success: function() {
                        $scope.productGrid.refresh();
                    }
                });
            }
        });
        modal.open(angular.extend(params, conf), $scope);
    };

    $scope.addProduct = function() {
        $scope.openProductInfo({
            title: '新增商品'
        }, $scope);
    };

    $scope.delProduct = function() {
        common.post('/product/deleteProduct.cmd', $scope.constructSelectedId($scope.productGrid, 'productIds'), {
            success: function() {
                $scope.productGrid.refresh();
            }
        });
    };

    $scope.canApprove = function() {
        var products = $scope.productGrid.selection.getSelectedRows();
        return products.length > 0 && !products.contains(function(p) {
            return p.status !== 0;
        });
    };
    $scope.approvalProduct = function() {
        common.post('/product/approvalProduct.cmd', $scope.constructSelectedId($scope.productGrid, 'productIds'), {
            success: function() {
                $scope.productGrid.refresh();
            }
        });
    };

    $scope.loadImports = function() {
        common.loadAllPage('/product/obtainProductImports.cmd', {
            success: function(data) {
                $scope.imports = data.data;
            }
        });
    };
    $scope.queryProduct = function(){
        $scope.productGrid.refresh(true);
    };

    $scope.exportProduct = function(){
        var url = '/product/exportProduct.cmd?';
        for (var v in $scope.query){
            url+= v + '=' + $scope.query[v];
            url += '&';
        }
        window.open(url,'_self');
    };
}]);

controllers.controller('ProductCtrl', ['$scope','$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', function($scope, $rootScope,configuration, common, modal, module, $filter, $state) {

    $scope.showDetail = function(row) {
        $state.go('product-item', { product: row.entity });
    };
    $scope.loadProducts = function(page, limit) {
        common.loadPage('/product/obtainProducts.cmd', {
            page: page,
            limit: limit
        }, {
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
            canGo: function(data) {
                return data.name && data.model && data.nature > 0 && data.genre > 0 && data.countUnit > 0 && data.weightUnit > 0 && data.bulkUnit > 0 && data.packageType && data.rate;
            },
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
    $scope.constructSelectedId = function(){
        var products = $scope.productGrid.selection.getSelectedRows();
        var params = { productIds: [] };
        angular.forEach(products, function(v) {
            params.productIds.push(v.id);
        });
        return params;
    };

    $scope.delProduct = function() {
        common.post('/product/deleteProduct.cmd', $scope.constructSelectedId(), {
            success: function() {
                $scope.productGrid.refresh();
            }
        });
    };

    $scope.canApprove = function(){
        var products = $scope.productGrid.selection.getSelectedRows();
        return products.length > 0 && !products.contains(function(p){
            return p.status !== 0;
        });
    };
    $scope.approvalProduct = function(){
        common.post('/product/approvalProduct.cmd', $scope.constructSelectedId(), {
            success: function() {
                $scope.productGrid.refresh();
            }
        });
    };
}]);

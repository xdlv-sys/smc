controllers.controller('SupplierCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', function($scope, $rootScope, configuration, common, modal, module, $filter, $state) {

    $scope.query = {
        dept: undefined
    };
    $scope.loadSuppliers = function(page, limit) {
        common.loadPage('/supplier/obtainSuppliers.cmd', {
            page: page,
            limit: limit,
            dept: $scope.query.dept == -1 ? undefined : $scope.query.dept
        }, {
            success: function(data) {
                $scope.supplierGrid.data = data.data;
                $scope.supplierGrid.totalItems = data.total;
            }
        });
    };
    $scope.$watch('query.dept', function(v){
        $scope.loadSuppliers(1,$scope.supplierGrid.paginationPageSize);
    });


    $scope.supplierGrid = module.createSupplierGrid($scope, $scope.loadSuppliers, configuration);
    $scope.loadSuppliers(1, $scope.supplierGrid.paginationPageSize);

    $scope.addSupplier = function() {
        $scope.showDetail({}, true);
    };

    $scope.modSupplier = function() {
        $scope.showDetail($scope.supplierGrid.selection.getSelectedRows()[0], true, true);
    };
    $scope.showDetail = function(supplier,add,edit){
        $state.go('supplier-item', {
            supplier: {
                data: supplier,
                add : add,
                edit: edit
            }
        });
    };

    // upload budget for suppliers
    $scope.uploadFile = function() {
        common.uploadFile('/budget/importBudget.cmd', {
            file: $scope.importFile[0].lfFile,
            userName: $scope.user.name,
            supplierId: $scope.supplierGrid.selection.getSelectedRows()[0].id
        }, {
            success: function(result) {
                $scope.budgetGrid.refresh();
                modal.alert('成功导入:' + result.data.right + '条');
            }
        });
    };
}]);

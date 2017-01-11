controllers.controller('ProjectPurchaseCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', function($scope, $rootScope, configuration, common, modal, module, $filter, $state) {

    $scope.importProjectPurchase = function() {
        common.uploadFile('/purchase/importProjectPurchase.cmd', {
            file: $scope.importFile[0].lfFile,
            importDate: $scope.importDate,
            operator: $scope.user.name,
            projectId: $scope.getSelectedProjects()[0].id
        }, {
            success: function(result) {
                modal.alert('成功导入:' + result.data.right + '条');
            }
        });
    };
    $scope.showPurchase = function(row) {
        $state.go('purchase-import', { project: $scope.getSelectedProjects()[0] });
    };
}]);

controllers.controller('ProductItemCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', function($scope, common, modal, module, $filter, $stateParams, configuration) {

    $scope.modal = module.getProductTypes({
        add: false,
        data: $stateParams.product
    });
    $scope.back = function() {
        history.back();
    };
    $scope.approvalProduct = function() {
        common.post('/product/approvalProduct.cmd', {
            productIds: [$scope.modal.data.id]
        }, {
            success: function() {
                $scope.modal.data.status = 1;
            }
        });
    };
}]);

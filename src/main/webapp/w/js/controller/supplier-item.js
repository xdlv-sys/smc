controllers.controller('SupplierItemCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', function($scope, common, modal, module, $filter, $stateParams, configuration) {

    $scope.modal = module.getSupplierTypes(angular.extend({}
        ,$stateParams.supplier));

    function fTypes(key) {
        var sTypes = [];
        angular.forEach($scope.modal.data[key + 's'], function(s) {
            sTypes.push(s[key]);
        });
        $scope.modal.data[key + 's'] = sTypes;
    }
    fTypes('supplierType');
    fTypes('supplierSubType');
    //for edit
    $scope.modal.licenseImg = $scope.modal.data.licenseImg;
    $scope.modal.registryImg = $scope.modal.data.registryImg;
    $scope.modal.organizationImg = $scope.modal.data.organizationImg;
    $scope.modal.openAccountImg = $scope.modal.data.openAccountImg;


    $scope.saveSupplier = function() {
        var supplier = angular.copy($scope.modal.data);
        $scope.convertList(supplier, 'supplierTypes', 'supplierType');
        $scope.convertList(supplier, 'supplierSubTypes', 'supplierSubType');

        function f(key) {
            if (angular.isBlank(supplier[key])) {
                return;
            }
            supplier[key + 'F'] = $scope.modal.data[key][0].lfFile;
            supplier[key] = $scope.modal.data[key][0].lfFileName;
        }
        f('licenseImg');
        f('openAccountImg');
        f('organizationImg');
        f('registryImg');

        common.uploadFile('/supplier/saveSupplier.cmd', supplier, {
            success: function() {
                modal.alert('供应商保存成功');
            }
        });
    };
}]);

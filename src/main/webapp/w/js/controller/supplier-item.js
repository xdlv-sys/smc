controllers.controller('SupplierItemCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', function($scope, common, modal, module, $filter, $stateParams, configuration) {

    $scope.modal = module.getSupplierTypes({
        add: !$stateParams.project,
        data: $stateParams.project
    });

    $scope.loadDepts = function() {
        if ($scope.modal.depts) {
            return;
        }
        return common.loadAllPage('/dept/obtainDepts.cmd', {
            success: function(data) {
                $scope.modal.depts = data.data;
            }
        });
    };

    $scope.saveSupplier = function() {
        var supplier = angular.copy($scope.modal.data);
        $scope.convertList(supplier, 'supplierTypes','supplierType');
        $scope.convertList(supplier, 'supplierSubTypes','supplierSubType');

        function f(key){
        	if (angular.isBlank(supplier[key])){
        		return;
        	}
        	supplier[key + 'F'] = $scope.modal.data[key][0].lfFile;
        	supplier[key] = $scope.modal.data[key][0].lfFileName;
        }
        f('licenseImg');
        f('openAccountImg');
        f('organizationImg');
        f('registryImg');

        console.log(supplier);

        common.uploadFile('/supplier/saveSupplier.cmd', supplier, {
            success: function() {
                modal.alert('供应商保存成功');
            }
        });
    };
}]);

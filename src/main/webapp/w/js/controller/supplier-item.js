controllers.controller('SupplierItemCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', function($scope, common, modal, module, $filter, $stateParams, configuration) {

    $scope.modal = module.getSupplierTypes(angular.extend({
    }, $stateParams.supplier));

    $scope.$watch('modal.data.identityType', function(n) {
        //reset all type and sub types ,don't modify this easily due to be very complicate
        $scope.modal.supplierTypes = $scope.modal.allSupplierTypes[n];
        $scope.modal.supplierSubTypes = [];
        
    });

    $scope.$watch('modal.data.supplierTypes', function(types) {
        $scope.modal.supplierSubTypes = [];
        angular.forEach($scope.modal.supplierTypes, function(s){
            if (types && types.contains(s.id)){
                $scope.modal.supplierSubTypes.pushAll(s.supplierSubTypeNames);
            }
        });
    });

    //for edit
    $scope.modal.licenseImg = $scope.modal.data.licenseImg;
    $scope.modal.registryImg = $scope.modal.data.registryImg;
    $scope.modal.organizationImg = $scope.modal.data.organizationImg;
    $scope.modal.openAccountImg = $scope.modal.data.openAccountImg;

    $scope.saveSupplier = function() {
        var supplier = angular.copy($scope.modal.data);
        supplier.supplierTypes.each(function(t,i){
            supplier['supplierTypes[' + i + '].supplierType'] = t;
            
            //find all sub types in this type
            var st = angular.each($scope.modal.supplierTypes,function(v){
                if (v.id === t){
                    return v;
                }
            });
            var si = 0;
            st.supplierSubTypeNames.each(function(sst){
                if (supplier.supplierSubTypes.contains(sst.id)){
                    supplier['supplierTypes[' + i + '].supplierSubTypes[' + si++ + '].supplierSubType'] = sst.id;
                }
            });
        });
        delete supplier.supplierTypes;
        delete supplier.supplierSubTypes;

        function f(key) {
            if (angular.isBlank(supplier[key])) {
                // make sure these file we don't wanna change to be overwritten
                supplier[key] = $scope.modal[key];
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

    $scope.showImage = function(type) {
        modal.open({
            url: 'js/tpl/supplier-img.html',
            width: 800,
            title: '查看',
            imageName: '../supplier/showImage.cmd?supplierId=' + $scope.modal.data.id + '&type=' + type
        });
    };
}]);

controllers.controller('TaxQueryCompareCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', '$stateParams', 'util', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, $stateParams, util) {

    $scope.descs = [1, -1];

    $scope.query = function(){
    	modal.wait();
    	common.post('/tax-manager/taxQueryCompare.cmd',{
    		belong: $scope.belong
    	}, function (data){
    		$scope.data = data;
    		$scope.sortData();
    		modal.hide();
    	});
    };

    $scope.$watch('desc', function(n,o){
    	$scope.sortData();
    });

    $scope.sortData = function(){
    	if (angular.isBlank($scope.data)){
    		return;
    	}
    	$scope.data.sort(function (a,b){
    		return (a[a.length - 1] - b[b.length - 1]) * $scope.desc;
    	});
    };

    $scope.export = function(){
    	util.downloadFile('../tax-manager/exportTaxQuery.cmd',{
    		belong: $scope.belong
    	});
    };
}]);

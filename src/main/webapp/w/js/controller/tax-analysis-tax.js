controllers.controller('TaxAnalysisTaxCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', '$stateParams', 'supplierTypeName', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, $stateParams, supplierTypeName) {
    
    $scope.project = $stateParams.project.project;
    $scope.belong = $stateParams.project.belong;

    common.post('/tax-manager/taxAnalysis.cmd',{
    	projectId: $scope.project.id,
    	belong: $scope.belong
    }, function(data){
    	$scope.data = {};
    	angular.forEach(data, function(v,k){
    		$scope.percent = k;
    		$scope.data = v;
    	});
    });

    $scope.export = function(){
    	var url = '../tax-manager/exportTax.cmd?projectId=';
        url += $scope.project.id;
        url += '&belong=' + $scope.belong;
        window.open(url, '_self');
    };

}]);

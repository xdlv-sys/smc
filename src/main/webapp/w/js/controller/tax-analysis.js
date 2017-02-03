controllers.controller('TaxAnalysisCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', '$stateParams', 'supplierTypeName', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, $stateParams, supplierTypeName) {
    $scope.inCountAnalysis = function(){
    	$state.go('tax-analysis-in-count-item',{
    		project: {
    			project: $scope.getSelectedProjects()[0],
    			belong : $scope.belong
    		}
    	});
    };
    $scope.taxAnalysis = function(){
    	$state.go('tax-analysis-tax-item',{
    		project: {
    			project: $scope.getSelectedProjects()[0],
    			belong : $scope.belong
    		}
    	});
    };

    // ---------------
    if (!$stateParams.project) {
        return;
    }
    $scope.project = $stateParams.project.project;
    $scope.belong = $stateParams.project.belong;

    common.post('/tax-manager/inCountAnalysis.cmd',{
    	projectId: $scope.project.id,
    	belong: $scope.belong
    }, function(data){
    	$scope.data = {};
    	angular.forEach(data, function(v,k){
    		if (k === 'total'){
    			$scope.total = v;
    			return;
    		}
    		$scope.data[k] = v;
    	});
    });

    $scope.export = function(){
    	var url = '../tax-manager/exportInCount.cmd?projectId=';
        url += $scope.project.id;
        url += '&belong=' + $scope.belong;
        window.open(url, '_self');
    };

}]);

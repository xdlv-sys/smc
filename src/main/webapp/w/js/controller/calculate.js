controllers.controller('CalculateCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$stateParams','$state', function($scope, $rootScope, configuration, common, modal, module, $filter, $stateParams,$state) {

    if ($stateParams.budgets){
    	$scope.taxCalculateGrid = {
    		configuration: configuration,
    		columnDefs: [{
    			name : '项目名称',
    			field: 'project.name'
    		},{
    			name: '合同金额',
    			field: 'totalCount'
    		},{
    			name : '税率',
    			cellTemplate: '<div class="ui-grid-cell-contents" >{{grid.options.configuration.i18n(2,"rate",row.entity.rate)}}</div>'
    		},{
    			name: '不含税金额',
    			cellTemplate: '<div class="ui-grid-cell-contents" >{{(row.entity.totalCount/(1+row.entity.rate===1? 0.11 : 0.03))}}</div>'
    		},{
    			name: '进项税额',
    			cellTemplate: ''
    		},{
    			name: '应纳税额',
    			cellTemplate: ''
    		},{
    			name: '税负',
    			cellTemplate: ''
    		}],
    		data: $stateParams.budgets
    	};
    }

    $scope.calculateBudget = function(){
        var budget = $scope.budgetGrid.selection.getSelectedRows()[0];
        $state.go('calculate-item', { budget: budget });
    };

    $scope.showTaxCalculateBudget = function(){
    	var budgets = $scope.budgetGrid.selection.getSelectedRows();
        $state.go('tax-calculate-item', { budgets: budgets });
    };
}]);

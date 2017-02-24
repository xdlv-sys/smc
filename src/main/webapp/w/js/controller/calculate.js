controllers.controller('CalculateCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$stateParams','$state','util', function($scope, $rootScope, configuration, common, modal, module, $filter, $stateParams,$state,util) {

    if ($stateParams.budgets){
        angular.forEach($stateParams.budgets, function(b){
            var rate = configuration.i18n(2,"rate",b.project.rate);
            //remove percent flag % and parsed into float
            rate = parseInt(rate.substring(0, rate.length -1));
            rate = rate /100.0;
            b.unTaxCount = (b.project.totalCount / (1 + rate));
            b.saleCount = b.unTaxCount * rate;

            b.inCount = 0;
            angular.forEach(b.groups, function(g){
                if (g.name === '人工' 
                    || g.name === '材料' || g.name === '机械'){
                    angular.forEach(g.items, function(i){
                        b.inCount += util.taxCount(i);
                    });
                }
            });

            b.shouldTaxCount = b.saleCount - b.inCount;
            b.taxPercent = b.shouldTaxCount / b.unTaxCount;
            
        });
    	$scope.taxCalculateGrid = {
    		configuration: configuration,
            enableColumnMenus: false,
    		columnDefs: [{
    			name : '项目名称',
    			field: 'project.name'
    		},{
    			name: '合同金额',
    			field: 'project.totalCount'
    		},{
    			name : '税率',
    			cellTemplate: '<div class="ui-grid-cell-contents" >{{grid.options.configuration.i18n(2,"rate",row.entity.project.rate)}}</div>'
    		},{
    			name: '不含税金额',
                field: 'unTaxCount',
                cellFilter: 'toFixed'
    		},{
    			name: '销项税额 ',
    			field: 'saleCount',
                cellFilter: 'toFixed'
    		},{
    			name: '进项税额',
                field: 'inCount',
                cellFilter: 'toFixed'
    		},{
    			name: '应纳税额',
    			field: 'shouldTaxCount',
                cellFilter: 'toFixed'
    		},{
                name: '税负',
                field: 'taxPercent',
                cellFilter: 'toFixed:4'
            }],
    		data: $stateParams.budgets
    	};
    }

    $scope.exportTaxCalculate = function(){
        var url = '../calculate/exportTaxCalculate.cmd?';
        angular.forEach($stateParams.budgets, function(b){
            url += 'budgetIds=' + b.projectId + '&'
        });
        window.open(url,'_self');
    };

    $scope.calculateBudget = function(){
        var budget = $scope.budgetGrid.selection.getSelectedRows()[0];
        $state.go('calculate-item', { budget: budget });
    };

    $scope.showTaxCalculateBudget = function(){
    	var budgets = $scope.budgetGrid.selection.getSelectedRows();
        $state.go('tax-calculate-item', { budgets: budgets });
    };
    $scope.disableShowTaxCalculte = function(){
        var budgets = $scope.budgetGrid.selection.getSelectedRows();

        return budgets.length < 1 || angular.each(budgets, function(b){
            return angular.each(b.groups, function(g){
                if (g.name === '人工' 
                    || g.name === '材料' || g.name === '机械'){
                    return angular.each(g.items, function(i){
                        if (i.taxRatio === null){
                            return true;
                        }
                    });
                }
            });
        });
    }
}]);

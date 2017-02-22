controllers.controller('BudgetCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', function($scope, $rootScope, configuration, common, modal, module, $filter, $state) {

    $scope.showDetail = function(row) {
        $state.go('budget-item', { budget: row.entity });
    };

    $scope.loadBudgets = function(page, limit) {
        common.loadPage('/budget/obtainBudgets.cmd', angular.extend({
            page: page,
            limit: limit
        }, $scope.query), {
            success: function(data) {
                $scope.budgetGrid.data = data.data;
                $scope.budgetGrid.totalItems = data.total;
            }
        });
    };

    $scope.budgetGrid = module.createBudgetGrid($scope, $scope.loadBudgets, configuration);
    $scope.loadBudgets(1, $scope.budgetGrid.paginationPageSize);

    $scope.delBudget = function() {
        var budgets = $scope.budgetGrid.selection.getSelectedRows();
        var params = { budgetIds: [] };
        angular.forEach(budgets, function(v) {
            params.budgetIds.push(v.projectId);
        });

        common.delete('/budget/deleteBudget.cmd', params, {
            success: function() {
                $scope.budgetGrid.refresh();
            }
        });
    };
}]);

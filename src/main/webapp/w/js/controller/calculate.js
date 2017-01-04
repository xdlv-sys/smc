controllers.controller('CalculateCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', function($scope, $rootScope, configuration, common, modal, module, $filter, $state) {

    $scope.calculateBudget = function(){
        var budget = $scope.budgetGrid.selection.getSelectedRows()[0];
        $state.go('calculate-item', { budget: budget });
    }
}]);

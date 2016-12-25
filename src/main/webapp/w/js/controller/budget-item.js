controllers.controller('BudgetItemCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', function($scope, common, modal, module, $filter, $stateParams, configuration) {

    //var project = $scope.convertParams($stateParams.project,'outSources');
    /*$scope.modal = module.getProjectTypes({
        add: false,
        data: $scope.project
    });*/
    $scope.budget = $stateParams.budget;
    
    $scope.indexes = ['一、','二、','三、','四、','五、','六、','七、','八、','九、','十、'];
}]);

controllers.controller('ProjectItemCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', function($scope, common, modal, module, $filter, $stateParams, configuration) {

    //var project = $scope.convertParams(angular.copy($stateParams.project),'outSources');
    $scope.modal = module.getProjectTypes({
        add: false,
        data: $stateParams.project
    });
}]);

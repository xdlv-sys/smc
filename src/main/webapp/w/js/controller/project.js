controllers.controller('ProjectCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', function($scope, $rootScope, configuration, common, modal, module, $filter, $state) {

    $scope.modal = module.getProjectTypes();

    $scope.showDetail = function(row) {
        $state.go('project-item', { project: row.entity });
    };

    $scope.query = {};
    $scope.loadProjects = function(page, limit) {
        common.loadPage('/project/obtainProjects.cmd', angular.extend({
            page: page,
            limit: limit
        }, $scope.query), {
            success: function(data) {
                $scope.projectGrid.data = data.data;
                $scope.projectGrid.totalItems = data.total;
            }
        });
    };

    $scope.projectGrid = module.createProjectGrid($scope, $scope.loadProjects, configuration);
    $scope.loadProjects(1, $scope.projectGrid.paginationPageSize);

    $scope.openProjectInfo = function(conf) {
        var params = module.getProjectTypes({
            url: 'js/tpl/project-info.html',
            width: 750,
            add: true,
            ok: function(project) {
                common.post('/project/saveProject.cmd', project, {
                    success: function() {
                        $scope.projectGrid.refresh();
                    }
                });
            }
        });
        modal.open(angular.extend(params, conf), $scope);
    };

    $scope.addProject = function() {
        $scope.openProjectInfo({
            title: '新增项目',
            outSources: [],
            addOutSource: function(){
                this.outSources[this.outSources.length]={};
            }
        }, $scope);
    };

    $scope.delProject = function() {
        common.post('/project/deleteProject.cmd', $scope.constructSelectedId($scope.projectGrid, 'projectIds'), {
            success: function() {
                $scope.projectGrid.refresh();
            }
        });
    };

    $scope.queryProject = function(){
        $scope.projectGrid.refresh(true);
    };

    $scope.exportProject = function(){

    }
}]);

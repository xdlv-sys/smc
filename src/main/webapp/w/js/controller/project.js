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
            addOutSource: function() {
                if (!this.data.outSources) {
                    this.data.outSources = [];
                }
                this.data.outSources[this.data.outSources.length] = {};
            },
            ok: function(project) {
                $scope.convertParams(project, 'outSources');
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
            title: '新增项目'
        }, $scope);
    };

    $scope.delProject = function() {
        common.post('/project/deleteProject.cmd', $scope.constructSelectedId($scope.projectGrid, 'projectIds'), {
            success: function() {
                $scope.projectGrid.refresh();
            }
        });
    };

    $scope.queryProject = function() {
        $scope.projectGrid.refresh(true);
    };

    $scope.exportProject = function() {
        var url = '../project/exportProject.cmd?projectId=';
        url += $scope.projectGrid.selection.getSelectedRows()[0].id;
        window.open(url, '_self');
    };

    $scope.modProject = function() {
        var project = $scope.projectGrid.selection.getSelectedRows()[0];
        $scope.openProjectInfo({
            title: '修改项目',
            data: angular.copy(project)
        }, $scope);
    };

    // upload budget for projects
    $scope.uploadFile = function() {
        common.uploadFile('/budget/importBudget.cmd', {
            file: $scope.importFile[0].lfFile,
            userName: $scope.user.name,
            projectId: $scope.projectGrid.selection.getSelectedRows()[0].id
        }, {
            success: function(result) {
                $scope.budgetGrid.refresh();
                modal.alert('成功导入:' + result.data.right + '条');
            }
        });
    };

    $scope.getSelectedProjects = function() {
        return $scope.projectGrid.selection.getSelectedRows();
    };

    $scope.showProgress = function(itemType) {
        var project = angular.copy($scope.getSelectedProjects()[0]);
        project.itemType = itemType;
        $state.go('progress-item', { project: project });
    };
}]);

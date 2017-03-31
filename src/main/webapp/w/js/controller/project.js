controllers.controller('ProjectCtrl', function(util,$scope, $rootScope, configuration, common, modal, module, $filter, $state) {

    $scope.modal = module.getProjectTypes();

    $scope.showDetail = function(row) {
        var project = $scope.convertStartAndEndTime(angular.copy(row.entity));
        $state.go('project-item', { project: project });
    };
    $scope.convertStartAndEndTime = function(project){
        project.contractStartDate = new Date(project.contractStartDate);
        project.contractEndTime = new Date(project.contractEndTime);
        return project;
    };

    $scope.query = {};
    $scope.loadProjects = function(page, limit) {
        common.loadPage('/projecting/obtainProjects.cmd', angular.extend({
            page: page,
            limit: limit
        }, $scope.query), {
            success: function(data) {
                $scope.projectGrid.data = data.data;
                angular.forEach($scope.projectGrid.data, function(d){
                    if (d.supplyMode === 3){
                        d.supplyMode = [1,2];
                    } else {
                        d.supplyMode = [d.supplyMode];
                    }
                });
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
            unTax: function(index){
                var rate = angular.each(this.rates, function(r){
                    if (r.index === index){
                        return util.rate(r.value)[0];
                    }
                });
                return this.data.totalCount > 0 && rate ? (this.data.totalCount / (1 + rate / 100.0)).toFixed(2) : 0;

            },
            addOutSource: function() {
                if (!this.data.outSources) {
                    this.data.outSources = [];
                }
                this.data.outSources[this.data.outSources.length] = {};
            },
            ok: function(project) {
                $scope.convertParams(project, 'outSources');
                var supplyMode = 0;
                angular.forEach(project.supplyMode, function(s){
                    supplyMode += s;
                });
                project.supplyMode = supplyMode;
                
                common.post('/projecting/saveProject.cmd', project, {
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
        common.delete('/projecting/deleteProject.cmd', $scope.constructSelectedId($scope.projectGrid, 'projectIds'), {
            success: function() {
                $scope.projectGrid.refresh();
            }
        });
    };

    $scope.queryProject = function() {
        $scope.projectGrid.refresh(true);
    };

    $scope.exportProject = function() {
        var url = '../projecting/exportProject.cmd?projectId=';
        url += $scope.projectGrid.selection.getSelectedRows()[0].id;
        window.open(url, '_self');
    };

    $scope.modProject = function() {
        var project = $scope.projectGrid.selection.getSelectedRows()[0];
        var duplicate = angular.copy(project);
        duplicate.contractEndTime = $scope.safeDate(duplicate.contractEndTime);
        duplicate.contractStartDate = $scope.safeDate(duplicate.contractStartDate);
        
        $scope.openProjectInfo({
            title: '修改项目',
            data: duplicate
        }, $scope);
    };

    // upload budget for projects
    $scope.uploadFile = function() {
        common.uploadFile('/budget/importBudget2.cmd', {
            file: $scope.importFile[0].lfFile,
            userName: $scope.user.name,
            projectId: $scope.projectGrid.selection.getSelectedRows()[0].id
        }, {
            success: function(result) {
                if (result.data && result.data.right === 0){
                    modal.alert('没有任何记录导入，请检查文件格式及内容');
                    return;
                }
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

    $scope.showProgressAndReceipt = function(){
        $state.go('receipt-progress-item', { 
            project: {
                project : $scope.getSelectedProjects()[0],
                belong: $scope.belong
            } 
        });
    };
});

controllers.controller('ProgressItemCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', function($scope, common, modal, module, $filter, $stateParams, configuration) {

    $scope.project = $stateParams.project;
    $scope.query = {
        'project.id' : $stateParams.project.id
    };
    $scope.isContract = $scope.project.itemType === 'contract';
    if ($scope.isContract){
        $scope.tpl = 'js/tpl/contract-progress-info.html';
        $scope.saveCmd = '/contract-progress/saveProgress.cmd';
        $scope.moduleName = 'createContractGrid';
        $scope.loadProgressUrl = '/contract-progress/obtainProgresses.cmd';
    } else {
        $scope.tpl = 'js/tpl/construction-progress-info.html';
        $scope.saveCmd = '/construction-progress/saveProgress.cmd';
        $scope.moduleName = 'createConstructionItemGrid';
        $scope.loadProgressUrl = '/construction-progress/obtainProgresses.cmd';
    }

    $scope.loadProgress = function(page, limit) {
        common.loadPage($scope.loadProgressUrl, angular.extend({
            page: page,
            limit: limit
        }, $scope.query), {
            success: function(data) {
                var lastAllCount = 0.0;
                var progresses = data.data;
                for (var i = progresses.length -1;i > -1;i--){
                    progresses[i].lastAllCount = lastAllCount;
                    lastAllCount += progresses[i].finished;
                }
                $scope.itemGrid.data = data.data;
                $scope.itemGrid.totalItems = data.total;
            }
        });
    };
    $scope.itemGrid = module[$scope.moduleName]($scope, $scope.loadProgress, configuration);

    $scope.loadProgress(1, 9999);

    $scope.modProgress = function(){
        var params = {
            url: $scope.tpl,
            width: 400,
            projectName: $scope.project.name,
            data: $scope.itemGrid.selection.getSelectedRows()[0],
            ok: function(progress) {
                var params = angular.copy(progress);
                delete params.project;
                params['project.id'] = progress.project.id;
                common.post($scope.saveCmd, params, {
                    success: function() {
                        modal.alert('进度修改成功。');
                        $scope.itemGrid.refresh();
                    }
                });
            }
        };
        modal.open(params, $scope);
    };
}]);

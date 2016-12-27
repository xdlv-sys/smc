controllers.controller('ConstructionProgressCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', function($scope, $rootScope, configuration, common, modal, module, $filter, $state) {

    $scope.openProgressInfo = function(conf) {
        var params = {
            url: 'js/tpl/construction-progress-info.html',
            width: 400,
            ok: function(progress) {
                common.post('/construction-progress/saveProgress.cmd', progress, {
                    success: function() {
                        modal.alert('工程进度录入成功。');
                    },
                    fail: function(data){
                        if (data.errorCode === 1){
                            modal.alert('工程进度录入失败：己存在对应月份的记录。');
                        }
                    }
                });
            }
        };
        modal.open(angular.extend(params, conf), $scope);
    };

    $scope.addProgress = function() {
        var project = $scope.getSelectedProjects()[0];
        $scope.openProgressInfo({
            title: '新增工程进度',
            add: true,
            data: {
                'project.id': project.id,
                importUser: $scope.user.name
            },
            projectName: project.name
        });
    };
}]);

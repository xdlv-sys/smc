controllers.controller('ContractProgressCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', function($scope, $rootScope, configuration, common, modal, module, $filter, $state) {
    
    $scope.openProgressInfo = function(conf) {
        var params = {
            url: 'js/tpl/contract-progress-info.html',
            width: 400,
            ok: function(progress) {
                common.post('/contract-progress/saveProgress.cmd', progress, {
                    success: function() {
                        modal.alert('合同进度录入成功。');
                    },
                    fail: function(data){
                        if (data.errorCode === 1){
                            modal.alert('合同进度录入失败：己存在对应月份的记录。');
                        }
                        if (data.errorCode === 2){
                            modal.alert('合同进度录入失败：己超出项目总金额。');
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
            title: '新增合同进度',
            add: true,
            data: {
                'project.id': project.id,
                importUser: $scope.user.name
            },
            projectName: project.name
        });
    };
}]);

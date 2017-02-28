controllers.controller('ReceiptProgressItemCtrl', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, $stateParams, supplierTypeName, util) {
    $scope.project = $stateParams.project.project;
    $scope.config = configuration;

    $scope.loadPage = function() {
        common.loadPage('/project-receipt/receiptAndProgress.cmd', {
            projectId: $scope.project.id,
            belong: $stateParams.project.belong
        }, function(data) {
            $scope.show = data;
        });
    };
    $scope.loadPage();

    $scope.modProgress = function() {
        modal.open({
            url: 'js/tpl/receipt-progress-remark-info.html',
            width: 500,
            title: '编辑工程月进度、收款说明',
            projectName: $scope.project.name,
            data: {
                projectId: $scope.project.id,
                belong: $stateParams.project.belong,
                id : $scope.show.addition_id,
                progress: $scope.show.addition_progress,
                progress2: $scope.show.addition_progress2
            },
            ok: function(data) {
                common.post('project-receipt/saveProgressRemark.cmd'
                	, data,$scope.loadPage);
            }
        });
    };

    $scope.exportProgress = function(){
    	var url = '../project-receipt/exportProgress.cmd?projectId=';
        url += $scope.project.id + '&belong=' + $stateParams.project.belong;
        window.open(url, '_self');
    };
    $scope.print = function(){
        util.preview('receiptProgressItem');
    };

});

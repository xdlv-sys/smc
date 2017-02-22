controllers.controller('ReceiptCtrl', ['$scope', '$rootScope', 'configuration', 'common', 'modal', 'module', '$filter', '$state', '$stateParams', 'supplierTypeName', function($scope, $rootScope, configuration, common, modal, module, $filter, $state, $stateParams, supplierTypeName) {

    $scope.showReceiptInfo = function(conf) {
        var params = {
            url: 'js/tpl/receipt-info.html',
            width: 400,
            ok: function(receipt) {
                receipt['project.id'] = receipt.project.id;
                delete receipt.project;
                common.post('/project-receipt/saveReceipt.cmd', receipt, {
                    success: function() {
                        modal.alert('项目收款录入成功。');
                        $scope.itemGrid && $scope.itemGrid.refresh();
                    },
                    fail: function(data) {
                        if (data.errorCode === 1) {
                            modal.alert('项目收款录入失败：己存在对应月份的记录。');
                        }
                    }
                });
            }
        };
        modal.open(angular.extend(params, conf), $scope);
    };

    $scope.addReceipt = function() {
        var project = $scope.getSelectedProjects()[0];
        $scope.showReceiptInfo({
            title: '新增项目收款',
            add: true,
            data: {
                project: project
            }
        });
    };

    $scope.showReceipt = function() {
        var project = angular.copy($scope.getSelectedProjects()[0]);
        $state.go('receipt-item', { project: project });
    };
    if (!$stateParams.project) {
        return;
    }
    $scope.project = $stateParams.project;

    $scope.loadReceipt = function(page, limit) {
        common.loadAllPage('/project-receipt/obtainReceipts.cmd', function(data) {
            $scope.itemGrid.data = [];
            var count = 0;
            angular.forEach(data.data, function(v) {
                var d = angular.extend({
                    allByLastMonth: count,
                    allByNow: count + v.count,
                    percent: (count + v.count) * 100 / v.project.totalCount
                }, v);
                count += v.count;
                $scope.itemGrid.data.push(d);
            });

        }, { 'project.id': $scope.project.id });
    };

    $scope.itemGrid = module.createReceiptGrid($scope, $scope.loadReceipt, configuration);
    $scope.loadReceipt();

    $scope.deleteReceipt = function() {
        common.delete('/project-receipt/deleteReceipt.cmd', $scope.constructSelectedId($scope.itemGrid, 'receiptIds'), {
            success: function() {
                $scope.itemGrid.refresh();
            }
        });
    };
    $scope.modReceipt = function() {
        $scope.showReceiptInfo({
            title: '修改收款',
            data: $scope.itemGrid.selection.getSelectedRows()[0]
        });
    };
}]);

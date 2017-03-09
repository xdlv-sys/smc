controllers.controller('CalculateItemCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', 'util', function($scope, common, modal, module, $filter, $stateParams, configuration, util) {

    $scope.budget = $stateParams.budget;

    var ratios = [{
        name: '17%',
        value: 0.17
    }, {
        name: '13%',
        value: 0.13
    }, {
        name: '11%',
        value: 0.11
    }, {
        name: '6%',
        value: 0.06
    }, {
        name: '5%',
        value: 0.05
    }, {
        name: '3%',
        value: 0.03
    }, {
        name: '1.5%',
        value: 0.015
    }, {
        name: '0%',
        value: 0.0
    }];


    var columnDefs = [{
        name: '序号',
        enableCellEdit: false,
        field: 'itemIndex'
    }, {
        name: '材料名称',
        enableCellEdit: false,
        field: 'materialName'
    }, {
        name: '型号规格',
        enableCellEdit: false,
        field: 'model'
    }, {
        name: '单位',
        enableCellEdit: false,
        field: 'unit'
    }, {
        name: '数量',
        enableCellEdit: false,
        field: 'count'
    }, {
        name: '预算价',
        enableCellEdit: false,
        field: 'price'
    }, {
        name: '合计',
        enableCellEdit: false,
        field: 'total'
    }, {
        name: '税率',
        editModelField: 'taxRatio',
        cellTemplate: '<div class="ui-grid-cell-contents" style="text-align:right;">{{row.entity.taxRatio !== null? (row.entity.taxRatio* 100 + "%") : "▼"}}</div>',
        editableCellTemplate: 'ui-grid/dropdownEditor',
        enableCellEdit: true,
        editDropdownIdLabel: 'value',
        editDropdownValueLabel: 'name',
        editDropdownOptionsArray: ratios
    }, {
        name: '税额',
        enableCellEdit: false,
        cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.taxRatio !== null ? (row.entity.total * row.entity.taxRatio/ (row.entity.taxRatio + 1)).toFixed(2) : ""}}</div>'
    }, {
        name: '不含税金额',
        enableCellEdit: false,
        cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.taxRatio !== null ? (row.entity.total / (row.entity.taxRatio + 1)).toFixed(2) : ""}}</div>'
    }];


    $scope.createGrid = function(data) {
        return {
            columnDefs: angular.copy(columnDefs),
            data: data,
            enableColumnMenus: false,
            onRegisterApi: function(gridApi) {
                gridApi.edit.on.afterCellEdit($scope, function(rowEntity, colDef, newValue, oldValue) {
                    $scope.$apply();
                    $scope.updateTotal(); // update total info manually
                    common.post('/calculate/updateRatio.cmd', {
                        id: rowEntity.id,
                        taxRatio: rowEntity.taxRatio
                    });
                });
            }
        };
    };
    $scope.manBudgetGrid = $scope.createGrid([]);
    $scope.materialBudgetGrid = $scope.createGrid([]);
    $scope.machineBudgetGrid = $scope.createGrid([]);


    angular.forEach($scope.budget.groups, function(g) {
        if (g.name === '人工') {
            $scope.manBudgetGrid = $scope.createGrid(g.items);
        } else if (g.name === '材料') {
            $scope.materialBudgetGrid = $scope.createGrid(g.items);
        } else if (g.name === '机械') {
            $scope.machineBudgetGrid = $scope.createGrid(g.items);
        }
    });

    $scope.totalBudgetGrid = {
        enableColumnMenus: false,
        columnDefs: [{
            name: '人工',
            field: 'man',
            cellFilter: 'toFixed'
        }, {
            name: '材料',
            field: 'material',
            cellFilter: 'toFixed'
        }, {
            name: '机械',
            field: 'machine',
            cellFilter: 'toFixed'
        }, {
            name: '合计',
            field: 'total',
            cellFilter: 'toFixed'
        }],
        data: []
    };

    $scope.updateTotal = function(man, material, machine) {
        var manTotal = 0,
            materialTotal = 0,
            machineTotal = 0,
            ids = {}
            i = 0;

        function f(grid, ratio) {
            var total = 0;
            angular.forEach(grid.data, function(v) {
                if (!angular.isBlank(ratio) && angular.isBlank(v.taxRatio)) {
                    v.taxRatio = ratio;
                    ids['items[' + i + '].id'] = v.id;
                    ids['items[' + i + '].taxRatio'] = ratio;
                    i++;
                }
                total += util.taxCount(v);
            });
            return total;
        }
        manTotal += f($scope.manBudgetGrid,man);
        materialTotal += f($scope.materialBudgetGrid,material);
        machineTotal += f($scope.machineBudgetGrid,machine);

        $scope.totalBudgetGrid.data = [{
            man: manTotal,
            material: materialTotal,
            machine: machineTotal,
            total: (manTotal + materialTotal + machineTotal)
        }];
        return ids;
    };
    $scope.updateTotal();

    $scope.exportCalculate = function() {
        var url = '../calculate/exportCalculate.cmd?';
        url += 'id=' + $scope.budget.projectId;
        window.open(url, '_self');
    };

    $scope.batchCalculate = function() {
        modal.open({
            url: 'js/tpl/batch-calculate-info.html',
            ratios: ratios,
            title: '批量设置',
            ok: function(data) {
                var ids = $scope.updateTotal(data.manRate, data.materialRate, data.mechineRate);
                common.post('/calculate/updateRatios.cmd', ids, function(){
                    modal.alert('批量设置成功。');
                });

            }
        });
    };

}]);

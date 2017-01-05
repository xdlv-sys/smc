controllers.controller('CalculateItemCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', function($scope, common, modal, module, $filter, $stateParams, configuration) {

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
        field: 'itemIndex'
    }, {
        name: '材料名称',
        field: 'materialName'
    }, {
        name: '型号规格',
        field: 'model'
    }, {
        name: '单位',
        field: 'unit'
    }, {
        name: '数量',
        field: 'count'
    }, {
        name: '预算价',
        field: 'price'
    }, {
        name: '合计',
        field: 'total'
    }, {
        name: '税率',
        editModelField: 'taxRatio',
        cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.taxRatio !== null? (row.entity.taxRatio* 100 + "%") : ""}}</div>',
        editableCellTemplate: 'ui-grid/dropdownEditor',
        enableCellEdit: true,
        editDropdownIdLabel: 'value',
        editDropdownValueLabel: 'name',
        editDropdownOptionsArray: ratios
    }, {
        name: '税额',
        cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.taxRatio !== null ? (row.entity.total * row.entity.taxRatio/ (row.entity.taxRatio + 1)).toFixed(2) : ""}}</div>'
    }, {
        name: '不含税金额',
        cellTemplate: '<div class="ui-grid-cell-contents">{{row.entity.taxRatio !== null ? (row.entity.total / (row.entity.taxRatio + 1)).toFixed(2) : ""}}</div>'
    }];


    $scope.createGrid = function(data) {
        return {
            columnDefs: angular.copy(columnDefs),
            data: data,
            onRegisterApi: function(gridApi) {
                gridApi.edit.on.afterCellEdit($scope, function(rowEntity, colDef, newValue, oldValue) {
                    $scope.$apply();
                    $scope.updateTotal(); // update total info manually
                    common.post('/calculate/updateRatio.cmd',{
                        id : rowEntity.id,
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
    	columnDefs : [{
    		name : '人工',
    		field: 'man'
    	},{
    		name : '材料',
    		field: 'material'
    	},{
    		name : '机械',
    		field: 'machine'
    	},{
    		name : '合计',
    		field: 'total'
    	}],
    	data:[]
    };

    $scope.updateTotal = function(){
    	var manTotal = 0, 
        materialTotal = 0, 
        machineTotal = 0;

        function taxCount(v){
    	    return v.taxRatio !== null ? (v.total * v.taxRatio / (v.taxRatio + 1)) : 0;
        }
        angular.forEach($scope.manBudgetGrid.data, function(v){
        	manTotal += taxCount(v);
        });
        angular.forEach($scope.materialBudgetGrid.data, function(v){
        	materialTotal += taxCount(v);
        });
        angular.forEach($scope.machineBudgetGrid.data, function(v){
        	machineTotal += taxCount(v);
        });
        $scope.totalBudgetGrid.data = [{
        	man : manTotal.toFixed(2),
    		material : materialTotal.toFixed(2),
    		machine : machineTotal.toFixed(2),
    		total: (manTotal + materialTotal + machineTotal).toFixed(2)
        }];
    };
    $scope.updateTotal();

}]);

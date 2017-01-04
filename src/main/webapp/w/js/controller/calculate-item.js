controllers.controller('CalculateItemCtrl', ['$scope', 'common', 'modal', 'module', '$filter', '$stateParams', 'configuration', function($scope, common, modal, module, $filter, $stateParams, configuration) {

    $scope.budget = $stateParams.budget;

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
    },{
    	name: '税率',
    	field: 'taxRatio',
    	cellTemplate: ['<div class="ui-grid-cell-contents">'
    	,'<select style="width:100%;">'
    	,'  <option></option>'
    	,'  <option ng-repeat="x in grid.appScope.taxRatios"'
    	,'   value="{{x.value}}">{{x.name}}</option>'
        ,'</select>'
    	,'</div>'].join('')
    }, {
        name: '税额',
        cellTemplate: ''
    },, {
        name: '不含税金额',
        cellTemplate: ''
    }];

    $scope.selected = function(v,row){
    	if (row.entity.taxRatio === v){
    		return 'selected';
    	}
    	return '';
    },

    $scope.taxRatios = [{
    	name : '17%',
    	value: 0.17
    },{
    	name : '13%',
    	value: 0.13
    },{
    	name : '11%',
    	value: 0.11
    },{
    	name : '6%',
    	value: 0.06
    },{
    	name : '5%',
    	value: 0.05
    },{
    	name : '3%',
    	value: 0.03
    },{
    	name : '1.5%',
    	value: 0.015
    },{
    	name : '0%',
    	value: 0.0
    }];

    $scope.createGrid = function(data){
    	return {
    		columnDefs : angular.copy(columnDefs),
    		data : data
    	};
    },

    angular.forEach($scope.budget.groups, function(g) {
        if (g.name === '人工') {
            $scope.manBudgetGrid = $scope.createGrid(g.items);
        } else if (g.name === '材料') {
            $scope.materialBudgetGrid = $scope.createGrid(g.items);
        } else if (g.name === '机械') {
            $scope.machineBudgetGrid = $scope.createGrid(g.items);
        }
    });
}]);

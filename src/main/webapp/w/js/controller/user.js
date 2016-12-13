controllers.controller('UserCtrl', [
    '$scope','common',
    function($scope, common) {
        $scope.totalItemsLabel = '总页数';
    	$scope.userGrid = common.createGridOption([{
    		name: '用户名',field: 'name'
    	},{
    		name : '邮箱', field: 'mail'
    	}],$scope);

    	common.post('/user/obtainUsers.cmd',{
    		page: 1, limit: 25
    	},{
    		success: function(data){
    			$scope.userGrid.data = data.data;
                $scope.totalItems = data.total;
    		}
    	});
    }
]);

controllers.controller('UserCtrl', [
    '$scope','common','modal','module',
    function($scope, common, modal,module) {
        
    	$scope.userGrid = module.createUserGrid($scope);

    	common.loadPage('/user/obtainUsers.cmd',{},{
    		success: function(data){
    			$scope.userGrid.data = data.data;
                $scope.totalItems = data.total;
    		}
    	});
        $scope.loadDepts = function(){
            common.loadPage('/role/obtainRoles.cmd',{},{
            success: function(data){
                $scope.depts = data.data;
            }
        });
        };

    	$scope.addUser = function(){
    		modal.open({
    			url: 'js/tpl/user-info.html',
                title: '新增用户',
                width: 500,
                canGo: function(data){
                    return true;
                },
                loadDepts: $scope.loadDepts
    		});
    	};
    }
]);

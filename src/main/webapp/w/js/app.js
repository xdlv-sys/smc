var app = angular.module('taxApp', ['ngMaterial']);
app.controller('taxController', ['$scope', '$mdSidenav', function($scope, $mdSidenav) {
    $scope.menus = [{
        text: '用户管理',
        children: [{
            text: '新建用户'
        }, {
            text: '删除用户'
        }]
    }, {
        text: '项目管理',
        children: [{
            text: '新建项目'
        }, {
            text: '删除项目'
        }]
    }];

    $scope.toggleMenu = function() {
        $mdSidenav('left').toggle();
    };
    $scope.toggleItem = function(index) {
        alert(index);
    };
    $scope.isOpen = function(section) {
          return true;
    };
    
    $scope.sections = [{
        name: 'Beers',
        type: 'toggle',
        pages: [{
            name: 'IPAs',
            type: 'link',
            state: 'beers.ipas',
            icon: 'fa fa-group'
        }, {
            name: 'Porters',
            state: 'home.toollist',
            type: 'link',
            icon: 'fa fa-map-marker'
        }, {
            name: 'Wheat',
            state: 'home.createTool',
            type: 'link',
            icon: 'fa fa-plus'
        }]
    }];
}]);

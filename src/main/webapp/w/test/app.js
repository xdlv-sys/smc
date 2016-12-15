controllers.controller('taxController', ['$scope', '$mdSidenav', 'modal', 'ngPopoverFactory',
    function($scope, $mdSidenav, modal, ngPopoverFactory) {

        var user = {name: 'a', pwd:1};
        console.log(angular.extend({id: 1}, user));
        //var data1 = 
        modal.open({
                url: 'js/tpl/user-info.html',
                title: '新增用户',
                width: 500,
                canGo: function(data) {
                    return data.name && data.sex && data.mobile && data.password && data.password2 && data.password === data.password2 && data.roles;
                },
                loadDepts: function() {
                    common.loadPage('/dept/obtainDepts.cmd', {}, {
                        success: function(data) {
                            $scope.depts = data.data;
                        }
                    });
                },
                ok: function(user) {
                    user.entryTime = $filter('date')(user.entryTime, 'yyyy-MM-dd');

                    user.birthday = $filter('date')(user.birthday, 'yyyy-MM-dd');

                    var roles = user.roles;
                    delete user.roles;
                    angular.forEach(roles, function(v, i) {
                        user['roles[' + i + '].id'] = v;
                    });

                    common.post('/user/saveUser.cmd', user, {
                        fail: function() {
                            modal.alert('新增用户失败');
                        }
                    });
                }
            }, $scope);


        $scope.departments = [{
            name: 'company',
            children: [{
                name: 'department',
                children: [{
                    name: 'market'
                }, {
                    name: 'rdc'
                }]
            }]
        }];

        $scope.treeCallback = function(item, selectedItems) {
            ngPopoverFactory.closePopover('popover-trigger');
            console.log(item);
            return true;
        };

        $scope.show = function() {
            modal.open({
                url: 'js/tpl/user-info.html',
                title: 'rename',
                canGo: function(data) {
                    return true;
                },
                ok: function(user) {

                }
            });
        };



        $scope.totalItemsLabel = 'A';
        $scope.gridOptions1 = {
            enableHorizontalScrollbar: 1,
            enableVerticalScrollbar: 1,
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 2,
            paginationTemplate: '../js/tpl/pagination.html',

            columnDefs: [
                { name: 'name' },
                { name: 'gender' }
            ],
            onRegisterApi: function(gridApi) {
                $scope.gridApi = gridApi;
            },
            data: [{ name: '1_name', 'gender': 'm' },
                { name: '2_name', 'gender': 'm' },
                { name: '3_name', 'gender': 'm' },
                { name: '4_name', 'gender': 'm' }
            ]
        };


        $scope.enabled = false;

        $scope.show = function() {
            modal.open({});
        };

        $scope.items = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
    }
]);

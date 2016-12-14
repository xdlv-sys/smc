controllers.controller('taxController', ['$scope', '$mdSidenav', 'modal', 'ngPopoverFactory',
    function($scope, $mdSidenav, modal, ngPopoverFactory) {

        //var data1 = 

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

controllers.controller('taxController', ['$scope', '$mdSidenav', 'modal',
    function($scope, $mdSidenav, modal) {

        modal.open({
            url: 'js/tpl/change_password.html',
            ok: function(user) {
                console.log(user);
            }
        });

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

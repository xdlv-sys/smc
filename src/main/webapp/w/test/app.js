var app = angular.module('taxApp', ['ngMaterial', 'ui.grid', 'ui.grid.pagination']);
app.controller('taxController', ['$scope', '$mdSidenav', 'modal',
    function($scope, $mdSidenav, modal) {

        $scope.totalItemsLabel='A';
        $scope.gridOptions1 = {
        	enableHorizontalScrollbar :1,
            enableVerticalScrollbar : 1,
            paginationPageSizes: [25, 50, 75],
            paginationPageSize: 2,
            paginationTemplate: '../js/tpl/pagination.html',

            columnDefs: [
                { name: 'name' },
                { name: 'gender' }
            ],
            onRegisterApi: function(gridApi){
            	$scope.gridApi = gridApi;
            },
            data: [{name: '1_name', 'gender': 'm'},
            {name: '2_name', 'gender': 'm'},
            {name: '3_name', 'gender': 'm'},
            {name: '4_name', 'gender': 'm'}]
        };


        $scope.enabled = false;

        $scope.show = function() {
            modal.open({});
        };

        $scope.items = ['a', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b', 'b'];
    }
]);

app.service('modal', ['$mdDialog', function($mdDialog) {
    this.open = function(conf) {
        $mdDialog.show({
                controller: conf.ctrl ? conf.ctrl : DialogController,
                templateUrl: 'modal-tpl.html',
                parent: angular.element(document.body),
                targetEvent: conf.ev,
                clickOutsideToClose: true // Only for -xs, -sm breakpoints.
            })
            .then(function(answer) {
                console.log('You said the information was "' + answer + '".');
            }, function() {
                console.log('You cancelled the dialog.');
            });
    };

    function DialogController($scope, $mdDialog) {
        $scope.hide = function() {
            $mdDialog.hide();
        };

        $scope.cancel = function() {
            $mdDialog.cancel();
        };

        $scope.answer = function(answer) {
            $mdDialog.hide(answer);
        };
    }
}])

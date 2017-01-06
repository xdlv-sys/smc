controllers.controller('taxController', ['$scope', '$mdSidenav', 'modal', 'ngPopoverFactory',
    function($scope, $mdSidenav, modal, ngPopoverFactory) {

    console.log(['<div layout="column" class="lf-ng-md-file-input" ng-model="lf001002">',
                            '<div layout="column" class="lf-ng-md-file-input-preview-container" ng-class="{\'disabled\':isDisabled}" ng-show="isDrag || (isPreview && !isFilesNull)">',
                                '<div class="close lf-ng-md-file-input-x" ng-click="removeAllFiles($event)" ng-hide="isFilesNull || !isPreview" >&times;</div>',
                                '<div class="lf-ng-md-file-input-drag">',
                                    '<div layout="row" layout-align="center center" class="lf-ng-md-file-input-drag-text-container" ng-show="(isFilesNull || !isPreview) && isDrag">',
                                        '<div class="lf-ng-md-file-input-drag-text">{{strCaptionDragAndDrop}}</div>',
                                    '</div>',
                                    '<div class="lf-ng-md-file-input-thumbnails" ng-show="isPreview">',
                                    '</div>',
                                    '<div class="clearfix" style="clear:both"></div>',
                                '</div>',
                            '</div>',
                            '<div layout="row" class="lf-ng-md-file-input-container" >',
                                '<div class="lf-ng-md-file-input-caption" layout="row" layout-align="start center" flex ng-class="{\'disabled\':isDisabled}" >',
                                    '<md-icon class="lf-icon" ng-class="strCaptionIconCls"></md-icon>',
                                    '<div flex class="lf-ng-md-file-input-caption-text-default" ng-show="isFilesNull">',
                                        '{{strCaptionPlaceholder}}',
                                    '</div>',
                                    '<div flex class="lf-ng-md-file-input-caption-text" ng-hide="isFilesNull">',
                                        '{{strCaption}}',
                                    '</div>',
                                    '<md-progress-linear md-mode="determinate" value="{{floatProgress}}" ng-show="intLoading && isProgress"></md-progress-linear>',
                                '</div>',
                                '<md-button ng-disabled="isDisabled" ng-click="openDialog($event, this)" class="md-raised md-primary" >',
                                    
                                    '{{strCaptionBrowse}}',
                                    '<input type="file" aria-label="{{strAriaLabel}}" accept="{{accept}}" ng-disabled="isDisabled" class="lf-ng-md-file-input-tag" />',//,onchange="angular.element(this).scope().onFileChanged(this)"/>',
                                '</md-button>',
                            '</div>',

                        '</div>'].join(''));
        //modal.wait();
$scope.browser = 'TT';
var a = [];
    a[1] = 2;
    a[3] = 4;
    console.log(a);

        $scope.data = [{
            'id': 1,
            'title': 'node1',
            'nodes': [{
                'id': 11,
                'title': 'node1.1',
                'nodes': [{
                    'id': 111,
                    'title': 'node1.1.1',
                    'nodes': []
                }]
            }, {
                'id': 12,
                'title': 'node1.2',
                'nodes': []
            }]
        }, {
            'id': 2,
            'title': 'node2',
            'nodrop': true, // An arbitrary property to check in custom template for nodrop-enabled
            'nodes': [{
                'id': 21,
                'title': 'node2.1',
                'nodes': []
            }, {
                'id': 22,
                'title': 'node2.2',
                'nodes': []
            }]
        }, {
            'id': 3,
            'title': 'node3',
            'nodes': [{
                'id': 31,
                'title': 'node3.1',
                'nodes': []
            }]
        }];
        var user = { name: 'a', pwd: 1 };
        console.log(angular.extend({ id: 1 }, user));
        //var data1 = 
        /*modal.open({
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
            }, $scope);*/


        $scope.departments = [{
            name: 'company',
            children: [{
                name: 'department',
                children: [{
                    name: 'market',
                    selected: true
                }, {
                    name: 'rdc'
                }]
            }]
        }];

        $scope.treeCallback = function(item, selectedItems) {
            //console.log(item);
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

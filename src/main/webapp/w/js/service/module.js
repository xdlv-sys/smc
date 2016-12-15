services.service('module', ['common', function(common) {
    this.createUserGrid = function(scope, loadData) {
        return common.createGridOption([{
            name: '用户名',
            field: 'name'
        }, {
            name: '生日',
            field: 'birthday'
        }, {
            name: '性别',
            field: 'sex'
        }, {
            name: '入职时间',
            field: 'entryTime'
        }, {
            name: '手机号码',
            field: 'mobile'
        }, {
            name: '固定电话',
            field: 'phone'
        }, {
            name: '身份证号',
            field: 'idCard'
        }, {
            name: '邮箱',
            field: 'mail'
        }, {
            name: '部门',
            field: 'dept'
        }, {
            name: '角色',
            field: 'role'
        }], scope,loadData);
    }
}]);

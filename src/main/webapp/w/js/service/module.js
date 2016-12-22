services.service('module', ['common','configuration', function(common,configuration) {
    this.createUserGrid = function(scope, loadData) {
        return common.createGridOption([{
            name: '用户名',
            field: 'name'
        }, {
            name: '生日',
            field: 'birthday'
        }, {
            name: '性别',
            field: 'sex',
            cellTemplate: '<div class="ui-grid-cell-contents" >{{grid.getCellValue(row, col)===0?\'女\':\'男\'}}</div>'
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
            field: 'dept.name'
        }], scope, loadData);
    };

    this.createDeptGrid = function(scope, loadData) {
        return common.createGridOption([{
            name: '部门名',
            field: 'name'
        }, {
            name: '角色',
            field: 'roleNames'
        }], scope, loadData);
    };

    this.createRoleGrid = function(scope, loadData) {
        return common.createGridOption([{
            name: '角色名',
            field: 'name'
        }], scope, loadData);
    };

    this.createConfGrid = function(scope, loadData) {
        return common.createGridOption([{
            name: '组编号',
            field: 'groupNo'
        }, {
            name: '配置名',
            field: 'confName'
        }, {
            name: '配置值',
            field: 'confValue'
        }, {
            name: '描述',
            field: 'confDesc'
        }], scope, loadData);
    };
    this.createProductGrid = function(scope, loadData, configuration) {
        return common.createGridOption([{
            name: '商品编号',
            field: 'code',
            cellTemplate: '<div class="ui-grid-cell-contents" ng-click="grid.appScope.showDetail(row)"><a ng-href="javascript:void(0)">{{grid.getCellValue(row, col)}}</a></div>'
        },{
            name: '商品名称',
            field: 'name'
        }, {
            name: '规格型号',
            field: 'model'
        }, {
            name: '商品性质',
            field: 'nature',
            cellTemplate: '<div class="ui-grid-cell-contents" >' + '{{grid.options.configuration.i18n(1,"nature",row.entity.nature)}}' + '</div>'

        }, {
            name: '所属类型',
            field: 'genre',
            cellTemplate: '<div class="ui-grid-cell-contents" >' + '{{grid.options.configuration.i18n(1,"genre",row.entity.genre)}}' + '</div>'
        }, {
            name: '单位',
            cellTemplate: '<div class="ui-grid-cell-contents" >' + '{{grid.options.configuration.i18n(1,"weightUnit",row.entity.weightUnit) + "/" + grid.options.configuration.i18n(1,"countUnit",row.entity.countUnit) + "/" + grid.options.configuration.i18n(1,"bulkUnit",row.entity.bulkUnit)}}' + '</div>'
        }, {
            name: '包装规格',
            field: 'packageType'
        }, {
            name: '税率',
            field: 'rate'
        }, {
            name: '状态',
            field: 'status',
            cellTemplate: '<div class="ui-grid-cell-contents" >' + '{{row.entity.status === 0 ? "待审核": "己审核"}}' + '</div>'
        }], scope, loadData, configuration);
    };

    this.createProductImportGrid = function(scope, loadData) {
        return common.createGridOption([{
            name: '导入',
            field: 'operator'
        }, {
            name: '状态',
            field: 'status',
            cellTemplate: '<div class="ui-grid-cell-contents" >' + '{{row.entity.status === 0 ? "待审核": "己审核"}}' + '</div>'
        }, {
            name: '导入时间',
            field: 'createTime'
        }], scope, loadData);
    };

    this.getProductTypes = function(m) {
        m = m || {};
        m.natures = configuration.group(1, 'nature');
        m.genres = configuration.group(1, 'genre');
        m.countUnits = configuration.group(1, 'countUnit');
        m.weightUnits = configuration.group(1, 'weightUnit');
        m.bulkUnits = configuration.group(1, 'bulkUnit');
        return m;
    };

    this.createProjectGrid = function(scope, loadData, configuration) {
        return common.createGridOption([{
            name: '项目名称',
            field: 'name',
            cellTemplate: '<div class="ui-grid-cell-contents" ng-click="grid.appScope.showDetail(row)"><a ng-href="javascript:void(0)">{{grid.getCellValue(row, col)}}</a></div>'
        },{
            name: '发包方',
            field: 'employer'
        }, {
            name: '项目承接方式',
            field: 'projectMode',
            cellTemplate: '<div class="ui-grid-cell-contents" >' + '{{row.entity.projectMode === 0 ? "总包": "分包"}}' + '</div>'
        }, {
            name: '项目类型',
            field: 'projectType',
            cellTemplate: '<div class="ui-grid-cell-contents" >' + '{{grid.options.configuration.i18n(2,"projectType",row.entity.projectType)}}' + '</div>'
        }, {
            name: '项目经理',
            field: 'manager'
        }, {
            name: '施工合同号',
            field: 'contract_number'
        }, {
            name: '施工合同签署日期',
            field: 'contractSignDate'
        }, {
            name: '合同金额',
            field: 'totalCount'
        }], scope, loadData, configuration);
    };
    this.getProjectTypes = function(m) {
        m = m || {};
        m.projectTypes = configuration.group(2, 'projectType');
        m.rates = configuration.group(2, 'rate');
        return m;
    };
    
}]);

describe("User Module ", function() {

    var taxScope, taxCtrl, userScope, userCtrl;
    var httpBackend, com;
    beforeEach(module('xdApp'));

    beforeEach(function() {
        inject(function($rootScope, $state, $controller, _$httpBackend_,common) {
            httpBackend = _$httpBackend_;

            taxScope = $rootScope.$new();
            taxCtrl = $controller('taxController', { $scope: taxScope });

            /*换成你要测试的模块，比如project, supplier*/
            userScope = taxScope.$new();
            userCtrl = $controller('UserCtrl', { '$scope': userScope });
            com = common;
        });
    });

    it("add user", function() {
        /*注入你期望的HTTP返回*/
        httpBackend.when('POST', '../user/saveUser.cmd').respond({
            success: true
        }); userScope.userGrid.selection = {
            getSelectedRows: function(){
                return [{id: 1},{id:2}];
            }
        };

        // 构造参数
        var user = {
            name: 'a',
            password: 'a',
            birthday:'1990-01-01',
            sex:1,
            entryTime: '2007-01-01',
            mobile: '1981010101010',
            'roles[0].id': 1,
            'dept.id': 1
        };
        // 发送http 请求
        com.post('/user/saveUser.cmd', user, {
            success: function(d) {
                //验证成功
                expect(d.success).toBe(true);
            }
        });

    });
    
    it("mod user", function() {
        /*注入你期望的HTTP返回*/
        httpBackend.when('POST', '../user/saveUser.cmd').respond({
            success: true
        });

        var user = {
            id: 1,
            name: '修改值'
        };
        // 发送http 请求
        com.post('/user/saveUser.cmd', user, {
            success: function(d) {
                //验证成功
                expect(d.success).toBe(true);
            }
        });
        
    });

    it("delete user", function() {
        /*注入你期望的HTTP返回*/
        httpBackend.when('POST', '../user/deleteUser.cmd').respond({
            success: true
        });

        /*模拟表格选择，具体要看controller下被测试的代码*/
        userScope.userGrid.selection = {
            getSelectedRows: function(){
                return [{id: 1},{id:2}];
            }
        };
        userScope.userGrid.refresh = function(d){
            expect(d).toBe(undefined);
        }

        userScope.delUser();
        
    });

});

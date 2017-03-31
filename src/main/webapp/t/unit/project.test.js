describe("Project Module ", function() {

    var taxScope, taxCtrl, projectScope, projectCtrl;
    var httpBackend, com;
    beforeEach(module('xdApp'));

    beforeEach(function() {
        inject(function($rootScope, $state, $controller, _$httpBackend_,common,configuration) {
            httpBackend = _$httpBackend_;

            taxScope = $rootScope.$new();
            taxCtrl = $controller('taxController', { $scope: taxScope });

            configuration.configurations={};
            /*换成你要测试的模块，比如project, supplier*/
            projectScope = taxScope.$new();
            projectCtrl = $controller('ProjectCtrl', { '$scope': projectScope });
            com = common;
        });
    });

	 it("add project", function() {
        /*注入你期望的HTTP返回*/
        httpBackend.when('POST', '/projecting/saveProject.cmd').respond({
            success: true
        }); 

        // 构造参数
        var project = {
            name: '测试项目',
            employer: 'a',
            projectMode:2,
            projectType:1,
            manager: '经理',
            contractSignDate: '2005-02-03',
            contractNumber:'123123',
            contractStartDate: '2005-02-03',
			licenseNumber:'123123123',
			contractEndTime:'2005-02-03',
			projectLocation:'江苏',
			licenseDate:'2005-02-03',
			supplyMode:1,
			totalCount:'12313',
			//rate:2;
			untaxedCount:'22222',
			outSource:2,
			attach:2,
			status:1
        };
        // 发送http 请求
        com.post('/projecting/saveProject.cmd', project, {
            success: function(d) {
                //验证成功
                expect(d.success).toBe(true);
            }
        });

    });
	
	
    it("del project", function() {
        
        httpBackend.when('POST', '../projecting/deleteProject.cmd').respond({
            success: true
        });
		
		projectScope.projectGrid.selection = {
            getSelectedRows: function(){
                return [{id: 1},{id:2}];
            }
        };
        projectScope.projectGrid.refresh = function(d){
            expect(d).toBe(undefined);
        }

        projectScope.delProject();

    });
    
});

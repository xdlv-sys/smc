var util = require('./util');
browser.driver.manage().window().maximize();

describe('Login Test', function() {
	 beforeAll(function() {
        browser.get('http://hjcpay.com/tax/w/index.html');
        element(by.model('user.name')).sendKeys('a');
    	element(by.model('user.password')).sendKeys('a');

    	util.clickButton('登陆');
    	browser.waitForAngular();
     });

    it('add user', function() {
    	util.clickButton('系统配置');
		$('a[href*="#/user"]').click();

        util.clickButton('新增用户');

        var userName = util.getRandomString(5),
            mail = userName + '@qq.com';

        util.modelText('modal.data.name',userName);

        util.dateText('modal.data.birthday', '2017-01-01');
        util.selectText('modal.data.sex','男');
        util.dateText('modal.data.entryTime', '2017-01-01');
        util.modelText('modal.data.mobile','15951928787');
        util.modelText('modal.data.phone','02590888888');
        util.modelText('modal.data.password', userName);
        util.modelText('modal.data.password2', userName);
        util.modelText('modal.data.idCard', '3403211990010170998');
        util.modelText('modal.data.mail', mail);

        util.selectText('modal.data.dept','财务部');
        util.selectText('modal.data.roles','会计');

        util.clickButton('确定', true);

        browser.waitForAngular();

        var newUser = element(by.cssContainingText('.ui-grid-cell-contents',mail));
        expect(newUser.getText()).toBe(mail);        
    });

});


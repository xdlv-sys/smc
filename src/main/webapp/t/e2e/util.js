var clickButton = function(text, move) {
    var button = element(by.buttonText(text));
    if (move){
    	browser.actions().mouseMove(button).perform();
    	browser.actions().click().perform();
    }
    button.click();
};

var modelText = function(m, text) {
    element(by.model(m)).sendKeys(text);
};
var dateText = function(m, v) {
    element(by.model(m)).element(by.css('.md-datepicker-input')).sendKeys(v);
};

var selectText = function(m, v) {
    element(by.model(m)).click();
    //browser.waitForAngular();
    element(by.cssContainingText('.md-text', v)).click();
};

var getRandomString = function(length) {
    var string = '';
    var letters = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz' //Include numbers if you want
    for (i = 0; i < length; i++) {
        string += letters.charAt(Math.floor(Math.random() * letters.length));
    }
    return string;
};

module.exports.clickButton = clickButton;
module.exports.modelText = modelText;
module.exports.getRandomString = getRandomString;
module.exports.dateText = dateText;
module.exports.selectText = selectText;

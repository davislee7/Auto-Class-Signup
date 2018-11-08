var globals = require('./globals');
var config = require('../~config/config');
var EC = protractor.ExpectedConditions;

var performLogin = function () {
    browser.baseUrl = config.app_uri;
    browser.get('/');
    var username = $("#username");
    username.sendKeys(config.std_user_name);
    var password = $("#password");
    password.sendKeys(config.std_user_password);
    var button = $('a[onclick="postOk();"]');
    button.click();
};

exports.login = performLogin;

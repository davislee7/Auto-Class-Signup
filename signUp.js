describe('App', function () {
  var path = require('path');
  var config = require('./~config/config');
  var globals =  require('./~specs/globals');
  var loginHelper =  require('./~specs/login');

  var scriptName = path.basename(__filename);
  var EC = protractor.ExpectedConditions;

  beforeAll(function () {
    browser.waitForAngularEnabled(false);
    browser.ignoreSynchronization = true;
    loginHelper.login();
  });

  beforeEach(function () {
    process.stdout.write("\r\n" + globals.currentSpecReporter.name + " ");
  });

  it('should browse to main page', function () {
    browser.getCurrentUrl().then(function (url) {
      expect(url.indexOf('StudentLanding') > 0).toBe(true);
    });
  });

  it('should browse to Student Registration', function () {
    element(by.linkText('Student Registration')).click().then(function () {
      browser.getCurrentUrl().then(function (url) {
        expect(url.indexOf('SearchClasses') > 0).toBe(true);
      });
    });
  });
  it('should browse to enroll in classes', function () {
    element(by.id('savedClassesContextMenuItem')).click().then(function () {
      browser.getCurrentUrl().then(function (url) {
        expect(url.indexOf('SearchClasses') > 0).toBe(true);
      });
    });
  });
  it('should browse to option to enroll', function () {
    var dropDown = $('#yui-gen26-button');
    browser.wait(EC.visibilityOf(dropDown), globals.stdWaitTime);
    dropDown.click();
    var clickEnroll = $('#yui-gen37');
    browser.wait(EC.visibilityOf(clickEnroll), globals.stdWaitTime);
    clickEnroll.click();
    dropDown = $('#yui-gen28-button');
    browser.wait(EC.visibilityOf(dropDown), globals.stdWaitTime);
    dropDown.click();
    clickEnroll = $('#yui-gen40');
    browser.wait(EC.visibilityOf(clickEnroll), globals.stdWaitTime);
    clickEnroll.click();
    dropDown = $('#yui-gen30-button');
    browser.wait(EC.visibilityOf(dropDown), globals.stdWaitTime);
    dropDown.click();
    clickEnroll = $('#yui-gen43');
    browser.wait(EC.visibilityOf(clickEnroll), globals.stdWaitTime);
    clickEnroll.click();
    dropDown = $('#yui-gen32-button');
    browser.wait(EC.visibilityOf(dropDown), globals.stdWaitTime);
    dropDown.click();
    clickEnroll = $('#yui-gen46');
    browser.wait(EC.visibilityOf(clickEnroll), globals.stdWaitTime);
    clickEnroll.click();
    dropDown = $('#yui-gen34-button');
    browser.wait(EC.visibilityOf(dropDown), globals.stdWaitTime);
    dropDown.click();
    clickEnroll = $('#yui-gen49');
    browser.wait(EC.visibilityOf(clickEnroll), globals.stdWaitTime);
    clickEnroll.click();
    var submit = $('#enrollButton-button')
    submit.click();
    browser.wait(EC.urlContains('/Admin/Admin'), globals.stdWaitTime);
    // .then(function () {
    //
    //   browser.getCurrentUrl().then(function (url) {
    //     expect(url.indexOf('SearchClasses') > 0).toBe(true);
    //   });
    // });
  });
});

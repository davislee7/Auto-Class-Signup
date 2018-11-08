// local vars
var stdWaitTime = 60 * 1000;

// This allows us to print the name of the currently executing test
var currentSpecReporter = {
    specStarted: function(result) {
        this.name = result.fullName;
    }
};
jasmine.getEnv().addReporter(currentSpecReporter);

var writeTestDescription = function(){ process.stdout.write("\r\n" + currentSpecReporter.name + " "); };

var selectDropdownbyNum = function ( element, optionNum ) {
    if (optionNum){
      var options = element.all(by.tagName('option'))
        .then(function(options){
          options[optionNum].click();
        });
    }
  };

// node.js exports for this module
exports.stdWaitTime = stdWaitTime;
exports.currentSpecReporter = currentSpecReporter;
exports.writeTestDescription = writeTestDescription;
exports.selectDropdownbyNum = selectDropdownbyNum;

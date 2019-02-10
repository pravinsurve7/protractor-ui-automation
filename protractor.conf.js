let SpecReporter = require('jasmine-spec-reporter').SpecReporter;

exports.config = {

  // Address of the running server.
  seleniumAddress: 'http://localhost:4444/wd/hub/',

  // Spec patterns are relative to the current working directly when
  // protractor is called.
  specs: ['*/*Spec.js'],

  // Capabilities to be passed to the webdriver instance.
  capabilities: {
    browserName: 'chrome'
  },

  // Framework to use. Jasmine is recommended.
  framework: 'jasmine',

  // Options to be passed to Jasmine.
  jasmineNodeOpts: {
    showColors: true,   // Use colors in the command line report.  
    defaultTimeoutInterval: 30000   // Default time to wait in ms before a test fails.
  },

  // Jasmine console reporter config.
  onPrepare: function () {
    jasmine.getEnv().addReporter(new SpecReporter({
      displayFailuresSummary: true,
      displayFailuredSpec: true,
      displaySuiteNumber: true,
      displaySpecDuration: true
    }));
  }
};
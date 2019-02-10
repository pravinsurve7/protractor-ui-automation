'use strict'

var data = require('../data/testData.json');

const FIRST_NAME = data.general.firstName;
const LAST_NAME = data.general.lastName;

var SignupPage = function () {
    this.txtFirstName = element(by.name('firstName'));
    this.txtLastName = element(by.id('lastName'));
    this.txtEmailId = element(by.id('email'));
    this.txtPassword = element(by.id('password'));
    this.txtConfirmPassword = element(by.id('passwordConfirmation'));
    this.btnLogin = element(by.buttonText('Login'));
    this.chkIAccept = element(by.name('tos'));
    this.lblUsername = element(by.xpath('//label[@class="AppHeaderUserNavigation-toggle AppHeaderUserNavigation-toggle--transparent font-weight--bold"]'));
    this.lnkSignup = element(by.linkText('Sign up!'));
    this.btnSignup = element(by.buttonText('Sign up!'));
    this.lnkMyAccount = element(by.linkText('My account'));
    this.lblErrorIndicator = element(by.xpath('//span[@class="ErrorIndicator-message ErrorIndicator-message--error"]'));

    /**
     * This click on Signup link and verify the url.
     * @param {Object} _browser
     */
    this.signup = function (_browser) {
        this.lnkSignup.click();
        _browser.getCurrentUrl().then(function (url) {
            if (url.match('signup')) {
                console.log('On sign page');
            } else {
                expect(true).toBe(false, 'Sign up Page was expected');
            }
        });
    }

    /** 
     * This function enter details required for Signup.
     * @param {String} emailId
     * @param {String} password
    */
    this.enterSignupDetails = function (emailId, password) {
        this.txtFirstName.sendKeys(FIRST_NAME);
        this.txtLastName.sendKeys(LAST_NAME);
        this.txtEmailId.sendKeys(emailId);
        this.txtPassword.sendKeys(password);
        this.txtConfirmPassword.sendKeys(password);
        this.chkIAccept.sendKeys(' ');
        this.btnSignup.click();
    }

    /** Navigate to My account page. */
    this.navigateToMyAccount = function () {
        this.lblUsername.click();
        this.lnkMyAccount.click();
    }
};

module.exports = new SignupPage();
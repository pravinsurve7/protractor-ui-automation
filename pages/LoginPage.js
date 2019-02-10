'use strict'
const signup_page = require('./SignupPage');

var LoginPage = function () {
    this.txtEmailId = element(by.id('email'));
    this.txtPassword = element(by.id('password'));
    this.btnLogin = element(by.buttonText('Login'));
    this.lnkMyAccount = element(by.xpath('//*[@class="SubHeaderNavigation"]//span/a[contains(text(),"My account")]'));
    this.lblUsername = element(by.xpath('//label[@class="AppHeaderUserNavigation-toggle font-weight--bold"]'));
    this.lnkLogout = element(by.linkText('Logout'));
    this.lblErrorIndicator = element(by.xpath('//span[@class="ErrorIndicator-message ErrorIndicator-message--error"]'));

    /** Login.
     * @param {String} emailId Email Id
     * @param {String} password Password
     */
    this.login = function (_browser, emailId, password) {
        try {
            this.txtEmailId.clear().sendKeys(emailId);
            this.txtPassword.clear().sendKeys(password);
            this.btnLogin.click();
            _browser.sleep(3000);

            this.lblErrorIndicator.isPresent().then(function (present) {
                if (present) {
                    element(by.xpath('//span[@class="ErrorIndicator-message ErrorIndicator-message--error"]')).getText().then(function (err) {
                        console.log("Validation error: " + err);
                        if (err.match('Incorrect')) {
                            signup_page.signup(_browser);
                            signup_page.enterSignupDetails(emailId, password);
                            _browser.sleep(5000);
                            signup_page.navigateToMyAccount();
                        }
                    });
                } else {
                    console.log('No errors');
                }
            });
        } catch (error) {
            console.error('Error while login: ' + error.message);
        }
    };

    /** Logout.
     * @param {String} emailId Email Id
     * @param {String} password Password
     */
    this.logout = function () {
        try {
            this.lblUsername.click();
            this.lnkLogout.click();
        } catch (error) {
            console.error('Error while login: ' + error.message);
        }
    };
};

module.exports = new LoginPage();
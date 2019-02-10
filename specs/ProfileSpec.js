var config = require('../app.config.json');
var data = require('../data/testData.json');
var util = require('../utilities/CommonUtils');
var profile_page = require('../pages/ProfilePage');
var login_page = require('../pages/LoginPage');

const URL = config.url;
const PASSWORD = config.defaultPassword;
var EMAILID = data.general.email;

describe('To verify persistence of the data on user profile page', function () {
    var runFlag = false;
    // browser setup
    browser.ignoreSynchronization = true;
    browser.manage().timeouts().pageLoadTimeout(10000);
    browser.manage().timeouts().implicitlyWait(7000);
    browser.manage().window().maximize();

    // If email contains <temp> then signup else use existing credentials
    // To use existing credentials, edit email in 'testData.json' and password in 'app.config.json'
    if (EMAILID.match('<temp>')) {
        EMAILID = EMAILID.replace('<temp>', util.getDateTimestamp());
        console.log('New user : ' + EMAILID + ' | ' + PASSWORD);
    }

    // Load url, login/signup before test execution
    beforeEach(function () {
        browser.get(URL);
        browser.getCurrentUrl().then(function (url) {
            try {
                // check for login in url
                if (url.match('login')) {
                    login_page.login(browser, EMAILID, PASSWORD);
                    // wait till user label is visible
                    var expectedCondition = protractor.ExpectedConditions;
                    browser.wait(expectedCondition.presenceOf(login_page.lnkMyAccount), 5000).then(function (isPresent) {
                        if (isPresent) {
                            runFlag = true;
                        }
                    });
                } else {
                    expect(true).toBe(false, 'Login Page was expected');
                }
            } catch (error) {
                console.error('My account not found: ' + error.message);
                expect(true).toBe(false, 'My account Page was expected');
            }
        });
    });

    //This test case will fill all the fields
    it('Profile creation : enter data in all the fields', function (done) {
        if (runFlag) {
            console.log('Profile creation started');
            runFlag = false;
            profile_page.selectLanguage(data.language);
            profile_page.enterFirstName(data.general.firstName);
            profile_page.enterLastName(data.general.lastName);
            profile_page.selectPhoneCoutryCode(data.general.phone.countryCode);
            profile_page.enterPhoneNumber(data.general.phone.number);
            profile_page.selectNationality(data.nationality);
            profile_page.enterDateOfBirth(data.birthDate);
            profile_page.enterAddressLine1(data.address.line1);
            profile_page.enterAddressLine2(data.address.line2);
            profile_page.enterZipCode(data.address.zipCode);
            profile_page.enterCity(data.address.city);
            profile_page.enterState(data.address.state);
            profile_page.selectAddressCountry(data.address.country);
            profile_page.enterJobTitle(data.employmentDetails.jobTitle);
            profile_page.enterCompanyName(data.employmentDetails.companyName);
            profile_page.clickOnSaveProfile();
            // check for any validation errors
            runFlag = profile_page.lblErrorIndicator.isPresent().then(function (flag) {
                if (flag) {
                    expect(flag).toBe(false, 'Validation error while profile creation');
                } else {
                    runFlag = true;
                }
            });
            done();
        } else {
            console.log('Profile creation test case skipped');
            done(error);
        }
    });

    // This test case will verify persistence of data. 
    // will match value with entered test data
    it('Profile verification : verify all the field values with test data', function (done) {
        if (runFlag) {
            console.log('Profile verfication started');
            util.verifyDropdownvalue(profile_page.drpLanguage, data.language, 'Language didn\'t match');
            expect(profile_page.getFirstName()).toBe(data.general.firstName, 'First name didn\'t match');
            expect(profile_page.getLastName()).toBe(data.general.lastName, 'Last name didn\'t match');
            expect(profile_page.getEmailId()).toBe(EMAILID, 'Email didn\'t match');
            util.verifyDropdownvalue(profile_page.drpPhoneCountryCode, data.general.phone.countryCode, 'Phone Country Code didn\'t match');
            expect(profile_page.getPhoneNumber()).toBe(data.general.phone.number, 'Phone number didn\'t match');
            util.verifyDropdownvalue(profile_page.drpNationality, data.nationality, 'Nationality didn\'t match');
            verifyDateOfBirth(data.birthDate);
            expect(profile_page.getAddressLine1()).toBe(data.address.line1, 'Address line 1 didn\'t match');
            expect(profile_page.getAddressLine2()).toBe(data.address.line2, 'Address line 2 didn\'t match');
            expect(profile_page.getZipCode()).toBe(data.address.zipCode, 'zipcode didn\'t match');
            expect(profile_page.getCity()).toBe(data.address.city, 'City didn\'t match');
            expect(profile_page.getState()).toBe(data.address.state, 'State didn\'t match');
            util.verifyDropdownvalue(profile_page.drpAddressCountry, data.address.country, 'Address Country Code didn\'t match');
            expect(profile_page.getJobTitle()).toBe(data.employmentDetails.jobTitle, 'Job title didn\'t match');
            expect(profile_page.getCompanyName()).toBe(data.employmentDetails.companyName, 'Company name didn\'t match');
            done();
        } else {
            console.log('Profile verification test case skipped');
            done(error);
        }
    });

    //Clean up
    afterEach(function () {
        console.log('Logout');
        login_page.logout();
    });
});

/**
 * This function will verify date of birth.
 * @param {String} expectedValue expected value
 */
function verifyDateOfBirth(expectedValue) {
    var splitDob = expectedValue.split('.');
    profile_page.txtBirthDay.getAttribute('value').then(function (text) {
        expect(text).toBe(splitDob[0], 'Birth Day didn\'t match');
    });
    profile_page.txtBirthMonth.getAttribute('value').then(function (text) {
        expect(text).toBe(splitDob[1], 'Birth Month didn\'t match');
    });
    profile_page.txtBirthYear.getAttribute('value').then(function (text) {
        expect(text).toBe(splitDob[2], 'Birth Year didn\'t match');
    });
}
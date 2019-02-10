'use strict'

var ProfilePage = function () {
    this.txtFirstName = element(by.id('firstName'));
    this.txtLastName = element(by.id('lastName'));
    this.txtEmailId = element(by.id('email'));
    this.txtBirthDay = element(by.xpath('//input[@class="DateTextInput-day"]'));
    this.txtBirthMonth = element(by.xpath('//input[@class="DateTextInput-month"]'));
    this.txtBirthYear = element(by.xpath('//input[@class="DateTextInput-year"]'));
    this.txtPhoneNumber = element(by.xpath('//div[@class="CustomPhoneNumberInput-phoneNumber-container Input"]/input'));
    this.txtAddressLine1 = element(by.id('addressLine1'));
    this.txtAddressLine2 = element(by.id('addressLine2'));
    this.txtZipCode = element(by.id('zipCode'));
    this.txtCity = element(by.id('city'));
    this.txtState = element(by.id('region'));
    this.btnSaveProfile = element(by.buttonText('Save profile'));
    this.txtJobTitle = element(by.id('jobTitle'));
    this.txtCompanyName = element(by.id('companyName'));
    this.lblErrorIndicator = element(by.xpath('//span[@class="ErrorIndicator-message ErrorIndicator-message--error"]'));
    this.drpNationality = element(by.css('[name="nationality"] optgroup option[selected]'));
    this.drpPhoneCountryCode = element(by.css('.CustomPhoneNumberInput-country-select option[selected]'));
    this.drpAddressCountry = element(by.css('[id="addressCountry"] optgroup option[selected]'));
    this.drpLanguage = element(by.css('[class="Select"] optgroup option[selected]'));

    /** Enter First Name.
     * @param {String} firstName First Name
     */
    this.enterFirstName = function (firstName) {
        this.txtFirstName.clear().sendKeys(firstName);
    };

    /** Get First Name.
     * @return {String} first name
    */
    this.getFirstName = function () {
        return this.txtFirstName.getAttribute('value');
    };

    /** Enter Last Name.
     * @param {String} last Name
     */
    this.enterLastName = function (lastName) {
        this.txtLastName.clear().sendKeys(lastName);
    };

    /** Get Last Name.
     * @return {String} last name
    */
    this.getLastName = function () {
        return this.txtLastName.getAttribute('value');
    };

    /** Enter Email.
     * @param {String} Email
     */
    this.enterEmailId = function (emailId) {
        this.txtEmailId.clear().sendKeys(emailId);
    };

    /** Get Email.
     * @return {String} email
    */
    this.getEmailId = function () {
        return this.txtEmailId.getAttribute('value');
    };

    /** Enter date of birth.
     * @param {String} dob Date of birth
     *  Format: DD.MM.YYYY
     */
    this.enterDateOfBirth = function (dob) {
        var arrDob = dob.split('.');
        this.txtBirthDay.clear().sendKeys(arrDob[0]);
        this.txtBirthMonth.clear().sendKeys(arrDob[1]);
        this.txtBirthYear.clear().sendKeys(arrDob[2]);
    };

    /** Enter Phone Number.
     * @param {String} phoneNo Phone number
     */
    this.enterPhoneNumber = function (phoneNo) {
        this.txtPhoneNumber.sendKeys(protractor.Key.chord(protractor.Key.CONTROL, "a"));
        this.txtPhoneNumber.sendKeys(protractor.Key.BACK_SPACE);
        this.txtPhoneNumber.sendKeys(phoneNo);
    };

    /** Get Phone Number.
     * @return {String} Phone number
     */
    this.getPhoneNumber = function () {
        return this.txtPhoneNumber.getAttribute('value');
    };

    /** Select from country code from dropdown.
     * @param {String} phoneCountryCode Phone country code
     */
    this.selectPhoneCoutryCode = function (phoneCountryCode) {
        element(by.cssContainingText('.CustomPhoneNumberInput-country-select option', phoneCountryCode)).click();
    };

    /** Select from Nationality from dropdown.
     * @param {String} nationality nationality
     */
    this.selectNationality = function (nationality) {
        element(by.cssContainingText('[name="nationality"] optgroup option', nationality)).click();
    };

    /** Select from address from dropdown.
     * @param {String} addressCountry address country  
     */
    this.selectAddressCountry = function (addressCountry) {
        element(by.cssContainingText('[id="addressCountry"] optgroup option', addressCountry)).click();
    };

    /** Select from language from dropdown.
     * @param {String} language language 
     */
    this.selectLanguage = function (language) {
        element(by.cssContainingText('[class="Select"] optgroup option', language)).click();
    };

    /** Enter address line 1.
     * @param {String} addressLine1 address line 1 
     */
    this.enterAddressLine1 = function (addressLine1) {
        this.txtAddressLine1.clear().sendKeys(addressLine1);
    };

    /** Get address line 1.
     * @return {String} address line 1 
     */
    this.getAddressLine1 = function () {
        return this.txtAddressLine1.getAttribute('value');
    };

    /** Enter address line 2.
     * @param {String} addressLine2 address line 2
     */
    this.enterAddressLine2 = function (addressLine2) {
        this.txtAddressLine2.clear().sendKeys(addressLine2);
    };

    /** Get address line 2.
     * @return {String} address line 2
     */
    this.getAddressLine2 = function () {
        return this.txtAddressLine2.getAttribute('value');
    };

    /** Enter zip code
     * @param {String} zipCode zip Code
     */
    this.enterZipCode = function (zipCode) {
        this.txtZipCode.clear().sendKeys(zipCode);
    };

    /** Get zip code.
     * @return {String} zip code
     */
    this.getZipCode = function () {
        return this.txtZipCode.getAttribute('value');
    };

    /** Enter City
     * @param {String} city City
     */
    this.enterCity = function (city) {
        this.txtCity.clear().sendKeys(city);
    };

    /** Get city.
     * @return {String} city
     */
    this.getCity = function () {
        return this.txtCity.getAttribute('value');
    };

    /** Enter State
     * @param {String} state state
     */
    this.enterState = function (state) {
        this.txtState.clear().sendKeys(state);
    };

    /** Get state.
     * @return {String} state
     */
    this.getState = function () {
        return this.txtState.getAttribute('value');
    };

    /** Click on Save Profile button.*/
    this.clickOnSaveProfile = function () {
        this.btnSaveProfile.click();
    };

    /** Enter Job Title.
     * @param {String} jobTitle Job Title
     */
    this.enterJobTitle = function (jobTitle) {
        this.txtJobTitle.clear().sendKeys(jobTitle);
    };

    /** Get Job Title.
     * @return {String} Job Title
     */
    this.getJobTitle = function () {
        return this.txtJobTitle.getAttribute('value');
    };

    /** Enter Company Name.
     * @param {String} companyName Company Name
     */
    this.enterCompanyName = function (companyName) {
        this.txtCompanyName.clear().sendKeys(companyName);
    };

    /** Get Company Name.
     * @return {String} Company Name
     */
    this.getCompanyName = function () {
        return this.txtCompanyName.getAttribute('value');
    };
};

module.exports = new ProfilePage();
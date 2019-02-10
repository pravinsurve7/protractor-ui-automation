'use strict'

var CommonUtils = function () {

    /** Get Date Timestamp.
     * @return {String} date time
     */
    this.getDateTimestamp = function () {
        var currentDate = new Date();
        var date = currentDate.getDate();
        var month = currentDate.getMonth();
        var year = currentDate.getFullYear();
        var timestamp = currentDate.getTime();
        return year + month + date + timestamp;
    };

    /**
    * This is common function to verify dropdown values.
    * @param {WebElement} _element element
    * @param {String} expectedValue expected value
     */
    this.verifyDropdownvalue = function (_element, expectedValue, message) {
        _element.getText().then(function (text) {
            expect(text).toBe(expectedValue, message);
        });
    }
};

module.exports = new CommonUtils();
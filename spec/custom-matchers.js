var $ = require('jquery');

module.exports = {
    toContainText: function () {
        'use strict';
        return {
            compare: function (actual, text) {
                var trimmedText = $.trim($(actual).text());

                if (text && $.isFunction(text.test)) {
                    return {pass: text.test(trimmedText)}
                } else {
                    return {pass: trimmedText.indexOf(text) !== -1}
                }
            }
        }
    },

    toExist: function () {
        'use strict';
        return {
            compare: function (actual) {
                var result = {};
                result.pass = actual.length > 0;
                return result;
            }
        }
    }
};

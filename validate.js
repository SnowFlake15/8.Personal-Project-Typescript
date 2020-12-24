"use strict";
exports.__esModule = true;
exports.Validate = void 0;
var Validate = /** @class */ (function () {
    function Validate() {
    }
    Validate.validateagain = function (data) {
        var dateformat = new RegExp(/^\d{2}[./-]\d{2}[./-]\d{4}$/);
        if (data.sex !== 'male' && data.sex !== 'femail') {
            throw new Error("parameter must be male or female (we are not transphobic)");
        }
        if (data.dateOfBirth && dateformat.test(data.dateOfBirth) === false) {
            throw new Error("not the rigth date format");
        }
    };
    return Validate;
}());
exports.Validate = Validate;

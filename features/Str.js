"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.isDigit = function (value) { return /^\d+$/.test(value); };
exports.isNumeric = function (value) { return /^[-+]?[0-9]+(\.[0-9]+)?$/.test(value); };
exports.isAlnum = function (value) { return /^[a-zA-Z\d]+$/.test(String(value)); };
exports.isAlpha = function (value) { return /^[a-zA-Z]+$/.test(String(value)); };
exports.isAlphaLower = function (value) { return /^[a-z]+$/.test(String(value)); };
exports.isAlphaUpper = function (value) { return /^[A-Z]+$/.test(String(value)); };
exports.isWordConfChars = function (value) { return /^\w+$/.test(String(value)); };
exports.isEmail = function (value) { return /^[-a-zA-Z0-9!#$%&'*+/=?^_`{|}~.]+@[a-zA-Z0-9]+([-.][a-zA-Z0-9]+){1,100}[a-zA-Z0-9]$/.test(value); };
exports.isEmailLike = function (value) { return typeof value === "string" && value.indexOf("@") !== -1; };
exports.isHttpURL = function (value) { return /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(value); };
exports.isImageFileName = function (value) { return /\.(gif|jpg|png)$/.test(value); };
exports.maxLength = function (value, length) { return String(value).length <= length; };
exports.minLength = function (value, length) { return length <= String(value).length; };
exports.isUUID = function (value) { return /[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/.test(value); };
exports.escapeRegExp = function (str) { return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"); };
function uuid() {
    var result = "";
    for (var i = 0; i < 32; i++) {
        var random = Math.floor(Math.random() * 16);
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            result += "-";
        }
        result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return result;
}
exports.uuid = uuid;
function countBytes(str) {
    var byteLen = 0;
    for (var i = 0; i < str.length; i++) {
        var c = str.charCodeAt(i);
        byteLen +=
            c < (1 << 7) ? 1 :
                c < (1 << 11) ? 2 :
                    c < (1 << 16) ? 3 :
                        c < (1 << 21) ? 4 :
                            c < (1 << 26) ? 5 :
                                c < (1 << 31) ? 6 :
                                    Number.NaN;
    }
    return byteLen;
}
exports.countBytes = countBytes;

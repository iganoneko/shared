"use strict";
/**
 * String useful features
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Is the string digit character
 * @param value string value
 */
exports.isDigit = function (value) { return /^\d+$/.test(value); };
/**
 * Is the string numeric
 * @param value
 */
exports.isNumeric = function (value) { return /^[-+]?[0-9]+(\.[0-9]+)?$/.test(value); };
/**
 * Is the string alphanumeric
 * @param value
 */
exports.isAlnum = function (value) { return /^[a-zA-Z\d]+$/.test(String(value)); };
/**
 * Is the string a letter
 * @param value
 */
exports.isAlpha = function (value) { return /^[a-zA-Z]+$/.test(String(value)); };
/**
 * Is the string lowercase
 * @param value
 */
exports.isAlphaLower = function (value) { return /^[a-z]+$/.test(String(value)); };
/**
 * Is the string uppercase
 * @param value
 */
exports.isAlphaUpper = function (value) { return /^[A-Z]+$/.test(String(value)); };
/**
 * The character string is an email address
 * @param value
 */
exports.isEmail = function (value) { return /^[-a-zA-Z0-9!#$%&'*+/=?^_`{|}~.]+@[a-zA-Z0-9]+([-.][a-zA-Z0-9]+){1,100}[a-zA-Z0-9]$/.test(value); };
/**
 * A character string close to the email address
 * @param value
 */
exports.isEmailLike = function (value) { return typeof value === "string" && value.indexOf("@") !== -1; };
/**
 * The string is an HTTP URL
 * @param value
 */
exports.isHttpURL = function (value) { return /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(value); };
/**
 * String is internet image file name
 * @param value
 */
exports.isImageFileName = function (value) { return /\.(gif|jpg|png)$/.test(value); };
/**
 * Is the domain of the URL
 * @param value
 */
exports.isURLDomain = function (value) { return /^[a-zA-Z0-9][a-zA-Z0-9-]{1,61}[a-zA-Z0-9]\.[a-zA-Z]{2,}$/.test(value); };
/**
 * IP Address
 * @param value
 */
exports.isIPAddress = function (value) { return /^(([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([1-9]?[0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])(\/[1-9]|\/(1|2)[0-9]|\/3[0-2])?$/.test(value); };
/**
 * The string is a UUID
 * @param value
 * @param length
 */
exports.isUUID = function (value) { return /[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/.test(value); };
/**
 * Escape regexp pattern string
 * @param str
 */
exports.escapeRegExp = function (str) { return str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1"); };
/**
 * generate uuid
 */
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
/**
 * Count bytes
 * @param str
 */
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

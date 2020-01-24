"use strict";
/**
 * Type conversion module
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
var Type_1 = require("./Type");
/**
 * Converts to an integer
 * @param value Value
 * @param altValue Alternative value to be returned when conversion fails
 */
function inte(value, altValue) {
    if (altValue === void 0) { altValue = 0; }
    if (Type_1.isArray(value)) {
        return altValue;
    }
    value = parseInt(value, 10);
    if ("" + value === "NaN") {
        return altValue;
    }
    return value;
}
exports.inte = inte;
/**
 * Converts to a string
 * @param value Value
 * @param altValue Alternative value to be returned when conversion fails
 */
function str(value, altValue) {
    if (Type_1.isUndefined(altValue)) {
        altValue = null;
    }
    if (!Type_1.isNull(altValue) && !Type_1.isString(altValue)) {
        altValue = "" + altValue;
    }
    if (Type_1.isUndefined(value) || Type_1.isNull(value)) {
        return altValue;
    }
    return String(value);
}
exports.str = str;
/**
 * Convert to a number
 * @param value Value
 * @param altValue Alternative value to be returned when conversion fails
 */
function num(value, altValue) {
    if (altValue === void 0) { altValue = 0.0; }
    if (Type_1.isNull(value) || Type_1.isUndefined(value) || Type_1.isDate(value)) {
        return altValue;
    }
    value = Number(value);
    var strValue = "" + value;
    if (strValue === "NaN" || strValue === "Infinity") {
        return altValue;
    }
    return value;
}
exports.num = num;
/**
 * Convert to boolean
 * @param value Value
 * @param altValue Alternative value to be returned when conversion fails
 */
function bool(value, altValue) {
    if (!Type_1.isBoolean(altValue)) {
        altValue = false;
    }
    if (value === true || value === "true" || value === 1) {
        return true;
    }
    if (value === false || value === "false" || value === 0) {
        return false;
    }
    return altValue;
}
exports.bool = bool;
/**
 * Convert to object
 * @param value Value
 * @param altValue Alternative value to be returned when conversion fails
 */
function obj(value, altValue) {
    if (altValue === void 0) { altValue = null; }
    var strValue = "" + value;
    if (Type_1.isNull(value) ||
        Type_1.isUndefined(value) ||
        strValue === "NaN" ||
        strValue === "Infinity") {
        return altValue;
    }
    if (Type_1.isObject(value) || Type_1.isArray(value)) {
        return value;
    }
    else if (Type_1.isString(value)) {
        if (!isJsonStr(value)) {
            return altValue;
        }
        try {
            return JSON.parse(value);
        }
        catch (e) {
            return altValue;
        }
    }
    else {
        throw new TypeError();
    }
}
exports.obj = obj;
/**
 * @private
 */
function isJsonStr(str) {
    var trimedStr = str.trim(), beginCh = trimedStr.charAt(0), endCh = trimedStr.charAt(trimedStr.length - 1);
    if (beginCh === "{" && endCh === "}") {
        return true;
    }
    if (beginCh === "[" && endCh === "]") {
        return true;
    }
    return false;
}

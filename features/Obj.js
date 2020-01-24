"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Object useful features
 * @packageDocumentation
 */
var Type_1 = require("./Type");
/**
 * Clone Object
 * @param value Object
 */
function clone(value) {
    return JSON.parse(JSON.stringify(value));
}
exports.clone = clone;
/**
 * Clone deep
 * @param data
 */
function cloneDeep(data) {
    if (Type_1.isArray(data)) {
        return data.map(cloneDeep);
    }
    if (Type_1.isDate(data)) {
        return new Date(data.getTime());
    }
    if (Type_1.isObject(data) || Type_1.isPlainObject(data)) {
        var result_1 = {};
        Object.keys(data).forEach(function (key) {
            result_1[key] = cloneDeep(data[key]);
        });
        return result_1;
    }
    if (Type_1.isNull(data) || Type_1.isUndefined(data) || Type_1.isString(data) || Type_1.isNumber(data) || Type_1.isBoolean(data)) {
        return data;
    }
    if (Type_1.isFunction(data)) {
        // TODO
        return data;
    }
    if (Type_1.isRegExp(data)) {
        return new RegExp(data.source, data.flags);
    }
    return data;
}
exports.cloneDeep = cloneDeep;
/**
 * Delete keys without values to make them compact
 * @param object Object
 */
function compact(object) {
    if (object) {
        var key = void 0;
        for (key in object) {
            if (!validValue(object[key])) {
                delete object[key];
            }
        }
    }
    return object;
}
exports.compact = compact;
/**
 * Sort by keys
 * @param json JSON Object
 * @param reverse Reverse
 */
function sortByKeys(json, reverse) {
    if (reverse === void 0) { reverse = false; }
    if (Type_1.isArray(json)) {
        json = json.map(function (value) {
            if (Type_1.isObject(value)) {
                return sortByKeys(value);
            }
            else {
                return value;
            }
        });
        return json;
    }
    else {
        var result_2 = {};
        var sortedKeys = Object.keys(json).sort();
        if (reverse) {
            sortedKeys = sortedKeys.reverse();
        }
        sortedKeys.forEach(function (key) {
            var value = json[key];
            if (Type_1.isString(value)) {
                result_2[key] = sortByKeys(value);
            }
            else {
                result_2[key] = value;
            }
        });
        return result_2;
    }
}
exports.sortByKeys = sortByKeys;
function validValue(val) {
    if (Type_1.isBoolean(val)) {
        return true;
    }
    if (Type_1.isNumber(val)) {
        return !isNaN(val);
    }
    return !!val;
}

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Object useful features
 * @packageDocumentation
 */
var Type_1 = require("./Type");
var isObject_ = function (data) { return Type_1.isObject(data) || Type_1.isPlainObject(data); };
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
 * @param src
 */
function cloneDeep(src) {
    if (Type_1.isArray(src)) {
        return src.map(cloneDeep);
    }
    if (Type_1.isDate(src)) {
        return new Date(src.getTime());
    }
    if (Type_1.isNull(src) || Type_1.isUndefined(src) || Type_1.isString(src) || Type_1.isNumber(src) || Type_1.isBoolean(src)) {
        return src;
    }
    if (Type_1.isFunction(src)) {
        // TODO
        return src;
    }
    if (Type_1.isRegExp(src)) {
        return new RegExp(src.source, src.flags);
    }
    if (isObject_(src)) {
        var dest_1 = {};
        Object.keys(src).forEach(function (key) { return dest_1[key] = cloneDeep(src[key]); });
        return dest_1;
    }
    return src;
}
exports.cloneDeep = cloneDeep;
/**
 * Delete keys without values to make them compact
 * @param object Object
 */
function compact(object) {
    if (object) {
        for (var key in object) {
            var val = object[key];
            if (Type_1.isNull(val) || Type_1.isUndefined(val) || val === "") {
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
        var result_1 = {};
        var sortedKeys = Object.keys(json).sort();
        if (reverse) {
            sortedKeys = sortedKeys.reverse();
        }
        sortedKeys.forEach(function (key) {
            var value = json[key];
            if (Type_1.isObject(value)) {
                result_1[key] = sortByKeys(value);
            }
            else {
                result_1[key] = value;
            }
        });
        return result_1;
    }
}
exports.sortByKeys = sortByKeys;

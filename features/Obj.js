"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Type_1 = require("./Type");
function clone(value) {
    return JSON.parse(JSON.stringify(value));
}
exports.clone = clone;
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
            if (Type_1.isString(value)) {
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
function validValue(val) {
    if (Type_1.isBoolean(val)) {
        return true;
    }
    if (Type_1.isNumber(val)) {
        return !isNaN(val);
    }
    return !!val;
}

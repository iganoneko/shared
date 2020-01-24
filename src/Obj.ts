/**
 * Object useful features
 * @packageDocumentation
 */
import { isFunction, isObject, isNull, isUndefined, isPlainObject, isArray, isString, isNumber, isDate, isBoolean, isRegExp } from "./Type";

const isObject_ = data => isObject(data) || isPlainObject(data);
const toString_ = Object.prototype.toString;

/**
 * Clone Object 
 * @param value Object
 */
export function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

/**
 * Clone deep
 * @param src 
 */
export function cloneDeep(src) {
    if (isArray(src)) {
        return src.map(cloneDeep);
    }
    if (isDate(src)) {
        return new Date(src.getTime());
    }
    if (isNull(src) || isUndefined(src) || isString(src) || isNumber(src) || isBoolean(src)) {
        return src;
    }
    if (isFunction(src)) {
        // TODO
        return src;
    }
    if (isRegExp(src)) {
        return new RegExp(src.source, src.flags);
    }
    if (isObject_(src)) {
        const dest = {};
        Object.keys(src).forEach((key) => dest[key] = cloneDeep(src[key]));
        return dest;
    }
    return src;
}

/**
 * Delete keys without values to make them compact
 * @param object Object
 */
export function compact(object: any) {
    if (object) {
        let key;
        for (key in object) {
            if (!validValue(object[key])) {
                delete object[key];
            }
        }
    }
    return object;
}

/**
 * Sort by keys
 * @param json JSON Object
 * @param reverse Reverse
 */
export function sortByKeys(json: any, reverse: boolean = false) {
    if (isArray(json)) {
        json = json.map((value) => {
            if (isObject(value)) {
                return sortByKeys(value);
            } else {
                return value;
            }
        });
        return json;
    } else {
        const result = {};
        let sortedKeys = Object.keys(json).sort();
        if (reverse) {
            sortedKeys = sortedKeys.reverse();
        }
        sortedKeys.forEach((key) => {
            const value = json[key];
            if (isObject(value)) {
                result[key] = sortByKeys(value);
            } else {
                result[key] = value;
            }
        });
        return result;
    }
}

function validValue(val: any) {
    if (isBoolean(val)) {
        return true;
    }
    if (isNumber(val)) {
        return !isNaN(val);
    }
    return !!val;
}

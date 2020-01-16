import { isObject, isArray, isString, isNumber, isBoolean } from "./Type";

export function clone(value) {
    return JSON.parse(JSON.stringify(value));
}

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
            if (isString(value)) {
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

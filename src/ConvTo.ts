/**
 * Type conversion module
 * @packageDocumentation
 */

import { isArray, isBoolean, isDate, isNull, isObject, isString, isUndefined } from "./Type";

/**
 * Converts to an integer
 * @param value Value
 * @param altValue Alternative value to be returned when conversion fails
 */
export function inte(value: any, altValue: number = 0): number {
    if (isArray(value)) {
        return altValue;
    }
    value = parseInt(value, 10);
    if ("" + value === "NaN") {
        return altValue;
    }
    return value;
}

/**
 * Converts to a string
 * @param value Value
 * @param altValue Alternative value to be returned when conversion fails
 */
export function str(value: any, altValue?: string): string {
    if (isUndefined(altValue)) {
        altValue = null;
    }
    if (!isNull(altValue) && !isString(altValue)) {
        altValue = "" + altValue;
    }
    if (isUndefined(value) || isNull(value)) {
        return altValue;
    }
    return String(value);
}

/**
 * Convert to a number
 * @param value Value
 * @param altValue Alternative value to be returned when conversion fails
 */
export function num(value: any, altValue: number = 0.0): number {
    if (isNull(value) || isUndefined(value) || isDate(value)) {
        return altValue;
    }
    value = Number(value);
    let strValue: string = "" + value;
    if (strValue === "NaN" || strValue === "Infinity") {
        return altValue;
    }
    return value;
}

/**
 * Convert to boolean
 * @param value Value
 * @param altValue Alternative value to be returned when conversion fails
 */
export function bool(value: any, altValue?: boolean): boolean {
    if (!isBoolean(altValue)) {
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

/**
 * Convert to object
 * @param value Value
 * @param altValue Alternative value to be returned when conversion fails
 */
export function obj(value: any, altValue: Object = null): Object {
    let strValue: string = "" + value;
    if (isNull(value) ||
        isUndefined(value) ||
        strValue === "NaN" ||
        strValue === "Infinity") {
        return altValue;
    }

    if (isObject(value) || isArray(value)) {
        return value;
    } else if (isString(value)) {
        if (!isJsonStr(value)) {
            return altValue;
        }
        try {
            return JSON.parse(value);
        } catch (e) {
            return altValue;
        }
    } else {
        throw new TypeError();
    }
}

/**
 * @private
 */
function isJsonStr(str: string): boolean {
    let trimedStr: string = str.trim(),
        beginCh: string = trimedStr.charAt(0),
        endCh: string = trimedStr.charAt(trimedStr.length - 1);
    if (beginCh === "{" && endCh === "}") {
        return true;
    }
    if (beginCh === "[" && endCh === "]") {
        return true;
    }
    return false;
}

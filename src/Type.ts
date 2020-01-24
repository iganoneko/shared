/**
 * Determine the type
 * @packageDocumentation
 */

const toString = Object.prototype.toString;

/**
 * is function
 * @param value 
 */
export const isFunction = (value) => toString.call(value) === "[object Function]";

/**
 * is Array
 * @param value 
 */
export const isArray = (value) => toString.call(value) === "[object Array]";

/**
 * is Number
 * @param value 
 */
export const isNumber = (value) => toString.call(value) === "[object Number]";

/**
 * is Object
 * @param value 
 */
export const isObject = (value) => toString.call(value) === "[object Object]";

/**
 * is String
 * @param value 
 */
export const isString = (value) => toString.call(value) === "[object String]";

/**
 * is Date
 * @param value 
 */
export const isDate = (value) => toString.call(value) === "[object Date]";

/**
 * is Boolean
 * @param value 
 */
export const isBoolean = (value) => toString.call(value) === "[object Boolean]";

/**
 * is RegExp
 * @param value 
 */
export const isRegExp = (value) => toString.call(value) === "[object RegExp]";

/**
 * is null
 * @param value 
 */
export const isNull = (value) => toString.call(value) === "[object Null]";

/**
 * is undefined
 * @param value 
 */
export const isUndefined = (value) => toString.call(value) === "[object Undefined]";

/**
 * is Plain Object
 * @param value 
 */
export const isPlainObject = (value) => isObject(value) && value.constructor === Object;

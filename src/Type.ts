/**
 * Determine the type
 * @packageDocumentation
 */

//
const toString = Object.prototype.toString;

/**
 * Is the variable a function
 * @param value 
 */
export const isFunction = (value) => toString.call(value) === "[object Function]";

/**
 * Is the variable a Array
 * @param value 
 */
export const isArray = (value) => toString.call(value) === "[object Array]";

/**
 * Is the variable a Number
 * @param value 
 */
export const isNumber = (value) => toString.call(value) === "[object Number]";

/**
 * Is the variable a Object
 * @param value 
 */
export const isObject = (value) => toString.call(value) === "[object Object]";

/**
 * Is the variable a String
 * @param value 
 */
export const isString = (value) => toString.call(value) === "[object String]";

/**
 * Is the variable a Date
 * @param value 
 */
export const isDate = (value) => toString.call(value) === "[object Date]";

/**
 * Is the variable a Boolean
 * @param value 
 */
export const isBoolean = (value) => toString.call(value) === "[object Boolean]";

/**
 * Is the variable a Null
 * @param value 
 */
export const isNull = (value) => toString.call(value) === "[object Null]";

/**
 * Is the variable a undefined
 * @param value 
 */
export const isUndefined = (value) => toString.call(value) === "[object Undefined]";

/**
 * Is the variable a Plain Object
 * @param value 
 */
export const isPlainObject = (value) => isObject(value) && value.constructor === Object;

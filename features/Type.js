"use strict";
/**
 * Determine the type
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
var toString = Object.prototype.toString;
/**
 * is function
 * @param value
 */
exports.isFunction = function (value) { return toString.call(value) === "[object Function]"; };
/**
 * is Array
 * @param value
 */
exports.isArray = function (value) { return toString.call(value) === "[object Array]"; };
/**
 * is Number
 * @param value
 */
exports.isNumber = function (value) { return toString.call(value) === "[object Number]"; };
/**
 * is Object
 * @param value
 */
exports.isObject = function (value) { return toString.call(value) === "[object Object]"; };
/**
 * is String
 * @param value
 */
exports.isString = function (value) { return toString.call(value) === "[object String]"; };
/**
 * is Date
 * @param value
 */
exports.isDate = function (value) { return toString.call(value) === "[object Date]"; };
/**
 * is Boolean
 * @param value
 */
exports.isBoolean = function (value) { return toString.call(value) === "[object Boolean]"; };
/**
 * is RegExp
 * @param value
 */
exports.isRegExp = function (value) { return toString.call(value) === "[object RegExp]"; };
/**
 * is null
 * @param value
 */
exports.isNull = function (value) { return toString.call(value) === "[object Null]"; };
/**
 * is undefined
 * @param value
 */
exports.isUndefined = function (value) { return toString.call(value) === "[object Undefined]"; };
/**
 * is Plain Object
 * @param value
 */
exports.isPlainObject = function (value) { return exports.isObject(value) && value.constructor === Object; };

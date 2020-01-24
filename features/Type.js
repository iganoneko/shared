"use strict";
/**
 * Determine the type
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
//
var toString = Object.prototype.toString;
/**
 * Is the variable a function
 * @param value
 */
exports.isFunction = function (value) { return toString.call(value) === "[object Function]"; };
/**
 * Is the variable a Array
 * @param value
 */
exports.isArray = function (value) { return toString.call(value) === "[object Array]"; };
/**
 * Is the variable a Number
 * @param value
 */
exports.isNumber = function (value) { return toString.call(value) === "[object Number]"; };
/**
 * Is the variable a Object
 * @param value
 */
exports.isObject = function (value) { return toString.call(value) === "[object Object]"; };
/**
 * Is the variable a String
 * @param value
 */
exports.isString = function (value) { return toString.call(value) === "[object String]"; };
/**
 * Is the variable a Date
 * @param value
 */
exports.isDate = function (value) { return toString.call(value) === "[object Date]"; };
/**
 * Is the variable a Boolean
 * @param value
 */
exports.isBoolean = function (value) { return toString.call(value) === "[object Boolean]"; };
/**
 * Is the variable a RegExp
 * @param value
 */
exports.isRegExp = function (value) { return toString.call(value) === "[object RegExp]"; };
/**
 * Is the variable a Null
 * @param value
 */
exports.isNull = function (value) { return toString.call(value) === "[object Null]"; };
/**
 * Is the variable a undefined
 * @param value
 */
exports.isUndefined = function (value) { return toString.call(value) === "[object Undefined]"; };
/**
 * Is the variable a Plain Object
 * @param value
 */
exports.isPlainObject = function (value) { return exports.isObject(value) && value.constructor === Object; };

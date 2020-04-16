"use strict";
/**
 * URL utilities
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * URL encode
 * @param value
 */
function urlEnc(value) {
    return encodeURIComponent(value).replace(/%20(?!\d)/g, "+");
}
exports.urlEnc = urlEnc;
/**
 * URL decode
 * @param value
 */
function urlDec(value) {
    return decodeURIComponent(value.replace(/\+/g, "%20"));
}
exports.urlDec = urlDec;

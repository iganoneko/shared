"use strict";
/**
 * Object useful features
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * URLエンコードする
 * @param value
 */
function urlEnc(value) {
    return encodeURIComponent(value).replace(/%20(?!\d)/g, "+");
}
exports.urlEnc = urlEnc;
/**
 * URLデコードする
 * @param value
 */
function urlDec(value) {
    return decodeURIComponent(value.replace(/\+/g, "%20"));
}
exports.urlDec = urlDec;

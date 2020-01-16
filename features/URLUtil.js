"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function urlEnc(value) {
    return encodeURIComponent(value).replace(/%20(?!\d)/g, "+");
}
exports.urlEnc = urlEnc;
function urlDec(value) {
    return decodeURIComponent(value.replace(/\+/g, "%20"));
}
exports.urlDec = urlDec;

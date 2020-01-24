"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Detect web browser
 * @param userAgent userAgent.  defaults = navigator.userAgent
 */
function detect(userAgent) {
    if (userAgent === void 0) { userAgent = navigator.userAgent; }
    userAgent = userAgent.toLowerCase();
    var isFF = userAgent.indexOf("firefox") > -1;
    var isIE9 = userAgent.indexOf("msie 9.0") > -1;
    var isIE10 = userAgent.indexOf("msie 10.0") > -1;
    var isIE11 = userAgent.indexOf("trident") > -1 && !!userAgent.match(/rv\:11/);
    var isEdge = !!userAgent.match(/edge?\/\d+/) && userAgent.indexOf("windows") > -1;
    var isIE = userAgent.indexOf("msie") > -1 || isIE11;
    var isChrome = !isEdge && (userAgent.indexOf("chrome") > -1 || userAgent.indexOf("crios") > -1);
    var isSafari = userAgent.indexOf("safari") > -1 && !isChrome && !isEdge;
    var isOpera = userAgent.indexOf("opera") > -1;
    var isWindows = userAgent.indexOf("windows") > -1;
    var isAndroid = userAgent.indexOf("android") > -1 && !isWindows;
    var iPad = /\bipad;/i.test(userAgent);
    var iPhone = /\biphone;/i.test(userAgent);
    var iPod = /\bipod;/i.test(userAgent);
    var isSafari10 = false;
    var isSafari11 = false;
    var safariVersion;
    if (isSafari) {
        var mat = /version\/(\d+)/.exec(userAgent);
        if (mat) {
            safariVersion = parseInt(mat[1], 10);
            isSafari11 = safariVersion >= 11;
            isSafari10 = safariVersion < 11;
        }
    }
    var iOS = iPod || iPhone || iPad;
    var isTablet = iPad;
    var isSP = (iOS || isAndroid) && !isWindows && !isTablet;
    var isPC = !isSP && !isTablet;
    return {
        isFF: isFF,
        isIE: isIE,
        isIE9: isIE9,
        isIE10: isIE10,
        isIE11: isIE11,
        isEdge: isEdge,
        isWindows: isWindows,
        isChrome: isChrome,
        isSafari: isSafari,
        isSafari10: isSafari10,
        isSafari11: isSafari11,
        isOpera: isOpera,
        isSP: isSP,
        isPC: isPC,
        isTablet: isTablet,
        isAndroid: isAndroid,
        iOS: iOS,
        iPad: iPad,
        iPhone: iPhone,
        iPod: iPod,
        safariVersion: safariVersion
    };
}
exports.detect = detect;

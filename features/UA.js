"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * userAgent analysis
 * @param userAgent userAgent.  defaults = navigator.userAgent
 */
function parse(userAgent) {
    if (userAgent === void 0) { userAgent = navigator.userAgent; }
    // Browser
    var isIE9 = /\bMSIE 9(\.\d+)/.test(userAgent);
    var isIE10 = /\bMSIE 10(\.\d+)/.test(userAgent);
    var isIE11 = /\bTrident\//.test(userAgent) && /rv:11/.test(userAgent);
    var isIE = /\bMSIE/.test(userAgent) || isIE11;
    var isEdgeHTML = /\bEdge\//.test(userAgent) && /Windows/.test(userAgent);
    var isEdgA = /\bEdgA\//.test(userAgent);
    var isEdgiOS = /\bEdgiOS\//.test(userAgent);
    var isEdgPC = /\bEdg\//.test(userAgent);
    var isEdgeCh = isEdgA || isEdgiOS || isEdgPC;
    var isEdge = isEdgeHTML || isEdgeCh;
    var isFFiOS = /\bFxiOS\//.test(userAgent);
    var isFF = /\bFirefox/.test(userAgent) || isFFiOS;
    var isOperaTouch = /\bOPT\//.test(userAgent);
    var isOpera = /\bOpera|\bOPR\//.test(userAgent) || isOperaTouch;
    var isChromeiOS = /CriOS/.test(userAgent);
    var isChrome = !isOpera && !isEdge && /Chrome\//.test(userAgent) || isChromeiOS;
    var isSafari = /\bSafari/.test(userAgent) && !isChrome && !isEdge && !isEdgeCh && !isOpera;
    // OS
    var isWindows = /Windows/.test(userAgent);
    var isAndroid = /\bAndroid/.test(userAgent) || isEdgA;
    var iPad = /\biPad;/.test(userAgent);
    var iPhone = /\biPhone;/.test(userAgent);
    var iPod = /\biPod;/.test(userAgent);
    var iOS = iPod || iPhone || iPad || isChromeiOS || isEdgiOS || isFFiOS;
    // Safari Version
    var isSafari10 = false;
    var isSafari11 = false;
    var safariVersion;
    if (isSafari) {
        var mat = /version\/(\d+)/i.exec(userAgent);
        if (mat) {
            safariVersion = parseInt(mat[1], 10);
            isSafari11 = safariVersion >= 11;
            isSafari10 = safariVersion < 11;
        }
    }
    // Chrome Version
    var chVersion;
    if (isChrome) {
        var mat = /Chrome\/(\d+)/i.exec(userAgent);
        if (mat) {
            chVersion = parseInt(mat[1], 10);
        }
    }
    // Firefox Version
    var ffVersion;
    if (isFF) {
        var mat = /Firefox\/(\d+)/i.exec(userAgent);
        if (mat) {
            ffVersion = parseInt(mat[1], 10);
        }
    }
    // Firefox Version
    var edgVersion;
    if (isEdgeCh) {
        var mat = /Edg(A|iOS)?\/(\d+)/i.exec(userAgent);
        if (mat) {
            edgVersion = parseInt(mat[1], 10);
        }
    }
    // Device Type
    var isTablet = iPad;
    var isSP = (iOS || isAndroid) && !isWindows && !isTablet;
    var isPC = !isSP && !isTablet;
    var isMobile = isSP || isTablet;
    return {
        isFF: isFF,
        isIE: isIE,
        isIE9: isIE9,
        isIE10: isIE10,
        isIE11: isIE11,
        isEdge: isEdge,
        isEdgeHTML: isEdgeHTML,
        isEdgeCh: isEdgeCh,
        isWindows: isWindows,
        isChrome: isChrome,
        isSafari: isSafari,
        isSafari10: isSafari10,
        isSafari11: isSafari11,
        isOpera: isOpera,
        isSP: isSP,
        isPC: isPC,
        isMobile: isMobile,
        isTablet: isTablet,
        isAndroid: isAndroid,
        iOS: iOS,
        iPad: iPad,
        iPhone: iPhone,
        iPod: iPod,
        safariVersion: safariVersion,
        chVersion: chVersion,
        ffVersion: ffVersion,
        edgVersion: edgVersion
    };
}
exports.parse = parse;

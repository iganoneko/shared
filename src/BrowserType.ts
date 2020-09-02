/**
 * Browser Information
 */
export interface IBrowserInfo {
    /** Web browser is FireFox */
    isFF: boolean;
    /** Web browser is Internet Explorer */
    isIE: boolean;
    /** Web browser is Internet Explorer 9 */
    isIE9: boolean;
    /** Web browser is Internet Explorer 10 */
    isIE10: boolean;
    /** Web browser is Internet Explorer 11 */
    isIE11: boolean;
    /** Web browser is Microsoft Edge */
    isEdge: boolean;
    /** Web browser is Microsoft Edge (Chromium) */
    isEdgeHTML: boolean;
    /** Web browser is Microsoft Edge (EdgeHTML) */
    isEdgeCh: boolean;
    /** Web browser is Google Chrome */
    isChrome: boolean;
    /** Web browser is Safari */
    isSafari: boolean;
    /** Web browser is Safari 10 */
    isSafari10: boolean;
    /** Web browser is Safari 11 〜 */
    isSafari11: boolean;
    /** Web browser is Windows OS */
    isWindows: boolean;
    /** Web browser is Opera */
    isOpera: boolean;
    /** Web browser is Smart Phone */
    isSP: boolean;
    /** Web browser is Personal Computer */
    isPC: boolean;
    /** Web browser is Tablet Computer */
    isTablet: boolean;
    /** Web browser is Mobile Computer */
    isMobile: boolean;
    /** Web browser is Android OS */
    isAndroid: boolean;
    /** Web browser is iOS */
    iOS: boolean;
    /** Web browser is iPad */
    iPad: boolean;
    /** Web browser is iPhone */
    iPhone: boolean;
    /** Web browser is iPod */
    iPod: boolean;
    /** Safari version number */
    safariVersion: number;
    /** Chrome version number */
    chVersion: number;
    /** Firebox version number */
    ffVersion: number;
    /** Edge version number */
    edgVersion: number;
}

/**
 * Detect web browser
 * @param userAgent userAgent.  defaults = navigator.userAgent
 */
export function detect(userAgent = navigator.userAgent): IBrowserInfo {
    // Browser
    const isIE9 = /\bMSIE 9(\.\d+)/.test(userAgent);
    const isIE10 = /\bMSIE 10(\.\d+)/.test(userAgent);
    const isIE11 = /\bTrident\//.test(userAgent) && /rv:11/.test(userAgent);
    const isIE = /\bMSIE/.test(userAgent) || isIE11;
    const isEdgeHTML = /\bEdge\//.test(userAgent) && /Windows/.test(userAgent);
    const isEdgA = /\bEdgA\//.test(userAgent);
    const isEdgiOS = /\bEdgiOS\//.test(userAgent);
    const isEdgPC = /\bEdg\//.test(userAgent);
    const isEdgeCh = isEdgA || isEdgiOS || isEdgPC;
    const isEdge = isEdgeHTML || isEdgeCh;
    const isFFiOS = /\bFxiOS\//.test(userAgent);
    const isFF = /\bFirefox/.test(userAgent) || isFFiOS;
    const isOperaTouch = /\bOPT\//.test(userAgent);
    const isOpera = /\bOpera|\bOPR\//.test(userAgent) || isOperaTouch;
    const isChromeiOS = /CriOS/.test(userAgent);
    const isChrome = !isOpera && !isEdge && /Chrome\//.test(userAgent) || isChromeiOS;
    const isSafari = /\bSafari/.test(userAgent) && !isChrome && !isEdge && !isEdgeCh && !isOpera;
    // OS
    const isWindows = /Windows/.test(userAgent);
    const isAndroid = /\bAndroid/.test(userAgent) || isEdgA;
    const iPad = /\biPad;/.test(userAgent);
    const iPhone = /\biPhone;/.test(userAgent);
    const iPod = /\biPod;/.test(userAgent);
    const iOS = iPod || iPhone || iPad || isChromeiOS || isEdgiOS || isFFiOS;
    // Safari Version
    let isSafari10 = false;
    let isSafari11 = false;
    let safariVersion: number;
    if (isSafari) {
        const mat = /version\/(\d+)/i.exec(userAgent);
        if (mat) {
            safariVersion = parseInt(mat[1], 10);
            isSafari11 = safariVersion >= 11;
            isSafari10 = safariVersion < 11;
        }
    }
    // Chrome Version
    let chVersion: number;
    if (isChrome) {
        const mat = /Chrome\/(\d+)/i.exec(userAgent);
        if (mat) {
            chVersion = parseInt(mat[1], 10);
        }
    }
    // Firefox Version
    let ffVersion: number;
    if (isFF) {
        const mat = /Firefox\/(\d+)/i.exec(userAgent);
        if (mat) {
            ffVersion = parseInt(mat[1], 10);
        }
    }
    // Firefox Version
    let edgVersion: number;
    if (isEdgeCh) {
        const mat = /Edg(A|iOS)?\/(\d+)/i.exec(userAgent);
        if (mat) {
            edgVersion = parseInt(mat[1], 10);
        }
    }
    // Device Type
    const isTablet = iPad;
    const isSP = (iOS || isAndroid) && !isWindows && !isTablet;
    const isPC = !isSP && !isTablet;
    const isMobile = isSP || isTablet;
    return {
        isFF,
        isIE,
        isIE9,
        isIE10,
        isIE11,
        isEdge,
        isEdgeHTML,
        isEdgeCh,
        isWindows,
        isChrome,
        isSafari,
        isSafari10,
        isSafari11,
        isOpera,
        isSP,
        isPC,
        isMobile,
        isTablet,
        isAndroid,
        iOS,
        iPad,
        iPhone,
        iPod,
        safariVersion,
        chVersion,
        ffVersion,
        edgVersion
    };
}

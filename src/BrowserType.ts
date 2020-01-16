export interface IBrowserInfo {
    isFF: boolean;
    isIE: boolean;
    isIE9: boolean;
    isIE10: boolean;
    isIE11: boolean;
    isEdge: boolean;
    isChrome: boolean;
    isSafari: boolean;
    isSafari10: boolean;
    isSafari11: boolean;
    isWindows: boolean;
    isOpera: boolean;
    isSP: boolean;
    isPC: boolean;
    isTablet: boolean;
    isAndroid: boolean;
    iOS: boolean;
    iPad: boolean;
    iPhone: boolean;
    iPod: boolean;
    safariVersion: number;
}

export function detect(userAgent = navigator.userAgent): IBrowserInfo {
    userAgent = userAgent.toLowerCase();
    const isFF = userAgent.indexOf("firefox") > -1;
    const isIE9 = userAgent.indexOf("msie 9.0") > -1;
    const isIE10 = userAgent.indexOf("msie 10.0") > -1;
    const isIE11 = userAgent.indexOf("trident") > -1 && !!userAgent.match(/rv\:11/);
    const isEdge = !!userAgent.match(/edge?\/\d+/) && userAgent.indexOf("windows") > -1;
    const isIE = userAgent.indexOf("msie") > -1 || isIE11;
    const isChrome = !isEdge && (userAgent.indexOf("chrome") > -1 || userAgent.indexOf("crios") > -1);
    const isSafari = userAgent.indexOf("safari") > -1 && !isChrome && !isEdge;
    const isOpera = userAgent.indexOf("opera") > -1;
    const isWindows = userAgent.indexOf("windows") > -1;
    const isAndroid = userAgent.indexOf("android") > -1 && !isWindows;
    const iPad = /\bipad;/i.test(userAgent);
    const iPhone = /\biphone;/i.test(userAgent);
    const iPod = /\bipod;/i.test(userAgent);
    let isSafari10 = false;
    let isSafari11 = false;
    let safariVersion: number;
    if (isSafari) {
        const mat = /version\/(\d+)/.exec(userAgent);
        if (mat) {
            safariVersion = parseInt(mat[1], 10);
            isSafari11 = safariVersion >= 11;
            isSafari10 = safariVersion < 11;
        }
    }
    const iOS = iPod || iPhone || iPad;
    const isTablet = iPad;
    const isSP = (iOS || isAndroid) && !isWindows && !isTablet;
    const isPC = !isSP && !isTablet;
    return {
        isFF,
        isIE,
        isIE9,
        isIE10,
        isIE11,
        isEdge,
        isWindows,
        isChrome,
        isSafari,
        isSafari10,
        isSafari11,
        isOpera,
        isSP,
        isPC,
        isTablet,
        isAndroid,
        iOS,
        iPad,
        iPhone,
        iPod,
        safariVersion
    };
}

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
export declare function detect(userAgent?: string): IBrowserInfo;

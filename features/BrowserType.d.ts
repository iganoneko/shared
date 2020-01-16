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
export declare function detect(userAgent?: string): IBrowserInfo;

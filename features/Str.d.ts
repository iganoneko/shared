/**
 * String useful features
 * @packageDocumentation
 */
/**
 * Is the string digit character
 * @param value string value
 */
export declare const isDigit: (value: any) => boolean;
/**
 * Is the string numeric
 * @param value
 */
export declare const isNumeric: (value: any) => boolean;
/**
 * Is the string alphanumeric
 * @param value
 */
export declare const isAlnum: (value: any) => boolean;
/**
 * Is the string a letter
 * @param value
 */
export declare const isAlpha: (value: any) => boolean;
/**
 * Is the string lowercase
 * @param value
 */
export declare const isAlphaLower: (value: any) => boolean;
/**
 * Is the string uppercase
 * @param value
 */
export declare const isAlphaUpper: (value: any) => boolean;
/**
 * The character string is an email address
 * @param value
 */
export declare const isEmail: (value: any) => boolean;
/**
 * A character string close to the email address
 * @param value
 */
export declare const isEmailLike: (value: any) => boolean;
/**
 * The string is an HTTP URL
 * @param value
 */
export declare const isHttpURL: (value: any) => boolean;
/**
 * String is internet image file name
 * @param value
 */
export declare const isImageFileName: (value: any) => boolean;
/**
 * Is the domain of the URL
 * @param value
 */
export declare const isURLDomain: (value: any) => boolean;
/**
 * IP Address
 * @param value
 */
export declare const isIPAddress: (value: any) => boolean;
/**
 * The string is a UUID
 * @param value
 * @param length
 */
export declare const isUUID: (value: string) => boolean;
/**
 * Escape regexp pattern string
 * @param str
 */
export declare const escapeRegExp: (str: string) => string;
/**
 * generate uuid
 */
export declare function uuid(): string;
/**
 * Count bytes
 * @param str
 */
export declare function countBytes(str: string): number;

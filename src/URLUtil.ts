/**
 * URL utilities
 * @packageDocumentation
 */

/**
 * URL encode
 * @param value 
 */
export function urlEnc(value: string): string {
    return encodeURIComponent(value).replace(/%20(?!\d)/g, "+");
}

/**
 * URL decode
 * @param value 
 */
export function urlDec(value: string): string {
    return decodeURIComponent(value.replace(/\+/g, "%20"));
}

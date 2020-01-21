/**
 * String useful features
 * @packageDocumentation
 */

/**
 * Is the string digit character 
 * @param value string value
 */
export const isDigit = (value: any) => /^\d+$/.test(value);

/**
 * Is the string numeric
 * @param value 
 */
export const isNumeric = (value: any) => /^[-+]?[0-9]+(\.[0-9]+)?$/.test(value);

/**
 * Is the string alphanumeric
 * @param value 
 */
export const isAlnum = (value: any) => /^[a-zA-Z\d]+$/.test(String(value));

/**
 * Is the string a letter
 * @param value 
 */
export const isAlpha = (value: any) => /^[a-zA-Z]+$/.test(String(value));

/**
 * Is the string lowercase
 * @param value 
 */
export const isAlphaLower = (value: any) => /^[a-z]+$/.test(String(value));

/**
 * Is the string uppercase
 * @param value 
 */
export const isAlphaUpper = (value: any) => /^[A-Z]+$/.test(String(value));

/**
 * Is the string an email address
 * @param value 
 */
export const isEmail = (value: any) => /^[-a-zA-Z0-9!#$%&'*+/=?^_`{|}~.]+@[a-zA-Z0-9]+([-.][a-zA-Z0-9]+){1,100}[a-zA-Z0-9]$/.test(value);

/**
 * Is the string like an email address
 * @param value 
 */
export const isEmailLike = (value: any) => typeof value === "string" && value.indexOf("@") !== -1;

/**
 * Is the string an HTTP URL
 * @param value 
 */
export const isHttpURL = (value: any) => /^(http|https):\/\/(\w+:{0,1}\w*@)?(\S+)(:[0-9]+)?(\/|\/([\w#!:.?+=&%@!\-\/]))?$/.test(value);

/**
 * String is image file name
 * @param value 
 */
export const isImageFileName = (value: any) => /\.(gif|jpg|png)$/.test(value);

/**
 * Is the string a UUID
 * @param value 
 * @param length 
 */
export const isUUID = (value: string) => /[0-9A-F]{8}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{4}-[0-9A-F]{12}/.test(value);

/**
 * Escape regexp pattern string
 * @param str 
 */
export const escapeRegExp = (str: string): string => str.replace(/([.*+?^=!:${}()|[\]\/\\])/g, "\\$1");

/**
 * generate uuid
 */
export function uuid(): string {
    let result = "";
    for (let i = 0; i < 32; i++) {
        let random = Math.floor(Math.random() * 16);
        if (i === 8 || i === 12 || i === 16 || i === 20) {
            result += "-";
        }
        result += (i === 12 ? 4 : (i === 16 ? (random & 3 | 8) : random)).toString(16);
    }
    return result;
}

/**
 * Count bytes
 * @param str 
 */
export function countBytes(str: string): number {
    let byteLen: number = 0;
    for (let i = 0; i < str.length; i++) {
        const c = str.charCodeAt(i);
        byteLen +=
            c < (1 << 7) ? 1 :
                c < (1 << 11) ? 2 :
                    c < (1 << 16) ? 3 :
                        c < (1 << 21) ? 4 :
                            c < (1 << 26) ? 5 :
                                c < (1 << 31) ? 6 :
                                    Number.NaN;
    }
    return byteLen;
}

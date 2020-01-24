import { AbstractStorage } from "./AbstractStorage";
/**
 * Cookie expiration setting
 */
export interface IExpires {
    /** Days */
    day?: number;
    /** Hours */
    hour?: number;
    /** Minute */
    minute?: number;
    /** Target date and time */
    target?: Date;
    /** Fix at 23:59:59 */
    endOfTheDay?: boolean;
}
/**
 * Options for saving cookies
 */
export interface ICookieOptions {
    /** Path */
    path?: string;
    /** Domain */
    domain?: string;
    /** Secure */
    secure?: boolean;
    /** expiration */
    expires?: IExpires;
    /** Session priority */
    session?: boolean;
    /** SameSite */
    samesite?: string;
}
/**
 * Input/Output to extended Cookie
 */
export declare class CStorage extends AbstractStorage {
    setItem(key: string, value: any, options?: ICookieOptions): void;
    getItem(key: string): string;
    removeItem(key: string): void;
    clear(): void;
    get length(): number;
}
declare const _default: CStorage;
export default _default;

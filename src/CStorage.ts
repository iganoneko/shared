import { isNull, isString, isUndefined } from "./Type";
import { AbstractStorage } from "./AbstractStorage";
import { escapeRegExp } from "./Str";

const DAY: number = 86400000;
const HOUR: number = 3600000;
const MINUTE: number = 60000;
const EXPIRES_DATE = new Date(2000, 1, 1, 0, 0, 0, 0);

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
 * Convert cookie expiration to milliseconds
 * return expires.day + expires.hour + expires.minute 
 *
 * @param expires Cookie expiration
 * @return UTC time (ms)
 */
function convertExpiresTime(expires: IExpires): number {
    let result: number = 0;
    if (expires.day) {
        result += expires.day * DAY;
    }
    if (expires.hour) {
        result += expires.hour * HOUR;
    }
    if (expires.minute) {
        result += expires.minute * MINUTE;
    }
    return result;
}

/**
 * Convert to cookie expiration
 *
 * @param expires Cookie expiration
 * @return Cookie expiration Date
 */
function getExpiresDate(expires: IExpires): Date {
    if (expires.target) {
        return expires.target;
    }
    const date = new Date();
    const expiresTime = convertExpiresTime(expires);

    date.setTime(date.getTime() + Math.abs(expiresTime));

    if (expires.endOfTheDay) {
        date.setHours(23);
        date.setMinutes(59);
        date.setSeconds(59);
    }
    return date;
}

/**
 * Cookie Storage
 */
export class CStorageBase extends AbstractStorage {

    public setItem(key: string, value: any, options: ICookieOptions = {}): void {
        if (key.match(/[^\w\.\-]/)) {
            throw new Error("Invalid key character");
        }

        if (isNull(value) || isUndefined(value)) {
            value = "";
        }

        if (!isString(value)) {
            value = JSON.stringify(value);
        }

        const cookie: string[] = [key + "=" + value];
        const isSecureProtcol = location.protocol === "https:";

        if (options.path) {
            cookie.push("path=" + options.path);
        }
        if (options.domain) {
            cookie.push("domain=" + options.domain);
        }
        if (options.hasOwnProperty("secure")) {
            if (options.secure === true) {
                cookie.push("secure");
            } else if (isSecureProtcol) {
                console.warn("On a secure site, there is no secure flag, is it good?");
            }
        } else if (isSecureProtcol) {
            cookie.push("secure");
        }
        if (options.session) {
            cookie.push("expires=");
        } else if (options.expires) {
            cookie.push("expires=" + getExpiresDate(options.expires).toUTCString());
        }

        document.cookie = cookie.join("; ");
    }

    public getItem(key: string): string {
        const regexp = new RegExp("\\b" + escapeRegExp(key) + "=([^\\;]+)");
        const mat = regexp.exec(document.cookie);
        return mat ? mat[1] : null;
    }

    public removeItem(key: string): void {
        try {
            document.cookie = key + "=; expires=" + EXPIRES_DATE.toUTCString();
        } catch (e) { }
    }

    public clear(): void {
        const cookies = document.cookie.split(/\s*;\s*/);
        cookies.forEach((cookie) => {
            const [name] = cookie.split("=");
            this.removeItem(name);
        });
    }

    public get length() {
        return document.cookie.split(/\s*;\s*/).length;
    }
}

export const CStorage = new CStorageBase();
/**
 * Promise useful features
 * @packageDocumentation
 */
/**
 * Execute promises serially
 * @param list Promise
 */
export declare function series<T>(list: any): Promise<T>;
/**
 * Promise version of timeout
 * @param time time (msec)
 */
export declare function timeout(time?: number): Promise<unknown>;

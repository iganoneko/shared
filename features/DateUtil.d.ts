/**
 * Compact date library
 * @packageDocumentation
 */
/**
 * Is Date1 before Date2
 * @param date1
 * @param date2
 */
export declare function isBefore(date1: Date, date2: Date): boolean;
/**
 * Is Date1 later than Date2
 * @param date1
 * @param date2
 */
export declare function isAfter(date1: Date, date2: Date): boolean;
/**
 * Is Date1 equal to Date2
 * @param date1
 * @param date2
 */
export declare function isEqual(date1: Date, date2: Date): boolean;
export declare function isBeforeDay(date1: Date, date2: Date): boolean;
export declare function isAfterDay(date1: Date, date2: Date): boolean;
export declare function isEqualDay(date1: Date, date2: Date): boolean;
export declare function eachDays(from: Date, to: Date, callback: Function): void;
/**
 * Clone Date Object
 * @param date
 */
export declare function clone(date: Date): Date;
/**
 * Add a year
 * @param date
 * @param value
 */
export declare function addYear(date: Date, value: number): Date;
/**
 * Add a month
 * @param date
 * @param value
 */
export declare function addMonth(date: Date, value: number): Date;
/**
 * Add a day
 * @param date
 * @param value
 */
export declare function addDay(date: Date, value: number): Date;
/**
 * Add a hours
 * @param date
 * @param value
 */
export declare function addHours(date: Date, value: number): Date;
/**
 * Add a minutes
 * @param date
 * @param value
 */
export declare function addMinutes(date: Date, value: number): Date;
/**
 * Add a seconds
 * @param date
 * @param value
 */
export declare function addSeconds(date: Date, value: number): Date;
/**
 * Clear time field
 * @param date
 */
export declare function clearTime(date: Date): Date;
export declare function getTimePerMonth(date: Date): number;
export declare function getYearTime(date: Date): number;
export interface IFromNowResult {
    num: number;
    unit: "s" | "m" | "h" | "D" | "M" | "Y";
}
export declare function fromNow(from: Date, now?: Date): {
    num: number;
    unit: any;
};
export declare function format(date: Date, format: string): string;
export declare function isLeapYear(year: number): boolean;
export declare function getDateOfMonth(date: Date): 31 | 29 | 28 | 30;
export declare function validYear(value: number): boolean;
export declare function validMonth(value: number): boolean;
export declare function validDate(value: number): boolean;
export declare function validHour(value: number): boolean;
export declare function validMinute(value: number): boolean;
export declare function validSecond(value: number): boolean;

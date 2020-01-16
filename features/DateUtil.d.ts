export declare function isBefore(date1: Date, date2: Date): boolean;
export declare function isAfter(date1: Date, date2: Date): boolean;
export declare function isEqual(date1: Date, date2: Date): boolean;
export declare function isBeforeDate(date1: Date, date2: Date): boolean;
export declare function isAfterDate(date1: Date, date2: Date): boolean;
export declare function isEqualDate(date1: Date, date2: Date): boolean;
export declare function eachDate(from: Date, to: Date, callback: Function): void;
export declare function dateDiff(date1: Date, date2: Date): number;
export declare function clone(date: Date): Date;
export declare function addYear(date: Date, value: number): Date;
export declare function addMonth(date: Date, value: number): Date;
export declare function addDay(date: Date, value: number): Date;
export declare function addHour(date: Date, value: number): Date;
export declare function addMinute(date: Date, value: number): Date;
export declare function addSecond(date: Date, value: number): Date;
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

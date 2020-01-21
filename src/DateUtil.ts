/**
 * Compact date library
 * @packageDocumentation
 */

const DAY: number = 86400000;
const HOUR: number = 3600000;
const MINUTE: number = 60000;
const SECOND: number = 1000;

/**
 * Is Date1 before Date2
 * @param date1 
 * @param date2 
 */
export function isBefore(date1: Date, date2: Date) {
    return date1.getTime() < date2.getTime();
}

/**
 * Is Date1 later than Date2
 * @param date1 
 * @param date2 
 */
export function isAfter(date1: Date, date2: Date) {
    return date1.getTime() > date2.getTime();
}

/**
 * Is Date1 equal to Date2
 * @param date1 
 * @param date2 
 */
export function isEqual(date1: Date, date2: Date) {
    return date1.getTime() === date2.getTime();
}

export function isBeforeDay(date1: Date, date2: Date) {
    return isBefore(clearTime(clone(date1)), clearTime(clone(date2)));
}

export function isAfterDay(date1: Date, date2: Date) {
    return isAfter(clearTime(clone(date1)), clearTime(clone(date2)));
}

export function isEqualDay(date1: Date, date2: Date) {
    return isEqual(clearTime(clone(date1)), clearTime(clone(date2)));
}

export function eachDays(from: Date, to: Date, callback: Function) {
    from = clearTime(clone(from));
    to = clearTime(clone(to));
    while (from < to) {
        callback(from);
        from = addDay(from, 1);
    }
}

/**
 * Clone Date Object
 * @param date 
 */
export function clone(date: Date) {
    return new Date(date.getTime());
}

/**
 * Add a year
 * @param date 
 * @param value 
 */
export function addYear(date: Date, value: number) {
    date.setFullYear(date.getFullYear() + value);
    return date;
}

/**
 * Add a month
 * @param date 
 * @param value 
 */
export function addMonth(date: Date, value: number) {
    date.setMonth(date.getMonth() + value);
    return date;
}

/**
 * Add a day
 * @param date 
 * @param value 
 */
export function addDay(date: Date, value: number) {
    date.setDate(date.getDate() + value);
    return date;
}

/**
 * Add a hours
 * @param date 
 * @param value 
 */
export function addHours(date: Date, value: number) {
    date.setHours(date.getHours() + value);
    return date;
}

/**
 * Add a minutes
 * @param date 
 * @param value 
 */
export function addMinutes(date: Date, value: number) {
    date.setMinutes(date.getMinutes() + value);
    return date;
}

/**
 * Add a seconds
 * @param date 
 * @param value 
 */
export function addSeconds(date: Date, value: number) {
    date.setSeconds(date.getSeconds() + value);
    return date;
}

/**
 * Clear time field
 * @param date 
 */
export function clearTime(date: Date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}

export function getTimePerMonth(date: Date) {
    const curr = clearTime(clone(date));
    const next = addMonth(clone(curr), 1);
    return next.getTime() - curr.getTime();
}

export function getYearTime(date: Date) {
    const curr = clearTime(clone(date));
    const next = addYear(clone(curr), 1);
    return next.getTime() - curr.getTime();
}

export interface IFromNowResult {
    num: number;
    unit: "s" | "m" | "h" | "D" | "M" | "Y";
}

export function fromNow(from: Date, now = new Date()) {
    const diffTime = now.getTime() - from.getTime();
    const monthTime = getTimePerMonth(from);
    const yearTime = DAY * 365;
    const newResult = (div, unit) => {
        return {
            num: Math.floor(diffTime / div),
            unit
        };
    };
    if (diffTime < MINUTE) { return newResult(SECOND, "s"); }
    if (diffTime < HOUR) { return newResult(MINUTE, "m"); }
    if (diffTime < DAY) { return newResult(HOUR, "h"); }
    if (diffTime < monthTime) { return newResult(DAY, "D"); }
    if (diffTime < yearTime) { return newResult(monthTime, "M"); }
    return newResult(yearTime, "Y");
}

export function format(date: Date, format: string) {
    const pad2 = (n: number) => ("0" + n).slice(-2);
    const pad3 = (n: number) => ("00" + n).slice(-3);
    // year
    format = format.replace(/YYYY/g, date.getFullYear().toString());
    format = format.replace(/YY/g, date.getFullYear().toString().slice(-2));
    format = format.replace(/Y/g, date.getFullYear().toString());
    // month
    format = format.replace(/MM/g, pad2(date.getMonth() + 1));
    format = format.replace(/M/g, (date.getMonth() + 1).toString());
    // date
    format = format.replace(/DD/g, pad2(date.getDate()));
    format = format.replace(/D/g, date.getDate().toString());
    // hour
    format = format.replace(/hh/g, pad2(date.getHours()));
    format = format.replace(/h/g, date.getHours().toString());
    // minute
    format = format.replace(/mm/g, pad2(date.getMinutes()));
    format = format.replace(/m/g, date.getMinutes().toString());
    // second
    format = format.replace(/ss/g, pad2(date.getSeconds()));
    format = format.replace(/s/g, date.getSeconds().toString());
    // millisecond
    format = format.replace(/SSS/g, pad3(date.getMilliseconds()));
    format = format.replace(/S/g, date.getMilliseconds().toString());
    return format;
}

export function isLeapYear(year: number) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}

export function getDateOfMonth(date: Date) {
    const year = date.getFullYear();
    const month = date.getMonth() + 1;
    switch (month) {
        case 2:
            if (isLeapYear(year)) {
                return 29;
            } else {
                return 28;
            }
        case 4:
        case 6:
        case 9:
        case 11:
            return 30;
    }
    return 31;
}

export function validYear(value: number): boolean {
    return (1900 <= value) && (value <= 2100);
}

export function validMonth(value: number): boolean {
    return (1 <= value) && (value <= 12);
}

export function validDate(value: number): boolean {
    return (1 <= value) && (value <= 31);
}

export function validHour(value: number): boolean {
    return (0 <= value) && (value <= 23);
}

export function validMinute(value: number): boolean {
    return (0 <= value) && (value <= 59);
}

export function validSecond(value: number): boolean {
    return (0 <= value) && (value <= 59);
}

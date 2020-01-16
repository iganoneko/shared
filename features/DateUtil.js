"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DAY = 86400000;
var HOUR = 3600000;
var MINUTE = 60000;
var SECOND = 1000;
function isBefore(date1, date2) {
    return date1.getTime() < date2.getTime();
}
exports.isBefore = isBefore;
function isAfter(date1, date2) {
    return date1.getTime() > date2.getTime();
}
exports.isAfter = isAfter;
function isEqual(date1, date2) {
    return date1.getTime() === date2.getTime();
}
exports.isEqual = isEqual;
function isBeforeDate(date1, date2) {
    return isBefore(cloneOnlyDate(date1), cloneOnlyDate(date2));
}
exports.isBeforeDate = isBeforeDate;
function isAfterDate(date1, date2) {
    return isAfter(cloneOnlyDate(date1), cloneOnlyDate(date2));
}
exports.isAfterDate = isAfterDate;
function isEqualDate(date1, date2) {
    return isEqual(cloneOnlyDate(date1), cloneOnlyDate(date2));
}
exports.isEqualDate = isEqualDate;
function eachDate(from, to, callback) {
    from = cloneOnlyDate(from);
    to = cloneOnlyDate(to);
    while (from < to) {
        callback(from);
        from = addDay(from, 1);
    }
}
exports.eachDate = eachDate;
function dateDiff(date1, date2) {
    var diffTime = cloneOnlyDate(date1).getTime() - cloneOnlyDate(date2).getTime();
    return Math.floor(diffTime / DAY);
}
exports.dateDiff = dateDiff;
function clone(date) {
    return new Date(date.getTime());
}
exports.clone = clone;
function addYear(date, value) {
    date.setFullYear(date.getFullYear() + value);
    return date;
}
exports.addYear = addYear;
function addMonth(date, value) {
    date.setMonth(date.getMonth() + value);
    return date;
}
exports.addMonth = addMonth;
function addDay(date, value) {
    date.setDate(date.getDate() + value);
    return date;
}
exports.addDay = addDay;
function addHour(date, value) {
    date.setHours(date.getHours() + value);
    return date;
}
exports.addHour = addHour;
function addMinute(date, value) {
    date.setMinutes(date.getMinutes() + value);
    return date;
}
exports.addMinute = addMinute;
function addSecond(date, value) {
    date.setSeconds(date.getSeconds() + value);
    return date;
}
exports.addSecond = addSecond;
function clearTime(date) {
    date.setHours(0);
    date.setMinutes(0);
    date.setSeconds(0);
    date.setMilliseconds(0);
    return date;
}
exports.clearTime = clearTime;
function getTimePerMonth(date) {
    var curr = cloneOnlyDate(date);
    var next = addMonth(clone(curr), 1);
    return next.getTime() - curr.getTime();
}
exports.getTimePerMonth = getTimePerMonth;
function getYearTime(date) {
    var curr = cloneOnlyDate(date);
    var next = addYear(clone(curr), 1);
    return next.getTime() - curr.getTime();
}
exports.getYearTime = getYearTime;
function fromNow(from, now) {
    if (now === void 0) { now = new Date(); }
    var diffTime = now.getTime() - from.getTime();
    var monthTime = getTimePerMonth(from);
    var yearTime = DAY * 365;
    var newResult = function (div, unit) {
        return {
            num: Math.floor(diffTime / div),
            unit: unit
        };
    };
    if (diffTime < MINUTE) {
        return newResult(SECOND, "s");
    }
    if (diffTime < HOUR) {
        return newResult(MINUTE, "m");
    }
    if (diffTime < DAY) {
        return newResult(HOUR, "h");
    }
    if (diffTime < monthTime) {
        return newResult(DAY, "D");
    }
    if (diffTime < yearTime) {
        return newResult(monthTime, "M");
    }
    return newResult(yearTime, "Y");
}
exports.fromNow = fromNow;
function format(date, format) {
    var pad2 = function (n) { return ("0" + n).slice(-2); };
    var pad3 = function (n) { return ("00" + n).slice(-3); };
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
exports.format = format;
function isLeapYear(year) {
    return ((year % 4 === 0) && (year % 100 !== 0)) || (year % 400 === 0);
}
exports.isLeapYear = isLeapYear;
function getDateOfMonth(date) {
    var year = date.getFullYear();
    var month = date.getMonth() + 1;
    switch (month) {
        case 2:
            if (isLeapYear(year)) {
                return 29;
            }
            else {
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
exports.getDateOfMonth = getDateOfMonth;
function validYear(value) {
    return (1900 <= value) && (value <= 2100);
}
exports.validYear = validYear;
function validMonth(value) {
    return (1 <= value) && (value <= 12);
}
exports.validMonth = validMonth;
function validDate(value) {
    return (1 <= value) && (value <= 31);
}
exports.validDate = validDate;
function validHour(value) {
    return (0 <= value) && (value <= 23);
}
exports.validHour = validHour;
function validMinute(value) {
    return (0 <= value) && (value <= 59);
}
exports.validMinute = validMinute;
function validSecond(value) {
    return (0 <= value) && (value <= 59);
}
exports.validSecond = validSecond;
function cloneOnlyDate(date) {
    return clearTime(clone(date));
}

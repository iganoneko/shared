"use strict";
/**
 * Promise useful features
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * Execute promises serially
 * @param list Promise
 */
function series(list) {
    return list.reduce(function (currThenable, nextThenable) {
        return currThenable.then(nextThenable);
    }, Promise.resolve());
}
exports.series = series;
/**
 * Promise version of timeout
 * @param time time (msec)
 */
function timeout(time) {
    if (time === void 0) { time = 0; }
    return new Promise(function (resolve) {
        window.setTimeout(function () { return resolve(); }, time);
    });
}
exports.timeout = timeout;

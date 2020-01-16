"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
function series(list) {
    return list.reduce(function (currThenable, nextThenable) {
        return currThenable.then(nextThenable);
    }, Promise.resolve());
}
exports.series = series;
function timeout(time) {
    if (time === void 0) { time = 0; }
    return new Promise(function (resolve) {
        window.setTimeout(function () { return resolve(); }, time);
    });
}
exports.timeout = timeout;

"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 *
 *     const retryFunc = Retry.makeFn((params) => {
 *       return promise;
 *     });
 *
 *     retryFunc(params).then(() => {
 *
 *     }).catch(()=> {
 *
 *     });
 *
 * @example
 *
 *     options.determineRetry = error => {
 *          return error.status !== 404 && !(error.status >= 500);
 *     }
 */
function extendFn(execution, options) {
    if (options === void 0) { options = {}; }
    if (!options.delay) {
        options.delay = 1000;
    }
    if (!options.maxRetries) {
        options.maxRetries = 5;
    }
    if (!options.determineRetry) {
        options.determineRetry = function () { return true; };
    }
    if (!options.onSetupTimer) {
        options.onSetupTimer = function () { };
    }
    var determineRetry = options.determineRetry, onSetupTimer = options.onSetupTimer;
    var delay = options.delay, maxRetries = options.maxRetries;
    if (delay < 1000) {
        delay = 1000;
    }
    return function (params) {
        return new Promise(function (resolve, reject) {
            var retry = function () {
                execution(params).then(resolve).catch(function (error) {
                    if (maxRetries-- > 0) {
                        if (determineRetry(error)) {
                            window.setTimeout(function () { return retry(); }, delay);
                            onSetupTimer();
                            return;
                        }
                    }
                    reject(error);
                });
            };
            retry();
        });
    };
}
exports.extendFn = extendFn;

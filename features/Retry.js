"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * @example
 *
 * ```
 * import createRetryFunc from "@iganoneko/shared/features/Retry"
 *
 * const originalAsyncFn = (params) => {
 *  return promise;
 * }
 *
 * const retryFunc = createRetryFunc(originalAsyncFn);
 *
 * retryFunc(params).then(() => {
 *
 * }).catch(()=> {
 *
 * });
 * ```
 *
 * ```
 * options.determineIfRetry = error => error.status !== 404 && !(error.status >= 500);
 * ```
 */
function default_1(execution, options) {
    if (options === void 0) { options = {}; }
    if (!options.delay) {
        options.delay = 1000;
    }
    if (!options.maxRetries) {
        options.maxRetries = 5;
    }
    if (!options.determineIfRetry) {
        options.determineIfRetry = function () { return true; };
    }
    if (!options.onSetupTimer) { // for unit test
        options.onSetupTimer = function () { };
    }
    var determineIfRetry = options.determineIfRetry, onSetupTimer = options.onSetupTimer;
    var delay = options.delay, maxRetries = options.maxRetries;
    if (delay < 1000) {
        delay = 1000;
    }
    return function (params) {
        return new Promise(function (resolve, reject) {
            var retry = function () {
                execution(params).then(resolve).catch(function (error) {
                    if (maxRetries-- > 0) {
                        if (determineIfRetry(error)) {
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
exports.default = default_1;

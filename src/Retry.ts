/**
 * Retry option
 */
export interface IRetryOptions {
    /** Retry times */
    maxRetries?: number;
    /** Wait time before retry */
    delay?: number;
    /** Judge whether to retry */
    determineIfRetry?: (error?: any) => boolean;
    /** timer set before retry */
    onSetupTimer?: () => void;
}

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
export default function <P, R>(execution: (params?: P) => Promise<R>, options: IRetryOptions = {}) {
    if (!options.delay) {
        options.delay = 1000;
    }
    if (!options.maxRetries) {
        options.maxRetries = 5;
    }
    if (!options.determineIfRetry) {
        options.determineIfRetry = () => true;
    }
    if (!options.onSetupTimer) {   // for unit test
        options.onSetupTimer = () => { };
    }

    const {
        determineIfRetry,
        onSetupTimer
    } = options;
    let {
        delay,
        maxRetries
    } = options;

    if (delay < 1000) {
        delay = 1000;
    }

    return function (params?: any) {
        return new Promise((resolve, reject) => {
            const retry = () => {
                execution(params).then(resolve).catch((error) => {
                    if (maxRetries-- > 0) {
                        if (determineIfRetry(error)) {
                            window.setTimeout(() => retry(), delay);
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

export interface IRetryOptions {
    maxRetries?: number;
    delay?: number;
    determineRetry?: (error?: any) => boolean;
    onSetupTimer?: () => void;
}

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
export function extendFn<P, R>(execution: (params?: P) => Promise<R>, options: IRetryOptions = {}) {
    if (!options.delay) {
        options.delay = 1000;
    }
    if (!options.maxRetries) {
        options.maxRetries = 5;
    }
    if (!options.determineRetry) {
        options.determineRetry = () => true;
    }
    if (!options.onSetupTimer) {
        options.onSetupTimer = () => { };
    }

    const {
        determineRetry,
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
                        if (determineRetry(error)) {
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

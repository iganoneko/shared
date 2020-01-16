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
export declare function extendFn<P, R>(execution: (params?: P) => Promise<R>, options?: IRetryOptions): (params?: any) => Promise<unknown>;

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
 * import toRetryFunc from "@iganoneko/shared/features/Retry"
 *
 * const originalAsyncFn = (params) => {
 *   // return promise;
 * }
 *
 * const retryFunc = toRetryFunc(originalAsyncFn);
 *
 * retryFunc(params).then(() => {
 *
 * }).catch(()=> {
 *
 * });
 * ```
 *
 * ```
 * options.determineIfRetry = error => {
 *   return error.status !== 404 && !(error.status >= 500);
 * }
 * ```
 */
export default function <P, R>(execution: (params?: P) => Promise<R>, options?: IRetryOptions): (params?: any) => Promise<unknown>;

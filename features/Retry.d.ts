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
 * import newRetry from "@iganoneko/shared/features/Retry"
 *
 * const retryFunc = newRetry((params) => {
 *   return promise;
 * });
 *
 * retryFunc(params).then(() => {
 *
 * }).catch(()=> {
 *
 * });
 * ```
 *
 * @example
 *
 *     options.determineIfRetry = error => {
 *          return error.status !== 404 && !(error.status >= 500);
 *     }
 */
export default function <P, R>(execution: (params?: P) => Promise<R>, options?: IRetryOptions): (params?: any) => Promise<unknown>;

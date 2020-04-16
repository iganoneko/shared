import { AbstractStorage } from "./AbstractStorage";
/**
 * Input/Output to extended sessionStorage
 */
export declare class SStorage extends AbstractStorage {
    setItem(key: string, value: any): void;
    getItem(key: string): string;
    removeItem(key: string): void;
    clear(): void;
    get length(): number;
}
declare const _default: SStorage;
export default _default;

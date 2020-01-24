import { AbstractStorage } from "./AbstractStorage";
/**
 * Input/Output to extended localStorage
 */
export declare class LStorage extends AbstractStorage {
    setItem(key: string, value: any): void;
    getItem(key: string): string;
    removeItem(key: string): void;
    clear(): void;
    get length(): number;
}
declare const _default: LStorage;
export default _default;

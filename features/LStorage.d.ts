import { AbstractStorage } from "./AbstractStorage";
export declare class LStorageBase extends AbstractStorage {
    setItem(key: string, value: any): void;
    getItem(key: string): string;
    removeItem(key: string): void;
    clear(): void;
    get length(): number;
}
export declare const LStorage: LStorageBase;

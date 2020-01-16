import { IStorage } from "./IStorage";
export declare abstract class AbstractStorage implements IStorage {
    abstract setItem(key: string, value: any): void;
    abstract getItem(key: string): string;
    abstract removeItem(key: string): void;
    abstract clear(): void;
    abstract get length(): number;
    getStr(key: string, altValue?: string): string;
    getBool(key: string, altValue?: boolean): boolean;
    getObj(key: string, altValue?: any): any;
    getNum(key: string, altValue?: number): number;
    getInt(key: string, altValue?: number): number;
    hasItem(key: string): boolean;
    removeItems(keys: string[]): void;
}

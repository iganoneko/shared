import { IStorage } from "./IStorage";
/**
 * Input / output extension to storage area of Web browser.
 */
export declare abstract class AbstractStorage implements IStorage {
    /**
     * Save values to storage
     * @param key Key Name
     * @param value Value to save.
     */
    abstract setItem(key: string, value: any): void;
    /**
     * Get value without type conversion
     * @param key Key Name
     */
    abstract getItem(key: string): string;
    /**
     * Deleting items
     * @param key
     */
    abstract removeItem(key: string): void;
    /**
     * Clear Storage
     */
    abstract clear(): void;
    /**
     * Returns the number of saved items
     */
    abstract get length(): number;
    /**
     * Get value as string
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    getStr(key: string, altValue?: string): string;
    /**
     * Get value as boolean
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    getBool(key: string, altValue?: boolean): boolean;
    /**
     * Get value as JavaScript Plain Object
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    getObj(key: string, altValue?: any): any;
    /**
     * Get value as number
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    getNum(key: string, altValue?: number): number;
    /**
     * Get value as integer
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    getInt(key: string, altValue?: number): number;
    /**
     * Check if data exists
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    hasItem(key: string): boolean;
    /**
     * Delete multiple values from storage
     * @param keys Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    removeItems(keys: string[]): void;
}

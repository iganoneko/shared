import { IStorage } from "./IStorage";
import * as ConvTo from "./ConvTo";

/**
 * Input / output extension to storage area of Web browser.
 */
export abstract class AbstractStorage implements IStorage {

    /**
     * Save values to storage
     * @param key Key Name
     * @param value Value to save.
     */
    public abstract setItem(key: string, value: any): void;

    /**
     * Get value without type conversion
     * @param key Key Name
     */
    public abstract getItem(key: string): string;

    /**
     * Deleting items
     * @param key 
     */
    public abstract removeItem(key: string): void;

    /**
     * Clear Storage
     */
    public abstract clear(): void;

    /**
     * Returns the number of saved items
     */
    public abstract get length(): number;

    /**
     * Get value as string
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    public getStr(key: string, altValue: string = null): string {
        return ConvTo.str(this.getItem(key), altValue);
    }

    /**
     * Get value as boolean
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    public getBool(key: string, altValue?: boolean): boolean {
        return ConvTo.bool(this.getItem(key), altValue);
    }

    /**
     * Get value as JavaScript Plain Object
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    public getObj(key: string, altValue: any = null): any {
        return ConvTo.obj(this.getItem(key), altValue);
    }

    /**
     * Get value as number
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    public getNum(key: string, altValue?: number): number {
        return ConvTo.num(this.getItem(key), altValue);
    }

    /**
     * Get value as integer
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    public getInt(key: string, altValue?: number): number {
        return ConvTo.inte(this.getItem(key), altValue);
    }

    /**
     * Check if data exists
     * @param key Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    public hasItem(key: string): boolean {
        return !!this.getItem(key);
    }

    /**
     * Delete multiple values from storage
     * @param keys Key Name
     * @param altValue Alternative value to be returned when acquisition fails
     */
    public removeItems(keys: string[]): void {
        keys.forEach((key: string) => {
            this.removeItem(key);
        });
    }

}

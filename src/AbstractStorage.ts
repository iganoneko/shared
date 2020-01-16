import { IStorage } from "./IStorage";
import * as ConvTo from "./ConvTo";

export abstract class AbstractStorage implements IStorage {

    public abstract setItem(key: string, value: any): void;
    public abstract getItem(key: string): string;
    public abstract removeItem(key: string): void;
    public abstract clear(): void;
    public abstract get length(): number;

    public getStr(key: string, altValue: string = null): string {
        return ConvTo.str(this.getItem(key), altValue);
    }

    public getBool(key: string, altValue?: boolean): boolean {
        return ConvTo.bool(this.getItem(key), altValue);
    }

    public getObj(key: string, altValue: any = null): any {
        return ConvTo.obj(this.getItem(key), altValue);
    }

    public getNum(key: string, altValue?: number): number {
        return ConvTo.num(this.getItem(key), altValue);
    }

    public getInt(key: string, altValue?: number): number {
        return ConvTo.inte(this.getItem(key), altValue);
    }

    public hasItem(key: string): boolean {
        return !!this.getItem(key);
    }

    public removeItems(keys: string[]): void {
        keys.forEach((key: string) => {
            this.removeItem(key);
        });
    }

}

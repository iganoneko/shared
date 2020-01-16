import { AbstractStorage } from "./AbstractStorage";

export class LStorageBase extends AbstractStorage {

    public setItem(key: string, value: any): void {
        try {
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
        } catch (e) { }
    }

    public getItem(key: string): string {
        try {
            const val: string = localStorage.getItem(key);
            if (val) {
                return val;
            }
            return null;
        } catch (e) {
            return null;
        }
    }

    public removeItem(key: string): void {
        try {
            localStorage.removeItem(key);
        } catch (e) { }
    }

    public clear(): void {
        try {
            localStorage.clear();
        } catch (e) { }
    }

    public get length() {
        try {
            return localStorage.length;
        } catch (e) {
            return 0;
        }
    }

}

export const LStorage = new LStorageBase();


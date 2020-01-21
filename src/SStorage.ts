import { AbstractStorage } from "./AbstractStorage";

/**
 * Input/Output to extended localStorage
 */
export class SStorage extends AbstractStorage {

    public setItem(key: string, value: any): void {
        try {
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            sessionStorage.setItem(key, value);
        } catch (e) { }
    }

    public getItem(key: string): string {
        try {
            const val: string = sessionStorage.getItem(key);
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
            sessionStorage.removeItem(key);
        } catch (e) { }
    }

    public clear(): void {
        try {
            sessionStorage.clear();
        } catch (e) { }
    }

    public get length() {
        try {
            return sessionStorage.length;
        } catch (e) {
            return 0;
        }
    }

}

export default new SStorage();

export interface IStorage {
    setItem(key: string, value: any): void;
    getItem(key: string): string;
    getStr(key: string, altValue?: string): string;
    getBool(key: string, altValue?: boolean): boolean;
    getObj(key: string, altValue?: any): any;
    getNum(key: string, altValue?: number): number;
    getInt(key: string, altValue?: number): number;
    hasItem(key: string): boolean;
    removeItem(key: string): void;
    clear(): void;
    length: number;
}

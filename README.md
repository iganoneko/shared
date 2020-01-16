# shared

## localStorage

Function to easily get data from localStorage

```
import { LStorage } from "@iganoneko/shared/features/LStorage";

LStorage.setItem(key: string, value: any);
LStorage.getItem(key: string): string;
LStorage.removeItem(key: string): void;
LStorage.clear(): void;
LStorage.length: number;
LStorage.getStr(key: string, altValue: string = null): string;
LStorage.getBool(key: string, altValue: boolean = false): boolean;
LStorage.getObj(key: string, altValue: any = null): any;
LStorage.getNum(key: string, altValue: number = 0): number;
LStorage.getInt(key: string, altValue: number = 0): number;
```

example

```
LStorage.getStr("example"); // 
LStorage.getStr("example", "default_value"); // Specify alternative value to be returned when acquisition fails
```

## sessionStorage

Function to easily get data from sessionStorage

```
import { SStorage } from "@iganoneko/shared/features/SStorage";

SStorage.setItem(key: string, value: any);
SStorage.getItem(key: string): string;
SStorage.removeItem(key: string): void;
SStorage.clear(): void;
SStorage.length: number;
SStorage.getStr(key: string, altValue: string = null): string;
SStorage.getBool(key: string, altValue: boolean = false): boolean;
SStorage.getObj(key: string, altValue: any = null): any;
SStorage.getNum(key: string, altValue: number = 0): number;
SStorage.getInt(key: string, altValue: number = 0): number;
```

## CStorage 

Function to easily get data from cookie

```
import { CStorage } from "@iganoneko/shared/features/CStorage";

CStorage.setItem(key: string, value: any, cookieOptions: CStorage.ICookieOptions): void;
CStorage.getItem(key: string): string;
CStorage.removeItem(key: string): void;
CStorage.clear(): void;
CStorage.length: number;
CStorage.getStr(key: string, altValue: string = null): string;
CStorage.getBool(key: string, altValue: boolean = false): boolean;
CStorage.getObj(key: string, altValue: any = null): any;
CStorage.getNum(key: string, altValue: number = 0): number;
CStorage.getInt(key: string, altValue: number = 0): number;
```

```
CStorage.ICookieOptions

cookieOptions.path: string;
cookieOptions.domain: string;
cookieOptions.secure: boolean;
cookieOptions.expires: object;
cookieOptions.expires.day
cookieOptions.expires.hour
cookieOptions.expires.minute
cookieOptions.expires.target
cookieOptions.expires.endOfTheDay
cookieOptions.session: boolean;
cookieOptions.samesite: string;
```

## BrowserType

```
import * as BrowserType from "@iganoneko/shared/features/BrowserType";
const browserType = BrowserType.detect();

browserType.isFF: boolean;
browserType.isIE: boolean;
browserType.isIE9: boolean;
browserType.isIE10: boolean;
browserType.isIE11: boolean;
browserType.isEdge: boolean;
browserType.isChrome: boolean;
browserType.isSafari: boolean;
browserType.isSafari10: boolean;
browserType.isSafari11: boolean;
browserType.isWindows: boolean;
browserType.isOpera: boolean;
browserType.isSP: boolean;
browserType.isPC: boolean;
browserType.isTablet: boolean;
browserType.isAndroid: boolean;
browserType.iOS: boolean;
browserType.iPad: boolean;
browserType.iPhone: boolean;
browserType.iPod: boolean;
browserType.safariVersion: number;
```

## ConvTo

Perform complex JavaScript type conversions accurately

```
import * as ConvTo from "@iganoneko/shared/features/ConvTo";

ConvTo.inte(value: any, altValue: number): number;
ConvTo.str(value: any, altValue?: string): string;
ConvTo.num(value: any, altValue: number = 0.0): number;
ConvTo.bool(value: any, altValue?: boolean): boolean;
ConvTo.obj(value: any, altValue: Object = null): Object ;
```

## URLUtil

Corrects for incomplete URL encoding of encodeURIComponent.

```
import * as URLUtil from "@iganoneko/shared/features/URLUtil";

URLUtil.urlEnc(value: string): string;
URLUtil.urlDec(value: string): string;
```

## Str

Collection of commands related to strings

```
import * as Str from "@iganoneko/shared/features/Str";

Str.isDigit = (value: any): boolean;
Str.isNumeric = (value: any): boolean;
Str.isAlnum = (value: any): boolean;
Str.isAlpha = (value: any): boolean;
Str.isAlphaLower = (value: any): boolean;
Str.isAlphaUpper = (value: any): boolean;
Str.isWordConfChars = (value: any): boolean;
Str.isEmail = (value: any): boolean;
Str.isEmailLike = (value: any): boolean;
Str.isHttpURL = (value: any): boolean;
Str.isImageFileName = (value: any): boolean;
Str.isUUID = (value: string): boolean;
Str.escapeRegExp = (str: string): string;
Str.uuid(): string;
Str.countBytes(value: string): number;
```

## Obj

Object instruction collection

```
import * as Obj from "@iganoneko/shared/features/Obj";

Obj.compact(object: any): any;
Obj.sortByKeys(object: any): any;
```

## Retry

Extend asynchronous functions to retry-enabled functions

```
import * as Retry from "@iganoneko/shared/features/Retry";

Retry.makeFn(execution: (params?: P) => Promise<R>, options: IRetryOptions = {}): (params?: P) => Promise<R>;
```

example

For example, there is an asynchronous function that you want to support retries.

```
const asyncFunc = (params) => {
    // return Promise.resolve();
};
```

Extends to the retry support function without changing the processing of the original function.

```
const retryFunc = Retry.extendFn(asyncFunc, {
    maxRetries: 10,
    delay: 3000
});
```

After that, just execute the extended function.

```
retryFunc(params);
```

## PromiseUtil

It doesn't exist in the standard, but can add very necessary functions

```
import * as PromiseUtil from "@iganoneko/shared/features/PromiseUtil";

PromiseUtil.series([...promises...]): Promise<[...results]>;
PromiseUtil.timeout(1000);
```

## DateUtil

I want to process the datetime easily without using moment.js.

```
import * as DateUtil from "@iganoneko/shared/features/DateUtil";

DateUtil.isBefore(date1: Date, date2: Date): boolean;
DateUtil.isAfter(date1: Date, date2: Date): boolean;
DateUtil.isEqual(date1: Date, date2: Date): boolean;
DateUtil.isBeforeDate(date1: Date, date2: Date): boolean;
DateUtil.isAfterDate(date1: Date, date2: Date): boolean;
DateUtil.isEqualDate(date1: Date, date2: Date): boolean;
DateUtil.eachDate(from: Date, to: Date, callback: Function): void;
DateUtil.dateDiff(date1: Date, date2: Date): number;
DateUtil.clone(date: Date): Date;
DateUtil.cloneInDate(date: Date): Date;
DateUtil.addYear(date: Date, value: number): Date;
DateUtil.addMonth(date: Date, value: number): Date;
DateUtil.addDay(date: Date, value: number): Date;
DateUtil.addHour(date: Date, value: number): Date;
DateUtil.addMinute(date: Date, value: number): Date;
DateUtil.addSecond(date: Date, value: number): Date;
DateUtil.clearTime(date: Date): Date;
DateUtil.getTimePerMonth(date: Date): number;
DateUtil.getYearTime(date: Date): number;
DateUtil.fromNow(from: Date, now = new Date()): string;
DateUtil.format(date: Date, format: string)
DateUtil.isLeapYear(year: number): boolean;
DateUtil.getDateOfMonth(date: Date): number;
DateUtil.validYear(value: number): boolean
DateUtil.validMonth(value: number): boolean
DateUtil.validDate(value: number): boolean
DateUtil.validHour(value: number): boolean
DateUtil.validMinute(value: number): boolean
DateUtil.validSecond(value: number): boolean
```

## CharConvert

```
CharConvert.fullToHalf(string): string
CharConvert.halfToFull(string): string
```

## Win

Web browser window control

```
Win.documentHidden();
Win.onVisibilityChange(listener, option?);
Win.onPageShow(listener, option?);
Win.offPageShow(listener, option?);
Win.onPageHide(listener, option?);
Win.offPageHide(listener, option?);
Win.onPageBeforeUnload(listener, option?);
Win.offPageBeforeUnload(listener, option?);
Win.onPageLoad(listener, option?);
Win.offPageLoad(listener, option?);
Win.onBlur(listener, option?);
Win.offBlur(listener, option?);
Win.onFocus(listener, option?);
Win.offFocus(listener, option?);
Win.scrollLock(lock: boolean);
Win.checkOrientation(): string;
```

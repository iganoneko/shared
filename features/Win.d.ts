/**
 * Window object support
 * @packageDocumentation
 */
declare type WindowEventType = "pageshow" | "pagehide" | "beforeunload" | "unload" | "blur" | "focus";
/**
 * window.addEventListener Wrapper
 * @param eventType
 * @param listener
 * @param options
 */
export declare function on(eventType: WindowEventType, listener: any, options?: any): void;
/**
 * window.addEventListener Wrapper
 * @param eventType
 * @param listener
 */
export declare function off(eventType: WindowEventType, listener: any): void;
/**
 * Scroll lock
 * @param lock true=lock
 */
export declare function scrollLock(lock: boolean): void;
/**
 * Screen Orientation Type
 * checkOrientation() return value definition
 */
export declare const ScreenOrientation: {
    PORTRAIT: string;
    LANDSCAPE: string;
};
/**
 * Get Orientation
 * @see ScreenOrientation
 */
export declare function getOrientation(): string;
export {};

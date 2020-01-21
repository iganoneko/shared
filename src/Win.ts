/**
 * Window object
 * @packageDocumentation
 */

type WindowEventType = "pageshow" | "pagehide" | "beforeunload" | "unload" | "blur" | "focus";

/**
 * window.addEventListener Wrapper
 * @param eventType 
 * @param listener 
 * @param options 
 */
export function on(eventType: WindowEventType, listener, options?) {
    window.addEventListener(eventType, listener, options);
}

/**
 * window.addEventListener Wrapper
 * @param eventType 
 * @param listener 
 */
export function off(eventType: WindowEventType, listener) {
    window.removeEventListener(eventType, listener);
}

/**
 * Scroll lock
 * @param lock true=lock 
 */
export function scrollLock(lock: boolean) {
    if (lock) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}

/**
 * Screen Orientation Type
 * checkOrientation() return value definition
 */
export const ScreenOrientation = {
    PORTRAIT: "portrait",
    LANDSCAPE: "landscape"
};

/**
 * Get Orientation
 * @see ScreenOrientation
 */
export function getOrientation(): string {
    const orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
    if (orientation) {
        if (orientation.type === "portrait-primary" || orientation.type === "portrait-secondary") {
            return ScreenOrientation.PORTRAIT;
        } else if (orientation.type === "landscape-primary" || orientation.type === "landscape-secondary") {
            return ScreenOrientation.LANDSCAPE;
        }
    } else if (window.orientation) {
        if ((window.orientation === 90) || (window.orientation === 270)) {
            return ScreenOrientation.LANDSCAPE;
        } else {
            return ScreenOrientation.PORTRAIT;
        }
    } else if (window.innerHeight > window.innerWidth) {
        return ScreenOrientation.PORTRAIT;
    } else {
        return ScreenOrientation.LANDSCAPE;
    }
}

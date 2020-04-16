"use strict";
/**
 * Window object support
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
/**
 * window.addEventListener Wrapper
 * @param eventType
 * @param listener
 * @param options
 */
function on(eventType, listener, options) {
    window.addEventListener(eventType, listener, options);
}
exports.on = on;
/**
 * window.addEventListener Wrapper
 * @param eventType
 * @param listener
 */
function off(eventType, listener) {
    window.removeEventListener(eventType, listener);
}
exports.off = off;
/**
 * Scroll lock
 * @param lock true=lock
 */
function scrollLock(lock) {
    if (lock) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "";
    }
}
exports.scrollLock = scrollLock;
/**
 * Screen Orientation Type
 * checkOrientation() return value definition
 */
exports.ScreenOrientation = {
    PORTRAIT: "portrait",
    LANDSCAPE: "landscape"
};
/**
 * Get Orientation
 * @see ScreenOrientation
 */
function getOrientation() {
    var orientation = screen.orientation || screen.mozOrientation || screen.msOrientation;
    if (orientation) {
        if (orientation.type === "portrait-primary" || orientation.type === "portrait-secondary") {
            return exports.ScreenOrientation.PORTRAIT;
        }
        else if (orientation.type === "landscape-primary" || orientation.type === "landscape-secondary") {
            return exports.ScreenOrientation.LANDSCAPE;
        }
    }
    else if (window.orientation) {
        if ((window.orientation === 90) || (window.orientation === 270)) {
            return exports.ScreenOrientation.LANDSCAPE;
        }
        else {
            return exports.ScreenOrientation.PORTRAIT;
        }
    }
    else if (window.innerHeight > window.innerWidth) {
        return exports.ScreenOrientation.PORTRAIT;
    }
    else {
        return exports.ScreenOrientation.LANDSCAPE;
    }
}
exports.getOrientation = getOrientation;

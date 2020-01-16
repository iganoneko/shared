// document > hidden
let documentHiddenKey;
let visibilityChangeEventType;

if (typeof document.hidden !== "undefined") {
    documentHiddenKey = "hidden";
    visibilityChangeEventType = "visibilitychange";
}
else if (typeof document.mozHidden !== "undefined") {
    documentHiddenKey = "mozHidden";
    visibilityChangeEventType = "mozvisibilitychange";
}
else if (typeof document.msHidden !== "undefined") {
    documentHiddenKey = "msHidden";
    visibilityChangeEventType = "msvisibilitychange";
}
else if (typeof document.webkitHidden !== "undefined") {
    documentHiddenKey = "webkitHidden";
    visibilityChangeEventType = "webkitvisibilitychange";
} else {
    documentHiddenKey = "hidden";
    visibilityChangeEventType = "visibilitychange";
}

const PAGE_SHOW = "pageshow";
const PAGE_HIDE = "pagehide";
const PAGE_BEFORE_UNLOAD = "beforeunload";
const PAGE_UNLOAD = "unload";
const BLUR = "blur";
const FOCUS = "focus";

export function documentHidden() {
    return document[documentHiddenKey];
}

export function onVisibilityChange(listener, option?) {
    document.addEventListener(visibilityChangeEventType, listener, option);
}

export function onPageShow(listener, option?) {
    windowAddEventListener(PAGE_SHOW, listener, option);
}
export function offPageShow(listener, option?) {
    windowRemoveEventListener(PAGE_SHOW, listener, option);
}

export function onPageHide(listener, option?) {
    windowAddEventListener(PAGE_HIDE, listener, option);
}

export function offPageHide(listener, option?) {
    windowRemoveEventListener(PAGE_HIDE, listener, option);
}

export function onPageBeforeUnload(listener, option?) {
    windowAddEventListener(PAGE_BEFORE_UNLOAD, listener, option);
}

export function offPageBeforeUnload(listener, option?) {
    windowRemoveEventListener(PAGE_BEFORE_UNLOAD, listener, option);
}

export function onPageLoad(listener, option?) {
    windowAddEventListener(PAGE_UNLOAD, listener, option);
}

export function offPageLoad(listener, option?) {
    windowRemoveEventListener(PAGE_UNLOAD, listener, option);
}

export function onBlur(listener, option?) {
    windowAddEventListener(BLUR, listener, option);
}

export function offBlur(listener, option?) {
    windowRemoveEventListener(BLUR, listener, option);
}

export function onFocus(listener, option?) {
    windowAddEventListener(FOCUS, listener, option);
}
export function offFocus(listener, option?) {
    windowRemoveEventListener(FOCUS, listener, option);
}

export function scrollLock(lock: boolean) {
    if (lock) {
        document.body.style.overflow = "hidden";
    } else {
        document.body.style.overflow = "";
    }
}

export const ScreenOrientation = {
    PORTRAIT: "portrait",
    LANDSCAPE: "landscape"
};

export function checkOrientation(): string {
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

function windowAddEventListener(eventType, listener, option?) {
    window.addEventListener(eventType, listener, option);
}

function windowRemoveEventListener(eventType, listener, option?) {
    window.removeEventListener(eventType, listener, option);
}

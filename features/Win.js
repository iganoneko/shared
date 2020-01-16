"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// document > hidden
var documentHiddenKey;
var visibilityChangeEventType;
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
}
else {
    documentHiddenKey = "hidden";
    visibilityChangeEventType = "visibilitychange";
}
var PAGE_SHOW = "pageshow";
var PAGE_HIDE = "pagehide";
var PAGE_BEFORE_UNLOAD = "beforeunload";
var PAGE_UNLOAD = "unload";
var BLUR = "blur";
var FOCUS = "focus";
function documentHidden() {
    return document[documentHiddenKey];
}
exports.documentHidden = documentHidden;
function onVisibilityChange(listener, option) {
    document.addEventListener(visibilityChangeEventType, listener, option);
}
exports.onVisibilityChange = onVisibilityChange;
function onPageShow(listener, option) {
    windowAddEventListener(PAGE_SHOW, listener, option);
}
exports.onPageShow = onPageShow;
function offPageShow(listener, option) {
    windowRemoveEventListener(PAGE_SHOW, listener, option);
}
exports.offPageShow = offPageShow;
function onPageHide(listener, option) {
    windowAddEventListener(PAGE_HIDE, listener, option);
}
exports.onPageHide = onPageHide;
function offPageHide(listener, option) {
    windowRemoveEventListener(PAGE_HIDE, listener, option);
}
exports.offPageHide = offPageHide;
function onPageBeforeUnload(listener, option) {
    windowAddEventListener(PAGE_BEFORE_UNLOAD, listener, option);
}
exports.onPageBeforeUnload = onPageBeforeUnload;
function offPageBeforeUnload(listener, option) {
    windowRemoveEventListener(PAGE_BEFORE_UNLOAD, listener, option);
}
exports.offPageBeforeUnload = offPageBeforeUnload;
function onPageLoad(listener, option) {
    windowAddEventListener(PAGE_UNLOAD, listener, option);
}
exports.onPageLoad = onPageLoad;
function offPageLoad(listener, option) {
    windowRemoveEventListener(PAGE_UNLOAD, listener, option);
}
exports.offPageLoad = offPageLoad;
function onBlur(listener, option) {
    windowAddEventListener(BLUR, listener, option);
}
exports.onBlur = onBlur;
function offBlur(listener, option) {
    windowRemoveEventListener(BLUR, listener, option);
}
exports.offBlur = offBlur;
function onFocus(listener, option) {
    windowAddEventListener(FOCUS, listener, option);
}
exports.onFocus = onFocus;
function offFocus(listener, option) {
    windowRemoveEventListener(FOCUS, listener, option);
}
exports.offFocus = offFocus;
function scrollLock(lock) {
    if (lock) {
        document.body.style.overflow = "hidden";
    }
    else {
        document.body.style.overflow = "";
    }
}
exports.scrollLock = scrollLock;
exports.ScreenOrientation = {
    PORTRAIT: "portrait",
    LANDSCAPE: "landscape"
};
function checkOrientation() {
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
exports.checkOrientation = checkOrientation;
function windowAddEventListener(eventType, listener, option) {
    window.addEventListener(eventType, listener, option);
}
function windowRemoveEventListener(eventType, listener, option) {
    window.removeEventListener(eventType, listener, option);
}

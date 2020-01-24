"use strict";
/**
 * Cross-browser support for document objects
 * @packageDocumentation
 */
Object.defineProperty(exports, "__esModule", { value: true });
var documentHiddenKey_;
var visibilityChangeEventType_;
if (typeof document.hidden !== "undefined") {
    documentHiddenKey_ = "hidden";
    visibilityChangeEventType_ = "visibilitychange";
}
else if (typeof document.mozHidden !== "undefined") {
    documentHiddenKey_ = "mozHidden";
    visibilityChangeEventType_ = "mozvisibilitychange";
}
else if (typeof document.msHidden !== "undefined") {
    documentHiddenKey_ = "msHidden";
    visibilityChangeEventType_ = "msvisibilitychange";
}
else if (typeof document.webkitHidden !== "undefined") {
    documentHiddenKey_ = "webkitHidden";
    visibilityChangeEventType_ = "webkitvisibilitychange";
}
else {
    documentHiddenKey_ = "hidden";
    visibilityChangeEventType_ = "visibilitychange";
}
/**
 * Cross-browser support for document.hidden
 *
 * ```
 * document.addEventListener(Doc.visibilitychange, function() {...});
 * ```
 */
exports.documentHiddenKey = document[documentHiddenKey_];
/**
 * Cross-browser support for document.visibilitychange
 *
 * ```
 * document[Doc.visibilityChangeEventType]
 * ```
 */
exports.visibilityChangeEventType = visibilityChangeEventType_;

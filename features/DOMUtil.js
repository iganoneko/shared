"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var Type_1 = require("./Type");
function getTwitterMetaInfo() {
    return {
        card: getMetaContent("meta[name=\"twitter:card\"]"),
        title: getMetaContent("meta[name=\"twitter:title\"]"),
        description: getMetaContent("meta[name=\"twitter:description\"]"),
        url: getMetaContent("meta[name=\"twitter:url\"]"),
        image: getMetaContent("meta[name=\"twitter:image\"]"),
    };
}
exports.getTwitterMetaInfo = getTwitterMetaInfo;
function getOGMetaInfo() {
    return {
        title: getMetaContent("meta[property=\"og:title\"]"),
        type: getMetaContent("meta[property=\"og:type\"]"),
        description: getMetaContent("meta[property=\"og:description\"]"),
        url: getMetaContent("meta[property=\"og:url\"]"),
        image: getMetaContent("meta[property=\"og:image\"]"),
        locale: getMetaContent("meta[property=\"og:locale\"]"),
    };
}
exports.getOGMetaInfo = getOGMetaInfo;
function getFacebookAppId() {
    return getMetaContent("meta[property=\"fb:app_id\"]");
}
exports.getFacebookAppId = getFacebookAppId;
function getStandard() {
    return {
        description: getMetaContent("meta[name=\"description\"]"),
        keywords: getMetaContent("meta[name=\"keywords\"]"),
    };
}
exports.getStandard = getStandard;
function getMetaContent(selector) {
    var elem = document.querySelector(selector);
    if (elem) {
        var content = elem.getAttribute("content");
        if (content) {
            return content;
        }
    }
    return null;
}
function createIFrame(options) {
    if (options === void 0) { options = {}; }
    if (!options.hasOwnProperty("width")) {
        options.width = 0;
    }
    if (!options.hasOwnProperty("height")) {
        options.height = 0;
    }
    if (!options.hasOwnProperty("frameborder")) {
        options.frameborder = 0;
    }
    var iframeEl = document.createElement("iframe");
    iframeEl.setAttribute("width", "" + options.width);
    iframeEl.setAttribute("height", "" + options.height);
    iframeEl.setAttribute("frameborder", "" + options.frameborder);
    return iframeEl;
}
exports.createIFrame = createIFrame;
function loadIFrame(src, callback, options) {
    if (options === void 0) { options = {}; }
    var iframeEl = createIFrame(options);
    iframeEl.onload = function () {
        if (iframeEl.src === src) {
            if (Type_1.isFunction(callback)) {
                callback.call(iframeEl, iframeEl);
            }
        }
    };
    iframeEl.src = src;
    return iframeEl;
}
exports.loadIFrame = loadIFrame;
function loadScript(src) {
    var script = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
}
exports.loadScript = loadScript;
function loadCSS(href) {
    var link = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}
exports.loadCSS = loadCSS;
// TODO
// export function onDisplayChange(targetElement: HTMLElement, listener: (display: boolean, rect: DOMRect) => void) {
//     const boundingClientRect = targetElement.getBoundingClientRect() as DOMRect;
//     if ((boundingClientRect.y < window.innerHeight) && (0 <= boundingClientRect.bottom)) {
//         listener(true, boundingClientRect);
//     } else {
//         listener(false, boundingClientRect);
//     }
// }

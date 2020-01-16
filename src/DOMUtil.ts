import { isFunction } from "./Type";

export interface ITWitterMetaInfo {
    card: string;
    title: string;
    description: string;
    url: string;
    image: string;
}

export function getTwitterMetaInfo(): ITWitterMetaInfo {
    return {
        card:
            getMetaContent(`meta[name="twitter:card"]`),
        title:
            getMetaContent(`meta[name="twitter:title"]`),
        description:
            getMetaContent(`meta[name="twitter:description"]`),
        url:
            getMetaContent(`meta[name="twitter:url"]`),
        image:
            getMetaContent(`meta[name="twitter:image"]`),
    };
}

export interface IOGMetaInfo {
    title: string;
    type: string;
    description: string;
    url: string;
    image: string;
    locale: string;
}

export function getOGMetaInfo(): IOGMetaInfo {
    return {
        title:
            getMetaContent(`meta[property="og:title"]`),
        type:
            getMetaContent(`meta[property="og:type"]`),
        description:
            getMetaContent(`meta[property="og:description"]`),
        url:
            getMetaContent(`meta[property="og:url"]`),
        image:
            getMetaContent(`meta[property="og:image"]`),
        locale:
            getMetaContent(`meta[property="og:locale"]`),
    };
}

export function getFacebookAppId() {
    return getMetaContent(`meta[property="fb:app_id"]`);
}

export interface IStandaedMetaInfo {
    description: string;
    keywords: string;
}

export function getStandard(): IStandaedMetaInfo {
    return {
        description:
            getMetaContent(`meta[name="description"]`),
        keywords:
            getMetaContent(`meta[name="keywords"]`),
    };
}

function getMetaContent(selector: string) {
    const elem = document.querySelector(selector);
    if (elem) {
        const content = elem.getAttribute("content");
        if (content) {
            return content;
        }
    }
    return null;
}

export interface IFrameOptions {
    width?: number;
    height?: number;
    frameborder?: number;
}

export function createIFrame(options: IFrameOptions = {}) {
    if (!options.hasOwnProperty("width")) {
        options.width = 0;
    }
    if (!options.hasOwnProperty("height")) {
        options.height = 0;
    }
    if (!options.hasOwnProperty("frameborder")) {
        options.frameborder = 0;
    }
    const iframeEl: HTMLIFrameElement = document.createElement("iframe");
    iframeEl.setAttribute("width", "" + options.width);
    iframeEl.setAttribute("height", "" + options.height);
    iframeEl.setAttribute("frameborder", "" + options.frameborder);
    return iframeEl;
}

export interface ILoadIFrameCallback {
    (iframeEl: HTMLIFrameElement): void;
}

export function loadIFrame(src: string, callback: ILoadIFrameCallback, options: IFrameOptions = {}) {
    const iframeEl = createIFrame(options);
    iframeEl.onload = function () {
        if (iframeEl.src === src) {
            if (isFunction(callback)) {
                callback.call(iframeEl, iframeEl);
            }
        }
    };
    iframeEl.src = src;
    return iframeEl;
}

export function loadScript(src: string) {
    const script: HTMLScriptElement = document.createElement("script");
    script.src = src;
    document.head.appendChild(script);
}

export function loadCSS(href: string) {
    const link: HTMLLinkElement = document.createElement("link");
    link.rel = "stylesheet";
    link.href = href;
    document.head.appendChild(link);
}

// TODO
// export function onDisplayChange(targetElement: HTMLElement, listener: (display: boolean, rect: DOMRect) => void) {
//     const boundingClientRect = targetElement.getBoundingClientRect() as DOMRect;
//     if ((boundingClientRect.y < window.innerHeight) && (0 <= boundingClientRect.bottom)) {
//         listener(true, boundingClientRect);
//     } else {
//         listener(false, boundingClientRect);
//     }
// }

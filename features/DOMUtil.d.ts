export interface ITWitterMetaInfo {
    card: string;
    title: string;
    description: string;
    url: string;
    image: string;
}
export declare function getTwitterMetaInfo(): ITWitterMetaInfo;
export interface IOGMetaInfo {
    title: string;
    type: string;
    description: string;
    url: string;
    image: string;
    locale: string;
}
export declare function getOGMetaInfo(): IOGMetaInfo;
export declare function getFacebookAppId(): string;
export interface IStandaedMetaInfo {
    description: string;
    keywords: string;
}
export declare function getStandard(): IStandaedMetaInfo;
export interface IFrameOptions {
    width?: number;
    height?: number;
    frameborder?: number;
}
export declare function createIFrame(options?: IFrameOptions): HTMLIFrameElement;
export interface ILoadIFrameCallback {
    (iframeEl: HTMLIFrameElement): void;
}
export declare function loadIFrame(src: string, callback: ILoadIFrameCallback, options?: IFrameOptions): HTMLIFrameElement;
export declare function loadScript(src: string): void;
export declare function loadCSS(href: string): void;

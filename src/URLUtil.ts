
export function urlEnc(value: string): string {
    return encodeURIComponent(value).replace(/%20(?!\d)/g, "+");
}

export function urlDec(value: string): string {
    return decodeURIComponent(value.replace(/\+/g, "%20"));
}

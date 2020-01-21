const HALF_TO_FULL_MAP = {
    // Numbers
    "0": "０",
    "1": "１",
    "2": "２",
    "3": "３",
    "4": "４",
    "5": "５",
    "6": "６",
    "7": "７",
    "8": "８",
    "9": "９",
    // Aplha Lower
    "a": "ａ",
    "b": "ｂ",
    "c": "ｃ",
    "d": "ｄ",
    "e": "ｅ",
    "f": "ｆ",
    "g": "ｇ",
    "h": "ｈ",
    "i": "ｉ",
    "j": "ｊ",
    "k": "ｋ",
    "l": "ｌ",
    "m": "ｍ",
    "n": "ｎ",
    "o": "ｏ",
    "p": "ｐ",
    "q": "ｑ",
    "r": "ｒ",
    "s": "ｓ",
    "t": "ｔ",
    "u": "ｕ",
    "v": "ｖ",
    "w": "ｗ",
    "x": "ｘ",
    "y": "ｙ",
    "z": "ｚ",
    // Alpha Upper
    "A": "Ａ",
    "B": "Ｂ",
    "C": "Ｃ",
    "D": "Ｄ",
    "E": "Ｅ",
    "F": "Ｆ",
    "G": "Ｇ",
    "H": "Ｈ",
    "I": "Ｉ",
    "J": "Ｊ",
    "K": "Ｋ",
    "L": "Ｌ",
    "M": "Ｍ",
    "N": "Ｎ",
    "O": "Ｏ",
    "P": "Ｐ",
    "Q": "Ｑ",
    "R": "Ｒ",
    "S": "Ｓ",
    "T": "Ｔ",
    "U": "Ｕ",
    "V": "Ｖ",
    "W": "Ｗ",
    "X": "Ｘ",
    "Y": "Ｙ",
    "Z": "Ｚ",
    // Symbols
    "!": "！",
    "\"": "”",
    "#": "＃",
    "$": "＄",
    "%": "％",
    "&": "＆",
    "'": "’",
    "(": "（",
    ")": "）",
    "=": "＝",
    "_": "＿",
    "/": "／",
    "+": "＋",
    "*": "＊",
    "<": "＜",
    ">": "＞",
    "?": "？",
    "[": "［",
    "]": "］",
    ":": "：",
    ";": "；",
    "@": "＠",
    "{": "｛",
    "}": "｝",
    "~": "〜",
    ".": "．",
    ",": "，",
};
const FULL_TO_HALF_MAP = (function () {
    const result = {};
    Object.keys(HALF_TO_FULL_MAP).forEach((half) => {
        const full = HALF_TO_FULL_MAP[half];
        result[full] = half;
    });
    return result;
}());

/**
 * Convert from full-width to half-width
 * @param str String value
 */
export function fullToHalf(str: string) {
    if (typeof str === "string") {
        const length = str.length;
        const result = [];
        for (let i = 0; i < length; i++) {
            const ch = str[i];
            result.push(FULL_TO_HALF_MAP[ch] || ch);
        }
        return result.join("");
    } else {
        return str;
    }
}

/**
 * Convert from half-width to full-width
 * @param str String value
 */
export function halfToFull(str: string): string {
    if (typeof str === "string") {
        const length = str.length;
        const result = [];
        for (let i = 0; i < length; i++) {
            const ch = str[i];
            result.push(HALF_TO_FULL_MAP[ch] || ch);
        }
        return result.join("");
    } else {
        return str;
    }
}

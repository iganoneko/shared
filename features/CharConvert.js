"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var HALF_TO_FULL_MAP = {
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
var FULL_TO_HALF_MAP = (function () {
    var result = {};
    Object.keys(HALF_TO_FULL_MAP).forEach(function (half) {
        var full = HALF_TO_FULL_MAP[half];
        result[full] = half;
    });
    return result;
}());
/**
 * Convert from full-width to half-width
 * @param str String value
 */
function fullToHalf(str) {
    if (typeof str === "string") {
        var length_1 = str.length;
        var result = [];
        for (var i = 0; i < length_1; i++) {
            var ch = str[i];
            result.push(FULL_TO_HALF_MAP[ch] || ch);
        }
        return result.join("");
    }
    else {
        return str;
    }
}
exports.fullToHalf = fullToHalf;
/**
 * Convert from half-width to full-width
 * @param str String value
 */
function halfToFull(str) {
    if (typeof str === "string") {
        var length_2 = str.length;
        var result = [];
        for (var i = 0; i < length_2; i++) {
            var ch = str[i];
            result.push(HALF_TO_FULL_MAP[ch] || ch);
        }
        return result.join("");
    }
    else {
        return str;
    }
}
exports.halfToFull = halfToFull;

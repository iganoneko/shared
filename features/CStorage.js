"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
Object.defineProperty(exports, "__esModule", { value: true });
var Type_1 = require("./Type");
var AbstractStorage_1 = require("./AbstractStorage");
var Str_1 = require("./Str");
var DAY = 86400000;
var HOUR = 3600000;
var MINUTE = 60000;
var EXPIRES_DATE = new Date(2000, 1, 1, 0, 0, 0, 0);
/**
 * Convert cookie expiration to milliseconds
 * return expires.day + expires.hour + expires.minute
 *
 * @param expires Cookie expiration
 * @return UTC time (ms)
 */
function convertExpiresTime(expires) {
    var result = 0;
    if (expires.day) {
        result += expires.day * DAY;
    }
    if (expires.hour) {
        result += expires.hour * HOUR;
    }
    if (expires.minute) {
        result += expires.minute * MINUTE;
    }
    return result;
}
/**
 * Convert to cookie expiration
 *
 * @param expires Cookie expiration
 * @return Cookie expiration Date
 */
function getExpiresDate(expires) {
    if (expires.target) {
        return expires.target;
    }
    var date = new Date();
    var expiresTime = convertExpiresTime(expires);
    date.setTime(date.getTime() + Math.abs(expiresTime));
    if (expires.endOfTheDay) {
        date.setHours(23);
        date.setMinutes(59);
        date.setSeconds(59);
    }
    return date;
}
/**
 * Cookie Storage
 */
var CStorageBase = /** @class */ (function (_super) {
    __extends(CStorageBase, _super);
    function CStorageBase() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    CStorageBase.prototype.setItem = function (key, value, options) {
        if (options === void 0) { options = {}; }
        if (key.match(/[^\w\.\-]/)) {
            throw new Error("Invalid key character");
        }
        if (Type_1.isNull(value) || Type_1.isUndefined(value)) {
            value = "";
        }
        if (!Type_1.isString(value)) {
            value = JSON.stringify(value);
        }
        var cookie = [key + "=" + value];
        var isSecureProtcol = location.protocol === "https:";
        if (options.path) {
            cookie.push("path=" + options.path);
        }
        if (options.domain) {
            cookie.push("domain=" + options.domain);
        }
        if (options.hasOwnProperty("secure")) {
            if (options.secure === true) {
                cookie.push("secure");
            }
            else if (isSecureProtcol) {
                console.warn("On a secure site, there is no secure flag, is it good?");
            }
        }
        else if (isSecureProtcol) {
            cookie.push("secure");
        }
        if (options.session) {
            cookie.push("expires=");
        }
        else if (options.expires) {
            cookie.push("expires=" + getExpiresDate(options.expires).toUTCString());
        }
        document.cookie = cookie.join("; ");
    };
    CStorageBase.prototype.getItem = function (key) {
        var regexp = new RegExp("\\b" + Str_1.escapeRegExp(key) + "=([^\\;]+)");
        var mat = regexp.exec(document.cookie);
        return mat ? mat[1] : null;
    };
    CStorageBase.prototype.removeItem = function (key) {
        try {
            document.cookie = key + "=; expires=" + EXPIRES_DATE.toUTCString();
        }
        catch (e) { }
    };
    CStorageBase.prototype.clear = function () {
        var _this = this;
        var cookies = document.cookie.split(/\s*;\s*/);
        cookies.forEach(function (cookie) {
            var name = cookie.split("=")[0];
            _this.removeItem(name);
        });
    };
    Object.defineProperty(CStorageBase.prototype, "length", {
        get: function () {
            return document.cookie.split(/\s*;\s*/).length;
        },
        enumerable: true,
        configurable: true
    });
    return CStorageBase;
}(AbstractStorage_1.AbstractStorage));
exports.CStorageBase = CStorageBase;
exports.CStorage = new CStorageBase();

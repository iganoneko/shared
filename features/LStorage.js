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
var AbstractStorage_1 = require("./AbstractStorage");
/**
 * Input/Output to extended localStorage
 */
var LStorage = /** @class */ (function (_super) {
    __extends(LStorage, _super);
    function LStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    LStorage.prototype.setItem = function (key, value) {
        try {
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            localStorage.setItem(key, value);
        }
        catch (e) { }
    };
    LStorage.prototype.getItem = function (key) {
        try {
            var val = localStorage.getItem(key);
            if (val) {
                return val;
            }
            return null;
        }
        catch (e) {
            return null;
        }
    };
    LStorage.prototype.removeItem = function (key) {
        try {
            localStorage.removeItem(key);
        }
        catch (e) { }
    };
    LStorage.prototype.clear = function () {
        try {
            localStorage.clear();
        }
        catch (e) { }
    };
    Object.defineProperty(LStorage.prototype, "length", {
        get: function () {
            try {
                return localStorage.length;
            }
            catch (e) {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    return LStorage;
}(AbstractStorage_1.AbstractStorage));
exports.LStorage = LStorage;
exports.default = new LStorage();

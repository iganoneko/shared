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
 * Input/Output to extended sessionStorage
 */
var SStorage = /** @class */ (function (_super) {
    __extends(SStorage, _super);
    function SStorage() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    SStorage.prototype.setItem = function (key, value) {
        try {
            if (typeof value !== "string") {
                value = JSON.stringify(value);
            }
            sessionStorage.setItem(key, value);
        }
        catch (e) { }
    };
    SStorage.prototype.getItem = function (key) {
        try {
            var val = sessionStorage.getItem(key);
            if (val) {
                return val;
            }
            return null;
        }
        catch (e) {
            return null;
        }
    };
    SStorage.prototype.removeItem = function (key) {
        try {
            sessionStorage.removeItem(key);
        }
        catch (e) { }
    };
    SStorage.prototype.clear = function () {
        try {
            sessionStorage.clear();
        }
        catch (e) { }
    };
    Object.defineProperty(SStorage.prototype, "length", {
        get: function () {
            try {
                return sessionStorage.length;
            }
            catch (e) {
                return 0;
            }
        },
        enumerable: true,
        configurable: true
    });
    return SStorage;
}(AbstractStorage_1.AbstractStorage));
exports.SStorage = SStorage;
exports.default = new SStorage();

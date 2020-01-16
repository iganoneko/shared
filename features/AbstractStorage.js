"use strict";
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (Object.hasOwnProperty.call(mod, k)) result[k] = mod[k];
    result["default"] = mod;
    return result;
};
Object.defineProperty(exports, "__esModule", { value: true });
var ConvTo = __importStar(require("./ConvTo"));
var AbstractStorage = /** @class */ (function () {
    function AbstractStorage() {
    }
    AbstractStorage.prototype.getStr = function (key, altValue) {
        if (altValue === void 0) { altValue = null; }
        return ConvTo.str(this.getItem(key), altValue);
    };
    AbstractStorage.prototype.getBool = function (key, altValue) {
        return ConvTo.bool(this.getItem(key), altValue);
    };
    AbstractStorage.prototype.getObj = function (key, altValue) {
        if (altValue === void 0) { altValue = null; }
        return ConvTo.obj(this.getItem(key), altValue);
    };
    AbstractStorage.prototype.getNum = function (key, altValue) {
        return ConvTo.num(this.getItem(key), altValue);
    };
    AbstractStorage.prototype.getInt = function (key, altValue) {
        return ConvTo.inte(this.getItem(key), altValue);
    };
    AbstractStorage.prototype.hasItem = function (key) {
        return !!this.getItem(key);
    };
    AbstractStorage.prototype.removeItems = function (keys) {
        var _this = this;
        keys.forEach(function (key) {
            _this.removeItem(key);
        });
    };
    return AbstractStorage;
}());
exports.AbstractStorage = AbstractStorage;

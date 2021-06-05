"use strict";
exports.__esModule = true;
var Types_1 = require("./Types");
var Count = /** @class */ (function () {
    function Count(typeCount, cost, duration, includesAds, client) {
        this.endDate = new Date();
        this.typeCount = typeCount;
        this.cost = cost;
        this.duration = duration;
        this.includesAds = includesAds;
        this.client = client;
        this.startDate = new Date(Date.now());
        this.endDate.setDate(this.startDate.getDate() + duration);
    }
    Count.prototype.getTypeCount = function () {
        return Types_1["default"][this.typeCount];
    };
    Count.prototype.getCost = function () {
        return this.cost;
    };
    Count.prototype.getDuration = function () {
        return this.duration;
    };
    Count.prototype.getIncludesAds = function () {
        if (this.includesAds) {
            return "Includes ads";
        }
        else {
            return "No includes ads";
        }
    };
    Count.prototype.getClient = function () {
        return this.client;
    };
    Count.prototype.getStartDate = function () {
        return this.startDate;
    };
    Count.prototype.getEndtDate = function () {
        return this.endDate;
    };
    return Count;
}());
exports["default"] = Count;

"use strict";
exports.__esModule = true;
var Basic_1 = require("./Basic");
var Free_1 = require("./Free");
var Premiun_1 = require("./Premiun");
var Client = /** @class */ (function () {
    function Client() {
        this.count = new Free_1["default"](this);
    }
    Client.prototype.getName = function () {
        return this.name;
    };
    Client.prototype.setName = function (name) {
        this.name = name;
        return this;
    };
    Client.prototype.getSurname = function () {
        return this.surname;
    };
    Client.prototype.setSurname = function (surname) {
        this.surname = surname;
        return this;
    };
    Client.prototype.setDNI = function (DNI) {
        this.DNI = DNI;
        return this;
    };
    Client.prototype.getDNI = function () {
        return this.DNI;
    };
    Client.prototype.getAge = function () {
        return this.age;
    };
    Client.prototype.setSAge = function (age) {
        this.age = age;
        return this;
    };
    Client.prototype.getEmail = function () {
        return this.email;
    };
    Client.prototype.setEmail = function (email) {
        this.email = email;
        return this;
    };
    Client.prototype.getCount = function () {
        return this.count;
    };
    Client.prototype.setCount = function (typeCount) {
        switch (typeCount) {
            case 0:
                this.count = new Free_1["default"](this);
                break;
            case 1:
                this.count = new Basic_1["default"](this);
                break;
            case 2:
                this.count = new Premiun_1["default"](this);
                break;
        }
    };
    Client.prototype.getInfoClient = function () {
        return console.log('\nName: ' + this.getName() + '\n'
            + 'Surname: ' + this.getSurname() + '\n'
            + 'Mail: ' + this.getEmail() + '\n'
            + 'Info Count:\n'
            + ' - Type of count: ' + this.getCount().getTypeCount() + '\n'
            + ' - Cost: U$S ' + this.getCount().getCost() + '\n'
            + ' - Period of subscription: ' + this.getCount().getDuration() + ' days\n'
            + ' - Subscription Start: ' + this.getCount().getStartDate() + '\n'
            + ' - Subscription End: ' + this.getCount().getEndtDate() + '\n'
            + ' - Other Information: ' + this.getCount().getIncludesAds());
    };
    return Client;
}());
exports["default"] = Client;

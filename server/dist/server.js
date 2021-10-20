"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
var app_1 = require("./app");
var config_1 = __importDefault(require("./config/config"));
var TestController_controller_1 = require("./api/v1/controllers/TestController.controller");
var port = Number(config_1.default.server.PORT);
var controllers = [
    new TestController_controller_1.TestController()
];
new app_1.App(controllers, port).listen();

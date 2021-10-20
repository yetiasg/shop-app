"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.App = void 0;
var express_1 = __importDefault(require("express"));
var morgan_1 = __importDefault(require("morgan"));
var cors_1 = __importDefault(require("cors"));
var App = /** @class */ (function () {
    function App(controllers, port) {
        var _this = this;
        this.port = port;
        this._initializeMiddlewares = function () {
            _this.app.use((0, morgan_1.default)('dev'));
            _this.app.use((0, cors_1.default)({
                allowedHeaders: ['Content-Type', 'Authorization']
            }));
            _this.app.use(express_1.default.urlencoded({ extended: true }));
            _this.app.use(express_1.default.json());
        };
        this._initializeControllers = function (controllers) {
            controllers.forEach(function (controller) {
                _this.app.use('/', controller.router);
            });
        };
        this.listen = function () {
            _this.app.listen(_this.port, function () {
                console.log("Listening on port: " + _this.port);
            });
        };
        this.app = (0, express_1.default)();
        this._initializeMiddlewares();
        this._initializeControllers(controllers);
    }
    return App;
}());
exports.App = App;

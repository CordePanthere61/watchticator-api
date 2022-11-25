"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const cors_1 = __importDefault(require("cors"));
const helmet_1 = __importDefault(require("helmet"));
class App {
    constructor(routes) {
        var _a;
        this.app = (0, express_1.default)();
        this.port = process.env.PORT ? parseInt(process.env.PORT) : 3000;
        this.env = (_a = process.env.ENV) !== null && _a !== void 0 ? _a : 'dev';
        this.initializeMiddlewares();
        this.initializeControllers(routes);
    }
    listen() {
        this.app.listen(this.port, () => {
            console.log(`typescript server started on port: ${this.port}`);
        });
    }
    initializeMiddlewares() {
        this.app.use((0, cors_1.default)());
        this.app.use((0, helmet_1.default)());
        this.app.use(express_1.default.json());
        this.app.use(express_1.default.urlencoded({ extended: true }));
    }
    initializeControllers(routes) {
        routes.forEach(route => {
            this.app.use('/', route.router);
        });
    }
}
exports.default = App;

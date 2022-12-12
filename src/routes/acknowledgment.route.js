"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = require("express");
const base_validator_1 = require("../validators/base.validator");
const acknowledgment_controller_1 = __importDefault(require("../controllers/acknowledgment.controller"));
const acknowledgment_validator_1 = __importDefault(require("../validators/acknowledgment.validator"));
class AcknowledgmentRoute {
    constructor() {
        this.path = "/acknowledgment";
        this.router = (0, express_1.Router)();
        this.controller = new acknowledgment_controller_1.default();
        this.validator = new acknowledgment_validator_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.router.post(`${this.path}/create`, this.validator.create(), base_validator_1.validate, this.controller.create.bind(this.controller));
            this.router.post(`${this.path}/validate`, this.validator.validate(), base_validator_1.validate, this.controller.validate.bind(this.controller));
            this.router.post(`${this.path}/verify`, this.validator.verify(), base_validator_1.validate, this.controller.verify.bind(this.controller));
        });
    }
}
exports.default = AcknowledgmentRoute;

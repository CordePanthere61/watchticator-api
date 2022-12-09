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
const combinaison_controller_1 = __importDefault(require("../controllers/combinaison.controller"));
const combinaison_validator_1 = __importDefault(require("../validators/combinaison.validator"));
class CombinaisonRoute {
    constructor() {
        this.path = "/combinaison";
        this.router = (0, express_1.Router)();
        this.controller = new combinaison_controller_1.default();
        this.validator = new combinaison_validator_1.default();
        this.initializeRoutes();
    }
    initializeRoutes() {
        return __awaiter(this, void 0, void 0, function* () {
            this.router.post(`${this.path}/register`, this.validator.register(), base_validator_1.validate, this.controller.register.bind(this.controller));
            this.router.post(`${this.path}/websites`, this.validator.index(), base_validator_1.validate, this.controller.index.bind(this.controller));
        });
    }
}
exports.default = CombinaisonRoute;

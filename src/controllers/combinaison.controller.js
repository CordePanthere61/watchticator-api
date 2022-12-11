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
const combinaison_service_1 = __importDefault(require("../services/combinaison.service"));
class CombinaisonController {
    constructor() {
        this.service = new combinaison_service_1.default();
    }
    index(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json({
                    status: 200,
                    websites: yield this.service.getWebsitesWithMac(req.body.mac)
                });
            }
            catch (e) {
                return res.status(500).json({
                    status: 500,
                    message: e
                });
            }
        });
    }
    register(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.registerNewCombinaison(req.body.uuid, req.body.mac, req.body.movements);
                return res.status(200).json({
                    status: 200,
                    message: "Combinaison successfully registered."
                });
            }
            catch (e) {
                return res.status(500).json({
                    status: 500,
                    message: e
                });
            }
        });
    }
    remove(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.removeCombinaison(req.body.id);
                return res.status(200).json({
                    status: 200,
                    message: "Success"
                });
            }
            catch (e) {
                return res.status(500).json({
                    status: 500,
                    message: e
                });
            }
        });
    }
}
exports.default = CombinaisonController;

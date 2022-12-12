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
const acknowledgment_service_1 = __importDefault(require("../services/acknowledgment.service"));
class AcknowledgmentController {
    constructor() {
        this.service = new acknowledgment_service_1.default();
    }
    create(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let acknowledgment = yield this.service.create(req.body.website, req.body.user);
                return res.status(200).json({
                    status: 200,
                    acknowledgment: acknowledgment
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
    validate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                yield this.service.validate(req.body.website, req.body.movements, req.body.mac);
                return res.status(200).json({
                    status: 200,
                    message: "Acknowledgment successful"
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
    verify(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return res.status(200).json({
                    status: 200,
                    completed: yield this.service.verify(req.body.acknowledgment)
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
exports.default = AcknowledgmentController;

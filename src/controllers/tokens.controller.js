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
const crypto_1 = __importDefault(require("crypto"));
const tokens_service_1 = __importDefault(require("../services/tokens.service"));
class TokensController {
    constructor() {
        this.service = new tokens_service_1.default();
    }
    generate(req, res, next) {
        return __awaiter(this, void 0, void 0, function* () {
            // return res.status(200).send(`<img src="${await QRCode.toDataURL(crypto.randomUUID() + req.query.website)}"></img>`)
            return res.status(200).send(yield (crypto_1.default.randomUUID() + '|' + req.query.website));
        });
    }
    register(req, res, next) {
        this.service.registerNewCombinaison(req.query.uuid, req.query.combinaison, req.query.website)
            .then(() => {
            return res.status(200).json({
                uuid: req.query.uuid,
                combinaison: req.query.combinaison,
                website: req.query.website
            });
        })
            .catch((e) => {
            return res.status(500).json({
                error: e
            });
        });
    }
}
exports.default = TokensController;

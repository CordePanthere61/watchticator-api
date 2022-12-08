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
const utils_1 = require("../utils/utils");
const combinaison_broker_1 = __importDefault(require("../database/combinaison.broker"));
const tokens_broker_1 = __importDefault(require("../database/tokens.broker"));
class TokensService {
    constructor() {
        this.broker = new combinaison_broker_1.default();
        this.tokenBroker = new tokens_broker_1.default();
    }
    registerNewCombinaison(uuid, mac, movements) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                this.areMovementsValid(movements);
                let token = yield this.tokenBroker.find(uuid);
                yield this.broker.insert(token.website, mac, movements);
                this.tokenBroker.remove(token);
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    getWebsitesWithMac(mac) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                return this.broker.findAllByMac(mac);
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    areMovementsValid(movementsRaw) {
        let movements = movementsRaw.split('|');
        movements.every(element => {
            if (!utils_1.possibleCombinaisons.includes(element)) {
                throw "Combinaison invalid";
            }
        });
    }
}
exports.default = TokensService;

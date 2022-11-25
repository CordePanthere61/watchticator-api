"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const tokens_broker_1 = __importDefault(require("../database/tokens.broker"));
const utils_1 = require("../utils/utils");
class TokensService {
    constructor() {
        this.broker = new tokens_broker_1.default();
    }
    registerNewCombinaison(uuid, combinaison, website) {
        return new Promise((resolve, reject) => {
            if (!this.isCombinaisonValid(combinaison)) {
                return reject('Invalid combinaison');
            }
            this.broker.insertNewToken(uuid, combinaison, website)
                .then(() => resolve())
                .catch(error => reject(error));
        });
    }
    isCombinaisonValid(combinaisonRaw) {
        let combinaisons = combinaisonRaw.split('|');
        return combinaisons.every(element => {
            return utils_1.possibleCombinaisons.includes(element);
        });
        // combinaisons.forEach(element => {
        //     console.log(element);
        //     if (!possibleCombinaisons.includes(element)) return false;
        // });
        // return false;
    }
}
exports.default = TokensService;

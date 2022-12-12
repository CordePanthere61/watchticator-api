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
const acknowledgment_broker_1 = __importDefault(require("../database/acknowledgment.broker"));
const combinaison_broker_1 = __importDefault(require("../database/combinaison.broker"));
class AcknowledgmentService {
    constructor() {
        this.broker = new acknowledgment_broker_1.default();
        this.combinaisonBroker = new combinaison_broker_1.default();
    }
    create(website, user) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let combinaison = yield this.combinaisonBroker.findByWebsiteAndUserId(website, user);
                return yield this.broker.insert(combinaison);
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    validate(website, movements, mac) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let combinaison = yield this.combinaisonBroker.findByWebsiteAndMac(website, mac);
                let acknowledgment = yield this.broker.findByCombinaisonId(combinaison.id);
                yield this.broker.completeAcknowledgment(acknowledgment.id);
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    verify(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let res = yield this.broker.findById(id);
                return res.completed;
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
}
exports.default = AcknowledgmentService;

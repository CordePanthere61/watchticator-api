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
const base_broker_1 = __importDefault(require("./base.broker"));
const pg_1 = require("@databases/pg");
class AcknowledgmentBroker extends base_broker_1.default {
    insert(combinaison) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connection = yield this.getConnection();
                let date = new Date(Date.now()).toISOString();
                let acknowledgmentId = yield connection.query((0, pg_1.sql) `INSERT INTO "acknowledgment" (id_combinaison, "time") VALUES (${combinaison.id}, ${date}) RETURNING ID`);
                return {
                    id: acknowledgmentId.at(0).id,
                    id_combinaison: combinaison.id,
                    completed: false,
                    time: date
                };
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    findByCombinaisonId(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connection = yield this.getConnection();
                let res = yield connection.query((0, pg_1.sql) `SELECT * FROM "acknowledgment" WHERE id_combinaison = ${id} AND completed = false`);
                if (!res.length) {
                    throw "No acknowledgment pending with this combinaison";
                }
                return {
                    id: res.at(0).id,
                    id_combinaison: res.at(0).id_combinaison,
                    time: res.at(0).time,
                    completed: res.at(0).completed
                };
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    completeAcknowledgment(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connection = yield this.getConnection();
                yield connection.query((0, pg_1.sql) `UPDATE "acknowledgment" SET completed = true WHERE id = ${id}`);
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
    findById(id) {
        return __awaiter(this, void 0, void 0, function* () {
            try {
                let connection = yield this.getConnection();
                console.log("IDDDDDDDDDDDD : " + id);
                let res = yield connection.query((0, pg_1.sql) `SELECT * FROM "acknowledgment" WHERE id = ${id}`);
                if (!res.length) {
                    throw "Invalid acknowledgment id";
                }
                return {
                    id: res.at(0).id,
                    id_combinaison: res.at(0).id_combinaison,
                    time: res.at(0).time,
                    completed: res.at(0).completed,
                };
            }
            catch (e) {
                console.log(e);
                throw e;
            }
        });
    }
}
exports.default = AcknowledgmentBroker;
